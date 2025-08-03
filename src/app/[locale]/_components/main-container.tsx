'use client';

import ChatBox from '@/components/common/chats/ChatBox';
import ThemeToggle from '@/components/common/themeToggle/ThemeToggle';
import { BackgroundGradientAnimation } from '@/components/ui/background-gradient-animation';
import { FloatingDock } from '@/components/ui/floating-dock';
import Spline from '@splinetool/react-spline';
import { Application, SPEObject } from '@splinetool/runtime';
import {
  IconBlockquote,
  IconBrandGithub,
  IconMessageCircle,
  IconUserBitcoin,
} from '@tabler/icons-react';
import { useIntlayer } from 'next-intlayer';
import { useRef, useState } from 'react';
import { LocaleToggle } from './locale-toggle';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE!;
const splitBotId = process.env.NEXT_PUBLIC_SPLINE_BOT_ID!;

const MainContainer = () => {
  const content = useIntlayer('page');

  const navList = [
    {
      title: content.posts.title,
      href: 'https://velog.io/@henrynoowah/posts',
      icon: <IconBlockquote />,
    },
    {
      title: content.about.title,
      href: '/about',
      icon: <IconUserBitcoin />,
    },
    {
      title: content.github.title,
      href: 'https://www.github.com/henrynoowah',
      icon: <IconBrandGithub />,
    },
    {
      href: `#chat`,
      title: content.chat.title,
      icon: <IconMessageCircle />,
    },
  ];

  const [isBotChatOpened, setIsBotChatOpened] = useState<boolean>(false);

  const botRef = useRef<SPEObject>(null);
  const splineRef = useRef<Application>(null);

  const onLoad = (spline: Application) => {
    splineRef.current = spline;
    const botObj = spline.findObjectByName(splitBotId);
    botObj?.emitEvent('mouseDown');
    if (botObj) botRef.current = botObj;
  };

  const toggleChat = () => {
    !!isBotChatOpened
      ? splineRef.current?.emitEventReverse('mouseDown', splitBotId)
      : splineRef.current?.emitEvent('mouseDown', splitBotId);
    setIsBotChatOpened(!isBotChatOpened);
  };

  return (
    <BackgroundGradientAnimation className="pointer-events-auto">
      <div
        className="absolute w-full h-full
            flex justify-center items-center z-30 pointer-events-none"
        style={{ filter: 'grayscale(1) contrast(1.75)' }}
      >
        <Spline scene={scene} onLoad={onLoad} />
      </div>

      <div
        className={`fixed flex gap-2 justify-end z-30 pointer-events-auto top-4 end-4`}
      >
        <ThemeToggle />
        <LocaleToggle />
      </div>

      <div
        className={`absolute pointer-events-none w-full h-full max-w-[1020px] px-[24px] pt-4 pb-[40px] md:pb-[100px]
              flex justify-end items-center z-30`}
      >
        <ChatBox isOpen={isBotChatOpened} />
      </div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-50">
        <FloatingDock items={navList} />
      </div>
    </BackgroundGradientAnimation>
  );
};

export { MainContainer };
