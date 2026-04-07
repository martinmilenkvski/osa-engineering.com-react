import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";

const CustomCursor = () => {
  const [cursorMode, setCursorMode] = useState(null); // null, 'pointer', 'delivered'
  const [isDesktop, setIsDesktop] = useState(true);

  // Exact coordinates for the razor-sharp core dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smoothed coordinates for the trailing geometric bounds
  const smoothOptions = { damping: 20, stiffness: 400, mass: 0.5 };
  const smoothX = useSpring(cursorX, smoothOptions);
  const smoothY = useSpring(cursorY, smoothOptions);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const deliveredEl = e.target.closest('[data-cursor="delivered"]');
      if (deliveredEl) {
        setCursorMode('delivered');
        return;
      }

      const playEl = e.target.closest('[data-cursor="play"]');
      if (playEl) {
        setCursorMode('play');
        return;
      }

      const pauseEl = e.target.closest('[data-cursor="pause"]');
      if (pauseEl) {
        setCursorMode('pause');
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

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isDesktop) return null;

  return (
    <>
      {/* 1. Core Needle Dot (Rigid exactly aligned tracking) */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-white rounded-full z-[10001] pointer-events-none mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: (cursorMode === 'pointer' || cursorMode === 'delivered' || cursorMode === 'play' || cursorMode === 'pause') ? 0 : 1,
        }}
      />

      {/* 2. Trailing Geometric Ring / Morphing Void Bubble */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[10000] mix-blend-difference"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: cursorMode === 'delivered' ? 110 : (cursorMode === 'play' || cursorMode === 'pause') ? 110 : cursorMode === 'pointer' ? 48 : 32,
            height: cursorMode === 'delivered' ? 110 : (cursorMode === 'play' || cursorMode === 'pause') ? 110 : cursorMode === 'pointer' ? 48 : 32,
            backgroundColor: (cursorMode === 'pointer' || cursorMode === 'delivered' || cursorMode === 'play' || cursorMode === 'pause') ? "#ffffff" : "transparent",
            borderColor: "#ffffff",
            borderWidth: (cursorMode === 'pointer' || cursorMode === 'delivered' || cursorMode === 'play' || cursorMode === 'pause') ? "0px" : "1px",
          }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="rounded-full flex items-center justify-center border-solid"
        >
          <AnimatePresence>
            {cursorMode === 'delivered' && (
              <motion.span
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="text-[10px] font-mono font-bold tracking-[0.2em] text-black"
              >
                VIEW
              </motion.span>
            )}
            {cursorMode === 'play' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center justify-center"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </motion.div>
            )}
            {cursorMode === 'pause' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="flex items-center justify-center"
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="black">
                  <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                </svg>
              </motion.div>
            )}
           </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
