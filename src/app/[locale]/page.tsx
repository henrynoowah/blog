import DictionaryProvider from '@/context/dictionary-provider'
import { Locale } from '@/i18n.config'
import { getDictionary } from '@/lib/dictionaries'
import { Inter } from 'next/font/google'
import { MainContainer } from './_components/main-container'

const inter = Inter({ variable: '--font-inter', subsets: ['latin'] })

interface Params {
  params: Promise<{
    locale: Locale
  }>
}

const Home = async (props: Params) => {
  const params = await props.params
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
