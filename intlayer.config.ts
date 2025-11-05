import { type IntlayerConfig, Locales } from 'intlayer';

export const locales = [Locales.ENGLISH, Locales.KOREAN];

/** @type {import('intlayer').IntlayerConfig} */
const config: IntlayerConfig = {
  internationalization: {
    locales,
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    enabled: true,
  },
  content: {
    watch: true,
  },
};

export default config;
