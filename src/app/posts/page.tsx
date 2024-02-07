import { getPosts } from '@/services/posts'
import PostsContainer from './PostsContainer'

export const dynamic = 'force-dynamic'

const getData = async (): Promise<any> => {
  return await getPosts({})
}

const Posts = async () => {
  const posts = await getData()

  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <PostsContainer fallbackData={posts} />
    </div>
  )
}

export default Posts
