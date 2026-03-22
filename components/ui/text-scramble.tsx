'use client';

import React, { useCallback, useId, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { cn } from '@/lib/utils';

gsap.registerPlugin(useGSAP);

interface TextRevealProps {
  text: string;
  /** Text revealed on hover */
  revealText?: string;
  className?: string;
  /** Morph duration in seconds */
  duration?: number;
}

export function TextScramble({
  text,
  revealText,
  className,
  duration = 1.2,
}: TextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const baseRef = useRef<HTMLSpanElement>(null);
  const altRef = useRef<HTMLSpanElement>(null);
  const tweenRef = useRef<gsap.core.Timeline | null>(null);
  const isRevealedRef = useRef(false);
  const reactId = useId();
  const filterId = `morph-threshold${reactId.replace(/:/g, '-')}`;

  const alt = revealText ?? text;

  // Entrance animation
  useGSAP(() => {
    if (!containerRef.current) return;
    gsap.from(containerRef.current, {
      opacity: 0,
      y: 30,
      duration: 0.7,
      delay: 0.35,
      ease: 'power3.out',
    });
  }, { scope: containerRef });

  const morphTo = (fraction: number) => {
    const baseEl = baseRef.current;
    const altEl = altRef.current;
    if (!baseEl || !altEl) return;

    const inv = 1 - fraction;
    const baseBlur = Math.min(8 / (inv || 0.01) - 8, 100);
    const altBlur = Math.min(8 / (fraction || 0.01) - 8, 100);

    gsap.set(baseEl, {
      opacity: Math.pow(inv, 0.4),
      filter: fraction > 0.01 ? `blur(${Math.max(0, baseBlur)}px)` : 'none',
    });
    gsap.set(altEl, {
      opacity: Math.pow(fraction, 0.4),
      filter: fraction < 0.99 ? `blur(${Math.max(0, altBlur)}px)` : 'none',
    });
  };

  const animateTo = useCallback((targetFraction: number) => {
    tweenRef.current?.kill();

    const proxy = { f: targetFraction === 1 ? 0 : 1 };
    const tl = gsap.timeline();
    tl.to(proxy, {
      f: targetFraction,
      duration,
      ease: 'power2.inOut',
      onUpdate: () => morphTo(proxy.f),
    });
    tweenRef.current = tl;
  }, [duration]);

  const handleMouseEnter = () => animateTo(1);
  const handleMouseLeave = () => animateTo(0);

  // Toggle on tap for mobile
  const handleTouchEnd = useCallback((e: React.TouchEvent) => {
    e.preventDefault();
    isRevealedRef.current = !isRevealedRef.current;
    animateTo(isRevealedRef.current ? 1 : 0);
  }, [animateTo]);

  return (
    <>
      <svg className="fixed h-0 w-0" preserveAspectRatio="xMidYMid slice">
        <defs>
          <filter id={filterId}>
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        ref={containerRef}
        className={cn('relative inline-block cursor-pointer', className)}
        style={{ filter: `url(#${filterId}) blur(0.6px)` }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onTouchEnd={handleTouchEnd}
      >
        <span ref={baseRef} className="inline-block">
          {text}
        </span>
        <span
          ref={altRef}
          className="inline-block absolute inset-0"
          style={{ opacity: 0, filter: 'blur(8px)' }}
        >
          {alt}
        </span>
      </div>
    </>
  );
}
