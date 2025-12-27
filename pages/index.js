import Link from 'next/link';

export default function AppHome() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#f9f9f9',
      padding: '2rem',
    }}>
      <div style={{
        maxWidth: '700px',
        textAlign: 'center',
        background: 'white',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        padding: '2rem 1.5rem',
      }}>
        <h1 style={{
          fontSize: '2.5rem',
          marginBottom: '1rem',
          color: '#6b46c1',
          fontWeight: 'bold',
        }}>
          Welcome to Treasured Tales
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#555',
          marginBottom: '2rem',
        }}>
          Your family memories deserve a special place. Generate storybooks and preserve precious moments with ease.
        </p>
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '1rem',
          marginTop: '1.5rem',
        }}>
          <Link href="/app/library">
            <a style={{
              padding: '1rem 2rem',
              background: '#6b46c1',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
            }}>
              Visit Library
            </a>
          </Link>
          <Link href="/app/children/[id]">
            <a style={{
              padding: '1rem 2rem',
              background: '#f3f3f3',
              color: '#6b46c1',
              textDecoration: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              fontWeight: 'bold',
              boxShadow: '0 2px 4px rgba(0,0,0,0.15)',
              border: '1px solid #ddd',
            }}>
              View Profiles
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
