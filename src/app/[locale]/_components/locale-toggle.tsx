'use client';

import { themeCheck } from '@/utils/themeCheck';
import { useParams, useRouter } from 'next/navigation';
import { MouseEventHandler, useEffect, useState } from 'react';

const LocaleToggle = () => {
  const router = useRouter();
  const params = useParams();
  const locale = params.locale as string;

  const [iconToggle, setIconToggle] = useState<boolean>(themeCheck());

  const handleLocaleSwitch: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    router.replace(locale === 'ko' ? '/' : '/ko');
    setIconToggle(true);
  };

  useEffect(() => {
    if (iconToggle === true) {
      setIconToggle(false);
    }
  }, [iconToggle]);

  return (
    <button
      aria-label="Theme Toggle"
      onClick={handleLocaleSwitch}
      className="relative size-9 flex justify-center items-center rounded-full text-xs bg-primary text-primary-foreground"
    >
      <span
        className={`absolute ${
          locale === 'en' || !locale
            ? 'rotate-0 opacity-100'
            : 'rotate-180 opacity-0'
        }  transform transition duration-500 ease-in-out`}
      >
        EN
      </span>
      <span
        className={`absolute ${
          locale === 'ko' ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
        }  transform transition duration-500 ease-in-out`}
      >
        KO
      </span>
    </button>
  );
};

export { LocaleToggle };
