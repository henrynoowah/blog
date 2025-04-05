export const metadata: Metadata = {
  title: {
    default: 'Works',
    template: '%s'
  }
}

import { Metadata } from 'next'
import { ReactNode } from 'react'

interface Params {
  children: ReactNode
}

const WorksLayout = ({ children }: Params) => {
  return (
    <div className="w-full min-h-[100vh] flex flex-col bg-background transition-colors duration-200 ease-linear">
      <main className="relative">{children}</main>
    </div>
  )
}

export default WorksLayout
