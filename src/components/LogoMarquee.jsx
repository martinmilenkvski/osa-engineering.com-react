import React, { useEffect, useState } from "react";

const LogoMarquee = ({ logos = [] }) => {
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);

  // Using actual logos from your project
  const defaultLogos = [
    { id: 1, src: "/logos/Alkaloid.png", alt: "Alkaloid" },
    { id: 2, src: "/logos/Draksler.png", alt: "Draksler" },
    { id: 3, src: "/logos/FomaSystems.png", alt: "Foma Systems" },
    { id: 4, src: "/logos/Kromberg.png", alt: "Kromberg" },
  ];

  const logosToDisplay = logos.length > 0 ? logos : defaultLogos;

  useEffect(() => {
    // Preload images to prevent rendering issues on mobile
    const preloadImages = () => {
      const imagePromises = logosToDisplay.map((logo) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.src = logo.src;
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      Promise.all(imagePromises)
        .then(() => setIsImagesLoaded(true))
        .catch((err) => console.error("Error preloading images:", err));
    };

    preloadImages();
  }, [logosToDisplay]);

  return (
    <div className="w-full bg-white py-8 sm:py-12 md:py-16">
      <div className="mb-6 sm:mb-8 text-center">
        <p className="text-sm sm:text-base md:text-lg uppercase text-gray-600">
          OUR PARTNERS
        </p>
        <h2 className="text-2xl sm:text-3xl md:text-6xl font-bold mt-2">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative w-full overflow-hidden">
        {/* Gradient overlays */}
        <div className="absolute top-0 left-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-r from-white to-transparent"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-12 sm:w-16 md:w-24 bg-gradient-to-l from-white to-transparent"></div>

        {/* Marquee container - wider than viewport with overflow hidden */}
        <div className="relative flex overflow-hidden py-4">
          {/* First set of logos - original */}
          <div
            className={`flex animate-marquee whitespace-nowrap ${
              isImagesLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {logosToDisplay.map((logo, index) => (
              <div
                key={`${logo.id}-${index}`}
                className="flex items-center justify-center mx-8 sm:mx-12 md:mx-16"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-36 sm:h-42 md:h-48 max-w-[300px] sm:max-w-[450px] md:max-w-[600px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                  style={{ display: "block" }}
                />
              </div>
            ))}
          </div>

          {/* Second set of logos - offset with different animation */}
          <div
            className={`flex animate-marquee2 whitespace-nowrap ${
              isImagesLoaded ? "opacity-100" : "opacity-0"
            }`}
          >
            {logosToDisplay.map((logo, index) => (
              <div
                key={`dup-${logo.id}-${index}`}
                className="flex items-center justify-center mx-8 sm:mx-12 md:mx-16"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-36 sm:h-42 md:h-48 max-w-[300px] sm:max-w-[450px] md:max-w-[600px] object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  loading="eager"
                  style={{ display: "block" }}
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
