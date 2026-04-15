import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrambleText from "./ScrambleText";

const About = () => {
  const ease = [0.16, 1, 0.3, 1];
  const imageRef = useRef(null);
  const secondaryImageRef = useRef(null);
  const [isSectionInView, setIsSectionInView] = useState(false);

  // Scroll-driven shutter reveal for Hero Image
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start 80%", "center center"],
  });

  const insetX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const insetY = useTransform(scrollYProgress, [0, 1], [15, 0]);
  const clipPathHero = useTransform(
    [insetX, insetY],
    ([x, y]) => `inset(${y}% ${x}% ${y}% ${x}%)`
  );

  // Scroll-driven shutter reveal for Secondary Image
  const { scrollYProgress: secondaryScrollProgress } = useScroll({
    target: secondaryImageRef,
    offset: ["start 90%", "center center"],
  });

  const secInsetX = useTransform(secondaryScrollProgress, [0, 1], [20, 0]);
  const secInsetY = useTransform(secondaryScrollProgress, [0, 1], [30, 0]);
  const clipPathSec = useTransform(
    [secInsetX, secInsetY],
    ([x, y]) => `inset(${y}% ${x}% ${y}% ${x}%)`
  );

  // --- HIGH FIDELITY ANIMATION VARIANTS (from Hero) ---
  
  const maskVars = {
    initial: { y: "110%" },
    animate: { 
      y: 0,
      transition: { duration: 1.8, ease }
    }
  };

  const highDetailFade = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease }
    }
  };

  const staggerContainer = {
    animate: { 
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  return (
    <section id="about" className="relative w-full bg-[#080808] overflow-hidden z-20 border-t border-white/5">

      <div className="relative w-full max-w-[1700px] mx-auto px-6 md:px-8 lg:px-12 py-32 lg:py-48">

        {/* === MAIN GRID: Text Left, Image Right === */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-0 items-start">

          {/* --- LEFT: Text Content --- */}
          <div className="lg:col-span-6 xl:col-span-5 flex flex-col justify-center relative z-20">
            <motion.div 
              initial="initial"
              whileInView="animate"
              onViewportEnter={() => setIsSectionInView(true)}
              viewport={{ once: true, amount: 0.2 }}
              variants={staggerContainer}
            >
              {/* System Status Tag */}
              <motion.div variants={highDetailFade} className="flex items-center gap-3 mb-8">
                <motion.div 
                  animate={{ opacity: [1, 0.3, 1] }} 
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.5)]"
                ></motion.div>
                <span className="font-mono text-[10px] tracking-[0.3em] text-[#FFC800] uppercase">
                  <ScrambleText text="System_Status: Operational" trigger={isSectionInView} speed={0.3} />
                </span>
              </motion.div>

              {/* Main Headline - Cinematic Mask Reveal with Overlap (No Clamping) */}
              <motion.h2 
                className="text-3xl md:text-4xl lg:text-5xl xl:text-[5rem] font-bold uppercase leading-[0.85] tracking-tight text-white mb-10 relative z-30 pointer-events-none"
              >
                <div className="overflow-hidden w-[150%]">
                  <motion.span variants={maskVars} className="block whitespace-nowrap">Precision</motion.span>
                </div>
                <div className="overflow-hidden w-[150%]">
                  <motion.span variants={maskVars} className="block text-white/30 whitespace-nowrap">Architect.</motion.span>
                </div>
              </motion.h2>

              {/* Body Paragraph - High Detail Fade with added delay */}
              <motion.p 
                variants={highDetailFade}
                transition={{ duration: 1.8, delay: 0.6, ease }}
                className="text-sm md:text-base text-white/60 uppercase leading-[1.8] font-mono tracking-tight max-w-lg mb-12"
              >
                We do not simply manufacture; we architect the microscopic. Our process begins where others find their limits. By utilizing ultra-high-speed CNC machining and EDM wire technology, we maintain tolerances that define the industry standard for aerospace and clinical applications.
              </motion.p>

              {/* Bottom Metadata */}
              <motion.div variants={highDetailFade} className="flex items-center gap-4">
                <div className="w-2 h-2 bg-[#FFC800] rounded-full"></div>
                <div className="h-px w-12 bg-white/20"></div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/30 uppercase">
                  Sub_Index [001] // SKP_Operations
                </span>
              </motion.div>

              {/* Coordinates */}
              <motion.div variants={highDetailFade} className="mt-6 flex gap-8 mb-16">
                <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">Coord_X: 41.9981° N</span>
                <span className="font-mono text-[9px] tracking-widest text-white/20 uppercase">Coord_Y: 21.4254° E</span>
              </motion.div>
            </motion.div>

            {/* --- SECONDARY IMAGE --- */}
            <div 
              ref={secondaryImageRef}
              className="relative w-full max-w-md"
            >
              <motion.div
                style={{ clipPath: clipPathSec }}
                className="relative aspect-video bg-[#111] overflow-hidden border border-white/5 shadow-xl shadow-black/40"
              >
                <img 
                  src="/images/2.avif" 
                  alt="Engineering Detail" 
                  className="w-full h-full object-cover grayscale contrast-125" 
                />
                
                {/* Secondary HUD */}
                <div className="absolute top-4 left-4 font-mono text-[8px] tracking-widest text-[#FFC800] uppercase">
                  <ScrambleText text="Section_Detail // 02" trigger={isSectionInView} speed={0.4} />
                </div>
                <div className="absolute bottom-4 left-4 w-4 h-4 border-l border-b border-white/30"></div>
              </motion.div>
            </div>

            {/* --- PRODUCTION DESCRIPTION --- */}
            <motion.div 
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={highDetailFade}
              className="mt-8 max-w-md"
            >
              <h4 className="font-mono text-[10px] tracking-[0.3em] text-[#FFC800] uppercase mb-4">
                <ScrambleText text="Production // Infrastructure" trigger={isSectionInView} speed={0.3} />
              </h4>
              <p className="text-xs md:text-sm text-white/40 uppercase font-mono tracking-tight leading-relaxed">
                Utilizing high-speed CNC centers and EDM wire technology, our production line maintains a constant environment for material stability and micrometer-level calibration.
              </p>
            </motion.div>
          </div>


          {/* --- RIGHT: Hero Image --- */}
          <div 
            ref={imageRef}
            className="lg:col-span-6 xl:col-span-7 relative lg:-mr-12"
          >
            {/* Scroll-driven shutter wrapper */}
            <motion.div
              style={{ clipPath: clipPathHero }}
              className="relative w-full aspect-[4/3] lg:aspect-square bg-[#111] overflow-hidden border border-white/5 shadow-2xl shadow-black/60"
            >
              <img 
                src="/images/1.avif" 
                alt="Precision Machined Component" 
                className="w-full h-full object-cover grayscale contrast-125 brightness-75"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-[#080808]/40"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/60 via-transparent to-transparent"></div>

              {/* Technical Data Overlay — Top Right */}
              <div className="absolute top-6 right-6 text-right space-y-1">
                <div className="font-mono text-[9px] tracking-widest text-white/70 uppercase">
                  Tolerance: <span className="text-[#FFC800]">±0.005MM</span>
                </div>
                <div className="font-mono text-[9px] tracking-widest text-white/70 uppercase">
                  Material: <span className="text-white/50">Ti-6Al-4V</span>
                </div>
                <div className="font-mono text-[9px] tracking-widest text-white/70 uppercase">
                  Finish: <span className="text-white/50">RA 0.4</span>
                </div>
              </div>

              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-6 h-6 pointer-events-none">
                <div className="absolute top-0 left-0 w-px h-full bg-white/30"></div>
                <div className="absolute top-0 left-0 w-full h-px bg-white/30"></div>
              </div>
              <div className="absolute bottom-4 right-4 w-6 h-6 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-px h-full bg-white/30"></div>
                <div className="absolute bottom-0 right-0 w-full h-px bg-white/30"></div>
              </div>

              {/* Bottom Coordinates */}
              <div className="absolute bottom-6 left-6 flex flex-col gap-1">
                <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">Coord_X: 41.9981° N</span>
                <span className="font-mono text-[8px] tracking-widest text-white/40 uppercase">Coord_Y: 21.4254° E</span>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
