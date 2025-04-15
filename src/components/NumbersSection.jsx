import React, { useEffect, useRef } from "react";
import { motion, useInView, animate } from "framer-motion";

// Updated number data
const numberData = [
  { value: 12, label: "Total Employees" },
  { value: 31, label: "Years of Experience" },
  { value: 108, label: "Partners Worldwide" },
  { value: 6, label: "Projects completed", suffix: "k+" }, // Added suffix for clarity
];

// Component for individual animated number
const NumberCounter = ({ from, to, label, format, suffix = "" }) => {
  const nodeRef = useRef();
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const node = nodeRef.current;

      const controls = animate(from, to, {
        duration: 2,
        ease: "easeOut",
        onUpdate(value) {
          // Simplified formatting logic, mainly for the suffix now
          const displayValue = format
            ? Math.round(value).toLocaleString("en-US") // Keep formatting if needed elsewhere
            : Math.round(value);
          node.textContent = displayValue + suffix; // Append suffix
        },
      });

      return () => controls.stop();
    }
  }, [from, to, isInView, format, suffix]);

  // Display initial value (or 0) before animation starts
  const initialDisplayValue = format ? from.toLocaleString("en-US") : from;

  return (
    <div className="text-center px-4"> {/* Added padding for spacing */}
      <span
        ref={nodeRef}
        className="block text-5xl sm:text-6xl md:text-7xl  text-primary" // Use primary color for numbers
      >
        {initialDisplayValue + suffix}
      </span>
      <p className="mt-3 text-base md:text-lg text-gray-300 uppercase tracking-wider"> {/* Adjusted label color and size */}
        {label}
      </p>
    </div>
  );
};

// Main section component
const NumbersSection = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 }); // Trigger when 20% is visible

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Stagger animation of children
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-section bg-black text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 md:px-16"> {/* Slightly wider max-width */}
        {/* Optional: Add a title */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={titleVariants}
        >
          <p className="text-sm md:text-base uppercase tracking-wider text-gray-400 mb-3 md:mb-4">
            Our Impact
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl  text-white"> {/* Title text white */}
            By the <span className="text-primary">Numbers</span>
          </h2>
        </motion.div>

        {/* Grid layout for numbers with dividers */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-x-8 md:gap-x-12 lg:gap-x-16" // Adjusted gaps
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {numberData.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              // Consistent vertical dividers between items on sm screens and up
              className={`relative ${
                index < numberData.length - 1 // Apply divider to all but the last item
                  ? "sm:after:content-[''] sm:after:absolute sm:after:top-1/2 sm:after:-translate-y-1/2 sm:after:-right-4 md:sm:after:-right-6 lg:sm:after:-right-8 sm:after:h-1/2 sm:after:w-px sm:after:bg-gray-600" // Adjusted divider color and positioning based on gap
                  : ""
              }`}
            >
              <NumberCounter
                from={0}
                to={item.value}
                label={item.label}
                format={item.format} // Pass format flag if needed by specific items
                suffix={item.suffix} // Pass suffix
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default NumbersSection;
