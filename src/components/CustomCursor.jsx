import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [trail, setTrail] = useState([]);
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  // Exact coordinates for the hot white dot
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smoothed coordinates (useful if we want a trailing ring, though we are using SVG for the trail)
  const smoothOptions = { damping: 20, stiffness: 300, mass: 0.5 };
  const smoothX = useSpring(cursorX, smoothOptions);
  const smoothY = useSpring(cursorY, smoothOptions);

  useEffect(() => {
    // Disable on mobile/touch interfaces
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsDesktop(false);
      return;
    }

    let animationFrameId;
    let lastTime = 0;

    const handleMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      
      setTrail((prev) => {
        const newTrail = [...prev, { x: e.clientX, y: e.clientY }];
        // The more points, the longer the laser tail
        return newTrail.slice(-12);
      });
    };

    const handleMouseOver = (e) => {
      const isClickable = 
        e.target.tagName.toLowerCase() === 'a' ||
        e.target.tagName.toLowerCase() === 'button' ||
        e.target.closest('a') ||
        e.target.closest('button') ||
        window.getComputedStyle(e.target).cursor === 'pointer';
        
      setIsHovering(isClickable);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    // Decay the trail continually to make it disappear when the mouse stops
    const decayTrail = (time) => {
      // Throttle decay to not eat points too fast if needed, but 60fps decay is smooth
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev.slice(1);
      });
      animationFrameId = requestAnimationFrame(decayTrail);
    };
    
    // Start decay loop
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
      {/* 1. CNC Laser Trail (Polyline) */}
      {!isHovering && trail.length > 1 && (
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

      {/* 2. The Main Milling Dot (White Hot Center) */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full z-[10000] pointer-events-none shadow-[0_0_10px_#fff]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          opacity: isHovering ? 0 : 1, // Hide when locked on target
        }}
      />

      {/* 3. The Hover Target / Warning Circle */}
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center pointer-events-none z-[10000]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: isHovering ? 48 : 0,
            height: isHovering ? 48 : 0,
            opacity: isHovering ? 1 : 0,
            backgroundColor: isHovering ? "rgba(255, 200, 0, 0.1)" : "transparent",
            border: isHovering ? "1px solid #FFC800" : "0px solid transparent",
          }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="rounded-full flex items-center justify-center relative shadow-[0_0_15px_rgba(255,200,0,0.3)] backdrop-blur-[2px]"
        >
          {isHovering && (
             <>
               {/* Crosshair accents */}
               <div className="absolute top-0 bottom-0 left-1/2 w-px bg-[#FFC800]/50 -translate-x-1/2"></div>
               <div className="absolute left-0 right-0 top-1/2 h-px bg-[#FFC800]/50 -translate-y-1/2"></div>
               
               {/* Flashing core */}
               <motion.div 
                 animate={{ opacity: [1, 0.3, 1], scale: [1, 0.8, 1] }}
                 transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                 className="w-2 h-2 bg-[#FFC800] rounded-full z-10"
               />
             </>
          )}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
