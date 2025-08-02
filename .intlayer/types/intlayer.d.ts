/* eslint-disable */
import { Locales } from 'intlayer';
import _Xf0s6YUrkFW3dRMhjGiU from './nagivation.ts';
import _02VgYU8hTNtbs5A9Lvm7 from './page.ts';

declare module 'intlayer' {
  interface IntlayerDictionaryTypesConnector {
    "nagivation": typeof _Xf0s6YUrkFW3dRMhjGiU;
    "page": typeof _02VgYU8hTNtbs5A9Lvm7;
  }

  type DeclaredLocales = Locales.ENGLISH | Locales.KOREAN;
  type RequiredLocales = Locales.ENGLISH | Locales.KOREAN;
  type ExtractedLocales = Extract<Locales, RequiredLocales>;
  type ExcludedLocales = Exclude<Locales, RequiredLocales>;
  interface IConfigLocales<Content> extends Record<ExtractedLocales, Content>, Partial<Record<ExcludedLocales, Content>> {}
}