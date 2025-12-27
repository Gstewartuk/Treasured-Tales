import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function EntryForm({ childId, onSaved }) {
  const [note, setNote] = useState('');
  const [file, setFile] = useState(null);
  const [saving, setSaving] = useState(false);

  async function uploadFile(file) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}_${Math.random().toString(36).slice(2)}.${fileExt}`;
    const { data, error } = await supabase.storage.from('images').upload(fileName, file, {
      cacheControl: '3600',
      upsert: false
    });
    if (error) throw error;
    const publicUrl = supabase.storage.from('images').getPublicUrl(data.path).data.publicUrl;
    return publicUrl;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!childId) return alert('Missing child id');
    setSaving(true);
    try {
      let photoUrl = null;
      if (file) {
        photoUrl = await uploadFile(file);
      }
      const payload = { child_id: childId, note, photo_url: photoUrl };
      const res = await fetch('/api/upload-entry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setNote('');
      setFile(null);
      if (onSaved) onSaved();
    } catch (err) {
      alert('Error saving entry: ' + err.message);
    } finally {
      setSaving(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 10, maxWidth: 680 }}>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Quick note about this moment"
        rows={3}
        style={{ padding: 12, borderRadius: 8 }}
      />
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files?.[0] || null)} />
      <button className="btn primary" type="submit" disabled={saving}>
        {saving ? 'Saving...' : 'Save entry'}
      </button>
    </form>
  );
}
