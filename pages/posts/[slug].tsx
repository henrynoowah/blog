import { createClient } from '@supabase/supabase-js'
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'

import { remark } from 'remark'
import html from 'remark-html'

interface Params {
  post: any
  htmlString: string
}

const index: NextPage<Params> = ({ post, htmlString }) => {
  return (
    <div>
      <article>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlString }} />
      </article>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const paths: any[] = []

  const supabasUrl = 'https://wgqvlbpnxinivklwiscj.supabase.co'
  const supabasKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndncXZsYnBueGluaXZrbHdpc2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzMzQ3OTUsImV4cCI6MTk4MzkxMDc5NX0.1eGxlPdKYwQzDmEY35Ne1UTHT-UdspkBk1q9CQaS-Ek'
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
  let htmlString = null
  const supabasUrl = 'https://wgqvlbpnxinivklwiscj.supabase.co'
  const supabasKey =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6IndncXZsYnBueGluaXZrbHdpc2NqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzMzQ3OTUsImV4cCI6MTk4MzkxMDc5NX0.1eGxlPdKYwQzDmEY35Ne1UTHT-UdspkBk1q9CQaS-Ek'

  const supabase = createClient(supabasUrl, supabasKey)

  const { data } = await supabase.from('posts').select('*').eq('slug', params?.slug)

  if (data) {
    post = data.find((x) => x.slug === params?.slug)

    const processedContent = await remark().use(html).process(post.content)
    htmlString = processedContent.toString()
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
      htmlString
    }
  }
}

export default index
