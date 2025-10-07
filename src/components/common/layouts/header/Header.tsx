import Link from 'next/link';
import packageData from 'package.json';
import { Suspense } from 'react';
import Nav_mobile from './Nav_mobile';
import ShowSearchButton from './ShowSearchButton';
import { LocaleToggle } from '@/app/[locale]/_components/locale-toggle';
import { getLocalizedUrl, Locales } from 'intlayer';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

const HEADER_HEIGHT = 72;

interface Params {
  navOption: Array<{
    label: string;
    href: string;
    locale: Locales;
    external?: boolean;
  }>;
  locale?: Locales;
}
const Header = ({ navOption, locale }: Params) => {
  return (
    <>
      <div
        style={{ minHeight: HEADER_HEIGHT }}
        className="w-full fixed top-0 border-b border-solid border-primary text-primary-foreground bg-primary flex justify-center items-center px-4 sm:px-10 z-20"
      >
        <div className="w-full flex justify-between max-w-[1920px]">
          <h1 className="relative">
            <Link href={getLocalizedUrl(`/`, locale ?? Locales.ENGLISH)}>
              <p className="font-semibold z-10 text-[18px]">NWH</p>
              <p className="font-semibold z-10 text-[8px]">
                v{packageData.version}
              </p>
            </Link>
          </h1>

          <div className="flex justify-end items-center gap-[16px]">
            <Suspense>
              <ShowSearchButton />
            </Suspense>
            <LocaleToggle />
            <AnimatedThemeToggler />
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
