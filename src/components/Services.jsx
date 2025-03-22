import React, { useEffect, useRef } from "react";
import "./Services.css";

const Services = () => {
  const hrRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (hrRef.current) {
        // Calculate scroll percentage
        const scrollPercentage =
          (window.scrollY /
            (document.documentElement.scrollHeight - window.innerHeight)) *
          400;
        hrRef.current.style.width = `${scrollPercentage}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <hr ref={hrRef} className="growing-hr mt-16" />
      <p>OUR SERVICES</p>

      <h2 className="text-8xl mb-12">
        Our Range of Mechanical Engineering Services
      </h2>

      <div class="container">
        <div class="card">Card 1</div>
        <div class="card">Card 2</div>
        <div class="card">Card 3</div>
      </div>
    </div>
  );
};

export default Services;
