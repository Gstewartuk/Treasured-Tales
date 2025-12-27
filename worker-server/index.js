// Worker service for handling storybook generation jobs.
// Processes generation_jobs from Supabase and uploads PDFs after completion.
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
const POLL_INTERVAL_MS = parseInt(process.env.POLL_INTERVAL_MS || '5000', 10);

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

app.get('/', (req, res) => res.json({ ok: true, service: 'memory-weaver-worker' }));

app.post('/generate-job', async (req, res) => {
  const secret = req.headers['x-worker-secret'];
  if (secret !== WORKER_SECRET) return res.status(401).json({ error: 'Unauthorized' });
  try {
    // Claim and process a single job
    const result = await processOneJob();
    if (!result) return res.status(200).json({ ok: true, message: 'No pending jobs' });
    return res.status(200).json({ ok: true, job: result });
  } catch (err) {
    console.error('generate-job error', err);
    return res.status(500).json({ error: err.message || String(err) });
  }
});
