import Link from 'next/link'
import { MouseEventHandler, useRef, useState } from 'react'
import Button from '../Button'

const Nav_mobile = () => {
  // const session = useSession()
  // const supabase = useSupabaseClient()

  const ref = useRef<HTMLButtonElement>(null)

  const [isNavOpened, setIsNavOpened] = useState<boolean>(false)

  const onClickhandler: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.stopPropagation()
    setIsNavOpened(!isNavOpened)
  }

  return (
    <>
      <button
        type="button"
        onClick={onClickhandler}
        ref={ref}
        className={`w-[18px] h-[18px] ${
          isNavOpened ? 'rotate-[225deg]' : 'rotate-0'
        }  transition duration-300 ease-out`}
      >
        <div
          className={`w-full h-full relative flex flex-col justify-center group cursor-pointer transition duration-300 ease-linear hover:`}
        >
          <span
            className={`absolute w-full h-[2px] top-0 bg-light transition duration-300 ease-linear ${
              isNavOpened ? 'translate-y-[8px]' : ''
            }`}
          />
          <span
            className={`absolute w-full h-[2px] bg-light transition duration-300 ease-linear opacity-100 ${
              isNavOpened ? 'rotate-90' : ''
            }`}
          />
          <span
            className={`absolute w-full h-[2px] bottom-0 bg-light transition duration-300 ease-linear ${
              isNavOpened ? '-translate-y-[8px]' : ''
            }`}
          />
        </div>
      </button>
      <nav
        className={`absolute right-0 top-[60px] ${
          isNavOpened ? 'translate-x-0' : 'translate-x-[100%]'
        } transition duration-300 ease-out bg-secondary text-light w-full h-[100vh] p-6 
        `}
      >
        <ul className="flex flex-col text-lg font-semibold">
          <li>
            <Link href={'/posts'}>
              <Button className="w-full bg-transparent !text-light !text-md py-2 text-left">
                Posts
              </Button>
            </Link>
          </li>
          {/* <li>
            {!session ? (
            <Link href={'/auth'}>
              <Button className="w-full bg-transparent !text-light !text-md py-2 text-left">
                Sign In
              </Button>
            </Link>
            ) : (
              <Button
                type="button"
                className="w-full bg-transparent !text-light !text-md py-2 text-left"
                onClick={async () => {
                  await supabase.auth.signOut()
                }}
              >
                Sign Out
              </Button>
            )}
          </li> */}
        </ul>
      </nav>
    </>
  )
}

export default Nav_mobile
