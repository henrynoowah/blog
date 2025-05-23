'use client'

import { HTMLAttributes, ReactNode, useEffect, useState } from 'react'

import { m, motion } from 'framer-motion'
import { useResizeHandler } from '@/components/hooks'
import { Link } from '@/i18n/navigation'
import { useTransitionRouter } from 'next-view-transitions'
interface Params extends HTMLAttributes<HTMLButtonElement> {
  name: string
  href: string
  icon: ReactNode
  desc: string
  locale?: string
  selected?: boolean
  external?: boolean
}

const NavModal = ({ onClick, selected, ...nav }: Params) => {
  const [isReady, setIsReady] = useState<boolean>(false)
  const router = useTransitionRouter()
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
      initial={'closed'}
      animate={!!selected ? 'open' : 'closed'}
      variants={{
        open: (height = 500) => ({
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
      className="fixed w-full h-full flex flex-col gap-2 justify-center items-center backdrop-filter backdrop-blur-xl bg-primary/40 z-40"
    >
      <motion.div variants={variants} className="flex justify-center items-center gap-2">
        <div
          className={[
            `w-[50px] h-[50px] aspect-square overflow-hidden rounded-full flex justify-center items-center transition duration-200`,
            `hover:shadow-lg relative group border border-dotted border-light`
          ].join(' ')}
        >
          <span className="w-[24px] h-[24px] aspect-square">{nav.icon}</span>
        </div>
        <Link
          href={nav.href}
          target={nav.external ? '_blank' : undefined}
          className="text-light text-[36px] font-medium capitalize z-40 flex justify-center gap-4 items-center hover:underline pointer-events-auto"
          onClick={(e) => {
            e.preventDefault()
            router.push(nav.href, {
              onTransitionReady: pageAnimation
            })
          }}
        >
          <p>{nav.name}</p>
        </Link>
      </motion.div>
      <motion.div variants={variants}>
        <p className="text-light">{nav.desc}</p>
      </motion.div>
    </motion.div>
  ) : (
    <></>
  )
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0,
        scale: 0.9,
        transform: 'translateY(-100px)'
      }
    ],
    {
      duration: 0.3,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)'
    }
  )

  document.documentElement.animate(
    [
      {
        transform: 'translateY(100%)'
      },
      {
        transform: 'translateY(0)'
      }
    ],
    {
      duration: 0.3,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)'
    }
  )
}

export { NavModal }
