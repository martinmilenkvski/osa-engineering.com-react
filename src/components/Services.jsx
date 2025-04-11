import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import Card from "./Card";

const Services = () => {
  const hrRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

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

      // Check if section is visible
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex flex-col" ref={sectionRef}>
      <div className="px-8 md:px-16 w-full">
        <hr ref={hrRef} className="growing-hr mt-16" />

        <p className={`animate-text ${isVisible ? "animate-visible" : ""}`}>
          OUR SERVICES
        </p>

        <h2
          className={`text-4xl md:text-5xl lg:text-6xl mb-4 font-bold text-left animate-text ${
            isVisible ? "animate-visible" : ""
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          Our Range of Engineering Services
        </h2>
      </div>

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
