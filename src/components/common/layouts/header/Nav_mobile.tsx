'use client'

import { Locale } from '@/i18n.config'
import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../../Button'
import Button_nav from './Button_nav'

interface Params {
  navOption: Array<{ label: string; href: string; locale: Locale; external?: boolean }>
}

const Nav_mobile = ({ navOption }: Params) => {
  const [isNavOpened, setIsNavOpened] = useState<boolean>(false)

  return (
    <>
      <Button_nav onChange={setIsNavOpened} />

      <nav
        className={`absolute left-0 top-[72px] bg-dark/80 ${
          isNavOpened ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-0 opacity-0 pointer-events-none'
        } transition duration-300 ease-out text-light w-full h-[100vh] 
        `}
      >
        <ul className="flex flex-col text-lg font-semibold">
          {navOption.map((nav, index) => (
            <li
              key={`mobile-nav-${nav.label}`}
              style={{
                transitionDuration: `${index * 350}ms`
              }}
              className={`transition bg-primary px-4 py-1 first:border-t border-t-1 border-light/20 border-solid last:pb-2 last:rounded-bl-xl ${
                isNavOpened ? 'translate-x-0' : 'translate-x-[200%]'
              }`}
            >
              <Link
                href={!nav.external && nav.locale ? `/${nav.locale}/${nav.href}` : nav.href}
                target={nav.external ? '_blank' : undefined}
              >
                <Button className="w-full flex justify-between items-center bg-transparent !text-light !text-md py-2 text-left">
                  <p>{nav.label}</p>
                  <ChevronRightIcon width={16} height={16} />
                </Button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Nav_mobile
