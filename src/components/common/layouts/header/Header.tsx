import { Locale } from '@/i18n.config';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import packageData from 'package.json';
import { Suspense } from 'react';
import Nav_mobile from './Nav_mobile';
import ShowSearchButton from './ShowSearchButton';
import { LocaleToggle } from '@/app/[locale]/_components/locale-toggle';
import { ThemeToggle } from '../../themeToggle';

const HEADER_HEIGHT = 72;

interface Params {
  navOption: Array<{
    label: string;
    href: string;
    locale: Locale;
    external?: boolean;
  }>;
  locale?: string;
}
const Header = ({ navOption, locale }: Params) => {
  return (
    <>
      <div
        style={{ minHeight: HEADER_HEIGHT }}
        className="w-full fixed top-0 border-b border-solid border-primary bg-primary flex justify-center items-center px-4 sm:px-10 z-20"
      >
        <div className="w-full flex justify-between max-w-[1920px]">
          <h1 className="relative">
            <Link href={locale ? `/${locale}` : `/`}>
              <p className="font-semibold z-10 text-[18px] text-accent ">NWH</p>
              <p className="font-semibold z-10 text-[8px] text-accent ">
                v{packageData.version}
              </p>
            </Link>
          </h1>

          <div className="flex justify-end items-center gap-[16px]">
            <Suspense>
              <ShowSearchButton />
            </Suspense>
            <LocaleToggle />
            <ThemeToggle />
            <div className="flex items-center">
              <Nav_mobile navOption={navOption} />
            </div>
          </div>
        </div>
      </div>
      <div style={{ minHeight: HEADER_HEIGHT }} className="w-full" />
    </>
  );
};

export default Header;
