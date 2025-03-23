import React from "react";

const NumbersSection = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full bg-black p-16 text-white">
      <p className="text-lg uppercase">COMPANY</p>

      <div className="flex items-start mt-4">
        <h2 className="text-8xl">
          <span className="text-yellow-300">O.S.A.</span> in Numbers
        </h2>
      </div>

      <div className="flex justify-between w-full mt-24 mb-8">
        <div className="flex flex-col">
          <h3 className="text-7xl  mb-8">6</h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Employees</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-7xl  mb-8">31</h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Years of Experience</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-7xl  mb-8">108</h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Partners Worldwide</p>
        </div>

        <div className="flex flex-col">
          <h3 className="text-7xl mb-8">$2 mil</h3>
          <hr className="w-full border-t border-gray-700 mb-6" />
          <p className="text-lg">Capital</p>
        </div>
      </div>
    </div>
  );
};

export default NumbersSection;
