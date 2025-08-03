'use client';

import { themeCheck, themeColorSwitch, themeSwitch } from '@/utils/themeCheck';
import { IconMoon, IconSun } from '@tabler/icons-react';
import { MouseEventHandler, useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [iconToggle, setIconToggle] = useState<boolean>(themeCheck());
  const [isDarkMode, setIsDarkMode] = useState<boolean | null>();

  const handleThemeSwitch: MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault();
    themeSwitch();
    setIconToggle(true);
  };

  useEffect(() => {
    if (iconToggle === true) {
      setIsDarkMode(!isDarkMode);
      themeColorSwitch(!isDarkMode);
      setIconToggle(false);
    }
  }, [iconToggle, isDarkMode]);

  return (
    <button
      type="button"
      aria-label="Theme Toggle"
      onClick={handleThemeSwitch}
      className="relative size-9 flex justify-center items-center rounded-full text-xs bg-primary text-primary-foreground"
    >
      {isDarkMode !== null && (
        <>
          <IconMoon
            width={18}
            height={18}
            className={`absolute ${
              isDarkMode ? 'rotate-0 opacity-100' : 'rotate-180 opacity-0'
            }  transform transition duration-500 ease-in-out`}
          />
          <IconSun
            width={18}
            height={18}
            className={`${
              isDarkMode ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
            }  transform transition duration-500 ease-in-out`}
          />
        </>
      )}
    </button>
  );
};

export { ThemeToggle };
