import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";
import CncPrototypingIcon from "./CncPrototypingIcon";
import AdvancedMfgIcon from "./AdvancedMfgIcon";
import TestingValidationIcon from "./TestingValidationIcon";
import LifecycleSupportIcon from "./LifecycleSupportIcon";

/**
 * AnimatedStat Component:
 * Custom counter that handles technical strings (e.g., "99.8%", "15+ Years", "2,223").
 * It uses Regex to separate prefixes/suffixes from the numeric core and animates 
 * the count sequentially within the UI.
 */
const AnimatedStat = ({ value }) => {
  const ref = useRef(null);

  // Triggers the animation only when the stat itself is visible (10% threshold)
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  // Regex: 1. Optional Prefix ($) | 2. Number (int/float/comma) | 3. Optional Suffix (%)
  const match = String(value).match(/^([^0-9\.\-]*)?([0-9\.\-,]+)(.*)?$/);

  const [displayValue, setDisplayValue] = useState(value);
  const [parsed, setParsed] = useState({
    isValid: false,
    prefix: "",
    target: 0,
    suffix: "",
    isFloat: false,
    hasComma: false
  });

  // Effect: Parse the value on mount or value change
  useEffect(() => {
    if (match) {
      const prefix = match[1] || "";
      const numStr = match[2];
      const suffix = match[3] || "";

      const hasComma = numStr.includes(",");
      const cleanNumStr = numStr.replace(/,/g, "");
      const isFloat = cleanNumStr.includes(".");
      const target = parseFloat(cleanNumStr);

      if (!isNaN(target)) {
        setParsed({ isValid: true, prefix, target, suffix, isFloat, hasComma });
        // Start counter at zero formatted correctly
        setDisplayValue(`${prefix}${isFloat ? "0.0" : "0"}${suffix}`);
      }
    }
  }, [value]);

  // Effect: Run the Framer Motion animation when scrolled into view
  useEffect(() => {
    if (isInView && parsed.isValid) {
      const controls = animate(0, parsed.target, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (val) => {
          let formatted;
          if (parsed.isFloat) {
            formatted = val.toFixed(1); // Keeps decimal precision e.g., 99.8
          } else {
            formatted = Math.round(val).toString();
          }

          if (parsed.hasComma) {
            formatted = parseInt(formatted).toLocaleString('en-US'); // Adds commas back e.g., 2,223
          }

          setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);
        }
      });
      return controls.stop;
    }
  }, [isInView, parsed]);

  return <span ref={ref}>{displayValue}</span>;
};

/**
 * Card Component:
 * The primary container for service details. It utilizes a sticky layering effect 
 * on desktop, where cards stack on top of each other slightly offset.
 * 
 * It also dynamically swaps static images for bespoke technical SVG icons based 
 * on the card's ID.
 */
const Card = ({ id, imageSrc, title, subtitle, description, stat1Label, stat1Value, stat2Label, stat2Value, index }) => {
  const stickyTop = `calc(50vh - 300px + ${index * 20}px)`;

  // Unified theme using the deep industrial grey background for all cards
  const theme = {
    bg: "bg-[#1f1f1f]",
    border: "border-white/10",
    text: "text-white",
    titleLight: "text-white/30",
    muted: "text-white/30",
    accent: "text-[#FFC800]",
    description: "text-white/50",
    bracket: "bg-white/20",
    statsBorder: "border-white/10",
    statsBg: "bg-[#FFC800]",
    statsText: "text-black",
    statsMuted: "text-black/60",
    statsDot: "bg-black"
  };

  const containerVars = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemFadeVars = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const bracketVars = {
    initial: { scale: 0, opacity: 0 },
    whileInView: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <div
      className="sticky lg:sticky w-full z-10 top-20 lg:top-auto"
      style={{ top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? stickyTop : undefined }}
    >
      <motion.div
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVars}
        className={`border ${theme.border} overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 h-auto lg:h-[600px] flex flex-col lg:flex-row relative ${theme.bg}`}
      >

        {/* --- LEFT SIDE: CONTENT & STATS --- */}
        <div className="relative z-10 flex flex-col w-full lg:w-1/2 lg:border-r border-white/5">

          {/* Header Metadata */}
          <motion.div variants={itemFadeVars} className="flex justify-between items-start p-8 lg:p-12 pb-2 lg:pb-12">
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono font-bold ${theme.accent} tracking-[0.2em] uppercase mb-1`}>
                INITIATE //
              </span>
              <span className={`text-[10px] font-mono ${theme.muted} uppercase tracking-[0.2em] leading-none`}>
                {subtitle || "SYSTEM_ACTIVE"}
              </span>
            </div>
          </motion.div>

          {/* Main Info Block */}
          <div className="flex-1 flex flex-col p-8 lg:p-12 pt-4 lg:pt-8 w-full">
            <div className="flex-1 flex flex-col justify-end">
              <motion.div variants={itemFadeVars} className="mb-6 pt-1 pb-1">
                <h3 className={`text-3xl lg:text-5xl tracking-normal uppercase leading-[0.9] max-w-sm lg:max-w-md antialiased`}>
                  <span className={`font-bold ${theme.text}`}>
                    {title.split(" ")[0]}
                  </span>
                  {" "}
                  <span className={`font-light ${theme.titleLight}`}>
                    {title.split(" ").slice(1).join(" ")}
                  </span>
                </h3>
              </motion.div>

              {/* Description & Performance Data Grid */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 border-t ${theme.statsBorder} pt-8 mt-4`}>
                <div className="flex flex-col justify-between gap-8 md:gap-6 pr-4">
                  <p className={`text-base lg:text-sm ${theme.description} uppercase leading-normal font-normal font-mono tracking-tight`}>
                    {description}
                  </p>
                </div>

                {/* Primary Stats (Technical Panel) */}
                <motion.div variants={itemFadeVars} className={`flex flex-col justify-center gap-6 p-8 lg:p-8 ${theme.statsBg} -mx-8 md:mx-0 md:h-full`}>
                  <div>
                    <div className={`text-[10px] font-mono uppercase ${theme.statsMuted} mb-2 tracking-widest flex items-center gap-2`}>
                      <span className={`w-1.5 h-1.5 ${theme.statsDot} rounded-full animate-pulse`}></span>
                      {stat1Label || "Precision"}
                    </div>
                    <div className={`text-3xl lg:text-4xl font-mono font-bold tracking-normal ${theme.statsText} w-full tabular-nums`}>
                      <AnimatedStat value={stat1Value} />
                    </div>
                  </div>
                  <div className={`mt-2 ${theme.statsText} opacity-20 w-full h-px bg-current`}></div>
                  <div>
                    <div className={`text-[10px] font-mono uppercase ${theme.statsMuted} mb-2 tracking-widest flex items-center gap-2`}>
                      <span className={`w-1.5 h-1.5 ${theme.statsDot} opacity-50 rounded-full animate-pulse`}></span>
                      {stat2Label || "Tolerance"}
                    </div>
                    <div className={`text-3xl lg:text-4xl font-mono font-bold tracking-normal ${theme.statsText} w-full tabular-nums`}>
                      <AnimatedStat value={stat2Value} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* --- RIGHT SIDE: VISUAL VIEWFINDER --- */}
        <div className="hidden lg:flex w-full lg:w-1/2 relative bg-[#050505] overflow-hidden">
          {/* Subtle Grid Backdrop Overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>

          <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out z-0 pointer-events-none flex items-center justify-center">
            {/* 
              TECHNICAL ICON SWITCHER:
              Swaps standard images for interactive/animated SVGs for specific service IDs.
            */}
            {id === 1 ? (
              <CncPrototypingIcon />
            ) : id === 2 ? (
              <AdvancedMfgIcon />
            ) : id === 3 ? (
              <TestingValidationIcon />
            ) : id === 4 ? (
              <LifecycleSupportIcon />
            ) : imageSrc ? (
              <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase text-center px-4">IMAGE_PLACEHOLDER // {id || index}</span>
              </div>
            )}
          </div>
        </div>

        {/* --- MECHANICAL DECORATIONS (Corner Brackets) --- */}
        <motion.div variants={bracketVars} className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
          <div className={`absolute top-0 right-0 w-[1px] h-4 ${theme.bracket}`}></div>
          <div className={`absolute top-0 right-0 h-[1px] w-4 ${theme.bracket}`}></div>
        </motion.div>
        <motion.div variants={bracketVars} className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
          <div className={`absolute bottom-0 left-0 w-[1px] h-4 ${theme.bracket}`}></div>
          <div className={`absolute bottom-0 left-0 h-[1px] w-4 ${theme.bracket}`}></div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Card;
