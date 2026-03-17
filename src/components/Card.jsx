import React from "react";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import WireframeAnimation from "./WireframeAnimation";

/**
 * Iteration 12: Card with Cinematic Text Animations.
 * Features staggered entrance reveals for all typography elements using framer-motion.
 */
const Card = ({ id, imageSrc, title, subtitle, description, stat1Value, stat2Value, index }) => {
  // Lock the card's center slightly above viewport center to align with heading
  // Stagger the stack slightly with 20px per card
  const stickyTop = `calc(50vh - 300px + ${index * 20}px)`;

  // --- ANIMATION VARIANTS ---
  const ease = [0.16, 1, 0.3, 1];

  const containerVars = {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const fadeUpVars = {
    initial: { opacity: 0, y: 30 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  };

  const wordVars = {
    initial: { y: "110%" },
    animate: { 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  };

  // --- THEME LOGIC (Unified Dark Theme + Yellow Accents) ---
  const theme = {
    bg: "bg-[#080808]",
    border: "border-white/10",
    text: "text-white",
    muted: "text-white/30",
    accent: "text-[#FFC800]",
    description: "text-white/50",
    stripe: "bg-[#FFC800]",
    statsBorder: "border-white/10",
    bracket: "bg-white/20",
    titleWeight: "antialiased font-bold"
  };

  return (
    <motion.div 
      initial="initial"
      animate="animate"
      variants={containerVars}
      className="sticky w-full z-10"
      style={{ top: stickyTop }}
    >
      <div className={`border ${theme.border} overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 h-[600px] flex flex-row relative ${theme.bg}`}>
        
        {/* Content Layer (Left Side) */}
        <div className="relative z-10 flex flex-col flex-1 w-full lg:w-[60%] border-r border-black/5">
          
          {/* Technical Header */}
          <div className="flex justify-between items-start p-8 lg:p-12">
            <motion.div variants={fadeUpVars} className="flex flex-col">
              <span className={`text-[10px] font-mono font-bold ${theme.accent} tracking-[0.2em] uppercase mb-1`}>
                INITIATE //
              </span>
              <span className={`text-[10px] font-mono ${theme.muted} uppercase tracking-[0.2em] leading-none`}>
                {subtitle || "SYSTEM_ACTIVE"}
              </span>
            </motion.div>
          </div>

          {/* Brand / Technical Stripe */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease }}
            className={`mx-8 lg:mx-12 h-[1px] ${theme.stripe} origin-left`}
          ></motion.div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col p-8 lg:p-12 pt-8">
            <div className="flex-1 flex flex-col justify-end">
              <h3 className={`text-4xl lg:text-5xl ${theme.titleWeight} tracking-tighter uppercase mb-6 ${theme.text} leading-[0.9] max-w-md`}>
                {title.split(' ').map((word, i) => (
                  <div key={i} className="overflow-hidden">
                    <motion.span variants={wordVars} className="block">{word}</motion.span>
                  </div>
                ))}
              </h3>

              {/* Technical Stats - Staggered Fade Up */}
              <motion.div variants={fadeUpVars} className={`flex gap-8 mb-6 border-t ${theme.statsBorder} pt-4`}>
                <div>
                  <div className={`text-[10px] font-mono uppercase ${theme.muted} mb-1 tracking-widest`}>Precision</div>
                  <div className={`text-xl font-black ${theme.text}`}>{stat1Value}</div>
                </div>
                <div>
                  <div className={`text-[10px] font-mono uppercase ${theme.muted} mb-1 tracking-widest`}>Tolerance</div>
                  <div className={`text-xl font-black ${theme.text}`}>{stat2Value}</div>
                </div>
              </motion.div>
              
              <div className="flex flex-col items-start gap-6">
                <motion.p variants={fadeUpVars} className={`max-w-sm text-sm ${theme.description} leading-relaxed font-light`}>
                  {description}
                </motion.p>

                {/* Action Icon */}
                <motion.div variants={fadeUpVars}>
                  <ArrowRight 
                    size={48} 
                    className={`${theme.accent} group-hover:translate-x-4 transition-transform duration-500 ease-out`} 
                    strokeWidth={1.2} 
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Animation Layer (Right Side) */}
        <div className="hidden lg:flex w-[40%] bg-black/20 items-center justify-center p-8 overflow-hidden relative border-l border-white/5">
          <WireframeAnimation index={index} />
          
          {/* Technical Overlay for Animation */}
          <div className={`absolute top-4 right-4 font-mono text-[8px] ${theme.muted} tracking-[0.2em] uppercase leading-none vertical-text flex flex-col gap-4`}>
            <span>SYS_ANIM_ACTIVE</span>
            <span>WFRM_V01</span>
          </div>
        </div>

        {/* Technical Corner Brackets */}
        <div className="absolute top-0 right-0 w-8 h-8 pointer-events-none">
          <div className={`absolute top-0 right-0 w-[1px] h-4 ${theme.bracket}`}></div>
          <div className={`absolute top-0 right-0 h-[1px] w-4 ${theme.bracket}`}></div>
        </div>
        <div className="absolute bottom-0 left-0 w-8 h-8 pointer-events-none">
          <div className={`absolute bottom-0 left-0 w-[1px] h-4 ${theme.bracket}`}></div>
          <div className={`absolute bottom-0 left-0 h-[1px] w-4 ${theme.bracket}`}></div>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
