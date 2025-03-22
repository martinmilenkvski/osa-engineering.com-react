import React from "react";

const Success = () => {
  return (
    <div className="flex flex-col items-start justify-start w-full bg-black p-16">
      <hr className="growing-hr mt-16 " />
      <div className="flex  items-start justify-start text-white ">
        <div className="flex flex-col items-start justify-start max-w-1/2">
          <p>CHECK OUR</p>

          <h2 className="text-8xl mb-12">Success Stories</h2>
        </div>
        <div className="flex flex-col items-start justify-start max-w-1/2">
          <p>
            In the world of precision manufacturing, CNC agencies have
            transformed production efficiency, reduced downtime, and achieved
            remarkable results. Let’s explore some inspiring success stories:
          </p>
        </div>
      </div>
    </div>
  );
};

export default Success;
