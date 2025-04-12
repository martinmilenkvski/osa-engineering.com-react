import React, { useState, useEffect, useRef } from "react";
import "./Success.css";

const Success = () => {
  const [isVisible, setIsVisible] = useState({
    leftText: false,
    rightText: false,
    model: false
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
            setIsVisible(prev => ({ ...prev, leftText: true }));
          }, 300);
          
          setTimeout(() => {
            setIsVisible(prev => ({ ...prev, rightText: true }));
          }, 600);
          
          setTimeout(() => {
            setIsVisible(prev => ({ ...prev, model: true }));
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
    <div ref={sectionRef} className="flex flex-col items-start justify-start w-full bg-black p-8 md:p-16 lg:p-section">
      <hr className="growing-hr mt-12 md:mt-16" />

      <div className="flex flex-col md:flex-row items-start justify-start text-white w-full gap-10 md:gap-16 lg:gap-24 mt-12 md:mt-16">
        <div className={`flex flex-col items-start justify-start w-full md:w-1/2 mb-10 md:mb-0 transition-all duration-1000 ${isVisible.leftText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-sm md:text-base uppercase tracking-wider text-gray-400 mb-4">
            CHECK OUR
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-7xl mb-8 md:mb-12">
            <span className="text-yellow-500">Success</span> Stories
          </h2>
          {/* New 3D model section */}
          <div className="w-full mt-4">
            {/* Example using a model-viewer component */}
            <div className={`transition-all duration-3000 ${isVisible.model ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`}>
              <model-viewer
                src="/images/uploads_files_3980547_KB001.glb"
                alt="3D model"
                auto-rotate
                camera-controls
                disable-zoom
                camera-orbit="60deg 30deg 2.5m"
                style={{ width: "100%", height: "400px" }}
              ></model-viewer>
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-start justify-start w-full md:w-1/2 transition-all duration-1000 ${isVisible.rightText ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            In the world of precision manufacturing, CNC agencies have
            transformed production efficiency, reduced downtime, and achieved
            remarkable results. Let's explore some inspiring success stories:
          </p>

          <div className="mt-12 space-y-8 w-full">
            {/* Success Story Cards - Add as needed */}
            <div className="border border-gray-800 rounded-standard p-8 hover:border-primary transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Automotive Excellence
              </h3>
              <p className="text-gray-400">
                Reduced production time by 40% for a major automotive supplier
                by implementing advanced CNC programming techniques and
                optimizing toolpaths.
              </p>
            </div>

            <div className="border border-gray-800 rounded-standard p-8 hover:border-primary transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                Aerospace Innovation
              </h3>
              <p className="text-gray-400">
                Developed custom fixtures that increased precision by 0.002mm,
                meeting stringent aerospace requirements while reducing material
                waste by 23%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;
