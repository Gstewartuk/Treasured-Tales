import Head from 'next/head';
import Link from 'next/link';

export default function AppHome() {
  return (
    <>
      {/* SEO and Google Fonts */}
      <Head>
        <title>Treasured Tales - The Stories We Live</title>
        <meta
          name="description"
          content="Transform your child's real-life adventures into personalized storybooks. Preserve precious memories, bring them to life with AI-crafted narratives, and create keepsakes your family will treasure for generations."
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=DM+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      {/* Page Content */}
      <div
        style={{
          fontFamily: "'DM Sans', sans-serif",
          backgroundImage: 'url("/background.jpg")', // Replace with your image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: '#fff',
        }}
      >
        {/* Header Section */}
        <header style={{ textAlign: 'center', padding: '3rem 1rem' }}>
          <h1 style={{ fontSize: '4rem', margin: 0 }}>Treasured Tales</h1>
          <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>The Stories We Live</p>
        </header>

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
        <footer style={{ textAlign: 'center', padding: '3rem 1rem', backgroundColor: '#FFFFFF' }}>
          <p style={{ fontSize: '1rem', color: '#999' }}>
            Made with ❤️ for families everywhere | <Link href="/privacy"><a style={{ color: '#8736de' }}>Privacy Policy</a></Link>
          </p>
        </footer>
      </div>
    </>
  );
}
