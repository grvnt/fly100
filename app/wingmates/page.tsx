import React from 'react';
import Image from 'next/image';
import { Metadata } from 'next';
import Link from 'next/link';
import TestimonialMerakai from '@/components/General/TestimonialMerakai';
import PricingWingmates from '@/components/General/PricingWingmates';
import WallOfLove from '@/components/General/WallOfLove';
import ParallaxTestimonials from '@/components/General/ParallaxTestimonials';
import {
  hero,
  problem,
  villain,
  origin,
  howItWorks,
  bands,
  objections,
  proof,
  forYou,
  faq,
  finalCta,
  about,
  courseProof,
} from './content';

export const metadata: Metadata = {
  title: 'Wingmates | Fly Better, Together',
  description:
    'An ongoing coaching room for XC pilots who want consistent growth and confidence in the air. Send Grant a flight, find out what really happened.',
};

/**
 * ---------------------------------------------------------------------------
 * DESIGN TOKENS — change type, colour and rhythm here, never on elements.
 * ---------------------------------------------------------------------------
 *
 * Built on Krug's "Don't Make Me Think": one grid, one alignment, obvious
 * hierarchy, nothing on the page that is not doing a job.
 *
 * PALETTE — three colours, not five. The old version had five backgrounds
 * including two near-identical darks, which read as noise rather than rhythm.
 * DARK MODE, taken verbatim from flow.grantonthefly.com's own theme
 * variables so the page and his Substack read as one brand:
 *   bg_web #000000 · bg_elevated #0F0F0F · elevated_secondary #222222
 *   elevated_tertiary #484848 · detail #191919 · accent #0076FF
 *
 * NOTE: Tailwind JIT scans source text, so a colour used in a CLASS must be a
 * literal (text-[#0076FF]). These consts are for inline styles only.
 */
const INK = '#000000';        // page background — from his Substack bg_web
const INK_SOFT = '#B4B4B4';   // body copy on light
const CANVAS = '#16181B';     // elevated surface, a shade lighter for contrast
const CANVAS_ALT = '#0C0E11'; // near-black — alternates against the elevated panels
const ACCENT = '#0076FF';     // his Substack accent, verbatim
const BAND = '#000000';       // testimonial bands — deepest surface, always separates

const SECTION = 'px-6 sm:px-8 py-20 sm:py-24 lg:py-28';
const WRAP = 'max-w-[46rem] mx-auto';
const READ = 'max-w-none'; // the wrap IS the measure now — one column, one edge

const DISPLAY = 'font-[family-name:var(--font-display)]';
const BODYFONT = 'font-[family-name:var(--font-body)]';

// Type tokens
const EYEBROW =
  `${BODYFONT} text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4DA3FF]`;
const EYEBROW_ON_DARK =
  `${BODYFONT} text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4DA3FF]`;
const H1 =
  `${DISPLAY} text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] font-semibold tracking-[-0.035em] leading-[1.05] text-[#FFFFFF]`;
const H2 =
  `${DISPLAY} text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-[-0.03em] leading-[1.12] text-[#FFFFFF]`;
const H2_ON_DARK =
  `${DISPLAY} text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-[-0.03em] leading-[1.12] text-[#FFFFFF]`;
const H3 = `${DISPLAY} text-[1.25rem] sm:text-[1.375rem] font-semibold tracking-[-0.02em] leading-[1.3] text-[#FFFFFF]`;
const H3_ON_DARK =
  `${DISPLAY} text-[1.25rem] sm:text-[1.375rem] font-semibold tracking-[-0.02em] leading-[1.3] text-[#FFFFFF]`;
const BODY = `${BODYFONT} text-[17px] leading-[1.65] text-[#B4B4B4]`; // on any dark surface
const BODY_ON_DARK = `${BODYFONT} text-[17px] leading-[1.65] text-white/80`;
const LEAD =
  `${BODYFONT} text-[19px] sm:text-[20px] leading-[1.55] text-[#B4B4B4]`;
const LEAD_ON_DARK =
  `${BODYFONT} text-[19px] sm:text-[20px] leading-[1.55] text-white/85`;

/**
 * Pill CTA. Tight radius (9999px), 8px 16px padding scaled up for touch.
 * One filled accent pill per band.
 */
/** CTA. Always centred in its section — Grant 2026-10-01. */
function Cta({
  variant = 'primary',
  className = '',
}: {
  variant?: 'primary' | 'on-dark';
  className?: string;
}) {
  const base =
    'inline-flex items-center justify-center rounded-full px-7 py-3.5 text-[15px] font-medium tracking-[-0.005em] transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 shadow-[0_0_28px_rgba(0,118,255,0.45)] hover:shadow-[0_0_38px_rgba(0,118,255,0.6)]';
  const styles =
    // One button everywhere. The old 'on-dark' variant turned dark grey in the palette
    // swap, which is the weird colour under the reframe heading.
    'bg-[#0076FF] text-white hover:bg-[#006AE6] focus-visible:ring-[#0076FF] focus-visible:ring-offset-black';
  // Centred in its own wrapper, so every call site gets it without repeating the class.
  return (
    <div className="flex justify-center">
      <Link href="#pricing" className={`${base} ${styles} ${className}`}>
        {hero.cta}
      </Link>
    </div>
  );
}

/**
 * Renders Grant's prose blocks: paragraphs plus the ### pull quotes from his markdown.
 * Used by the villain and origin sections, which are both verbatim from his own docs.
 */
function Blocks({ blocks, onDark = true }: { blocks: any[]; onDark?: boolean }) {
  return (
    <div className="space-y-6">
      {blocks.map((b, i) =>
        b.type === 'quote' ? (
          <blockquote key={i} className="my-10 border-l-2 border-[#0076FF] pl-6">
            <p
              className={`text-[1.375rem] sm:text-[1.625rem] font-semibold tracking-[-0.02em] leading-[1.3] ${
                onDark ? 'text-white' : 'text-[#FFFFFF]'
              }`}
            >
              {b.text}
            </p>
            {b.cite ? (
              <footer className="mt-3 text-[14px] text-[#7A7A7A]">&mdash; {b.cite}</footer>
            ) : null}
          </blockquote>
        ) : (
          <p key={i} className={onDark ? BODY_ON_DARK : BODY}>
            {b.text}
          </p>
        )
      )}
    </div>
  );
}

/** Avatar with a graceful initial fallback, so a missing photo never looks broken. */
function Avatar({ src, name, size = 'w-14 h-14' }: { src?: string; name: string; size?: string }) {
  if (src) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={src} alt="" aria-hidden="true" className={`${size} rounded-full object-cover`} />;
  }
  return (
    <span
      aria-hidden="true"
      className={`${size} rounded-full flex items-center justify-center text-lg font-semibold text-[#4DA3FF]`}
      style={{ backgroundColor: 'rgba(255,255,255,0.12)' }}
    >
      {name.trim().charAt(0)}
    </span>
  );
}

/**
 * Testimonial band. Every band is full-bleed deep navy, matching the Guschlbauer one.
 *   `feature`   — quote, name, result line, avatar, plus a supporting image when there is one
 *   `statement` — one big centred quote with an avatar beneath
 */
function Band({ band }: { band: any }) {
  if (band.shape === 'feature') {
    return (
      <section className="px-5 sm:px-8 py-24 sm:py-28" style={{ backgroundColor: BAND }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[24px] sm:text-[30px] font-light leading-[1.3] tracking-[-0.012em] text-white">
            &ldquo;{band.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Avatar src={band.avatar} name={band.name} />
            <div>
              <p className="text-[15px] font-semibold text-[#4DA3FF]">{band.name}</p>
              {band.result ? (
                <p className="mt-1 text-[14px] leading-[1.5] text-white/70">{band.result}</p>
              ) : null}
            </div>
          </div>

          {/* Supporting image sits BELOW the quote, full width of the column. */}
          {band.image ? (
            <figure className="mt-12">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={band.image}
                alt={band.imageAlt || ''}
                className="w-full rounded-xl ring-1 ring-white/15"
              />
            </figure>
          ) : null}
        </div>
      </section>
    );
  }

  return (
    <section className="px-5 sm:px-8 py-24 sm:py-28" style={{ backgroundColor: BAND }}>
      <div className="max-w-3xl mx-auto text-center">
        <span aria-hidden="true" className="block text-5xl leading-none text-white/25">&ldquo;</span>
        <p className="mt-4 text-[26px] sm:text-[34px] font-light leading-[1.25] tracking-[-0.015em] text-white">
          &ldquo;{band.quote}&rdquo;
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Avatar src={band.avatar} name={band.name} />
          <div className="text-left">
            <p className="text-[15px] font-semibold text-[#4DA3FF]">{band.name}</p>
            {band.sub ? <p className="text-[13px] text-white/60">{band.sub}</p> : null}
          </div>
        </div>
      </div>
    </section>
  );
}

function Refrain({
  children,
  onDark = false,
}: {
  children: React.ReactNode;
  onDark?: boolean;
}) {
  return (
    <div className="mt-12 flex justify-center">
      <p
        className={`inline-block max-w-lg text-center text-[15px] font-semibold uppercase tracking-[0.18em] border-t pt-4 ${
          onDark ? 'text-white border-[#665efd]' : 'text-[#0076FF] border-[#222222]'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export default function WingmatesPage() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      {/* ===== 1. HERO ===== */}
      {/*
        The section is black and the glow covers it edge to edge. Previously the wash was a
        fixed 520px band of #000000 sitting on a #0F0F0F section, so the video below the
        band fell on a different colour and you could see the seam.
      */}
      <section className="relative overflow-hidden bg-black">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              'radial-gradient(1100px 520px at 50% 0%, rgba(0,118,255,0.20), transparent 62%)',
          }}
        />
        <div
          className={`${SECTION} relative`}
          style={{ paddingTop: 'clamp(64px, 10vw, 112px)' }}
        >
          <div className="max-w-3xl mx-auto w-full">
            <div className="flex flex-col gap-6">
              <p className={EYEBROW}>{hero.eyebrow}</p>

              <h1 className={`${H1} text-center`}>{hero.headline}</h1>

              <p className={LEAD}>{hero.subline}</p>

              <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-6">
                {/* Social proof badge. */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-2.5">
                    {hero.badge.avatars.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt=""
                        aria-hidden="true"
                        className="w-9 h-9 rounded-full object-cover"
                        style={{
                          zIndex: hero.badge.avatars.length - i,
                          boxShadow: '0 0 0 2px #0F0F0F',
                        }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span aria-hidden="true" className="text-[#f5a524] text-sm">
                        {'★★★★★'}
                      </span>
                      <span className="text-[13px] font-medium text-[#FFFFFF]">
                        {hero.badge.rating}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#7A7A7A]">
                      {hero.badge.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-12">
              <div
                className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_60px_rgba(0,118,255,0.12)]"
                style={{
                  boxShadow:
                    '0 20px 40px -20px rgba(13,37,61,0.15), 0 8px 24px rgba(0,55,112,0.08)',
                }}
              >
                <video
                  className="w-full h-full object-cover"
                  src={hero.videoUrl}
                  autoPlay
                  muted
                  loop
                  playsInline
                  controls
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GUSCHLBAUER — deep navy interlude, single band of dark punctuation ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS }}>
        <div className={WRAP}>
          <TestimonialMerakai />
        </div>
      </section>

      {/* ===== 2. DOES THIS SOUND FAMILIAR — canvas-soft with hairline cards ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
        <div className={`${WRAP}`}>
          <div className="mb-12 max-w-3xl">
                        <h2 className={`${H2} text-center`}>{problem.heading}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problem.lines.map((line, i) => (
              <article
                key={line.slice(0, 24)}
                className="rounded-xl p-7 bg-[#0F0F0F] border border-[#222222] flex flex-col gap-4 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)]"
              >
                <span className="text-[11px] font-mono font-medium text-[#7A7A7A] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[16px] leading-[1.55] text-[#B4B4B4]">
                  {line}
                </p>
              </article>
            ))}
          </div>

          <p className={`mt-14 ${LEAD} max-w-3xl`}>{problem.bridge}</p>
        </div>
      </section>

      {/* ===== THE ORIGIN — Grant's copy, from reserve.md ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS }}>
        <div className={WRAP}>
          <h2 className={`${H2_ON_DARK} text-center mb-10`}>{origin.heading}</h2>
          <Blocks blocks={origin.blocks} />
          <div className="mt-12">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== THE REFRAME — Grant's copy, from most-coaching.md ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
        <div className={WRAP}>
          <h2 className={`${H2_ON_DARK} text-center mb-10`}>{villain.heading}</h2>
          <Blocks blocks={villain.blocks} />
          <Refrain onDark>{villain.refrain}</Refrain>
          <div className="mt-12">
            <Cta variant="on-dark" />
          </div>
        </div>
      </section>

      <Band band={bands.afterVillain} />

      {/* ===== 5. FOUR-STEP SYSTEM — canvas-soft, numbered blocks ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
        <div className={WRAP}>
                    <h2 className={`${H2} text-center mb-5`}>{howItWorks.heading}</h2>
          <p className={`${LEAD} text-center`}>{howItWorks.intro}</p>

          {/* StoryOS-style numbered steps: circled numeral, connecting rule down the gutter. */}
          <ol className="mt-16">
            {howItWorks.steps.map((step: any, i: number) => (
              <li key={step.title} className="relative grid grid-cols-[auto_1fr] gap-x-6 sm:gap-x-8 pb-14 last:pb-0">
                {/* numeral */}
                <div className="relative">
                  <span
                    aria-hidden="true"
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[#0076FF] bg-black text-[15px] font-semibold text-[#4DA3FF]"
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {i < howItWorks.steps.length - 1 ? (
                    <span
                      aria-hidden="true"
                      className="absolute left-1/2 top-14 -ml-px h-[calc(100%-3.5rem)] w-px bg-white/12"
                    />
                  ) : null}
                </div>

                <div className="pt-2.5">
                  <h3 className={`${H3} mb-4`}>{step.title}</h3>
                  <div className={`space-y-4 ${BODY}`}>
                    {step.body.map((para: string) => (
                      <p key={para.slice(0, 20)}>{para}</p>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ol>

          <Refrain>{howItWorks.refrain}</Refrain>

          <div className="mt-12">
            <Cta />
          </div>
        </div>
      </section>

      <Band band={bands.afterSystem} />

      {/* ===== 6. EXACTLY HOW — white canvas, numbered deliverable blocks ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS }}>
        <div className="max-w-[70rem] mx-auto">
          <div className="mb-16">
                        <h2 className={`${H2} text-center mb-6`}>{objections.heading}</h2>
            <p className={`${LEAD} text-center max-w-[44rem] mx-auto`}>{objections.intro}</p>
          </div>

          <div className="mt-20 space-y-24">
            {objections.items.map((item: any, i: number) => (
              <React.Fragment key={item.heading}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  {/* Copy column. Alternates side on desktop so the page does not march. */}
                  <div className={i % 2 === 1 ? 'lg:order-2' : ''}>
                    <p className={`${EYEBROW} mb-4`}>
                      {String(i + 1).padStart(2, '0')} &middot; {item.label}
                    </p>
                    <h3 className={`${H2} mb-6`}>{item.heading}</h3>
                    <div className={`space-y-4 ${BODY}`}>
                      {item.body.map((para: string) => (
                        <p key={para.slice(0, 20)}>{para}</p>
                      ))}
                    </div>
                    {item.leadIn ? (
                      <p className="mt-7 text-[17px] font-semibold text-white">{item.leadIn}</p>
                    ) : null}
                    {item.bullets ? (
                      <ul className="mt-4 space-y-3">
                        {item.bullets.map((b: string) => (
                          <li key={b.slice(0, 20)} className={`flex gap-3 ${BODY}`}>
                            <span aria-hidden="true" className="mt-0.5 text-[#0076FF]">&#10003;</span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-9 flex justify-start">
                      <Cta />
                    </div>
                  </div>

                  {/* Media column */}
                  <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                    {item.media?.video ? (
                      <figure>
                        <div className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-white/10 shadow-[0_0_60px_rgba(0,118,255,0.12)]">
                          <video
                            className="w-full h-full object-cover"
                            src={item.media.video}
                            poster={item.media.poster}
                            preload="metadata"
                            playsInline
                            controls
                          />
                        </div>
                        {item.media.caption ? (
                          <figcaption className="mt-3 text-[14px] text-[#7A7A7A]">
                            {item.media.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ) : (
                      <Image
                        src={item.media.src}
                        alt={item.media.alt}
                        width={item.media.width}
                        height={item.media.height}
                        sizes="(max-width: 1024px) 100vw, 560px"
                        className="w-full h-auto rounded-xl ring-1 ring-white/10 shadow-[0_0_60px_rgba(0,118,255,0.12)]"
                      />
                    )}
                  </div>
                </div>

                {[bands.afterDebrief, bands.afterCall, bands.afterTracklog][i] ? (
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
                    <Band band={[bands.afterDebrief, bands.afterCall, bands.afterTracklog][i]} />
                  </div>
                ) : null}
              </React.Fragment>
            ))}
          </div>

          {/* Included bonus card — cream to signal a warm 'plus'. */}

        </div>
      </section>

      {/* Senja testimonial wall */}
      <WallOfLove />

      {/* ===== 8. IS THIS FOR YOU — white canvas ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS }}>
        <div className={WRAP}>
          <div className="max-w-3xl mb-12">
            <h2 className={`${H2} text-center`}>{forYou.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-7 bg-[#0F0F0F] border border-[#222222]">
              <h3 className={`${H3} mb-5`}>{forYou.forHeading}</h3>
              <ul className="space-y-3">
                {forYou.forItems.map((item) => (
                  <li
                    key={item}
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
                    key={item}
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

          <div className="mt-4 rounded-xl p-7 sm:p-8 bg-[#0F0F0F] border border-[#222222]">
            <h3 className={`${H3} mb-5`}>{forYou.doesntMatterHeading}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {forYou.doesntMatterItems.map((item) => (
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

          <p className={`${READ} mt-10 ${BODY}`}>{forYou.note}</p>

          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== ABOUT GRANT — canvas-soft, portrait side by side ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
        <div className={WRAP}>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
            <div className="flex flex-col items-center gap-6">
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-1 ring-white/10 shadow-[0_0_60px_rgba(0,118,255,0.12)]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.imageUrl}
                  alt="Grant Smith"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Flow Coaching Federation Certified badge, under the portrait. */}
              <Image
                src={about.badge.src}
                alt={about.badge.alt}
                width={256}
                height={256}
                // unoptimized on purpose: Next's optimiser palettises this PNG and
                // flattens its alpha against black, which puts a black square behind
                // the badge. The source is pre-sized to 256px so it stays small.
                unoptimized
                className="w-28 h-28 sm:w-32 sm:h-32"
              />
            </div>
            <div className="max-w-[62ch] space-y-5">
              <p className="text-[26px] sm:text-[30px] leading-[1.15] font-light tracking-[-0.015em] text-[#FFFFFF]">
                {about.heading}
              </p>
              <div className={`space-y-4 ${BODY}`}>
                {about.paragraphs.map((p) => (
                  <p key={p.slice(0, 24)}>{p}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 9. PRICING ===== */}
      <PricingWingmates />

      {/* Course testimonial, under the pricing section */}
      <section className="px-6 sm:px-8 py-16 sm:py-20" style={{ backgroundColor: BAND }}>
        <div className="max-w-[44rem] mx-auto text-center">
          <p className="text-[20px] sm:text-[24px] font-light leading-[1.4] tracking-[-0.01em] text-white">
            &ldquo;{courseProof.quote}&rdquo;
          </p>
          <p className="mt-5 text-[15px] font-semibold text-[#4DA3FF]">{courseProof.name}</p>
          <p className="mt-1 text-[13px] text-[#7A7A7A]">{courseProof.sub}</p>
        </div>
      </section>

      {/* ===== 10. FAQ — canvas-soft ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
        <div className={WRAP}>
          <div className="max-w-3xl mb-10">
                        <h2 className={`${H2} text-center`}>{faq.heading}</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {faq.items.map((item: any) => (
              <details
                key={item.q}
                className="group rounded-xl bg-[#0F0F0F] border border-[#222222] px-6 py-5 open:shadow-[0_1px_3px_rgba(0,55,112,0.08)]"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-[17px] font-medium text-[#FFFFFF]">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-[6px] shrink-0 w-3 h-3 relative text-[#0076FF] transition-transform duration-200 group-open:rotate-45"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <div className="mt-4 space-y-4 text-[16px] leading-[1.6] text-[#B4B4B4]">
                  {(Array.isArray(item.a) ? item.a : [item.a]).map((para: string) => (
                    <p key={para.slice(0, 20)}>{para}</p>
                  ))}
                  {item.quote ? (
                    <blockquote className="mt-6 border-l-2 border-[#0076FF] pl-5">
                      <p className="text-[17px] leading-[1.5] text-white italic">
                        &ldquo;{item.quote.text}&rdquo;
                      </p>
                      <footer className="mt-2 text-[14px] not-italic text-[#7A7A7A]">
                        &mdash; {item.quote.cite}
                      </footer>
                    </blockquote>
                  ) : null}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/*
        ===== 11. FINAL OBJECTION ("Can't I Work This Out on My Own?") =====
        HIDDEN 2026-10-02 at Grant's request. The copy is intact in content.ts under
        `finalCta`; the markup is in git history at commit 44d8c50 if it comes back.
      */}

      <ParallaxTestimonials />
    </main>
  );
}
