import Link from 'next/link'
import { CSSProperties, FC, MouseEventHandler, useRef, useState } from 'react'

const Header: FC = () => {
  return (
    <div className="w-full fixed top-0 h-[70px] bg-dark border-b-2 border-solid border-primary flex justify-center items-center px-4 sm:px-10">
      <div className="w-full flex justify-between max-w-[1920px]">
        <h1 className="relative">
          <Link href={`/`}>
            <p className="font-semibold text-primary z-10 text-[18px]">NWH</p>
          </Link>
        </h1>

        <nav className="flex gap-[20px]">
          {/* Nav Icon Animation */}
          <NavToggleButton />
        </nav>
      </div>
    </div>
  )
}

export default Header

const NavToggleButton: FC = () => {
  const ref = useRef<HTMLButtonElement>(null)

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false)

  const onClickhandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setIsNavOpened(!isNavOpened)
  }

  return (
    <button
      type="button"
      onClick={onClickhandler}
      onMouseEnter={() => setIsNavOpened(true)}
      onMouseLeave={() => setIsNavOpened(false)}
      ref={ref}
      className={`w-[22px] h-[22px] ${isNavOpened ? 'rotate-[225deg]' : 'rotate-0'}  transition duration-300 ease-out`}
    >
      <div
        className={`w-full h-full relative flex flex-col justify-center group cursor-pointer transition duration-250 ease-linear hover:`}
      >
        <span
          className={`absolute w-full h-[2px] top-0 bg-primary transition duration-250 ease-linear ${
            isNavOpened ? 'group-hover:translate-y-[10px]' : ''
          }`}
        />
        <span
          className={`absolute w-full h-[2px] bg-primary transition duration-250 ease-linear opacity-100 ${
            isNavOpened ? 'group-hover:rotate-90' : ''
          }`}
        />
        <span
          className={`absolute w-full h-[2px] bottom-0 bg-primary transition duration-250 ease-linear ${
            isNavOpened ? 'group-hover:-translate-y-[10px]' : ''
          }`}
        />
      </div>
    </button>
  )
}
