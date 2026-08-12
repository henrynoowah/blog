import { t, type Dictionary } from 'intlayer';

const metadataContent = {
  key: 'metadata',
  content: {
    title: t({ en: 'NoowaH — Hawoon Joh', ko: 'NoowaH — 조하운' }),
    description: t({
      en: 'Personal site of Hawoon Joh (NOOWAH), a product engineer.',
      ko: '프로덕트 엔지니어 조하운(NOOWAH)의 개인 사이트.',
    }),
    aboutTitle: t({ en: 'About | Hawoon Joh', ko: '소개 | 조하운' }),
  },
} satisfies Dictionary;

export default metadataContent;
