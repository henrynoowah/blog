import { Metadata } from 'next'

export const generateMetadata = async ({ params }: any): Promise<Metadata> => {
  return {
    title: params.slug,
  }
}

const PostDetailPage = ({ params }: any) => {
  return <div>{params.slug}</div>
}

export default PostDetailPage
