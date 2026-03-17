import React from "react";
import { Plus } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      q: "What are your standard dimensional tolerances?",
      a: "Our standard machining protocol maintains tolerances within ±0.005mm. For aerospace or medical-grade components, we can achieve even tighter linear and geometric constraints as per technical specifications."
    },
    {
      q: "Which materials are supported in your multi-axis systems?",
      a: "We operate on a broad spectrum including architectural steel, high-tensile tool steels, aerospace aluminum alloys, stainless steels (304/316), brass, copper, and industrial polymers."
    },
    {
      q: "How do you handle rapid prototyping vs. mass production?",
      a: "Our setup is optimized for both small-batch technical prototypes and high-volume industrial fulfillment. We utilize modular fixturing to minimize transition times between varied reductive protocols."
    },
    {
      q: "Do you provide material certification and inspection logs?",
      a: "Yes. Every component can be delivered with a full audit trail including raw material certification, heat-map reports, and coordinate measuring machine (CMM) verification logs."
    }
  ];

  return (
    <section id="faq" className="w-full bg-[#080808] border-t border-white/10">
      <div className="flex flex-col lg:flex-row min-h-[60vh]">
        
        {/* --- LEFT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] lg:h-screen lg:sticky lg:top-0 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-xs">INDEX [04]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              QUERY<br />
              <span className="text-white/40">PROTOCOL.</span>
            </h2>
            
            <p className="mt-8 text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Technical documentation and operational standards. Review our baseline protocols for precision engineering and fulfillment.
            </p>
          </div>

          <div className="hidden lg:block p-6 border border-white/10 bg-white/5">
             <div className="text-[10px] font-mono text-white/30 uppercase tracking-widest mb-4">Encryption Status</div>
             <div className="flex justify-between items-end gap-1">
                {[20, 10, 30, 15, 25, 10, 40, 5].map((h, i) => (
                   <div key={i} className="w-1 bg-white/20 animate-pulse" style={{ height: `${h}px`, animationDelay: `${i * 100}ms` }}></div>
                ))}
                <span className="text-[10px] font-mono text-[#FFC800] tracking-tighter">SECURE</span>
             </div>
          </div>
        </div>

        {/* --- RIGHT: ACCORDIONS --- */}
        <div className="w-full lg:w-[65%] divide-y divide-white/10">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group outline-none">
              <summary className="flex items-center justify-between p-8 lg:p-12 cursor-pointer list-none group-hover:bg-white/5 transition-colors">
                <div className="flex items-center gap-6 lg:gap-10">
                   <span className="font-mono text-sm text-[#FFC800]">0{idx + 1}</span>
                   <h3 className="text-xl lg:text-3xl font-bold tracking-tighter uppercase text-white group-open:text-[#FFC800] transition-colors pr-4">
                     {faq.q}
                   </h3>
                </div>
                <div className="relative w-6 h-6 flex-shrink-0">
                  <div className="absolute top-1/2 left-0 w-full h-px bg-white/30 group-open:bg-[#FFC800] transition-colors"></div>
                  <div className="absolute top-0 left-1/2 w-px h-full bg-white/30 group-open:rotate-90 group-open:opacity-0 transition-all duration-500"></div>
                </div>
              </summary>
              <div className="px-8 lg:px-[12.5rem] pb-12 lg:pb-20">
                <p className="text-sm lg:text-base text-white/60 leading-relaxed font-light max-w-2xl">
                  {faq.a}
                </p>
                <div className="mt-10 flex items-center gap-4">
                   <div className="h-px w-20 bg-white/10"></div>
                   <span className="text-[10px] font-mono text-white/20 uppercase tracking-widest">End_Log_Entry</span>
                </div>
              </div>
            </details>
          ))}
          
          <div className="p-12 lg:p-20 bg-white/5 flex flex-col items-center justify-center text-center">
             <Plus size={32} className="text-white/10 mb-6" />
             <p className="text-sm text-white/40 font-light max-w-sm">
               Still require technical clarification? Our engineering lead is available for direct consultation.
             </p>
             <a href="#contact" className="mt-8 px-8 py-4 border border-[#FFC800] text-[#FFC800] font-mono text-[10px] tracking-[0.3em] uppercase hover:bg-[#FFC800] hover:text-black transition-all">
                Send_Priority_Query
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
