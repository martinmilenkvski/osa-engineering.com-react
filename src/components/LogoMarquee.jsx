import React from "react";

const LogoMarquee = () => {
  // Define logos directly within the component
  const defaultLogos = [
    { id: 1, src: "/logos/Alkaloid.png", alt: "Alkaloid" },
    { id: 2, src: "/logos/Draksler.png", alt: "Draksler" },
    { id: 3, src: "/logos/FomaSystems.png", alt: "Foma Systems" },
    { id: 4, src: "/logos/Kromberg.png", alt: "Kromberg" },
    // Add more logos as needed
  ];

  // Duplicate logos for a seamless loop effect
  const duplicatedLogos = [...defaultLogos, ...defaultLogos];

  return (
    <div className="w-full bg-white py-12 md:py-16 lg:py-20">
      {/* Header Text */}
      <div className="mb-8 md:mb-12 text-center">
        <p className="text-base md:text-lg lg:text-xl uppercase text-gray-600 tracking-wider">
          OUR PARTNERS
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mt-2 text-gray-900">
          Trusted by Industry <span className="text-yellow-500">Leaders</span>
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full max-w-6xl mx-auto overflow-hidden group">
        {/* Gradient Overlays for fade effect */}
        <div className="absolute top-0 left-0 z-10 h-full w-16 md:w-24 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
        <div className="absolute top-0 right-0 z-10 h-full w-16 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>

        {/* Animated Logo Track */}
        {/* Apply a CSS animation (e.g., 'animate-marquee') defined in your global CSS or tailwind.config.js */}
        {/* The 'group-hover:pause' class is optional for pausing on hover */}
        <div className="flex animate-marquee group-hover:pause">
          {duplicatedLogos.map((logo, index) => (
            <div
              key={`${logo.id}-${index}`} // Unique key for each item, including duplicates
              className="flex-shrink-0 mx-8 md:mx-12 lg:mx-16 flex items-center justify-center"
              style={{ minWidth: "150px" }} // Ensure logos don't collapse too much
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-32 md:h-40 lg:h-48 max-w-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ease-in-out"
                loading="lazy" // Use lazy loading for images not immediately visible
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoMarquee;

// Note: Ensure you have the 'animate-marquee' keyframes defined in your CSS.
// Example CSS for the animation (place in your global CSS file):
/*
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-50%); } // Translate by half the total width (since logos are duplicated)
}

.animate-marquee {
  animation: marquee 40s linear infinite; // Adjust duration as needed
}

.group-hover\:pause:hover .animate-marquee { // Optional: Pause animation on hover
  animation-play-state: paused;
}
*/
