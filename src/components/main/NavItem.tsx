import { CubeIcon, DocumentIcon, FaceSmileIcon } from '@heroicons/react/24/solid'
import { HTMLAttributes, useState } from 'react'

interface Params extends HTMLAttributes<HTMLButtonElement> {
  name: string
  href: string
  selected?: boolean
}

export const NavItem = ({ name, href, onClick, selected }: Params) => {
  const [hover, setHover] = useState<string>()

  const iconSelection = (name: string) => {
    switch (name) {
      case 'posts':
        return <DocumentIcon className="text-light" />
      case 'works':
        return <CubeIcon className="text-light" />
      case 'about':
        return <FaceSmileIcon className="text-light" />
      case 'github':
        return (
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="white">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        )
      default:
        return <DocumentIcon className="text-light" />
    }
  }

  return (
    <div className="flex flex-col justify-end items-center relative">
      <span
        className={[
          `absolute top-0 -translate-y-[24px] z-10 text-[12px] font-bold text-primary capitalize px-[8px] py-[4px] bg-light rounded-full transition duration-200`,
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
              `bg-primary`,
              `absolute w-full h-full transition duration-300 rounded-full `,
              selected ? ' border border-dotted' : '',
              `opacity-100 group-hover:opacity-100`
            ].join(' ')}
          />
          <div className="w-full h-full opacity-80 transition duration-200 relative flex justify-center items-center">
            <span className="w-[24px] h-[24px] aspect-square">{iconSelection(name)}</span>
          </div>
        </div>
        {/* </Link> */}
      </button>
    </div>
  )
}
