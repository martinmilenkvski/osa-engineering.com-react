import React from 'react';

const AdvancedMfgIcon = ({ className = "w-full h-full max-w-[400px] max-h-[400px]" }) => {
  return (
    <svg
      viewBox="0 0 500 500"
      className={`${className} pointer-events-none drop-shadow-2xl`}
      style={{ overflow: 'visible' }}
    >
      {/* Base Grid / Reticle Lines (Maintains the Swiss precision vibe) */}
      <g stroke="#ffffff" strokeWidth="1" strokeDasharray="4 4" opacity="0.8">
        <line x1="250" y1="50" x2="250" y2="450" />
        <line x1="50" y1="250" x2="450" y2="250" />
        <circle cx="250" cy="250" r="4" fill="none" />
      </g>

      {/* Advanced Manufacturing Concentric Toolpaths */}
      <g style={{ transformOrigin: '250px 250px' }}>
        
        {/* Outer Boundary Ring (Slow rotation) */}
        <circle cx="250" cy="250" r="130" fill="none" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 12">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 250 250" 
            to="360 250 250" 
            dur="40s" 
            repeatCount="indefinite" 
          />
        </circle>

        {/* 5-Axis Spindle Abstraction */}
        <circle cx="250" cy="250" r="100" fill="none" stroke="#ffffff" strokeWidth="1.5" strokeDasharray="30 95.66">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="360 250 250" 
            to="0 250 250" 
            dur="20s" 
            repeatCount="indefinite" 
          />
        </circle>

        {/* Inner Precision Milled Arcs */}
        <circle cx="250" cy="250" r="65" fill="none" stroke="#FFC800" strokeWidth="1" strokeDasharray="60 20 10 20">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="0 250 250" 
            to="360 250 250" 
            dur="15s" 
            repeatCount="indefinite" 
          />
        </circle>

        {/* Central Hub / Tool Tip */}
        <circle cx="250" cy="250" r="20" fill="none" stroke="#ffffff" strokeWidth="1" />
        <circle cx="250" cy="250" r="15" fill="none" stroke="#FFC800" strokeWidth="0.5" strokeDasharray="4 4">
          <animateTransform 
            attributeName="transform" 
            type="rotate" 
            from="360 250 250" 
            to="0 250 250" 
            dur="10s" 
            repeatCount="indefinite" 
          />
        </circle>
        
        {/* Dead Center Point */}
        <circle cx="250" cy="250" r="1" fill="#FFC800" />
      </g>
    </svg>
  );
};

export default AdvancedMfgIcon;
