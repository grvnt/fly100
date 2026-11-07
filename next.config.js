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
  async redirects() {
    // Short links that forward to Kit-hosted landing pages.
    // Mirror of the rules on flyinflow.com (see ~/repos/flyinflow/vercel.json) —
    // fly100.co is the canonical product domain going forward, so these need to
    // exist here as well. permanent:false mirrors flyinflow's /fly100 rule
    // (307), so if we ever repoint the destination we aren't fighting cached
    // 301s in people's browsers.
    return [
      {
        source: '/fly100',
        destination: 'https://fly100.kit.com/b7904fde1f',
        permanent: false,
      },
      {
        source: '/secret',
        destination: 'https://fly100.kit.com/c51773734f',
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
