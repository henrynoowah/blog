import Link from 'next/link'
import Button from '../Button'
import Nav_mobile from './Nav_mobile'
import ThemeToggle from '../ThemeToggle/ThemeToggle'
import packageData from 'package.json'
import ShowSearchButton from './ShowSearchButton'

const HEADER_HEIGHT = 72

const Header = () => {
  return (
    <>
      <div
        style={{ minHeight: HEADER_HEIGHT }}
        className="w-full fixed top-0 border-b-2 border-solid border-primary bg-primary flex justify-center items-center px-4 sm:px-10 z-20"
      >
        <div className="w-full flex justify-between max-w-[1920px]">
          <h1 className="relative">
            <Link href={`/`}>
              <p className="font-semibold z-10 text-[18px] text-light ">NWH </p>
              <p className="font-semibold z-10 text-[8px] text-light ">v{packageData.version}</p>
            </Link>
          </h1>

          <div className="flex justify-end items-center gap-[16px]">
            <ShowSearchButton />
            <ThemeToggle />
            <div className="sm:hidden flex items-center">
              <Nav_mobile />
            </div>

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
          </div>
        </div>
      </div>
      <div style={{ minHeight: HEADER_HEIGHT }} className="w-full" />
    </>
  )
}

export default Header
