import { CSSProperties, FC, HTMLAttributes } from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'

interface Params extends HTMLAttributes<HTMLDivElement> {
  width?: number | string
  height?: number | string
}

const SearchNotFound: FC<Params> = ({ width = '100%', height = '100%', className }) => {
  const styles: CSSProperties = {
    width: width,
    height: height
  }

  return (
    <div style={styles} className={`relative flex flex-col justify-center items-center  ${className}`}>
      <div className="flex justify-center">
        <MagnifyingGlassIcon width={100} height={100} className="text-primary dark:text-light" />
      </div>
      <h1 className="text-2xl pt-10 font-medium text-primary dark:text-light">No Results Found</h1>
      <p className="leading-6 text-center text-gray-400">We cannot find any items matching your search</p>
    </div>
  )
}

export default SearchNotFound
