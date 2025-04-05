import React, { useEffect, useRef } from "react";
import "./Services.css";
import Card from "./Card";

const Services = () => {
  const hrRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hrRef.current) {
        // Calculate scroll percentage
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          100;
        hrRef.current.style.width = `${scrollPercentage + 20}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="px-8 md:px-16 w-full">
        <hr ref={hrRef} className="growing-hr mt-16" />
        <p>OUR SERVICES</p>

        <h2 className="text-8xl mb-12 px-8 md:px-16">
          Our Range of Mechanical Engineering Services
        </h2>
      </div>

      <div class="container px-8 md:px-16">
        <div className=" card">
          <Card />
        </div>
        <div className=" card">
          <Card />
        </div>
        <div className="card">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Services;
