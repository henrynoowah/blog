export const metadata: Metadata = {
  title: {
    default: 'Posts',
    template: '%s'
  }
}

import Header from '@/components/common/Header/Header'
import { Metadata } from 'next'
import { ReactNode } from 'react'

interface Params {
  children: ReactNode
}

const PostsLayouts = ({ children }: Params) => {
  return (
    <div className="w-full h-[100vh] min-h-[100vh] flex flex-col">
      <Header />
      <main className="relative">
        <div className="w-full flex justify-center py-2">{children}</div>
      </main>
    </div>
  )
}

export default PostsLayouts
