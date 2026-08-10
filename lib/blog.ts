import { Locales, type LocalesValues } from 'intlayer';

export const blogUrls = {
  [Locales.ENGLISH]: 'https://blog.noowah.dev/en',
  [Locales.KOREAN]: 'https://blog.noowah.dev/ko',
} as const;

export const getBlogUrl = (locale?: LocalesValues) =>
  locale === Locales.KOREAN ? blogUrls[Locales.KOREAN] : blogUrls[Locales.ENGLISH];
