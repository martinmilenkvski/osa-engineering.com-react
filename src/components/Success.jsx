import React, { useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import TechGrid from "./TechGrid";

const Success = () => {
  const successData = [
    { id: "LOG-001", client: "ALKALOID", project: "Chemical Reactor Frame", status: "VERIFIED", val: "±0.005mm", img: "/success-img/img1.png" },
    { id: "LOG-002", client: "TITAN", project: "Kiln Support Roller", status: "ACTIVE", val: "10.5 Tons", img: "/success-img/img2.png" },
    { id: "LOG-003", client: "MAKSTIL", project: "Conveyor Roller Shaft", status: "COMPLETED", val: "4-Axis", img: "/success-img/img3.png" },
    { id: "LOG-004", client: "LEK", project: "Stainless Bio-Probe", status: "STABLE", val: "Polished", img: "/success-img/img4.png" },
    { id: "LOG-005", client: "ACIBADEM", project: "MRI Table Component", status: "DELIVERED", val: "Non-Mag", img: "/success-img/img5.png" },
    { id: "LOG-006", client: "OKTA", project: "Valve Actuator Coupling", status: "MONITORING", val: "High-Temp", img: "/success-img/img6.png" },
    { id: "LOG-007", client: "FENI", project: "Smelter Cooling Block", status: "VERIFIED", val: "Copper", img: "/success-img/img7.png" },
    { id: "LOG-008", client: "SASSA", project: "Excavator Hub Assembly", status: "ACTIVE", val: "Ø1200mm", img: "/success-img/img8.png" },
  ];

  const [hoveredIdx, setHoveredIdx] = useState(null);
  
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  const handleMouseMove = (e) => {
    // Center the 500x333 box on the cursor
    cursorX.set(e.clientX - 250);
    cursorY.set(e.clientY - 166);
  };

  // --- ANIMATION VARIANTS ---
  const ease = [0.16, 1, 0.3, 1];

  const fadeUpVars = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 1.2, ease } }
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

  const lineVars = {
    initial: { scaleX: 0, opacity: 0 },
    whileInView: { scaleX: 1, opacity: 1, transition: { duration: 1, ease } }
  };

  const bracketVars = {
    initial: { scale: 0, opacity: 0 },
    whileInView: { scale: 1, opacity: 1, transition: { duration: 0.8, ease, delay: 0.4 } }
  };

  const getStatusColor = (status) => ["VERIFIED", "COMPLETED", "DELIVERED"].includes(status) ? "bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.4)]" : "bg-[#FFC800] shadow-[0_0_10px_rgba(255,200,0,0.4)]";

  return (
    <section id="success" className="w-full bg-[#080808] border-t border-white/10 relative overflow-x-clip">
      <TechGrid opacity="opacity-30" maskPosition="center center" />
      <div className="flex flex-col lg:flex-row-reverse lg:items-start max-w-[1700px] mx-auto w-full">
        
        {/* --- RIGHT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] lg:h-screen lg:sticky lg:top-0 px-6 md:px-8 lg:px-12 py-12 lg:py-16 border-b lg:border-b-0 lg:border-l border-white/10 flex flex-col justify-center gap-20 lg:gap-32">
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUpVars} className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-tech-label">INDEX [02]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </motion.div>
            
            <motion.h2 variants={titleContainerVars} className="text-fluid-h2 font-bold tracking-tightest uppercase leading-none">
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block">TRACK</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block text-white/40">RECORD.</motion.span>
              </div>
            </motion.h2>

            <motion.div variants={fadeUpVars} className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              <span className="text-tech-label font-mono font-bold text-white/90">STATUS: ACTIVE</span>
            </motion.div>
            
            <motion.p variants={fadeUpVars} className="mt-8 text-fluid-body text-white/50 uppercase font-mono tracking-tight max-w-sm">
              Operational transparency. A live log of mission-critical engineering fulfillment across industrial verticals.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1 }} 
            transition={{ delay: 0.8, duration: 1 }} 
            viewport={{ once: true }} 
            className="hidden lg:block mt-8"
          >
             <div className="inline-block border border-white/10 px-4 py-3 bg-white/5">
                <span className="text-tech-label font-mono text-white/40 uppercase">Metric // Visualization</span>
                <div className="flex items-end gap-1 mt-2 h-8">
                  {[40, 70, 45, 90, 60, 80, 50, 95].map((h, i) => (
                    <motion.div 
                      key={i} 
                      className={`w-2 ${i >= 6 ? 'bg-white/10' : 'bg-[#FFC800]'}`}
                      animate={{ height: [`${h}%`, `${Math.max(10, h - 40)}%`, `${h}%`] }}
                      transition={{ duration: 1.5 + (i * 0.1), repeat: Infinity, ease: "easeInOut" }}
                    />
                  ))}
                  <span className="text-tech-label font-mono text-[#FFC800] ml-2">SYNCED</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* --- LEFT: DATA LOGS --- */}
        <div className="w-full lg:w-[65%] pt-12 lg:pt-24">
          <motion.div 
            variants={listContainerVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
            className="flex flex-col"
          >
            {/* Header Row */}
            <motion.div 
              variants={rowVars}
              className="hidden lg:grid lg:grid-cols-4 px-6 md:px-8 lg:px-12 py-6 bg-white/[0.02] border-b border-white/10 font-mono text-tech-label text-white/30 uppercase"
            >
              <div>System ID</div>
              <div>Counterparty</div>
              <div>Operation Project</div>
              <div className="text-right">Metrics / Status</div>
            </motion.div>

            {/* List Items */}
            {successData.map((item, idx) => (
              <motion.div 
                key={idx}
                variants={rowVars}
                className="flex flex-col lg:grid lg:grid-cols-4 items-start lg:items-center gap-4 lg:gap-0 px-6 md:px-8 lg:px-12 py-10 group hover:bg-white/[0.02] transition-colors duration-500 relative border-b border-white/5 last:border-0"
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
                onMouseMove={handleMouseMove}
              >
                <div className="absolute left-0 top-0 bottom-0 w-px bg-[#FFC800] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-top"></div>
                
                <div className="font-mono text-fluid-body text-white/50 group-hover:text-[#FFC800] transition-colors flex items-center gap-3 w-full lg:w-auto">
                  <span className="lg:hidden text-tech-label text-white/30 w-24">SYS_ID</span>
                  <span className="hidden lg:inline-block opacity-0 group-hover:opacity-100 transition-opacity text-[#FFC800] -ml-5 pr-2">{'>'}</span>
                  {item.id}
                </div>
                
                <div className="font-bold text-white text-fluid-h3 uppercase tracking-tightest leading-none w-full lg:w-auto flex items-center gap-3 mt-2 lg:mt-0">
                  <span className="lg:hidden text-tech-label font-mono text-white/30 w-24">CLIENT</span>
                  {item.client}
                </div>
                
                <div className="text-fluid-body text-white/60 uppercase font-mono tracking-tight group-hover:text-white transition-colors w-full lg:w-auto flex items-center gap-3 mt-2 lg:mt-0">
                  <span className="lg:hidden text-tech-label font-mono text-white/30 w-24">PROJECT</span>
                  {item.project}
                </div>

                <div className="flex flex-row lg:flex-col justify-between lg:justify-center items-center lg:items-end w-full lg:w-auto mt-6 lg:mt-0 pt-6 lg:pt-0 border-t border-white/5 lg:border-0">
                  <div className="text-fluid-h3 font-bold text-white tracking-tightest">{item.val}</div>
                  <div className="flex items-center gap-2 mt-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${getStatusColor(item.status)}`}></div>
                    <span className="text-tech-label font-mono text-white/40 uppercase">
                      {item.status}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>


        </div>
      </div>
      
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[100] overflow-hidden w-[500px] h-[333px] shadow-2xl invisible lg:visible border border-white/10"
        style={{
          x: smoothX,
          y: smoothY,
          opacity: hoveredIdx !== null ? 1 : 0,
          scale: hoveredIdx !== null ? 1 : 0.8,
        }}
        transition={{ opacity: { duration: 0.3 }, scale: { duration: 0.3 } }}
      >
        <AnimatePresence>
          {hoveredIdx !== null && successData[hoveredIdx]?.img && (
            <motion.img
              key={hoveredIdx}
              src={successData[hoveredIdx].img}
              alt="Project Reference"
              className="absolute top-0 left-0 w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.9]"
              initial={{ clipPath: "inset(0% 0% 100% 0%)", zIndex: 10 }}
              animate={{ clipPath: "inset(0% 0% 0% 0%)", zIndex: 10 }}
              exit={{ opacity: 0.99, zIndex: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Success;
