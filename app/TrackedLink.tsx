'use client';

import React from 'react';
import Link from 'next/link';
import { sendGAEvent } from '@next/third-parties/google';

type Props = {
  href: string;
  className?: string;
  location: string;
  checkout?: boolean;
  children: React.ReactNode;
};

/** Link that reports a Google Analytics event on click. */
export function TrackedLink({ href, className, location, checkout, children }: Props) {
  const onClick = () => {
    try {
      if (checkout) sendGAEvent('event', 'begin_checkout', { location });
      else sendGAEvent('event', 'cta_click', { location });
    } catch {}
  };
  return (
    <Link href={href} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
