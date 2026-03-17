import React, { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", project: "" });

  return (
    <section id="contact" className="w-full bg-[#080808] border-t border-white/10">
      <div className="flex flex-col lg:flex-row">
        
        {/* --- LEFT: LOCKED VIEWFINDER --- */}
        <div className="w-full lg:w-[35%] lg:h-[80vh] lg:sticky lg:top-0 p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-white/10 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-[#FFC800] font-mono text-xs">INDEX [05]</span>
              <div className="h-px w-8 bg-[#FFC800]"></div>
            </div>
            
            <h2 className="text-5xl lg:text-7xl font-bold tracking-tighter uppercase leading-[0.9]">
              SECURE<br />
              <span className="text-white/40">UPLINK.</span>
            </h2>
            
            <p className="mt-8 text-sm text-white/50 leading-relaxed font-light max-w-xs">
              Establish a direct communication channel. Upload technical blueprints or project specifications to initiate reductive protocol analysis.
            </p>
          </div>

          <div className="mt-8 lg:mt-0">
             <div className="font-mono text-[10px] tracking-[0.3em] text-white/30 uppercase mb-4">Uplink Encryption</div>
             <div className="flex items-center gap-4">
                <div className="text-xs font-bold text-[#FFC800] tracking-widest">[ AES-256 ]</div>
                <div className="flex-1 h-px bg-white/10"></div>
                <Plus size={12} className="text-white/20" />
             </div>
          </div>
        </div>

        {/* --- RIGHT: TERMINAL FORM --- */}
        <div className="w-full lg:w-[65%] min-h-[80vh] flex items-center p-8 lg:p-20">
          <form className="w-full space-y-12 lg:space-y-20">
            {/* Input Name */}
            <div className="relative group">
               <label className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4 group-focus-within:text-[#FFC800] transition-colors">
                  IDENT_NAME //
               </label>
               <input 
                 type="text" 
                 placeholder="00_YOUR_NAME"
                 className="w-full bg-transparent border-b border-white/10 py-6 text-3xl lg:text-5xl font-bold tracking-tighter text-white placeholder:text-white/10 outline-none focus:border-[#FFC800] transition-all"
               />
            </div>

            {/* Input Email */}
            <div className="relative group">
               <label className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4 group-focus-within:text-[#FFC800] transition-colors">
                  IDENT_CONTACT //
               </label>
               <input 
                 type="email" 
                 placeholder="NAME@DOMAIN.COM"
                 className="w-full bg-transparent border-b border-white/10 py-6 text-3xl lg:text-5xl font-bold tracking-tighter text-white placeholder:text-white/10 outline-none focus:border-[#FFC800] transition-all"
               />
            </div>

            {/* Input Project */}
            <div className="relative group">
               <label className="block text-[10px] font-mono text-white/30 uppercase tracking-[0.3em] mb-4 group-focus-within:text-[#FFC800] transition-colors">
                  OP_DETAILS //
               </label>
               <textarea 
                 rows="1"
                 placeholder="DESCRIBE_PROJECT_GOALS..."
                 className="w-full bg-transparent border-b border-white/10 py-6 text-3xl lg:text-5xl font-bold tracking-tighter text-white placeholder:text-white/10 outline-none focus:border-[#FFC800] transition-all resize-none"
               />
            </div>

            {/* Submit Button */}
            <button className="group flex items-center justify-between w-full bg-[#FFC800] p-8 lg:p-12 hover:bg-white transition-colors duration-500 overflow-hidden relative">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
                  <span className="text-[10px] font-mono text-black font-bold">MODE: TRANSMIT</span>
               </div>
               
               <span className="text-3xl lg:text-5xl font-bold tracking-tighter uppercase text-black">
                 Initiate Uplink
               </span>

               <ArrowUpRight className="w-12 h-12 lg:w-20 lg:h-20 text-black group-hover:rotate-45 transition-transform duration-500" />
            </button>

            <div className="flex justify-between items-center text-[10px] font-mono text-white/20 uppercase tracking-[0.4em]">
               <span>System: Ready</span>
               <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#FFC800]"></div>
                  <span>Uplink_Primary: Online</span>
               </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
