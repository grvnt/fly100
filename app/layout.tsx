import React from 'react';
import { Noto_Sans } from 'next/font/google';
import { Viewport } from 'next';
import { getSEOTags } from '@/lib/seo';
import config from '@/config';
import './globals.css';

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--font-noto-sans',
  display: 'swap',
  fallback: ['system-ui', 'arial'],
});

export const viewport: Viewport = {
  themeColor: config.colors.main,
  width: 'device-width',
  initialScale: 1,
};

export const metadata = getSEOTags({
  title: 'fly100.co',
  description: "The online resource for XC paraglider's striving to fly 100 km and beyond",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={notoSans.className} suppressHydrationWarning>
        {children}
        {/* ConvertKit scripts removed */}
      </body>
    </html>
  );
}
