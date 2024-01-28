import { MouseEventHandler, useRef, useState } from 'react'

interface Params {
  onChange: (isNaOpened: boolean) => void
}

const Button_nav = ({ onChange }: Params) => {
  const ref = useRef<HTMLButtonElement>(null)

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false)

  const onClickhandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setIsNavOpened(!isNavOpened)
    onChange && onChange(!isNavOpened)
  }

  return (
    <button
      type="button"
      onClick={onClickhandler}
      ref={ref}
      className={`w-[36px] h-[36px] flex justify-center items-center rounded-full ring-1 ring-light ${
        isNavOpened ? 'rotate-[225deg]' : 'rotate-0'
      }  transition duration-300 ease-out`}
    >
      <div
        className={`w-[14px] h-[14px] relative flex flex-col justify-center group cursor-pointer transition duration-300 ease-linear hover:`}
      >
        <span
          className={`absolute w-full h-[2px] top-0 bg-light transition duration-300 ease-linear ${
            isNavOpened ? 'translate-y-[6px]' : ''
          }`}
        />
        <span
          className={`absolute w-full h-[2px] bg-light transition duration-300 ease-linear opacity-100 ${
            isNavOpened ? 'rotate-90' : ''
          }`}
        />
        <span
          className={`absolute w-full h-[2px] bottom-0 bg-light transition duration-300 ease-linear ${
            isNavOpened ? '-translate-y-[6px]' : ''
          }`}
        />
      </div>
    </button>
  )
}

export default Button_nav
