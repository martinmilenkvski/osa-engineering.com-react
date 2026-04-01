import React from "react";
import { Plus } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  // --- ANIMATION VARIANTS ---
  const ease = [0.16, 1, 0.3, 1];

  const containerVars = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const fadeUpVars = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease } }
  };

  const lineXVars = {
    hidden: { scaleX: 0, opacity: 0 },
    visible: { scaleX: 1, opacity: 1, transition: { duration: 1.5, ease } }
  };

  const lineYVars = {
    hidden: { scaleY: 0, opacity: 0 },
    visible: { scaleY: 1, opacity: 1, transition: { duration: 1.5, ease } }
  };

  const textRevealVars = {
    hidden: { y: "110%" },
    visible: { y: 0, transition: { duration: 1.2, ease } }
  };

  return (
    <motion.footer 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.05 }}
      variants={containerVars}
      className="w-full bg-[#080808] text-[#f4f4f4] sticky bottom-0 z-0 selection:bg-[#FFC800] selection:text-black"
    >
      {/* Main Top Border */}
      <motion.div variants={lineXVars} className="absolute top-0 left-0 right-0 h-px bg-white/10 origin-left" />
      
      {/* Massive CTA */}
      <div className="px-8 lg:px-12 pt-20 pb-20 lg:pt-32 lg:pb-40 relative overflow-hidden">
        <motion.div variants={fadeUpVars} className="flex items-center gap-3 mb-12">
          <span className="text-[#FFC800] font-mono text-xs">INDEX [99]</span>
          <div className="h-px w-8 bg-[#FFC800]"></div>
          <span className="text-[10px] font-mono text-white/30 uppercase tracking-[0.3em]">End_Of_Line</span>
        </motion.div>
        
        <h2 className="text-[14vw] sm:text-[12vw] lg:text-[14vw] font-bold leading-[0.85] tracking-tighter uppercase text-white/10 cursor-default">
          <div className="overflow-hidden pb-2 lg:pb-4">
            <motion.span variants={textRevealVars} className="block">Engineering</motion.span>
          </div>
          <div className="overflow-hidden pb-2 lg:pb-4">
            <motion.span variants={textRevealVars} className="block text-[#FFC800]">Integrity.</motion.span>
          </div>
        </h2>

        {/* Technical Corner Brackets */}
        <motion.div variants={fadeUpVars} className="absolute top-12 right-12 w-8 h-8 pointer-events-none hidden lg:block">
          <div className="absolute top-0 right-0 w-[1px] h-4 bg-white/20"></div>
          <div className="absolute top-0 right-0 h-[1px] w-4 bg-white/20"></div>
        </motion.div>
      </div>

      {/* Technical Grid Readout */}
      <div className="relative flex flex-col lg:flex-row border-t border-white/5 lg:border-none">
        <motion.div variants={lineXVars} className="absolute top-0 left-0 right-0 h-px bg-white/10 origin-left z-10 hidden lg:block" />

        {/* Branding & Social */}
        <div className="relative w-full lg:w-1/4 p-8 lg:p-12 flex flex-col justify-between gap-12 border-b lg:border-b-0 border-white/5">
          <motion.div variants={lineYVars} className="hidden lg:block absolute top-0 bottom-0 right-0 w-px bg-white/10 origin-top" />
          
          <motion.div variants={fadeUpVars}>
            <div className="flex items-center gap-3 mb-10">
              <img src="/logos/Logo-y.svg" alt="O.S.A Logo" className="h-5 w-auto object-contain" />
              <span className="text-xl font-bold tracking-[0.3em] uppercase">O.S.A<span className="text-[#FFC800]">.</span></span>
            </div>
          </motion.div>
          
          <motion.div variants={fadeUpVars}>
             <div className="font-mono text-xs lg:text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6">Net_Links //</div>
             <div className="flex flex-col gap-6 lg:gap-4">
                <a href="#" className="text-sm lg:text-xs font-mono tracking-widest text-white/60 hover:text-[#FFC800] transition-colors flex items-center gap-3">
                  <Plus size={12} className="text-[#FFC800]/50" /> [ INSTAGRAM ]
                </a>
                <a href="#" className="text-sm lg:text-xs font-mono tracking-widest text-white/60 hover:text-[#FFC800] transition-colors flex items-center gap-3">
                  <Plus size={12} className="text-[#FFC800]/50" /> [ LINKEDIN ]
                </a>
             </div>
          </motion.div>
        </div>

        {/* Global Logistics */}
        <div className="relative w-full lg:w-1/4 p-8 lg:p-12 flex flex-col justify-between gap-12 border-b lg:border-b-0 border-white/5">
          <motion.div variants={lineYVars} className="hidden lg:block absolute top-0 bottom-0 right-0 w-px bg-white/10 origin-top" />

          <motion.div variants={fadeUpVars}>
            <div className="font-mono text-xs lg:text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6">Base // Logistics</div>
            <div className="text-base lg:text-sm text-white/60 leading-relaxed font-light space-y-2 lg:space-y-1">
              <p>11-ti Oktomvri No. 41/2-7</p>
              <p>Skopje, 1000</p>
              <p>Republic of Macedonia</p>
            </div>
          </motion.div>
          <motion.div variants={fadeUpVars}>
            <div className="inline-flex items-center gap-2 px-3 py-2 lg:py-1.5 rounded-full border border-white/10 bg-white/5 mb-4 mt-6 lg:mt-0">
               <div className="w-1.5 h-1.5 bg-[#FFC800] rounded-full animate-pulse"></div>
               <span className="font-mono text-[10px] lg:text-[8px] text-white/60 tracking-widest uppercase">HQ_Online</span>
            </div>
            <div className="font-mono text-xs lg:text-[10px] text-[#FFC800]/50 tracking-widest uppercase block">VAT: 4080016551877</div>
          </motion.div>
        </div>

        {/* Communication */}
        <div className="relative w-full lg:w-1/4 p-8 lg:p-12 flex flex-col justify-between gap-12 border-b lg:border-b-0 border-white/5">
          <motion.div variants={lineYVars} className="hidden lg:block absolute top-0 bottom-0 right-0 w-px bg-white/10 origin-top" />
          
          <motion.div variants={fadeUpVars}>
            <div className="font-mono text-xs lg:text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6">Direct // Uplink</div>
            <div className="space-y-8 lg:space-y-6">
              <div>
                <p className="text-xs lg:text-[10px] font-mono text-white/20 uppercase mb-2 tracking-widest">Primary_Terminal</p>
                <a href="tel:+38975488726" className="text-xl lg:text-lg font-light tracking-tight text-white hover:text-[#FFC800] transition-colors flex items-center gap-2">
                   <span className="text-[#FFC800] text-sm lg:text-xs opacity-50">{'>'}</span> +389 75 488 726
                </a>
              </div>
              <div>
                <p className="text-xs lg:text-[10px] font-mono text-white/20 uppercase mb-2 tracking-widest">Backup_Terminal</p>
                <a href="tel:+38970268809" className="text-xl lg:text-lg font-light tracking-tight text-white hover:text-[#FFC800] transition-colors flex items-center gap-2">
                   <span className="text-[#FFC800] text-sm lg:text-xs opacity-50">{'>'}</span> +389 70 268 809
                </a>
              </div>
              <div>
                <p className="text-xs lg:text-[10px] font-mono text-white/20 uppercase mb-2 tracking-widest">Secure_Data</p>
                <a href="mailto:contact@osa-engineering.com" className="text-base lg:text-sm font-light tracking-tight text-white hover:text-[#FFC800] transition-colors border-b border-white/20 hover:border-[#FFC800] pb-1">
                  contact@osa-engineering.com
                </a>
              </div>
            </div>
          </motion.div>
          {/* Empty div to balance justify-between if needed, but not necessary here as it stays top */}
        </div>

        {/* Technical Navigation */}
        <div className="w-full lg:w-1/4 p-8 lg:p-12 flex flex-col justify-between gap-12">
          <motion.div variants={fadeUpVars}>
            <div className="font-mono text-xs lg:text-[10px] tracking-[0.3em] text-white/30 uppercase mb-6">Architecture // Nav</div>
            <div className="flex flex-col gap-6 lg:gap-4">
              {['SERVICES', 'SUCCESS', 'GALLERY', 'FAQ'].map((link) => (
                <a key={link} href={`#${link.toLowerCase()}`} className="text-base lg:text-sm font-bold tracking-[0.2em] text-white/40 hover:text-[#FFC800] transition-colors flex items-center gap-3 group w-fit">
                  <div className="w-4 h-px bg-white/20 group-hover:bg-[#FFC800] transition-colors"></div>
                  {link === 'FAQ' ? 'QUERY_LOGS' : link}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* System Status Bar */}
      <div className="relative px-8 lg:px-12 py-8 flex flex-col md:flex-row justify-between items-center gap-6 bg-[#080808]">
        <motion.div variants={lineXVars} className="absolute top-0 left-0 right-0 h-px bg-white/10 origin-left" />
        
        <motion.div variants={fadeUpVars} className="font-mono text-xs lg:text-[10px] text-white/30 tracking-[0.3em] uppercase text-center md:text-left">
          © {new Date().getFullYear()} O.S.A Engineering // Reductive Protocols Verified
        </motion.div>
        <motion.div variants={fadeUpVars} className="flex flex-col lg:flex-row items-center gap-4 lg:gap-8 mt-4 lg:mt-0">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFC800] animate-pulse"></div>
              <span className="font-mono text-xs lg:text-[10px] text-white/50 uppercase tracking-widest">Core_Active</span>
           </div>
           <Plus size={12} className="text-white/20 hidden lg:block" />
           <div className="font-mono text-xs lg:text-[10px] text-white/30 uppercase tracking-widest">V.2.4.1_SYS</div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
