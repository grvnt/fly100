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
      {
        protocol: "https",
        hostname: "blog.fly100.co",
      },
      // You can keep this as a fallback, but it may not be necessary
      // {
      //   protocol: "https",
      //   hostname: "fly100.ghost.io",
      // },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/blog/:path*',
        destination: '/api/blog/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
