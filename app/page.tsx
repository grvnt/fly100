import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import type { Metadata } from 'next';
import logo from '@/app/icon.png';
import { HeroParallax } from './HeroParallax';
import { CountdownTimer } from './CountdownTimer';
import {
  hero,
  proofTeaser,
  origin,
  teacher,
  method,
  whatYouGet,
  bonuses,
  testimonials,
  pullQuotes,
  pricing,
  notThis,
  timeline,
  walkAway,
  guarantee,
  forYou,
  faq,
  lastCall,
} from './content';

export const metadata: Metadata = {
  title: 'Fly100 | Paraglide Your First 100km With Confidence',
  description:
    'A 6-week founding cohort for licensed XC pilots who want to fly further with confidence. Doors close 27 November. Kickoff 10 December.',
};

/**
 * ---------------------------------------------------------------------------
 * DESIGN TOKENS — matched to app/wingmates/page.tsx so the two pages read as
 * one brand system. Change colour or type here, never on elements.
 * ---------------------------------------------------------------------------
 */
const INK_SOFT = '#B4B4B4';
const CANVAS = '#16181B'; // elevated surface
const CANVAS_ALT = '#0C0E11'; // near-black panel
const BAND = '#000000';

const SECTION = 'px-6 sm:px-8 py-20 sm:py-24 lg:py-28';
const WRAP = 'max-w-[46rem] mx-auto';

const DISPLAY = 'font-[family-name:var(--font-display)]';
const BODYFONT = 'font-[family-name:var(--font-body)]';

const EYEBROW = `${BODYFONT} text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4DA3FF]`;
// Hero H1 is intentionally heavy — Noto Sans is loaded as a variable font so
// weight 900 (font-black) is available. Size jumps considerably from the prior
// token (2.5/3.25/3.75rem → 3.25/4.5/5.5rem) and leading tightens to 1.0 so
// multi-line headlines sit close together rather than loosely spaced. Visual
// target: the heavy geometric headline on 3houryoutubesystem.com's hero.
const H1 = `${DISPLAY} text-[3.25rem] sm:text-[4.5rem] lg:text-[5.5rem] font-black tracking-[-0.04em] leading-[1.0] text-[#FFFFFF]`;
const H2 = `${DISPLAY} text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-[-0.03em] leading-[1.12] text-[#FFFFFF]`;
const H3 = `${DISPLAY} text-[1.25rem] sm:text-[1.375rem] font-semibold tracking-[-0.02em] leading-[1.3] text-[#FFFFFF]`;
const BODY = `${BODYFONT} text-[17px] leading-[1.65] text-[#B4B4B4]`;
const BODY_ON_DARK = `${BODYFONT} text-[17px] leading-[1.65] text-white/80`;
const LEAD = `${BODYFONT} text-[19px] sm:text-[20px] leading-[1.55] text-[#B4B4B4]`;

/**
 * Loud, pill-shaped CTA — reserved for the one real conversion moment inside
 * the pricing section (section 8). Mirrors wingmates/Cta visually so the sites
 * read as siblings. All other CTAs on this page go to /fly100 via CtaQuiet.
 *
 * Note: until a real checkout exists, every CTA on this page (including this
 * one) points at /fly100 — the site's existing internal path that redirects
 * to the live Kit waitlist via next.config.js. Using /fly100 instead of
 * hardcoding the Kit URL means we can repoint the redirect to real checkout
 * later without touching this file.
 */
function CtaBig({
  label,
  align = 'center',
  href = '/fly100',
}: {
  label: string;
  align?: 'center' | 'start';
  href?: string;
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium tracking-[-0.005em] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-[0_0_28px_rgba(0,118,255,0.45)] hover:shadow-[0_0_38px_rgba(0,118,255,0.6)] bg-[#0076FF] text-white hover:bg-[#006AE6] focus-visible:ring-[#0076FF] focus-visible:ring-offset-black';
  return (
    <div className={align === 'center' ? 'flex justify-center' : 'flex justify-start'}>
      <Link href={href} className={base}>
        {label}
      </Link>
    </div>
  );
}

/**
 * Quieter page-local CTA. Standard rounded-corner button (not pill), no glow,
 * for every CTA on this page that isn't the final buy moment — hero, mid-page
 * repeats, walk-away, last call. All of these point to /fly100 (the site's
 * existing path that currently redirects to the Kit waitlist) until a real
 * checkout exists.
 */
function CtaQuiet({
  label,
  align = 'center',
  href = '/fly100',
}: {
  label: string;
  align?: 'center' | 'start';
  href?: string;
}) {
  // Glass-tile treatment matching the countdown tiles, eyebrow badge, audience
  // badge and navbar: bg-white/5 + backdrop-blur-[6px] + a muted blue border.
  // The button now reads as part of the same glass-chip family instead of a
  // transparent outline floating on its own. Hover opens the fill up (bg
  // tint + border brightens) so the action still feels clickable, not frozen.
  const base =
    'inline-flex items-center justify-center rounded-lg px-6 py-3 text-[15px] font-medium tracking-[-0.005em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 bg-white/5 backdrop-blur-[6px] text-[#4DA3FF] hover:text-white border border-[#0076FF] hover:bg-[#0076FF]/15 hover:border-[#4DA3FF] focus-visible:ring-[#0076FF] focus-visible:ring-offset-black';
  return (
    <div className={align === 'center' ? 'flex justify-center' : 'flex justify-start'}>
      <Link href={href} className={base}>
        {label}
      </Link>
    </div>
  );
}

/**
 * Page-local header: Fly100 wordmark only, no nav. A sales page should let the
 * visitor scroll and convert, not navigate away. Not clickable — the logo lives
 * on the page you're already on.
 */
function SalesHeader() {
  // fixed (not sticky) so the header floats transparently over the hero photo
  // without occupying normal flow space. With sticky, the header reserved a
  // strip above the hero and created an unwanted gap at the top of the page.
  // Now the hero image sits flush against the top of the viewport and the
  // header overlays it directly.
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-transparent backdrop-blur-[6px]">
      <div className="max-w-7xl mx-auto flex items-center justify-center px-6 sm:px-8 py-4">
        <div className="flex items-center gap-2 select-none">
          <Image
            src={logo}
            alt="Fly100 logo"
            width={28}
            height={28}
            priority
            className="w-7 h-7"
          />
          <span className={`${DISPLAY} text-[17px] font-semibold tracking-[-0.01em] text-white`}>
            Fly100
          </span>
        </div>
      </div>
    </header>
  );
}

/**
 * Prose blocks with inline pull quotes. Same shape as wingmates' Blocks helper,
 * duplicated here so this page does not couple to wingmates' internals.
 */
function Blocks({
  blocks,
}: {
  blocks: ReadonlyArray<{ type: 'p' | 'quote'; text: string }>;
}) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) =>
        b.type === 'quote' ? (
          <blockquote key={i} className="my-10 border-l-2 border-[#0076FF] pl-6">
            <p className="text-[1.375rem] sm:text-[1.625rem] font-semibold tracking-[-0.02em] leading-[1.3] text-white">
              {b.text}
            </p>
          </blockquote>
        ) : (
          <p key={i} className={BODY_ON_DARK}>
            {b.text}
          </p>
        )
      )}
    </div>
  );
}

/** Centred uppercase divider line. Matches wingmates' Refrain visual. */
function Refrain({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-12 flex justify-center">
      <p className="inline-block whitespace-nowrap text-center text-[10px] sm:text-[15px] font-semibold uppercase tracking-[0.08em] sm:tracking-[0.18em] border-t pt-4 text-[#4DA3FF] border-[#222222]">
        {children}
      </p>
    </div>
  );
}

/**
 * Circular avatar for a testimonial. Renders a Senja-hosted photo when supplied,
 * and falls back to a monogram circle (first initial) when no photo URL is
 * available. Plain <img> is used intentionally — Senja CDN URLs are not added
 * to next.config remotePatterns, and these images are below the fold.
 */
function TestimonialAvatar({
  name,
  photo,
  size = 56,
}: {
  name: string;
  photo?: string;
  size?: number;
}) {
  const initial = name.trim().charAt(0);
  if (photo) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        src={photo}
        alt={name}
        width={size}
        height={size}
        loading="lazy"
        decoding="async"
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <span
      aria-hidden="true"
      className="rounded-full flex items-center justify-center font-semibold text-[#4DA3FF]"
      style={{
        width: size,
        height: size,
        fontSize: Math.round(size * 0.36),
        backgroundColor: 'rgba(255,255,255,0.12)',
      }}
    >
      {initial}
    </span>
  );
}

/**
 * Testimonial card — same glass treatment as the countdown tiles (thin blue
 * border, blurred transparent fill) so all five testimonials read as one
 * consistent set rather than one special-cased "band" quote plus a
 * differently-styled list. Deliberately no star rating: four of these five
 * are genuinely 5-star rated in Senja, but the fifth (Farrell) was collected
 * over WhatsApp with no numeric rating attached — showing stars on only
 * some cards (or an invented rating on his) would be inconsistent/inaccurate.
 */
function TestimonialCard({
  quote,
  name,
  photo,
}: {
  quote: string;
  name: string;
  photo?: string;
}) {
  return (
    <figure className="flex h-full flex-col gap-5 rounded-xl border border-[#0076FF]/40 bg-white/5 backdrop-blur-[6px] p-6 sm:p-7">
      <blockquote className="flex-1 text-[17px] sm:text-[18px] font-light leading-[1.5] tracking-[-0.01em] text-white">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <TestimonialAvatar name={name} photo={photo} size={40} />
        <span className="text-[14px] font-semibold text-[#4DA3FF]">{name}</span>
      </figcaption>
    </figure>
  );
}

function PullQuote({
  quote,
  name,
  photo,
}: {
  quote: string;
  name: string;
  photo?: string;
}) {
  return (
    <section
      className="px-6 sm:px-8 py-14 sm:py-16"
      style={{ backgroundColor: BAND }}
    >
      <div className="max-w-[46rem] mx-auto">
        <figure className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-7">
          <TestimonialAvatar name={name} photo={photo} size={80} />
          <div className="flex-1 border-l-2 border-[#0076FF] pl-6">
            <blockquote
              className={`${DISPLAY} text-[20px] sm:text-[22px] font-light leading-[1.4] tracking-[-0.015em] text-white`}
            >
              &ldquo;{quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-[14px] font-semibold tracking-[0.02em] text-[#4DA3FF]">
              — {name}
            </figcaption>
          </div>
        </figure>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <>
      <SalesHeader />
      <main className="bg-black text-white overflow-x-hidden">
        {/* ===== 1. HERO — full-bleed aerial photo (Kakheti, Georgia) as the
            background, with a dark gradient overlay for text legibility. The
            photo IS the hero visual, so copy centres over it. ===== */}
        <section className="relative overflow-hidden bg-black">
          {/* Hero photo: aerial paraglider over the Kakheti valley. Rendered
              inside a client island (HeroParallax) that applies a subtle
              rAF-throttled vertical parallax on scroll. The wrapper is
              intentionally oversized (-top-10% / h-120%) so the parallax
              travel never reveals the edges of the image. */}
          <HeroParallax
            srcDesktop="/fly100-hero-desktop.webp"
            srcMobile="/fly100-hero-mobile.webp"
            alt="Paraglider flying over the Kakheti valley in Georgia"
          />
          {/* Legibility veil: a soft, localized radial darkening behind the
              copy block only, not the whole photo — the sides and bottom
              still read as a real, visible photo. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(70% 55% at 50% 55%, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.25) 55%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(180deg, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 20%, rgba(0,0,0,0) 75%, rgba(0,0,0,0.6) 100%)',
            }}
          />
          {/* Subtle blue accent, matching the rest of the page. */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(1100px 520px at 50% 0%, rgba(0,118,255,0.18), transparent 62%)',
            }}
          />
          {/* No inline paddingTop override — the SECTION token's py-20
              sm:py-24 lg:py-28 gives adequate breathing room under the now
              fully-transparent, fixed-positioned header. */}
          <div className={`${SECTION} relative`}>
            <div className="max-w-3xl mx-auto w-full">
              <div className="flex flex-col gap-6">
                {/* Eyebrow framed as a border-less glass pill — the
                    backdrop-blur fill still gives it separation from the
                    busy hero photo without the blue frame competing with
                    the audience-line badge below (which keeps its border).
                    Text forced white (!text-white) overrides the EYEBROW
                    token's blue, which was too low-contrast on sky. */}
                <div className="flex justify-center">
                  <p className={`${EYEBROW} inline-block rounded-full bg-transparent backdrop-blur-[6px] px-5 py-2 text-[14px] tracking-[0.16em] text-center !text-white`}>
                    {hero.eyebrow}
                  </p>
                </div>
                <h1 className={`${H1} text-center`}>{hero.headline}</h1>
                {/* Subline weight bumped to semibold (600) so it carries its
                    own visual presence under the now-much-heavier H1 — the
                    3hourYT reference pairs a black headline with a bold, not
                    regular, subhead. LEAD's base size/leading are kept. */}
                <p className={`${LEAD} font-semibold text-center max-w-[40rem] mx-auto text-white/90`}>
                  {hero.subline}
                </p>
                {/* Audience qualifier framed as a glass badge so it reads
                    cleanly against the busy hero photo rather than floating
                    as plain text. Matches SalesHeader's glass treatment:
                    bg-transparent + backdrop-blur (no fill tint), thin white
                    border, pill shape. Inline-flex via the centering wrapper
                    so the pill hugs its content instead of stretching the
                    full container width. */}
                <div className="flex justify-center">
                  <p className={`${BODYFONT} inline-block rounded-lg border border-[#0076FF] bg-transparent backdrop-blur-[6px] px-5 py-2 text-[13px] sm:text-[14px] font-medium tracking-[0.005em] text-white/85 text-center`}>
                    {hero.audience}
                  </p>
                </div>
                <div className="mt-6">
                  {/* Hero CTA sends to /fly100 (waitlist redirect until real
                      checkout exists), not the buy button, so it reads
                      quietly and drops the price from the label. */}
                  <CtaQuiet label="Join the Waitlist" />
                </div>
                {/* Live countdown to deadline — replaces the static
                    `hero.urgency` line that still appears, intentionally, in
                    the pricing and last-call sections further down the page.
                    Only the hero gets the ticker so urgency is felt at the
                    top of the funnel without turning the whole page into a
                    countdown wall. */}
                <CountdownTimer className="mt-4" />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 1.5 PROOF TEASER — a short single pull-quote from Farrell
            that sits between the hero and the origin story. Not a full
            testimonial card (that's Section 7); this is a quick trust signal
            before the reader commits to the long-form origin. ===== */}
        <section
          className="px-6 sm:px-8 py-14 sm:py-16"
          style={{ backgroundColor: BAND }}
        >
          <div className="max-w-[46rem] mx-auto">
            <figure className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-7">
              <TestimonialAvatar
                name={proofTeaser.name}
                photo={proofTeaser.photo}
                size={80}
              />
              <div className="flex-1 border-l-2 border-[#0076FF] pl-6">
                <blockquote
                  className={`${DISPLAY} text-[20px] sm:text-[22px] font-light leading-[1.4] tracking-[-0.015em] text-white`}
                >
                  &ldquo;{proofTeaser.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-[14px] font-semibold tracking-[0.02em] text-[#4DA3FF]">
                  — {proofTeaser.name}
                </figcaption>
              </div>
            </figure>
          </div>
        </section>

        {/* ===== 2. ORIGIN STORY ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-10`}>{origin.heading}</h2>
            <Blocks blocks={origin.blocks} />
          </div>
        </section>

        {/* ===== 3. WHO'S TEACHING THIS — portrait + badge on the left,
            credentials on the right. Layout pattern matches wingmates' ABOUT
            GRANT section so the two pages read as one brand. Portrait and
            badge assets are reused from wingmates (same canonical images;
            do not re-upload or regenerate). ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
          <div className={WRAP}>
            <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
              <div className="flex flex-col items-center gap-6">
                <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-1 ring-white/10 shadow-[0_0_80px_rgba(0,118,255,0.14)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/grant-profile-pgatlas-crop.jpg"
                    alt="Grant Smith"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Flow Coaching Federation Certified badge. unoptimized is
                    deliberate — Next's optimiser palettises this PNG and
                    flattens its alpha against black, putting a black square
                    behind it. Source is pre-sized to 256px. */}
                <Image
                  src="/flow-coaching-federation-certified.png"
                  alt="Flow Coaching Federation Certified"
                  width={256}
                  height={256}
                  unoptimized
                  className="w-28 h-28 sm:w-32 sm:h-32"
                />
              </div>
              <div className="max-w-[62ch] space-y-6">
                <h2 className={H2}>{teacher.heading}</h2>
                <p className={LEAD}>{teacher.lead}</p>
                <ul className="space-y-4">
                  {teacher.credentials.map((c) => (
                    <li key={c.slice(0, 24)} className={`flex gap-3 ${BODY}`}>
                      <span
                        aria-hidden="true"
                        className="mt-[11px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#0076FF]"
                      />
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 4. LEARN ON THE GROUND ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-10`}>{method.heading}</h2>
            <Blocks blocks={method.blocks} />
            <Refrain>{method.loop}</Refrain>
            <div className="mt-12">
              <Blocks blocks={method.afterLoop} />
            </div>
            <div className="mt-12">
              <CtaQuiet label="Join the Waitlist" />
            </div>
          </div>
        </section>

        {/* ===== 5. HERE'S EXACTLY WHAT YOU GET — numbered steps ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-5`}>{whatYouGet.heading}</h2>
            <p className={`${LEAD} text-center`}>{whatYouGet.intro}</p>

            <ol className="mt-16">
              {whatYouGet.items.map((step, i) => (
                <li
                  key={step.title}
                  className="relative grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-8 pb-14 last:pb-0"
                >
                  <div className="relative">
                    <span
                      aria-hidden="true"
                      className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#0076FF] bg-black text-[15px] font-semibold text-[#4DA3FF]"
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {i < whatYouGet.items.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className="absolute left-1/2 top-14 -ml-px h-[calc(100%-3.5rem)] w-px bg-white/12"
                      />
                    ) : null}
                  </div>
                  <div className="pt-2.5">
                    <p className={`${EYEBROW} mb-2`}>{step.label}</p>
                    <div className="mb-3 flex items-center gap-3">
                      <h3 className={H3}>{step.title}</h3>
                      {step.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={step.image}
                          alt=""
                          aria-hidden="true"
                          width={40}
                          height={40}
                          className="h-10 w-10 object-contain"
                        />
                      ) : null}
                    </div>
                    <p className={BODY}>{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-12">
              <CtaQuiet label="Join the Waitlist" />
            </div>
          </div>
        </section>

        {/* ===== 6. STACKED BONUSES ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-5`}>{bonuses.heading}</h2>
            <p className={`${LEAD} text-center`}>{bonuses.intro}</p>

            <ul className="mt-14 space-y-4">
              {bonuses.items.map((b) => (
                <li
                  key={b.title}
                  className="rounded-xl p-6 sm:p-7 bg-[#0F0F0F] border border-[#222222] grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-x-6 gap-y-3 items-start"
                >
                  <div>
                    <h3 className={`${H3} mb-2`}>{b.title}</h3>
                    <p className={BODY}>{b.body}</p>
                  </div>
                  <div className="text-[18px] font-semibold text-[#4DA3FF] tabular-nums sm:text-right">
                    {b.value}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-xl p-7 bg-black border border-[#222222] text-center">
              <p className={`${DISPLAY} text-[20px] sm:text-[22px] font-semibold text-white`}>
                {bonuses.total}
              </p>
            </div>

            <p className={`${BODY} mt-10 border-l-2 border-[#0076FF] pl-5`}>
              {bonuses.plus}
            </p>
          </div>
        </section>

        {/* ===== 7. WHAT PILOTS SAY — five matching glass cards, same
            border/blur treatment as the countdown tiles, so the set reads as
            one consistent group rather than one special band plus a list. */}
        <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
          {/* Wider than the page's standard WRAP (46rem) — a 3-column grid
              of cards needs real room, unlike the long-form prose sections
              elsewhere that benefit from a narrower line length. */}
          <div className="max-w-[68rem] mx-auto">
            <h2 className={`${H2} text-center mb-14`}>What pilots say</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <TestimonialCard
                  key={t.name}
                  quote={t.quote}
                  name={t.name}
                  photo={t.photo}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== 8. ADD IT ALL UP — pricing ===== */}
        <section
          id="enrol"
          className={SECTION}
          style={{ backgroundColor: CANVAS }}
        >
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-12`}>{pricing.heading}</h2>

            <div className="rounded-2xl bg-[#0F0F0F] border border-[#222222] overflow-hidden">
              <ul className="divide-y divide-[#222222]">
                {pricing.stack.map((row) => (
                  <li
                    key={row.line}
                    className="p-6 sm:p-7 grid grid-cols-[1fr_auto] gap-x-6 items-start"
                  >
                    <p className={BODY_ON_DARK}>{row.line}</p>
                    <p className="text-[17px] font-semibold text-white tabular-nums">
                      {row.value}
                    </p>
                  </li>
                ))}
                <li className="p-6 sm:p-7 grid grid-cols-[1fr_auto] gap-x-6 items-baseline bg-black">
                  <p
                    className={`${DISPLAY} text-[18px] sm:text-[20px] font-semibold text-white`}
                  >
                    {pricing.totalLabel}
                  </p>
                  <p
                    className={`${DISPLAY} text-[22px] sm:text-[26px] font-semibold text-[#4DA3FF] tabular-nums`}
                  >
                    {pricing.totalValue}
                  </p>
                </li>
              </ul>
            </div>

            <div className="mt-10 rounded-2xl p-8 sm:p-10 border border-[#0076FF]/40 bg-gradient-to-b from-[#0F141C] to-[#0A0E14] text-center">
              <p className={`${EYEBROW} mb-3`}>FOUNDING OFFER</p>
              <p
                className={`${DISPLAY} text-[2.5rem] sm:text-[3rem] font-semibold tracking-[-0.03em] text-white`}
              >
                {pricing.founding.price}
              </p>
              <p className={`${BODY_ON_DARK} mt-4 max-w-[36rem] mx-auto`}>
                {pricing.founding.oneLine}
              </p>
              <p className="mt-2 text-[14px] text-[#7A7A7A]">
                {pricing.founding.instalments}
              </p>
              <div className="mt-8">
                {/* The one real conversion moment on the page — loud,
                    glowing, pill-shaped. Every other CTA defers to this. */}
                <CtaBig label={pricing.cta} />
              </div>
              <p className="mt-4 text-[13px] text-[#7A7A7A]">
                {hero.urgency}
              </p>
            </div>

            <p className={`${BODY} mt-10 text-center max-w-[40rem] mx-auto`}>
              {pricing.note}
            </p>
          </div>
        </section>

        {/* ===== 9. THIS IS NOT A "FLY 100KM OR FAIL" COURSE ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-6`}>{notThis.heading}</h2>
            <p className={`${LEAD} text-center max-w-[40rem] mx-auto mb-12`}>
              {notThis.lead}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {notThis.items.map((item) => (
                <li
                  key={item.head}
                  className="rounded-xl p-6 sm:p-7 bg-[#0F0F0F] border border-[#222222]"
                >
                  <p className="text-[17px] font-semibold text-white mb-2">
                    {item.head}
                  </p>
                  <p className={BODY}>{item.tail}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== 10. YOUR NEXT 6 WEEKS — timeline ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-14`}>{timeline.heading}</h2>

            <ol className="space-y-5">
              {timeline.items.map((row) => (
                <li
                  key={row.when}
                  className="grid grid-cols-1 sm:grid-cols-[13rem_1fr] gap-x-6 gap-y-2 items-start rounded-xl p-6 bg-[#0F0F0F] border border-[#222222]"
                >
                  <p
                    className={`${EYEBROW} text-[13px] tracking-[0.1em] text-[#4DA3FF]`}
                  >
                    {row.when}
                  </p>
                  <p className={BODY_ON_DARK}>{row.what}</p>
                </li>
              ))}
            </ol>

            <p className={`${BODY} mt-10`}>{timeline.note}</p>
            <p className={`${BODY} mt-4`}>{timeline.afterNote}</p>
          </div>
        </section>

        {/* ===== 11. WHAT YOU WALK AWAY WITH ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-12`}>{walkAway.heading}</h2>
            <ul className="space-y-4 max-w-[42rem] mx-auto">
              {walkAway.items.map((item) => (
                <li key={item.slice(0, 24)} className={`flex gap-3 ${BODY_ON_DARK}`}>
                  <span
                    aria-hidden="true"
                    className="mt-[11px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#0076FF]"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-12">
              <CtaQuiet label="Join the Waitlist" />
            </div>
          </div>
        </section>

        {/* ===== 12. 14-DAY BUY-BACK GUARANTEE ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS }}>
          <div className={WRAP}>
            <div className="rounded-2xl p-8 sm:p-10 bg-[#0F0F0F] border border-[#222222] text-center">
              <h2 className={`${H2} mb-5`}>{guarantee.heading}</h2>
              <p className={`${BODY_ON_DARK} max-w-[42rem] mx-auto`}>
                {guarantee.body}
              </p>
            </div>
          </div>
        </section>

        {/* ===== 12.5 PULL-QUOTE — Nick, answers "am I good enough?" ===== */}
        <PullQuote {...pullQuotes.beforeForYou} />

        {/* ===== 13. IS THIS FOR YOU ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-12`}>{forYou.heading}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-xl p-7 bg-[#0F0F0F] border border-[#222222]">
                <h3 className={`${H3} mb-5`}>{forYou.forHeading}</h3>
                <ul className="space-y-3">
                  {forYou.forItems.map((item) => (
                    <li
                      key={item.slice(0, 24)}
                      className="flex gap-3 text-[16px] leading-[1.55] text-[#B4B4B4]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#0076FF]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl p-7 bg-[#000000] border border-[#222222]">
                <h3 className={`${H3} mb-5`}>{forYou.notHeading}</h3>
                <ul className="space-y-3">
                  {forYou.notItems.map((item) => (
                    <li
                      key={item.slice(0, 24)}
                      className="flex gap-3 text-[16px] leading-[1.55] text-[#7A7A7A]"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[7px] shrink-0 w-2 h-[1.5px] bg-[#a8c3de]"
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ===== 14. FAQ ===== */}
        <section className={SECTION} style={{ backgroundColor: CANVAS }}>
          <div className={WRAP}>
            <h2 className={`${H2} text-center mb-10`}>{faq.heading}</h2>
            <div className="space-y-3">
              {faq.items.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-xl bg-[#0F0F0F] border border-[#222222] px-6 py-5 open:shadow-[0_1px_3px_rgba(0,55,112,0.08)]"
                >
                  <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-[17px] font-medium text-white">
                    <span>{item.q}</span>
                    <span
                      aria-hidden="true"
                      className="mt-[6px] shrink-0 w-3 h-3 relative text-[#0076FF] transition-transform duration-200 group-open:rotate-45"
                    >
                      <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                      <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current" />
                    </span>
                  </summary>
                  <div className="mt-4 text-[16px] leading-[1.6] text-[#B4B4B4]">
                    <p>{item.a}</p>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ===== 15. LAST CALL ===== */}
        <section
          className="relative overflow-hidden"
          style={{ backgroundColor: BAND }}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'radial-gradient(900px 480px at 50% 0%, rgba(0,118,255,0.22), transparent 62%)',
            }}
          />
          <div className={`${SECTION} relative`}>
            <div className={WRAP}>
              <h2 className={`${H2} text-center mb-10`}>{lastCall.heading}</h2>
              {lastCall.body.map((p) => (
                <p key={p.slice(0, 24)} className={`${BODY_ON_DARK} mb-5`}>
                  {p}
                </p>
              ))}
              <figure className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-7">
                <TestimonialAvatar
                  name={pullQuotes.beforeClose.name}
                  photo={pullQuotes.beforeClose.photo}
                  size={80}
                />
                <div className="flex-1 border-l-2 border-[#0076FF] pl-6">
                  <blockquote
                    className={`${DISPLAY} text-[20px] sm:text-[22px] font-light leading-[1.4] tracking-[-0.015em] text-white`}
                  >
                    &ldquo;{pullQuotes.beforeClose.quote}&rdquo;
                  </blockquote>
                  <figcaption className="mt-4 text-[14px] font-semibold tracking-[0.02em] text-[#4DA3FF]">
                    — {pullQuotes.beforeClose.name}
                  </figcaption>
                </div>
              </figure>

              <div className="mt-10">
                <CtaQuiet label={lastCall.cta} />
              </div>
              <p className="text-center text-[14px] text-[#7A7A7A] mt-4">
                {hero.urgency}
              </p>

              {/* P.S. sits above the signoff on purpose — it's the reflective
                  build-up into the close, like a handwritten note, and the
                  photo + "Happy flying, Grant" is the actual last thing on the
                  page. Matches the rhythm of the reference sales page. */}
              <p className={`${BODY} mt-10 border-l-2 border-[#0076FF] pl-5`}>
                {lastCall.ps}
              </p>

              <div className="mt-14 flex items-center justify-center gap-6">
                <div className={`${BODY_ON_DARK} whitespace-pre-line text-left`}>
                  {lastCall.signoff}
                </div>
                {/* Grant's in-flight selfie, kept in its natural landscape
                    shape (848×444, the real source aspect) rather than
                    force-cropped into a square — reads as a real photo,
                    not an avatar. Sits to the right of the signoff. */}
                <div className="w-[180px] sm:w-[220px] shrink-0 aspect-[848/444] rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_48px_rgba(0,118,255,0.14)]">
                  <Image
                    src="/grant-signoff.png"
                    alt="Grant Smith, mid-flight"
                    width={848}
                    height={444}
                    className="w-full h-full object-cover"
                    style={{ objectPosition: "25% 50%" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
