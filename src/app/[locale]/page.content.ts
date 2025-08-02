import { t, type Dictionary } from 'intlayer'
import { github } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const pageContent: Dictionary = {
  key: 'page',
  content: {
    home: {
      title: t({
        en: 'Home',
        ko: '홈',
      }),
    },      
    posts: {
      title: t({
        en: 'Posts',
        ko: '글',
      }),
    },
    about: {
      title: t({
        en: 'About',
        ko: '소개',
      }),
    },
    github: {
      title: t({
        en: 'GitHub',
        ko: '깃허브',
      }),
    },
    chat: {
      title: t({
        en: 'Chat',
        ko: '채팅',
      }),
    },
  }
} satisfies Dictionary

export default pageContent