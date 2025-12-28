import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AppHome() {
  const [theme, setTheme] = useState('light');
  const isBrowser = typeof window !== 'undefined';

  useEffect(() => {
    if (isBrowser) {
      const storedTheme = localStorage.getItem('theme') || 'light';
      document.body.setAttribute('data-theme', storedTheme);
      setTheme(storedTheme);
    }
  }, [isBrowser]);

  const toggleTheme = () => {
    if (isBrowser) {
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
          <Link href="/login">
            <a style={{ color: theme === 'dark' ? '#fff' : '#333', fontWeight: '600', textDecoration: 'none' }}>Log In</a>
          </Link>
          <Link href="/get-started">
            <a
              style={{
                padding: '0.5rem 1rem',
                backgroundColor: '#ff6200',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
              Get Started
            </a>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '4rem', fontFamily: "'Playfair Display', serif", fontWeight: '700' }}>
          Treasured Tales
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontFamily: "'Open Sans', sans-serif", marginBottom: '1.5rem' }}>
          The Stories We Live
        </h2>
        <p style={{ maxWidth: '800px', fontSize: '1.2rem', marginBottom: '2rem' }}>
          Transform your child's real-life adventures into personalized storybooks made just for them. Preserve precious memories and create
          keepsakes your family will treasure for generations.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
          <Link href="/start-storybook">
            <a
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#ff6200',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <img src="/icons/open-book-icon.svg" alt="Open Book" style={{ width: '20px', height: '20px' }} />
              Start Your First Storybook
            </a>
          </Link>
          <Link href="/how-it-works">
            <a
              style={{
                padding: '1rem 2rem',
                backgroundColor: '#333',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
              }}
            >
              <img src="/icons/magical-wand-icon.svg" alt="Magical Wand" style={{ width: '20px', height: '20px' }} />
              See How It Works
            </a>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer
        style={{
          textAlign: 'center',
          padding: '3rem 1rem',
          backgroundColor: theme === 'dark' ? '#222' : '#f9f9f9',
          color: theme === 'dark' ? '#fff' : '#555',
        }}
      >
        <p style={{ fontSize: '1rem', color: theme === 'dark' ? '#aaa' : '#999' }}>
          Made with ❤️ for families everywhere |{' '}
          <Link href="/privacy">
            <a style={{ color: '#8736de', textDecoration: 'none' }}>Privacy Policy</a>
          </Link>
        </p>
      </footer>
    </div>
  );
}
