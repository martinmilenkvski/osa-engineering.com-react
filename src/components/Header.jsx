import React from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { motion } from "framer-motion";

const Header = () => {
  // --- CINEMATIC ANIMATION VARIANTS ---
  
  // Custom premium easing
  const ease = [0.16, 1, 0.3, 1];

  // Sequencing:
  // 1. Lines start at 0s
  // 2. Crosshairs at 0.8s
  // 3. Navigation at 1.0s (staggered)
  // 4. Title words at 1.4s (staggered)
  // 5. Info blocks & CTA at 1.8s

  const navContainerVars = {
    animate: { 
      transition: { staggerChildren: 0.1, delayChildren: 1.0 }
    }
  };

  const titleContainerVars = {
    animate: { 
      transition: { staggerChildren: 0.15, delayChildren: 1.4 }
    }
  };

  const itemFadeUpVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  };

  const navItemVars = {
    initial: { opacity: 0, x: -20 },
    animate: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 1, ease }
    }
  };

  const lineVars = {
    initial: { scaleX: 0, scaleY: 0 },
    animate: { 
      scaleX: 1, 
      scaleY: 1,
      transition: { duration: 1.5, ease }
    }
  };

  const wordVars = {
    initial: { y: "110%" },
    animate: { 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  };

  const plusVars = {
    initial: { opacity: 0, scale: 0, rotate: -90 },
    animate: { 
      opacity: 1, 
      scale: 1, 
      rotate: 0,
      transition: { duration: 0.8, delay: 0.8, ease }
    }
  };

  const videoFadeVars = {
    initial: { opacity: 0 },
    animate: { 
      opacity: 0.4,
      transition: { duration: 2.5, delay: 0.5, ease: "linear" }
    }
  };

  return (
    <motion.section 
      initial="initial"
      animate="animate"
      className="h-screen w-full relative overflow-hidden bg-[#080808]"
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
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/50 to-transparent lg:hidden"></div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 2, duration: 1, ease }}
          className="absolute top-8 right-8 flex items-center gap-2 z-10"
        >
          <div className="w-1.5 h-1.5 bg-[#FFC800] rounded-full animate-pulse"></div>
          <span className="text-[13px] font-mono tracking-widest text-white/50 uppercase">CNC_Active</span>
        </motion.div>
      </div>

      {/* --- NAVIGATION --- */}
      <nav className="absolute top-0 w-full flex items-start p-6 lg:p-8 z-30">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, ease }}
          className="w-full lg:w-[35%] flex items-center gap-3"
        >
          <img 
            src="/logos/Logo-y.svg" 
            alt="O.S.A Logo" 
            className="h-8 lg:h-10 w-auto object-contain"
          />
          <span className="text-lg font-bold tracking-[3px] uppercase">
            O.S.A<span className="text-[#FFC800]">.</span>
          </span>
        </motion.div>

        <motion.div 
          variants={navContainerVars}
          className="hidden lg:flex w-[35%] items-center gap-10 text-[13px] font-mono tracking-widest text-white/50 pl-8"
        >
          <motion.a variants={navItemVars} href="#services" className="hover:text-white transition-colors">/ SERVICES</motion.a>
          <motion.a variants={navItemVars} href="#success" className="hover:text-white transition-colors">/ SUCCESS</motion.a>
          <motion.a variants={navItemVars} href="#gallery" className="hover:text-white transition-colors">/ GALLERY</motion.a>
        </motion.div>
      </nav>

      {/* --- MAIN CONTENT --- */}
      <main className="relative z-10 w-full h-full flex flex-col pointer-events-none pt-[40vh] lg:pt-0">

        {/* Cinematic Title Reveal */}
        <div className="absolute lg:bottom-[35%] lg:left-8 mb-8 lg:mb-12 px-6 lg:px-0">
          <motion.h1 
            variants={titleContainerVars}
            className="text-[12vw] lg:text-[7.5vw] font-bold leading-[0.9] tracking-tighter uppercase text-white"
          >
            <div className="overflow-hidden">
              <motion.span variants={wordVars} className="block">Precision</motion.span>
            </div>
            <div className="overflow-hidden">
              <motion.span variants={wordVars} className="block text-white/40">Engineered.</motion.span>
            </div>
          </motion.h1>
        </div>

        {/* Info Blocks - Slower Fade In */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.2, ease }}
          className="absolute top-[65%] left-0 w-full lg:w-[35%] h-[35%] p-6 lg:p-10 flex flex-col justify-between pointer-events-auto"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 w-fit">
            <span className="text-[#FFC800] text-[10px] font-mono">01</span>
            <span className="text-[10px] font-bold tracking-widest uppercase text-white/70">Industrial</span>
          </div>

          <p className="text-sm text-white/50 leading-relaxed font-light max-w-sm mt-8 lg:mt-0">
            Absolute dimensional stability. Multi-axis reductive protocols transforming concepts into mission-critical structural components.
          </p>
        </motion.div>
      </main>

      {/* --- CTA BLOCK --- */}
      <motion.a
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        transition={{ delay: 1.8, duration: 1.2, ease }}
        href="#contact"
        className="absolute top-auto bottom-0 lg:bottom-auto lg:top-[65%] left-0 lg:left-[35%] w-full lg:w-[35%] h-[200px] lg:h-[35%] bg-[#FFC800] text-[#050505] p-6 lg:p-10 z-30 group cursor-pointer hover:bg-white transition-colors duration-500 flex flex-col justify-between pointer-events-auto no-underline"
      >
        <div className="flex justify-between items-start">
          <span className="font-mono text-[10px] font-bold tracking-[0.2em]">INITIATE //</span>
          <div className="font-mono text-[10px] tracking-widest text-black/50 text-right">
            LAT 41.9981<br/>LNG 21.4254
          </div>
        </div>

        <div className="flex justify-between items-end mt-4 lg:mt-0">
          <h3 className="text-4xl lg:text-5xl font-bold tracking-tighter uppercase leading-[0.9]">
            Begin<br/>Transmission
          </h3>
          <ArrowUpRight className="w-10 h-10 lg:w-14 lg:h-14 stroke-[1.5] group-hover:rotate-45 transition-transform duration-500" />
        </div>
      </motion.a>

    </motion.section>
  );
};

export default Header;
