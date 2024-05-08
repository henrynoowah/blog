'use client'

import ChatBox from '@/components/common/chats/ChatBox'
import { NavItem } from '@/components/main/NavItem'
import { NavModal } from '@/components/main/NavModal'
import { ChatBubbleLeftEllipsisIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { Application, SPEObject } from '@splinetool/runtime'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import { useRef, useState } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-8 h-8 text-light/40 animate-spin fill-primary"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
      <span className="sr-only">Loading...</span>
    </div>
  )
})

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

const navList = [
  {
    name: 'posts',
    href: '/posts',
    icon: <DocumentIcon className="text-light" />,
    desc: 'Check out my dev blog posts'
  },
  // {
  //   name: 'works',
  //   href: '/works',
  //   icon: <CubeIcon className="text-light" />,
  //   desc: 'Check out my works'
  // },
  // {
  //   name: 'about',
  //   href: '/about',
  //   icon: <FaceSmileIcon className="text-light" />,
  //   desc: 'Get to know more about me'
  // },
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

const chat = {
  name: 'chat',
  href: 'https://www.github.com/henrynoowah',
  icon: <ChatBubbleLeftEllipsisIcon className="text-light" />,
  desc: 'Chat bot!'
}

const SPLINE_SCENE = 'https://prod.spline.design/W83XdmrQbaQnPMlJ/scene.splinecode'
const SPLINE_BOT_ID = '7a1937ee-e0ec-4da1-bca9-10b1ff105490'

const Home = () => {
  const [selected, setSelected] = useState<string | null>(null)
  const [isBotChatOpened, setIsBotChatOpened] = useState<boolean>(false)

  const handleNavSelect = (name: string) => {
    if (selected === name) {
      setSelected(null)
    } else {
      // const ref = document.getElementById(name)
      setSelected(name)
    }
  }

  const botRef = useRef<SPEObject>()
  const splineRef = useRef<Application>()

  const onLoad = (spline: Application) => {
    splineRef.current = spline
    const botObj = spline.findObjectByName(SPLINE_BOT_ID)
    botObj?.emitEvent('mouseDown')
    botRef.current = botObj
  }

  const toggleChat = () => {
    !!isBotChatOpened
      ? splineRef.current?.emitEventReverse('mouseDown', SPLINE_BOT_ID)
      : splineRef.current?.emitEvent('mouseDown', SPLINE_BOT_ID)
    setIsBotChatOpened(!isBotChatOpened)
  }

  return (
    <main className={inter.variable}>
      <div className="w-full h-[100vh] flex justify-center relative overflow-hidden touch-none">
        {/* Background Component */}

        <div
          className="fixed w-full h-full
          flex justify-center items-center z-30 pointer-events-auto bg-gradient-to-tl from-primary to-primary/60"
        >
          <Spline scene={SPLINE_SCENE} onLoad={onLoad} />
        </div>

        <div
          className={`fixed w-full h-full max-w-[1020px] px-[24px] pt-4 pb-[40px] md:pb-[100px]
            flex justify-end items-center z-30 pointer-events-auto`}
        >
          <ChatBox isOpen={isBotChatOpened} />
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
                    <NavItem
                      {...nav}
                      selected={selected === nav.name}
                      onClick={() => {
                        if (!!isBotChatOpened) {
                          toggleChat()
                        }
                        handleNavSelect(nav.name)
                      }}
                    />
                  </motion.div>
                </div>
              ))}
              <div id={chat.name} className="pointer-events-auto">
                <motion.div
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 100 }}
                  transition={{ ease: 'easeInOut', duration: 0.25 * navList.length }}
                >
                  <NavItem
                    selected={!!isBotChatOpened}
                    {...chat}
                    onClick={() => {
                      setSelected(null)
                      toggleChat()
                    }}
                  />
                </motion.div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home
