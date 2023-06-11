'use client'

import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
const NavItem = dynamic(() => import('@/components/main/NavItem'))

const inter = Inter({ subsets: ['latin'] })

const navList = [
  { name: 'posts', href: '/posts' },
  { name: 'portfolios', href: '/portfolios' },
  { name: 'about', href: '/about' },
  { name: 'github', href: 'https://www.github.com/henrynoowah' }
]

const Home = () => {
  return (
    <main>
      <div className="w-full h-[100vh] flex justify-center relative overflow-hidden">
        {/* Background Component */}
        <div className="relative flex justify-center w-full h-full bg-gradient-to-tl from-[#64EbDE80] to-[#B65EBA80]">
          <div className="absolute w-full h-full flex justify-center translate-y-[60px]">
            <iframe
              id="scaled-frame"
              className={`!block `}
              src="https://my.spline.design/untitled-1393c53b4c584c5402f69f7bc1705399/"
              width="100%"
              height="100%"
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
