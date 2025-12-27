import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { supabase } from '../../../lib/supabaseClient';
import EntryForm from '../../../components/EntryForm';
import EntryList from '../../../components/EntryList';

export default function ChildProfile() {
  const router = useRouter();
  const { id } = router.query;
  const [profile, setProfile] = useState(null);
  const [entries, setEntries] = useState([]);
  const [job, setJob] = useState(null);
  const [polling, setPolling] = useState(false);

  useEffect(() => {
    if (!id) return;
    fetchProfile();
    fetchEntries();
  }, [id]);

  async function fetchProfile() {
    const { data } = await supabase.from('child_profiles').select('*').eq('id', id).single();
    setProfile(data);
  }

  async function fetchEntries() {
    const { data } = await supabase.from('entries').select('*').eq('child_id', id).order('created_at', { ascending: true });
    setEntries(data || []);
  }

  async function createJob(tone = 'gentle', ageRange = '3-5') {
    try {
      const res = await fetch('/api/create-job', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ childId: id, tone, ageRange })
      });
      const data = await res.json();
      if (data?.job) {
        setJob(data.job);
        startPollingStatus(data.job.id);
      } else {
        alert('Failed to create job: ' + (data.error || 'unknown'));
      }
    } catch (err) {
      alert('Error creating job: ' + err.message);
    }
  }

  function startPollingStatus(jobId) {
    if (polling) return;
    setPolling(true);
    const interval = setInterval(async () => {
      const r = await fetch(`/api/job-status?id=${jobId}`);
      const d = await r.json();
      if (!d.ok) return;
      setJob(d.job);
      if (d.job.status === 'done' || d.job.status === 'error') {
        clearInterval(interval);
        setPolling(false);
      }
    }, 3000);
  }

  return (
    <main className="container" style={{ paddingTop: 56 }}>
      <header style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          <h2>{profile?.name || '...'}</h2>
          <small style={{ color: '#666' }}>Profile</small>
        </div>
      </header>

      <section style={{ marginTop: 18 }}>
        <EntryForm childId={id} onSaved={fetchEntries} />
      </section>

      <section style={{ marginTop: 18 }}>
        <h3>Entries</h3>
        <EntryList entries={entries} />
      </section>

      <section style={{ marginTop: 28 }}>
        <h3>Generate storybook (async)</h3>
        <p style={{ color: '#6b6b6b' }}>Click generate to queue a book; link shown when ready.</p>
        <div style={{ display: 'flex', gap: 12 }}>
          <button className="btn primary" onClick={() => createJob('whimsical', '1-3')}>Queue (Whimsical / Toddler)</button>
          <button className="btn ghost" onClick={() => createJob('adventurous', '5-8')}>Queue (Adventure / Older)</button>
        </div>
        {job && (
          <div style={{ marginTop: 12 }}>
            <div>Status: <strong>{job.status}</strong></div>
            {job.status === 'done' && <a href={job.result_url} target="_blank" rel="noreferrer" className="btn primary">Download</a>}
            {job.status === 'error' && <div style={{ color: 'red' }}>Error: {job.error_text}</div>}
          </div>
        )}
      </section>
    </main>
  );
}
