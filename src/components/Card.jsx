import React from "react";

const Card = () => {
  return (
    <div className="card bg-white text-black flex flex-col md:flex-row items-center justify-center rounded-lg">
      <img
        src="../images/1.avif"
        alt="Design and Prototyping"
        className="w-full md:w-1/2 object-cover"
      />
      <div className="card-content p-8 md:p-12 flex flex-col justify-center">
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
          With years of experience, we’ve mastered the art of translating
          concepts into tangible designs. Our engineers understand the
          intricacies of materials, tolerances, and manufacturing processes.
        </p>
      </div>
    </div>
  );
};

export default Card;
