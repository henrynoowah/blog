'use client'

import { themeCheck } from '@/utils/themeCheck'
import { useParams, usePathname, useRouter } from 'next/navigation'
import { MouseEventHandler, useEffect, useState } from 'react'

const LocaleToggle = () => {
  const router = useRouter()
  const params = useParams()
  const pathname = usePathname()
  const locale = params.locale as string

  const [iconToggle, setIconToggle] = useState<boolean>(themeCheck())

  const handleLocaleSwitch: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    router.replace(locale === 'ko' ? '/' : '/ko' + pathname)
    setIconToggle(true)
  }

  useEffect(() => {
    if (iconToggle === true) {
      setIconToggle(false)
    }
  }, [iconToggle])

  return (
    <button
      aria-label="Theme Toggle"
      onClick={handleLocaleSwitch}
      className="!text-light relative w-[36px] h-[36px] flex justify-center items-center rounded-full ring-1 ring-light dark:bg-dark-80"
    >
      <span
        className={`absolute ${
          locale === 'en' || !locale ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
        }  transform transition duration-500 ease-in-out`}
      >
        <p className="text-sm font-semibold">EN</p>
      </span>
      <span
        className={`absolute ${
          locale === 'ko' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
        }  transform transition duration-500 ease-in-out`}
      >
        <p className="text-sm font-semibold">KO</p>
      </span>
    </button>
  )
}

export default LocaleToggle
