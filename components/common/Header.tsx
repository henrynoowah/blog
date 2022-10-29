import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => {
  return (
    <div className="w-full h-[60px] bg-dark border-b-2 border-solid border-primary flex justify-between items-center px-4">
      <h1 className="text-primary">
        <Link href={`/`}>
          <p className="font-semibold">NWH</p>
        </Link>
      </h1>

      <nav className="flex gap-[20px]">
        {/* Nav Icon Animation */}
        <div
          className={`w-[30px] h-[30px] relative flex flex-col justify-between group cursor-pointer transition duration-250 ease-linear`}
        >
          <span className="w-full h-[4px] bg-primary transition duration-250 ease-linear group-hover:-rotate-45 group-hover:translate-y-[13px]" />
          <span className="w-full h-[4px] bg-primary transition duration-250 ease-linear group-hover:opacity-0 " />
          <span className="w-full h-[4px] bg-primary transition duration-250 ease-linear group-hover:rotate-45 group-hover:-translate-y-[13px]" />
        </div>
        <div
          className={`w-[30px] h-[30px] relative flex flex-col justify-between group cursor-pointer hover:rounded-full hover:rotate-180 transition duration-250 ease-linear`}
        >
          <span className="w-full h-[4px] bg-primary transition duration-250 ease-linear group-hover:-rotate-45 group-hover:translate-y-[13px]" />
          <span className="w-full h-[4px] bg-primary transition duration-250 ease-linear group-hover:opacity-0 " />
          <span className="w-full h-[4px] bg-primary transition duration-250 ease-linear group-hover:rotate-45 group-hover:-translate-y-[13px]" />
        </div>
      </nav>
    </div>
  )
}

export default Header
