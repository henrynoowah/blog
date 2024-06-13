import { i18n, Locale } from '@/i18n.config'
import { Metadata } from 'next'
import 'src/app/styles/globals.css'

const title = 'NoowaH Blog'
const description = "Welcome to NoowaH's blog"

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: 'https://noowah.vercel.app'
  },
  openGraph: {
    title,
    type: 'website',
    description,
    images: { url: `/andrpid-chrome-512-512.png`, width: 1200, height: 630, type: 'image/png' }
  },
  twitter: {
    title,
    card: 'summary_large_image',
    description,
    images: { url: `/andrpid-chrome-512-512.png`, width: 1200, height: 630, type: 'image/png' }
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }))
}

interface Params {
  children: React.ReactNode
  params: { locale: Locale }
}

const RootLayout = ({ children, params }: Params) => {
  return (
    <html lang={params.locale}>
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="shortcut icon" href="#" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}

export default RootLayout
