'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import React from 'react';

// Circle paywall checkout — presents both prices and the 7-day trial.
const CIRCLE_CHECKOUT_URL = 'https://wingmates.fly100.co/checkout/wingmates-new';

export interface PricingTierFrequency {
  id: string;
  value: string;
  label: string;
  priceSuffix: string;
}

export interface PricingTier {
  name: string;
  id: string;
  href: string;
  discountPrice: string | Record<string, string>;
  price: string | Record<string, string>;
  description: string | React.ReactNode;
  features: Array<string | React.ReactNode>;
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

const plan: PricingTier = {
  name: 'Wingmates',
  id: '0',
  href: '/subscribe',
  price: '',
  discountPrice: '$150',
  description: "An ongoing coaching room for XC pilots who want consistent growth and confidence in the air.",
  features: [
    <>
      <strong>The Debrief:</strong> Send a launch, a landing, a thermal climb, or a tracklog from a
      flight you can&apos;t explain. Grant reviews it and tells you what he saw.
    </>,
    <>
      <strong>A one to one call with Grant:</strong> Available to you inside the community, on
      whatever is actually holding you back in the air.
    </>,
    <>
      <strong>The Way of Fear:</strong> The work Grant does with pilots on launch anxiety, on
      committing when the air changes, and on what your body does before you have decided anything.
      Yours the day you join.
    </>,
    <>
      <strong>The crew:</strong> 30 pilots across 14 countries. Members organise their own flights,
      meetups and XC days with people at the same stage.
    </>,
    <>
      <strong>A direct line to Grant:</strong> DMs, not a help desk.
    </>,
  ],
  featured: true,
  highlighted: false,
  soldOut: false,
  cta: 'Join Wingmates',
};

const CheckIcon = ({ className }: { className?: string }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={`w-6 h-6 ${className}`}
    >
      <path
        fillRule="evenodd"
        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export default function PricingWingmates() {
  return (
    <section
      className="bg-background text-foreground overflow-hidden"
      id="pricing" // Add id for navigation
    >
      <div className="container mx-auto pt-12 pb-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-10 sm:mb-16 max-w-3xl">
          <Badge variant="secondary" className="mb-8">
            Pricing
          </Badge>
          <h2 className="font-bold text-3xl lg:text-4xl tracking-tight">
            Join <i>Wingmates</i>.
          </h2>
        </div>

        <div className="flex flex-wrap xl:flex-nowrap items-center bg-white dark:bg-gray-900/80 backdrop-blur-md mx-auto mt-4 max-w-2xl rounded-3xl ring-1 ring-[#3B82F6] xl:mx-0 xl:flex xl:max-w-none">
          <div className="p-8 sm:p-10 xl:flex-auto">
            <h3 className="text-black dark:text-white text-2xl font-bold tracking-tight">
              {plan.name}
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-700 dark:text-gray-400">
              {plan.description}
            </p>
            <div className="mt-12 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-black dark:text-white">
                Included features
              </h4>
              <div className="h-px flex-auto bg-gray-100 dark:bg-gray-700" />
            </div>

            <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-100">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-x-3 text-sm">
                  <CheckIcon
                    className="h-6 w-6 flex-none text-blue-500 mt-0.5"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="-mt-2 p-2 xl:pr-8 xl:mt-0 w-full xl:max-w-md xl:flex-shrink-0">
            <div
              className={cn(
                'rounded-2xl py-10 text-center ring-1 ring-inset ring-gray-300/50 dark:ring-gray-800/50 xl:flex xl:flex-col xl:justify-center xl:py-16'
              )}
            >
              <div className="mx-auto max-w-xs px-8">
                {/* Primary price — quarterly */}
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight text-black dark:text-white">
                    $150
                  </span>
                  <span className="text-xl md:text-2xl font-semibold leading-6 tracking-wide text-gray-700 dark:text-gray-400">
                    /quarter
                  </span>
                </p>

                {/* One price only — Grant 2026-09-30: "we will only have 150 per quarter on page" */}
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  One price. No upsell.
                </p>

                {/* Single CTA — Circle paywall handles price selection + trial */}
                <a
                  href={CIRCLE_CHECKOUT_URL}
                  className="mt-8 block w-full rounded-lg bg-[#3B82F6] px-4 py-3 text-center text-base font-semibold text-white shadow-sm transition-colors hover:bg-[#2563EB] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3B82F6]"
                >
                  {plan.cta}
                </a>

                {/* Trial + cancellation — plain fact, paired */}
                <p className="mt-4 text-xs leading-5 text-gray-500 dark:text-gray-400">
                  Cancel anytime. You keep access to the end of the quarter you have paid for.
                </p>

                <figure className="mt-6 border-l-2 border-[#3B82F6]/50 pl-4 text-left">
                  <blockquote className="text-sm italic leading-relaxed text-gray-600 dark:text-gray-300">
                    &ldquo;It&apos;s only been a month and seen a real change&hellip; Open up
                    to the program and it delivers.&rdquo;
                  </blockquote>
                  <figcaption className="mt-2 text-xs font-medium not-italic text-gray-500 dark:text-gray-400">
                    &mdash; Mark Limb
                  </figcaption>
                  <div
                    className="mt-1.5 flex items-center gap-0.5"
                    role="img"
                    aria-label="5 out of 5 stars"
                  >
                    {[0, 1, 2, 3, 4].map((i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#FBBF24"
                        aria-hidden="true"
                        className="w-3.5 h-3.5"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                      </svg>
                    ))}
                  </div>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
