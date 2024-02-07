'use client'

import { ChevronRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import { useState } from 'react'
import Button from '../Button'
import Button_nav from './Button_nav'

interface Params {
  navOption: Array<{ label: string; href: string }>
}

const Nav_mobile = ({ navOption }: Params) => {
  const [isNavOpened, setIsNavOpened] = useState<boolean>(false)

  return (
    <>
      <Button_nav onChange={setIsNavOpened} />

      <nav
        className={`absolute left-0 top-[72px] border-t border-t-1 border-light/20 border-solid ${
          isNavOpened ? 'translate-x-0' : 'translate-x-[100%]'
        } transition duration-300 ease-out bg-primary text-light w-full h-[100vh] p-4 
        `}
      >
        <ul className="flex flex-col text-lg font-semibold">
          {navOption.map((nav, index) => (
            <li
              key={`mobile-nav-${nav.label}`}
              style={{
                transitionDuration: `${index * 350}ms`
              }}
              className={`transition ${isNavOpened ? 'translate-x-0' : 'translate-x-[200%] !duration-0'}`}
            >
              <Link href={nav.href}>
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
