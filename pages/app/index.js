import Link from 'next/link';

export default function AppHome() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: '#e3f2fd',
      padding: '1rem',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1 style={{
        color: '#1e88e5',
        fontSize: '3rem',
        textAlign: 'center',
        marginBottom: '1rem',
      }}>
        Memory Weaver
      </h1>
      <p style={{
        color: '#555',
        fontSize: '1.5rem',
        textAlign: 'center',
        maxWidth: '700px',
        marginBottom: '2rem',
      }}>
        Capture family moments and weave them into beautiful storybooks to share with your loved ones.
      </p>
      <div style={{
        display: 'flex',
        gap: '1rem',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Link href="/app/library">
          <a style={{
            textDecoration: 'none',
            background: '#1e88e5',
            color: 'white',
            padding: '1rem 2rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            textAlign: 'center',
            fontSize: '1.2rem',
            transition: 'background 0.3s',
          }}>
            Explore Library
          </a>
        </Link>
        <Link href="/app/children/[id]">
          <a style={{
            textDecoration: 'none',
            background: '#f5f5f5',
            color: '#1e88e5',
            padding: '1rem 2rem',
            fontWeight: 'bold',
            borderRadius: '8px',
            border: '2px solid #1e88e5',
            textAlign: 'center',
            fontSize: '1.2rem',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            transition: 'background 0.3s',
          }}>
            View Profiles
          </a>
        </Link>
      </div>
    </div>
  );
}
