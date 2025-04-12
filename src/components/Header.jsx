import React, { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
  };

  // Arrow animation variants
  const arrowVariants = {
    rest: { x: 0 },
    hover: {
      x: 10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400,
      },
    },
  };

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 min-h-full min-w-full object-cover"
      >
        <source src="/Cnc_hero.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-8 md:px-16"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-inter text-center text-5xl sm:text-6xl md:text-8xl font-medium text-white max-w-5xl mb-8 leading-tight"
          variants={itemVariants}
        >
          Your <span className="text-primary font tracking-wide">Partner </span>
          in Engineering
        </motion.h1>
        <motion.p
          className="font-inter text-center text-sm md:text-base text-white max-w-2xl leading-relaxed mb-10"
          variants={itemVariants}
        >
          Design. Prototype. Manufacture. Assemble. We use advanced computer
          modeling to accurately predict how structures will perform under
          stress and pressure.
        </motion.p>

        <motion.div variants={itemVariants}>
          <motion.button
            className="bg-primary hover:bg-transparent text-black hover:text-primary border-2 border-primary py-3 px-8 rounded-lg flex items-center transition-all duration-300"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="mr-2">Get Started</span>
            <motion.div
              initial="rest"
              animate={isHovered ? "hover" : "rest"}
              variants={arrowVariants}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </motion.div>
          </motion.button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;
