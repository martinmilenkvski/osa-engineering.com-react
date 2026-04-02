import React, { useEffect, useRef } from 'react';
import { useInView, animate, motion } from 'framer-motion';

const CncPrototypingIcon = ({ className = "w-full h-full max-w-[400px] max-h-[400px]" }) => {
  const pathRef = useRef(null);
  const stockRef = useRef(null);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.5 });

  // --------------------------------------------------------
  // ISOMETRIC MATH ENGINE
  // --------------------------------------------------------
  const cx = 250;
  const cy = 250;
  const cos30 = Math.cos(Math.PI / 6);
  const sin30 = Math.sin(Math.PI / 6);

  // Convert 3D coordinates (x,y,z) to 2D isometric projection
  const iso = (x, y, z) => ({
    x: cx + (x - y) * cos30,
    y: cy + (x + y) * sin30 - z,
  });

  // --------------------------------------------------------
  // GENERATE STOCK WIREFRAME (The outer block)
  // --------------------------------------------------------
  const s = 140; // Size of the stock block
  const zT = 100; // Top Z height
  const zB = -60; // Bottom Z height

  const corners = [
    { x: -s, y: -s }, // Top Left
    { x: s, y: -s },  // Top Right
    { x: s, y: s },   // Bottom Right
    { x: -s, y: s },  // Bottom Left
  ];

  const topFace = corners.map((c) => iso(c.x, c.y, zT));
  const botFace = corners.map((c) => iso(c.x, c.y, zB));

  let stockPath = `M ${topFace[0].x} ${topFace[0].y} `;
  topFace.forEach((p) => (stockPath += `L ${p.x} ${p.y} `));
  stockPath += `Z `; // Close top face

  stockPath += `M ${botFace[0].x} ${botFace[0].y} `;
  botFace.forEach((p) => (stockPath += `L ${p.x} ${p.y} `));
  stockPath += `Z `; // Close bottom face

  // Draw vertical connecting edges
  for (let i = 0; i < 4; i++) {
    stockPath += `M ${topFace[i].x} ${topFace[i].y} L ${botFace[i].x} ${botFace[i].y} `;
  }

  // --------------------------------------------------------
  // GENERATE CONTINUOUS CNC TOOLPATH (The circular pocket)
  // --------------------------------------------------------
  const generateToolpath = () => {
    let path = '';
    const layers = 8;
    const startR = 110;
    const endR = 20;
    const startZ = 100;
    const endZ = -20;
    const resolution = 40; // points per circle

    for (let l = 0; l < layers; l++) {
      const progress = l / (layers - 1);
      const r = startR - progress * (startR - endR);
      const z = startZ - progress * (startZ - endZ);

      for (let i = 0; i <= resolution; i++) {
        const angle = (i / resolution) * Math.PI * 2;
        const x = r * Math.cos(angle);
        const y = r * Math.sin(angle);
        const pt = iso(x, y, z);

        if (i === 0 && l === 0) path += `M ${pt.x} ${pt.y} `;
        else path += `L ${pt.x} ${pt.y} `;
      }

      if (l < layers - 1) {
        const nextProgress = (l + 1) / (layers - 1);
        const nextR = startR - nextProgress * (startR - endR);
        const nextZ = startZ - nextProgress * (startZ - endZ);

        const stepInPt = iso(nextR, 0, z);
        path += `L ${stepInPt.x} ${stepInPt.y} `;

        const plungePt = iso(nextR, 0, nextZ);
        path += `L ${plungePt.x} ${plungePt.y} `;
      }
    }
    return path;
  };

  // --------------------------------------------------------
  // ANIMATION EFFECTS
  // --------------------------------------------------------
  useEffect(() => {
    if (isInView && stockRef.current) {
      // Gentle reveal of the stock material block
      animate(stockRef.current, { opacity: 0.3 }, { duration: 2, ease: "easeIn" });
    }
  }, [isInView]);

  return (
    <svg
      ref={containerRef}
      viewBox="0 0 500 500"
      className={`${className} pointer-events-none drop-shadow-2xl`}
      style={{ overflow: 'visible' }}
    >
      {/* Axis / Reticle Lines */}
      <g stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.8">
        <line x1="250" y1="50" x2="250" y2="450" />
        <line x1="50" y1="250" x2="450" y2="250" />
        <circle cx="250" cy="250" r="4" fill="none" />
      </g>

      {/* Stock Material Wireframe */}
      <path
        ref={stockRef}
        d={stockPath}
        fill="none"
        stroke="#ffffff"
        strokeWidth="1"
        strokeLinejoin="round"
      />

      {/* CNC Stepped Toolpath */}
      <motion.path
        d={generateToolpath()}
        fill="none"
        stroke="#FFC800"
        strokeWidth="1.5"
        strokeLinejoin="round"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={isInView ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{
          duration: 4,
          ease: [0.25, 1, 0.5, 1],
          repeat: Infinity,
          repeatType: "loop",
          repeatDelay: 1.5
        }}
      />
      
      {/* Start/End Plunge Points */}
      <circle cx={iso(110, 0, 100).x} cy={iso(110, 0, 100).y} r="2.5" fill="#FFC800" />
      <circle cx={iso(20, 0, -20).x} cy={iso(20, 0, -20).y} r="2.5" fill="#FFC800" />
    </svg>
  );
};

export default CncPrototypingIcon;
