import { Geist } from 'next/font/google';

/**
 * Type for the Wingmates page only; the rest of the site keeps Noto Sans.
 *
 * Geist — Vercel's typeface. One family doing display and body, separated by weight,
 * size and tracking rather than by mixing two faces. That is how modern product pages
 * are set, and it avoids the muddiness of two similar sans together.
 *
 * Replaced Fraunces (serif) on 2026-10-01 — Grant: "the font is not working for me".
 */
const geist = Geist({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export default function WingmatesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={geist.variable} style={{ ['--font-body' as string]: 'var(--font-display)' }}>
      {children}
    </div>
  );
}
