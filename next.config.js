/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'images.unsplash.com',
        protocol: 'https'
      },
      {
        hostname: 'directus-production-c48f.up.railway.app',
        protocol: 'https'
      }
    ]
  }
};

module.exports = nextConfig;
