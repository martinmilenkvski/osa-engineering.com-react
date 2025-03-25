import React from "react";

const Card = () => {
  return (
    <div className="card text-black flex flex-col md:flex-row items-center justify-center ">
      <img src="../images/1.avif" alt="" />
      <div className="card-content p-16 flex flex-col justify-center ">
        {" "}
        <h2 className="text-5xl font-bold mb-8">DESIGN AND PROTOTYPING</h2>
        <div className="flex items-center">
          <span className="font-6xl">2223 </span>
          <p className="text-gray-500 text-lg font-light mt-4 ml-4">
            CamCad Designs
          </p>
        </div>
        <div className="flex items-center">
          <span className="font-6xl">24 Hours </span>
          <p className="text-gray-500 text-lg font-light mt-4 ml-4">
            From Prototype to Product
          </p>
          <hr></hr>
        </div>
        <p className="text-gray-500 text-lg font-light mt-4 mb-4 w-4/5">
          With years of experience, we’ve mastered the art of translating
          concepts into tangible designs. Our engineers understand the
          intricacies of materials, tolerances, and manufacturing processes.
        </p>
      </div>
    </div>
  );
};

export default Card;
