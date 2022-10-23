/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: '',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/blog' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/blog' : ''
}

module.exports = nextConfig
