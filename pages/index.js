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
        {/* Logo */}
        <h1 style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: "'Playfair Display', serif" }}>
          Memory Weaver
        </h1>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Light/Dark Mode Toggle */}
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

          {/* Log In Link */}
          <a href="/login" style={{ color: theme === 'dark' ? '#fff' : '#333', textDecoration: 'none', fontWeight: '600' }}>
            Log In
          </a>

          {/* Get Started Button */}
          <a
            href="/get-started"
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
        </div>
      </header>
    </>
  );
}
        <main style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}>
          {/* Hero Section */}
          <section style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <p style={{ fontSize: '1.2rem', maxWidth: '800px', margin: '0 auto' }}>
              Transform your child's real-life adventures into personalized storybooks. Preserve precious memories, bring them to life with AI-crafted narratives, and create keepsakes your family will treasure for generations.
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', marginTop: '2rem' }}>
              <Link href="/start-storybook">
                <a
                  style={{
                    padding: '1rem 2rem',
                    backgroundColor: '#8736de',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: '8px',
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
                    backgroundColor: '#f5f5f5',
                    color: '#8736de',
                    textDecoration: 'none',
                    borderRadius: '8px',
                    fontWeight: 'bold',
                  }}
                >
                  See How It Works
                </a>
              </Link>
            </div>
          </section>

          {/* How It Works Section */}
          <section style={{ marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2rem', textAlign: 'center', marginBottom: '3rem' }}>How It Works</h2>
            <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#8736de' }}>Capture Moments</h3>
                <p>Upload photos and write short descriptions of your child's daily adventures, milestones, and precious memories.</p>
              </div>
              <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#8736de' }}>AI Narrative</h3>
                <p>Our AI weaves your collected moments into a cohesive, heartfelt story that brings your memories to life.</p>
              </div>
              <div style={{ textAlign: 'center', maxWidth: '300px' }}>
                <h3 style={{ fontSize: '1.5rem', color: '#8736de' }}>Download & Print</h3>
                <p>Download your finished storybook as a print-ready PDF or digital version to treasure forever.</p>
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section style={{ textAlign: 'center' }}>
            <h2 style={{ fontSize: '2rem', marginBottom: '3rem' }}>Simple, Transparent Pricing</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center' }}>
              {/* Free Plan */}
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '2rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  maxWidth: '300px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ color: '#8736de', fontSize: '1.5rem' }}>Free</h3>
                <p>Perfect for getting started</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$0.00</p>
                <p>50 memories per year</p>
                <p>1 child profile</p>
                <p>Weekly compilations</p>
                <Link href="/current-plan">
                  <a style={{ color: '#8736de', textDecoration: 'none', fontWeight: 'bold' }}>Current Plan</a>
                </Link>
              </div>

              {/* Premium Plan */}
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '2rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  maxWidth: '300px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ color: '#8736de', fontSize: '1.5rem' }}>Premium</h3>
                <p>For dedicated memory keepers</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$7.99</p>
                <p>Unlimited memories</p>
                <p>Up to 3 child profiles</p>
                <Link href="/upgrade">
                  <a style={{ color: '#8736de', textDecoration: 'none', fontWeight: 'bold' }}>Upgrade</a>
                </Link>
              </div>

              {/* Family Plan */}
              <div
                style={{
                  backgroundColor: '#fff',
                  padding: '2rem',
                  borderRadius: '8px',
                  boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
                  maxWidth: '300px',
                  textAlign: 'center',
                }}
              >
                <h3 style={{ color: '#8736de', fontSize: '1.5rem' }}>Family</h3>
                <p>Share with grandparents</p>
                <p style={{ fontSize: '2rem', fontWeight: 'bold', margin: '1rem 0' }}>$12.99</p>
                <p>Up to 10 child profiles</p>
                <Link href="/upgrade">
                  <a style={{ color: '#8736de', textDecoration: 'none', fontWeight: 'bold' }}>Upgrade</a>
                </Link>
              </div>
            </div>
          </section>
        </main>
{/* Footer */}
<footer
  style={{
    textAlign: 'center',
    padding: '3rem 1rem',
    backgroundColor: '#FFFFFF',
  }}
>
  <p style={{ fontSize: '1rem', color: '#999' }}>
    Made with ❤️ for families everywhere |{' '}
    <a
      href="/privacy"
      style={{
        color: '#8736de',
        textDecoration: 'none',
      }}
    >
      Privacy Policy
    </a>
  </p>
</footer>
