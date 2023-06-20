export const metadata: Metadata = {
  title: {
    default: 'About | Hawoon Joh',
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
    <div className="w-full min-h-[100vh] flex flex-col bg-background transition-colors duration-200 ease-linear">
      <Header />
      <main className="relative">
        <div className="w-full h-fit flex justify-center py-2">{children}</div>
      </main>
    </div>
  )
}

export default PostsLayouts
