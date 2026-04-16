import React, { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { motion } from "framer-motion";
import ScrambleText from "./ScrambleText";
import TechGrid from "./TechGrid";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });
  const [isHovered, setIsHovered] = useState(false);

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

  const formContainerVars = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1, delayChildren: 0.4 } }
  };

  const formElementVars = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0, transition: { duration: 0.8, ease } }
  };

  return (
    <section id="contact" className="w-full bg-[#080808] border-t border-white/10 relative z-10 overflow-hidden">
      <div className="flex flex-col lg:flex-row max-w-[1700px] mx-auto w-full">
        
        {/* --- LEFT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] lg:h-[100svh] lg:sticky lg:top-0 px-6 md:px-8 lg:px-12 py-12 lg:py-16 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between relative overflow-hidden">
          <TechGrid opacity="opacity-70" maskPosition="center center" />
          <motion.div initial="initial" whileInView="whileInView" viewport={{ once: true, amount: 0.2 }}>
            <motion.div variants={fadeUpVars} className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-tech-label">INDEX [05]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </motion.div>
            
            <motion.h2 variants={titleContainerVars} className="text-fluid-h2 font-bold tracking-tightest uppercase leading-none">
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block">SECURE</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block text-white/40">UPLINK.</motion.span>
              </div>
            </motion.h2>

            <motion.div variants={fadeUpVars} className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              <span className="text-tech-label font-mono font-bold text-white/90">STATUS: ACTIVE</span>
            </motion.div>
            
            <motion.p variants={fadeUpVars} className="mt-8 text-fluid-body text-white/50 uppercase font-mono tracking-tight max-w-xs">
              Establish a direct communication channel. Upload technical blueprints or project specifications to initiate reductive protocol analysis.
            </motion.p>
          </motion.div>

          <motion.div 
            variants={fadeUpVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
             <div className="font-mono text-tech-label text-white/30 uppercase mb-4">Uplink Encryption</div>
             <div className="flex items-center gap-4">
                <div className="text-tech-label font-bold text-[#FFC800] tracking-blueprint">[ AES-256 ]</div>
                <div className="flex-1 h-px bg-white/10"></div>
                <Plus size={12} className="text-white/20" />
             </div>
          </motion.div>
        </div>

        {/* --- RIGHT: TERMINAL FORM --- */}
        <div className="w-full lg:w-[65%] min-h-[80vh] flex items-center px-6 md:px-8 lg:px-12 py-12 lg:py-20">
          <motion.form 
            variants={formContainerVars}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, amount: 0.1 }}
            className="w-full space-y-12 lg:space-y-20"
          >
            {/* Input Name */}
            <motion.div variants={formElementVars} className="relative group">
               <label className="block text-tech-label font-mono text-white/30 uppercase mb-4 group-focus-within:text-[#FFC800] transition-colors">
                  IDENT_NAME //
               </label>
               <input 
                 type="text" 
                 placeholder="00_YOUR_NAME"
                 className="w-full bg-transparent border-b border-white/10 py-6 text-2xl lg:text-5xl font-bold tracking-tightest text-white placeholder:text-white/10 outline-none focus:border-[#FFC800] transition-all"
               />
            </motion.div>

            {/* Input Email */}
            <motion.div variants={formElementVars} className="relative group">
               <label className="block text-tech-label font-mono text-white/30 uppercase mb-4 group-focus-within:text-[#FFC800] transition-colors">
                  IDENT_CONTACT //
               </label>
               <input 
                 type="email" 
                 placeholder="NAME@DOMAIN.COM"
                 className="w-full bg-transparent border-b border-white/10 py-6 text-2xl lg:text-5xl font-bold tracking-tightest text-white placeholder:text-white/10 outline-none focus:border-[#FFC800] transition-all"
               />
            </motion.div>

            {/* Input Project */}
            <motion.div variants={formElementVars} className="relative group">
               <label className="block text-tech-label font-mono text-white/30 uppercase mb-4 group-focus-within:text-[#FFC800] transition-colors">
                  OP_DETAILS //
               </label>
               <textarea 
                 rows="1"
                 placeholder="DESCRIBE_PROJECT_GOALS..."
                 className="w-full bg-transparent border-b border-white/10 py-6 text-2xl lg:text-5xl font-bold tracking-tightest text-white placeholder:text-white/10 outline-none focus:border-[#FFC800] transition-all resize-none"
               />
            </motion.div>

            {/* Submit Button */}
            <motion.button 
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              variants={formElementVars} 
              className="group flex items-center justify-between w-full bg-[#FFC800] px-6 md:px-8 lg:px-12 py-8 lg:py-12 hover:bg-white transition-colors duration-500 overflow-hidden relative"
            >
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="text-tech-label font-mono text-black font-bold">MODE: TRANSMIT</span>
               </div>
               
               <span className="text-3xl lg:text-5xl font-bold tracking-tightest uppercase text-black">
                 <ScrambleText text="Initiate Uplink" trigger={isHovered} />
               </span>

               <ArrowUpRight className="w-12 h-12 lg:w-20 lg:h-20 text-black group-hover:rotate-45 transition-transform duration-500" />
            </motion.button>

            <motion.div variants={formElementVars} className="flex justify-between items-center text-tech-label font-mono text-white/20 uppercase tracking-blueprint">
               <span>System: Ready</span>
                <div className="flex items-center gap-2">
                  <motion.div 
                    animate={{ opacity: [1, 0.4, 1] }} 
                    transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                    className="w-1.5 h-1.5 rounded-full bg-[#FFC800]"
                  ></motion.div>
                  <span>Uplink_Primary: Online</span>
                </div>
            </motion.div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
