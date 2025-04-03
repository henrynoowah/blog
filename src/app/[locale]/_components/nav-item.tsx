import { CubeIcon, DocumentIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import { HTMLAttributes, ReactNode, useState } from 'react'

interface Params extends HTMLAttributes<HTMLButtonElement> {
  name: string
  href: string
  icon: ReactNode
  selected?: boolean
}

const NavItem = ({ name, href, icon, onClick, selected }: Params) => {
  const [hover, setHover] = useState<string>()

  return (
    <div className="flex flex-col justify-end items-center relative">
      <span
        className={[
          `absolute top-0 -translate-y-[24px] z-10 text-[12px] font-bold text-primary capitalize px-[8px] py-[4px] bg-light rounded-full transition duration-200 whitespace-nowrap`,
          hover === name ? 'opacity-0 sm:opacity-100 ' : 'opacity-0'
        ].join(' ')}
      >
        {name}
      </span>
      <button onClick={onClick}>
        {/* <Link href={href} target={name === 'github' || name === 'velog' ? '_blank' : undefined}> */}
        <div
          onMouseOver={() => setHover(name)}
          onMouseLeave={() => setHover(undefined)}
          className={[
            `w-[50px] h-[50px] aspect-square overflow-hidden rounded-full flex justify-center items-center transition duration-200`,
            `hover:shadow-lg relative group`
          ].join(' ')}
        >
          <span
            className={[
              // `bg-primary`,
              // 'backdrop-filter backdrop-blur-xl bg-primary/40',
              `absolute w-full h-full transition duration-300 rounded-full `,
              selected ? ' border border-dotted' : '',
              `opacity-100 group-hover:opacity-100`
            ].join(' ')}
          />
          <div className="w-full h-full opacity-80 transition duration-200 relative flex justify-center items-center">
            <span className="w-[24px] h-[24px] aspect-square">{icon}</span>
          </div>
        </div>
        {/* </Link> */}
      </button>
    </div>
  )
}

export { NavItem }
