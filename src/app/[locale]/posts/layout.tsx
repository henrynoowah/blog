export const metadata: Metadata = {
  title: {
    default: 'Posts',
    template: '%s'
  }
}

import Header from '@/components/common/layouts/header/Header'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import { Metadata } from 'next'
import { ReactNode } from 'react'

interface Params {
  children: ReactNode
  params: { locale: Locale }
}

const PostsLayouts = async ({ children, params }: Params) => {
  const t = await getDictionary(params.locale, 'navigation')

  const navOption: Array<{ label: string; href: string; locale: Locale; external?: boolean }> = [
    { label: t.navigation.home, href: '/', locale: params.locale },
    { label: t.navigation.posts, href: '/posts', locale: params.locale },
    { label: t.navigation.github, href: 'https://www.github.com/henrynoowah', locale: params.locale, external: true }
  ]

  return (
    <div className="w-full h-screen flex flex-col bg-background transition-colors duration-200 ease-linear overflow-hidden">
      <Header navOption={navOption} />
      <main className="relative w-full overflow-y-auto">
        <div className="w-full h-fit flex justify-center">{children}</div>
      </main>
    </div>
  )
}

export default PostsLayouts
