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
  const listContainerVars = {
    initial: {},
    whileInView: {
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const rowVars = {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  const getStatusColor = (status) => ["VERIFIED", "COMPLETED", "DELIVERED"].includes(status) ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-[#FFC800] shadow-[0_0_10px_rgba(255,200,0,0.4)]";

  return (
    <section id="success" className="w-full bg-[#080808] border-t border-white/10">
      <div className="flex flex-col lg:flex-row-reverse">
        
        {/* --- RIGHT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] lg:h-screen lg:sticky lg:top-0 p-8 lg:p-12 border-b lg:border-b-0 lg:border-l border-white/10 flex flex-col justify-center gap-20 lg:gap-32">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-xs">INDEX [02]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </div>
            
            <h2 className="text-5xl lg:text-8xl font-bold tracking-tighter uppercase leading-[0.9]">
              TRACK<br />
              <span className="text-white/40">RECORD.</span>
            </h2>
            
            <p className="mt-8 text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Operational transparency. A live log of mission-critical engineering fulfillment across industrial verticals.
            </p>
          </div>

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
                
                <div className="font-mono text-xs text-white/50 group-hover:text-[#FFC800] transition-colors flex items-center gap-3 w-full lg:w-auto">
                  <span className="lg:hidden text-[10px] tracking-widest uppercase text-white/30 w-24">SYS_ID</span>
                  <span className="hidden lg:inline-block opacity-0 group-hover:opacity-100 transition-opacity text-[#FFC800] -ml-5 pr-2">{'>'}</span>
                  {item.id}
                </div>
                
                <div className="font-bold text-white text-xl lg:text-2xl uppercase tracking-tighter w-full lg:w-auto flex items-center gap-3">
                  <span className="lg:hidden text-[10px] font-mono tracking-widest uppercase text-white/30 w-24">CLIENT</span>
                  {item.client}
                </div>
                
                <div className="text-sm text-white/60 font-light group-hover:text-white transition-colors w-full lg:w-auto flex items-center gap-3">
                  <span className="lg:hidden text-[10px] font-mono tracking-widest uppercase text-white/30 w-24">PROJECT</span>
                  {item.project}
                </div>

                <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-end w-full lg:w-auto mt-4 lg:mt-0 pt-4 lg:pt-0 border-t border-white/5 lg:border-0">
                  <div className="text-xl font-light text-white tracking-tighter">{item.val}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor(item.status)}`}></div>
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">
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
            className="p-12 lg:p-24 text-center border-t border-white/10 relative overflow-hidden bg-white/[0.01]"
          >
            {/* Technical Background Accents */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-px bg-gradient-to-r from-transparent via-[#FFC800]/20 to-transparent"></div>
            
            {/* Corner Brackets */}
            <div className="absolute top-8 left-8 w-4 h-4 border-t border-l border-white/20"></div>
            <div className="absolute top-8 right-8 w-4 h-4 border-t border-r border-white/20"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 border-b border-l border-white/20"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 border-b border-r border-white/20"></div>

            <div className="relative z-10 flex flex-col items-center">
              <motion.div 
                variants={{
                  initial: { opacity: 0, scale: 0.8 },
                  animate: { opacity: 1, scale: 1 }
                }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="h-px w-12 bg-white/10"></div>
                <Plus size={20} className="text-[#FFC800]/50 animate-spin-slow" />
                <div className="h-px w-12 bg-white/10"></div>
              </motion.div>

              <div className="overflow-hidden mb-6">
                <motion.h3 
                  className="text-3xl lg:text-6xl font-bold tracking-[0.15em] lg:tracking-[0.2em] uppercase text-white/40 flex flex-wrap justify-center gap-x-4 lg:gap-x-6"
                >
                  {["ENGINEERING", "EXCELLENCE"].map((word, i) => (
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
                        className="block"
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
                className="flex flex-col items-center gap-6"
              >
                <div className="flex items-center gap-6">
                  <span className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">Status // Verified</span>
                  <div className="px-6 py-2 border border-[#FFC800]/30 bg-[#FFC800]/5 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-[#FFC800]/10 animate-pulse"></div>
                    <span className="text-sm lg:text-xl font-bold tracking-[0.5em] text-[#FFC800] relative z-10">
                      EST_2004
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/20 tracking-[0.4em] uppercase">Reductive_Protocol</span>
                </div>

                <div className="flex gap-12 mt-4 opacity-30 grayscale pointer-events-none hidden lg:flex">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-1 bg-white/10 overflow-hidden relative">
                      <div className="absolute inset-0 bg-white/40 w-1/2 animate-shimmer"></div>
                    </div>
                    <span className="text-[8px] font-mono tracking-widest uppercase">Audit_Lock</span>
                  </div>
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-16 h-1 bg-white/10 overflow-hidden relative">
                      <div className="absolute inset-0 bg-white/40 w-3/4 animate-shimmer"></div>
                    </div>
                    <span className="text-[8px] font-mono tracking-widest uppercase">System_Sync</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Success;
