/* eslint-disable */
import { Locales } from 'intlayer';
import _LiPwECrBJf0UArwPWFp9 from './about.ts';
import _a8YHGh9OBafkbzSEZEot from './page.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "about": typeof _LiPwECrBJf0UArwPWFp9;
    "page": typeof _a8YHGh9OBafkbzSEZEot;
  }

  type DeclaredLocales = Locales.ENGLISH | Locales.KOREAN;
  type RequiredLocales = Locales.ENGLISH | Locales.KOREAN;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}