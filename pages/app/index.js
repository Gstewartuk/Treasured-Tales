import React, { useEffect, useState } from 'react';
import Link from 'next/link'; // Import Link for navigation

export default function AppHome() {
  const [theme, setTheme] = useState('light'); // Default theme state
  const isBrowser = typeof window !== 'undefined'; // Check if executing in the browser

  // Initialize theme only if in the browser
  useEffect(() => {
    if (isBrowser) {
      const storedTheme = localStorage.getItem('theme') || 'light'; // Retrieve or set default
      document.body.setAttribute('data-theme', storedTheme); // Apply theme to body
      setTheme(storedTheme); // Update state
    }
  }, [isBrowser]);

  // Handle theme toggle
  const toggleTheme = () => {
    if (isBrowser) {
      const newTheme = theme === 'light' ? 'dark' : 'light'; // Determine new theme
      document.body.setAttribute('data-theme', newTheme); // Update theme attribute
      localStorage.setItem('theme', newTheme); // Persist theme in local storage
      setTheme(newTheme); // Update state
    }
  };

  // Header Section
  return (
    <>
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
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>
          Memory Weaver
        </h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <button
            onClick={toggleTheme}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              fontSize: '1.2rem',
              cursor: 'pointer',
              color: theme === 'dark' ? '#fff' : '#333',
            }}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
          <Link href="/login">
            <a style={{ color: theme === 'dark' ? '#fff' : '#333', textDecoration: 'none', fontWeight: '600' }}>
              Log In
            </a>
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
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>Treasured Tales</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '2rem', color: theme === 'dark' ? '#aaa' : '#555' }}>
          Transform your child's real-life adventures into personalized storybooks made just for them.
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
              }}
            >
              Start Your First Storybook
            </a>
          </Link>
          <Link href="/how-it-works">
            <a
              style={{
                padding: '1rem 2rem',
                backgroundColor: theme === 'dark' ? '#555' : '#333',
                color: '#fff',
                textDecoration: 'none',
                borderRadius: '4px',
                fontWeight: 'bold',
              }}
            >
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
    </>
  );
}
