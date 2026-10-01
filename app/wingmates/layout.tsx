import { Fraunces, Inter } from 'next/font/google';

/**
 * Type for the Wingmates page only. The rest of the site keeps Noto Sans.
 *
 * Fraunces  — display. A characterful serif with optical sizing. Gives the page editorial
 *             authority and matches Grant's essayist voice. Every rival paragliding site is
 *             all-caps sans over an action photo; a serif immediately reads as considered.
 * Inter     — body. Designed for screen reading at small sizes, tall x-height, no personality
 *             of its own, which is what body copy wants.
 */
const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  axes: ['SOFT', 'WONK', 'opsz'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
});

export default function WingmatesLayout({ children }: { children: React.ReactNode }) {
  return <div className={`${fraunces.variable} ${inter.variable}`}>{children}</div>;
}
