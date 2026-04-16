import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import TechGrid from "./TechGrid";

const Specs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  const springConfig = { stiffness: 60, damping: 20, mass: 1, restDelta: 0.001 };
  const springProgress = useSpring(scrollYProgress, springConfig);

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
            className="bg-[#FFC800] rounded-none p-8 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl shadow-black/10 group"
          >
             <TechGrid dotColor="rgba(0,0,0,0.25)" opacity="opacity-60" maskPosition="center center" />
             
             <div className="relative z-10">
                <div className="flex justify-between items-start">
                   <div className="flex flex-col">
                      <span className="text-tech-label font-mono font-bold text-black mb-1">
                        INITIATE //
                      </span>
                      <h2 className="text-fluid-h2 font-mono tracking-tightest text-black font-bold leading-none">
                         01
                      </h2>
                   </div>
                   <div className="w-10 h-10 rounded-none bg-black text-[#FFC800] flex items-center justify-center shadow-lg group-hover:bg-white group-hover:text-black transition-colors duration-300">
                     <ArrowRight size={20} />
                   </div>
                </div>
                <p className="mt-10 text-black/80 font-mono text-fluid-body tracking-tight max-w-[340px]">
                   TURNING TODAY'S AMBITIONS INTO TOMORROW'S REALITIES THROUGH HYPER-SPEED 5-AXIS CNC MANUFACTURING.
                </p>
             </div>

             {/* Bottom nested blocks */}
             <div className="relative z-10 flex flex-col gap-4 mt-16 lg:mt-auto">
                <div className="bg-black/5 rounded-none p-6 flex justify-between items-center group/btn hover:bg-black/10 transition-colors border border-black/5">
                   <span className="text-black font-mono font-bold text-tech-label leading-tight">TOMORROW DOESN'T WAIT. NEITHER DO WE.</span>
                   <div className="w-8 h-8 rounded-none bg-black text-[#FFC800] flex items-center justify-center">
                      <span className="text-xs font-bold">W</span>
                   </div>
                </div>
                <div className="grid grid-cols-5 gap-4">
                   <div className="col-span-3 bg-black/5 rounded-none p-6 flex flex-col justify-between h-36 border border-black/5">
                      <p className="font-mono text-[10px] uppercase text-black/60 tracking-tight leading-relaxed">
                         MILLING IS WHERE AMBITION MEETS PRECISION. WITH A VISION BUILT ON EXACTNESS, WE CREATE SOLUTIONS THAT REDEFINE CAPABILITY.
                      </p>
                      <h3 className="font-mono text-fluid-h3 font-bold text-black mt-2">SYS_01</h3>
                   </div>
                   <div className="col-span-2 bg-black/5 rounded-none p-6 flex items-end justify-start h-36 border border-black/5">
                      <h3 className="font-mono text-xl font-bold text-black uppercase">V_01</h3>
                   </div>
                </div>
             </div>
          </motion.div>

          {/* Card 02: LATHING (Middle Column) */}
          <motion.div 
            style={{ y: y2 }}
            className="bg-[#111111] border border-white/10 rounded-none p-8 lg:p-10 flex flex-col justify-between h-full relative overflow-hidden shadow-2xl shadow-black/80 group"
          >
             <TechGrid dotColor="rgba(255,255,255,0.15)" opacity="opacity-50" maskPosition="center bottom" />
             
             <div className="relative z-10 space-y-8 max-w-[340px]">
                <div className="flex flex-col">
                   <span className="text-tech-label font-mono font-bold text-[#FFC800] mb-4 flex items-center gap-2">
                     <span className="w-1.5 h-1.5 bg-[#FFC800] rounded-full animate-pulse"></span>
                     LIVE_CALIBRATION //
                   </span>
                   <p className="text-white font-mono text-fluid-h3 leading-tight tracking-tightest">
                      AT OSA, WE BELIEVE PRECISION TURNING IS NOT SOMETHING WE WAIT FOR—IT'S SOMETHING WE CALIBRATE.
                   </p>
                </div>
                <p className="text-white/50 font-mono text-fluid-body tracking-tight">
                   WE ARE DRIVEN BY TOLERANCE VERIFIED SYSTEMS, GUIDED BY VISION, AND POWERED BY PRECISION ENGINEERING.
                </p>
                <p className="text-white/30 font-mono text-[10px] lg:text-[11px] leading-relaxed uppercase tracking-wider">
                   EVERY AXIS IS A POSSIBILITY. EVERY CHALLENGE IS AN OPPORTUNITY TO INNOVATE WITHOUT LIMITS.
                </p>
             </div>

             <div className="relative z-10 flex items-center gap-4 mt-16 lg:mt-auto">
                <div className="text-white">
                   <DotMatrixSquare />
                </div>
                <h2 className="text-fluid-h2 font-mono tracking-tightest text-white font-bold leading-none">
                  A / 02
                </h2>
             </div>
          </motion.div>

          {/* Card 03: EDM & INQUIRY (Right Column) */}
          <motion.div 
            style={{ x: x3 }}
            className="bg-white rounded-none p-4 flex flex-col gap-4 h-full overflow-hidden shadow-2xl shadow-black/10"
          >
             {/* Section 1: EDM (Image Area) */}
             <div className="bg-[#151515] rounded-none relative overflow-hidden flex-grow group shrink-0 h-[40%]">
                <img 
                  src="/images/2.avif" 
                  alt="EDM Machinery" 
                  className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-luminosity group-hover:scale-105 group-hover:opacity-80 transition-all duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                   <span className="text-[10px] font-mono font-bold text-[#FFC800] tracking-[0.2em] uppercase mb-2">
                     PROCESS // EDM
                   </span>
                   <h3 className="text-white text-4xl lg:text-5xl font-bold tracking-tighter uppercase">WIRE EROSION</h3>
                </div>
             </div>

             {/* Section 2: In-between horizontal bar */}
             <div className="bg-[#f2f2f2] rounded-none p-6 lg:px-8 py-6 flex justify-between items-center group/mid cursor-pointer hover:bg-[#FFC800] transition-colors duration-300">
                <span className="text-black font-mono font-bold text-xs tracking-widest uppercase">POWERING WHAT'S NEXT. A GLANCE.</span>
                <div className="w-8 h-8 rounded-none bg-[#FFC800] text-black flex items-center justify-center group-hover/mid:bg-black group-hover/mid:text-[#FFC800] transition-colors duration-300">
                   <span className="text-xs font-bold transform -rotate-45 group-hover/mid:rotate-0 transition-transform duration-300">
                      W
                   </span>
                </div>
             </div>

             {/* Section 3: INQUIRY */}
             <div className="bg-[#f2f2f2] rounded-none p-8 flex-grow flex flex-col justify-between shadow-inner shrink-0 h-[35%] relative overflow-hidden">
                <TechGrid dotColor="rgba(0,0,0,0.2)" opacity="opacity-50" maskPosition="center center" />
                 <div className="flex items-center gap-4">
                    <div className="text-black">
                       <DotMatrixSquare />
                    </div>
                    <h2 className="text-4xl font-mono tracking-tighter text-black font-medium leading-none uppercase">
                      W / 04
                    </h2>
                 </div>
                <div className="flex flex-col gap-4">
                   <p className="text-black/60 font-mono text-[11px] leading-relaxed uppercase tracking-tight max-w-[90%]">
                      OUR EXPERTISE BLENDS STRATEGY, ADVANCED MECHANICAL DESIGN, AND TECHNOLOGY HELPING ORGANIZATIONS UNLOCK PRODUCTION GROWTH.
                   </p>
                   <a 
                     href="#contact" 
                     className="mt-2 text-black font-mono font-bold uppercase text-[10px] tracking-[0.3em] hover:text-[#FFC800] transition-colors flex items-center gap-2 group/cta"
                   >
                     PROJECT_SPEC [04] //
                     <ArrowRight size={14} className="group-hover/cta:translate-x-2 transition-transform duration-300" />
                   </a>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Specs;
