'use client'

import { HTMLAttributes, useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import Link from 'next/link'
interface Params extends HTMLAttributes<HTMLButtonElement> {
  name: string
  href: string
  selected?: boolean
}

export const NavModal = ({ onClick, selected, ...nav }: Params) => {
  const [isReady, setIsReady] = useState<boolean>(false)
  useEffect(() => {
    if (!!window && !!document) {
      setIsReady(true)
    }
  }, [nav])
  return isReady && document.getElementById(nav.name) ? (
    <motion.div
      key={`modal-${nav.name}`}
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
            restDelta: 2
          }
        }),
        closed: () => ({
          clipPath: `circle(25px at ${
            (document.getElementById(nav.name)?.getBoundingClientRect().x as number) + 25
          }px ${(document.getElementById(nav.name)?.getBoundingClientRect().y as number) + 25}px)`,
          transition: {
            type: 'spring',
            stiffness: 400,
            damping: 40
          }
        })
      }}
      className="absolute w-full h-full flex justify-center items-center backdrop-filter backdrop-blur-xl bg-primary z-40"
    >
      <Link
        href={nav.href}
        target={nav.name === 'github' || nav.name === 'velog' ? '_blank' : undefined}
        className="text-light text-[42px] font-medium capitalize z-40 flex justify-center gap-4 items-center hover:underline pointer-events-auto"
      >
        <p>{nav.name}</p>
      </Link>
    </motion.div>
  ) : null
}
