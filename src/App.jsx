import React from "react";
import { ReactLenis } from "@studio-freight/react-lenis";
import Header from "./components/Header";
import Services from "./components/Services";
import LogoMarquee from "./components/LogoMarquee";
import Success from "./components/Success";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  // Tweak these values to dial in the perfect scroll feel
  const lenisOptions = {
    lerp: 0.9, // Lower values create a smoother, heavier inertia feel (default: 0.1)
    wheelMultiplier: 1.0, // Adjust the scrolling speed (higher = faster, default: 1)
    smoothWheel: true,
  };

  return (
    <ReactLenis root options={lenisOptions}>
      <div className="w-full bg-[#080808] text-[#f4f4f4] font-sans selection:bg-[#FFC800] selection:text-black relative">
        <Header />
        <Services />
        
        <Gallery />
        <LogoMarquee />
        <Success />  
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </ReactLenis>
  );
}

export default App;
