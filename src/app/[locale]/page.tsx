import { useTranslations } from 'next-intl'
import { Inter } from 'next/font/google'
import { MainContainer } from './_components/main-container'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

const Home = async () => {
  return (
    <main className={inter.variable}>
      <MainContainer />
    </main>
  )
}

export default Home
