import Link from 'next/link';

export default function Home() {
  return (
    <main style={{ padding: '2rem', textAlign: 'center' }}>
      <h1>Welcome to Treasured Tales</h1>
      <p>Create storybooks from your family's precious memories with ease!</p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/app">
          <a style={{ padding: '1rem', background: '#6b46c1', color: 'white', borderRadius: '8px', textDecoration: 'none' }}>Enter App</a>
        </Link>
      </div>
    </main>
  );
}
