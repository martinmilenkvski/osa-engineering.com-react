import React, { useState } from "react";
import { Plus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TechGrid from "./TechGrid";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const faqs = [
    {
      q: "What are your standard dimensional tolerances?",
      a: "Our standard machining protocol maintains tolerances within ±0.005mm. For aerospace or medical-grade components, we can achieve even tighter linear and geometric constraints as per technical specifications."
    },
    {
      q: "Which materials are supported in your multi-axis systems?",
      a: "We operate on a broad spectrum including architectural steel, high-tensile tool steels, aerospace aluminum alloys, stainless steels (304/316), brass, copper, and industrial polymers."
    },
    {
      q: "How do you handle rapid prototyping vs. mass production?",
      a: "Our setup is optimized for both small-batch technical prototypes and high-volume industrial fulfillment. We utilize modular fixturing to minimize transition times between varied reductive protocols."
    },
    {
      q: "Do you provide material certification and inspection logs?",
      a: "Yes. Every component can be delivered with a full audit trail including raw material certification, heat-map reports, and coordinate measuring machine (CMM) verification logs."
    },
    {
      q: "What is your typical turnaround time for custom components?",
      a: "Turnaround times vary based on complexity and volume. Standard prototyping runs take 3-5 business days, while full production runs are scheduled according to our current queue and material availability."
    },
    {
      q: "Do you offer post-machining surface treatments?",
      a: "Yes, we coordinate various finishing processes including anodizing, hard-coat anodizing, powder coating, electropolishing, and custom thermal treatments to meet your exact surface specifications."
    }
  ];

  const toggleFaq = (idx) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  // --- ANIMATION VARIANTS ---
  const ease = [0.16, 1, 0.3, 1];

  const fadeUpVars = {
    initial: { opacity: 0, y: 40 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  };

  const wordVars = {
    initial: { y: "110%" },
    whileInView: { 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  };

  const titleContainerVars = {
    initial: {},
    whileInView: { 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const listContainerVars = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1, delayChildren: 0.4 }
    }
  };

  const rowVars = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease } }
  };

  return (
    <section id="faq" className="w-full bg-[#080808] border-t border-white/10 relative overflow-x-clip">
      <div className="flex flex-col lg:flex-row lg:items-start min-h-[60vh] max-w-[1700px] mx-auto w-full">
        
        {/* --- LEFT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] h-auto lg:h-[100svh] lg:sticky lg:top-0 px-6 md:px-8 lg:px-12 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center gap-12 lg:gap-32 relative z-10 shrink-0 bg-[#080808] overflow-hidden">
          <TechGrid opacity="opacity-70" maskPosition="center center" />
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUpVars} className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-tech-label">INDEX [04]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </motion.div>
            
            <motion.h2 variants={titleContainerVars} className="text-fluid-h2 font-bold tracking-tightest uppercase leading-none">
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block">QUERY</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block text-white/40">PROTOCOL.</motion.span>
              </div>
            </motion.h2>

            <motion.div variants={fadeUpVars} className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              <span className="text-tech-label font-mono font-bold text-white/90">STATUS: ACTIVE</span>
            </motion.div>
            
            <motion.p variants={fadeUpVars} className="mt-8 text-fluid-body text-white/50 uppercase font-mono tracking-tight max-w-xs">
              Technical documentation and operational standards. Review our baseline protocols for precision engineering and fulfillment.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 1 }} 
            viewport={{ once: true }} 
            className="hidden lg:block mt-8 lg:mt-0"
          >
             <div className="inline-block border border-white/10 px-4 py-3 bg-white/5">
                <span className="text-tech-label font-mono text-white/40 uppercase">Encryption // Status</span>
                <div className="flex items-end gap-1 mt-2 h-8">
                  {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className={`w-2 ${i >= 6 ? 'bg-white/10' : 'bg-[#FFC800]'}`}
                      animate={{ height: [`${h}%`, `${Math.max(10, h - 40)}%`, `${h}%`] }}
                      transition={{ duration: 1.5 + (i * 0.1), repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                  <span className="text-tech-label font-mono text-[#FFC800] ml-2">SECURE</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* --- RIGHT: ACCORDIONS --- */}
        <div className="w-full lg:w-[65%] pt-12 lg:pt-24 flex flex-col">
          <motion.div 
            variants={listContainerVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col divide-y divide-white/10 border-b border-white/10"
          >
            {faqs.map((faq, idx) => {
              const isOpen = activeIndex === idx;
              
              return (
                <motion.div key={idx} variants={rowVars} className="group outline-none hover:bg-white/[0.02] transition-colors duration-500 relative">
                  <div className="absolute left-0 top-0 bottom-0 w-px bg-[#FFC800] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                  <div onClick={() => toggleFaq(idx)} className="flex items-center justify-between px-6 md:px-8 lg:px-12 py-8 lg:py-12 cursor-pointer select-none">
                    <div className="flex items-center gap-6 lg:gap-10 w-full lg:w-auto">
                       <span className={`font-mono text-tech-label transition-colors ${isOpen ? 'text-[#FFC800]' : 'text-white/30 group-hover:text-[#FFC800]'}`}>0{idx + 1}</span>
                       <h3 className={`text-fluid-h3 font-bold tracking-tightest uppercase leading-none transition-colors pr-4 ${isOpen ? 'text-[#FFC800]' : 'text-white'}`}>
                         {faq.q}
                       </h3>
                    </div>
                    <div className="relative w-6 h-6 flex-shrink-0">
                      <div className={`absolute top-1/2 left-0 w-full h-px transition-colors duration-500 ${isOpen ? 'bg-[#FFC800]' : 'bg-white/30 group-hover:bg-[#FFC800]'}`}></div>
                      <div className={`absolute top-0 left-1/2 w-px h-full transition-all duration-500 ${isOpen ? 'rotate-90 opacity-0 bg-[#FFC800]' : 'bg-white/30 group-hover:bg-[#FFC800]'}`}></div>
                    </div>
                  </div>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 md:px-8 lg:px-[6.5rem] pb-12 lg:pb-20">
                          <p className="text-fluid-body text-white/60 uppercase font-mono tracking-tight max-w-2xl">
                            {faq.a}
                          </p>
                          <div className="mt-10 flex items-center gap-4">
                             <div className="h-px w-20 bg-white/10"></div>
                             <span className="text-tech-label font-mono text-white/20 uppercase">End_Log_Entry</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-50px" }}
            variants={titleContainerVars}
            className="px-6 md:px-8 lg:px-12 py-12 lg:py-24 bg-white/[0.01] flex flex-col items-center justify-center text-center relative overflow-hidden mt-auto"
          >
             <motion.div variants={fadeUpVars}>
                <Plus size={32} className="text-[#FFC800]/50 mb-6 animate-spin-slow" />
             </motion.div>
             <motion.p variants={fadeUpVars} className="text-fluid-body text-white/40 uppercase font-mono tracking-tight max-w-sm mb-8">
               Still require technical clarification? Our engineering lead is available for direct consultation.
             </motion.p>
             <motion.a 
               variants={fadeUpVars}
               href="#contact" 
               className="px-8 py-4 border border-[#FFC800]/30 text-[#FFC800] font-mono text-tech-label uppercase hover:bg-[#FFC800] hover:text-black transition-all duration-500 relative group"
             >
                <div className="absolute inset-0 bg-[#FFC800]/10 group-hover:bg-transparent transition-colors animate-pulse"></div>
                <span className="relative z-10">Send_Priority_Query</span>
             </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
