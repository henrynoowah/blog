'use client'

import { NavItem } from '@/components/main/NavItem'
import { NavModal } from '@/components/main/NavModal'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import { useState } from 'react'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

const navList = [
  { name: 'posts', href: '/posts' },
  { name: 'works', href: '/works' },
  { name: 'about', href: '/about' },
  { name: 'github', href: 'https://www.github.com/henrynoowah' }
]

const Home = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [selectedRef, setSelectedRef] = useState<HTMLElement | null>()

  const sidebar = {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2
      }
    }),
    closed: {
      clipPath: `circle(30px at 40px 40px)`,
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }

  const handleNavSelect = (name: string) => {
    if (selected === name) {
      setSelected(null)
    } else {
      const ref = document.getElementById(name)
      setSelectedRef(ref)
      setSelected(name)
    }
  }

  return (
    <main className={inter.variable}>
      <div className="w-full h-[100vh] flex justify-center relative overflow-hidden">
        {/* Background Component */}
        <div className="relative flex justify-center w-full h-full bg-gradient-to-tl bg-primary/80">
          {/* <div className="relative flex justify-center w-full h-full bg-gradient-to-tl from-[#64EbDE80] to-[#B65EBA80]"> */}
          <div
            className="absolute w-full h-full
          flex justify-center items-center z-30"
          >
            <div className="absolute w-full h-full flex justify-center translate-y-[60px]">
              {/* <iframe
                id="scaled-frame"
                className={`!block`}
                src="https://my.spline.design/untitled-1393c53b4c584c5402f69f7bc1705399/"
                width="100%"
                height="100%"
                loading="eager"
              /> */}
            </div>
            <h1 className="text-[56px] font-semibold opacity text-light whitespace-nowrap">NoowaH</h1>
          </div>
        </div>

        {navList.map((nav, i) => (
          <NavModal selected={selected === nav.name} {...nav} key={`nav-modal-${nav}-${i}`} />
        ))}

        {/* Navigation */}
        <div className="fixed bottom-[30px] md:bottom-[60px] w-full max-w-[900px] h-full justify-start items-end z-50 pointer-events-none">
          <div className="w-full h-full flex flex-col-reverse bottom-[200px]">
            <nav className="flex justify-center gap-[16px]">
              {navList.map((nav, i) => (
                <div id={nav.name} key={`${nav.name}-${i}`} className="pointer-events-auto">
                  <motion.div
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 100 }}
                    transition={{ ease: 'easeInOut', duration: 0.25 * i }}
                  >
                    <NavItem {...nav} selected={selected === nav.name} onClick={() => handleNavSelect(nav.name)} />
                  </motion.div>
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
