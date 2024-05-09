import { Locale } from '@/i18n.config'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import packageData from 'package.json'
import { Suspense } from 'react'
import Button from '../../Button'
import Nav_mobile from './Nav_mobile'
import ShowSearchButton from './ShowSearchButton'
const ThemeToggle = dynamic(() => import('../../themeToggle/ThemeToggle'))

const HEADER_HEIGHT = 72

interface Params {
  navOption: Array<{ label: string; href: string; locale: Locale; external?: boolean }>
}
const Header = ({ navOption }: Params) => {
  return (
    <>
      <div
        style={{ minHeight: HEADER_HEIGHT }}
        className="w-full fixed top-0 border-b-[1px] border-solid border-primary bg-primary flex justify-center items-center px-4 sm:px-10 z-20"
      >
        <div className="w-full flex justify-between max-w-[1920px]">
          <h1 className="relative">
            <Link href={`/`}>
              <p className="font-semibold z-10 text-[18px] text-light ">NWH</p>
              <p className="font-semibold z-10 text-[8px] text-light ">v{packageData.version}</p>
            </Link>
          </h1>

          <div className="flex justify-end items-center gap-[16px]">
            <Suspense>
              <ShowSearchButton />
            </Suspense>
            <ThemeToggle />
            <div className="sm:hidden flex items-center">
              <Nav_mobile navOption={navOption} />
            </div>
            <div className="hidden sm:block">
              <nav>
                <ul className="flex gap-[20px] items-center">
                  {navOption.map((nav) => (
                    <li key={nav.label}>
                      <Link
                        href={!nav.external && nav.locale ? `/${nav.locale}/${nav.href}` : nav.href}
                        target={nav.external ? '_blank' : undefined}
                      >
                        <Button className="bg-transparent !text-light !text-md">{nav.label}</Button>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: HEADER_HEIGHT }} className="w-full" />
    </>
  )
}

export default Header
