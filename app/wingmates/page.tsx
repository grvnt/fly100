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
 * Stripe-inspired system (see DESIGN.md).
 * Palette used through this file:
 *   canvas      #ffffff
 *   canvas-soft #f6f9fc
 *   canvas-cream#f5e9d4
 *   ink         #0d253d
 *   ink-2       #273951
 *   ink-mute    #64748d
 *   hairline    #e3e8ee
 *   primary     #533afd
 *   navy-900    #1c1e54  (used sparingly for punctuation)
 *
 * Type: font-weight 300 for display sizes, tight negative tracking.
 * Rhythm: light-dominant, two dark bands (Guschlbauer + villain reframe + final CTA)
 * for emphasis, cream interlude at "What Becomes Possible".
 */

const SECTION = 'px-5 sm:px-8 py-16 sm:py-20 lg:py-24';
const WRAP = 'max-w-4xl mx-auto';
const READ = 'max-w-[64ch]'; // reading measure, left-aligned with everything else

// Type tokens
const EYEBROW =
  'text-[11px] font-semibold uppercase tracking-[0.16em] text-[#533afd]';
const EYEBROW_ON_DARK =
  'text-[11px] font-semibold uppercase tracking-[0.16em] text-[#b9b9f9]';
const H1 =
  'text-[2.25rem] sm:text-[2.75rem] lg:text-[3.5rem] font-light tracking-[-0.02em] leading-[1.05] text-[#0d253d]';
const H2 =
  'text-3xl sm:text-4xl lg:text-[2.5rem] font-light tracking-[-0.018em] leading-[1.1] text-[#0d253d]';
const H2_ON_DARK =
  'text-3xl sm:text-4xl lg:text-[2.5rem] font-light tracking-[-0.018em] leading-[1.1] text-white';
const H3 = 'text-xl sm:text-[1.35rem] font-medium tracking-[-0.01em] text-[#0d253d]';
const H3_ON_DARK =
  'text-xl sm:text-[1.35rem] font-medium tracking-[-0.01em] text-white';
const BODY = 'text-[17px] leading-[1.6] text-[#273951]';
const BODY_ON_DARK = 'text-[17px] leading-[1.6] text-white/85';
const LEAD =
  'text-[19px] sm:text-[21px] leading-[1.5] font-light tracking-[-0.005em] text-[#0d253d]';
const LEAD_ON_DARK =
  'text-[19px] sm:text-[21px] leading-[1.5] font-light tracking-[-0.005em] text-white/95';

/**
 * Pill CTA. Tight radius (9999px), 8px 16px padding scaled up for touch.
 * One filled indigo pill per band, per Stripe convention.
 */
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
      ? 'bg-white text-[#0d253d] hover:bg-white/90 focus-visible:ring-white focus-visible:ring-offset-[#1c1e54]'
      : 'bg-[#533afd] text-white hover:bg-[#4434d4] focus-visible:ring-[#533afd] focus-visible:ring-offset-white';
  return (
    <Link href="#pricing" className={`${base} ${styles} ${className}`}>
      {hero.cta}
    </Link>
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
      className={`${size} rounded-full flex items-center justify-center text-lg font-semibold text-[#b9b9f9]`}
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
      <section className="px-5 sm:px-8 py-20 sm:py-24" style={{ backgroundColor: '#0d253d' }}>
        <div className="max-w-3xl mx-auto">
          <p className="text-[24px] sm:text-[30px] font-light leading-[1.3] tracking-[-0.012em] text-white">
            &ldquo;{band.quote}&rdquo;
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Avatar src={band.avatar} name={band.name} />
            <div>
              <p className="text-[15px] font-semibold text-[#b9b9f9]">{band.name}</p>
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
    <section className="px-5 sm:px-8 py-20 sm:py-24" style={{ backgroundColor: '#0d253d' }}>
      <div className="max-w-3xl mx-auto text-center">
        <span aria-hidden="true" className="block text-5xl leading-none text-white/25">&ldquo;</span>
        <p className="mt-4 text-[26px] sm:text-[34px] font-light leading-[1.25] tracking-[-0.015em] text-white">
          &ldquo;{band.quote}&rdquo;
        </p>
        <div className="mt-8 flex items-center justify-center gap-4">
          <Avatar src={band.avatar} name={band.name} />
          <div className="text-left">
            <p className="text-[15px] font-semibold text-[#b9b9f9]">{band.name}</p>
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
          onDark ? 'text-white border-[#665efd]' : 'text-[#533afd] border-[#e3e8ee]'
        }`}
      >
        {children}
      </p>
    </div>
  );
}

export default function WingmatesPage() {
  return (
    <main className="bg-white text-[#0d253d] overflow-x-hidden">
      {/* ===== 1. HERO — light canvas, subtle indigo wash top ===== */}
      <section className="relative overflow-hidden bg-white">
        {/* Soft gradient wash reminiscent of the DESIGN.md mesh, kept light. */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 h-[520px]"
          style={{
            background:
              'radial-gradient(1200px 400px at 20% 0%, rgba(83,58,253,0.08), transparent 60%), radial-gradient(900px 380px at 90% 10%, rgba(249,107,238,0.06), transparent 65%), linear-gradient(to bottom, #f6f9fc 0%, #ffffff 70%)',
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
                      <span className="text-[13px] font-medium text-[#0d253d]">
                        {hero.badge.rating}
                      </span>
                    </div>
                    <p className="text-[12px] text-[#64748d]">
                      {hero.badge.caption}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-12">
              <div
                className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-[#e3e8ee]"
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
      <section className={SECTION} style={{ backgroundColor: '#1c1e54' }}>
        <div className={WRAP}>
          <TestimonialMerakai />
        </div>
      </section>

      {/* ===== 2. DOES THIS SOUND FAMILIAR — canvas-soft with hairline cards ===== */}
      <section className={SECTION} style={{ backgroundColor: '#f6f9fc' }}>
        <div className={`${WRAP}`}>
          <div className="mb-12 max-w-3xl">
                        <h2 className={H2}>{problem.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {problem.lines.map((line, i) => (
              <article
                key={line.slice(0, 24)}
                className="rounded-xl p-7 bg-white border border-[#e3e8ee] flex flex-col gap-4 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,55,112,0.08),0_2px_6px_rgba(0,55,112,0.04)]"
              >
                <span className="text-[11px] font-mono font-medium text-[#64748d] tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-[16px] leading-[1.55] text-[#273951]">
                  {line}
                </p>
              </article>
            ))}
          </div>

          <p className={`mt-14 ${LEAD} max-w-3xl`}>{problem.bridge}</p>
        </div>
      </section>

      {/* ===== 3. ORIGIN STORY — white canvas, reading column ===== */}
      <section className={SECTION} style={{ backgroundColor: '#ffffff' }}>
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
      <section className={SECTION} style={{ backgroundColor: '#1c1e54' }}>
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
            className="mt-10 max-w-3xl rounded-xl px-7 py-8 space-y-5 text-[#0d253d]"
            style={{ backgroundColor: '#f5e9d4' }}
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
      <section className={SECTION} style={{ backgroundColor: '#f6f9fc' }}>
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
      <section className={SECTION} style={{ backgroundColor: '#ffffff' }}>
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
                  <p className="mt-4 text-[15px] text-[#64748d] italic leading-[1.55]">
                    &ldquo;{item.objection}&rdquo;
                  </p>
                  <p className={`mt-4 ${BODY}`}>{item.answer}</p>
                </div>

                {item.media ? (
                  <figure className="w-full">
                    <div
                      className="w-full aspect-video rounded-xl overflow-hidden ring-1 ring-[#e3e8ee] bg-[#0d253d]"
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
                    <figcaption className="mt-3 text-[13px] text-[#64748d]">
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
      <section className={SECTION} style={{ backgroundColor: '#ffffff' }}>
        <div className={WRAP}>
          <div className="max-w-3xl mb-12">
            <h2 className={H2}>{forYou.heading}</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-xl p-7 bg-white border border-[#e3e8ee]">
              <h3 className={`${H3} mb-5`}>{forYou.forHeading}</h3>
              <ul className="space-y-3">
                {forYou.forItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[16px] leading-[1.55] text-[#273951]"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#533afd]"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-xl p-7 bg-[#f6f9fc] border border-[#e3e8ee]">
              <h3 className={`${H3} mb-5`}>{forYou.notHeading}</h3>
              <ul className="space-y-3">
                {forYou.notItems.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-[16px] leading-[1.55] text-[#64748d]"
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

          <div className="mt-4 rounded-xl p-7 sm:p-8 bg-white border border-[#e3e8ee]">
            <h3 className={`${H3} mb-5`}>{forYou.doesntMatterHeading}</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {forYou.doesntMatterItems.map((item) => (
                <li
                  key={item.slice(0, 24)}
                  className="flex gap-3 text-[16px] leading-[1.55] text-[#273951]"
                >
                  <span
                    aria-hidden="true"
                    className="mt-[8px] shrink-0 w-1.5 h-1.5 rounded-full bg-[#533afd]"
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
      <section className={SECTION} style={{ backgroundColor: '#f6f9fc' }}>
        <div className={WRAP}>
          <div className="grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-10 lg:gap-14 items-start">
            <div className="flex justify-center lg:justify-start">
              <div className="w-40 h-40 sm:w-44 sm:h-44 rounded-full overflow-hidden ring-1 ring-[#e3e8ee]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={about.imageUrl}
                  alt="Grant Smith"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="max-w-[62ch] space-y-5">
              <p className="text-[26px] sm:text-[30px] leading-[1.15] font-light tracking-[-0.015em] text-[#0d253d]">
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
      <section className={SECTION} style={{ backgroundColor: '#f6f9fc' }}>
        <div className={WRAP}>
          <div className="max-w-3xl mb-10">
                        <h2 className={H2}>{faq.heading}</h2>
          </div>
          <div className="max-w-3xl space-y-3">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="group rounded-xl bg-white border border-[#e3e8ee] px-6 py-5 open:shadow-[0_1px_3px_rgba(0,55,112,0.08)]"
              >
                <summary className="cursor-pointer list-none flex items-start justify-between gap-4 text-[17px] font-medium text-[#0d253d]">
                  <span>{item.q}</span>
                  <span
                    aria-hidden="true"
                    className="mt-[6px] shrink-0 w-3 h-3 relative text-[#533afd] transition-transform duration-200 group-open:rotate-45"
                  >
                    <span className="absolute inset-x-0 top-1/2 h-[1.5px] -translate-y-1/2 bg-current" />
                    <span className="absolute inset-y-0 left-1/2 w-[1.5px] -translate-x-1/2 bg-current" />
                  </span>
                </summary>
                <p className="mt-4 text-[16px] leading-[1.6] text-[#273951]">
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. FINAL OBJECTION + CTA — dark navy bookend ===== */}
      <section className={SECTION} style={{ backgroundColor: '#1c1e54' }}>
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
