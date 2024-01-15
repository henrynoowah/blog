/** 
 * @type {import('next').NextConfig} 
 * */

const nextConfig = {
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
