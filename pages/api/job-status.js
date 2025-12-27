import { supabaseServer } from '../../lib/supabaseServer';

export default async function handler(req, res) {
  if (req.method !== 'GET') return res.status(405).json({ error: 'Method not allowed' });

  const { id } = req.query || {};
  if (!id) return res.status(400).json({ error: 'Missing job id' });
  
  try {
    const { data, error } = await supabaseServer.from('generation_jobs').select('*').eq('id', id).single();
    if (error) return res.status(404).json({ error: 'Job not found' });
    return res.status(200).json({ ok: true, job: data });
  } catch (err) {
    console.error('job-status error:', err);
    return res.status(500).json({ error: err.message || String(err) });
  }
}
