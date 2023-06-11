'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import React from 'react'
import Button from '../Button'
const Nav_mobile = dynamic(() => import('./Nav_mobile'))

const Header = () => {
  return (
    <>
      <div className="w-full min-h-[60px] fixed top-0 border-b-2 border-solid border-primary bg-primary flex justify-center items-center px-4 sm:px-10 z-20">
        <div className="w-full flex justify-between max-w-[1920px]">
          <h1 className="relative">
            <Link href={`/`}>
              <p className="font-semibold z-10 text-[18px] text-light ">NWH</p>
            </Link>
          </h1>

          <div className="hidden sm:block">
            <nav>
              <ul className="flex gap-[20px] items-center">
                <li>
                  <Link href={'/posts'}>
                    <Button className="bg-transparent !text-light !text-md">Posts</Button>
                  </Link>
                </li>
                <li>
                  <Link href={'/about'}>
                    <Button className="bg-transparent !text-light !text-md">About</Button>
                  </Link>
                </li>
                <li>
                  <Link href={'/works'}>
                    <Button className="bg-transparent !text-light !text-md">Works</Button>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sm:hidden flex items-center">
            <Nav_mobile />
          </div>
        </div>
      </div>
      <div className="w-full min-h-[60px]" />
    </>
  )
}

export default Header
