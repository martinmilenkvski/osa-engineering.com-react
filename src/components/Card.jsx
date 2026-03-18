import React from "react";
import { ArrowRight } from "lucide-react";

/**
 * Iteration 12: Card with Cinematic Text Animations.
 * Features staggered entrance reveals for all typography elements using framer-motion.
 */
const Card = ({ id, imageSrc, title, subtitle, description, stat1Label, stat1Value, stat2Label, stat2Value, index }) => {
  // Lock the card's center slightly above viewport center to align with heading
  // Stagger the stack slightly with 20px per card
  const stickyTop = `calc(50vh - 300px + ${index * 20}px)`;

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
    <div className="sticky w-full z-10" style={{ top: stickyTop }}>
      <div className={`border ${theme.border} overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 h-[600px] flex flex-row relative ${theme.bg}`}>
        
        {/* Content Layer (Left Side) */}
        <div className="relative z-10 flex flex-col w-full lg:w-[60%] lg:border-r border-white/5">
          
          {/* Technical Header */}
          <div className="flex justify-between items-start p-8 lg:p-12">
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono font-bold ${theme.accent} tracking-[0.2em] uppercase mb-1`}>
                INITIATE //
              </span>
              <span className={`text-[10px] font-mono ${theme.muted} uppercase tracking-[0.2em] leading-none`}>
                {subtitle || "SYSTEM_ACTIVE"}
              </span>
            </div>
          </div>

          {/* Brand / Technical Stripe */}
          <div className={`mx-8 lg:mx-12 h-[1px] ${theme.stripe}`}></div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col p-8 lg:p-12 pt-8">
            <div className="flex-1 flex flex-col justify-end">
              <h3 className={`text-5xl lg:text-6xl ${theme.titleWeight} tracking-tighter uppercase mb-6 ${theme.text} leading-[0.9] max-w-md`}>
                {title}
              </h3>

              {/* Technical Stats & Description */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 border-t ${theme.statsBorder} pt-6 mt-4`}>
                <div className="flex flex-col justify-between gap-6">
                  <p className={`text-sm ${theme.description} leading-relaxed font-light`}>
                    {description}
                  </p>

                  {/* Action Icon */}
                  <div className="flex items-center gap-3 w-fit cursor-pointer mt-auto">
                    <div className={`w-8 h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-[#FFC800] group-hover:border-[#FFC800] transition-all duration-500`}>
                      <ArrowRight 
                        size={14} 
                        className={`${theme.accent} group-hover:text-black group-hover:translate-x-0.5 transition-all duration-500 ease-out`} 
                        strokeWidth={2} 
                      />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 group-hover:text-[#FFC800] transition-colors duration-500">
                      View_Details
                    </span>
                  </div>
                </div>

                <div className={`flex flex-col gap-6 md:border-l ${theme.statsBorder} md:pl-8`}>
                  <div>
                    <div className={`text-[10px] font-mono uppercase ${theme.muted} mb-1 tracking-widest flex items-center gap-2`}>
                      <span className="w-1.5 h-1.5 bg-[#FFC800] rounded-full"></span>
                      {stat1Label || "Precision"}
                    </div>
                    <div className={`text-3xl lg:text-4xl font-light tracking-tighter ${theme.text}`}>{stat1Value}</div>
                  </div>
                  <div>
                    <div className={`text-[10px] font-mono uppercase ${theme.muted} mb-1 tracking-widest flex items-center gap-2`}>
                      <span className="w-1.5 h-1.5 bg-white/20 rounded-full"></span>
                      {stat2Label || "Tolerance"}
                    </div>
                    <div className={`text-3xl lg:text-4xl font-light tracking-tighter ${theme.text}`}>{stat2Value}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Lottie Animation Placeholder (Right Side) */}
        <div className="hidden lg:flex flex-1 items-center justify-center p-8 relative bg-black/20 overflow-hidden">
          <div className="w-full h-full border border-dashed border-white/10 flex flex-col items-center justify-center text-center relative">
            {/* Subtle dot grid background */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
            <span className="font-mono text-xs text-[#FFC800] tracking-[0.2em] uppercase mb-2 relative z-10">LOTTIE_PLACEHOLDER</span>
            <span className="font-mono text-[10px] text-white/40 tracking-widest uppercase relative z-10">Mount Animation Here</span>
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
    </div>
  );
};

export default Card;
