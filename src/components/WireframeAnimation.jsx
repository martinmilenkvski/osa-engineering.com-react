import React from 'react';
import { motion } from 'framer-motion';

const WireframeAnimation = ({ index }) => {
  const ease = [0.16, 1, 0.3, 1];

  // Common variants
  const draw = {
    initial: { pathLength: 0, opacity: 0 },
    animate: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        opacity: { duration: 0.5 }
      }
    }
  };

  const renderAnimation = () => {
    switch (index) {
      case 1: // Design & Prototyping - Geometric 3D Wireframe
        return (
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full text-[#FFC800]/40"
            initial="initial"
            animate="animate"
          >
            <motion.path
              d="M200,100 L300,150 L300,250 L200,300 L100,250 L100,150 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              variants={draw}
            />
            <motion.path
              d="M200,100 L200,300 M300,150 L100,250 M300,250 L100,150"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              variants={draw}
            />
            <motion.circle
              cx="200"
              cy="200"
              r="120"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="4 4"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.svg>
        );

      case 2: // Advanced Engineering - Mechanical Gears
        return (
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full text-[#FFC800]/40"
          >
            <motion.g
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              style={{ originX: "200px", originY: "200px" }}
            >
              {[...Array(12)].map((_, i) => (
                <motion.rect
                  key={i}
                  x="185"
                  y="80"
                  width="30"
                  height="40"
                  fill="currentColor"
                  style={{ rotate: i * 30, transformOrigin: "15px 120px" }}
                />
              ))}
              <circle cx="200" cy="200" r="80" fill="none" stroke="currentColor" strokeWidth="20" />
            </motion.g>
            <motion.g
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              style={{ originX: "320px", originY: "320px" }}
            >
              {[...Array(8)].map((_, i) => (
                <motion.rect
                  key={i}
                  x="310"
                  y="250"
                  width="20"
                  height="30"
                  fill="currentColor"
                  style={{ rotate: i * 45, transformOrigin: "10px 70px" }}
                />
              ))}
              <circle cx="320" cy="320" r="50" fill="none" stroke="currentColor" strokeWidth="15" />
            </motion.g>
          </motion.svg>
        );

      case 3: // Seamless Integration - Connection Network
        return (
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full text-[#FFC800]/40"
          >
            <motion.path
              d="M100,100 L300,100 L300,300 L100,300 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="10 10"
            />
            {[...Array(5)].map((_, i) => (
              <motion.circle
                key={i}
                cx={100 + Math.random() * 200}
                cy={100 + Math.random() * 200}
                r="4"
                fill="currentColor"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 2 + i,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            ))}
            <motion.path
              d="M150,150 L250,250 M150,250 L250,150"
              stroke="currentColor"
              strokeWidth="1"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, repeat: Infinity, alternate: true }}
            />
          </motion.svg>
        );

      case 4: // Life-cycle Support - Orbital Signals
        return (
          <motion.svg
            viewBox="0 0 400 400"
            className="w-full h-full text-[#FFC800]/40"
          >
            {[...Array(3)].map((_, i) => (
              <motion.circle
                key={i}
                cx="200"
                cy="200"
                r={40 + i * 40}
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: [0, 1, 0], scale: [0.8, 1.2, 1.4] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 1,
                  ease: "linear"
                }}
              />
            ))}
            <motion.path
              d="M200,50 L200,350 M50,200 L350,200"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeDasharray="2 2"
            />
          </motion.svg>
        );

      default:
        return null;
    }
  };

  return (
    <div className="w-full h-full flex items-center justify-center p-12 overflow-hidden">
      <div className="w-full h-full max-w-[400px] max-h-[400px] relative">
        {/* Subtle Background Grid for all animations */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(currentColor 0.5px, transparent 0.5px)', backgroundSize: '20px 20px' }} />
        {renderAnimation()}
      </div>
    </div>
  );
};

export default WireframeAnimation;
