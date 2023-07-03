'use client'

import { usePathname, useRouter } from 'next/navigation'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

interface Params {
  value: string | null
}

const SearchBar = ({ value }: Params) => {
  const pathname = usePathname()
  const router = useRouter()

  const [inputValue, setInputValue] = useState<string>(value ?? '')

  const handleOnInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)
  }

  const handleSubmit: FormEventHandler = (e) => {
    e.preventDefault()
    if (inputValue !== null && inputValue !== '') {
      router.push(`${pathname}?search=${inputValue}`)
    } else {
      router.push(`${pathname}`)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="w-full py-4">
      <input
        value={inputValue}
        type="text"
        onChange={handleOnInputChange}
        className="w-full text-lg bg-transparent ring-primary border-b border-solid border-primary "
      />
    </form>
  )
}

export default SearchBar
