export const metadata: Metadata = {
  title: {
    default: 'Posts',
    template: '%s'
  }
}

import Header from '@/components/common/layouts/header/Header'
import { Locale } from '@/i18n.config'
import { Metadata } from 'next'
import { useTranslations } from 'next-intl'
import { ReactNode } from 'react'

interface Params {
  children: ReactNode
  params: Promise<{ locale: Locale }>
}

const PostsLayouts = async (props: Params) => {
  const params = await props.params

  const { children } = props

  const t = useTranslations('navigation')
  console.log(t)

  const navOption: Array<{ label: string; href: string; locale: Locale; external?: boolean }> = [
    { label: t('home.title'), href: '/', locale: params.locale },
    {
      label: t('posts.title'),
      href: 'https://velog.io/@henrynoowah/posts',
      locale: params.locale,
      external: true
    },
    {
      label: t('github.title'),
      href: 'https://www.github.com/henrynoowah',
      locale: params.locale,
      external: true
    }
  ]

  return (
    <div className="w-full h-screen flex flex-col bg-background transition-colors duration-200 ease-linear overflow-hidden">
      <Header navOption={navOption} locale={params.locale} />
      <main className="relative w-full overflow-y-auto">
        <div className="w-full h-fit flex justify-center">{children}</div>
      </main>
    </div>
  )
}

export default PostsLayouts
