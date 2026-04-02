import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VideoReveal = () => {
  const containerRef = useRef(null);

  // Track scroll progress relative to this section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // When the element enters (0) → when it's exiting (1)
  // We want full size roughly at the midpoint (0.4–0.6)
  const width = useTransform(scrollYProgress, [0, 0.5], ["35%", "100%"]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.5], ["20px", "0px"]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.6, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.15], [0, 1]);
  
  // Parallax: shift the video vertically as we scroll
  const videoY = useTransform(scrollYProgress, [0, 1], ["-30%", "30%"]);
  // Slightly oversized video to prevent edges showing while it shifts
  const videoScale = 1.4; 

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#080808] py-[15vh] flex flex-col items-center overflow-hidden"
    >
      {/* ── Label above ── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="mb-10 flex flex-col items-center gap-3"
      >
        <div className="flex items-center gap-3">
          <div className="h-px w-8 bg-[#FFC800]" />
          <span className="font-mono text-[10px] tracking-[0.25em] text-[#FFC800] uppercase">
            Index [02]
          </span>
          <div className="h-px w-8 bg-[#FFC800]" />
        </div>
        <h2 className="text-3xl md:text-7xl font-bold tracking-tighter uppercase text-white leading-[0.95] text-center max-w-xl">
          Precision <br />
          <span className="text-white/30">In Motion.</span>
        </h2>
      </motion.div>

      {/* ── Scroll-driven video container ── */}
      <motion.div
        style={{ width, borderRadius, scale, opacity }}
        className="relative overflow-hidden bg-black"
        // Fixed aspect ratio so it looks like a screen
      >
        {/* Aspect ratio wrapper */}
        <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
          <motion.video
            src="/Cnc_hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            style={{ y: videoY, scale: videoScale }}
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Subtle vignette overlay */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)",
            }}
          />

          {/* Corner brackets (top-left) */}
          <div className="absolute top-4 left-4 w-6 h-6 pointer-events-none">
            <div className="absolute top-0 left-0 w-px h-4 bg-white/40" />
            <div className="absolute top-0 left-0 h-px w-4 bg-white/40" />
          </div>
          {/* Corner brackets (bottom-right) */}
          <div className="absolute bottom-4 right-4 w-6 h-6 pointer-events-none">
            <div className="absolute bottom-0 right-0 w-px h-4 bg-white/40" />
            <div className="absolute bottom-0 right-0 h-px w-4 bg-white/40" />
          </div>

          {/* HUD overlay label */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-[9px] tracking-[0.3em] text-white/40 uppercase">
            Live_Feed // CNC_OPS
          </div>
        </div>
      </motion.div>

      {/* ── Caption below ── */}
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-10 text-sm text-white/30 font-light tracking-wide max-w-md text-center leading-relaxed"
      >
        Adaptive motion-control systems operating at sub-micron tolerances —
        engineered for the demands of tomorrow's industry.
      </motion.p>
    </section>
  );
};

export default VideoReveal;
