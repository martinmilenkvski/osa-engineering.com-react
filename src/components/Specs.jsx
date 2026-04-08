import React, { useState, useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowRight } from "lucide-react";
import ScrambleText from "./ScrambleText";

const SpecCard = ({ number, title, subtitle, info, color = "bg-[#161616]", textColor = "text-white", isDark = true, bgImage = null }) => {
  const [isInView, setIsInView] = useState(false);
  const ease = [0.16, 1, 0.3, 1];
  
  // --- HERO STYLE ANIMATION VARIANTS ---
  const maskVars = {
    initial: { y: "110%" },
    whileInView: { 
      y: 0,
      transition: { duration: 1.8, delay: 0.8, ease }
    }
  };

  return (
    <motion.div 
      onViewportEnter={() => setIsInView(true)}
      viewport={{ once: true, amount: 0.3 }}
      className={`relative p-8 lg:p-12 flex flex-col justify-between overflow-hidden h-full min-h-[320px] lg:min-h-[400px] group border-collapse rounded-sm`}
    >
      {/* PHASE 1: BORDER (Animated) */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute top-0 left-0 w-full h-px bg-white/10 origin-left z-20"
      />
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute bottom-0 left-0 w-full h-px bg-white/10 origin-right z-20"
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute top-0 left-0 w-px h-full bg-white/10 origin-top z-20"
      />
      <motion.div 
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 1, ease }}
        className="absolute top-0 right-0 w-px h-full bg-white/10 origin-bottom z-20"
      />

      {/* PHASE 2: BACKGROUND (Animated) */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5, ease }}
        className={`absolute inset-0 ${color} z-0 transition-colors duration-500`}
      />

      {/* OPTIONAL BACKGROUND IMAGE */}
      {bgImage && (
        <motion.div 
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 0.08, scale: 1 }}
          transition={{ duration: 2, delay: 0.8, ease }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
           <img 
             src={bgImage} 
             alt="" 
             className="w-full h-full object-cover grayscale mix-blend-overlay"
           />
        </motion.div>
      )}

      {/* LARGE BACKGROUND ICON FOR CTA */}
      {number === "--" && (
        <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-[0.05] pointer-events-none z-0">
          <svg width="240" height="240" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round" className="text-black">
            <path d="m9.8 12 5 5"/>
            <path d="m14.2 12-5 5"/>
            <circle cx="12" cy="7" r="1"/>
            <path d="M12 7V3"/>
            <path d="m15.5 17.5 4.5 4.5"/>
            <path d="m8.5 17.5-4.5 4.5"/>
            <path d="M22 22s-2-2-2-4q0-1.5.5-3t.5-3.5c0-2.5-2.5-4-5-4s-5 1.5-5 4c0 2 0 4 .5 5.5s.5 3 .5 4.5q0 2-2 4"/>
          </svg>
        </div>
      )}

      {/* PHASE 3: CONTENT (Animated) */}
      <div className="relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2, ease }}
          className={`font-mono text-[10px] tracking-[0.3em] uppercase mb-4 block ${isDark ? "text-[#FFC800]" : "text-black/40"}`}
        >
          <ScrambleText text={`${number} // ${title}`} trigger={isInView} />
        </motion.span>
        
        <motion.h3 
          className={`text-4xl lg:text-5xl font-bold uppercase leading-none tracking-tighter ${textColor} antialiased`}
        >
          <div className="overflow-hidden">
             <motion.div variants={maskVars} className="block">{subtitle}</motion.div>
          </div>
        </motion.h3>
      </div>

      <div className="relative z-10 flex flex-col border-t border-white/5 pt-8 mt-12 overflow-hidden">
         {info && (
           <motion.div
             initial={{ opacity: 0, x: -10 }}
             whileInView={{ opacity: 0.4, x: 0 }}
             transition={{ duration: 1, delay: 1.4, ease }}
             className="flex flex-col gap-4"
           >
             <p className={`font-mono text-[9px] tracking-[0.2em] uppercase ${textColor}`}>
               {info}
             </p>
             {title === "EDM" && (
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "60%" }}
                  transition={{ duration: 1.5, delay: 1.8, ease }}
                  className="h-1 bg-[#FFC800]"
                />
             )}
           </motion.div>
         )}
      </div>
    </motion.div>
  );
};

const Specs = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });

  // Stiffer spring for a more "rigid mechanical" feel
  const springConfig = { stiffness: 60, damping: 20, mass: 1, restDelta: 0.001 };
  const springProgress = useSpring(scrollYProgress, springConfig);

  // GEOMETRIC STRAIGHT-LINE TRANSFORM MAPPINGS (Cardinal Directions)
  // Docking accelerated to reach 0,0 within first 40% of scroll
  // Card 01: Pure Horizontal from Left
  const x1 = useTransform(springProgress, [0, 0.4], [-200, 0]);

  // Card 02: Pure Vertical from Top
  const y2 = useTransform(springProgress, [0, 0.45], [-150, 0]);

  // Card 03: Pure Horizontal from Right
  const x3 = useTransform(springProgress, [0, 0.5], [200, 0]);

  // Card 04: Pure Vertical from Bottom
  const y4 = useTransform(springProgress, [0, 0.55], [150, 0]);

  return (
    <section 
      id="specs" 
      ref={containerRef}
      className="relative w-full bg-[#080808] z-20 py-24 lg:py-48 overflow-hidden border-t border-white/5"
    >
      <div className="w-full max-w-[1700px] mx-auto px-6 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-collapse">
          
          {/* Card 01: MILLING (Left Pivot) - From Left */}
          <motion.div 
            style={{ x: x1 }}
            className="lg:col-span-6 lg:row-span-2 relative z-30 shadow-2xl shadow-black/40"
          >
            <SpecCard 
              number="01"
              title="MILLING"
              subtitle={<>5-AXIS CNC <br className="hidden md:block"/> HYPER_SPEED</>}
              info="MAX_ENVELOPE: 650MM X 520MM"
              color="bg-[#1a1a1a]"
              bgImage="/images/1.avif"
            />
          </motion.div>

          {/* Card 02: LATHING (Middle Top) - From Top */}
          <motion.div 
            style={{ y: y2 }}
            className="lg:col-span-3 relative z-20 shadow-xl shadow-black/20"
          >
            <SpecCard 
              number="02"
              title="LATHING"
              subtitle={<>PRECISION <br className="hidden md:block"/> TURNING</>}
              info="SYSTEMS_CALIBRATED"
              color="bg-[#f0f0f0]"
              textColor="text-black"
              isDark={false}
            />
          </motion.div>

          {/* Card 03: EDM (Right Top) - From Right */}
          <motion.div 
            style={{ x: x3 }}
            className="lg:col-span-3 relative z-20 shadow-xl shadow-black/20"
          >
            <SpecCard 
              number="03"
              title="EDM"
              subtitle={<>WIRE <br className="hidden md:block"/> EROSION</>}
              info="TOLERANCE_VERIFIED"
              bgImage="/images/2.avif"
            />
          </motion.div>

          {/* Card 04: PROJECT SPEC (Right Bottom Wide) - From Bottom */}
          <motion.a 
            href="#contact"
            whileHover="hover"
            style={{ y: y4 }}
            className="lg:col-span-6 cursor-pointer block group h-full relative z-30 shadow-2xl shadow-black/40"
          >
            <SpecCard 
              number="--"
              title="INQUIRY"
              subtitle={<>PROJECT_SPEC? <ArrowRight className="inline-block ml-4 w-10 h-10 group-hover:translate-x-4 transition-transform duration-500" /></>}
              color="bg-[#FFC800]"
              textColor="text-black"
              isDark={false}
            />
          </motion.a>

        </div>
      </div>
    </section>
  );
};

export default Specs;
