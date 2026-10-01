import React from 'react';
import Image from 'next/image';

/**
 * Paul Guschlbauer testimonial. Rendered inside the deep-navy band on /wingmates.
 * Presented as a quiet quote card: portrait on the left, attribution + quote right.
 * No background stripe, no rounded fill — the containing dark section provides the frame.
 */
const TestimonialMerakai = () => {
  return (
    <figure className="max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10">
      <Image
        className="h-24 w-24 sm:h-40 sm:w-40 rounded-full object-cover ring-1 ring-white/15 shrink-0"
        src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/testimonials/paul-guschlbauer.jpg?t=2024-10-10T08%3A31%3A06.719Z"
        alt="Paul Guschlbauer XAlps Paragliding Pilot"
        width={224}
        height={224}
      />

      <div className="flex-1">
        <blockquote className="text-white text-[20px] sm:text-[24px] leading-[1.35] font-light tracking-[-0.01em]">
          &ldquo;Grant understands that paragliding is won in the mind, not with
          gear. He&apos;s doing great things for the paragliding community by
          bringing the science of flow to the forefront with Wingmates.&rdquo;
        </blockquote>
        <figcaption className="mt-5 text-[14px]">
          <span className="font-medium text-white">Paul Guschlbauer</span>
          <span className="block mt-1 text-white/60">
            Skywalk Team Pilot &middot; 4x Red Bull X-Alps Podium Finisher
          </span>
        </figcaption>
      </div>
    </figure>
  );
};

export default TestimonialMerakai;
