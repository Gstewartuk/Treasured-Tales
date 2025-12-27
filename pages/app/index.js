import Head from 'next/head';
import Link from 'next/link';

export default function AppHome() {
  return (
    <>
      {/* SEO Metadata */}
      <Head>
        <title>Memory Weaver - The Stories We Live, The Memories We Keep</title>
        <meta
          name="description"
          content="Transform your child's everyday adventures into beautiful, personalized storybooks. Capture memories, generate AI-powered narratives, and download print-ready treasures."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Page Content */}
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          padding: '2rem',
          background: '#e3f2fd',
          fontFamily: "'Architects Daughter', cursive",
        }}
      >
        {/* Header */}
        <h1
          style={{
            fontSize: '3rem',
            color: '#1e88e5',
            marginBottom: '1rem',
            textAlign: 'center',
          }}
        >
          Memory Weaver
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: '1.5rem',
            color: '#555',
            textAlign: 'center',
            maxWidth: '700px',
            marginBottom: '2rem',
          }}
        >
          Transform your family’s everyday adventures into beautiful, personalized storybooks. Capture memories, generate AI-powered narratives, and preserve treasures to share forever.
        </p>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            gap: '1rem',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1rem',
          }}
        >
          <Link href="/app/library">
            <a
              style={{
                padding: '1rem 2rem',
                background: '#1e88e5',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#1565c0')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#1e88e5')}
            >
              Explore Library
            </a>
          </Link>
          <Link href="/app/children/[id]">
            <a
              style={{
                padding: '1rem 2rem',
                background: '#fff',
                color: '#1e88e5',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '2px solid #1e88e5',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#f3f3f3')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              View Profiles
            </a>
          </Link>
        </div>

        {/* Footer */}
        <p
          style={{
            fontSize: '1rem',
            color: '#999',
            textAlign: 'center',
          }}
        >
          © 2025 Memory Weaver | A Treasured Tales Project
        </p>
      </div>
    </>
  );
}
