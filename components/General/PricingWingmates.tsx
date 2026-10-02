'use client';

import React, { useState } from 'react';

/**
 * Circle paywall checkout. Quarterly and annual are the two plans Grant set on
 * 2026-10-01: $149/quarter, or $490/year which saves $106 against four quarters.
 */
const CIRCLE_CHECKOUT_URL = 'https://wingmates.fly100.co/checkout/wingmates-new';

const PLANS = {
  quarterly: { price: '$149', period: '/quarter', note: 'Billed every three months.' },
  annual: {
    price: '$490',
    period: '/year',
    note: 'Billed once a year. Saves $106 against four quarters.',
  },
} as const;

const plan = {
  name: 'Wingmates',
  description:
    'An ongoing coaching room for XC pilots who want consistent growth and confidence in the air.',
  features: [
    <>
      <strong className="font-medium text-white">The Debrief:</strong> Send a
      launch, a landing, a thermal climb, or a tracklog from a flight you
      can&apos;t explain. Grant reviews it and tells you what he saw.
    </>,
    <>
      <strong className="font-medium text-white">A 1:1 call with Grant:</strong>{' '}
      Available to you inside the community, on whatever is actually holding
      you back in the air.
    </>,
    <>
      <strong className="font-medium text-white">The Way of Fear ($97 value):</strong> The
      work Grant does with pilots on launch anxiety, on committing when the air
      changes, and on what your body does before you have decided anything.
      Yours the day you join.
    </>,
    <>
      <strong className="font-medium text-white">The crew:</strong> 30 pilots
      across 14 countries. Members organise their own flights, meetups and XC
      days with people at the same stage.
    </>,
    <>
      <strong className="font-medium text-white">A direct line to Grant:</strong>{' '}
      DMs, not a help desk.
    </>,
  ],
  cta: 'Join Wingmates',
};

export default function PricingWingmates() {
  const [annual, setAnnual] = useState(false);
  const active = annual ? PLANS.annual : PLANS.quarterly;

  return (
    <section id="pricing" className="px-6 sm:px-8 py-20 sm:py-24" style={{ backgroundColor: '#000000' }}>
      <div className="max-w-[62rem] mx-auto">
        <h2 className="font-[family-name:var(--font-display)] text-[1.875rem] sm:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-[-0.03em] leading-[1.12] text-white text-center">
          Join Wingmates
        </h2>
        <p className="mt-5 text-[19px] sm:text-[20px] leading-[1.55] text-[#B4B4B4] text-center max-w-[40rem] mx-auto">
          {plan.description}
        </p>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div
            role="group"
            aria-label="Billing period"
            className="inline-flex rounded-full p-1"
            style={{ backgroundColor: '#16181B' }}
          >
            {[
              { key: 'q', label: 'Quarterly', on: !annual, set: false },
              { key: 'a', label: 'Annual', on: annual, set: true },
            ].map((opt) => (
              <button
                key={opt.key}
                type="button"
                onClick={() => setAnnual(opt.set)}
                aria-pressed={opt.on}
                className={`rounded-full px-5 py-2 text-[14px] font-medium transition-colors ${
                  opt.on ? 'bg-[#0076FF] text-white' : 'text-[#B4B4B4] hover:text-white'
                }`}
              >
                {opt.label}
                {opt.set ? (
                  <span className={opt.on ? 'ml-2 text-white/80' : 'ml-2 text-[#4DA3FF]'}>
                    save $106
                  </span>
                ) : null}
              </button>
            ))}
          </div>
        </div>

        <div
          className="mt-10 grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] rounded-2xl overflow-hidden ring-1 ring-[#0076FF]/30 shadow-[0_0_80px_rgba(0,118,255,0.14)]"
          style={{ backgroundColor: '#16181B' }}
        >
          {/* Features */}
          <div className="p-8 sm:p-10">
            <h3 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[#4DA3FF]">
              What you get
            </h3>
            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex gap-3 text-[16px] leading-[1.6] text-[#B4B4B4]">
                  <span aria-hidden="true" className="mt-0.5 text-[#0076FF]">&#10003;</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Price */}
          <div
            className="p-8 sm:p-10 flex flex-col justify-center text-center"
            style={{ backgroundColor: '#0B0D10' }}
          >
            <p className="flex items-baseline justify-center gap-2">
              <span className="font-[family-name:var(--font-display)] text-[3.25rem] font-semibold tracking-[-0.035em] text-white">
                {active.price}
              </span>
              <span className="text-[18px] text-[#B4B4B4]">{active.period}</span>
            </p>
            <p className="mt-3 text-[14px] text-[#7A7A7A]">{active.note}</p>

            <a
              href={CIRCLE_CHECKOUT_URL}
              className="mt-8 inline-flex items-center justify-center rounded-full bg-[#0076FF] px-7 py-3.5 text-[15px] font-medium text-white transition-all hover:bg-[#006AE6] shadow-[0_0_28px_rgba(0,118,255,0.45)] hover:shadow-[0_0_38px_rgba(0,118,255,0.6)]"
            >
              {plan.cta}
            </a>

            <figure className="mt-8 pt-6 border-t border-white/10 text-left">
              <div
                className="mb-2 flex items-center gap-0.5"
                role="img"
                aria-label="5 out of 5 stars"
              >
                {[0, 1, 2, 3, 4].map((i) => (
                  <span key={i} aria-hidden="true" className="text-[#F5A524] text-[13px]">
                    &#9733;
                  </span>
                ))}
              </div>
              <blockquote className="text-[14px] italic leading-[1.5] text-white/85">
                &ldquo;It&apos;s only been a month and seen a real change&hellip; Open up to
                the program and it delivers.&rdquo;
              </blockquote>
              <figcaption className="mt-2 text-[12px] text-[#7A7A7A] not-italic">
                &mdash; Mark Limb
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
}
