import { getPosts } from '@/services/posts'
import PostsContainer from './_components/PostsContainer'

import matter from 'gray-matter'
import { Locale } from '@/i18n.config'
import { getGithubIssues } from '@/services/gh-issues'

export const dynamic = 'force-dynamic'

const getData = async ({ locale }: { locale: Locale }): Promise<any> => {
  return await getGithubIssues({ locale: locale })

  // const files = await response.json()

  // const posts = await Promise.all(
  //   files.map(async (file: any) => {
  //     const fileResponse = await fetch(file.download_url)
  //     const fileContent = await fileResponse.text()
  //     const { data } = matter(fileContent)

  //     return {
  //       filename: file.name,
  //       metadata: data
  //     }
  //   })
  // )

  return await getPosts({})
}

const Posts = async () => {
  const posts = await getData({ locale: 'en' })

  return (
    <div className="w-full max-w-2xl px-4 xl:px-0 py-4">
      <PostsContainer
      // fallbackData={posts}
      />
    </div>
  )
}

export default Posts
