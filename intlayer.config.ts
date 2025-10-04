import { Locales, type IntlayerConfig } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.KOREAN],
    defaultLocale: Locales.ENGLISH,
  },
  editor: {
    applicationURL: 'http://localhost:3000',
    enabled: true,
  },
};

export default config;
