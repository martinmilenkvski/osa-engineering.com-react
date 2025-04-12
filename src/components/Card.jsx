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
      className="bg-white text-black flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden w-full md:w-4/5 mx-auto "
      style={{ minHeight: "400px" }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={cardVariants}
    >
      {/* Image container */}
      <div className="w-full md:w-1/2 overflow-hidden relative min-h-[300px]">
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

      {/* Content section - with increased padding */}
      <motion.div
        className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center min-h-[200px]"
        variants={textVariants}
      >
        <h2 className="text-xl md:text-6xl mb-3">Design and Prototyping</h2>

        <p className="text-gray-600 text-sm mb-12">
          Transforming concepts into precision-engineered solutions
        </p>

        {/* Stats in separate rows */}
        <div className="flex flex-col space-y-6 mb-6">
          <div>
            <span className="text-2xl md:text-5xl">2,223+</span>
            <p className="text-gray-500 text-sm mt-2">CamCad Designs</p>
          </div>
          <div className="h-px w-full bg-gray-200 my-8"></div>
          <div>
            <span className="text-2xl md:text-5xl">24 Hours</span>
            <p className="text-gray-500 text-sm mt-2">Prototype to Product</p>
          </div>
        </div>

        {/* Simple separator */}

        {/* Description - kept minimal */}
        <p className="text-gray-700 text-sm leading-relaxed max-w-lg mt-6">
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
