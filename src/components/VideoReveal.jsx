import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Play, Pause } from "lucide-react";

const VideoReveal = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Track scroll progress for the shutter reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "center center"],
  });

  const { scrollYProgress: parallaxProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // The mechanical "shutter" reveal: animates horizontal and vertical inset (clip-path)
  // Maps 0->1 to 40% layout crop down to 0% crop.
  const insetX = useTransform(scrollYProgress, [0, 1], [30, 0]);
  const insetY = useTransform(scrollYProgress, [0, 1], [15, 0]);
  
  // Custom transform to generate the clip-path string
  const clipPath = useTransform(
    [insetX, insetY],
    ([x, y]) => `inset(${y}% ${x}% ${y}% ${x}%)`
  );

  // Slow subtle parallax on the video itself
  const videoY = useTransform(parallaxProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#080808] border-t border-white/5 py-32 lg:py-48 flex flex-col items-center overflow-hidden"
    >
      {/* ── Structured Typography & Grid Lines ── */}
      <div className="w-full px-6 md:px-8 lg:px-12 mb-16 lg:mb-24 flex justify-between items-end border-b border-white/5 pb-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-[#FFC800]" />
            <span className="font-mono text-[10px] tracking-[0.25em] text-[#FFC800] uppercase">
              Index [02]
            </span>
          </div>
          <h2 className="text-fluid-h2 font-bold uppercase text-white leading-[0.85] tracking-tighter">
            Precision <br />
            <span className="text-white/30 text-fluid-h2 whitespace-nowrap">In Motion.</span>
          </h2>
        </div>

        <p className="hidden md:block text-white/40 uppercase leading-normal font-normal max-w-sm text-right font-mono text-xs tracking-tight">
          Adaptive motion-control systems <br />
          operating at sub-micron tolerances. <br />
          Engineered for the demands of tomorrow.
        </p>
      </div>

      <p className="md:hidden text-white/40 uppercase leading-normal font-normal max-w-sm text-left font-mono text-xs tracking-tight px-6 mb-16">
        Adaptive motion-control systems operating at sub-micron tolerances. Engineered for the demands of tomorrow.
      </p>

      {/* ── Immersive Video Container block ── */}
      <div className="w-full px-6 md:px-8 lg:px-12 relative flex justify-center z-10">
        
        {/* Shutter Reveal Wrapper using clip-path */}
        <motion.div
          style={{ clipPath }}
          className="relative w-full h-[60vh] lg:h-[85vh] bg-[#050505] overflow-hidden group cursor-pointer"
          onClick={togglePlay}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Animated Video Element */}
          <motion.video
            ref={videoRef}
            src="/zd.mp4"
            muted
            loop
            playsInline
            style={{ y: videoY, scale: 1.15, filter: "grayscale(1) contrast(1.1)" }}
            className="absolute inset-0 w-full h-full object-cover origin-center"
          />

          {/* Premium Overlays: Blend modes and grains instead of basic vignettes */}
          <div className="absolute inset-0 bg-black/30 pointer-events-none mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080808]/80 pointer-events-none"></div>

          {/* Core HUD / Heads Up Display */}
          <div className="absolute inset-0 pointer-events-none p-6 lg:p-8 flex flex-col justify-between">
            {/* Top HUD */}
            <div className="flex justify-between items-start">
              {/* Corner brackets simulating technical viewfinder */}
              <div className="w-8 h-8 relative">
                <div className="absolute top-0 left-0 w-[1px] h-full bg-white/40"></div>
                <div className="absolute top-0 left-0 w-full h-[1px] bg-white/40"></div>
              </div>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 bg-black/40 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-full">
                <motion.div 
                  animate={{ opacity: isPlaying ? [1, 0, 1] : 1 }} 
                  transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                  className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-500' : 'bg-[#FFC800]'}`}
                ></motion.div>
                <span className="font-mono text-[9px] tracking-widest text-white/70 uppercase">
                  {isPlaying ? 'REC // ACTIVE' : 'STANDBY // 00:00:00'}
                </span>
              </div>
            </div>

            {/* Bottom HUD */}
            <div className="flex justify-between items-end">
              <div className="font-mono text-[10px] tracking-[0.3em] text-white/50 uppercase">
                LAT 41.99 // OPS
              </div>
              
              <div className="w-8 h-8 relative">
                <div className="absolute bottom-0 right-0 w-[1px] h-full bg-white/40"></div>
                <div className="absolute bottom-0 right-0 w-full h-[1px] bg-white/40"></div>
              </div>
            </div>
          </div>

          {/* Interactive Play/Pause Button (Centered, Glassmorphic) */}
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: isHovered ? 1 : 0.9, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center text-white/80 z-20 pointer-events-none"
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 fill-current" />
            ) : (
              <Play className="w-8 h-8 fill-current ml-1" />
            )}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default VideoReveal;
