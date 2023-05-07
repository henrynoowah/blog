import { MarkdowRenderer } from '@/components/common/Markdowns'
import { createClient } from '@supabase/supabase-js'
import { Metadata } from 'next'
import { cache } from 'react'

export const dynamic = 'force-static'

const supabasUrl = process.env.NEXT_PUBLIC_SUPABASE_URL as string
const supabasKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string

const getData = cache(async (slug: string) => {
  const supabase = createClient(supabasUrl, supabasKey)
  const { data } = await supabase.from('posts').select('*').eq('slug', slug)
  return data?.find((x) => x.slug === slug)
})

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const post = await getData(params.slug)
  return {
    title: post?.title
  }
}

const PostDetailPage = async ({ params }: any) => {
  const post = await getData(params.slug)
  return post ? (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <div className="w-full flex justify-end"></div>
      <article className="flex flex-col gap-4">
        <MarkdowRenderer markdown={post.content} />
      </article>
    </div>
  ) : null
}

export default PostDetailPage
