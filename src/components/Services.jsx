import React from "react";
import Card from "./Card";
import cardData from "../data/cardData";
import { motion } from "framer-motion";

const Services = () => {
  // --- TEXT-ONLY ANIMATION VARIANTS ---
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
    whileInView: { 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section id="services" className="w-full bg-[#080808] border-t border-white/10 relative z-10">
      <div className="flex flex-col lg:flex-row min-h-screen pt-24 lg:pt-0">
        
        {/* --- LEFT: STICKY INFO BLOCK --- */}
        <div className="w-full lg:w-[35%] lg:h-[100svh] lg:sticky lg:top-0 px-6 md:px-8 lg:px-12 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-center gap-12 lg:gap-32">
          
          <motion.div 
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUpVars} className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-xs">INDEX [01]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </motion.div>
            
            <motion.h2 
              variants={titleContainerVars}
              className="text-fluid-h2 font-bold tracking-normal uppercase leading-[0.9]"
            >
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block">CORE</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block text-white/40">SERVICES.</motion.span>
              </div>
            </motion.h2>

            <motion.div variants={fadeUpVars} className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/90">STATUS: ACTIVE</span>
            </motion.div>

            <motion.p 
              variants={fadeUpVars}
              className="mt-6 lg:mt-8 text-base lg:text-sm text-white/50 uppercase leading-normal font-normal font-mono tracking-tight max-w-sm"
            >
              Systematic reductive machining solutions for high-tolerance applications. Mission-critical components realized through adaptive motion control systems.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={fadeUpVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
            <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-2">Operation Mode</div>
            <div className="flex items-center gap-2">
              <motion.div 
                animate={{ opacity: [1, 0.4, 1] }} 
                transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                className="w-2 h-2 bg-[#FFC800] rounded-full"
              ></motion.div>
              <span className="text-[10px] font-bold tracking-widest text-[#FFC800] uppercase">Full Automation // Active</span>
            </div>
          </motion.div>
        </div>

        {/* --- RIGHT: SCROLLING CONTENT --- */}
        <div className="w-full lg:w-[65%] px-6 md:px-8 lg:px-12 lg:py-[20vh] py-12 space-y-16 lg:space-y-[40vh] pb-32 lg:pb-[20vh]">
          {cardData.map((data, index) => (
            <Card
              key={data.id}
              index={index + 1}
              {...data}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
