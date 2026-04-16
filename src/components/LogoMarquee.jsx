import React from "react";
import { motion } from "framer-motion";
import TechGrid from "./TechGrid";

const LogoMarquee = () => {
  const ease = [0.16, 1, 0.3, 1];

  const containerVars = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars = {
    initial: { opacity: 0, y: 40 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease }
    }
  };

  const headerVars = {
    initial: { opacity: 0, x: -20 },
    whileInView: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease }
    }
  };

  const lineExpandVars = {
    initial: { scaleX: 0 },
    whileInView: {
      scaleX: 1,
      transition: { duration: 1.2, ease }
    }
  };

  const logos = [
    { name: "Alkaloid", src: "/logos/Alkaloid.png", id: "U-812" },
    { name: "Draksler", src: "/logos/Draksler.png", id: "U-441" },
    { name: "Foma Systems", src: "/logos/FomaSystems.png", id: "U-290" },
    { name: "Kromberg & Schubert", src: "/logos/Kromberg.png", id: "U-717" },
    
    { name: "Alkaloid", src: "/logos/Alkaloid.png", id: "U-813" },
    { name: "Draksler", src: "/logos/Draksler.png", id: "U-442" },
    { name: "Foma Systems", src: "/logos/FomaSystems.png", id: "U-291" },
    { name: "Kromberg & Schubert", src: "/logos/Kromberg.png", id: "U-718" },
  ];

  return (
    <section className="w-full bg-[#080808] border-t border-white/10 font-mono py-16 lg:py-32 relative overflow-hidden">
      <TechGrid opacity="opacity-60" maskPosition="center center" />
      
      {/* --- TECHNICAL HEADER --- */}
      <motion.div 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        className="relative px-6 md:px-8 lg:px-12 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-white/10 overflow-hidden"
      >
        <motion.div variants={lineExpandVars} className="absolute inset-0 bg-white/[0.02] origin-left z-0" />
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full max-w-[1700px] mx-auto relative z-10">
        <motion.div variants={headerVars} className="flex items-center gap-4 relative z-10">
          <div className="w-2 h-2 bg-[#FFC800] animate-pulse"></div>
          <span className="text-tech-label font-bold text-white/80">
            Verified_Counterparties //
          </span>
        </motion.div>
        <motion.div variants={headerVars} className="flex gap-8 relative z-10">
          <span className="text-[11px] text-white/30 tracking-blueprint uppercase">
            Net_Status: Stable
          </span>
          <span className="text-[11px] text-[#FFC800]/50 tracking-blueprint uppercase hidden md:inline">
            Active_Nodes: {logos.length}
          </span>
        </motion.div>
        </div>
      </motion.div>

      {/* --- LOGO GRID --- */}
      <motion.div 
        variants={containerVars}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border-b border-white/10"
      >
        {logos.map((logo, idx) => (
          <motion.div 
            variants={itemVars}
            key={idx} 
            className="bg-[#080808] relative flex flex-col items-center justify-center aspect-square lg:aspect-auto lg:h-[320px] group hover:bg-white/[0.02] transition-colors duration-500 overflow-hidden"
          >
            {/* Background ID */}
            <span className="absolute top-4 left-6 text-tech-label text-white/10 font-bold leading-none group-hover:text-[#FFC800]/20 transition-colors">
              PART_{logo.id}
            </span>

            {/* Logo Container */}
            <div className="relative p-8 w-full h-full flex items-center justify-center">
              <div
                role="img"
                aria-label={logo.name}
                className="w-full max-w-[85%] h-24 lg:h-40 bg-[#FFC800] opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                style={{
                  WebkitMaskImage: `url(${logo.src})`,
                  WebkitMaskSize: 'contain',
                  WebkitMaskPosition: 'center',
                  WebkitMaskRepeat: 'no-repeat',
                  maskImage: `url(${logo.src})`,
                  maskSize: 'contain',
                  maskPosition: 'center',
                  maskRepeat: 'no-repeat',
                }}
              />
            </div>

            {/* Status Footer */}
            <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <span className="text-[9px] text-[#FFC800] uppercase tracking-blueprint">
                Verified
              </span>
            </div>

            {/* Technical Corners (Hover) */}
            <div className="absolute top-0 right-0 w-4 h-4 border-t border-r border-[#FFC800] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b border-l border-[#FFC800] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </motion.div>

        {/* --- TECHNICAL HEADER --- */}
      <motion.div 
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, amount: 0.2 }}
        className="relative px-6 md:px-8 lg:px-12 py-8 flex flex-col md:flex-row md:items-center justify-between gap-6 border-y border-white/10 overflow-hidden"
      >
        <motion.div variants={lineExpandVars} className="absolute inset-0 bg-white/[0.02] origin-left z-0" />

        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 w-full max-w-[1700px] mx-auto relative z-10">
          <motion.div variants={headerVars} className="flex items-center gap-4 relative z-10">
            <div className="w-2 h-2 bg-[#FFC800] animate-pulse"></div>
            <span className="text-tech-label font-bold text-white/80">
              Verified_Counterparties //
            </span>
          </motion.div>
          <motion.div variants={headerVars} className="flex gap-8 relative z-10">
            <span className="text-[11px] text-white/30 tracking-blueprint uppercase">
              Net_Status: Stable
            </span>
            <span className="text-[11px] text-[#FFC800]/50 tracking-blueprint uppercase hidden md:inline">
              Active_Nodes: {logos.length}
            </span>
          </motion.div>
        </div>
      </motion.div>

    </section>
  );
};




export default LogoMarquee;
