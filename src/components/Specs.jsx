import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight, ToggleRight } from "lucide-react";
import TechGrid from "./TechGrid";

const Specs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const springConfig = { stiffness: 60, damping: 20, mass: 1, restDelta: 0.001 };
  const springProgress = useSpring(scrollYProgress, springConfig);

  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2, delayChildren: 0.2 } }
  };

  const fadeUpVars = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } }
  };

  // GEOMETRIC STRAIGHT-LINE TRANSFORM MAPPINGS
  // Card 1: From Left
  const x1 = useTransform(springProgress, [0, 0.4], [-150, 0]);
  // Card 2: From Top
  const y2 = useTransform(springProgress, [0, 0.45], [-150, 0]);
  // Card 3: From Right
  const x3 = useTransform(springProgress, [0, 0.5], [150, 0]);

  // Dot matrix decorative element
  const DotMatrixSquare = () => (
    <div className="grid grid-cols-3 gap-1">
       {[...Array(9)].map((_, i) => (
         <div key={i} className="w-[3px] h-[3px] bg-current rounded-full" />
       ))}
    </div>
  );

  return (
    <section 
      id="specs" 
      ref={containerRef}
      className="relative w-full bg-[#080808] z-20 py-24 lg:py-48 overflow-hidden"
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 lg:h-[850px]">
          
          {/* Card 01: MILLING (Left Column) */}
          <motion.div 
            style={{ x: x1 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#FFC800] rounded-none p-8 lg:p-10 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl shadow-black/10 group"
          >
             <TechGrid dotColor="rgba(0,0,0,0.25)" opacity="opacity-60" maskPosition="center center" />
             
             <div className="relative z-10">
                <div className="flex justify-between items-start">
                   <motion.div variants={fadeUpVars} className="flex flex-col">
                      <span className="text-tech-label font-mono font-bold text-black mb-1">
                        INITIATE //
                      </span>
                      <h2 className="text-fluid-h2 font-mono tracking-tightest text-black font-bold leading-none">
                         01
                      </h2>
                   </motion.div>
                   <motion.div variants={fadeUpVars} className="w-10 h-10 rounded-none bg-black text-[#FFC800] flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                     <ArrowRight size={20} />
                   </motion.div>
                </div>
                <motion.p variants={fadeUpVars} className="mt-10 text-black/80 font-mono text-fluid-body tracking-tight max-w-[340px]">
                   TURNING TODAY'S AMBITIONS INTO TOMORROW'S REALITIES THROUGH HYPER-SPEED 5-AXIS CNC MANUFACTURING.
                </motion.p>
             </div>

             {/* Bottom nested blocks */}
             <div className="relative z-10 flex flex-col gap-4 mt-16 lg:mt-auto">
                <motion.div variants={fadeUpVars} className="bg-black/5 rounded-none p-6 flex justify-between items-center group/btn hover:bg-black/10 transition-colors border border-black/5">
                   <span className="text-black font-mono font-bold text-tech-label leading-tight">TOMORROW DOESN'T WAIT. NEITHER DO WE.</span>
                   <div className="w-8 h-8 rounded-none bg-black text-[#FFC800] flex items-center justify-center">
                      <ToggleRight size={16} />
                   </div>
                </motion.div>
                <motion.div variants={fadeUpVars} className="grid grid-cols-1 md:grid-cols-5 gap-4">
                   <div className="md:col-span-3 bg-black/5 rounded-none p-6 flex flex-col justify-between min-h-[144px] border border-black/5">
                      <p className="font-mono text-[10px] uppercase text-black/60 tracking-tight leading-relaxed">
                         MILLING IS WHERE AMBITION MEETS PRECISION. WITH A VISION BUILT ON EXACTNESS, WE CREATE SOLUTIONS THAT REDEFINE CAPABILITY.
                      </p>
                      <h3 className="font-mono text-fluid-h3 font-bold text-black mt-4 md:mt-2">SYS_01</h3>
                   </div>
                   <div className="md:col-span-2 bg-black/5 rounded-none p-6 flex items-end justify-start min-h-[144px] border border-black/5">
                      <h3 className="font-mono text-xl font-bold text-black uppercase">V_01</h3>
                   </div>
                </motion.div>
             </div>
          </motion.div>

          {/* Card 02: LATHING (Middle Column) */}
          <motion.div 
            style={{ y: y2 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-[#111111] border border-white/10 rounded-none p-8 lg:p-10 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl shadow-black/80 group"
          >
             <TechGrid dotColor="rgba(255,255,255,0.15)" opacity="opacity-50" maskPosition="center bottom" />
             
             <div className="relative z-10 space-y-8 max-w-[340px]">
                <motion.div variants={fadeUpVars} className="flex flex-col">
                   <span className="text-tech-label font-mono font-bold text-[#FFC800] mb-4 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[#FFC800] rounded-full animate-pulse"></span>
                     LIVE_CALIBRATION //
                   </span>
                   <p className="text-white font-mono text-fluid-h3 leading-tight tracking-tightest">
                      AT OSA, WE BELIEVE PRECISION TURNING IS NOT SOMETHING WE WAIT FOR—IT'S SOMETHING WE CALIBRATE.
                   </p>
                </motion.div>
                <motion.p variants={fadeUpVars} className="text-white/50 font-mono text-fluid-body tracking-tight">
                   WE ARE DRIVEN BY TOLERANCE VERIFIED SYSTEMS, GUIDED BY VISION, AND POWERED BY PRECISION ENGINEERING.
                </motion.p>
                <motion.p variants={fadeUpVars} className="text-white/30 font-mono text-[10px] lg:text-[11px] leading-relaxed uppercase tracking-wider">
                   EVERY AXIS IS A POSSIBILITY. EVERY CHALLENGE IS AN OPPORTUNITY TO INNOVATE WITHOUT LIMITS.
                </motion.p>
             </div>

             <div className="relative z-10 flex items-center gap-4 mt-16 lg:mt-auto">
                <motion.div variants={fadeUpVars} className="text-white">
                   <DotMatrixSquare />
                </motion.div>
                <motion.h2 variants={fadeUpVars} className="text-fluid-h2 font-mono tracking-tightest text-white font-bold leading-none">
                  A / 02
                </motion.h2>
             </div>
          </motion.div>

          {/* Card 03: EDM & INQUIRY (Right Column) */}
          <motion.div 
            style={{ x: x3 }}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="bg-white border border-black/5 rounded-none p-8 lg:p-10 flex flex-col h-full relative overflow-hidden shadow-2xl shadow-black/10 group"
          >
             <TechGrid dotColor="rgba(0,0,0,0.15)" opacity="opacity-40" maskPosition="center top" />
             
             <div className="relative z-10 flex flex-col h-full">
                {/* Header Section */}
                <div className="flex justify-between items-start">
                   <motion.div variants={fadeUpVars} className="flex flex-col">
                      <span className="text-tech-label font-mono font-bold text-black mb-1">
                        PROCESS_EDM //
                      </span>
                      <h2 className="text-fluid-h2 font-mono tracking-tightest text-black font-bold leading-none">
                         03
                      </h2>
                   </motion.div>
                   <motion.div variants={fadeUpVars} className="text-black/20">
                      <DotMatrixSquare />
                   </motion.div>
                </div>
                
                <motion.p variants={fadeUpVars} className="mt-10 text-black/80 font-mono text-fluid-body tracking-tight max-w-[340px]">
                   WIRE EROSION AND EXACTNESS. BLENDING STRATEGY, ADVANCED MECHANICAL DESIGN, AND TECHNOLOGY TO UNLOCK PRODUCTION GROWTH.
                </motion.p>

                {/* Editorial Image Block */}
                <motion.div variants={fadeUpVars} className="mt-8 mb-8 w-full h-[200px] lg:flex-grow lg:h-auto relative bg-neutral-100 border border-black/5 overflow-hidden">
                   <img 
                     src="/images/2.avif" 
                     alt="EDM Machinery" 
                     className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80 group-hover:scale-105 transition-transform duration-700 ease-out"
                   />
                </motion.div>

                {/* Bottom nested blocks */}
                <div className="flex flex-col gap-4 mt-auto">
                   <motion.div variants={fadeUpVars} className="bg-black/5 rounded-none p-6 flex justify-between items-center group hover:bg-[#FFC800] transition-colors duration-300 border border-black/5 cursor-default">
                      <span className="text-black font-mono font-bold text-tech-label leading-tight">POWERING WHAT'S NEXT. A GLANCE.</span>
                      <div className="w-8 h-8 rounded-none bg-black text-[#FFC800] flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                         <ToggleRight size={16} />
                      </div>
                   </motion.div>
                   
                   <motion.a 
                     variants={fadeUpVars}
                     href="#contact" 
                     className="bg-black text-[#FFC800] hover:bg-[#FFC800] hover:text-black rounded-none p-6 flex justify-between items-center transition-colors duration-300 shadow-lg group"
                   >
                      <div className="flex flex-col">
                        <span className="font-mono font-bold text-tech-label uppercase transition-colors">PROJECT_SPEC [04] //</span>
                        <span className="opacity-50 font-mono text-[10px] mt-1 transition-colors uppercase">Initiate Inquiry</span>
                      </div>
                      <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform duration-300" />
                   </motion.a>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Specs;
