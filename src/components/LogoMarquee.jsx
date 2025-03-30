import React from "react";

const LogoMarquee = ({ logos = [] }) => {
  const defaultLogos = [
    { id: 1, src: "/logos/logo1.svg", alt: "Partner 1" },
    { id: 2, src: "/logos/logo2.svg", alt: "Partner 2" },
    { id: 3, src: "/logos/logo3.svg", alt: "Partner 3" },
    { id: 4, src: "/logos/logo4.svg", alt: "Partner 4" },
  ];

  const logosToDisplay = logos.length > 0 ? logos.slice(0, 4) : defaultLogos;
  const repeatedLogos = [...logosToDisplay, ...logosToDisplay];

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="mb-6 sm:mb-8 text-center">
        <p className="text-sm sm:text-base md:text-lg uppercase text-gray-600">
          OUR PARTNERS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mt-2">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        <div className="absolute top-0 left-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent"></div>

        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center mx-6 sm:mx-8 md:mx-12 h-16 sm:h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 sm:h-14 md:h-16 max-w-[100px] sm:max-w-[150px] md:max-w-[200px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;