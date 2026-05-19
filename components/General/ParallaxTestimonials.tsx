'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ParallaxTestimonials() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%'])

  return (
    <div ref={ref} className="relative overflow-hidden py-20 sm:py-28">
      <motion.div
        className="absolute bg-cover bg-center"
        style={{
          y,
          backgroundImage: 'url(/wingmates-hero.png)',
          top: '-20%',
          left: '-20%',
          right: '-20%',
          bottom: '-20%',
        }}
      />
      <div className="absolute inset-0 bg-black/65" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 grid grid-cols-1 gap-6">
        <blockquote className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[#3B82F6] flex flex-col justify-between">
          <p className="text-white text-lg leading-relaxed mb-6">
            &ldquo;This has become more than just a flight skill — it&apos;s a way of being. I feel
            a pervasive sense of calm and a significant reduction in mental noise. I&apos;ve
            developed a new relationship with fear and anxiety, recognising them not as stop signs,
            but as energy to be transformed and utilised.&rdquo;
          </p>
          <p className="text-[#3B82F6] font-semibold text-base">— Alex, UK · Wingmates Member</p>
        </blockquote>
        <blockquote className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[#3B82F6] flex flex-col justify-between">
          <p className="text-white text-lg leading-relaxed mb-6">
            &ldquo;Working with you has changed my flying, especially dealing with the fear. I
            breathe, recognise it and now use it to my advantage.&rdquo;
          </p>
          <p className="text-[#3B82F6] font-semibold text-base">— Kurt Bester · Coaching Client</p>
        </blockquote>
        <blockquote className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border-l-4 border-[#3B82F6] flex flex-col justify-between">
          <p className="text-white text-lg leading-relaxed mb-6">
            &ldquo;Fear in this sport is something we need to be talking about more.&rdquo;
          </p>
          <p className="text-[#3B82F6] font-semibold text-base">— @sebass156 · YouTube</p>
        </blockquote>
      </div>
    </div>
  )
}
