'use client';

import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import React from 'react';
import SenjaEmbed from './SenjaEmbed';

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
  features: string[];
  featured?: boolean;
  highlighted?: boolean;
  cta: string;
  soldOut?: boolean;
}

const plan: PricingTier = {
  name: 'Start Your Evolution',
  id: '0',
  href: '/subscribe',
  price: '',
  discountPrice: '$150',
  description: "The world's first flow-driven paragliding community.",
  features: [
    'Continuous Community Support',
    'Live Events & Workshops',
    'Connect with Pilots Worldwide',
    'Share Flights, Debriefs & Stories',
    'Accelerate Peer to Peer Learning',
  ],
  featured: true,
  highlighted: false,
  soldOut: false,
  cta: 'Apply Now',
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
        <div className="text-center mb-20 max-w-3xl">
          <Badge variant="secondary" className="mb-8">
            Pricing
          </Badge>
          <h2 className="font-bold text-3xl lg:text-4xl tracking-tight">
            Join <i>Wingmates</i> today.
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

            <ul className="mt-10 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-700 dark:text-gray-400">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-x-2 text-sm">
                  <CheckIcon className="h-6 w-6 flex-none text-blue-500" aria-hidden="true" />
                  {feature}
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
                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                  <span className="text-7xl md:text-8xl font-bold tracking-tight text-black dark:text-white">
                    $150
                  </span>
                  <span className="text-xl md:text-2xl font-semibold leading-6 tracking-wide text-gray-700 dark:text-gray-400">
                    /quarter
                  </span>
                </p>
                <div className="flex justify-center mt-8 flex-shrink-0">
                  <a
                    href="https://wingmates.fly100.co/checkout/wingmates"
                    className="btn animate-gradient btn-wide"
                    style={{
                      background: 'linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab)',
                      backgroundSize: '400% 400%',
                      animation: 'gradient 10s ease infinite',
                      border: 'none',
                      color: 'white',
                      padding: '15px 32px',
                      textAlign: 'center',
                      textDecoration: 'none',
                      display: 'inline-block',
                      fontSize: '16px',
                      margin: '4px 2px',
                      cursor: 'pointer',
                      borderRadius: '4px',
                    }}
                  >
                    Join Wingmates
                  </a>
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-700 dark:text-gray-400">
                  Cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
