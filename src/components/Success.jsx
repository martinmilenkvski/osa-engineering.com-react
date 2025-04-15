import React, { useState, useEffect, useRef } from "react";
import "./Success.css";
// Import model-viewer if needed, or ensure it's loaded globally
// import '@google/model-viewer';

const Success = () => {
  const [isVisible, setIsVisible] = useState({
    leftText: false,
    rightText: false,
    model: false,
  });

  const sectionRef = useRef(null);

  useEffect(() => {
    // Use Intersection Observer to detect when section is in view
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Stagger animations after section becomes visible
          setTimeout(() => {
            setIsVisible((prev) => ({ ...prev, leftText: true }));
          }, 300);

          setTimeout(() => {
            setIsVisible((prev) => ({ ...prev, rightText: true }));
          }, 600);

          setTimeout(() => {
            setIsVisible((prev) => ({ ...prev, model: true }));
          }, 900);

          // Once animations have triggered, disconnect observer
          observer.disconnect();
        }
      },
      { threshold: 0.2 } // Trigger when 20% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      // Adjusted padding for responsiveness
      className="flex flex-col items-start justify-start w-full bg-black p-8 md:p-16 lg:p-24"
    >
      {/* Adjusted top margin */}
      <hr className="growing-hr mt-8 md:mt-12 lg:mt-16" style={{ width: isVisible.leftText ? '100%' : '0' }} />

      {/* Adjusted gap and top margin */}
      <div className="flex flex-col md:flex-row items-start justify-start text-white w-full gap-10 md:gap-16 lg:gap-24 mt-8 md:mt-12 lg:mt-16">
        {/* Left Column */}
        <div
          // Applied Tailwind transition and transform classes directly
          className={`flex flex-col items-start justify-start w-full md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ease-out ${
            isVisible.leftText
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0" // Use Tailwind classes
          }`}
        >
          <p className="text-sm md:text-base uppercase tracking-wider text-gray-400 mb-3 md:mb-4">
            CHECK OUR
          </p>
          {/* Adjusted text size and bottom margin */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-6 md:mb-8 lg:mb-12">
            <span className="text-yellow-500">Success</span> Stories
          </h2>
          {/* 3D model section */}
          <div className="w-full mt-4 md:mt-6">
            <div
              // Applied Tailwind transition and transform classes directly
              className={`transition-all duration-[1500ms] ease-out ${ // Longer duration for model
                isVisible.model ? "opacity-100 scale-100" : "opacity-0 scale-95" // Use Tailwind classes
              }`}
            >
              {/* Ensure model-viewer is responsive */}
              <model-viewer
                src="/images/uploads_files_3980547_KB001.glb"
                alt="3D model"
                auto-rotate
                camera-controls
                disable-zoom
                // Adjusted camera orbit for potentially better initial view
                camera-orbit="45deg 55deg 2.5m"
                // Responsive height
                style={{ width: "100%", height: "300px", md: { height: "400px" } }}
                className="rounded-lg" // Optional: add rounding
              ></model-viewer>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div
          // Applied Tailwind transition and transform classes directly
          className={`flex flex-col items-start justify-start w-full md:w-1/2 transition-all duration-1000 ease-out delay-300 ${ // Added slight delay
            isVisible.rightText
              ? "translate-y-0 opacity-100"
              : "translate-y-10 opacity-0" // Use Tailwind classes
          }`}
        >
          {/* Adjusted text size and leading */}
          <p className="text-base md:text-lg text-gray-300 leading-relaxed md:leading-loose">
            In the world of precision manufacturing, CNC agencies have
            transformed production efficiency, reduced downtime, and achieved
            remarkable results. Let's explore some inspiring success stories:
          </p>

          {/* Adjusted top margin and spacing */}
          <div className="mt-10 md:mt-12 space-y-6 md:space-y-8 w-full">
            {/* Success Story Cards */}
            <div className="border border-gray-800 rounded-lg p-6 md:p-8 hover:border-primary transition-colors duration-300">
              {/* Adjusted text size and margin */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                Automotive Excellence
              </h3>
              {/* Adjusted text size */}
              <p className="text-sm md:text-base text-gray-400">
                Reduced production time by 40% for a major automotive supplier
                by implementing advanced CNC programming techniques and
                optimizing toolpaths.
              </p>
            </div>

            <div className="border border-gray-800 rounded-lg p-6 md:p-8 hover:border-primary transition-colors duration-300">
              {/* Adjusted text size and margin */}
              <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
                Aerospace Innovation
              </h3>
              {/* Adjusted text size */}
              <p className="text-sm md:text-base text-gray-400">
                Developed custom fixtures that increased precision by 0.002mm,
                meeting stringent aerospace requirements while reducing material
                waste by 23%.
              </p>
            </div>
            {/* Add more cards as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
