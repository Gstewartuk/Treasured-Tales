import { supabaseServer } from '../../lib/supabaseServer';

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { childId, tone = 'gentle', ageRange = '3-5' } = req.body || {};
  if (!childId) return res.status(400).json({ error: 'Missing childId' });

  try {
    const { data, error } = await supabaseServer.from('generation_jobs').insert([{
      child_id: childId,
      tone,
      age_range: ageRange,
      status: 'pending'
    }]).select().single();

    if (error) throw error;
    return res.status(200).json({ ok: true, job: data });
  } catch (err) {
    console.error('create-job error:', err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
