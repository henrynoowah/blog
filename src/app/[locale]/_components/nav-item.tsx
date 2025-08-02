import  Link  from 'next/link'
import { useTransitionRouter } from 'next-view-transitions'
import { HTMLAttributes, ReactNode, useState } from 'react'

interface Params extends HTMLAttributes<HTMLButtonElement> {
  name: string
  href?: string
  icon: ReactNode
  selected?: boolean
  external?: boolean
}

const NavItem = ({ name, href, icon, onClick, selected, external }: Params) => {
  const [hover, setHover] = useState<string>()

  const router = useTransitionRouter()

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

      {href ? (
        <Link
          href={href ?? ''}
          onClick={(e) => {
            e.preventDefault()
            router.push(href ?? '', { onTransitionReady: pageAnimation })
          }}
          target={external ? '_blank' : undefined}
        >
          <NavItemContent name={name} icon={icon} selected={selected} setHover={setHover} />
        </Link>
      ) : (
        <button onClick={onClick}>
          <NavItemContent name={name} icon={icon} selected={selected} setHover={setHover} />
        </button>
      )}
    </div>
  )
}

const NavItemContent = ({ name, icon, selected, setHover }: Params & { setHover: (name?: string) => void }) => {
  return (
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
  )
}

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: 'translateY(0)'
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: 'translateY(-100px)'
      }
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-old(root)'
    }
  )

  document.documentElement.animate(
    [
      {
        transform: 'translateY(100%)'
      },
      {
        transform: 'translateY(0)'
      }
    ],
    {
      duration: 1000,
      easing: 'cubic-bezier(0.76, 0, 0.24, 1)',
      fill: 'forwards',
      pseudoElement: '::view-transition-new(root)'
    }
  )
}

export { NavItem }
