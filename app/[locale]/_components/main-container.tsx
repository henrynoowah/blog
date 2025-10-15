'use client';

import { ChatBox } from '@/components/common/chats';
import { Dock, DockIcon } from '@/components/ui/dock';
import { FlickeringGrid } from '@/components/ui/flickering-grid';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import Spline from '@splinetool/react-spline';
import { Application, SPEObject } from '@splinetool/runtime';
import {
  IconBlockquote,
  IconBrandGithub,
  IconLayoutCollage,
  IconMessageCircle,
  IconUserBitcoin,
} from '@tabler/icons-react';
import { useIntlayer, useLocale } from 'next-intlayer';
import { getLocalizedUrl } from 'intlayer';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { LocaleToggle } from './locale-toggle';
import { AnimatedThemeToggler } from '@/components/ui/animated-theme-toggler';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE!;
const splitBotId = process.env.NEXT_PUBLIC_SPLINE_BOT_ID!;

const MainContainer = () => {
  const { ...content } = useIntlayer('home-page');
  const { locale } = useLocale();

  const toggleChat = () => {
    !!isBotChatOpened
      ? splineRef.current?.emitEventReverse('mouseDown', splitBotId)
      : splineRef.current?.emitEvent('mouseDown', splitBotId);
    setIsBotChatOpened(!isBotChatOpened);
  };

  const [isBotChatOpened, setIsBotChatOpened] = useState<boolean>(false);

  const botRef = useRef<SPEObject>(null);
  const splineRef = useRef<Application>(null);

  const onLoad = (spline: Application) => {
    splineRef.current = spline;
    const botObj = spline.findObjectByName(splitBotId);
    botObj?.emitEvent('mouseDown');
    if (botObj) botRef.current = botObj;
  };

  return (
    <div className="pointer-events-auto h-dvh">
      <div className="absolute w-full h-full bg-accent/20! dark:bg-accent/10!">
        <FlickeringGrid
          className="relative inset-0 z-0 [mask-image:radial-gradient(640px_circle_at_center,white,transparent)]"
          squareSize={6}
          gridGap={6}
          color="oklch(0.4355 0.0499 208.8718)"
          maxOpacity={1}
          flickerChance={0.1}
        />
      </div>

      <div
        className="absolute w-full h-full
            flex justify-center items-center z-30 pointer-events-none"
        style={{ filter: 'grayscale(0.5) contrast(1.75)' }}
      >
        <Spline scene={scene} onLoad={onLoad} />
      </div>

      <div
        className={`fixed flex gap-2 justify-end z-30 pointer-events-auto top-4 end-4`}
      >
        <div className="rounded-full bg-primary text-primary-foreground flex items-center justify-center p-2">
          <AnimatedThemeToggler />
        </div>
        <div className="rounded-full bg-primary text-primary-foreground flex items-center justify-center p-2">
          <LocaleToggle />
        </div>
      </div>

      <div
        className={`absolute pointer-events-none w-full h-full max-w-[1020px] px-[24px] pt-4 pb-[40px] md:pb-[100px] flex justify-end items-center z-30`}
      >
        <ChatBox isOpen={isBotChatOpened} />
      </div>

      <div className="absolute bottom-4 right-4 md:right-1/2 transform md:translate-x-1/2 z-50">
        <Dock className="bg-primary text-primary-foreground">
          <Tooltip>
            <TooltipTrigger>
              <DockIcon title="About">
                <Link
                  href={getLocalizedUrl(`/about`, locale)}
                  hrefLang={locale}
                >
                  <IconUserBitcoin className="size-full" />{' '}
                </Link>
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>{content.about.title}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <DockIcon title="Projects">
                <Link
                  href={getLocalizedUrl(`/about#projects`, locale)}
                  hrefLang={locale}
                >
                  <IconLayoutCollage className="size-full" />{' '}
                </Link>
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>{content.projects.title}</p>
            </TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="bg-ring" />
          <Tooltip>
            <TooltipTrigger>
              <DockIcon title="Posts">
                <Link
                  href={`https://velog.io/@henrynoowah/posts`}
                  target="_blank"
                >
                  <IconBlockquote className="size-full" />
                </Link>
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>{content.posts.title}</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <DockIcon title="Github">
                <Link href="https://www.github.com/henrynoowah" target="_blank">
                  <IconBrandGithub className="size-full" />{' '}
                </Link>
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>{content.github.title}</p>
            </TooltipContent>
          </Tooltip>
          <Separator orientation="vertical" className="bg-ring" />
          <Tooltip>
            <TooltipTrigger>
              <DockIcon
                title="Chat"
                onClick={e => {
                  e.stopPropagation();
                  e.preventDefault();
                  toggleChat();
                }}
              >
                <IconMessageCircle className="size-full" />{' '}
              </DockIcon>
            </TooltipTrigger>
            <TooltipContent>
              <p>{content.chat.title}</p>
            </TooltipContent>
          </Tooltip>
        </Dock>
      </div>
    </div>
  );
};

export { MainContainer };
