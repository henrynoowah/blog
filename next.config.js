const { hostname } = require('os')

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'velog.velcdn.com',
        pathname: '/images/henrynoowah/**'
      }
    ]
  }
}

module.exports = nextConfig
