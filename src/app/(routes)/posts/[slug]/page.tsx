import { MarkdowRenderer } from '@/components/common/markdowns'
import { getPost } from '@/services/posts'
import { Metadata } from 'next/types'

export const dynamic = 'force-static'

const getData = async (slug: string): Promise<any> => {
  return await getPost(slug)
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const post = await getPost(params.slug)
  return {
    title: post?.title
  }
}

const PostDetailPage = async ({ params }: any) => {
  const slug = decodeURIComponent(params.slug)
  const post = await getData(slug)
  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <div className="border-b py-2 mb-2 border-solid border-primary/60 flex flex-col gap-y-2">
        <h1 className="text-2xl font-semibold text-primary dark:text-light">{post.title}</h1>
        <span className="w-full flex justify-start text-base text-primary dark:text-gray-400">
          {new Date(post.released_at).toLocaleDateString('ko', {
            month: '2-digit',
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
      </div>

      <article className="flex flex-col gap-2 pt-6">
        <MarkdowRenderer markdown={post?.body} />
      </article>
    </div>
  )
}

export default PostDetailPage
