'use client'

import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
import useResizeHandler from '../hooks/useResizeHandler'
interface Params extends HTMLAttributes<HTMLButtonElement> {
  name: string
  href: string
  icon: ReactNode
  desc: string
  selected?: boolean
}

export const NavModal = ({ onClick, selected, ...nav }: Params) => {
  const [isReady, setIsReady] = useState<boolean>(false)
  useEffect(() => {
    if (!!nav && !!window && !!document) {
      setIsReady(true)
    }
  }, [nav])

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
  }

  const windowWidth = useResizeHandler()
  return isReady && document.getElementById(nav.name) ? (
    <motion.div
      key={`modal-${nav.name}-${windowWidth}`}
      initial={false}
      animate={!!selected ? 'open' : 'closed'}
      variants={{
        open: (height = 1000) => ({
          clipPath: `circle(${height * 2 + 200}px at ${
            (document.getElementById(nav.name)?.getBoundingClientRect().x as number) + 25
          }px ${(document.getElementById(nav.name)?.getBoundingClientRect().y as number) + 25}px)`,
          transition: {
            delay: 0.5,
            type: 'spring',
            stiffness: 30,
            restDelta: 2,
            delayChildren: 1,
            staggerChildren: 0.25
          }
        }),
        closed: () => ({
          clipPath: `circle(0px at ${(document.getElementById(nav.name)?.getBoundingClientRect().x as number) + 25}px ${
            (document.getElementById(nav.name)?.getBoundingClientRect().y as number) + 25
          }px)`,
          transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40
          }
        })
      }}
      className="absolute w-full h-full flex flex-col gap-2 justify-center items-center backdrop-filter backdrop-blur-xl bg-primary z-40"
    >
      <motion.div variants={variants} className="flex justify-center items-center gap-2">
        <div
          style={{ width: 50, height: 50 }}
          className="relative flex justify-center items-center border-dotted border border-light rounded-full"
        >
          <span className="w-[24px] h-[24px] flex justify-center items-center relative">{nav.icon}</span>
        </div>
        <Link
          href={nav.href}
          target={nav.name === 'github' || nav.name === 'velog' ? '_blank' : undefined}
          className="text-light text-[36px] font-medium capitalize z-40 flex justify-center gap-4 items-center hover:underline pointer-events-auto"
        >
          <p>{nav.name}</p>
        </Link>
      </motion.div>
      <motion.div variants={variants}>
        <p className="text-light">{nav.desc}</p>
      </motion.div>
    </motion.div>
  ) : null
}
