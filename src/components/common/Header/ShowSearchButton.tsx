'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FormEventHandler, useState } from 'react'

const ShowSearchButton = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const search = searchParams.get('search')

  const [inputValue, setInputValue] = useState<string>(search ?? '')

  const [showInput, setShowInput] = useState<boolean>(false)

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (inputValue !== null && inputValue !== '') {
      router.push(`${pathname}?search=${inputValue}`)
    } else {
      router.push(`${pathname}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex justify-between relative group transition duration-300 ease-in-out">
      <div
        className={`h-[36px] relative duration-300 ease-in-out ring-1 ring-inset ring-light/60 rounded-full overflow-hidden ${
          showInput ? 'w-[160px] md:w-[240px]' : 'w-[36px]'
        }`}
      >
        <input
          placeholder="Search Post"
          onChange={(e) => setInputValue(e.target.value)}
          onBlur={() => setShowInput(false)}
          type="search"
          className={[
            `absolute w-full h-full items-center placeholder:italic placeholder:text-sm`,
            `outline-none focus:outline-none transform`,
            `px-4 text-light/60 bg-transparent`,
            showInput ? `translate-x-0 pointer-events-auto ` : `translate-x-[100%] pointer-events-none hidden`
          ].join(' ')}
        />

        <button
          type="button"
          className={`absolute right-0 w-[36px] h-[36px] flex justify-center items-center ring-inset ring-light/60 rounded-full`}
          onClick={() => {
            console.log(showInput)
            if (!showInput) {
              setShowInput(true)
            }
          }}
        >
          <MagnifyingGlassIcon width={18} height={18} className="text-light/60 z-20" />
        </button>
      </div>
    </form>
  )
}

export default ShowSearchButton