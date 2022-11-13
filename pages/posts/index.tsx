import { createClient } from '@supabase/supabase-js'
import { GetStaticProps, NextPage } from 'next'
import Link from 'next/link'
import { FC } from 'react'
import Layouts from '../../layouts/Layouts'

interface Params {
  posts: any[]
}

const index: NextPage<Params> = ({ posts }) => {
  return (
    <Layouts header>
      <div className="w-full flex justify-center py-4">
        <ul className="w-full max-w-2xl flex flex-col gap-4">
          {posts?.map((post) => (
            <li key={post.id}>
              <PostCardItem {...post} />
            </li>
          ))}
        </ul>
      </div>
    </Layouts>
  )
}

const PostCardItem: FC<{ title: string; tags: string[]; created_at: string; slug: string; content: string }> = (
  props
) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <div className="w-full flex flex-col p-4 ring-1 ring-primary rounded-md">
        <div className="flex justify-between items-center border-b border-solid border-primary">
          <p>{props.title}</p>
          <p className="text-sm">{new Date(props.created_at).toDateString()}</p>
        </div>
        <ul className="w-full flex justify-start gap-2 text-sm pt-2">
          {props.tags?.map((tag, idx) => (
            <li key={idx} className="w-fit p-1 px-3 ring-1 ring-primary/20 rounded-full text-[12px]">
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const supabasUrl = process.env.SUPABASE_URL as string
  const supabasKey = process.env.SUPABASE_KEY as string

  const supabase = createClient(supabasUrl, supabasKey)

  const { data: posts } = await supabase.from('posts').select('id, title, tags, created_at, slug')

  return {
    props: {
      posts
    }
  }
}

export default index
