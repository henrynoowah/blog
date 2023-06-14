/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import PostCard from '@/components/common/Cards/PostCard'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const LIMIT = 20

const getData = async (searchParams: any): Promise<any[]> => {
  const { cursor, tag, searchTerm }: { [key: string]: string | undefined } = searchParams
  const isSearch = searchTerm !== null
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
          keyword: searchTerm,
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

  const tag = searchParams.get('tag')

  const searchTerm = searchParams.get('searchTerm')

  const [posts, setPosts] = useState<any[]>([])

  const [cursor, setCursor] = useState<string | null>(null)

  const [lastRef, setLastRef] = useState<Element | null>(null)

  const [prevTag, setPrevTag] = useState<string | null>(tag)

  useEffect(() => {
    const fetchData = async () => {
      let fetched: any[] = []
      fetched = await getData({ cursor, tag, searchTerm })
      if (tag === prevTag) {
        setPosts((prev) => [...(prev ?? []), ...fetched])
      } else {
        setPrevTag(tag)
        setPosts(fetched)
        setCursor(null)
      }
    }
    fetchData()
  }, [cursor, tag, searchTerm])

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

  useEffect(() => {})

  return (
    <ul className="flex flex-col gap-4 ">
      {posts.map((post, i) =>
        post ? (
          <li key={post.id} ref={i === posts.length - 1 ? setLastRef : undefined}>
            <PostCard {...post} />
          </li>
        ) : null
      )}
    </ul>
  )
}

export default PostsContainer