import DictionaryProvider from '@/context/dictionary-provider'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import { Inter } from 'next/font/google'
import MainContainer from './_components/MainContainer'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

interface Params {
  params: {
    locale: Locale
  }
}

const Home = async ({ params }: Params) => {
  const dictionary = await getDictionary(params.locale)
  return (
    <main className={inter.variable}>
      <DictionaryProvider dictionary={dictionary}>
        <MainContainer />
      </DictionaryProvider>
    </main>
  )
}

export default Home
