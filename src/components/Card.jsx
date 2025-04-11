import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Card = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Trigger animation only once when in view

  // Animation variants
  const imageVariants = {
    hidden: { clipPath: "polygon(0 0, 0 0, 0 100%, 0 100%)", scale: 1.2 },
    visible: {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
      scale: 1,
      transition: { duration: 1.5, ease: "easeOut" },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut", delay: 1.5 },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="bg-white text-black flex flex-col md:flex-row items-center justify-center rounded-lg shadow-md"
      style={{ minHeight: "400px" }}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"} // Trigger animation based on visibility
    >
      {/* Image with clip-path reveal and zoom-out */}
      <motion.img
        src="../images/1.avif"
        alt="Design and Prototyping"
        className="w-full md:w-1/2 object-cover h-[300px] md:h-[400px]"
        variants={imageVariants}
      />

      {/* Text with slide-up fade animation */}
      <motion.div
        className="card-content p-8 md:p-12 flex flex-col justify-center"
        variants={textVariants}
      >
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center md:text-left">
          DESIGN AND PROTOTYPING
        </h2>
        <div className="flex items-center mb-4">
          <span className="text-3xl md:text-4xl font-bold text-yellow-500">
            2223
          </span>
          <p className="text-gray-500 text-sm md:text-base font-light ml-4">
            CamCad Designs
          </p>
        </div>
        <div className="flex items-center mb-4">
          <span className="text-3xl md:text-4xl font-bold text-yellow-500">
            24 Hours
          </span>
          <p className="text-gray-500 text-sm md:text-base font-light ml-4">
            From Prototype to Product
          </p>
        </div>
        <p className="text-gray-500 text-sm md:text-base font-light mt-4 mb-4">
          With years of experience, we've mastered the art of translating
          concepts into tangible designs. Our engineers understand the
          intricacies of materials, tolerances, and manufacturing processes.
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Card;
