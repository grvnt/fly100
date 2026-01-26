import Image from 'next/image';

const LogoBar = () => {
  const logos = [
    {
      src: '/logos/paul-guschlbauer.png',
      alt: 'Paul Guschlbauer',
    },
    {
      src: '/logos/JB.png',
      alt: 'JB',
    },
    {
      src: '/logos/skywalk-logo-white.png',
      alt: 'Skywalk',
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto my-8 pb-12">
      <div className="flex flex-col items-center gap-6">
        <p className="text-lg sm:text-xl font-medium text-center">
          Some legends I&apos;ve worked with:
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center opacity-70 hover:opacity-100 transition-all duration-300 rounded-lg p-3 border-2 border-transparent hover:border-[#3B82F6] hover:shadow-[0_0_15px_#3B82F6] hover:animate-pulse-border"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={180}
                height={90}
                className="h-auto max-h-24 sm:max-h-28 md:max-h-32 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoBar;
