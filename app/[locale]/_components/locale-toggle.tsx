'use client';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { locales } from 'intlayer.config';
import { Globe } from 'lucide-react';
import { useLocale } from 'next-intlayer';

const LocaleToggle = () => {
  const { locale, setLocale } = useLocale();

  const handleLocaleChange = (value: string) => {
    const newLocale = value;
    setLocale(newLocale);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Globe className="size-6" />
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-32"
        side="bottom"
        sideOffset={10}
      >
        <DropdownMenuRadioGroup
          value={locale}
          onValueChange={handleLocaleChange}
        >
          {locales.map(locale => (
            <DropdownMenuRadioItem key={locale} value={locale}>
              {locale.toUpperCase()}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export { LocaleToggle };
