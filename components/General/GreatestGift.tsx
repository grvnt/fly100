// ARCHIVED — removed from wingmates/page.tsx 2026-05-05
// Reason: recovery/redemption arc doesn't match the performance/excellence register
// we're moving toward. Keep for reference — rewrite as a mastery arc before reinstating.
// See: 00 Business Soul/flow-is-freedom-manifesto.md for context.

import { H2 } from '@/components/ui/typography';

const GreatestGift = () => {
  return (
    <section className="bg-base-200 px-4 sm:px-8 py-12 sm:py-16 lg:py-24">
      <div className="max-w-5xl mx-auto text-center mb-10 sm:mb-14">
        <p className="text-base sm:text-lg font-semibold uppercase tracking-wider text-[#3B82F6] animate-pulse-text">
          THE GREATEST GIFT
        </p>
        <H2 className="text-white mt-4">
          All Achievement is Meaningless
          <br />
          Without This
        </H2>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
        {/* Quote */}
        <blockquote className="max-w-3xl mx-auto text-white/80 text-base sm:text-lg italic border-l-4 border-[#3B82F6] pl-4 sm:pl-6">
          "Achievement is something you reach or attain, like a goal. It is perishable. Success,
          however, is a feeling or a state of being. It is the result of why you do what you
          do." — Adapted from Simon Sinek
        </blockquote>

        {/* Profile Image */}
        <div className="flex justify-center">
          <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#3B82F6] animate-pulse-border">
            <img
              src="https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/grant-profile-pgatlas-crop.jpg"
              alt="Grant profile"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="text-white max-w-3xl mx-auto space-y-6 text-base sm:text-lg text-white/90 leading-relaxed text-justify">
          <h3 className="text-2xl sm:text-3xl font-semibold text-center">
            Hey, I&apos;m Grant
          </h3>

          <p>
            Since I was a young boy, I dreamt of flying. I&apos;ll never forget the day I first
            thermaled up to touch a cloud—it was a miracle beyond my wildest dreams. I poured my
            heart and soul into paragliding, often ground handling in tough conditions, flying
            as often as possible, reading paragliding books and studying the weather. I knew
            nothing about XC and had no ambitions or goals other than just getting better at
            flying, but in my first full season I found myself in flow, winning the local XC
            league with six 100km+ flights.
          </p>

          <p>
            I was showered with praise and told my talent was rare. I got invited to fly with
            local legends. I was given guiding work and got the opportunity to work with some of
            my heroes. It was all starting to look like success.
          </p>

          <p>
            Beneath the surface, I was riddled with social anxiety and low self-worth which
            I&apos;d been self-medicating with alcohol and a concoction of substances since high
            school. This attention validated my worth and I felt accepted. I began to identify
            with being &quot;the best&quot; and my fragile ego craved more hits of attention and
            approval.
          </p>

          <p>
            But &quot;winning&quot; is a fast-burning fuel which, like a drug, requires regular
            hits and a dosage increase over time to have the same effect. It relies on the
            fickle opinions of others which no one has any control over. When these opinions
            change there&apos;s nothing left to do but to prove oneself because winning, by its
            very nature, requires losers - and nobody wants to feel like a loser.
          </p>

          <p>
            This is the shallow rollercoaster of achievement - a natural but unsustainable stage
            of human development and a far cry from the reason I started flying in the first
            place.
          </p>

          <h4 className="text-xl sm:text-2xl font-semibold text-white pt-2 text-center">
            The Insight
          </h4>
          <p>
            This all changed on a chilly spring day in Sweden after two years of no flying,
            hundreds of meters above takeoff, I found myself working weak lift for the pure joy
            of the challenge. No plans to go XC. No needing to prove anything. Flying for the
            sake of flying. Time and my sense of self vanished. The self-critic was quiet. I
            felt one with everything. I felt free.
          </p>
          <p>I was in Flow.</p>
          <p>
            The experience was so profound that I took to studying it with the same enthusiasm
            as when I first started flying. And the deeper I went down the rabbit hole the more
            profound it became.
          </p>
          <p>
            Mihaly Csikszentmihalyi, the godfather of Flow, concluded that life is meaningless
            without flow. Flow gives life meaning. Achievement without flow is meaningless.
          </p>

          <h4 className="text-xl sm:text-2xl font-semibold text-white pt-2 text-center">
            The Alchemy of Alignment
          </h4>
          <p>
            I returned to South Africa with nothing to prove, only a desire for personal growth
            and to be a contribution to others. I just wanted to fly and share the gift of
            flight. I shifted from &quot;Me&quot; to &quot;We,&quot; and Wingmates was born.
          </p>
          <p>
            I realised how lopsided my personal development had been, how my shadow had been
            running the show, and when I started to apply these principles to all four quadrants
            of life - mind, body, spirit, and systems - it was clear that the ultimate
            freedom—self-evolution—comes from their alignment.
          </p>
          <p>Flow is the natural byproduct of this alignment.</p>

          <h4 className="text-xl sm:text-2xl font-semibold text-white pt-2 text-center">
            The Result
          </h4>
          <p>
            I applied these principles to my fitness, my social anxiety, and my professional
            life. I launched my YouTube channel and Wingmates, I beat the addiction I
            experienced. I improved my dating and social life, improved my finances, and
            transformed my body.
          </p>

          <p>
            And it all came through the wisdom of paragliding, it came from the superhuman gift
            we all have access to - flow.
          </p>
          <p>
            The path of the Flow Pilot is to align your life with the greatest gift of all:
            Freedom.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GreatestGift;
