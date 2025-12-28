import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AppHome() {
  const [theme, setTheme] = useState('light'); // Default theme value
  const isBrowser = typeof window !== 'undefined'; // Check if the window object exists

  useEffect(() => {
    if (isBrowser) { // Ensure code runs only in a browser environment
      const storedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' theme
      document.body.setAttribute('data-theme', storedTheme);
      setTheme(storedTheme);
    }
  }, []); // Only run this effect on mount

  const toggleTheme = () => {
    if (isBrowser) { // Check again for browser environment
      const newTheme = theme === 'light' ? 'dark' : 'light';
      document.body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      setTheme(newTheme);
    }
  };

  return (
    <div>
      {/* Header */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '1rem 2rem',
          backgroundColor: theme === 'dark' ? '#333' : '#fff',
          boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
          color: theme === 'dark' ? '#fff' : '#333',
        }}
      >
        <span style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>
          Memory Weaver
        </span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button onClick={toggleTheme} style={{ fontSize: '1.2rem', cursor: 'pointer', backgroundColor: 'transparent', border: 'none' }}>
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link href="/login" passHref>
            <a style={{ color: theme === 'dark' ? '#fff' : '#333', fontWeight: '600', textDecoration: 'none' }}>Log In</a>
          </Link>
          <Link href="/get-started" passHref>
            <a style={{ color: theme === 'dark' ? '#fff' : '#333', fontWeight: '600', textDecoration: 'none' }}>Get Started</a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section
        style={{
          backgroundImage: 'url(/background.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          padding: '5rem 2rem',
          textAlign: 'center',
          color: '#fff',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontFamily: "'Playfair Display', serif",
            fontWeight: 'bold',
            marginBottom: '1rem',
          }}
        >
          Treasured Tales
        </h1>
        <h2
          style={{
            fontSize: '1.5rem',
            marginBottom: '1.5rem',
            fontWeight: '300',
            color: 'rgba(255,255,255,0.8)',
          }}
        >
          The Stories We Live
        </h2>
        <p
          style={{
            fontSize: '1rem',
            maxWidth: '600px',
            margin: '0 auto 2rem',
          }}
        >
          Transform your child's real-life adventures into personalized storybooks made just for them. Preserve precious memories, bring them to life with AI-crafted narratives, and create keepsakes your family will treasure for generations.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button
            style={{
              padding: '1rem 2rem',
              backgroundColor: '#ff6200',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            Start Your First Storybook
          </button>
          <button
            style={{
              padding: '1rem 2rem',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontWeight: 'bold',
            }}
          >
            See How It Works
          </button>
        </div>
      </section>

      {/* Additional Sections */}
      <section>
        {/* 'How It Works' content */}
      </section>
    </div>
  );
}
      {/* Additional sections */}
      {/* Add your 'How It Works' section here */}
    {/* How It Works Section */}
<section
  style={{
    padding: '4rem 2rem',
    backgroundColor: theme === 'dark' ? '#f1f1f1' : '#f9f9f9',
    textAlign: 'center',
  }}
>
  <h2
    style={{
      fontSize: '2.5rem',
      fontFamily: "'Playfair Display', serif",
      fontWeight: 'bold',
      marginBottom: '1rem',
      color: theme === 'dark' ? '#444' : '#333',
    }}
  >
    How It Works
  </h2>
  <p
    style={{
      fontSize: '1.2rem',
      marginBottom: '3rem',
      color: theme === 'dark' ? '#666' : '#555',
    }}
  >
    Create beautiful storybooks in three simple steps
  </p>

  {/* Cards */}
  <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', flexWrap: 'wrap' }}>
    {/* Card 1: Capture Moments */}
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        width: '300px',
        textAlign: 'center',
      }}
    >
      <img
        src="/icons/camera-icon.svg"
        alt="Capture Moments"
        style={{
          width: '50px',
          height: '50px',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>Capture Moments</h3>
      <p style={{ fontSize: '1rem', color: '#555' }}>
        Upload photos and write short descriptions of your child's daily adventures, milestones, and precious memories.
      </p>
    </div>

    {/* Card 2: AI Narrative */}
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        width: '300px',
        textAlign: 'center',
      }}
    >
      <img
        src="/icons/magic-wand-icon.svg"
        alt="AI Narrative"
        style={{
          width: '50px',
          height: '50px',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>AI Narrative</h3>
      <p style={{ fontSize: '1rem', color: '#555' }}>
        Our AI weaves your collected moments into a cohesive, heartfelt story that brings your memories to life.
      </p>
    </div>

    {/* Card 3: Download & Print */}
    <div
      style={{
        backgroundColor: '#fff',
        borderRadius: '12px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '2rem',
        width: '300px',
        textAlign: 'center',
      }}
    >
      <img
        src="/icons/download-icon.svg"
        alt="Download & Print"
        style={{
          width: '50px',
          height: '50px',
          marginBottom: '1rem',
        }}
      />
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: '#333' }}>Download & Print</h3>
      <p style={{ fontSize: '1rem', color: '#555' }}>
        Download your finished storybook as a print-ready PDF or digital version to treasure forever.
      </p>
    </div>
  </div>
</section>
</div>
);
}
