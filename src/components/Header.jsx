import React from "react";
import { motion } from "framer-motion";

const Header = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animations for child elements
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
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
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex h-full flex-col items-center justify-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="text-center text-9xl text-white md:text-7xl max-w-4xl mb-10 leading-tight"
          variants={itemVariants}
        >
          Your <span className="text-yellow-500">Partner </span>in Engineering
        </motion.h1>
        <motion.p
          className="mt-4 text-center text-base text-white max-w-2xl leading-relaxed font-light"
          variants={itemVariants}
        >
          Design. Prototype. Manufacture. Assemble. We use advanced computer
          modeling to accurately predict how structures will perform under
          stress and pressure.
        </motion.p>
        <motion.div 
          className="mt-8"
          variants={itemVariants}
        >
          <a 
            href="/contact" 
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-medium py-3 px-8 rounded-md transition-colors duration-300 shadow-lg"
          >
            Get Started Today
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Header;