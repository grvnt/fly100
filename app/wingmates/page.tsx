import { Metadata } from 'next';
import ButtonGradient from '@/components/General/ButtonGradient';
import TestimonialMerakai from '@/components/General/TestimonialMerakai';
import PricingWingmates from '@/components/General/PricingWingmates';
import GroupFlow from '@/components/General/GroupFlow';
import ParallaxTestimonials from '@/components/General/ParallaxTestimonials';
import {
  hero,
  problem,
  mirror,
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

const SECTION = 'px-4 sm:px-8 py-12 sm:py-16 lg:py-20';
const WRAP = 'max-w-5xl mx-auto';

function Cta({ className = '' }: { className?: string }) {
  return <ButtonGradient href="#pricing" text={hero.cta} className={`btn-wide ${className}`} />;
}

function Refrain({ children }: { children: React.ReactNode }) {
  return (
    <p className="mt-8 text-xl sm:text-2xl font-bold text-white border-l-4 pl-5" style={{ borderColor: colors.accent }}>
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
              className="text-sm sm:text-base font-semibold uppercase tracking-wider animate-pulse-text"
              style={{ color: colors.accent }}
            >
              {hero.eyebrow}
            </p>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {hero.headline}
            </h1>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed">{hero.subline}</p>

            <div className="mt-2 flex flex-col sm:flex-row sm:items-center gap-4">
              <Cta />
              {/* Social proof badge. Wording lives in content.ts, not in a Senja setting. */}
              <div className="flex items-center gap-3">
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
                  <p className="text-xs text-white/70">{hero.badge.caption}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full">
            <div
              className="w-full aspect-video rounded-2xl overflow-hidden border-4 animate-pulse-border"
              style={{ borderColor: colors.accent }}
            >
              {/* Muted autoplay so the page answers "what is this" without a click. */}
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
            <p className="mt-2 text-center text-xs text-white/50">Click for sound</p>
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white text-center">
            {problem.heading}
          </h2>

          {/* StoryOS format: plain "you" statements, one per line, no cards. */}
          <div className="w-full max-w-3xl space-y-5">
            {problem.lines.map((line) => (
              <p
                key={line.slice(0, 24)}
                className="text-lg sm:text-xl text-white/90 leading-relaxed"
              >
                {line}
              </p>
            ))}
          </div>

          <p
            className="max-w-3xl text-white text-lg sm:text-xl lg:text-2xl leading-relaxed border-l-4 pl-5 sm:pl-6 text-left"
            style={{ borderColor: colors.accent }}
          >
            {problem.closingLine}
          </p>

          <p className="max-w-3xl text-white/80 text-base sm:text-lg leading-relaxed text-left">
            {problem.bridge}
          </p>
        </div>
      </section>

      {/* ===== 2b. THE MIRROR (second half of the problem beat) ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className={WRAP}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 sm:mb-10">
            {mirror.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mirror.quotes.map((q) => (
              <blockquote
                key={q.slice(0, 24)}
                className="border-l-4 pl-5 text-white/90 text-base sm:text-lg leading-relaxed italic"
                style={{ borderColor: colors.accent }}
              >
                {q}
              </blockquote>
            ))}
          </div>
          <p className="mt-10 text-white text-lg sm:text-xl leading-relaxed max-w-3xl">
            {mirror.close}
          </p>
        </div>
      </section>

      {/* ===== 3. THE ONE CHANGE (origin story) ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className={WRAP}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8 max-w-3xl">
            {origin.heading}
          </h2>
          <div className="space-y-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
            {origin.published.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <div className="mt-8 space-y-5 text-white text-base sm:text-lg leading-relaxed max-w-3xl">
            {origin.landing.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 4. THE REFRAME (villain) ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.section }}>
        <div className={WRAP}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
            {villain.heading}
          </h2>
          <p className="mb-8 text-lg font-semibold" style={{ color: colors.accent }}>
            {villain.subheading}
          </p>

          <div className="space-y-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
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
            className="mt-10 max-w-3xl text-white text-lg sm:text-xl lg:text-2xl leading-relaxed border-l-4 pl-5 sm:pl-6 font-medium"
            style={{ borderColor: colors.accent }}
          >
            {villain.villainSentence}
          </p>

          <div className="mt-10 space-y-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
            {villain.scoreboard.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>

          <p className="mt-10 max-w-3xl text-white text-lg sm:text-xl leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">
            {howItWorks.heading}
          </h2>
          <p className="text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
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
                <h3 className="mt-3 text-lg sm:text-xl font-bold text-white leading-snug">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/70 text-sm sm:text-base leading-relaxed">
                  {step.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 space-y-5 text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            {possible.heading}
          </h2>
          <p className="text-white/80 text-base sm:text-lg mb-8">{possible.intro}</p>
          <ul className="space-y-4 max-w-3xl">
            {possible.items.map((item) => (
              <li key={item.slice(0, 24)} className="flex gap-3 text-white/90 text-base sm:text-lg leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 max-w-3xl">
            {objections.heading}
          </h2>
          <p className="mb-10 text-white/80 text-base sm:text-lg max-w-3xl">{objections.intro}</p>

          <div className="space-y-10">
            {objections.items.map((item, i) => (
              <div key={item.objection}>
                <p
                  className="text-xs sm:text-sm font-semibold tracking-widest mb-2"
                  style={{ color: colors.accent }}
                >
                  {String(i + 1).padStart(2, '0')} &middot; {item.label}
                </p>
                <h3 className="text-xl sm:text-2xl font-bold text-white">{item.result}</h3>
                <p className="mt-3 text-white/60 text-base italic">
                  &ldquo;{item.objection}&rdquo;
                </p>
                <p className="mt-3 text-white/85 text-base sm:text-lg leading-relaxed max-w-3xl">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div
            className="mt-12 rounded-2xl border-4 p-6 sm:p-8 animate-pulse-border"
            style={{ borderColor: colors.accent, backgroundColor: colors.section }}
          >
            <h3 className="text-xl sm:text-2xl font-bold text-white">{objections.included.title}</h3>
            <p className="mt-3 text-white/85 text-base sm:text-lg leading-relaxed">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
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
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
            {forYou.heading}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-2xl p-6 sm:p-8" style={{ backgroundColor: colors.card }}>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">{forYou.forHeading}</h3>
              <ul className="space-y-3">
                {forYou.forItems.map((item) => (
                  <li key={item} className="flex gap-3 text-white/85 text-base leading-relaxed">
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
                  <li key={item} className="flex gap-3 text-white/70 text-base leading-relaxed">
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
                <li key={item.slice(0, 24)} className="flex gap-3 text-white/85 text-base leading-relaxed">
                  <span style={{ color: colors.accent }}>&#8594;</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 text-white/70 text-base sm:text-lg leading-relaxed max-w-3xl">
            {forYou.note}
          </p>

          <div className="mt-10">
            <Cta />
          </div>
        </div>
      </section>

      {/* ===== ABOUT GRANT ===== */}
      <section className={SECTION} style={{ backgroundColor: colors.card }}>
        <div className="max-w-3xl mx-auto space-y-6 text-base sm:text-lg leading-relaxed text-white/85">
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
          <p className="text-2xl sm:text-3xl font-semibold text-white text-center">
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-10">
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
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-8">
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
