import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [trail, setTrail] = useState([]);
  const [cursorMode, setCursorMode] = useState(null); // null, 'pointer', 'delivered'
  const [isDesktop, setIsDesktop] = useState(true);

  // Exact coordinates for the hot white dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smoothed coordinates
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, smoothOptions);
  const smoothY = useSpring(cursorY, smoothOptions);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    let animationFrameId;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        return newTrail.slice(-12);
      });
    };

    const handleMouseOver = (e) => {
      const deliveredEl = e.target.closest('[data-cursor="delivered"]');
      if (deliveredEl) {
        setCursorMode('delivered');
        return;
      }

      const isClickable = 
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        window.getComputedStyle(e.target).cursor === 'pointer';
        
      setCursorMode(isClickable ? 'pointer' : null);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    const decayTrail = (time) => {
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
      animationFrameId = requestAnimationFrame(decayTrail);
    };
    
    animationFrameId = requestAnimationFrame(decayTrail);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* 1. CNC Laser Trail */}
      {!cursorMode && trail.length > 1 && (
        <svg
          className="pointer-events-none fixed top-0 left-0 w-full h-full z-[9999]"
          style={{ overflow: "visible" }}
        >
          <polyline
            points={trail.map((p) => `${p.x},${p.y}`).join(" ")}
            fill="none"
            stroke="#FFC800"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              opacity: 0.6,
              filter: "blur(1px)",
            }}
          />
        </svg>
      )}

      {/* 2. The Main Milling Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[10000] pointer-events-none shadow-[0_0_10px_#fff]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: cursorMode ? 0 : 1,
        }}
      />

      {/* 3. The Hover Target / Specialized Skins */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[10000]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <AnimatePresence mode="wait">
          {cursorMode === 'pointer' && (
            <motion.div
              key="pointer-cursor"
              initial={{ width: 0, height: 0, opacity: 0 }}
              animate={{ width: 48, height: 48, opacity: 1 }}
              exit={{ width: 0, height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="rounded-full flex items-center justify-center relative shadow-[0_0_15px_rgba(255,200,0,0.3)] backdrop-blur-[2px] bg-[rgba(255,200,0,0.1)] border border-[#FFC800]"
            >
              <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#FFC800]/50 -translate-x-1/2"></div>
              <div className="absolute left-0 right-0 top-1/2 h-px bg-[#FFC800]/50 -translate-y-1/2"></div>
              <motion.div 
                animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 bg-[#FFC800] rounded-full z-10"
              />
            </motion.div>
          )}

          {cursorMode === 'delivered' && (
            <motion.div
              key="delivered-cursor"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="w-[110px] h-[110px] flex items-center justify-center relative"
            >
              {/* 1. Technical Corner Brackets */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#FFC800]"></div>
                <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#FFC800]"></div>
                <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#FFC800]"></div>
                <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#FFC800]"></div>
              </div>

              {/* 2. Rotating Scanning Ring */}
              <motion.svg 
                animate={{ rotate: 360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute w-full h-full p-2 origin-center"
              >
                <circle 
                  cx="50%" cy="50%" r="48%" 
                  fill="none" 
                  stroke="#FFC800" 
                  strokeWidth="1" 
                  strokeDasharray="20 10"
                  className="opacity-40"
                />
              </motion.svg>

              {/* 3. Main Glass Core */}
              <div className="w-[90px] h-[90px] rounded-full bg-[#FFC800]/90 backdrop-blur-md shadow-[0_0_40px_rgba(255,200,0,0.4)] flex flex-col items-center justify-center z-10">
                <span className="text-[10px] font-mono font-bold text-black tracking-[0.2em]">DELIVERED</span>
                <span className="text-[6px] font-mono font-bold text-black/40 tracking-widest mt-1">LOG_04 // VERIFIED</span>
              </div>

              {/* 4. Pulse Rings */}
              <motion.div 
                animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full border border-[#FFC800]/50"
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  );
};

export default CustomCursor;
