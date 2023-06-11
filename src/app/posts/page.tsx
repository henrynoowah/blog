import PostCard from '@/components/common/Cards/PostCard'
import Pagination from '@/components/common/Pagination/Pagination'

export const dynamic = 'force-dynamic'

const getData = async (searchParams: any): Promise<any> => {
  const { page, tag }: { [key: string]: string | undefined } = searchParams

  let posts: any[] = []
  let pageCount = 0

  const payload = {
    operationName: 'Posts',
    variables: {
      username: process.env.VELOG_ID,
      limit: 20,
      tag: tag ?? null
    },
    query:
      'query Posts($cursor: ID, $username: String, $temp_only: Boolean, $tag: String, $limit: Int) {\n posts(cursor: $cursor, username: $username, temp_only: $temp_only, tag: $tag, limit: $limit) {\n id\n title\n short_description\n thumbnail\n user {\n id\n username\n profile {\n id\n thumbnail\n __typename\n }\n __typename\n }\n url_slug\n released_at\n updated_at\n comments_count\n tags\n is_private\n likes\n __typename\n }\n}\n'
  }

  try {
    const response = await fetch('https://v2cdn.velog.io/graphql', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())

    posts = response.data.posts
    pageCount = posts.length
    return { posts, pageCount }
  } catch (e) {}
}

const Posts = async ({ searchParams }: any) => {
  const { posts, pageCount } = await getData(searchParams)

  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <div className="w-full py-2">
        <p>Posts</p>
      </div>
      <ul className="flex flex-col gap-4 ">
        {posts?.map((post: any) => (
          <li key={post.id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
      <div className="w-full py-3">
        <Pagination pageCount={pageCount} />
      </div>
    </div>
  )
}

export default Posts
