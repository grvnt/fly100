import { Metadata } from 'next';
import ButtonGradient from '@/components/General/ButtonGradient';
import TestimonialMerakai from '@/components/General/TestimonialMerakai';
import PricingWingmates from '@/components/General/PricingWingmates';
import GroupFlow from '@/components/General/GroupFlow';
import ParallaxTestimonials from '@/components/General/ParallaxTestimonials';
import {
  hero,
  problem,
  villain,
  origin,
  howItWorks,
  possible,
  objections,
  proof,
  forYou,
  faq,
  finalCta,
  about,
  colors,
} from './content';

export const metadata: Metadata = {
  title: 'Wingmates | Fly Better, Together',
  description:
    'An ongoing coaching room for XC pilots who want consistent growth and confidence in the air. Send Grant a flight, find out what really happened.',
};

/**
 * Design tokens. Change type and rhythm here, not on individual elements.
 * Modelled on the StoryOS deliverable sections Grant shared: left-aligned text column,
 * media alongside, generous size and leading, CTA centred underneath.
 */
const SECTION = 'px-5 sm:px-8 py-20 sm:py-24 lg:py-28';
const WRAP = 'max-w-6xl mx-auto';
const COL = 'max-w-3xl mx-auto';                            // reading column, centred
const EYEBROW = 'text-sm font-semibold uppercase tracking-[0.18em]';
const H2 = 'text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.12] tracking-tight';
const H3 = 'text-xl sm:text-2xl font-bold text-white leading-snug';
const BODY = 'text-lg sm:text-xl leading-[1.7] text-white/80 text-justify';
const LEAD = 'text-xl sm:text-2xl leading-[1.6] text-white/90';

function Cta({ className = '' }: { className?: string }) {
  return (
    <div className="flex justify-center">
      <ButtonGradient href="#pricing" text={hero.cta} className={`btn-wide ${className}`} />
    </div>
  );
}

function Refrain({ children }: { children: React.ReactNode }) {
  return (
    <p
      className="mt-8 text-xl sm:text-2xl font-bold text-white text-center border-t-4 pt-5 max-w-lg mx-auto"
      style={{ borderColor: colors.accent }}
    >
      {children}
    </p>
  );
}

export default function WingmatesPage() {
  return (
    <main>
      {/* ===== 1. HERO ===== */}
      <section className={`${SECTION} min-h-[80vh] flex items-center`} style={{ backgroundColor: colors.section }}>
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="flex flex-col gap-4 lg:gap-6">
            <p
              className={`${EYEBROW} animate-pulse-text`}
              style={{ color: colors.accent }}
            >
              {hero.eyebrow}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">{hero.subline}</p>

            <div className="mt-2 flex flex-col sm:flex-row sm:items-center justify-center gap-4">
              <Cta />
              {/* Social proof badge. Wording lives in content.ts, not in a Senja setting. */}
              <div className="flex items-center justify-center gap-3">
                <div className="flex -space-x-3">
                  {hero.badge.avatars.map((src, i) => (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      key={src}
                      src={src}
                      alt=""
                      aria-hidden="true"
                      className="w-9 h-9 rounded-full object-cover ring-2"
                      style={{ zIndex: hero.badge.avatars.length - i, boxShadow: '0 0 0 2px #0F172A' }}
                    />
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span aria-hidden="true" className="text-[#FBBF24] text-sm tracking-tight">
                      {'\u2605\u2605\u2605\u2605\u2605'}
                    </span>
                    <span className="text-sm font-semibold text-white">{hero.badge.rating}</span>
                  </div>
                  <p className="text-xs text-white/70 text-left">{hero.badge.caption}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div
              className="w-full aspect-video rounded-2xl overflow-hidden border-4 animate-pulse-border"
              style={{ borderColor: colors.accent }}
            >
              {/* Original intro clip. Muted autoplay loop, so it plays without a click. */}
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
      </section>

      {/* ===== GUSCHLBAUER ===== */}
      <section
        className="relative min-h-[50vh] flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/blog-images/gudauri-paragliding-sigma.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 w-full">
          <TestimonialMerakai />
        </div>
      </section>

      {/* ===== 2. DOES THIS SOUND FAMILIAR ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.section }}>
        <div className={`${WRAP} flex flex-col items-center gap-8 sm:gap-12`}>
          <h2 className={`${COL} ${H2} mb-8`}>
            {problem.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {problem.lines.map((line) => (
              <article
                key={line.slice(0, 24)}
                className="rounded-2xl p-6 sm:p-8 text-left border-4 border-transparent transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] flex"
                style={{ backgroundColor: colors.card }}
              >
                <p className="text-base sm:text-lg text-white leading-relaxed">{line}</p>
              </article>
            ))}
          </div>

          <p className={`${COL} ${LEAD} text-center`}>
            {problem.bridge}
          </p>
        </div>
      </section>

      {/* ===== 3. THE ONE CHANGE (origin story) ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className={WRAP}>
          <h2 className={`${COL} ${H2} mb-8`}>
            {origin.heading}
          </h2>
          <div className={`${COL} space-y-6 ${BODY}`}>
            {origin.published.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className={`${COL} mt-8 space-y-6 ${BODY}`}>
            {origin.landing.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className={`${COL} mt-8 space-y-6 ${BODY}`}>
            {origin.isolation.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className={`${COL} mt-8 space-y-6 ${BODY}`}>
            {origin.handoff.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== 4. THE REFRAME (villain) ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.section }}>
        <div className={WRAP}>
          <h2 className={`${COL} ${H2} mb-8`}>
            {villain.heading}
          </h2>
          <p className="mb-8 text-lg font-semibold" style={{ color: colors.accent }}>
            {villain.subheading}
          </p>

          <div className={`${COL} space-y-6 ${BODY}`}>
            {villain.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <div
            className="mt-10 rounded-2xl p-6 sm:p-8 space-y-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl"
            style={{ backgroundColor: colors.card }}
          >
            {villain.published.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p
            className="mt-10 max-w-3xl text-white text-lg sm:text-xl lg:text-2xl leading-relaxed border-t-4 pt-6 font-medium"
            style={{ borderColor: colors.accent }}
          >
            {villain.villainSentence}
          </p>

          <div className={`${COL} mt-8 space-y-6 ${BODY}`}>
            {villain.scoreboard.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p className={`${COL} mt-10 ${LEAD}`}>
            {villain.close}
          </p>

          <Refrain>{villain.refrain}</Refrain>

          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== 5. HOW IT WORKS ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.section }}>
        <div className={WRAP}>
          <h2 className={`${COL} ${H2} mb-8`}>
            {howItWorks.heading}
          </h2>
          <p className={`${COL} ${BODY}`}>
            {howItWorks.intro}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
            {howItWorks.steps.map((step, i) => (
              <div
                key={step.title}
                className="rounded-2xl p-6 sm:p-8 border border-white/10"
                style={{ backgroundColor: colors.card }}
              >
                <span
                  className="text-xs font-semibold tracking-widest"
                  style={{ color: colors.accent }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className={`${H3} mt-3`}>
                  {step.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm sm:text-base leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className={`${COL} mt-8 space-y-6 ${BODY}`}>
            {howItWorks.gaggle.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <Refrain>{howItWorks.refrain}</Refrain>

          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== 5b. WHAT BECOMES POSSIBLE ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className={WRAP}>
          <h2 className={`${COL} ${H2} mb-8`}>
            {possible.heading}
          </h2>
          <p className={`${COL} ${LEAD} mb-10`}>{possible.intro}</p>
          <ul className="space-y-4 max-w-3xl">
            {possible.items.map((item) => (
              <li key={item.slice(0, 24)} className={`flex gap-4 ${BODY} text-left`}>
                <span style={{ color: colors.accent }}>&#8594;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== 6. EXACTLY HOW IT HELPS ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className={WRAP}>
          <h2 className={`${H2} mb-6`}>
            {objections.heading}
          </h2>
          <p className={`${COL} mb-14 ${BODY}`}>{objections.intro}</p>

          <div className="space-y-16">
            {objections.items.map((item, i) => (
              <div
                key={item.objection}
                className={
                  item.media ? 'grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center' : ''
                }
              >
                <div>
                <p
                  className={`${EYEBROW} mb-3`}
                  style={{ color: colors.accent }}
                >
                  {String(i + 1).padStart(2, '0')} &middot; {item.label}
                </p>
                <h3 className={H3}>{item.result}</h3>
                <p className="mt-3 text-white/60 text-base italic">
                  &ldquo;{item.objection}&rdquo;
                </p>
                <p className={`mt-4 ${BODY}`}>
                  {item.answer}
                </p>
                </div>

                {item.media ? (
                  <figure className="w-full">
                    <div
                      className="w-full aspect-video rounded-2xl overflow-hidden border-4"
                      style={{ borderColor: colors.accent }}
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
                    <figcaption className="mt-3 text-sm text-white/60">
                      {item.media.caption}
                    </figcaption>
                  </figure>
                ) : null}
              </div>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl border-4 p-6 sm:p-8 animate-pulse-border"
            style={{ borderColor: colors.accent, backgroundColor: colors.section }}
          >
            <h3 className={H3}>{objections.included.title}</h3>
            <p className={`mt-4 ${BODY}`}>
              {objections.included.body}
            </p>
          </div>

          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== 7. PROOF ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.section }}>
        <div className={WRAP}>
          <h2 className={`${COL} ${H2} mb-8`}>
            {proof.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {proof.items.map((item) => (
              <figure
                key={item.name}
                className="rounded-2xl p-6 sm:p-8 border border-white/10"
                style={{ backgroundColor: colors.card }}
              >
                <blockquote className="text-white text-base sm:text-lg leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-4 text-sm font-semibold" style={{ color: colors.accent }}>
                  {item.name}
                  {item.detail ? (
                    <span className="block mt-1 font-normal text-white/60">{item.detail}</span>
                  ) : null}
                </figcaption>
              </figure>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl p-6 sm:p-8 border-l-4"
            style={{ backgroundColor: colors.card, borderColor: colors.accent }}
          >
            <h3 className="text-lg sm:text-xl font-bold text-white">
              {proof.takeoffReview.heading}
            </h3>
            <div className="mt-4 space-y-4 text-white/85 text-base sm:text-lg leading-relaxed">
              {proof.takeoffReview.body.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Senja walls, left as-is per Grant 2026-09-30 */}
      <GroupFlow />
      <ParallaxTestimonials />

      {/* ===== 8. IS THIS FOR YOU ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.section }}>
        <div className={WRAP}>
          <h2 className={`${COL} ${H2} mb-8`}>
            {forYou.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: colors.card }}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{forYou.forHeading}</h3>
              <ul className="space-y-3">
                {forYou.forItems.map((item) => (
                  <li key={item} className={`flex gap-4 ${BODY} text-left`}>
                    <span style={{ color: colors.accent }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: colors.card }}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{forYou.notHeading}</h3>
              <ul className="space-y-3">
                {forYou.notItems.map((item) => (
                  <li key={item} className={`flex gap-4 ${BODY} text-left`}>
                    <span className="text-white/40">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 rounded-2xl p-6 sm:p-8" style={{ backgroundColor: colors.card }}>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              {forYou.doesntMatterHeading}
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {forYou.doesntMatterItems.map((item) => (
                <li key={item.slice(0, 24)} className={`flex gap-4 ${BODY} text-left`}>
                  <span style={{ color: colors.accent }}>&#8594;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className={`${COL} mt-10 ${BODY}`}>
            {forYou.note}
          </p>

          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== ABOUT GRANT ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className="max-w-3xl space-y-6 text-base sm:text-lg leading-relaxed text-white/85">
          <div className="flex justify-center mb-2">
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 animate-pulse-border"
              style={{ borderColor: colors.accent }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={about.imageUrl}
                alt="Grant Smith"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <p className="text-2xl sm:text-3xl font-semibold text-white">
            {about.heading}
          </p>
          {about.paragraphs.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </section>

      {/* ===== 9. PRICING ===== */}
      <PricingWingmates />

      {/* ===== 10. FAQ ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.section }}>
        <div className="max-w-3xl">
          <h2 className={`${COL} ${H2} mb-8`}>
            {faq.heading}
          </h2>
          <div className="space-y-6">
            {faq.items.map((item) => (
              <details
                key={item.q}
                className="rounded-2xl p-5 sm:p-6 border border-white/10"
                style={{ backgroundColor: colors.card }}
              >
                <summary className="cursor-pointer text-base sm:text-lg font-semibold text-white">
                  {item.q}
                </summary>
                <p className="mt-3 text-white/80 text-base leading-relaxed">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 11. FINAL OBJECTION + CTA ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className="max-w-3xl">
          <h2 className={`${COL} ${H2} mb-8`}>
            {finalCta.heading}
          </h2>
          <div className="space-y-5 text-white/85 text-base sm:text-lg leading-relaxed">
            {finalCta.body.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <Refrain>{finalCta.refrain}</Refrain>

          <div className="mt-10 flex flex-col items-start gap-3">
            <Cta />
            <p className="text-sm text-white/60">{finalCta.terms}</p>
          </div>
        </div>
      </section>
    </main>
  );
}
