'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface Props {
  [key: string]: any
  id: string
  released_at: string
  updated_at: string
  url_slug: string
  tags: string[]
  short_description: string
}

const PostCard = (props: Props) => {
  const router = useRouter()

  const handleTagSelect = (tag: string) => {
    router.push(`/posts?tag=${tag}`)
  }

  return (
    <Link href={`/posts/${props.url_slug}`} prefetch={false}>
      <div className="w-full flex flex-col ring-1 ring-primary/20 hover:ring-primary rounded-md bg-card text-dark dark:text-light">
        <div className="flex flex-col p-4 border-b border-solid border-primary py-2">
          <p className="text:md sm:text-lg font-semibold text-primary dark:text-light">{props?.title ?? ''}</p>
          <p className="text-sm text-secondary dark:text-gray-400">
            {new Date(props.released_at).toLocaleDateString('ko', {
              month: '2-digit',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
          <div className="py-3 min-h-[2rem]">
            <p className="truncate text-sm ">{props.short_description}</p>
          </div>
        </div>

        <ul className="w-full flex justify-start gap-2 text-sm p-4 overflow-x-auto scrollbar-hide">
          {props.tags?.map((tag, idx) => (
            <li key={idx}>
              <button
                type="button"
                className="bg-gray-200 dark:bg-secondary rounded-full overflow-hidden text-[12px] font-medium px-2 py-1 mx-1 ring-1 ring-primary/20 dark:ring-light/10"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleTagSelect(tag)
                }}
              >
                <p className="text-primary dark:!text-light italic whitespace-nowrap">{`#${tag}`}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default PostCard
