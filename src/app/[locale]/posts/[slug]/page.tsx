import { MarkdowRenderer } from '@/components/common/markdowns'
import { Locale } from '@/i18n.config'
import { getGithubIssue } from '@/services/gh-issues'

export const dynamic = 'force-static'

interface Params {
  params: { locale: Locale; post: any; slug: string }
}

const getData = async ({ slug, locale }: { slug: string; locale: Locale }): Promise<any> => {
  const issueNumber = slug.split('-')[0]
  const response = await getGithubIssue(issueNumber)
  return response
  // if (Array.isArray(response) && response.length === 1 && response[0].title === slug) {
  //   return response[0]
  // }
}

// export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
//   const slug = decodeURIComponent(params.slug)
//   const post = await getData({ slug, locale: params.locale })
//   return {
//     title: post?.title,
//     description: post?.body
//   }
// }

const PostDetailPage = async ({ params }: Params) => {
  const slug = decodeURIComponent(params.slug)
  const post = await getData({ slug, locale: params.locale })
  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <div className="border-b py-2 mb-2 border-solid border-primary/60 flex flex-col gap-y-2">
        <h1 className="text-2xl font-semibold text-primary dark:text-light">{post?.title}</h1>
        <span className="w-full flex justify-start text-base text-primary dark:text-gray-400">
          {new Date(post?.created_at).toLocaleDateString('ko', {
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
