import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

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
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { scale: 1.2, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="bg-white rounded-xl overflow-hidden shadow-2xl max-w-5xl mx-auto border border-gray-100"
      >
        <div className="grid md:grid-cols-2 gap-0">
          {/* Image Section */}
          <motion.div
            variants={imageVariants}
            className="relative h-[300px] md:h-[600px] bg-gray-100"
          >
            <img
              src={imageSrc}
              alt={imageAlt}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content Section */}
          <div className="p-8 md:p-12 flex flex-col gap-8">
            <div>
              <motion.h2
                variants={variants}
                className="text-3xl md:text-4xl font-bold text-zinc-800 mb-4"
              >
                {title}
              </motion.h2>
              <motion.p
                variants={variants}
                className="text-lg md:text-xl text-zinc-600"
              >
                {subtitle}
              </motion.p>
            </div>

            <motion.div
              variants={variants}
              className="grid grid-cols-2 gap-8 py-8 border-y border-gray-200"
            >
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-zinc-800">
                  {stat1Value}
                </span>
                <span className="block mt-2 text-base text-zinc-600">
                  {stat1Label}
                </span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-bold text-zinc-800">
                  {stat2Value}
                </span>
                <span className="block mt-2 text-base text-zinc-600">
                  {stat2Label}
                </span>
              </div>
            </motion.div>

            <motion.p
              variants={variants}
              className="text-lg leading-relaxed text-zinc-600"
            >
              {description}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
