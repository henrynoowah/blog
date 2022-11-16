import { createClient } from '@supabase/supabase-js'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import dynamic from 'next/dynamic'

const MarkdowRenderer = dynamic(() => import('../../components/common/MarkDownRenderer'), { ssr: false })
import Layouts from '../../layouts/Layouts'

interface Params {
  post: any
  markdown: string
}

const index: NextPage<Params> = ({ post, markdown }) => {
  return (
    <Layouts header>
      <div className="w-full flex justify-center py-4">
        <article className="w-full max-w-2xl flex flex-col gap-4">
          <MarkdowRenderer markdown={markdown} />
        </article>
      </div>
    </Layouts>
  )
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const paths: any[] = []

  const supabasUrl = process.env.SUPABASE_URL as string
  const supabasKey = process.env.SUPABASE_KEY as string
  const supabase = createClient(supabasUrl, supabasKey)
  const { data } = await supabase.from('posts').select('slug')

  data?.map((post) => ({ params: { slug: post.slug } })).forEach((x) => paths.push(x))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let post = null
  let markdown = null
  // let htmlString = null
  const supabasUrl = process.env.SUPABASE_URL as string
  const supabasKey = process.env.SUPABASE_KEY as string

  const supabase = createClient(supabasUrl, supabasKey)

  const { data } = await supabase.from('posts').select('*').eq('slug', params?.slug)

  if (data) {
    post = data.find((x) => x.slug === params?.slug)

    markdown = post.content

    console.log(markdown)
    // const processedContent = await remark().use(html).process(post.content)
    // htmlString = processedContent.toString()
  } else {
    return {
      redirect: {
        destination: '/posts',
        permanent: false
      }
    }
  }

  return {
    props: {
      post,
      markdown
    }
  }
}

export default index
