import Image from 'next/image';
import { H2, H3 } from '../ui/typography';

// The Arrow component is defined but not used in this file.
// If it's not used elsewhere, you can safely remove it.
// If it's used in other files, keep it here but export it.
// export const Arrow = ({ extraStyle }: { extraStyle: string }) => {
//   // ... Arrow component code ...
// };

const Problem = () => {
  return (
    <section className="bg-neutral text-neutral-content">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16 md:py-24 text-center">
        <H2 className="mb-6 sm:mb-8">From Short Flights to Big Adventures</H2>
        <p className="max-w-2xl mx-auto text-base sm:text-lg opacity-90 leading-relaxed mb-8 sm:mb-12 md:mb-16 text-left sm:text-justify">
          From your first 10 km to your first 100, <i>Wingmates</i> gives you the tools, feedback, and
          mindset to master the art of cross-country flight - and connect with others on the same
          journey. <br />
          <br />
          <i>Wingmates</i> is your support crew — a global community helping pilots progress faster through
          shared learning, honest feedback, and a flow-driven approach to mastery.
          <br />
        </p>
        <H3 className="mb-6 sm:mb-8">There&apos;s a lot to master</H3>
        <div className="flex flex-col md:flex-row max-w-4xl mx-auto mb-8 sm:mb-12">
          <div className="w-full md:w-1/3 mb-6 md:mb-0 pr-0 md:pr-4 text-left">
            <p>
              From forecasting and route planning to thermaling, decision-making, and fear —
              cross-country flying demands more than skill. It calls for awareness, dedication,
              self-cultivation, and community.
              <br />
              <br />
              That&apos;s why <i>Wingmates</i> exists — to help you learn, share, and fly alongside
              other like-minded pilots.
              <br />
              <br />
              Whether you want hands-on coaching or a supportive learning environment,{' '}
              <i>Wingmates</i> gives you everything you need to grow in confidence and master your
              paragliding journey.
            </p>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 gap-2">
            {[
              'paragliding-skewt.jpg',
              'paragliding-clan-william.jpg',
              'paragliding-apostles.jpg',
              'paragliding-task-map.jpg',
            ].map((img, index) => (
              <Image
                key={index}
                src={`https://usbcaazumzyoexabcmew.supabase.co/storage/v1/object/public/images/${img}`}
                alt={`Paragliding image ${index + 1}`}
                className="w-full h-auto object-cover rounded"
                width={250}
                height={250}
              />
            ))}
          </div>
        </div>
        <div className="max-w-2xl mx-auto text-lg opacity-90 leading-relaxed mb-4 sm:mb-6">
          <blockquote className="border-l-4 border-gray-500 pl-4 italic text-neutral-content text-xl sm:text-2xl">
            &ldquo;If you want to go fast, go alone. If you want to go far, go together.&rdquo; -
            African Proverb
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default Problem;
