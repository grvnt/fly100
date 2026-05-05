type RecognitionCard = {
  label: string;
  recognition: string;
  outcome: string;
};

const cards: ReadonlyArray<RecognitionCard> = [
  {
    label: 'The plateau',
    recognition: "You know what your best flying feels like. You just can't find your way back to it.",
    outcome: 'Get back there. And stay there.',
  },
  {
    label: 'The confidence',
    recognition: "You have the skills. You've had the lessons. The confidence still isn't there.",
    outcome: 'Trust your judgment when it counts.',
  },
  {
    label: 'The numbers',
    recognition: 'The flying that used to feel like freedom now feels like a performance review.',
    outcome: 'Fly free of the scoreboard.',
  },
];

type RecognitionCardsProps = {
  /**
   * Optional eyebrow shown above the cards. Defaults to the standard prompt.
   * Pass `null` to render the section without it.
   */
  eyebrow?: string | null;
};

const RecognitionCards = ({ eyebrow = 'Does this sound familiar?' }: RecognitionCardsProps) => {
  return (
    <section className="bg-base-200 px-4 sm:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-12 items-center text-center">
        {eyebrow ? (
          <p className="text-base font-semibold uppercase tracking-wider text-[#3B82F6] animate-pulse-text">
            {eyebrow}
          </p>
        ) : null}

        {/* Three mirrors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">
          {cards.map((card) => (
            <article
              key={card.label}
              className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left border-4 border-transparent transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer flex flex-col"
            >
              {/* Label — small caps, muted */}
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
                {card.label}
              </p>

              {/* Recognition — what they're experiencing now */}
              <p className="text-base sm:text-lg text-white leading-relaxed mb-6">
                {card.recognition}
              </p>

              {/* Subtle separator */}
              <div className="h-px w-12 bg-[#3B82F6]/40 mb-4" aria-hidden="true" />

              {/* Outcome — the other side */}
              <p className="text-base sm:text-lg text-[#3B82F6] font-semibold leading-snug mt-auto">
                {card.outcome}
              </p>
            </article>
          ))}
        </div>

        {/* Closing line — load-bearing, give it weight */}
        <p className="max-w-3xl mx-auto mt-6 sm:mt-10 text-white text-lg sm:text-xl lg:text-2xl leading-relaxed border-l-4 border-[#3B82F6] pl-5 sm:pl-6 text-left">
          None of these are skill problems. They are interference problems. And interference can be
          removed.
        </p>
      </div>
    </section>
  );
};

export default RecognitionCards;
