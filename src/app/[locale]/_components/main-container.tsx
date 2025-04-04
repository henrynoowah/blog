'use client'

import { NavItem } from '@/app/[locale]/_components/nav-item'
import ChatBox from '@/components/common/chats/ChatBox'
import { ChatBubbleLeftEllipsisIcon, DocumentIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import Spline from '@splinetool/react-spline'
import { Application, SPEObject } from '@splinetool/runtime'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { useRef, useState } from 'react'
import { LocaleToggle } from './locale-toggle'

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE!
const splitBotId = process.env.NEXT_PUBLIC_SPLINE_BOT_ID!

const MainContainer = () => {
  const params = useParams()

  const t = useTranslations('navigation')

  const navList = [
    {
      name: t('posts.title'),
      // href: '/posts',
      href: 'https://velog.io/@henrynoowah/posts',
      icon: <DocumentIcon className="text-light" />,
      desc: t('posts.description'),
      locale: params.locale as string,
      external: true
    },
    {
      name: t('about.title'),
      href: '/about',
      icon: <FaceSmileIcon className="text-light" />,
      desc: 'Get to know more about me'
    },
    {
      name: t('github.title'),
      href: 'https://www.github.com/henrynoowah',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      desc: t('github.description'),
      locale: params.locale as string,
      external: true
    }
  ]

  const chat = {
    name: t('chat.title'),
    icon: <ChatBubbleLeftEllipsisIcon className="text-light" />,
    desc: t('chat.description')
  }

  const [selected, setSelected] = useState<string | null>(null)
  const [isBotChatOpened, setIsBotChatOpened] = useState<boolean>(false)

  const botRef = useRef<SPEObject>(null)
  const splineRef = useRef<Application>(null)

  const onLoad = (spline: Application) => {
    splineRef.current = spline
    const botObj = spline.findObjectByName(splitBotId)
    botObj?.emitEvent('mouseDown')
    if (botObj) botRef.current = botObj
  }

  const toggleChat = () => {
    !!isBotChatOpened
      ? splineRef.current?.emitEventReverse('mouseDown', splitBotId)
      : splineRef.current?.emitEvent('mouseDown', splitBotId)
    setIsBotChatOpened(!isBotChatOpened)
  }

  return (
    <div className="w-full h-[100vh] flex justify-center relative overflow-hidden touch-none">
      {/* Background Component */}

      <div
        className="fixed w-full h-full
          flex justify-center items-center z-30 pointer-events-auto bg-gradient-to-tl from-primary to-primary/60"
      >
        <Spline scene={scene} onLoad={onLoad} />
      </div>

      <div
        className={`fixed w-full h-full max-w-[1020px] px-[24px] pt-4 pb-[40px] md:pb-[100px]
            flex justify-end items-center z-30 pointer-events-auto`}
      >
        <ChatBox isOpen={isBotChatOpened} />
      </div>
      <div className={`fixed w-full max-w-[1020px] flex justify-end z-30 pointer-events-auto top-4 end-4`}>
        <LocaleToggle />
      </div>

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

export { MainContainer }
