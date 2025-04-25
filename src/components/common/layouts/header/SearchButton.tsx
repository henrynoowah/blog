'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { FormEventHandler, useRef, useState } from 'react'

const SearchButton = () => {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const router = useRouter()

  const search = searchParams.get('search')

  const [inputValue, setInputValue] = useState<string>(search ?? '')

  const [showInput, setShowInput] = useState<boolean>(false)

  const [isFocused, setIsFocused] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (inputValue !== null && inputValue !== '') {
      router.push(`/posts?search=${inputValue}`)
    } else {
      router.push(`${pathname}`)
    }
  }

  return pathname.startsWith('/posts') ? (
    <form onSubmit={handleSubmit} className="flex justify-between relative group transition duration-300 ease-in-out">
      <div
        className={`h-[36px] relative duration-300 ease-in-out ring-1 ring-inset ring-light rounded-full overflow-hidden ${
          showInput ? 'w-[160px] md:w-[240px]' : 'w-[36px]'
        }`}
      >
        <input
          ref={inputRef}
          placeholder="Search Post"
          onChange={(e) => setInputValue(e.target.value)}
          onMouseDown={() => setIsFocused(true)}
          onBlur={() => {
            if (!inputValue) {
              setIsFocused(false)
              setShowInput(false)
            }
          }}
          type="search"
          className={[
            `absolute w-full h-full items-center placeholder:italic placeholder:text-sm`,
            `outline-hidden focus:outline-hidden transform`,
            `px-4 text-light/60 bg-transparent`,
            showInput ? `translate-x-0 pointer-events-auto ` : `translate-x-[100%] pointer-events-none hidden`
          ].join(' ')}
        />

        <button
          type="button"
          className={`absolute right-0 w-[36px] h-[36px] flex justify-center items-center ring-inset ring-light rounded-full`}
          onClick={() => {
            if (!showInput) {
              setShowInput(true)
            }
          }}
          onBlur={() => {
            if (!isFocused && !inputValue) {
              setShowInput(false)
            }
          }}
        >
          <MagnifyingGlassIcon width={18} height={18} className="text-light z-20" />
        </button>
      </div>
    </form>
  ) : null
}

export default SearchButton
