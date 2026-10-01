import React from 'react';
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
 * Near-black, white, one cool half-step, and a single vivid blue. High
 * contrast and cool rather than warm, which is what reads as modern.
 *
 * NOTE: Tailwind JIT scans source text, so a colour used in a CLASS must be a
 * literal (text-[#1D4ED8]). These consts are for inline styles only.
 */
const INK = '#0B1117';        // near-black with a blue cast — dark sections, headings
const INK_SOFT = '#4B5563';   // body copy on light
const CANVAS = '#FFFFFF';     // clean white — the default surface
const CANVAS_ALT = '#F4F6F8'; // cool light grey — alternating sections
const ACCENT = '#1D4ED8';     // vivid blue. Used sparingly: eyebrows, rules, CTA.

const SECTION = 'px-6 sm:px-8 py-20 sm:py-24 lg:py-28';
const WRAP = 'max-w-[46rem] mx-auto';
const READ = 'max-w-none'; // the wrap IS the measure now — one column, one edge

const DISPLAY = 'font-[family-name:var(--font-display)]';
const BODYFONT = 'font-[family-name:var(--font-body)]';

// Type tokens
const EYEBROW =
  `${BODYFONT} text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1D4ED8]`;
const EYEBROW_ON_DARK =
  `${BODYFONT} text-[12px] font-semibold uppercase tracking-[0.12em] text-[#93B4FF]`;
const H1 =
  `${DISPLAY} text-[2.5rem] sm:text-[3.25rem] lg:text-[3.75rem] font-semibold tracking-[-0.035em] leading-[1.05] text-[#0B1117]`;
const H2 =
  `${DISPLAY} text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-[-0.03em] leading-[1.12] text-[#0B1117]`;
const H2_ON_DARK =
  `${DISPLAY} text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-[-0.03em] leading-[1.12] text-[#FFFFFF]`;
const H3 = `${DISPLAY} text-[1.25rem] sm:text-[1.375rem] font-semibold tracking-[-0.02em] leading-[1.3] text-[#0B1117]`;
const H3_ON_DARK =
  `${DISPLAY} text-[1.25rem] sm:text-[1.375rem] font-semibold tracking-[-0.02em] leading-[1.3] text-[#FFFFFF]`;
const BODY = `${BODYFONT} text-[17px] leading-[1.65] text-[#4B5563]`;
const BODY_ON_DARK = `${BODYFONT} text-[17px] leading-[1.65] text-white/80`;
const LEAD =
  `${BODYFONT} text-[19px] sm:text-[20px] leading-[1.55] text-[#4B5563]`;
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
    'inline-flex items-center justify-center rounded-full px-6 py-3 text-[15px] font-medium tracking-[-0.005em] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2';
  const styles =
    variant === 'on-dark'
      ? 'bg-[#FFFFFF] text-[#0B1117] hover:bg-white focus-visible:ring-white focus-visible:ring-offset-[#0B1117]'
      : 'bg-[#1D4ED8] text-white hover:bg-[#1E40AF] focus-visible:ring-[#1D4ED8] focus-visible:ring-offset-white';
  // Centred in its own wrapper, so every call site gets it without repeating the class.
  return (
    <div className="flex justify-center">
      <Link href="#pricing" className={`${base} ${styles} ${className}`}>
        {hero.cta}
      </Link>
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
      className={`${size} rounded-full flex items-center justify-center text-lg font-semibold text-[#93B4FF]`}
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
      <section className="px-5 sm:px-8 py-20 sm:py-24" style={{ backgroundColor: INK }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[24px] sm:text-[30px] font-light leading-[1.3] tracking-[-0.012em] text-white">
            &ldquo;{band.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Avatar src={band.avatar} name={band.name} />
            <div>
              <p className="text-[15px] font-semibold text-[#93B4FF]">{band.name}</p>
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
    <section className="px-5 sm:px-8 py-20 sm:py-24" style={{ backgroundColor: INK }}>
      <div className="max-w-3xl mx-auto text-center">
        <span aria-hidden="true" className="block text-5xl leading-none text-white/25">&ldquo;</span>
        <p className="mt-4 text-[26px] sm:text-[34px] font-light leading-[1.25] tracking-[-0.015em] text-white">
          &ldquo;{band.quote}&rdquo;
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Avatar src={band.avatar} name={band.name} />
          <div className="text-left">
            <p className="text-[15px] font-semibold text-[#93B4FF]">{band.name}</p>
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
          onDark ? 'text-white border-[#665efd]' : 'text-[#1D4ED8] border-[#E6EAEF]'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export default function WingmatesPage() {
  return (
    <main className="bg-[#FFFFFF] text-[#0B1117] overflow-x-hidden">
      {/* ===== 1. HERO — light canvas, subtle indigo wash top ===== */}
      <section className="relative overflow-hidden bg-[#FFFFFF]">
        {/* Soft gradient wash reminiscent of the DESIGN.md mesh, kept light. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
          style={{
            background:
              'radial-gradient(1100px 420px at 50% 0%, rgba(29,78,216,0.07), transparent 62%), linear-gradient(to bottom, #F4F6F8 0%, #FFFFFF 64%)',
          }}
        />
        <div
          className={`${SECTION} relative`}
          style={{ paddingTop: 'clamp(64px, 10vw, 112px)' }}
        >
          <div className="max-w-3xl mx-auto w-full">
            <div className="flex flex-col gap-6">
              <p className={EYEBROW}>{hero.eyebrow}</p>

              <h1 className={H1}>{hero.headline}</h1>

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
                          boxShadow: '0 0 0 2px #ffffff',
                        }}
                      />
                    ))}
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span aria-hidden="true" className="text-[#f5a524] text-sm">
                        {'★★★★★'}
                      </span>
                      <span className="text-[13px] font-medium text-[#0B1117]">
                        {hero.badge.rating}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#8A94A3]">
                      {hero.badge.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-12">
              <div
                className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-[#E6EAEF]"
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
      <section className={SECTION} style={{ backgroundColor: INK }}>
        <div className={WRAP}>
          <TestimonialMerakai />
        </div>
      </section>

      {/* ===== 2. DOES THIS SOUND FAMILIAR — canvas-soft with hairline cards ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
        <div className={`${WRAP}`}>
          <div className="mb-12 max-w-3xl">
                        <h2 className={H2}>{problem.heading}</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {problem.lines.map((line, i) => (
              <article
                key={line.slice(0, 24)}
                className="rounded-xl p-7 bg-[#FFFFFF] border border-[#E6EAEF] flex flex-col gap-4 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)]"
              >
                <span className="text-[11px] font-mono font-medium text-[#8A94A3] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[16px] leading-[1.55] text-[#4B5563]">
                  {line}
                </p>
              </article>
            ))}
          </div>

          <p className={`mt-14 ${LEAD} max-w-3xl`}>{problem.bridge}</p>
        </div>
      </section>

      {/* ===== 3. ORIGIN STORY — white canvas, reading column ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS }}>
        <div className={WRAP}>
          <div className="max-w-3xl">
                        <h2 className={`${H2} mb-10`}>{origin.heading}</h2>
          </div>
          <div className={`${READ} space-y-5 ${BODY}`}>
            {origin.published.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            {origin.landing.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            {origin.isolation.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
            {origin.handoff.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-12">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== 4. THE REFRAME — dark navy band, the villain interlude ===== */}
      <section className={SECTION} style={{ backgroundColor: INK }}>
        <div className={WRAP}>
          <div className="max-w-3xl">
            <h2 className={`${H2_ON_DARK} mb-10`}>{villain.heading}</h2>
          </div>

          <div className={`${READ} space-y-5 ${BODY_ON_DARK}`}>
            {villain.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          {/* Verbatim published-Grant quote block: cream card as chromatic interlude
              inside the dark section — quotes Grant's earlier essay verbatim. */}
          <blockquote
            className="mt-10 max-w-3xl rounded-xl px-7 py-8 space-y-5 text-[#0B1117]"
            style={{ backgroundColor: CANVAS_ALT }}
          >
            {villain.published.map((p) => (
              <p key={p.slice(0, 24)} className="text-[16px] leading-[1.6]">
                {p}
              </p>
            ))}
          </blockquote>

          <p className="mt-10 max-w-3xl text-white text-[19px] sm:text-[21px] leading-[1.4] font-light tracking-[-0.005em] border-l-2 border-[#665efd] pl-5">
            {villain.villainSentence}
          </p>

          <div className={`${READ} mt-10 space-y-5 ${BODY_ON_DARK}`}>
            {villain.scoreboard.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p className={`${READ} mt-10 ${LEAD_ON_DARK}`}>{villain.close}</p>

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
                    <h2 className={`${H2} mb-5`}>{howItWorks.heading}</h2>
          <p className={`${READ} ${LEAD}`}>{howItWorks.intro}</p>

          <div className="mt-14 space-y-14">
            {howItWorks.steps.map((step: any, i: number) => (
              <div key={step.title} className={READ}>
                <p className={`${EYEBROW} mb-3`}>{String(i + 1).padStart(2, '0')}</p>
                <h3 className={`${H3} mb-4`}>{step.title}</h3>
                <div className={`space-y-4 ${BODY}`}>
                  {step.body.map((para: string) => (
                    <p key={para.slice(0, 20)}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className={`${READ} mt-14 space-y-5 ${BODY}`}>
            {howItWorks.gaggle.map((para: string) => (
              <p key={para.slice(0, 20)}>{para}</p>
            ))}
          </div>

          <Refrain>{howItWorks.refrain}</Refrain>

          <div className="mt-12">
            <Cta />
          </div>
        </div>
      </section>

      <Band band={bands.afterSystem} />

      {/* ===== 6. EXACTLY HOW — white canvas, numbered deliverable blocks ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS }}>
        <div className={WRAP}>
          <div className="max-w-3xl mb-16">
                        <h2 className={`${H2} mb-6`}>{objections.heading}</h2>
            <p className={BODY}>{objections.intro}</p>
          </div>

          <div className="space-y-16 lg:space-y-24">
            {objections.items.map((item: any, i: number) => (
              <React.Fragment key={item.objection}>
              <div
                key={item.objection}
                className={
                  item.media
                    ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center'
                    : ''
                }
              >
                <div className="max-w-[62ch]">
                  <p className={`${EYEBROW} mb-3`}>
                    {String(i + 1).padStart(2, '0')} &middot; {item.label}
                  </p>
                  <h3 className={`${H3} text-[22px] sm:text-[26px] font-light tracking-[-0.01em] leading-[1.2]`}>
                    {item.result}
                  </h3>
                  <p className="mt-4 text-[15px] text-[#8A94A3] italic leading-[1.55]">
                    &ldquo;{item.objection}&rdquo;
                  </p>
                  <p className={`mt-4 ${BODY}`}>{item.answer}</p>
                </div>

                {item.media ? (
                  <figure className="w-full">
                    <div
                      className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-[#E6EAEF] bg-[#0B1117]"
                      style={{
                        boxShadow:
                          '0 20px 40px -20px rgba(13,37,61,0.15), 0 8px 24px rgba(0,55,112,0.08)',
                      }}
                    >
                      <video
                        className="w-full h-full object-cover"
                        src={item.media.video}
                        poster={item.media.poster}
                        preload="metadata"
                        playsInline
                        controls
                      />
                    </div>
                    <figcaption className="mt-3 text-[13px] text-[#8A94A3]">
                      {item.media.caption}
                    </figcaption>
                  </figure>
                ) : null}
                </div>
                {[bands.afterDebrief, bands.afterCall, bands.afterTracklog][i] ? (
                  <div className="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen my-10">
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
            <h2 className={H2}>{forYou.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-7 bg-[#FFFFFF] border border-[#E6EAEF]">
              <h3 className={`${H3} mb-5`}>{forYou.forHeading}</h3>
              <ul className="space-y-3">
                {forYou.forItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[16px] leading-[1.55] text-[#4B5563]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-7 bg-[#F4F6F8] border border-[#E6EAEF]">
              <h3 className={`${H3} mb-5`}>{forYou.notHeading}</h3>
              <ul className="space-y-3">
                {forYou.notItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[16px] leading-[1.55] text-[#8A94A3]"
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

          <div className="mt-4 rounded-xl p-7 sm:p-8 bg-[#FFFFFF] border border-[#E6EAEF]">
            <h3 className={`${H3} mb-5`}>{forYou.doesntMatterHeading}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {forYou.doesntMatterItems.map((item) => (
                <li
                  key={item.slice(0, 24)}
                  className="flex gap-3 text-[16px] leading-[1.55] text-[#4B5563]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#1D4ED8]"
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
            <div className="flex justify-center lg:justify-start">
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-1 ring-[#E6EAEF]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.imageUrl}
                  alt="Grant Smith"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-[62ch] space-y-5">
              <p className="text-[26px] sm:text-[30px] leading-[1.15] font-light tracking-[-0.015em] text-[#0B1117]">
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

      {/* ===== 10. FAQ — canvas-soft ===== */}
      <section className={SECTION} style={{ backgroundColor: CANVAS_ALT }}>
        <div className={WRAP}>
          <div className="max-w-3xl mb-10">
                        <h2 className={H2}>{faq.heading}</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-[#FFFFFF] border border-[#E6EAEF] px-6 py-5 open:shadow-[0_1px_3px_rgba(0,55,112,0.08)]"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-[17px] font-medium text-[#0B1117]">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-[6px] shrink-0 w-3 h-3 relative text-[#1D4ED8] transition-transform duration-200 group-open:rotate-45"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="mt-4 text-[16px] leading-[1.6] text-[#4B5563]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. FINAL OBJECTION + CTA — dark navy bookend ===== */}
      <section className={SECTION} style={{ backgroundColor: INK }}>
        <div className={WRAP}>
          <div className="max-w-3xl">
            <h2 className={`${H2_ON_DARK} mb-10`}>{finalCta.heading}</h2>
            <div className={`space-y-5 ${BODY_ON_DARK}`}>
              {finalCta.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <Refrain onDark>{finalCta.refrain}</Refrain>

            <div className="mt-12 flex flex-col sm:flex-row sm:items-center gap-4">
              <Cta variant="on-dark" />
              <p className="text-[13px] text-white/60">{finalCta.terms}</p>
            </div>
          </div>
        </div>
      </section>
      <ParallaxTestimonials />
    </main>
  );
}
