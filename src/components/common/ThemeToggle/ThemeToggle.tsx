'use client'

import { themeCheck, themeColorSwitch, themeSwitch } from '@/utils/themeCheck'
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid'
import { MouseEventHandler, useEffect, useState } from 'react'

const ThemeToggle = () => {
  const [iconToggle, setIconToggle] = useState<boolean>(themeCheck())
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>()

  const handleThemeSwitch: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    themeSwitch()
    setIconToggle(true)
  }

  useEffect(() => {
    if (iconToggle === true) {
      setIsDarkMode(!isDarkMode)
      themeColorSwitch(!isDarkMode)
      setIconToggle(false)
    }
  }, [iconToggle])

  return (
    <button
      // disabled={!cookieEnabled}
      aria-label="Theme Toggle"
      onClick={handleThemeSwitch}
      className="!text-light relative w-[32px] h-[32px] flex justify-center items-center rounded-full ring-1 ring-light/60 dark:bg-dark-80"
    >
      {isDarkMode !== null && (
        <>
          <MoonIcon
            width={18}
            height={18}
            className={`absolute ${
              isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
            }  transform transition duration-500 ease-in-out`}
          />
          <SunIcon
            width={18}
            height={18}
            className={`${
              isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
            }  transform transition duration-500 ease-in-out`}
          />
        </>
      )}
    </button>
  )
}

export default ThemeToggle
