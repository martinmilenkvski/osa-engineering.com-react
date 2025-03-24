import React from "react";

const LogoMarquee = ({ logos = [] }) => {
  // If no logos are provided, use 4 default placeholders
  const defaultLogos = [
    { id: 1, src: "/logos/logo1.svg", alt: "Partner 1" },
    { id: 2, src: "/logos/logo2.svg", alt: "Partner 2" },
    { id: 3, src: "/logos/logo3.svg", alt: "Partner 3" },
    { id: 4, src: "/logos/logo4.svg", alt: "Partner 4" },
  ];

  // Use provided logos or defaults, but limit to exactly 4
  const logosToDisplay = logos.length > 0 ? logos.slice(0, 4) : defaultLogos;

  // For a proper infinite loop, we need to duplicate the logos
  // We only need one copy for the animation to appear continuous
  const repeatedLogos = [...logosToDisplay, ...logosToDisplay];

  return (
    <div className="w-full bg-white py-16">
      <div className="mb-8 text-center">
        <p className="text-lg uppercase text-gray-600">OUR PARTNERS</p>
        <h2 className="text-4xl font-bold mt-2">Trusted by Industry Leaders</h2>
      </div>

      {/* Container with side blur effects */}
      <div className="relative w-full overflow-hidden">
        {/* Left blur gradient */}
        <div className="absolute top-0 left-0 z-10 h-full w-24 bg-gradient-to-r from-white to-transparent"></div>

        {/* Right blur gradient */}
        <div className="absolute top-0 right-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent"></div>

        {/* Marquee content - only one animation */}
        <div className="relative flex overflow-x-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {repeatedLogos.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center mx-12 h-20"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-16 max-w-[200px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
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
