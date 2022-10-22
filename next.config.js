/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: '',
  },
  basePath: '/blog',
  assetPrefix: '/blog'
}

module.exports = nextConfig
