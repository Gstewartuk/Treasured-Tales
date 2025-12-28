// next.config.js
const nextConfig = {
  reactStrictMode: true, // Enable React's strict mode
  images: {
    loader: "default", // Use Next.js's default image loader
    domains: [], // Add domains here if you use external or optimized images
  },
  async headers() {
    return [
      {
        source: "/(.*)", // Apply to all pages
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable", // Cache static assets
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
