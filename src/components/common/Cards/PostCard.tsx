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
    <Link href={`/posts/${props.url_slug}`}>
      <div className="w-full flex flex-col p-4 ring-1 ring-primary/20 hover:ring-primary rounded-md">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end border-b border-solid border-primary py-2">
          <p className="text:md sm:text-lg font-semibold text-primary">{props.title}</p>
          <p className="text-sm">
            {new Date(props.released_at).toLocaleDateString('ko', {
              month: '2-digit',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
        </div>

        <div className="py-3 min-h-[2rem]">
          <p className="truncate text-sm">{props.short_description}</p>
        </div>
        <ul className="w-full flex justify-start gap-2 text-sm pt-2">
          {props.tags?.map((tag, idx) => (
            <li key={idx}>
              <button
                type="button"
                className="w-fit p-1 px-3 ring-1 ring-primary/20 rounded-full text-[12px] hover:ring-primary"
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  handleTagSelect(tag)
                }}
              >
                <p className="text-primary italic">{`#${tag}`}</p>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export default PostCard
