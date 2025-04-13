import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Card = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Animation variants with minimal timing
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 0.3 }, // added delay of 0.3 sec
    },
  };

  const imageVariants = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      scale: 1.2, // start zoomed in
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scale: 1, // zoom out to normal size
      transition: { duration: 1.2, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white text-black flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden w-full md:w-4/5 mx-auto p-4 sm:p-6 md:p-8 gap-6 md:gap-8"
      style={{ minHeight: "400px" }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      {/* Image container */}
      <div className="w-full md:w-1/2 overflow-hidden relative min-h-[220px] sm:min-h-[250px] md:min-h-[300px] rounded-lg mb-6 md:mb-0">
        <motion.div className="w-full h-full" variants={imageVariants}>
          <img
            src="/images/1.avif"
            alt="Design and Prototyping"
            className="w-full h-full object-cover absolute inset-0"
            loading="eager"
            style={{ display: "block" }}
          />
        </motion.div>
      </div>

      {/* Content section - with improved responsive text */}
      <motion.div
        className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center"
        variants={textVariants}
      >
        <h2 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl  mb-2 md:mb-3 leading-tight">
          Design and Prototyping
        </h2>

        <p className="text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10 lg:mb-12">
          Transforming concepts into precision-engineered solutions
        </p>

        {/* Stats with responsive sizing */}
        <div className="flex flex-col space-y-4 sm:space-y-6 mb-6">
          <div>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
              2,223+
            </span>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              CamCad Designs
            </p>
          </div>
          <div className="h-px w-full bg-gray-200 my-4 sm:my-6 md:my-8"></div>
          <div>
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl ">
              24 Hours
            </span>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              Prototype to Product
            </p>
          </div>
        </div>

        {/* Description with better line height and responsive text */}
        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed sm:leading-relaxed max-w-lg mt-4 sm:mt-6">
          Our engineers translate concepts into tangible designs with precision
          and expertise in materials, tolerances, and manufacturing processes.
          Our engineers translate concepts into tangible designs with precision
          and expertise in materials, tolerances, and manufacturing processes.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
