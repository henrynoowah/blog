import { GetStaticProps, NextPage } from 'next'
import Layouts from '../../layouts/Layouts'

interface Params {
  posts: any[]
}

const index: NextPage<Params> = ({ posts }) => {
  return (
    <Layouts header>
      <div className="w-full h-full flext justify-center items-center">
        <div className="w-full h-full flex justify-center items-center">
          <h1 className="text-primary text-[36px]">Posts</h1>
        </div>
      </div>
    </Layouts>
  )
}

export const getStaticPorps: GetStaticProps = async () => {
  const posts = await fetch('/api/posts', { method: 'GET' })

  return {
    props: {
      posts: []
    }
  }
}

export default index
