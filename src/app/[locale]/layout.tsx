import { getHTMLTextDir } from 'intlayer'
import { Metadata } from 'next'
import type { NextLayoutIntlayer } from 'next-intlayer'
import { ViewTransitions } from 'next-view-transitions'

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
    images: { url: `/twitter-card.png`, width: 1200, height: 630, type: 'image/png' }
  },
  twitter: {
    title,
    card: 'summary_large_image',
    description,
    images: { url: `/twitter-card.png`, width: 1200, height: 630, type: 'image/png' }
  }
}

const LocaleLayout: NextLayoutIntlayer = async ({ children, params }) => {
  const { locale } = await params

  return (
    <ViewTransitions>
      <html lang={locale} dir={getHTMLTextDir(locale)}>
        <head>
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="shortcut icon" href="#" />
          <link rel="manifest" href="/site.webmanifest" />
        </head>
        <body suppressHydrationWarning={true}>
          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export default LocaleLayout
