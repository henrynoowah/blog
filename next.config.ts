import { NextConfig } from 'next'
import { withIntlayer } from 'next-intlayer/server'

const nextConfig: NextConfig = {
  experimental: {
    viewTransition: true
  }
}

export default withIntlayer(nextConfig)
