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
    <div className="flex flex-col" ref={sectionRef}>
      {/* Header area with extra padding and larger titles */}
      <div className="px-8 md:px-16 w-full py-12 md:py-20">
        <motion.hr
          className="border-black/20 mt-16"
          initial={{ scaleX: 0, transformOrigin: "left" }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
        />

        <p className={`animate-text ${isVisible ? "animate-visible" : ""} text-lg md:text-xl mt-8`}>
          OUR SERVICES
        </p>

        <h2
          className={`text-5xl md:text-6xl lg:text-7xl font-bold text-left animate-text ${
            isVisible ? "animate-visible" : ""
          } mt-4`}
          style={{ transitionDelay: "200ms" }}
        >
          Our Range of Engineering Services
        </h2>
      </div>

      {/* Sticky Cards container (layout defined in Services.css) */}
      <div className="container px-8 md:px-16">
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
