import React from "react";
import { motion } from "framer-motion";
import { Plus } from "lucide-react";

const Success = () => {
  const successData = [
    { id: "LOG-001", client: "ALKALOID", project: "Chemical Reactor Frame", status: "VERIFIED", val: "±0.005mm" },
    { id: "LOG-002", client: "TITAN", project: "Kiln Support Roller", status: "ACTIVE", val: "10.5 Tons" },
    { id: "LOG-003", client: "MAKSTIL", project: "Conveyor Roller Shaft", status: "COMPLETED", val: "4-Axis" },
    { id: "LOG-004", client: "LEK", project: "Stainless Bio-Probe", status: "STABLE", val: "Polished" },
    { id: "LOG-005", client: "ACIBADEM", project: "MRI Table Component", status: "DELIVERED", val: "Non-Mag" },
    { id: "LOG-006", client: "OKTA", project: "Valve Actuator Coupling", status: "MONITORING", val: "High-Temp" },
  ];

  // --- ANIMATION VARIANTS ---
  const ease = [0.16, 1, 0.3, 1];

  const fadeUpVars = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1.2, ease } },
    viewport: { once: true, margin: "-50px" }
  };

  const wordVars = {
    initial: { y: "110%" },
    whileInView: { y: 0, transition: { duration: 1.2, ease } }
  };

  const titleContainerVars = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const listContainerVars = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const rowVars = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease } }
  };

  const getStatusColor = (status) => ["VERIFIED", "COMPLETED", "DELIVERED"].includes(status) ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-[#FFC800] shadow-[0_0_10px_rgba(255,200,0,0.4)]";

  return (
    <section id="success" className="w-full bg-[#080808] border-t border-white/10">
      <div className="flex flex-col lg:flex-row-reverse">
        
        {/* --- RIGHT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] lg:h-screen lg:sticky lg:top-0 p-8 lg:p-12 border-b lg:border-b-0 lg:border-l border-white/10 flex flex-col justify-center gap-20 lg:gap-32">
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true }}>
            <motion.div variants={fadeUpVars} className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-xs">INDEX [02]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </motion.div>
            
            <motion.h2 variants={titleContainerVars} className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block">TRACK</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block text-white/40">RECORD.</motion.span>
              </div>
            </motion.h2>

            <motion.div variants={fadeUpVars} className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/90">STATUS: ACTIVE</span>
            </motion.div>
            
            <motion.p variants={fadeUpVars} className="mt-8 text-base lg:text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Operational transparency. A live log of mission-critical engineering fulfillment across industrial verticals.
            </motion.p>
          </motion.div>

          <div className="hidden lg:block">
            <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-4">Metric Visualization</div>
            <div className="flex items-end gap-1 h-32">
              {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                <motion.div 
                  key={i} 
                  className="bg-[#FFC800]/30 w-full flex-1 origin-bottom" 
                  animate={{ height: [`${h}%`, `${Math.max(10, h - 40)}%`, `${h}%`] }}
                  transition={{ duration: 1.5 + (i * 0.1), repeat: Infinity, ease: "easeInOut" }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* --- LEFT: DATA LOGS --- */}
        <div className="w-full lg:w-[65%] pt-12 lg:pt-24">
          <motion.div 
            variants={listContainerVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: "-100px" }}
            className="flex flex-col"
          >
            {/* Header Row */}
            <div className="hidden lg:grid lg:grid-cols-4 px-10 py-6 bg-white/[0.02] border-b border-white/10 font-mono text-[10px] tracking-widest text-white/30 uppercase">
              <div>System ID</div>
              <div>Counterparty</div>
              <div>Operation Project</div>
              <div className="text-right">Metrics / Status</div>
            </div>

            {/* List Items */}
            {successData.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={rowVars}
                className="flex flex-col lg:grid lg:grid-cols-4 items-start lg:items-center gap-4 lg:gap-0 px-8 lg:px-10 py-8 group hover:bg-white/[0.02] transition-colors duration-500 relative border-b border-white/5 last:border-0"
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#FFC800] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                
                <div className="font-mono text-sm lg:text-xs text-white/50 group-hover:text-[#FFC800] transition-colors flex items-center gap-3 w-full lg:w-auto">
                  <span className="lg:hidden text-xs lg:text-[10px] tracking-widest uppercase text-white/30 w-24">SYS_ID</span>
                  <span className="hidden lg:inline-block opacity-0 group-hover:opacity-100 transition-opacity text-[#FFC800] -ml-5 pr-2">{'>'}</span>
                  {item.id}
                </div>
                
                <div className="font-bold text-white text-xl lg:text-2xl uppercase tracking-tighter w-full lg:w-auto flex items-center gap-3 mt-2 lg:mt-0">
                  <span className="lg:hidden text-xs lg:text-[10px] font-mono tracking-widest uppercase text-white/30 w-24">CLIENT</span>
                  {item.client}
                </div>
                
                <div className="text-base lg:text-sm text-white/60 font-light group-hover:text-white transition-colors w-full lg:w-auto flex items-center gap-3 mt-2 lg:mt-0">
                  <span className="lg:hidden text-xs lg:text-[10px] font-mono tracking-widest uppercase text-white/30 w-24">PROJECT</span>
                  {item.project}
                </div>

                <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-end w-full lg:w-auto mt-6 lg:mt-0 pt-6 lg:pt-0 border-t border-white/5 lg:border-0">
                  <div className="text-xl lg:text-xl font-light text-white tracking-tighter">{item.val}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor(item.status)}`}></div>
                    <span className="text-xs lg:text-[10px] font-mono text-white/40 uppercase tracking-widest">
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom Info Block: Technical Verification Seal */}
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="py-24 lg:py-40 px-12 text-center border-t border-white/10 relative overflow-hidden bg-[#050505] min-h-[50vh] flex flex-col items-center justify-center group"
          >
            {/* Background Image - Balanced Contrast */}
            <div className="absolute inset-0 z-0">
              <img src="/images/3.avif" alt="Engineering Background" className="w-full h-full object-cover opacity-50 filter grayscale group-hover:scale-105 transition-transform duration-1000" />
              <div className="absolute inset-0 bg-[#080808]/60"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-[#080808]"></div>
            </div>

            {/* Technical Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-px bg-gradient-to-r from-transparent via-[#FFC800]/30 to-transparent z-10"></div>
            
            {/* Corner Brackets */}
            <div className="absolute top-12 left-12 w-4 h-4 border-t border-l border-[#FFC800]/50 z-10 group-hover:border-[#FFC800] group-hover:w-8 group-hover:h-8 transition-all duration-500 hidden lg:block"></div>
            <div className="absolute top-12 right-12 w-4 h-4 border-t border-r border-[#FFC800]/50 z-10 group-hover:border-[#FFC800] group-hover:w-8 group-hover:h-8 transition-all duration-500 hidden lg:block"></div>
            <div className="absolute bottom-12 left-12 w-4 h-4 border-b border-l border-[#FFC800]/50 z-10 group-hover:border-[#FFC800] group-hover:w-8 group-hover:h-8 transition-all duration-500 hidden lg:block"></div>
            <div className="absolute bottom-12 right-12 w-4 h-4 border-b border-r border-[#FFC800]/50 z-10 group-hover:border-[#FFC800] group-hover:w-8 group-hover:h-8 transition-all duration-500 hidden lg:block"></div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 }
                }}
                className="flex items-center gap-6 mb-12"
              >
                <div className="h-px w-12 lg:w-20 bg-white/20"></div>
                <Plus size={20} className="text-[#FFC800]/80 animate-spin-slow" />
                <div className="h-px w-12 lg:w-20 bg-white/20"></div>
              </motion.div>

              <div className="overflow-hidden mb-12">
                <motion.h3 
                  className="text-4xl lg:text-7xl font-bold tracking-[0.15em] lg:tracking-[0.25em] uppercase text-white flex flex-wrap justify-center gap-x-6 lg:gap-x-10 drop-shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
                >
                  {["LET'S BUILD", "TOGETHER."].map((word, i) => (
                    <span key={i} className="relative block h-full">
                      <motion.span
                        variants={{
                          initial: { y: "100%" },
                          animate: { y: 0 }
                        }}
                        transition={{ 
                          duration: 1, 
                          ease: [0.16, 1, 0.3, 1],
                          delay: 0.2 + (i * 0.1)
                        }}
                        className={`block ${i === 1 ? 'text-[#FFC800]' : ''}`}
                      >
                        {word}
                      </motion.span>
                    </span>
                  ))}
                </motion.h3>
              </div>

              <motion.div 
                variants={{
                  initial: { opacity: 0, y: 10 },
                  animate: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6"
              >
              <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase hidden lg:block">Status // Verified</span>
              
              <a href="#contact" className="px-8 py-3 border border-[#FFC800]/50 bg-[#FFC800]/10 backdrop-blur-sm relative overflow-hidden group-hover:bg-[#FFC800] transition-colors duration-500 cursor-pointer">
                <div className="absolute inset-0 bg-[#FFC800]/10 animate-pulse"></div>
                <span className="text-sm lg:text-base font-bold tracking-[0.4em] text-[#FFC800] group-hover:text-black transition-colors duration-500 uppercase relative z-10">
                    START_PROJECT
                  </span>
                </a>
              
              <span className="text-[10px] font-mono text-white/40 tracking-[0.4em] uppercase hidden lg:block">Reductive_Protocol</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Success;
