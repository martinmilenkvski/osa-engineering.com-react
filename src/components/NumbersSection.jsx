import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const Counter = ({ from, to }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let startTime;
    let animationFrameId;

    const duration = 2000; // 2 seconds

    const updateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      // Calculate progress as a value between 0 and 1
      const progressFraction = Math.min(progress / duration, 1);

      // Apply easing function (easeOutQuad)
      const easedProgress = 1 - (1 - progressFraction) * (1 - progressFraction);

      // Calculate the current count value
      const currentCount = from + (to - from) * easedProgress;

      // Update state
      setCount(currentCount);

      // Continue animation if not complete
      if (progressFraction < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setCount(to);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [from, to]);

  return (
    <span style={{ display: "inline-block" }}>
      {Math.floor(count).toLocaleString()}
    </span>
  );
};

const NumbersSection = () => {
  const controls = useAnimation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          controls.start({
            opacity: 1,
            y: 0,
            transition: { duration: 1, ease: "easeOut" },
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [controls]);

  return (
    <div
      ref={sectionRef}
      className="flex flex-col items-start justify-start w-full bg-black p-8 md:p-16 lg:p-section text-white"
    >
      <p className="text-sm md:text-base uppercase tracking-wider text-gray-400 mb-4">
        COMPANY
      </p>

      <div className="flex items-start">
        <h2 className="text-4xl sm:text-5xl md:text-6xl">
          <span className="text-primary">O.S.A.</span> in Numbers
        </h2>
      </div>

      <motion.div
        className="flex flex-wrap justify-between w-full mt-16 md:mt-24 gap-8 md:gap-12"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="flex flex-col items-center">
          <h3 className="text-5xl md:text-6xl mb-8">
            <Counter from={0} to={6} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-base md:text-lg">Employees</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-5xl md:text-6xl mb-8">
            <Counter from={0} to={31} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-base md:text-lg">Years of Experience</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-5xl md:text-6xl mb-8">
            <Counter from={0} to={108} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-base md:text-lg text-center">Partners Worldwide</p>
        </div>

        <div className="flex flex-col items-center">
          <h3 className="text-5xl md:text-6xl mb-8">
            <Counter from={0} to={2000000} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-base md:text-lg">Capital</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NumbersSection;
