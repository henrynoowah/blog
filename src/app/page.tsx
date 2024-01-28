'use client'

import { NavItem } from '@/components/main/NavItem'
import { Inter } from 'next/font/google'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

const navList = [
  { name: 'posts', href: '/posts' },
  { name: 'works', href: '/works' },
  { name: 'about', href: '/about' },
  { name: 'github', href: 'https://www.github.com/henrynoowah' }
]

const Home = () => {
  return (
    <main className={inter.variable}>
      <div className="w-full h-[100vh] flex justify-center relative overflow-hidden">
        {/* Background Component */}
        <div className="relative flex justify-center w-full h-full bg-gradient-to-tl from-[#64EbDE80] to-[#B65EBA80]">
          <div
            className="absolute w-full h-full
          flex justify-center items-center z-50"
          >
            <h1 className="text-[56px] font-semibold opacity text-primary/60 whitespace-nowrap">NoowaH</h1>
          </div>
          <div className="absolute w-full h-full flex justify-center translate-y-[60px]">
            <iframe
              id="scaled-frame"
              className={`!block `}
              src="https://my.spline.design/untitled-1393c53b4c584c5402f69f7bc1705399/"
              width="100%"
              height="100%"
              loading="eager"
              onLoad={() => console.log('test')}
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="fixed bottom-[30px] md:bottom-[60px] w-full max-w-[900px] h-full justify-start items-end z-50">
          <div className="w-full h-full flex flex-col-reverse bottom-[200px]">
            <nav className="flex justify-center gap-[16px]">
              {navList.map((nav, idx) => (
                <div key={idx}>
                  <NavItem {...nav} />
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
