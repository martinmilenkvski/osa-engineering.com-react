import React, { useRef } from "react";
import { Plus } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const Gallery = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(scrollYProgress, (value) => {
    // Slides the track leftwards by its full width, while simultaneously offsetting it by the viewport width
    // so the final image always stops perfectly at the right edge of the screen.
    return `calc(-${value * 100}% + (var(--scroll-offset, 100vw) * ${value}))`;
  });

  const imgScale = useTransform(scrollYProgress, [0, 1], [1.6, 1]);

  // --- TEXT ANIMATION VARIANTS ---
  const ease = [0.16, 1, 0.3, 1];

  const fadeUpVars = {
    initial: { opacity: 0, y: 30 },
    whileInView: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 1.2, ease }
    },
    viewport: { once: true, margin: "-50px" }
  };

  const wordVars = {
    initial: { y: "110%" },
    whileInView: { 
      y: 0,
      transition: { duration: 1.2, ease }
    }
  };

  const titleContainerVars = {
    initial: {},
    whileInView: { 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const images = [
    { src: "/images/1.avif", id: "01", title: "Milling_Protocol_A", desc: "4-Axis Aluminum" },
    { src: "/images/2.avif", id: "02", title: "Lathe_Operation_B", desc: "High-Tensile Steel" },
    { src: "/images/3.avif", id: "03", title: "Structural_Frame_C", desc: "Tolerance ±0.005mm" },
    { src: "/images/4.png", id: "04", title: "Thermal_Coating_D", desc: "Industrial Finish" },
    { src: "/images/5.png", id: "05", title: "Quality_Assurance_E", desc: "Laser Measurement" },
    { src: "/images/6.png", id: "06", title: "Final_Assembly_F", desc: "Logistics Sync" },
  ];

  return (
    <section ref={targetRef} id="gallery" className="relative h-auto lg:h-[600vh] w-full bg-[#080808] border-t border-white/10">
      <div className="lg:sticky lg:top-0 flex flex-col lg:flex-row-reverse lg:h-screen overflow-hidden bg-[#080808]">
        
        {/* --- RIGHT: STICKY INFO BLOCK --- */}
        <div className="w-full lg:w-[35%] h-auto lg:h-full p-8 lg:p-12 border-b lg:border-b-0 lg:border-l border-white/10 flex flex-col justify-center gap-12 lg:gap-32 relative z-10 shrink-0 bg-[#080808]">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
          >
            <motion.div variants={fadeUpVars} className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-xs">INDEX [03]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </motion.div>
            
            <motion.h2 
              variants={titleContainerVars}
              className="text-6xl lg:text-8xl font-bold tracking-normal uppercase leading-[0.9]"
            >
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block">VISUAL</motion.span>
              </div>
              <div className="overflow-hidden">
                <motion.span variants={wordVars} className="block text-white/40">AUDIT.</motion.span>
              </div>
            </motion.h2>
            
            <motion.div variants={fadeUpVars} className="mt-12 inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md">
              <div className="w-2 h-2 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.4)]"></div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-white/90">STATUS: ACTIVE</span>
            </motion.div>

            <motion.p variants={fadeUpVars} className="mt-8 text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Direct observation of structural manufacturing. High-resolution captures of multi-axis machining and finished industrial assemblies.
            </motion.p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
            className="mt-8 lg:mt-0"
          >
             <div className="inline-block border border-white/10 px-4 py-3 bg-white/5">
                <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">Storage // Capacity</span>
                <div className="flex items-end gap-1 mt-2 h-8">
                   <motion.div animate={{ height: ["50%", "100%", "50%"] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-[#FFC800]"></motion.div>
                   <motion.div animate={{ height: ["75%", "25%", "75%"] }} transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-[#FFC800]"></motion.div>
                   <motion.div animate={{ height: ["35%", "80%", "35%"] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-[#FFC800]"></motion.div>
                   <motion.div animate={{ height: ["100%", "40%", "100%"] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-[#FFC800]"></motion.div>
                   <motion.div animate={{ height: ["60%", "90%", "60%"] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }} className="w-2 bg-white/10"></motion.div>
                   <span className="text-[10px] font-mono text-[#FFC800] tracking-tighter ml-2 mb-0.5">ONLINE</span>
                </div>
             </div>
          </motion.div>
        </div>

        {/* --- LEFT: HORIZONTAL SCROLL FEED --- */}
        <div className="w-full lg:w-[65%] flex-1 flex overflow-hidden lg:bg-[#050505] py-12 lg:py-0">
          
          {/* Desktop Motion Scroll */}
          <motion.div 
            style={{ x }}
            className="hidden lg:flex w-max items-stretch h-full lg:[--scroll-offset:65vw]"
          >
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] md:w-[50vw] lg:w-[45vw] shrink-0 p-8 lg:p-12 flex flex-col justify-center group hover:bg-white/[0.02] transition-colors border-r border-white/10"
              >
                {/* Technical Card Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] tracking-widest text-[#FFC800]">IMG_{img.id}</span>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[8px] font-mono text-[#FFC800] uppercase tracking-widest">Focus_Active</span>
                    <motion.div 
                      animate={{ opacity: [1, 0.4, 1] }} 
                      transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      className="w-1.5 h-1.5 bg-[#FFC800] rounded-full"
                    ></motion.div>
                  </div>
                </div>

                {/* Image Viewfinder */}
                <div 
                  data-cursor="delivered"
                  className="relative w-full aspect-[4/3] bg-[#050505] mb-6 overflow-hidden border border-white/5"
                >
                  <motion.img 
                    style={{ scale: imgScale }}
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-all duration-700 ease-out grayscale contrast-[1.1] brightness-[0.9]"
                  />
                  
                  {/* Targeting Brackets */}
                  <div className="absolute top-4 left-4 w-3 h-3 border-t border-l border-white/20 group-hover:border-[#FFC800] transition-colors duration-500"></div>
                  <div className="absolute top-4 right-4 w-3 h-3 border-t border-r border-white/20 group-hover:border-[#FFC800] transition-colors duration-500"></div>
                  <div className="absolute bottom-4 left-4 w-3 h-3 border-b border-l border-white/20 group-hover:border-[#FFC800] transition-colors duration-500"></div>
                  <div className="absolute bottom-4 right-4 w-3 h-3 border-b border-r border-white/20 group-hover:border-[#FFC800] transition-colors duration-500"></div>
                  
                  {/* Center Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                     <Plus size={24} className="text-[#FFC800]/50" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-white font-bold tracking-normal uppercase text-sm">{img.title}</h3>
                  <span className="font-mono text-[10px] text-white/40 uppercase tracking-[0.2em]">{img.desc}</span>
                </div>
              </div>
            ))}
          
            {/* Load More Area */}
            <div className="w-[85vw] md:w-[50vw] lg:w-[25vw] shrink-0 p-8 lg:p-12 flex items-center justify-center group cursor-pointer bg-white/[0.01] hover:bg-[#FFC800] transition-colors duration-500">
              <span className="text-[10px] font-mono tracking-[0.3em] text-white/40 uppercase group-hover:text-black transition-colors duration-500 flex flex-col items-center gap-4">
                <Plus size={24} className="group-hover:rotate-90 transition-transform duration-500" />
                Load_Extended_Archive //
              </span>
            </div>
          </motion.div>

          {/* Mobile Native Scroll */}
          <div className="flex lg:hidden w-full overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-4 px-6">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className="w-[85vw] shrink-0 p-6 flex flex-col justify-center snap-center bg-[#050505] border border-white/5 relative group"
              >
                {/* Technical Card Header */}
                <div className="flex justify-between items-center mb-6">
                  <span className="font-mono text-[10px] tracking-widest text-[#FFC800]">IMG_{img.id}</span>
                </div>

                {/* Image Viewfinder */}
                <div className="relative w-full aspect-[4/3] bg-black mb-6 overflow-hidden border border-white/10">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover grayscale contrast-[1.1] brightness-[0.9]"
                  />
                  
                  {/* Center Crosshair */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-100 pointer-events-none">
                     <Plus size={24} className="text-[#FFC800]/50" strokeWidth={1.5} />
                  </div>
                </div>

                {/* Card Footer */}
                <div className="flex flex-col gap-2 mt-4">
                  <h3 className="text-white font-bold tracking-normal uppercase text-base">{img.title}</h3>
                  <span className="font-mono text-xs text-white/40 uppercase tracking-[0.2em]">{img.desc}</span>
                </div>
              </div>
            ))}
            
            {/* Mobile Load More Area */}
            <div className="w-[85vw] shrink-0 p-8 flex items-center justify-center snap-center bg-[#FFC800] text-[#050505] transition-colors duration-500">
              <span className="text-xs font-mono font-bold tracking-[0.2em] uppercase flex flex-col items-center gap-4">
                <Plus size={24} className="text-[#050505]" strokeWidth={2} />
                Load_Extended_Archive //
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
