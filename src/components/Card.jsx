import React, { useRef, useState, useEffect } from "react";
import { motion, useInView, animate } from "framer-motion";

/**
 * Animated stat counter capable of parsing prefixes, suffixes, decimals, and commas.
 */
const AnimatedStat = ({ value }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  // Regex to extract [full, prefix, numberStr, suffix] e.g. "99.8%", "15+ Years", "2,223"
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
        setDisplayValue(`${prefix}${isFloat ? "0.0" : "0"}${suffix}`);
      }
    }
  }, [value]);

  useEffect(() => {
    if (isInView && parsed.isValid) {
      const controls = animate(0, parsed.target, {
        duration: 2,
        ease: [0.16, 1, 0.3, 1],
        onUpdate: (val) => {
          let formatted;
          if (parsed.isFloat) {
            formatted = val.toFixed(1);
          } else {
            formatted = Math.round(val).toString();
          }
          
          if (parsed.hasComma) {
            formatted = parseInt(formatted).toLocaleString('en-US');
          }
          
          setDisplayValue(`${parsed.prefix}${formatted}${parsed.suffix}`);
        }
      });
      return controls.stop;
    }
  }, [isInView, parsed]);

  return <span ref={ref}>{displayValue}</span>;
};

const Card = ({ id, imageSrc, title, subtitle, description, stat1Label, stat1Value, stat2Label, stat2Value, index }) => {
  const stickyTop = `calc(50vh - 300px + ${index * 20}px)`;

  const theme = {
    bg: "bg-[#080808]",
    border: "border-white/10",
    text: "text-white",
    muted: "text-white/30",
    accent: "text-[#FFC800]",
    description: "text-white/50",
    stripe: "bg-[#FFC800]",
    statsBorder: "border-white/10",
    bracket: "bg-white/20",
    titleWeight: "antialiased font-bold"
  };

  const fadeUpVars = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } },
    viewport: { once: true, margin: "-50px" }
  };

  const staggerVars = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
    viewport: { once: true, margin: "-100px" }
  };

  const imgVars = {
    initial: { scale: 1.1, opacity: 0 },
    whileInView: { scale: 1, opacity: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } },
    viewport: { once: true, margin: "-100px" }
  };

  const titleMaskVars = {
    initial: { y: "110%" },
    whileInView: { y: 0, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div className="sticky lg:sticky w-full z-10 top-20 lg:top-auto" style={{ top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? stickyTop : undefined }}>
      <div className={`border ${theme.border} overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 h-auto lg:h-[600px] flex flex-col lg:flex-row relative ${theme.bg}`}>
        
        <motion.div 
          variants={staggerVars} 
          initial="initial" 
          whileInView="whileInView"
          viewport={{ once: true, margin: "-100px" }}
          className="relative z-10 flex flex-col w-full lg:w-1/2 lg:border-r border-white/5"
        >
          
          <div className="flex justify-between items-start p-8 lg:p-12 pb-2 lg:pb-12">
            <motion.div variants={fadeUpVars} className="flex flex-col">
              <span className={`text-[10px] font-mono font-bold ${theme.accent} tracking-[0.2em] uppercase mb-1`}>
                INITIATE //
              </span>
              <span className={`text-[10px] font-mono ${theme.muted} uppercase tracking-[0.2em] leading-none`}>
                {subtitle || "SYSTEM_ACTIVE"}
              </span>
            </motion.div>
          </div>

          <div className="flex-1 flex flex-col p-8 lg:p-12 pt-4 lg:pt-8 w-full">
            <div className="flex-1 flex flex-col justify-end">
              <div className="overflow-hidden mb-6 pt-1 pb-1">
                <motion.h3 
                  variants={titleMaskVars} 
                  className={`text-4xl lg:text-6xl ${theme.titleWeight} tracking-tighter uppercase ${theme.text} leading-[0.9] max-w-sm lg:max-w-md`}
                >
                  {title}
                </motion.h3>
              </div>

              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 border-t ${theme.statsBorder} pt-8 mt-4`}>
                <motion.div variants={fadeUpVars} className="flex flex-col justify-between gap-8 md:gap-6 pr-4">
                  <p className={`text-base lg:text-sm ${theme.description} leading-relaxed font-light`}>
                    {description}
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVars} className="flex flex-col justify-center gap-6 p-8 lg:p-8 bg-[#FFC800] -mx-8 md:mx-0 md:h-full">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-black/60 mb-2 tracking-widest flex items-center gap-2">
                       <span className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></span>
                      {stat1Label || "Precision"}
                    </div>
                    <div className="text-3xl lg:text-4xl font-light tracking-tighter text-black w-full tabular-nums">
                       <AnimatedStat value={stat1Value} />
                    </div>
                  </div>
                  <div className="mt-2 text-black/20 w-full h-px"></div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-black/60 mb-2 tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black/40 rounded-full animate-pulse"></span>
                      {stat2Label || "Tolerance"}
                    </div>
                    <div className="text-3xl lg:text-4xl font-light tracking-tighter text-black w-full tabular-nums">
                       <AnimatedStat value={stat2Value} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="hidden lg:flex w-full lg:w-1/2 relative bg-[#050505] overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
          
          <motion.div 
            variants={imgVars} 
            initial="initial" 
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out z-0 pointer-events-none"
          >
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase text-center px-4">IMAGE_PLACEHOLDER // {id || index}</span>
              </div>
            )}
          </motion.div>
        </div>

        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
          <div className={`absolute top-0 right-0 w-[1px] h-4 ${theme.bracket}`}></div>
          <div className={`absolute top-0 right-0 h-[1px] w-4 ${theme.bracket}`}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
          <div className={`absolute bottom-0 left-0 w-[1px] h-4 ${theme.bracket}`}></div>
          <div className={`absolute bottom-0 left-0 h-[1px] w-4 ${theme.bracket}`}></div>
        </div>
      </div>
    </div>
  );
};

export default Card;
