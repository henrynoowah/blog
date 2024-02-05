import PostsContainer from './PostsContainer'

export const dynamic = 'force-dynamic'

const Posts = async () => {
  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <PostsContainer />
    </div>
  )
}

export default Posts
