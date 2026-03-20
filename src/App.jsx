import React from "react";
import { ReactLenis } from '@studio-freight/react-lenis';
import Header from "./components/Header";
import Services from "./components/Services";
import LogoMarquee from "./components/LogoMarquee";
import Success from "./components/Success";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothTouch: false }}>
      <div className="w-full bg-[#080808] text-[#f4f4f4] font-sans selection:bg-[#FFC800] selection:text-black relative">
        <CustomCursor />
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
