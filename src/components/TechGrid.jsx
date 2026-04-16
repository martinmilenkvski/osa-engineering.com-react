import React from "react";

const TechGrid = ({ 
  opacity = "opacity-50", 
  dotColor = "rgba(255,255,255,0.3)", 
  maskPosition = "center bottom",
  size = "12px 12px"
}) => {
  return (
    <div 
      className={`absolute inset-0 pointer-events-none ${opacity}`} 
      style={{ 
        backgroundImage: `radial-gradient(${dotColor} 1.5px, transparent 1.5px)`, 
        backgroundSize: size, 
        maskImage: `radial-gradient(ellipse at ${maskPosition}, rgba(0,0,0,1) 20%, transparent 90%)`, 
        WebkitMaskImage: `radial-gradient(ellipse at ${maskPosition}, rgba(0,0,0,1) 20%, transparent 90%)` 
      }} 
    />
  );
};

export default TechGrid;
