import React from "react";

const Header = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
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
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <h1 className="text-center text-9xl text-white md:text-9xl max-w-4xl mb-10 leading-tight">
          Your <span className="text-yellow-500">Partner </span>in Engineering
        </h1>
        <p className="mt-4 text-center text-lg tracking-wider text-white max-w-3xl leading-relaxed">
          Design. Prototype. Manufacture. Assemble. We use advanced computer
          modeling (finite element analysis) to accurately predict how
          structures will perform under stress and pressure
        </p>
      </div>
    </div>
  );
};

export default Header;
