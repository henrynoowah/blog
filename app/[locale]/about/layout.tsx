import Header from '@/components/common/layouts/header/Header';
import { getIntlayer, LocalesValues } from 'intlayer';
import { Metadata } from 'next';
import { NextLayoutIntlayer } from 'next-intlayer';
import { IntlayerServerProvider } from 'next-intlayer/server';
import { IntlayerClientProvider } from 'next-intlayer';
import { getBlogUrl } from '@/lib/blog';

export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ locale?: string }>;
}): Promise<Metadata> => {
  const { locale = 'en' } = await params;
  return {
    title: {
      default: String(getIntlayer('metadata', locale).aboutTitle),
      template: '%s',
    },
  };
};

const AboutsLayouts: NextLayoutIntlayer = async ({ children, params }) => {
  // intlayer types `params.locale` as optional; the route only matches with one.
  const { locale = 'en' } = await params;

  const navOption: Array<{
    label: string;
    href: string;
    locale: LocalesValues;
    external?: boolean;
  }> = [
    { label: 'home', href: '/', locale },
    { label: 'works', href: '/about#projects', locale },
    {
      label: 'posts',
      href: getBlogUrl(locale),
      locale,
      external: true,
    },
    {
      label: 'github',
      href: 'https://www.github.com/henrynoowah',
      locale,
      external: true,
    },
  ];

  return (
    <IntlayerServerProvider locale={locale}>
      <IntlayerClientProvider locale={locale}>
        <div className="w-full h-screen flex flex-col bg-background transition-colors duration-200 ease-linear overflow-hidden">
          <Header navOption={navOption} locale={locale} />
          <main className="relative w-full overflow-y-auto scroll-smooth">
            <div className="w-full h-fit flex justify-center">{children}</div>
          </main>
        </div>
      </IntlayerClientProvider>
    </IntlayerServerProvider>
  );
};

export default AboutsLayouts;
