import Link from 'next/link'
import packageData from 'package.json'
import Button from '../Button'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import Nav_mobile from './Nav_mobile'
import ShowSearchButton from './ShowSearchButton'

const HEADER_HEIGHT = 72

const navOption: Array<{ label: string; href: string }> = [
  { label: 'Posts', href: '/posts' },
  { label: 'About', href: '/about' },
  { label: 'Works', href: '/works' }
]

const Header = () => {
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
            <ShowSearchButton />
            <ThemeToggle />
            <div className="sm:hidden flex items-center">
              <Nav_mobile navOption={navOption} />
            </div>

            <div className="hidden sm:block">
              <nav>
                <ul className="flex gap-[20px] items-center">
                  {navOption.map((nav) => (
                    <li key={nav.label}>
                      <Link href={nav.href}>
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
