import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

/**
 * Iteration 12: Card with Cinematic Text Animations.
 * Features staggered entrance reveals for all typography elements using framer-motion.
 */
const Card = ({ id, imageSrc, title, subtitle, description, stat1Value, stat2Value, index }) => {
  // Stagger the sticky positioning for the "stacking" effect
  const stickyTop = 40 + (index * 20);

  // --- ANIMATION VARIANTS ---
  const ease = [0.16, 1, 0.3, 1];

  const containerVars = {
    initial: {},
    whileInView: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeUpVars = {
    initial: { opacity: 0, y: 30 },
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

  return (
    <motion.div 
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVars}
      className="sticky w-full"
      style={{ top: `${stickyTop}px` }}
    >
      <div className="bg-white border border-black/5 overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 min-h-[480px] flex flex-col relative">
        
        {/* Background Image - Subtle Technical Backdrop */}
        {imageSrc && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
          >
            <img 
              src={imageSrc} 
              alt=""
              className="w-full h-full object-cover grayscale opacity-[0.04] group-hover:scale-105 group-hover:opacity-[0.06] transition-all duration-1000 ease-out"
            />
          </motion.div>
        )}

        {/* Content Layer (z-10) */}
        <div className="relative z-10 flex flex-col flex-1">
          
          {/* Technical Header */}
          <div className="flex justify-between items-start p-8 lg:p-12">
            <motion.div variants={fadeUpVars} className="flex flex-col">
              <span className="text-[12px] font-mono font-bold text-black tracking-[0.3em] uppercase mb-1">
                INITIATE //
              </span>
              <span className="text-[10px] font-mono text-black/40 uppercase tracking-widest leading-none">
                {subtitle || "SYSTEM_ACTIVE"}
              </span>
            </motion.div>
            
            <motion.div variants={fadeUpVars} className="flex flex-col items-end font-mono text-[10px] text-black/40 tracking-tighter leading-[1.4]">
              <span>LAT 41.9981</span>
              <span>LNG 21.4254</span>
            </motion.div>
          </div>

          {/* Brand / Technical Stripe */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease }}
            className="mx-8 lg:mx-12 h-[1px] bg-black/5 origin-left"
          ></motion.div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col p-8 lg:p-12 pt-8">
            <div className="flex-1 flex flex-col justify-end">
              <h3 className="text-5xl lg:text-7xl font-black tracking-tighter uppercase mb-8 text-black leading-[0.85]">
                {title.split(' ').map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span variants={wordVars} className="block">{word}</motion.span>
                  </div>
                ))}
              </h3>

              {/* Technical Stats - Staggered Fade Up */}
              <motion.div variants={fadeUpVars} className="flex gap-12 mb-8 border-t border-black/5 pt-6">
                <div>
                  <div className="text-[10px] font-mono uppercase text-black/40 mb-1 tracking-widest">Precision</div>
                  <div className="text-2xl font-black text-black">{stat1Value}</div>
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase text-black/40 mb-1 tracking-widest">Tolerance</div>
                  <div className="text-2xl font-black text-black">{stat2Value}</div>
                </div>
              </motion.div>
              
              <div className="flex flex-col lg:flex-row items-end justify-between gap-8">
                <motion.p variants={fadeUpVars} className="max-w-md text-[13px] text-black font-semibold leading-relaxed opacity-60">
                  {description}
                </motion.p>

                {/* Action Icon */}
                <motion.div variants={fadeUpVars} className="ml-auto">
                  <ArrowRight 
                    size={64} 
                    className="text-black group-hover:translate-x-4 transition-transform duration-500 ease-out" 
                    strokeWidth={1.2} 
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Corner Brackets */}
        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1px] h-4 bg-black/10"></div>
          <div className="absolute top-0 right-0 h-[1px] w-4 bg-black/10"></div>
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[1px] h-4 bg-black/10"></div>
          <div className="absolute bottom-0 left-0 h-[1px] w-4 bg-black/10"></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
