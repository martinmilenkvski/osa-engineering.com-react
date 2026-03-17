import React from "react";
import { Plus } from "lucide-react";

const Gallery = () => {
  const images = [
    { src: "/images/1.avif", span: "lg:col-span-2 lg:row-span-2", id: "01" },
    { src: "/images/2.avif", span: "lg:col-span-1 lg:row-span-1", id: "02" },
    { src: "/images/3.avif", span: "lg:col-span-1 lg:row-span-1", id: "03" },
    { src: "/images/4.avif", span: "lg:col-span-1 lg:row-span-2", id: "04" },
    { src: "/images/5.avif", span: "lg:col-span-1 lg:row-span-1", id: "05" },
    { src: "/images/6.avif", span: "lg:col-span-2 lg:row-span-1", id: "06" },
  ];

  return (
    <section id="gallery" className="w-full bg-[#080808] border-t border-white/10">
      <div className="flex flex-col lg:flex-row">
        
        {/* --- LEFT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] lg:h-screen lg:sticky lg:top-0 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-xs">INDEX [03]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              VISUAL<br />
              <span className="text-white/40">AUDIT.</span>
            </h2>
            
            <p className="mt-8 text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Direct observation of structural manufacturing. High-resolution captures of multi-axis machining and finished industrial assemblies.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
             <div className="inline-block border border-white/10 px-4 py-3 bg-white/5">
                <span className="text-[10px] font-mono text-white/40 tracking-[0.2em] uppercase">Storage // Capacity</span>
                <div className="flex items-end gap-1 mt-2">
                   <div className="w-2 h-4 bg-[#FFC800]"></div>
                   <div className="w-2 h-6 bg-[#FFC800]"></div>
                   <div className="w-2 h-3 bg-[#FFC800]"></div>
                   <div className="w-2 h-8 bg-[#FFC800]"></div>
                   <div className="w-2 h-5 bg-white/10"></div>
                </div>
             </div>
          </div>
        </div>

        {/* --- RIGHT: ASYMMETRIC GRID --- */}
        <div className="w-full lg:w-[65%] p-4 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:grid-flow-dense">
            {images.map((img, idx) => (
              <div 
                key={idx} 
                className={`relative group overflow-hidden bg-[#0a0a0a] border border-white/10 ${img.span}`}
              >
                {/* Image */}
                <img 
                  src={img.src} 
                  alt="Engineering Detail"
                  className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                />

                {/* Mask / Reveal Overlay */}
                <div className="absolute inset-0 bg-[#FFC800] translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out opacity-20 pointer-events-none"></div>

                {/* ID Tag */}
                <div className="absolute top-4 left-4 z-10 px-2 py-1 bg-[#050505] border border-white/10 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                   <span className="text-[10px] font-mono text-[#FFC800]">IMG_{img.id}</span>
                </div>

                {/* Corner Accents */}
                <div className="absolute top-0 right-0 p-2 opacity-0 group-hover:opacity-100 transition-opacity">
                   <Plus size={12} className="text-white/40" />
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 lg:mt-24 p-8 border border-dashed border-white/10 text-center group cursor-pointer hover:border-[#FFC800]/40 transition-colors">
            <span className="text-[10px] font-mono tracking-[0.5em] text-white/20 uppercase group-hover:text-white transition-colors">Load Extended Archive // System_Scan</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
