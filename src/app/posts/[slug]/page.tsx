import { MarkdowRenderer } from '@/components/common/Markdowns'
import { Metadata } from 'next'

export const dynamic = 'force-static'

const getData = async (slug: string): Promise<any> => {
  let post = null

  const payload = {
    operationName: 'ReadPost',
    variables: {
      username: process.env.NEXT_PUBLIC_VELOG_ID,
      url_slug: slug
    },
    query: `query ReadPost($username: String, $url_slug: String) {\npost(username: $username, url_slug: $url_slug) {\nid\n    title\n    released_at\n    updated_at\n    tags\n    body\n    short_description\n    is_markdown\n    is_private\n    is_temp\n    thumbnail\n    comments_count\n    url_slug\n    likes\n    liked\n    user {\n      id\n      username\n      profile {\n        id\n        display_name\n        thumbnail\n        short_bio\n        profile_links\n        __typename\n      }\n      velog_config {\n        title\n        __typename\n      }\n      __typename\n    }\n    comments {\n      id\n      user {\n        id\n        username\n        profile {\n          id\n          thumbnail\n          __typename\n        }\n        __typename\n      }\n      text\n      replies_count\n      level\n      created_at\n      level\n      deleted\n      __typename\n    }\n    series {\n      id\n      name\n      url_slug\n      series_posts {\n        id\n        post {\n          id\n          title\n          url_slug\n          user {\n            id\n            username\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    linked_posts {\n      previous {\n        id\n        title\n        url_slug\n        user {\n          id\n          username\n          __typename\n        }\n        __typename\n      }\n      next {\n        id\n        title\n        url_slug\n        user {\n          id\n          username\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n}\n`
  }

  try {
    const response = await fetch('https://v2cdn.velog.io/graphql', {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())

    post = response.data.post
    return post
  } catch (e) {}
}

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  const post = await getData(params.slug)
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
        <span className="w-full flex justify-start text-md text-secondary dark:text-gray-400">
          {new Date(post.released_at).toLocaleDateString('ko', {
            month: '2-digit',
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
      </div>

      <article className="flex flex-col gap-4 pt-6">
        <MarkdowRenderer markdown={post?.body} />
      </article>
    </div>
  )
}

export default PostDetailPage
