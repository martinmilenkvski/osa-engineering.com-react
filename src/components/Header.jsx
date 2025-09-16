import React, { useState, useEffect } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const Header = () => {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollY } = useScroll();

  // Create a motion value that scales down as the user scrolls
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);
  const yTranslate = useTransform(scrollY, [0, 300], [0, -50]);

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
    <motion.div
      className="relative h-screen w-full overflow-hidden"
      style={{
        scale,
        opacity,
        y: yTranslate,
      }}
    >
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
        className="relative z-10 flex h-full flex-col  justify-end items-center  px-8 py-16 md:px-16 w-[95%] mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="w-full flex flex-row items-center justify-between">
          <motion.h1
            className="font-inter text-left text-7xl sm:text-6xl md:text-[128px] font-medium text-white mb-2  leading-tight"
            variants={itemVariants}
          >
            Your{" "}
            <span className="text-primary tracking-wide">
              Partner
              <span className="ml-2 align-super text-[60px] leading-none">
                ™
              </span>
            </span>
          </motion.h1>

          <div className="flex items-center gap-4">
            {/* Avatars overlapping */}

            {/* Get Started Button */}
            {/* Wrap button in motion.div for staggered animation */}

            <motion.p
              className="font-inter text-right text-sm md:text-base text-white max-w-xl leading-relaxed mb-0"
              variants={itemVariants}
            >
              Design. Prototype. Manufacture. Assemble. We use advanced computer
              modeling to accurately predict how structures will perform under
              stress and pressure.
            </motion.p>

            <motion.div variants={itemVariants}>
              {/* <motion.button
                className="bg-primary hover:bg-transparent text-black hover:text-primary border-2 border-primary py-3 px-8 rounded-full flex items-center transition-all duration-300"
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
              </motion.button> */}
            </motion.div>
          </div>
        </div>

        <div className="w-full flex flex-row items-center justify-between gap-8">
          <div className="flex -space-x-3 items-end justify-stretch">
            <img
              src="https://i.pravatar.cc/48?img=1"
              alt="avatar 1"
              className="w-16 h-16 rounded-full border-2 border-white z-30"
            />
            <img
              src="https://i.pravatar.cc/48?img=2"
              alt="avatar 2"
              className="w-16 h-16  rounded-full border-2 border-white z-20"
            />
            <img
              src="https://i.pravatar.cc/48?img=3"
              alt="avatar 3"
              className="w-16 h-16 rounded-full border-2 border-white z-10"
            />
            <div className="flex pl-8">
              <span className="text-4xl text-white">+300</span>
              <div>
                <h2 className="pl-4 font-inter text-left text-sm md:text-base text-white max-w-xl leading-relaxed mb-0">
                  Satisfied
                </h2>
                <h2 className="pl-4 font-inter text-left text-sm md:text-base text-white max-w-xl leading-relaxed mb-0">
                  Clients
                </h2>
              </div>
            </div>
          </div>

          <motion.h1
            className="font-inter text-left text-5xl sm:text-6xl md:text-[128px] font-medium text-white mb-0 leading-tight"
            variants={itemVariants}
          >
            in Engineering
          </motion.h1>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Header;
