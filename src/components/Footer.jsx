import React from "react";
import { Plus } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#050505] text-[#f4f4f4] pt-20 lg:pt-40 border-t border-white/10 selection:bg-[#FFC800] selection:text-black">
      
      {/* Massive CTA */}
      <div className="px-8 lg:px-20 mb-20 lg:mb-40">
        <h2 className="text-[15vw] font-bold leading-[0.8] tracking-tighter uppercase text-white/10 group cursor-default">
          Engineering<br />
          <span className="group-hover:text-[#FFC800] transition-colors duration-700">Integrity.</span>
        </h2>
      </div>

      <div className="px-8 lg:px-20 pb-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        
        {/* Branding & Social */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-10">
            <svg width="20" height="20" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 5L35 15V25L20 35L5 25V15L20 5Z" stroke="#FFC800" strokeWidth="3"/>
            </svg>
            <span className="text-xl font-bold tracking-[0.3em] uppercase">O.S.A<span className="text-[#FFC800]">.</span></span>
          </div>
          
          <div className="space-y-4">
             <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-4">Secure Social Nets</div>
             <div className="flex gap-10">
                <a href="#" className="text-sm font-bold tracking-widest text-[#FFC800] hover:text-white transition-colors">INSTAGRAM</a>
                <a href="#" className="text-sm font-bold tracking-widest text-[#FFC800] hover:text-white transition-colors">LINKEDIN</a>
             </div>
          </div>
        </div>

        {/* Global Logistics */}
        <div className="lg:col-span-1">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-8">Base // Logistics</div>
          <div className="text-sm text-white/60 leading-relaxed font-light space-y-2">
            <p>11-ti Oktomvri No. 41/2-7</p>
            <p>Skopje, 1000</p>
            <p>Republic of Macedonia</p>
          </div>
          <div className="mt-8">
            <div className="font-mono text-[10px] text-[#FFC800]/50 tracking-widest uppercase">VAT_ID: 4080016551877</div>
          </div>
        </div>

        {/* Communication */}
        <div className="lg:col-span-1">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-8">Direct // Uplink</div>
          <div className="space-y-6">
            <div>
              <p className="text-[10px] font-mono text-white/20 uppercase mb-1">Primary_Terminal</p>
              <a href="tel:+38975488726" className="text-lg font-bold tracking-tight text-white hover:text-[#FFC800] transition-colors">+389 75 488 726</a>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/20 uppercase mb-1">Backup_Terminal</p>
              <a href="tel:+38970268809" className="text-lg font-bold tracking-tight text-white hover:text-[#FFC800] transition-colors">+389 70 268 809</a>
            </div>
            <div>
              <p className="text-[10px] font-mono text-white/20 uppercase mb-1">Secure_Data</p>
              <a href="mailto:contact@osa-engineering.com" className="text-lg font-bold tracking-tight text-white underline decoration-[#FFC800] decoration-2 underline-offset-4 hover:bg-[#FFC800] hover:text-black transition-all px-1">contact@osa-engineering.com</a>
            </div>
          </div>
        </div>

        {/* Technical Navigation */}
        <div className="lg:col-span-1 text-right">
          <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-8 hidden lg:block">Architecture</div>
          <div className="flex flex-col gap-4 items-end">
            <a href="#services" className="text-sm font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors">/ SERVICES</a>
            <a href="#success" className="text-sm font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors">/ SUCCESS</a>
            <a href="#gallery" className="text-sm font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors">/ GALLERY</a>
            <a href="#faq" className="text-sm font-bold tracking-[0.2em] text-white/40 hover:text-white transition-colors">/ QUERY_LOGS</a>
          </div>
        </div>
      </div>

      <div className="px-8 lg:px-20 py-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="font-mono text-[10px] text-white/20 tracking-[0.3em] uppercase">
          © {new Date().getFullYear()} O.S.A Engineering // Reductive Protocols Verified
        </div>
        <div className="flex items-center gap-10">
           <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#FFC800]"></div>
              <span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">Core_Active</span>
           </div>
           <Plus size={12} className="text-white/10" />
           <div className="font-mono text-[10px] text-white/20 uppercase tracking-widest">V.2.4.1_REDESIGN</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
