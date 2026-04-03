import React, { useRef, useState, useEffect } from "react";
import { ReactLenis } from '@studio-freight/react-lenis';
import { useInView } from "framer-motion";
import Preloader from "./components/Preloader";
import Header from "./components/Header";
import Services from "./components/Services";
import LogoMarquee from "./components/LogoMarquee";
import Success from "./components/Success";
import Gallery from "./components/Gallery";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import VideoReveal from "./components/VideoReveal";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef(null);
  const footerTriggerRef = useRef(null);

  // Measure footer height dynamically
  useEffect(() => {
    if (footerRef.current) {
      const updateHeight = () => {
        setFooterHeight(footerRef.current.clientHeight);
      };
      // Short delay to ensure layout has settled
      const timeoutId = setTimeout(updateHeight, 100);
      window.addEventListener('resize', updateHeight);
      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('resize', updateHeight);
      };
    }
  }, [isLoading]);

  // Memoize the callback to prevent the preloader from restarting on re-render
  const handleLoadingComplete = React.useCallback(() => {
    setIsLoading(false);
  }, []);

  const isFooterUncovered = useInView(footerTriggerRef, { once: true, amount: 0.1 });

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.2, smoothTouch: false }}>
      <div className={`w-full bg-[#080808] text-[#f4f4f4] font-sans selection:bg-[#FFC800] selection:text-black ${isLoading ? 'h-screen overflow-hidden' : ''}`}>
        
        {/* --- THE SWISS CUT PRELOADER --- */}
        {isLoading && <Preloader onComplete={handleLoadingComplete} />}

        {/* Main content — z-10 so it covers the sticky footer below */}
        <div 
          className="relative z-10 bg-[#080808]"
          style={{ marginBottom: footerHeight }}
        >
          <CustomCursor />
          <Header />
          <Services />
          
          <Gallery />
          <LogoMarquee />
          <VideoReveal />
          <Success />  
          <FAQ />
          <Contact />
          
          {/* Invisible trigger pinpoint at the very bottom of the z-10 content */}
          <div ref={footerTriggerRef} className="h-10 w-full absolute bottom-0 pointer-events-none" />
        </div>

        {/* Footer is sticky bottom-0 z-0 — revealed as content above scrolls away */}
        <Footer ref={footerRef} isUncovered={isFooterUncovered} />
      </div>
    </ReactLenis>
  );
}

export default App;
