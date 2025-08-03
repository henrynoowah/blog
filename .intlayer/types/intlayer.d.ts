/* eslint-disable */
import { Locales } from 'intlayer';
import _Z6nQKov227BmG1aL104v from './nagivation.ts';
import _a8YHGh9OBafkbzSEZEot from './page.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "nagivation": typeof _Z6nQKov227BmG1aL104v;
    "page": typeof _a8YHGh9OBafkbzSEZEot;
  }

  type DeclaredLocales = Locales.ENGLISH | Locales.KOREAN;
  type RequiredLocales = Locales.ENGLISH | Locales.KOREAN;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}