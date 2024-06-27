'use client'

import { i18n } from '@/i18n.config'
import Link from 'next/link'
import { useParams, useRouter } from 'next/navigation'

interface Props {
  [key: string]: any
}

const PostCard = (props: Props) => {
  const router = useRouter()

  const issueNumber = props.url.split('/')[props.url.split('/').length - 1]
  const slug = props.title
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()

  const params = useParams()
  const locale = params.locale

  const handleLabelSelect = (label: string) => {
    router.push(`${locale ? `/${locale}` : ''}` + `/posts?label=${label}`)
  }

  return (
    <Link href={(locale === 'ko' ? '/ko' : '') + `/posts/${issueNumber}-${slug}`} prefetch={false}>
      <div className="w-full flex flex-col ring-1 ring-primary/20 hover:ring-primary rounded-md bg-card text-dark dark:text-light">
        <div className="flex flex-col p-4 border-b border-solid border-primary py-2">
          <p className="text:md sm:text-lg font-semibold text-primary dark:text-light">{props?.title ?? ''}</p>
          <p className="text-sm text-primary dark:text-gray-400">
            {new Date(props.created_at).toLocaleDateString('ko', {
              month: '2-digit',
              day: 'numeric',
              year: 'numeric'
            })}
          </p>
          <div className="py-3 min-h-[2rem]">
            <p className="truncate text-sm ">{props.body}</p>
          </div>
        </div>

        <ul className="w-full flex justify-start gap-2 text-sm p-4 overflow-x-auto scrollbar-hide">
          {props.labels && props.labels.length > 0 ? (
            props.labels
              ?.filter((label: any) => !i18n.locales.includes(label.name))
              .map((label: any) => (
                <li key={label.id}>
                  <button
                    type="button"
                    className="bg-gray-200 dark:bg-primary rounded-full overflow-hidden text-xs font-medium px-2 py-1 mx-1 ring-1 ring-primary/20 dark:ring-light/10"
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      handleLabelSelect(label.name)
                    }}
                  >
                    <p className="text-primary dark:!text-light italic whitespace-nowrap">{`#${label.name}`}</p>
                  </button>
                </li>
              ))
          ) : (
            <span className="bg-gray-200 dark:bg-primary rounded-full overflow-hidden text-xs font-medium px-2 py-1 mx-1 ring-1 ring-primary/20 dark:ring-light/10">
              <p className="text-primary dark:!text-light whitespace-nowrap">{`:(`}</p>
            </span>
          )}
        </ul>
      </div>
    </Link>
  )
}

export default PostCard
