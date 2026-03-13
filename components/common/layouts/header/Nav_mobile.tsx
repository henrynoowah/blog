'use client';

import { IconArrowUpRight } from '@tabler/icons-react';
import { LocalesValues } from 'intlayer';
import Link from 'next/link';
import { useState } from 'react';
import Button_nav from './Button_nav';

interface Params {
  navOption: Array<{
    label: string;
    href: string;
    locale: LocalesValues;
    external?: boolean;
  }>;
}

const Nav_mobile = ({ navOption }: Params) => {
  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);

  return (
    <>
      <Button_nav onChange={setIsNavOpened} />

      <nav
        className={`absolute end-0 top-[64px] ${
          isNavOpened
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } transition-opacity duration-300 ease-out w-full sm:w-80 h-screen`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-background/60 backdrop-blur-xl transition-opacity duration-300 ${
            isNavOpened ? 'opacity-100' : 'opacity-0'
          }`}
        />

        <ul className="relative flex flex-col py-4 px-6 sm:px-10">
          {navOption.map((nav, index) => (
            <li
              key={`mobile-nav-${nav.label}`}
              className={`transform transition-all duration-500 ease-out ${
                isNavOpened
                  ? 'translate-y-0 opacity-100'
                  : '-translate-y-3 opacity-0'
              }`}
              style={{ transitionDelay: isNavOpened ? `${index * 80}ms` : '0ms' }}
            >
              <Link
                href={
                  !nav.external
                    ? `${nav.locale !== 'en' ? `/${nav.locale}` : ''}${nav.href}`
                    : nav.href
                }
                target={nav.external ? '_blank' : undefined}
                className="group flex items-center justify-between py-4 border-b border-border/30 text-foreground hover:text-primary transition-colors duration-200"
              >
                <span className="text-sm font-light tracking-wide">
                  {nav.label}
                </span>
                <IconArrowUpRight
                  size={14}
                  strokeWidth={1.5}
                  className="text-muted-foreground/40 group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all duration-200"
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav_mobile;
