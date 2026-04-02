import React from 'react';

const LifecycleSupportIcon = ({ className = "w-full h-full max-w-[400px] max-h-[400px]" }) => {
  // Ellipse Math: Circumference of rx=140 ry=45 is approximately 610
  const circ = 610; 
  const dashLength = 100; 
  const gapLength = circ - dashLength;

  return (
    <svg
      viewBox="0 0 500 500"
      className={`${className} pointer-events-none drop-shadow-2xl`}
      style={{ overflow: 'visible' }}
    >
      {/* 1. STATIC BASE: The Optical Measurement Grid (Maintains consistency across the set) */}
      <g stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.8">
        <line x1="250" y1="50" x2="250" y2="450" />
        <line x1="50" y1="250" x2="450" y2="250" />
        <circle cx="250" cy="250" r="4" fill="none" />
      </g>

      {/* 2. THE GYROSCOPE: Continuously tumbling 3D lifecycle sphere */}
      <g>
        {/* Slow, elegant 360-degree rotation of the entire system */}
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 250 250"
          to="360 250 250"
          dur="60s"
          repeatCount="indefinite"
        />

        {/* ORBITAL PATH 1 (0 degrees) */}
        <g>
          <ellipse cx="250" cy="250" rx="140" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="250" cy="250" rx="140" ry="45" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray={`${dashLength} ${gapLength}`}>
            <animate attributeName="stroke-dashoffset" values={`${circ};0`} dur="4s" repeatCount="indefinite" />
          </ellipse>
        </g>

        {/* ORBITAL PATH 2 (60 degrees) */}
        <g transform="rotate(60 250 250)">
          <ellipse cx="250" cy="250" rx="140" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="250" cy="250" rx="140" ry="45" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray={`${dashLength} ${gapLength}`}>
            <animate attributeName="stroke-dashoffset" values={`${circ};0`} dur="4s" repeatCount="indefinite" begin="1.33s" />
          </ellipse>
        </g>

        {/* ORBITAL PATH 3 (120 degrees) */}
        <g transform="rotate(120 250 250)">
          <ellipse cx="250" cy="250" rx="140" ry="45" fill="none" stroke="#ffffff" strokeWidth="0.5" opacity="0.4" />
          <ellipse cx="250" cy="250" rx="140" ry="45" fill="none" stroke="#FFC800" strokeWidth="1.5" strokeDasharray={`${dashLength} ${gapLength}`}>
            <animate attributeName="stroke-dashoffset" values={`${circ};0`} dur="4s" repeatCount="indefinite" begin="2.66s" />
          </ellipse>
        </g>
      </g>

      {/* 3. CENTRAL CORE: The static product/machine being endlessly supported */}
      <g>
        <circle cx="250" cy="250" r="28" fill="none" stroke="#ffffff" strokeWidth="1" />
        <circle cx="250" cy="250" r="20" fill="none" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="2 4" />
        
        {/* Core pulse */}
        <circle cx="250" cy="250" r="4" fill="#FFC800">
          <animate 
            attributeName="r" 
            values="4; 6; 4" 
            dur="2s" 
            repeatCount="indefinite" 
          />
        </circle>
      </g>
    </svg>
  );
};

export default LifecycleSupportIcon;
