import ButtonGradient from './ButtonGradient';

type Module = {
  readonly number: string;
  readonly title: string;
  readonly description: string;
};

const modules: ReadonlyArray<Module> = [
  {
    number: '01',
    title: 'Understanding Your Fear Relationship',
    description:
      'Fear, anxiety, and excitement are the same physiological arousal — interpreted differently. Learn to tell them apart and use what your body is already giving you.',
  },
  {
    number: '02',
    title: 'Flow States & Fear',
    description:
      'Fear is not the opposite of flow — it\'s the boundary of it. Map your patterns, understand what\'s driving them, and use fear as the entry point.',
  },
  {
    number: '03',
    title: 'The 7-Step Protocol',
    description:
      'Five steps in the air, two on the ground. A field-tested process for noticing, assessing, and responding — so you stay in the air with clarity instead of shutting down.',
  },
  {
    number: '04',
    title: 'The CCC Protocol',
    description:
      'A three-step compressed tool for the moment fear peaks. Simple enough to run in a few breaths, precise enough to change the outcome.',
  },
];

const WayOfFear = () => {
  return (
    <section
      aria-labelledby="way-of-fear-heading"
      className="bg-base-200 px-4 sm:px-8 py-12 sm:py-16 lg:py-20"
    >
      <div className="max-w-7xl mx-auto">
        {/* Featured course card */}
        <div className="rounded-2xl border-4 border-[#3B82F6] animate-pulse-border bg-[#07122d] p-6 sm:p-10 lg:p-14">
          {/* Header: eyebrow + headline + subhead */}
          <div className="flex flex-col items-center text-center gap-4 sm:gap-6 max-w-3xl mx-auto">
            <p className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#3B82F6] animate-pulse-text">
              Included with Wingmates
            </p>

            <h2
              id="way-of-fear-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight"
            >
              The Way of Fear
            </h2>

            <p className="text-base sm:text-lg lg:text-xl text-white/80 leading-relaxed">
              The course the paragliding world doesn&apos;t offer yet. Four modules
              built around a 7-step fear protocol, flow science, and the practical
              experience of working with pilots who&apos;ve been exactly where you are.
            </p>

            <p className="text-sm sm:text-base text-white/60">
              Included with your membership
              <span className="mx-2 text-white/30" aria-hidden="true">
                ·
              </span>
              <span className="text-white">$197 value</span>
            </p>
          </div>

          {/* Modules */}
          <ol className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-3xl mx-auto">
            {modules.map((module) => (
              <li
                key={module.number}
                className="bg-base-200 rounded-2xl p-6 sm:p-7 border border-white/10 transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] flex flex-col"
              >
                <span
                  aria-hidden="true"
                  className="text-xs sm:text-sm font-semibold tracking-widest text-[#3B82F6] mb-3"
                >
                  {module.number}
                </span>
                <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug mb-2">
                  {module.title}
                </h3>
                <p className="text-sm sm:text-base text-white/70 leading-relaxed">
                  {module.description}
                </p>
              </li>
            ))}
          </ol>

          {/* CTA */}
          <div className="mt-10 sm:mt-14 flex flex-col items-center gap-3">
            <ButtonGradient
              href="/wingmates/#pricing"
              text="Join Wingmates to access"
              className="btn-wide"
            />
            <p className="text-xs sm:text-sm text-white/50">
              Access the full course inside Wingmates the moment you join.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WayOfFear;
