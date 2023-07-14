'use client'

import Link from 'next/link'
import { MouseEventHandler, useRef, useState } from 'react'
import Button from '../Button'

const Nav_mobile = () => {
  const ref = useRef<HTMLButtonElement>(null)

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false)

  const onClickhandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setIsNavOpened(!isNavOpened)
  }

  return (
    <>
      <button
        type="button"
        onClick={onClickhandler}
        ref={ref}
        className={`w-[36px] h-[36px] flex justify-center items-center rounded-full ring-1 ring-light ${
          isNavOpened ? 'rotate-[225deg]' : 'rotate-0'
        }  transition duration-300 ease-out`}
      >
        <div
          className={`w-[14px] h-[14px] relative flex flex-col justify-center group cursor-pointer transition duration-300 ease-linear hover:`}
        >
          <span
            className={`absolute w-full h-[2px] top-0 bg-light transition duration-300 ease-linear ${
              isNavOpened ? 'translate-y-[6px]' : ''
            }`}
          />
          <span
            className={`absolute w-full h-[2px] bg-light transition duration-300 ease-linear opacity-100 ${
              isNavOpened ? 'rotate-90' : ''
            }`}
          />
          <span
            className={`absolute w-full h-[2px] bottom-0 bg-light transition duration-300 ease-linear ${
              isNavOpened ? '-translate-y-[6px]' : ''
            }`}
          />
        </div>
      </button>
      <nav
        className={`absolute right-0 top-[60px] ${
          isNavOpened ? 'translate-x-0' : 'translate-x-[100%]'
        } transition duration-300 ease-out bg-secondary text-light w-full h-[100vh] p-6 
        `}
      >
        <ul className="flex flex-col text-lg font-semibold">
          <li>
            <Link href={'/posts'}>
              <Button className="w-full bg-transparent !text-light !text-md py-2 text-left">Posts</Button>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Nav_mobile
