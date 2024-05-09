import { Locale } from '@/i18n.config'
import { Inter } from 'next/font/google'
import MainContainer from './_components/MainContainer'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

interface Params {
  params: {
    locale: Locale
  }
}

const Home = async ({ params }: Params) => {
  return (
    <main className={inter.variable}>
      <MainContainer />
    </main>
  )
}

export default Home
