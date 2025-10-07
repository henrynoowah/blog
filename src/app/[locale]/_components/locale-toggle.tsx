'use client';

import { Locales } from 'intlayer';
import { useLocale } from 'next-intlayer';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LocaleToggle = () => {
  const { locale, setLocale } = useLocale();

  const handleLocaleChange = (value: string) => {
    const newLocale = value as Locales;
    setLocale(newLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Globe className="size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32">
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={handleLocaleChange}
        >
          <DropdownMenuRadioItem value={Locales.ENGLISH}>
            {Locales.ENGLISH.toUpperCase()}
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value={Locales.KOREAN}>
            {Locales.KOREAN.toUpperCase()}
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LocaleToggle };
