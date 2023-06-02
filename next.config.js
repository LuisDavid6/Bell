/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'www.pequerecetas.com',
      },
    ],
  },
}

module.exports = nextConfig
