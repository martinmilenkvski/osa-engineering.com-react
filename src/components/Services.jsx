import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import Card from "./Card";

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col bg-gray-100" ref={sectionRef}>
      {/* Header area with extra padding and larger titles */}
      <div className="px-8 md:px-16 w-full  md:pt-14 py-2">
        <motion.hr
          className="border-black/20 mt-2"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 2.2, ease: "easeInOut", delay: 0.8 }}
        />
        <div className="flex  justify-between mt-4">
          <p
            className={`animate-text ${
              isVisible ? "animate-visible" : ""
            } text-lg md:text-xl mt-8`}
          >
            OUR SERVICES
          </p>

          <p
            className={`animate-text ${
              isVisible ? "animate-visible" : ""
            } text-lg md:text-xl mt-8`}
          >
            // O.S.A
          </p>
        </div>

        <h2
          className={`text-5xl md:text-6xl lg:text-7xl text-left animate-text ${
            isVisible ? "animate-visible" : ""
          } mt-4`}
          style={{ transitionDelay: "200ms" }}
        >
          Our <span className="text-yellow-500">Range</span> of <br></br>
          Engineering Services
        </h2>
      </div>

      {/* Sticky Cards container (layout defined in Services.css) */}
      <div className="w-full md:px-2 card-container">
        <div
          className={`card animate-text ${isVisible ? "animate-visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          <Card />
        </div>
        <div
          className={`card animate-text ${isVisible ? "animate-visible" : ""}`}
          style={{ transitionDelay: "600ms" }}
        >
          <Card />
        </div>
        <div
          className={`card animate-text ${isVisible ? "animate-visible" : ""}`}
          style={{ transitionDelay: "800ms" }}
        >
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Services;
