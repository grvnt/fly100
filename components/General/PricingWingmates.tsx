'use client';

import React from 'react';

// Circle paywall checkout — presents both prices and the 7-day trial.
const CIRCLE_CHECKOUT_URL = 'https://wingmates.fly100.co/checkout/wingmates-new';

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  price: string;
  description: string;
  features: Array<React.ReactNode>;
  cta: string;
}

const plan: PricingTier = {
  name: 'Wingmates',
  id: '0',
  href: '/subscribe',
  price: '$150',
  description:
    'An ongoing coaching room for XC pilots who want consistent growth and confidence in the air.',
  features: [
    <>
      <strong className="font-medium text-white">The Debrief:</strong> Send a
      launch, a landing, a thermal climb, or a tracklog from a flight you
      can&apos;t explain. Grant reviews it and tells you what he saw.
    </>,
    <>
      <strong className="font-medium text-white">A one to one call with Grant:</strong>{' '}
      Available to you inside the community, on whatever is actually holding
      you back in the air.
    </>,
    <>
      <strong className="font-medium text-white">The Way of Fear:</strong> The
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

const CheckIcon = ({ className = '' }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="none"
    className={`w-4 h-4 ${className}`}
    aria-hidden="true"
  >
    <path
      d="M4 10.5L8 14.5L16 6"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const StarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#f5a524"
    aria-hidden="true"
    className="w-3.5 h-3.5"
  >
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

export default function PricingWingmates() {
  return (
    <section
      id="pricing"
      className="px-5 sm:px-8 py-16 sm:py-20 lg:py-24 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <div className="max-w-3xl mb-12 text-center mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2563C] mb-4">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-normal tracking-[-0.018em] leading-[1.1] text-[#102A3F]">
            Join <span className="italic">Wingmates</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-4 lg:gap-6 max-w-5xl mx-auto">
          {/* Left: features on light card */}
          <div className="rounded-xl bg-white border border-[#E3DED6] p-8 sm:p-10">
            <h3 className="text-[22px] font-normal tracking-[-0.01em] text-[#102A3F]">
              {plan.name}
            </h3>
            <p className="mt-4 text-[16px] leading-[1.55] text-[#3D5467]">
              {plan.description}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <h4 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#C2563C]">
                Included
              </h4>
              <div className="h-px flex-auto bg-[#E3DED6]" />
            </div>

            <ul className="mt-6 space-y-4">
              {plan.features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-[15px] leading-[1.55] text-[#3D5467]"
                >
                  <span className="mt-[3px] flex items-center justify-center w-5 h-5 rounded-full bg-[#F6E3DC] text-[#C2563C] shrink-0">
                    <CheckIcon />
                  </span>
                  <span className="[&_strong]:font-medium [&_strong]:text-[#102A3F]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: featured price tier — deep navy per DESIGN.md card-pricing-featured */}
          <div
            className="rounded-xl p-8 sm:p-10 flex flex-col justify-center"
            style={{ backgroundColor: '#102A3F' }}
          >
            <div className="max-w-xs mx-auto text-center">
              <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#E8A48C]">
                Membership
              </p>
              <p className="mt-6 flex items-baseline justify-center gap-x-2">
                <span
                  className="text-[56px] font-normal tracking-[-0.03em] leading-[1] text-white tabular-nums"
                  style={{ fontFeatureSettings: '"tnum"' }}
                >
                  $150
                </span>
                <span className="text-[16px] font-normal text-white/70">
                  /quarter
                </span>
              </p>

              <p className="mt-3 text-[13px] text-white/60">
                One price. No upsell.
              </p>

              <a
                href={CIRCLE_CHECKOUT_URL}
                className="mt-8 block w-full rounded-full bg-[#C2563C] hover:bg-[#A8462F] px-4 py-3 text-center text-[15px] font-medium text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#102A3F]"
              >
                {plan.cta}
              </a>

              <p className="mt-4 text-[12px] leading-[1.5] text-white/60">
                Cancel anytime. You keep access to the end of the quarter you
                have paid for.
              </p>

              <figure className="mt-8 pt-6 border-t border-white/10 text-left">
                <div
                  className="mb-2 flex items-center gap-0.5"
                  role="img"
                  aria-label="5 out of 5 stars"
                >
                  {[0, 1, 2, 3, 4].map((i) => (
                    <StarIcon key={i} />
                  ))}
                </div>
                <blockquote className="text-[14px] italic leading-[1.5] text-white/85">
                  &ldquo;It&apos;s only been a month and seen a real change&hellip;
                  Open up to the program and it delivers.&rdquo;
                </blockquote>
                <figcaption className="mt-2 text-[12px] text-white/60 not-italic">
                  &mdash; Mark Limb
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
