/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import PostCard from '@/components/common/Cards/PostCard'
import PostCard_skeleton from '@/components/common/Cards/PostCard_skeleton'
import { XMarkIcon } from '@heroicons/react/24/solid'
import dynamic from 'next/dynamic'
import { useRouter, useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
const SearchNotFound = dynamic(() => import('./SearchNotFound'))

const LIMIT = 20

const getData = async (searchParams: any): Promise<any[]> => {
  const { cursor, tag, search }: { [key: string]: string | undefined } = searchParams
  const isSearch = search !== null && search !== ''
  const username = process.env.NEXT_PUBLIC_VELOG_ID
  const payload = !isSearch
    ? {
        operationName: 'Posts',
        variables: {
          username,
          limit: LIMIT,
          cursor,
          tag: tag ?? null
        },
        query: `query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $limit: Int) {\n posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $limit) {\n id\n title\n short_description\n thumbnail\n user {\n id\n username\n profile {\n id\n thumbnail\n __typename\n }\n __typename\n }\n url_slug\n released_at\n updated_at\n comments_count\n tags\n is_private\n likes\n __typename\n }\n}\n`
      }
    : {
        operationName: 'SearchPosts',
        variables: {
          keyword: search,
          username
        },
        query:
          'query SearchPosts($keyword: String!, $offset: Int, $username: String) {\n  searchPosts(keyword: $keyword, offset: $offset, username: $username) {\n    count\n    posts {\n      id\n      title\n      short_description\n      thumbnail\n      user {\n        id\n        username\n        profile {\n          id\n          thumbnail\n          __typename\n        }\n        __typename\n      }\n      url_slug\n      released_at\n      tags\n      is_private\n      comments_count\n      __typename\n    }\n    __typename\n  }\n}\n'
      }

  try {
    const response = await fetch('https://v2cdn.velog.io/graphql', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())

    return !isSearch ? response.data.posts : response.data.searchPosts.posts
  } catch (e) {
    return []
  }
}

const PostsContainer = () => {
  const searchParams = useSearchParams()

  const router = useRouter()

  const tag = searchParams.get('tag')

  const search = searchParams.get('search')

  const [posts, setPosts] = useState<any[]>([])

  const [cursor, setCursor] = useState<string | null>(null)

  const [lastRef, setLastRef] = useState<Element | null>(null)

  const [prevTag, setPrevTag] = useState<string | null>(null)

  const [prevSearch, setPrevSearch] = useState<string | null>(null)

  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)

      let fetched: any[] = []
      fetched = await getData({ cursor, tag, search })

      if (search) {
        if (search !== prevSearch) {
          setPrevTag(null)
          setPosts(fetched)
        }
        setCursor(null)
      } else {
        if (tag === prevTag) {
          setPosts((prev) => [...(prev ?? []), ...fetched])
        } else {
          setPrevTag(tag)
          setPosts(fetched)
          setCursor(null)
        }
        setPrevSearch(null)
        setCursor(null)
      }
      setIsLoading(false)
    }

    fetchData()
  }, [cursor, tag, search])

  const intersectionObserverCallback = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
    if (entries[0].isIntersecting) {
      if (posts && posts.slice(-LIMIT).length === LIMIT) {
        setCursor(posts[posts.length - 1].id)
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
            `bg-gray-200 dark:bg-secondary rounded-full overflow-hidden text-xs font-medium px-2 py-1 mx-1 ring-1 ring-primary/20 dark:ring-light/10`,
            `flex gap-2 items-center whitespace-nowrap w-fit`,
            `text-primary dark:text-light`
          ].join(' ')}
        >
          {tag || search}
          <XMarkIcon width={14} height={14} onClick={() => router.replace('/posts')} />
        </div>
      )}

      <ul className="flex flex-col gap-6">
        {posts.length > 0 ? (
          posts.map((post, i) =>
            post ? (
              <li key={`${post.id}-${i}`} ref={i === posts.length - 1 ? setLastRef : undefined}>
                <PostCard {...post} />
              </li>
            ) : null
          )
        ) : !isLoading ? (
          <SearchNotFound className="min-h-[320px]" />
        ) : (
          Array.from({ length: 10 }).map((_, i) => <PostCard_skeleton key={i} />)
        )}
      </ul>
    </div>
  )
}

export default PostsContainer
