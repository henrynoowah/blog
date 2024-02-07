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
    <div className="w-full h-screen flex flex-col bg-background transition-colors duration-200 ease-linear overflow-hidden">
      <Header />
      <main className="relative w-full overflow-y-auto">
        <div className="w-full h-fit flex justify-center">{children}</div>
      </main>
    </div>
  )
}

export default PostsLayouts
