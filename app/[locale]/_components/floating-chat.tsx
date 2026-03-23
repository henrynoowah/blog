'use client';

import Spline from '@splinetool/react-spline';
import { Application } from '@splinetool/runtime';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';
import { ChatBox } from '@/components/common/chats';
import { useChatContext } from './chat-context';

const scene = process.env.NEXT_PUBLIC_SPLINE_SCENE!;
const splitBotId = process.env.NEXT_PUBLIC_SPLINE_BOT_ID;

export function FloatingChat({ locale }: { locale: string }) {
  const pathname = usePathname();
  const { isOpen, setIsOpen } = useChatContext();
  const splineRef = useRef<Application>(null);

  // Default locale (en) has no prefix → path is '/', other locales use '/ko' etc.
  const isHome =
    pathname === '/' || pathname === `/${locale}` || pathname === `/${locale}/`;

  const isHomeRef = useRef(isHome);
  isHomeRef.current = isHome;

  // Track latest mouse position so we can re-dispatch after the container moves
  const mousePosRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const track = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', track);
    return () => window.removeEventListener('mousemove', track);
  }, []);

  const onLoad = (spline: Application) => {
    splineRef.current = spline;
  };

  // Close chat immediately when leaving home (don't wait for transition)
  useEffect(() => {
    if (!isHome) setIsOpen(false);
  }, [isHome]);

  const onAnimationComplete = () => {
    // Re-dispatch mousemove so Spline recalculates cursor offset against new canvas position
    window.dispatchEvent(
      new MouseEvent('mousemove', {
        clientX: mousePosRef.current.x,
        clientY: mousePosRef.current.y,
        bubbles: true,
      })
    );

    if (!splineRef.current || !splitBotId) return;
    if (isHome) {
      if (isHomeRef.current) {
        const bot = splineRef.current.findObjectByName(splitBotId);
        bot?.emitEvent('mouseDown');
      } else {
        splineRef.current.emitEventReverse('mouseDown', splitBotId);
      }
    }
  };

  // Sync Spline bot animation with chat open state (home only)
  useEffect(() => {
    if (!splineRef.current || !splitBotId || !isHome) return;
    if (isHome) {
      if (isOpen) {
        splineRef.current.emitEvent('mouseDown', splitBotId);
      } else {
        splineRef.current.emitEventReverse('mouseDown', splitBotId);
      }
    }
  }, [isOpen, isHome]);

  return (
    <>
      {/* Spline scene — morphs between full-screen (home) and bubble (other pages) */}
      <motion.div
        initial={false}
        animate={isHome ? 'home' : 'bubble'}
        variants={{
          // Anchor from bottom-right so no top/left conflicts during animation
          home: {
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            borderRadius: 0,
            zIndex: 30,
          },
          bubble: {
            right: 24,
            bottom: 24,
            width: 64,
            height: 64,
            borderRadius: 32,
            zIndex: 50,
          },
        }}
        style={{
          position: 'fixed',
          overflow: 'hidden',
          filter: 'grayscale(0.5) contrast(1.75)',
          pointerEvents: isHome ? 'none' : 'auto',
          cursor: isHome ? 'default' : 'pointer',
        }}
        transition={{ type: 'spring', stiffness: 150, damping: 25 }}
        onAnimationComplete={onAnimationComplete}
        onClick={!isHome ? () => setIsOpen(!isOpen) : undefined}
        whileHover={!isHome ? { scale: 1.1 } : undefined}
        whileTap={!isHome ? { scale: 0.95 } : undefined}
      >
        {isHome ? (
          <Spline scene={scene} onLoad={onLoad} />
        ) : (
          // Render at 400×400, scale down to fit 64px bubble
          <div
            style={{
              position: 'absolute',
              width: 400,
              height: 400,
              top: '50%',
              left: '50%',
              transformOrigin: 'center center',
              transform: 'translate(-50%, -50%) scale(0.16)',
              pointerEvents: 'none',
            }}
          >
            <Spline scene={scene} onLoad={onLoad} />
          </div>
        )}
      </motion.div>

      {/* Chat box */}
      {isHome ? (
        // Home: vertically centered, right-aligned — matches original layout
        <div className="fixed inset-0 flex justify-end items-center pointer-events-none z-40 px-6 pb-16 md:pb-[100px]">
          <ChatBox isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      ) : (
        // Other pages: above the bubble
        <div className="fixed bottom-[104px] right-0 flex justify-end px-6 z-50 pointer-events-none w-full">
          <ChatBox isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </div>
      )}
    </>
  );
}
