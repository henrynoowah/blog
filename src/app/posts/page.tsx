import PostCard from '@/components/common/Cards/PostCard'
import Pagination from '@/components/common/Pagination/Pagination'
import { createClient } from '@supabase/supabase-js'

export const dynamic = 'force-dynamic'

const supabasUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabasKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const getData = async (searchParams: any) => {
  let posts = null
  let total = null
  const page = Number.parseInt((searchParams.page as string) ?? 1)
  const limit = 4
  const supabase = createClient(supabasUrl, supabasKey)

  const rangeStart = page > 1 ? limit * (page === 2 ? 1 : page + 1) : 0
  const rangeEnd = rangeStart + limit - 1

  const selectString = 'id, title, tags, created_at, slug, description'

  if (searchParams?.tag) {
    const { data, count } = await supabase
      .from('posts')
      .select(selectString, {
        count: 'exact',
      })
      .contains('tags', [searchParams.tag])
      .order('created_at', { ascending: false })
      .range(rangeStart, rangeEnd)
    posts = data
    total = count ?? 0
  } else {
    const { data, count } = await supabase
      .from('posts')
      .select(selectString, {
        count: 'exact',
      })
      .order('created_at', { ascending: false })
      .range(rangeStart, rangeEnd)

    posts = data
    total = count ?? 0
  }
  const pageCount = total && total < limit ? 1 : Math.floor(total / limit)

  return { posts, pageCount }
}

const Posts = async ({ searchParams }: any) => {
  const { posts, pageCount } = await getData(searchParams)
  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <div className="w-full py-2">{/* <p>Posts</p> */}</div>
      <ul className="flex flex-col gap-4 ">
        {posts?.map((post) => (
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
