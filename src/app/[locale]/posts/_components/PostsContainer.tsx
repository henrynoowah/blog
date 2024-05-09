/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import PostCard from '@/components/common/cards/PostCard'
import PostCard_skeleton from '@/components/common/cards/PostCard_skeleton'
import { getPosts } from '@/services/posts'
import { XMarkIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import useSWRInfinite from 'swr/infinite'

const SearchNotFound = dynamic(() => import('./SearchNotFound'))

const LIMIT = 20

interface Params {
  fallbackData?: any[]
}

const PostsContainer = ({ fallbackData }: Params) => {
  const searchParams = useSearchParams()

  const router = useRouter()

  const tag = searchParams.get('tag')

  const search = searchParams.get('search')

  const [lastRef, setLastRef] = useState<Element | null>(null)

  const getKey = (pageIndex: number, previousPageData: any[]) => {
    if (previousPageData && !previousPageData.length) return null //
    if (pageIndex === 0) return [pageIndex, { tag, search, limit: LIMIT }]
    return { cursor: previousPageData[previousPageData.length - 1].id, limit: LIMIT }
  }

  const {
    data: page,
    isLoading,
    isValidating,
    setSize
  } = useSWRInfinite(getKey, (key) => getPosts({ ...key, tag, search }), {
    keepPreviousData: true,
    fallbackData: [fallbackData]
  })

  const intersectionObserverCallback = (entries: IntersectionObserverEntry[]) => {
    if (entries[0].isIntersecting) {
      if (page && page.length > 0) {
        const lastPage = page[page.length - 1]
        if (!isValidating && !isLoading && lastPage && lastPage.length === LIMIT) {
          setSize((page) => page + 1)
        }
      }
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(intersectionObserverCallback, {
      threshold: 0,
      root: null
    })

    lastRef && observer.observe(lastRef)

    return () => {
      observer.disconnect()
    }
  }, [intersectionObserverCallback, lastRef])

  return (
    <div className="flex flex-col justify-start gap-6">
      {(tag || search) && (
        <div
          className={[
            `bg-gray-200 dark:bg-primary rounded-full overflow-hidden text-xs font-medium px-2 py-1 mx-1 ring-1 ring-primary/20 dark:ring-light/10`,
            `flex gap-2 items-center whitespace-nowrap w-fit`,
            `text-primary dark:text-light`
          ].join(' ')}
        >
          {!!tag && `#${tag}`}
          {!!search && search}
          <XMarkIcon width={14} height={14} className="cursor-pointer" onClick={() => router.replace('/posts')} />
        </div>
      )}

      <ul className="flex flex-col gap-6">
        {page && page?.length > 0 ? (
          page?.map(
            (posts) =>
              posts &&
              posts.map((post: any, i: number) => (
                <li key={`${post.id}-${i}`} ref={i === posts.length - 1 ? setLastRef : undefined}>
                  <PostCard {...post} />
                </li>
              ))
          )
        ) : !isLoading ? (
          <SearchNotFound className="min-h-[320px]" />
        ) : (
          Array.from({ length: 10 }).map((_, i) => <PostCard_skeleton key={`card-skeleton-${i}`} />)
        )}
      </ul>
    </div>
  )
}

export default PostsContainer
