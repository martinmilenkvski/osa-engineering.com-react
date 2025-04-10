import React from "react";
import "./Success.css";

const Success = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full bg-black p-6 sm:p-8 md:p-12 lg:p-16">
      <hr className="growing-hr mt-8 md:mt-12 lg:mt-16" />
      
      <div className="flex flex-col md:flex-row items-start justify-start text-white w-full gap-6 md:gap-10 lg:gap-16 mt-8 md:mt-10">
        <div className="flex flex-col items-start justify-start w-full md:w-1/2 mb-6 md:mb-0">
          <p className="text-sm md:text-base uppercase tracking-wider text-gray-400 mb-2">CHECK OUR</p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl  mb-6 md:mb-8 lg:mb-12">
            Success Stories
          </h2>
        </div>
        
        <div className="flex flex-col items-start justify-start w-full md:w-1/2">
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            In the world of precision manufacturing, CNC agencies have
            transformed production efficiency, reduced downtime, and achieved
            remarkable results. Let's explore some inspiring success stories:
          </p>
          
          <div className="mt-8 space-y-6 w-full">
            {/* Success Story Cards - Add as needed */}
            <div className="border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Automotive Excellence</h3>
              <p className="text-gray-400">
                Reduced production time by 40% for a major automotive supplier by implementing 
                advanced CNC programming techniques and optimizing toolpaths.
              </p>
            </div>
            
            <div className="border border-gray-800 rounded-lg p-6 hover:border-yellow-500 transition-colors duration-300">
              <h3 className="text-xl md:text-2xl font-semibold mb-3">Aerospace Innovation</h3>
              <p className="text-gray-400">
                Developed custom fixtures that increased precision by 0.002mm, meeting stringent 
                aerospace requirements while reducing material waste by 23%.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;