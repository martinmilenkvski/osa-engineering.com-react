import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Accept props for dynamic content
const Card = ({
  imageSrc,
  imageAlt,
  title,
  subtitle,
  stat1Value,
  stat1Label,
  stat2Value,
  stat2Label,
  description,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.8 });


  const imageVariants = {
    hidden: {
      clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)",
      scale: 1.4, // start zoomed in
    },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scale: 1, // zoom out to normal size
      transition: { duration: 2, ease: "easeOut" }, // Added delay: 0.5
      
    },
  };

  const textContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.1, // Duration for the container itself (can be short)
        ease: "easeOut",
        delay: 0.5, // Delay before the first child starts animating
        staggerChildren: 0.2, // Time between each child's animation start (adjusted from 0.3)
      },
    },
  };

  // New variant for individual text items - adjusted for slide up fade in
  const itemVariants = {
    hidden: { opacity: 0, y: 50 }, // Start invisible and 50px lower
    visible: {
      opacity: 1, // Fade in
      y: 0,       // Slide up to original position
      transition: { duration: 1.5, ease: "easeOut" }, // Adjusted duration from 2
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white text-black flex flex-col md:flex-row rounded-lg shadow-md overflow-hidden w-full md:w-4/6 mx-auto p-4 sm:p-6 md:p-8 gap-6 md:gap-8"
      style={{ minHeight: "400px" }}
    >
      {/* Image container */}
      <div className="w-full md:w-1/2 overflow-hidden relative min-h-[220px] sm:min-h-[250px] md:min-h-[300px] rounded-lg mb-6 md:mb-0">
        <motion.div
          className="w-full h-full"
          variants={imageVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover absolute inset-0"
            loading="eager"
            style={{
              display: "block",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </motion.div>
      </div>

      {/* Content section - apply textContainerVariants */}
      <motion.div
        className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center"
        variants={textContainerVariants} // Use container variants
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        {/* Wrap title with motion and apply itemVariants */}
        <motion.h2 variants={itemVariants} className="text-xl md:text-5xl mb-3">
          {title}
        </motion.h2>

        {/* Wrap subtitle with motion and apply itemVariants */}
        <motion.p
          variants={itemVariants}
          className="text-gray-600 text-xs sm:text-sm mb-6 sm:mb-8 md:mb-10 lg:mb-12"
        >
          {subtitle}
        </motion.p>

        {/* Wrap stats container with motion and apply itemVariants */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col space-y-4 sm:space-y-6"
        >
          <div>
            <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
              {stat1Value}
            </span>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              {stat1Label}
            </p>
          </div>
          <div className="h-px w-full bg-gray-200 my-4 sm:my-6 md:my-8"></div>
          <div>
            <span className="text-xl sm:text-2xl md:text-2xl lg:text-3xl xl:text-4xl">
              {stat2Value}
            </span>
            <p className="text-gray-500 text-xs sm:text-sm mt-1 sm:mt-2">
              {stat2Label}
            </p>
          </div>
        </motion.div>

        {/* Wrap separator with motion and apply itemVariants */}
        <motion.div
          variants={itemVariants}
          className="h-px w-full bg-gray-200 my-4 sm:my-6 md:my-8"
        ></motion.div>

        {/* Wrap description with motion and apply itemVariants */}
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-sm leading-relaxed max-w-lg"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
