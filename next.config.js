/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "logos-world.net",
      },
      {
        protocol: "https",
        hostname: "usbcaazumzyoexabcmew.supabase.co",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/:slug',
        destination: '/blog/:slug',
      },
    ];
  },
  // Remove the postcss configuration from here
};

module.exports = nextConfig;
