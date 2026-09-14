type RecognitionCard = {
  label: string;
  recognition: string;
};

const cards: ReadonlyArray<RecognitionCard> = [
  {
    label: 'The judgement',
    recognition:
      '“I\'m not dealing with immediate fear of something; instead, I understand that high altitude flying in mountains is generally risky, and I\'m trying to find out where is a limit of acceptable risk.”',
  },
  {
    label: 'The noise',
    recognition:
      '“It\'s not like the technique stops working. It\'s rather my mind racing with thoughts driven by fear so I am forgetting to use the technique.”',
  },
  {
    label: 'The audience',
    recognition:
      '“My skills and the conditions were ideal, but still I felt somehow anxious without really knowing what it was about... I was scared about what other people will think of me when I come in too high and have to overfly take off while everyone watches.”',
  },
];

type RecognitionCardsProps = {
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 w-full max-w-6xl mx-auto">
          {cards.map((card) => (
            <article
              key={card.label}
              className="bg-[#07122d] rounded-2xl p-6 sm:p-8 text-left border-4 border-transparent transition-all duration-300 hover:border-[#3B82F6] hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] cursor-pointer flex flex-col"
            >
              <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-white/50 mb-4">
                {card.label}
              </p>
              <p className="text-base sm:text-lg text-white leading-relaxed italic">
                {card.recognition}
              </p>
            </article>
          ))}
        </div>

        <p className="max-w-3xl mx-auto mt-6 sm:mt-10 text-white text-lg sm:text-xl lg:text-2xl leading-relaxed border-l-4 border-[#3B82F6] pl-5 sm:pl-6 text-left">
          None of these are skill problems. They are interference problems. And interference can be
          removed.
        </p>
      </div>
    </section>
  );
};

export default RecognitionCards;
