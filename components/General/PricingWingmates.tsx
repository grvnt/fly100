'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import Link from "next/link";

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
  name: "Wingmates",
  id: '0',
  href: '/subscribe',
  price: { '1': '$99', '2': '$330' },
  discountPrice: { '1': '', '2': '' },
  description: "The online community for paragliders going from zero to XC Jedi.",
  features: [
    "Feature A",
    "Feature B",
    "Feature C",
  ],
  featured: true,
  highlighted: false,
  soldOut: false,
  cta: "Join Waitlist",
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

const PricingWingmates = () => {
  const [frequency, setFrequency] = useState(frequencies[0]);

  return (
    <section
      className="bg-background text-foreground overflow-hidden"
      id="pricing"
    >
      <div className="container mx-auto py-24 px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center mb-20 max-w-3xl">
          <Badge variant="secondary" className="mb-8">
            Pricing
          </Badge>
          <h2 className="font-bold text-3xl lg:text-4xl tracking-tight">
            Get the mentorship and peer support you need to become a 100km XC pilot
          </h2>
        </div>

        {frequencies.length > 1 && (
          <div className="mt-16 flex justify-center">
            <RadioGroup
              defaultValue={frequency.value}
              onValueChange={(value: string) => {
                setFrequency(frequencies.find((f) => f.value === value)!);
              }}
              className="grid gap-x-1 rounded-full p-1 text-center text-xs font-semibold leading-5 bg-white dark:bg-black ring-1 ring-inset ring-gray-200/30 dark:ring-gray-800"
              style={{
                gridTemplateColumns: `repeat(${frequencies.length}, minmax(0, 1fr))`,
              }}
            >
              <Label className="sr-only">Payment frequency</Label>
              {frequencies.map((option) => (
                <Label
                  className={`cursor-pointer rounded-full px-2.5 py-2 transition-all ${
                    frequency.value === option.value
                      ? 'bg-blue-500/90 text-white dark:bg-blue-900/70 dark:text-white/70'
                      : 'bg-transparent text-gray-500 hover:bg-blue-500/10'
                  }`}
                  key={option.value}
                  htmlFor={option.value}
                >
                  {option.label}

                  <RadioGroupItem
                    value={option.value}
                    id={option.value}
                    className="hidden"
                  />
                </Label>
              ))}
            </RadioGroup>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 w-full max-w-2xl mt-8">
          <Card
            className={`flex flex-col ${
              plan.featured ? "border-primary" : ""
            } relative h-full text-center`}
          >
            {plan.featured && (
              <Badge className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Best Value
              </Badge>
            )}
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
              {plan.description && (
                <CardDescription>{plan.description}</CardDescription>
              )}
            </CardHeader>
            <CardContent className="flex-grow flex flex-col">
              <div className="flex items-baseline mb-4 justify-center">
                <span className="text-5xl font-extrabold tracking-tight">
                  {typeof plan.price === 'string'
                    ? plan.price
                    : plan.price[frequency.value]}
                </span>
                <span className="ml-1 text-sm font-medium text-muted-foreground">
                  {frequency.priceSuffix}
                </span>
              </div>
              {plan.features && (
                <ul className="space-y-2.5 leading-relaxed text-base mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 justify-center">
                      <CheckIcon
                        className="w-[18px] h-[18px] text-primary shrink-0"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              )}
              <div className="mt-auto">
                <Button 
                  className="w-full" 
                  asChild
                >
                  <Link href="#waitlist"> {/* Empty link for now */}
                    {plan.cta}
                  </Link>
                </Button>
                <p className="mt-4 text-sm text-center text-muted-foreground">
                  Coming Soon
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingWingmates;