// Minimal worker server for production PDF generation
// Deploy to Render/Railway/DigitalOcean/App Platform as a Web Service or Docker
//
// Required env vars:
// - SUPABASE_URL
// - SUPABASE_SERVICE_ROLE_KEY
// - AI_API_KEY
// - WORKER_SECRET
// - PORT (optional - Render sets this automatically)

const express = require('express');
const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const puppeteer = require('puppeteer');
const { createClient } = require('@supabase/supabase-js');
const bookTemplate = require('./bookTemplate');

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const AI_API_KEY = process.env.AI_API_KEY;
const WORKER_SECRET = process.env.WORKER_SECRET;

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error('Missing SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY');
  process.exit(1);
}
if (!AI_API_KEY) {
  console.error('Missing AI_API_KEY');
  process.exit(1);
}
if (!WORKER_SECRET) {
  console.error('Missing WORKER_SECRET');
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, { auth: { persistSession: false } });

const app = express();
app.use(bodyParser.json({ limit: '10mb' }));

// Health check
app.get('/', (req, res) => res.send({ ok: true, service: 'memory-weaver-worker' }));

// POST /generate-book
// Body: { childId: "<uuid>", tone?: "gentle", ageRange?: "3-5" }
// Header: x-worker-secret: <WORKER_SECRET>
app.post('/generate-book', async (req, res) => {
  try {
    // Validate shared secret
    const incomingSecret = req.headers['x-worker-secret'];
    if (!incomingSecret || incomingSecret !== WORKER_SECRET) {
      return res.status(401).json({ error: 'Unauthorized' });
    }

    const { childId, tone = 'gentle', ageRange = '3-5' } = req.body || {};
    if (!childId) return res.status(400).json({ error: 'Missing childId' });

    // 1) Fetch child profile & entries
    const { data: child, error: childErr } = await supabase
      .from('child_profiles')
      .select('*')
      .eq('id', childId)
      .single();
    if (childErr) throw childErr;

    const { data: entries, error: entriesErr } = await supabase
      .from('entries')
      .select('*')
      .eq('child_id', childId)
      .order('created_at', { ascending: true });
    if (entriesErr) throw entriesErr;

    // 2) Call AI to generate story JSON
    const prompt = `
You are an affectionate storyteller. Create a storybook-style narrative for ${child?.name || 'a child'}, age ${ageRange}, tone ${tone}.
Entries:
${(entries || []).map((e, i) => `${i + 1}. ${e.created_at || ''} — ${e.note || ''}${e.photo_url ? ` (photo: ${e.photo_url})` : ''}`).join('\n')}
Respond with JSON exactly: { "title": "...", "sections": [{ "heading": "...", "text": "..." }], "suggestedTheme": "..." }
    `;

    const aiResp = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${AI_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        model: 'gpt-4o-mini',
        messages: [
          { role: 'system', content: 'You are a friendly story writer.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1200,
        temperature: 0.8
      })
    });

    if (!aiResp.ok) {
      const text = await aiResp.text();
      console.error('AI API error:', text);
      return res.status(502).json({ error: 'AI generation failed', details: text });
    }

    const aiJson = await aiResp.json();
    const aiText = aiJson.choices?.[0]?.message?.content || aiJson.choices?.[0]?.text || '';

    // Parse response as JSON, or fallback to a simple text section
    let story;
    try {
      story = JSON.parse(aiText);
    } catch (e) {
      story = {
        title: `${child?.name || 'Story'}'s Memories`,
        sections: [{ heading: 'Memories', text: aiText }],
        suggestedTheme: 'classic'
      };
    }

    // 3) Generate HTML
    const html = bookTemplate({
      title: story.title || `${child?.name}'s Story`,
      childName: child?.name || 'Child',
      sections: story.sections || [{ heading: 'Memories', text: story.text || '' }],
      generatedAt: new Date().toLocaleString()
    });

    // 4) Render PDF using Puppeteer (system Chromium on Render/Railway)
    const browser = await puppeteer.launch({
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
      headless: true
    });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0' });
    const pdfBuffer = await page.pdf({ format: 'A4', printBackground: true });
    await browser.close();

    // 5) Upload PDF to Supabase Storage (books bucket)
    const fileName = `books/${childId}_${Date.now()}.pdf`;
    const { data: uploadData, error: uploadErr } = await supabase.storage.from('books').upload(fileName, pdfBuffer, {
      contentType: 'application/pdf',
      upsert: false
    });
    if (uploadErr) throw uploadErr;

    const publicUrl = supabase.storage.from('books').getPublicUrl(uploadData.path).data.publicUrl;

    // 6) Record in DB (books table)
    await supabase.from('books').insert([{ child_id: childId, url: publicUrl, meta: { title: story.title } }]);

    return res.status(200).json({ ok: true, publicUrl });
  } catch (err) {
    console.error('Worker error:', err);
    return res.status(500).json({ error: err.message || String(err) });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Worker listening on ${PORT}`);
});
