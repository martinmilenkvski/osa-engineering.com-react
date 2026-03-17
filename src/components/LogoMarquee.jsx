import React from "react";
import { motion } from "framer-motion";

const LogoMarquee = () => {
  const logos = [
    { name: "Alkaloid", src: "/logos/Alkaloid.png", id: "U-812" },
    { name: "Draksler", src: "/logos/Draksler.png", id: "U-441" },
    { name: "Foma Systems", src: "/logos/FomaSystems.png", id: "U-290" },
    { name: "Kromberg & Schubert", src: "/logos/Kromberg.png", id: "U-717" },
  ];

  // Extend list for a seamless loop
  const extendedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="py-24 bg-[#FFC800] border-y border-black/10 overflow-hidden relative font-mono text-black">
      
      {/* --- TECHNICAL HEADER --- */}
      <div className="absolute top-0 left-0 right-0 h-10 border-b border-black/5 flex items-center justify-between px-8 bg-black/5">
        <div className="flex items-center gap-4">
          <div className="w-1.5 h-1.5 bg-black rounded-full animate-pulse"></div>
          <span className="text-[9px] font-bold text-black/60 uppercase tracking-[0.2em]">
            Conveyor_Line_01 // Verified Partners
          </span>
        </div>
        <span className="text-[9px] text-black/30">SYS_STABLE // 99.8%</span>
      </div>

      {/* --- STEPPER CONVEYOR --- */}
      <div className="mt-10 overflow-hidden relative">
        <motion.div 
          className="flex"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 120, // Significantly slowed down for a heavy industrial feel
            ease: "linear", 
            repeat: Infinity 
          }}
          style={{ width: "fit-content" }}
        >
          {extendedLogos.map((logo, idx) => (
            <div 
              key={idx} 
              className="flex-shrink-0 w-[320px] lg:w-[480px] h-56 lg:h-80 border-r border-black/10 flex flex-col items-center justify-center relative group hover:bg-black/[0.03] transition-colors"
            >
              {/* Background ID */}
              <span className="absolute top-4 left-6 text-[10px] text-black/10 font-bold tracking-widest leading-none">
                PART_{logo.id}
              </span>

              {/* Logo Container */}
              <div className="relative p-12">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-16 lg:h-28 w-auto filter brightness-0 opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                />
              </div>

              {/* Status Footer */}
              <div className="absolute bottom-10 left-0 right-0 flex items-center justify-between px-8 opacity-40 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-black rounded-full"></div>
                  <span className="text-[8px] font-bold text-black tracking-widest uppercase">QC_PASSED</span>
                </div>
                <span className="text-[8px] text-black/30 uppercase tracking-[0.3em]">SEC-0{idx % 9}</span>
              </div>

              {/* Technical Corners */}
              <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-black/10 group-hover:border-black transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-black/10 group-hover:border-black transition-colors"></div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* --- TECHNICAL FOOTER --- */}
      <div className="absolute bottom-0 left-0 right-0 h-10 border-t border-black/5 flex items-center justify-between px-8 bg-black/5">
        <div className="flex gap-8">
          <span className="text-[9px] text-black/40 tracking-widest opacity-50">SYNC: ENABLED</span>
          <span className="text-[9px] text-black/40 tracking-widest opacity-50">FREQ: 60Hz</span>
        </div>
        <div className="text-[9px] text-black/20 tracking-[0.4em]">
          SCANNING_[{logos.length}]_NODES
        </div>
      </div>

    </section>
  );
};

export default LogoMarquee;
