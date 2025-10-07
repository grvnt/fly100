'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import ButtonGradient from './ButtonGradient'; // Import ButtonGradient component
import React from 'react';

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

const frequencies: PricingTierFrequency[] = [
  { id: '1', value: '1', label: 'Quarterly', priceSuffix: '/quarter' },
  { id: '2', value: '2', label: 'Annually', priceSuffix: '/year' },
];

const plan: PricingTier = {
  name: 'Wingmates',
  id: '0',
  href: '/subscribe',
  price: { '1': '$99', '2': '$330' },
  discountPrice: { '1': '', '2': '' },
  description: "The world's flow-driven paragliding community.",
  features: [
    'Unlimited Support',
    'Learn through Live Events & Workshops',
    'Connect with paragliders from all over the world',
    'Share progress, stories, tips & photos',
    'Supercharge your progress with peer to peer learning',
  ],
  featured: true,
  highlighted: false,
  soldOut: false,
  cta: 'Join Waitlist',
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
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <section
      className="bg-background text-foreground overflow-hidden"
      id="pricing" // Add id for navigation
    >
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-20 max-w-3xl">
          <Badge variant="secondary" className="mb-8">
            Pricing
          </Badge>
          <h2 className="font-bold text-3xl lg:text-4xl tracking-tight">
            Get the mentorship and peer support you need
          </h2>
        </div>

        {frequencies.length > 1 && (
          <div className="mt-16 flex justify-center">
            <RadioGroup
              defaultValue={frequency.value}
              onValueChange={(value: string) => {
                setFrequency(frequencies.find(f => f.value === value)!);
              }}
              className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
              style={{
                gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
              }}
            >
              <Label className="sr-only">Payment frequency</Label>
              {frequencies.map(option => (
                <Label
                  className={cn(
                    frequency.value === option.value
                      ? 'bg-blue-500/90 text-white dark:bg-blue-700 dark:text-white'
                      : 'bg-transparent text-gray-500 hover:bg-blue-500/10',
                    'cursor-pointer rounded-full px-2.5 py-2 transition-all'
                  )}
                  key={option.value}
                  htmlFor={option.value}
                >
                  {option.label}

                  <RadioGroupItem value={option.value} id={option.value} className="hidden" />
                </Label>
              ))}
            </RadioGroup>
          </div>
        )}

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
                  <span
                    className={cn(
                      'text-5xl font-bold tracking-tight text-black dark:text-white',
                      plan.discountPrice &&
                        plan.discountPrice[frequency.value as keyof typeof plan.discountPrice]
                        ? 'line-through'
                        : ''
                    )}
                  >
                    {typeof plan.price === 'string' ? plan.price : plan.price[frequency.value]}
                  </span>

                  <span>
                    {typeof plan.discountPrice === 'string'
                      ? plan.discountPrice
                      : plan.discountPrice[frequency.value]}
                  </span>

                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-700 dark:text-gray-400">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <div className="flex justify-center mt-8 flex-shrink-0">
                  <ButtonGradient href="https://forms.gle/Qmhsn7Vs2mk4b3i2A" text={plan.cta} />
                </div>
                <p className="mt-2 text-xs leading-5 text-gray-700 dark:text-gray-400">
                  Apply to be part of the pre-launch private opening. Limited Spots Available.
                  Lowest Price for a Limited Time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
