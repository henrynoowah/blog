'use client'

import { NavItem } from '@/app/[locale]/_components/NavItem'
import { NavModal } from '@/app/[locale]/_components/NavModal'
import ChatBox from '@/components/common/chats/ChatBox'
import LoadingCircle from '@/components/common/loadings/LoadingCircle'
import { useDictionary } from '@/context/dictionary-provider'
import { ChatBubbleLeftEllipsisIcon, DocumentIcon } from '@heroicons/react/24/solid'
import { Application, SPEObject } from '@splinetool/runtime'
import { motion } from 'framer-motion'
import dynamic from 'next/dynamic'
import { Inter } from 'next/font/google'
import { useParams, usePathname, useSearchParams } from 'next/navigation'
import { useRef, useState } from 'react'

const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
  loading: () => <LoadingCircle />
})

const SPLINE_SCENE = 'https://prod.spline.design/W83XdmrQbaQnPMlJ/scene.splinecode'
const SPLINE_BOT_ID = '7a1937ee-e0ec-4da1-bca9-10b1ff105490'

const MainContainer = () => {
  const params = useParams()

  const t = useDictionary()

  const navList = [
    {
      name: t.navigation.posts.title,
      href: '/posts',
      icon: <DocumentIcon className="text-light" />,
      desc: t.navigation.posts.description,
      locale: params.locale as string
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
      name: t.navigation.github.title,
      href: 'https://www.github.com/henrynoowah',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      desc: t.navigation.github.description,
      locale: params.locale as string,
      external: true
    }
  ]

  const chat = {
    name: t.navigation.chat.title,
    href: 'https://www.github.com/henrynoowah',
    icon: <ChatBubbleLeftEllipsisIcon className="text-light" />,
    desc: t.navigation.chat.description
  }

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
  )
}

export default MainContainer
