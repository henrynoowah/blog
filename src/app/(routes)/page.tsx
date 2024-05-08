'use client'

import { NavItem } from '@/components/main/NavItem'
import { NavModal } from '@/components/main/NavModal'
import { CubeIcon, DocumentIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import Spline from '@splinetool/react-spline'
import { Application, SPEObject } from '@splinetool/runtime'
import { motion } from 'framer-motion'
import { Inter } from 'next/font/google'
import { useEffect, useRef, useState } from 'react'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

const navList = [
  {
    name: 'posts',
    href: '/posts',
    icon: <DocumentIcon className="text-light" />,
    desc: 'Check out my dev blog posts'
  },
  {
    name: 'works',
    href: '/works',
    icon: <CubeIcon className="text-light" />,
    desc: 'Check out my works'
  },
  {
    name: 'about',
    href: '/about',
    icon: <FaceSmileIcon className="text-light" />,
    desc: 'Get to know more about me'
  },
  {
    name: 'github',
    href: 'https://www.github.com/henrynoowah',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
    desc: 'Head over to my github!'
  }
]

const SPLINE_SCENE = 'https://prod.spline.design/W83XdmrQbaQnPMlJ/scene.splinecode'

const Home = () => {
  const [selected, setSelected] = useState<string | null>(null)

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
      setSelected(name)
    }
  }

  const botRef = useRef<SPEObject>()
  const splineRef = useRef<Application>()

  const onLoad = (spline: Application) => {
    splineRef.current = spline
    const botObj = spline.findObjectByName('Character')
    botRef.current = botObj
  }

  const [toggle, setToggle] = useState<boolean>(false)

  function triggerAnimation() {
    splineRef.current?.emitEvent('mouseHover', 'Camera')
  }

  useEffect(() => {
    console.log(toggle)
  }, [toggle])

  return (
    <main className={inter.variable}>
      <div className="w-full h-[100vh] flex justify-center relative overflow-hidden">
        {/* Background Component */}
        <div className="relative flex justify-center w-full h-full bg-gradient-to-tl from-primary to-primary/60"></div>

        <div
          className="absolute w-full h-full
          flex justify-center items-center z-30 pointer-events-auto"
        >
          <Spline
            scene={SPLINE_SCENE}
            onLoad={onLoad}
            onMouseDown={(e) => {
              console.log(e.target)
              console.log(toggle)
              setToggle(!toggle)
            }}
          />
        </div>

        {/* {!!toggle && (
          <div
            className="absolute w-full h-full
        flex justify-end items-center z-50 pointer-events-none] pt-[10%] pb-[22%] px-[16px] md:px-[10%] pointer-events-none"
          >
            <div
              className="w-full h-full max-w-full md:max-w-[400px] bg-light end-0 rounded p-4 shadow-xl backdrop-filter backdrop-blur-lg bg-opacity-40"
              onClick={() => {}}
            >
              Test
            </div>
          </div>
        )} */}
        {/* <button className="z-40 pointer-events-auto" type="button" onClick={triggerAnimation}>
          Trigger Spline Animation
        </button> */}

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
