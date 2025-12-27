export default function EntryList({ entries = [] }) {
  if (!entries || entries.length === 0) return <div>No entries yet.</div>;
  return (
    <div style={{ display: 'grid', gap: 10 }}>
      {entries.map((e) => (
        <div key={e.id} className="card" style={{ display: 'flex', gap: 12 }}>
          {e.photo_url && (
            <img
              src={e.photo_url}
              alt="entry"
              style={{ width: 90, height: 90, objectFit: 'cover', borderRadius: 8 }}
            />
          )}
          <div>
            <div style={{ color: '#6b46c1', fontWeight: 600 }}>{e.note || 'Photo'}</div>
            <small style={{ color: '#666' }}>{new Date(e.created_at).toLocaleString()}</small>
          </div>
        </div>
      ))}
    </div>
  );
}
