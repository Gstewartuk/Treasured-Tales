import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function AppHome() {
  const [theme, setTheme] = useState('light'); // Default theme value
  const isBrowser = typeof window !== 'undefined'; // Check if the window object exists

  useEffect(() => {
    if (isBrowser) {  // Ensure code runs only in a browser environment
      const storedTheme = localStorage.getItem('theme') || 'light'; // Default to 'light' theme
      document.body.setAttribute('data-theme', storedTheme);
      setTheme(storedTheme);
    }
  }, []); // Only run this effect on mount

  const toggleTheme = () => {
    if (isBrowser) {  // Check again for browser environment
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

      {/* Additional sections */}
      {/* Add your 'How It Works' section here */}
    </div>
  );
}