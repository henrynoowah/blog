import 'server-only'
import type { Locale } from '@/i18n.config'

const dictionaries = (() => {
  let obj: { [key: string]: { [key: string]: () => Promise<any> } } = {}
  for (let locale of ['en', 'ko']) {
    obj[locale] = {
      navigation: async () => import(`src/dictionaries/${locale}/navigation.json`).then((module) => module.default)
    }
  }
  return obj
})()
// const dictionaries = {
//   en: () => import('@/dictionaries/en.json').then((module) => module.default),
//   ko: () => import('@/dictionaries/ko.json').then((module) => module.default)
// }

export const getDictionary = async (locale: Locale, key?: string | string[]) => {
  switch (typeof key) {
    case 'string': {
      return dictionaries[locale ?? 'en'][key]()
    }
    case 'object': {
      if (Array.isArray(key)) {
        let obj: { [key: string]: Promise<any> } = {}
        for (let k of key) {
          console.log(locale)
          if (dictionaries[locale ?? 'en'][k]) {
            {
              obj[k] = await dictionaries[locale ?? 'en'][k]()
            }
          }
        }

        return obj
      }
    }
    case 'undefined':
    default: {
      return dictionaries[locale ?? 'en']
    }
  }
}
// export const getDictionary = async (locale: Locale) => dictionaries[locale]()
