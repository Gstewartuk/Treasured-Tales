import Link from 'next/link';

export default function AppHome() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Treasured Tales App</h1>
      <p>Choose an option:</p>
      <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem' }}>
        <Link href="/app/library">
          <a style={{ padding: '1rem', background: '#6b46c1', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
            Library
          </a>
        </Link>
        <Link href="/app/children/[id]">
          <a style={{ padding: '1rem', background: '#6b46c1', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>
            Profiles
          </a>
        </Link>
      </div>
    </main>
  );
}
