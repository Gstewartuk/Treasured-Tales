import { useEffect, useState } from 'react';
import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link';

export default function Library() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  async function fetchBooks() {
    const { data } = await supabase.from('books').select('*').order('created_at', { ascending: false });
    setBooks(data || []);
  }

  return (
    <main className="container" style={{ paddingTop: 56 }}>
      <h2>Library</h2>
      <div style={{ marginTop: 12 }}>
        {books.length === 0 && <div>No books yet.</div>}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(200px,1fr))', gap: 12 }}>
          {books.map(b => (
            <div key={b.id} className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontWeight: 700 }}>{(b.meta && b.meta.title) || 'Untitled'}</div>
                  <small style={{ color: '#666' }}>{new Date(b.created_at).toLocaleDateString()}</small>
                </div>
                <div>
                  <a href={b.url} target="_blank" rel="noreferrer" className="btn primary">Open</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
