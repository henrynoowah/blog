'use client';

import { Locale } from '@/i18n.config';
import Link from 'next/link';
import { useState } from 'react';
import Button_nav from './Button_nav';
import { IconChevronDown } from '@tabler/icons-react';

interface Params {
  navOption: Array<{
    label: string;
    href: string;
    locale: Locale;
    external?: boolean;
  }>;
}

const Nav_mobile = ({ navOption }: Params) => {
  const [isNavOpened, setIsNavOpened] = useState<boolean>(false);

  return (
    <>
      <Button_nav onChange={setIsNavOpened} />

      <nav
        className={`absolute end-0 top-[72px] bg-black/60 xl:bg-primary text-primary-foreground ${
          isNavOpened
            ? 'translate-x-0 opacity-100 pointer-events-auto'
            : 'translate-x-0 opacity-0 pointer-events-none'
        } transition duration-300 ease-out w-full xl:max-w-[360px] h-screen 
        `}
      >
        <ul className="flex flex-col text-lg items-end font-semibold">
          {navOption.map((nav, index) => (
            <li
              key={`mobile-nav-${nav.label}`}
              style={{
                transitionDuration: `${index * 350}ms`,
              }}
              className={`w-full transition bg-primary py-1 xl:first:pt-4 first:border-t border-t border-primary-foreground/10 border-solid last:pb-2 last:rounded-bl-xl ${
                isNavOpened ? 'translate-x-0' : 'translate-x-[200%]'
              }`}
            >
              <Link
                href={
                  !nav.external
                    ? `${nav.locale !== 'en' ? `/${nav.locale}` : ''}${
                        nav.href
                      }`
                    : nav.href
                }
                target={nav.external ? '_blank' : undefined}
              >
                <button className="w-full px-4 sm:px-10 flex justify-between items-center bg-transparent text-primary-foreground !text-md py-2 text-left">
                  <p>{nav.label}</p>
                  <IconChevronDown width={16} height={16} />
                </button>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Nav_mobile;
