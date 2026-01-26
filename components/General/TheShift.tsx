import { ArrowRight } from 'lucide-react';
import { H2 } from '../ui/typography';

const TheShift = () => {
  return (
    <section className="bg-black px-4 sm:px-8 pt-6 sm:pt-8 lg:pt-10 pb-12 sm:pb-16 lg:pb-20">
      <div className="max-w-7xl mx-auto">
        {/* Two Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative">
          {/* Left Column - The Number Trap */}
          <div className="relative bg-[#0a0f1a] rounded-2xl p-6 sm:p-8 border-2 border-gray-800/50">
            {/* Noise Texture Overlay */}
            <div
              className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.4'/%3E%3C/svg%3E")`,
              }}
            />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-400 mb-6">The Number Trap</h3>

              <div className="space-y-4 text-white/80">
                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Goal:</p>
                  <p className="text-lg">Climbing a leaderboard</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Driver:</p>
                  <p className="text-lg">Anxiety & Comparison</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">Result:</p>
                  <p className="text-lg">Plateaus & Burnout</p>
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <p className="text-sm uppercase tracking-wider text-gray-500 mb-1">End State:</p>
                  <p className="text-xl font-semibold italic text-gray-300">
                    &quot;I have a high score.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Comparison Arrow - Desktop Only */}
          <div className="hidden lg:flex items-center justify-center absolute left-1/2 transform -translate-x-1/2 z-20">
            <div className="bg-black rounded-full p-3 border-2 border-[#3B82F6]">
              <ArrowRight className="w-6 h-6 text-[#3B82F6]" />
            </div>
          </div>

          {/* Right Column - The Flow Pilot */}
          <div className="relative bg-[#0a1520] rounded-2xl p-6 sm:p-8 border-2 border-[#3B82F6] animate-pulse-border">
            {/* Glow/Blur Effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-transparent blur-xl pointer-events-none" />
            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-[#3B82F6] via-[#60a5fa] to-[#3B82F6] opacity-20 blur-sm pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-[#3B82F6] mb-6">The Flow Pilot</h3>

              <div className="space-y-4 text-white">
                <div>
                  <p className="text-sm uppercase tracking-wider text-[#60a5fa] mb-1">Goal:</p>
                  <p className="text-lg">Finding the &quot;Silent Mind&quot;</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-[#60a5fa] mb-1">Driver:</p>
                  <p className="text-lg">Adventure & Self-Expression</p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wider text-[#60a5fa] mb-1">Result:</p>
                  <p className="text-lg">Mastery & Breakthroughs</p>
                </div>

                <div className="pt-4 border-t border-[#3B82F6]/30">
                  <p className="text-sm uppercase tracking-wider text-[#60a5fa] mb-1">End State:</p>
                  <p className="text-xl font-semibold italic text-[#60a5fa]">
                    &quot;I am free.&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheShift;
