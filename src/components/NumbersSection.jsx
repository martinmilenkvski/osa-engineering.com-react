import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

const Counter = ({ from, to }) => {
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ count: from }}
        animate={{ count: to }}
        transition={{
          duration: 2,
          ease: "easeOut",
        }}
      >
        {({ count }) => Math.floor(count).toLocaleString()}
      </motion.span>
    </motion.span>
  );
};

const NumbersSection = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: "easeOut" },
    });
  }, [controls]);

  return (
    <div className="flex flex-col items-start justify-start w-full bg-black p-16 text-white">
      <p className="text-lg uppercase">COMPANY</p>

      <div className="flex items-start mt-4">
        <h2 className="text-8xl">
          <span className="text-yellow-300">O.S.A.</span> in Numbers
        </h2>
      </div>

      <motion.div
        className="flex justify-between w-full mt-24 mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={controls}
      >
        <div className="flex flex-col">
          <h3 className="text-7xl mb-8">
            <Counter from={0} to={6} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Employees</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-7xl mb-8">
            <Counter from={0} to={31} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Years of Experience</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-7xl mb-8">
            <Counter from={0} to={108} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Partners Worldwide</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-7xl mb-8">
            <Counter from={0} to={2000000} />
          </h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Capital</p>
        </div>
      </motion.div>
    </div>
  );
};

export default NumbersSection;
