import PostCard_skeleton from '@/components/common/cards/PostCard_skeleton'

const LoadingPosts = () => {
  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <div className="w-full h-full flex flex-col justify-start gap-6">
        <ul className="flex flex-col gap-6">
          {Array.from({ length: 10 }).map((_, i) => (
            <PostCard_skeleton key={`card-skeleton-${i}`} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default LoadingPosts
