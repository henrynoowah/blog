export const metadata: Metadata = {
  title: {
    default: 'Posts',
    template: 'Posts | %s',
  },
}

import Header from '@/components/common/Header/Header'
import { Metadata } from 'next'
import { ReactNode } from 'react'

interface Params {
  children: ReactNode
}

const layouts = ({ children }: Params) => {
  return (
    <div className="w-full h-[100vh] min-h-[100vh] flex flex-col">
      <Header />
      {children}
    </div>
  )
}

export default layouts
