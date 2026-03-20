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
    <div className="sticky lg:sticky w-full z-10 top-20 lg:top-auto" style={{ top: typeof window !== 'undefined' && window.innerWidth >= 1024 ? stickyTop : undefined }}>
      <div className={`border ${theme.border} overflow-hidden group hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-700 h-auto lg:h-[600px] flex flex-col lg:flex-row relative ${theme.bg}`}>
        
        {/* Content Layer (Left Side) */}
        <div className="relative z-10 flex flex-col w-full lg:w-1/2 lg:border-r border-white/5">
          
          {/* Technical Header */}
          <div className="flex justify-between items-start p-8 lg:p-12 pb-2 lg:pb-12">
            <div className="flex flex-col">
              <span className={`text-[10px] font-mono font-bold ${theme.accent} tracking-[0.2em] uppercase mb-1`}>
                INITIATE //
              </span>
              <span className={`text-[10px] font-mono ${theme.muted} uppercase tracking-[0.2em] leading-none`}>
                {subtitle || "SYSTEM_ACTIVE"}
              </span>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="flex-1 flex flex-col p-8 lg:p-12 pt-4 lg:pt-8 w-full">
            <div className="flex-1 flex flex-col justify-end">
              <h3 className={`text-4xl lg:text-6xl ${theme.titleWeight} tracking-tighter uppercase mb-6 ${theme.text} leading-[0.9] max-w-sm lg:max-w-md`}>
                {title}
              </h3>

              {/* Technical Stats & Description */}
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-10 border-t ${theme.statsBorder} pt-8 mt-4`}>
                <div className="flex flex-col justify-between gap-8 md:gap-6 pr-4">
                  <p className={`text-base lg:text-sm ${theme.description} leading-relaxed font-light`}>
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

                <div className="flex flex-col justify-center gap-6 p-8 lg:p-8 bg-[#FFC800] -mx-8 md:mx-0 md:h-full">
                  <div>
                    <div className="text-[10px] font-mono uppercase text-black/60 mb-2 tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      {stat1Label || "Precision"}
                    </div>
                    <div className="text-3xl lg:text-4xl font-light tracking-tighter text-black">{stat1Value}</div>
                  </div>
                  <div className="mt-2 text-black/20 w-full h-px"></div>
                  <div>
                    <div className="text-[10px] font-mono uppercase text-black/60 mb-2 tracking-widest flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-black/40 rounded-full"></span>
                      {stat2Label || "Tolerance"}
                    </div>
                    <div className="text-3xl lg:text-4xl font-light tracking-tighter text-black">{stat2Value}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Image - Show only on larger screens */}
        <div className="hidden lg:flex w-full lg:w-1/2 relative bg-[#050505] overflow-hidden">
          {/* Subtle dot grid background overlay */}
          <div className="absolute inset-0 opacity-10 pointer-events-none z-10" style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }}></div>
          
          <div className="absolute inset-0 w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out z-0 pointer-events-none">
            {imageSrc ? (
              <img src={imageSrc} alt={title} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-white/5 flex items-center justify-center">
                <span className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase text-center px-4">IMAGE_PLACEHOLDER // {id || index}</span>
              </div>
            )}
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
