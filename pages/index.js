import Head from 'next/head';
import Link from 'next/link';

export default function AppHome() {
  return (
    <>
      {/* SEO and Google Fonts */}
      <Head>
        <title>Memory Weaver - The Stories We Live, The Memories We Keep</title>
        <meta
          name="description"
          content="Transform your child's everyday adventures into beautiful, personalized storybooks. Capture memories, generate AI-powered narratives, and download print-ready treasures."
        />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Architects+Daughter&display=swap"
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
          textAlign: 'center',
          padding: '2rem',
          background: 'linear-gradient(to bottom, #FFDEE9, #B5FFFC)',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Page Header */}
        <h1
          style={{
            fontSize: '4rem',
            color: '#FF6F61',
            marginBottom: '1rem',
            fontFamily: "'Architects Daughter', cursive",
          }}
        >
          Memory Weaver
        </h1>

        {/* Subheading */}
        <p
          style={{
            fontSize: '1.5rem',
            color: '#555',
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
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {/* Library Button */}
          <Link href="/app/library">
            <a
              style={{
                padding: '1rem 2rem',
                background: '#FF6F61',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#E5564C')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#FF6F61')}
            >
              Explore Library
            </a>
          </Link>

          {/* Profiles Button */}
          <Link href="/app/children/[id]">
            <a
              style={{
                padding: '1rem 2rem',
                background: '#fff',
                color: '#FF6F61',
                textDecoration: 'none',
                borderRadius: '8px',
                border: '2px solid #FF6F61',
                fontSize: '1.2rem',
                fontWeight: 'bold',
                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease',
              }}
              onMouseEnter={(e) => (e.target.style.backgroundColor = '#FFF3F0')}
              onMouseLeave={(e) => (e.target.style.backgroundColor = '#fff')}
            >
              View Profiles
            </a>
          </Link>
        </div>
      </div>
    </>
  );
}
        </div>
      </div>
    </div>
  );
}
