import React, { useState } from "react";
import { ArrowUpRight, Plus, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ScrambleText from "./ScrambleText";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCtaHovered, setIsCtaHovered] = useState(false);
  
  // --- CINEMATIC ANIMATION VARIANTS ---
  
  // Custom premium easing
  const ease = [0.16, 1, 0.3, 1];

  // Sequencing:
  // 1. Lines start at 0s
  // 2. Crosshairs at 1.2s
  // 3. Navigation at 1.5s (staggered)
  // 4. Title words at 2.0s (staggered)
  // 5. Info blocks & CTA at 2.5s

  const navContainerVars = {
    animate: { 
      transition: { staggerChildren: 0.15, delayChildren: 1.5 }
    }
  };

  const titleContainerVars = {
    animate: { 
      transition: { staggerChildren: 0.2, delayChildren: 2.0 }
    }
  };

  const itemFadeUpVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.8, ease }
    }
  };

  const navItemVars = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1.5, ease }
    }
  };

  const lineVars = {
    initial: { scaleX: 0, scaleY: 0 },
    animate: { 
      scaleX: 1, 
      scaleY: 1,
      transition: { duration: 2.5, ease }
    }
  };

  const wordVars = {
    initial: { y: "110%" },
    animate: { 
      y: 0,
      transition: { duration: 1.8, ease }
    }
  };

  const plusVars = {
    initial: { opacity: 0, scale: 0, rotate: -90 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 1.2, delay: 1.2, ease }
    }
  };

  const videoFadeVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.4,
      transition: { duration: 3.5, delay: 0.8, ease: "linear" }
    }
  };

  const menuLinks = [
    { label: "SERVICES", href: "#services" },
    { label: "SUCCESS", href: "#success" },
    { label: "GALLERY", href: "#gallery" },
    { label: "CONTACT", href: "#contact" },
  ];

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      className="min-h-[100svh] lg:h-screen w-full relative flex flex-col lg:block overflow-x-hidden lg:overflow-hidden bg-[#080808]"
    >

      {/* --- THE WIREFRAME: Editorial Grid Lines --- */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        <motion.div 
          variants={lineVars}
          className="absolute left-[35%] top-0 bottom-0 w-px bg-white/10 hidden lg:block origin-top"
        ></motion.div>
        <motion.div 
          variants={lineVars}
          className="absolute left-[70%] top-0 bottom-0 w-px bg-white/10 hidden lg:block origin-top"
        ></motion.div>
        <motion.div 
          variants={lineVars}
          className="absolute top-[65%] left-0 right-0 h-px bg-white/10 hidden lg:block origin-left"
        ></motion.div>

        {/* Crosshair Intersections */}
        <motion.div variants={plusVars} className="absolute left-[35%] top-[65%] -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <Plus size={16} className="text-white/40" />
        </motion.div>
        <motion.div variants={plusVars} className="absolute left-[70%] top-[65%] -translate-x-1/2 -translate-y-1/2 hidden lg:block">
          <Plus size={16} className="text-white/40" />
        </motion.div>
      </div>

      {/* --- BACKGROUND VIDEO --- */}
      <div className="absolute inset-0 z-0 bg-[#080808]">
        <motion.div 
          variants={videoFadeVars}
          className="w-full h-full"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover grayscale mix-blend-lighten"
            src="/Cnc_hero.mp4"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/80 to-transparent lg:hidden"></div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2.2, duration: 1, ease }}
          className="absolute top-8 right-6 lg:right-8 hidden lg:flex items-center gap-2 z-10"
        >
          <motion.div 
            animate={{ opacity: [1, 0.4, 1] }} 
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="w-1.5 h-1.5 bg-[#FFC800] rounded-full"
          ></motion.div>
          <span className="text-[10px] lg:text-[13px] font-mono tracking-widest text-white/50 uppercase">CNC_Active</span>
        </motion.div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="relative lg:absolute top-0 w-full flex items-start p-6 lg:p-8 z-30 hero-element">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease }}
          className="w-[70%] lg:w-[35%] flex items-center gap-3"
        >
          <img 
            src="/logos/Logo-y.svg" 
            alt="O.S.A Logo" 
            className="h-8 lg:h-10 w-auto object-contain"
          />
          <div className="flex flex-col">
            <span className="text-2xl font-bold uppercase tracking-[0.15em] leading-none">
              O.S.A.<span className="text-[#FFC800]"></span>
            </span>
            <span className="text-[8px] lg:text-[9px] font-mono tracking-[0.2em] text-[#FFC800] uppercase mt-1">
              Engineering M.K
            </span>
          </div>
        </motion.div>

        {/* Desktop Nav */}
        <motion.div 
          variants={navContainerVars}
          className="hidden lg:flex w-[35%] items-center gap-10 text-[13px] font-mono tracking-widest text-white/50 pl-8"
        >
          <motion.a variants={navItemVars} href="#services" className="hover:text-white transition-colors">/ SERVICES</motion.a>
          <motion.a variants={navItemVars} href="#success" className="hover:text-white transition-colors">/ SUCCESS</motion.a>
          <motion.a variants={navItemVars} href="#gallery" className="hover:text-white transition-colors">/ GALLERY</motion.a>
        </motion.div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex-1 flex justify-end">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col gap-1.5 items-end group cursor-pointer"
          >
            <motion.div 
              animate={isMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-[#FFC800] origin-center"
            ></motion.div>
            <motion.div 
              animate={isMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0 }}
              className="w-4 h-[1.5px] bg-white"
            ></motion.div>
            <motion.div 
              animate={isMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
              className="w-6 h-[1.5px] bg-[#FFC800] origin-center"
            ></motion.div>
          </button>
        </div>
      </nav>

      {/* --- MOBILE OVERLAY --- */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.8, ease }}
            className="fixed inset-0 z-[100] bg-[#050505] p-6 pt-32 flex flex-col gap-12 lg:hidden"
          >
             {/* Large Nav Links */}
             <div className="flex flex-col gap-6">
               {menuLinks.map((link, idx) => (
                 <motion.a
                   key={idx}
                   href={link.href}
                   onClick={() => setIsMenuOpen(false)}
                   initial={{ opacity: 0, x: -30 }}
                   animate={{ opacity: 1, x: 0 }}
                   transition={{ delay: 0.2 + idx * 0.1, duration: 0.8, ease }}
                   className="text-5xl font-bold tracking-normal uppercase text-white/40 hover:text-[#FFC800] transition-colors"
                 >
                   {link.label}<span className="text-[#FFC800]">.</span>
                 </motion.a>
               ))}
             </div>

             {/* Footer Info in Menu */}
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               transition={{ delay: 0.6 }}
               className="mt-auto border-t border-white/10 pt-8"
             >
                <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-4">Direct // Uplink</div>
                <div className="space-y-4">
                   <p className="text-[10px] text-white/50 tracking-widest uppercase">LAT 41.9981 // LNG 21.4254</p>
                   <p className="text-[#FFC800] font-mono text-xs">contact@osa-engineering.com</p>
                </div>
             </motion.div>

             {/* Close Button UI Support */}
             <div className="absolute top-6 right-6">
                <button onClick={() => setIsMenuOpen(false)} className="text-white/50 hover:text-[#FFC800]">
                  <X size={32} />
                </button>
             </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CONTENT --- */}
      <main className="hero-element relative z-10 flex-1 flex flex-col justify-center w-full px-6 py-20 lg:p-0 pointer-events-none lg:static lg:h-full lg:w-full">

        {/* Cinematic Title Reveal */}
        <div className="lg:absolute lg:bottom-[35%] lg:left-8 lg:mb-12">
          <motion.h1 
            variants={titleContainerVars}
            className="text-[14vw] sm:text-[12vw] lg:text-[7.5vw] font-bold leading-[0.85] lg:leading-[0.9] tracking-normal uppercase text-white"
          >
            <div className="overflow-hidden">
              <motion.span variants={wordVars} className="block">Precision</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={wordVars} className="block text-white/40">Engineered.</motion.span>
            </div>
          </motion.h1>
        </div>
      </main>

      {/* Info Blocks - Slower Fade In */}
      <motion.div 
        variants={itemFadeUpVars}
        className="hero-element relative lg:absolute lg:top-[65%] lg:left-0 w-full lg:w-[35%] h-auto lg:h-[35%] p-8 lg:p-10 flex flex-col gap-6 lg:gap-0 lg:justify-between pointer-events-auto z-20 border-t border-white/5 lg:border-none"
      >
        <motion.div 
          variants={itemFadeUpVars}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit"
        >
          <span className="text-[#FFC800] text-xs lg:text-[10px] font-mono">01</span>
          <span className="text-xs lg:text-[10px] font-bold tracking-widest uppercase text-white/70">Industrial</span>
        </motion.div>

        <p className="text-base lg:text-sm text-white/50 leading-relaxed font-mono tracking-tight max-w-sm">
          Absolute dimensional stability. Multi-axis reductive protocols transforming concepts into mission-critical structural components.
        </p>
      </motion.div>

      {/* --- CTA BLOCK --- */}
      <motion.a
        variants={itemFadeUpVars}
        href="#contact"
        className="hero-element relative lg:absolute lg:bottom-auto lg:top-[65%] lg:left-[35%] w-full lg:w-[35%] min-h-[160px] lg:min-h-0 lg:h-[35%] bg-[#FFC800] text-[#050505] p-8 lg:p-10 z-30 group cursor-pointer hover:bg-white transition-colors duration-500 flex flex-col justify-between pointer-events-auto no-underline"
        onMouseEnter={() => setIsCtaHovered(true)}
        onMouseLeave={() => setIsCtaHovered(false)}
      >
        <div className="flex justify-between items-start">
          <motion.span 
            variants={itemFadeUpVars}
            className="font-mono text-xs lg:text-[10px] font-bold tracking-[0.2em]"
          >
            INITIATE //
          </motion.span>
          <motion.div 
            variants={itemFadeUpVars}
            className="font-mono text-xs lg:text-[10px] tracking-widest text-black/50 text-right"
          >
            LAT 41.9981<br/>LNG 21.4254
          </motion.div>
        </div>

        <div className="flex justify-between items-end mt-4 lg:mt-0">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-normal uppercase leading-[0.9]">
            <ScrambleText text="Begin" trigger={isCtaHovered} /><br/>
            <ScrambleText text="Transmission" trigger={isCtaHovered} />
          </h3>
          <ArrowUpRight className="w-10 h-10 lg:w-14 lg:h-14 stroke-[1.5] group-hover:rotate-45 transition-transform duration-500" />
        </div>
      </motion.a>

    </motion.section>
  );
};

export default Header;
