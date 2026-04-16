import React, { useEffect, useRef } from 'react';
import TechGrid from './TechGrid';

const MechanicalPart = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Load Three.js and GSAP via CDN
    const loadScripts = async () => {
      // Check if already loaded to avoid duplicates
      if (window.THREE && window.gsap && window.gsap.plugins.ScrollTrigger) {
        initScene();
        return;
      }

      const scripts = [
        'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js',
        'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js'
      ];

      for (const src of scripts) {
        await new Promise((resolve) => {
          if (document.querySelector(`script[src="${src}"]`)) {
            resolve();
            return;
          }
          const script = document.createElement('script');
          script.src = src;
          script.onload = resolve;
          document.head.appendChild(script);
        });
      }
      initScene();
    };

    const initScene = () => {
      const THREE = window.THREE;
      const gsap = window.gsap;
      
      // Safety check
      if (!THREE || !gsap || !window.ScrollTrigger) return;
      
      gsap.registerPlugin(window.ScrollTrigger);

      // Scene setup
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(40, window.innerWidth / window.innerHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ 
        canvas: canvasRef.current, 
        antialias: true, 
        alpha: true 
      });
      
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      // Mechanical Part Group
      const partGroup = new THREE.Group();

      // Materials - Updated to match the industrial palette
      const wireMaterialWhite = new THREE.MeshBasicMaterial({ 
        color: 0xffffff, 
        wireframe: true,
        transparent: true,
        opacity: 0.6
      });

      const wireMaterialYellow = new THREE.MeshBasicMaterial({ 
        color: 0xFFC800, // Industrial Yellow from the reference
        wireframe: true,
        transparent: true,
        opacity: 0.9
      });

      // 1. The Main Flange
      const flangeGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.3, 32);
      const flange = new THREE.Mesh(flangeGeo, wireMaterialWhite);
      flange.rotation.z = Math.PI / 2;
      flange.position.x = -1.5;
      partGroup.add(flange);

      // 2. The Main Body
      const bodyGeo = new THREE.CylinderGeometry(0.8, 0.8, 2.5, 32);
      const body = new THREE.Mesh(bodyGeo, wireMaterialWhite);
      body.rotation.z = Math.PI / 2;
      body.position.x = -0.1;
      partGroup.add(body);

      // 3. The Slot (Keyway) - Highlighted in Yellow
      const slotGeo = new THREE.BoxGeometry(1.2, 0.15, 0.2);
      const slot = new THREE.Mesh(slotGeo, wireMaterialYellow);
      slot.position.set(0.4, 0.8, 0); 
      body.add(slot);

      // 4. Inner Bore - Highlighted in Yellow
      const boreGeo = new THREE.CylinderGeometry(0.4, 0.4, 0.2, 32);
      const bore = new THREE.Mesh(boreGeo, wireMaterialYellow);
      bore.rotation.z = Math.PI / 2;
      bore.position.x = 1.15;
      partGroup.add(bore);

      scene.add(partGroup);
      camera.position.z = 7;

      // 4 PERSPECTIVE ANIMATION SEQUENCE
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        }
      });

      // Perspective 1: Side Profile
      tl.to(partGroup.rotation, { y: 0, x: 0, duration: 1 })
      // Perspective 2: Front / Cross-section View
      .to(partGroup.rotation, { y: Math.PI / 2, x: 0, duration: 2 }, "+=1")
      // Perspective 3: Dynamic ISO (Top-Down Angled)
      .to(partGroup.rotation, { y: Math.PI * 0.75, x: Math.PI * 0.25, duration: 2 }, "+=1")
      // Perspective 4: Rear / Structural View
      .to(partGroup.rotation, { y: Math.PI * 1.5, x: Math.PI * 0.1, duration: 2 }, "+=1")
      // Full Rotation Finale
      .to(partGroup.rotation, { y: Math.PI * 2, x: 0, duration: 2 }, "+=1");

      // Background Line Animation - Removed Pulsing

      // Render Loop
      let animationId;
      const animate = () => {
        animationId = requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

      // Handle Resize
      const handleResize = () => {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      };
      window.addEventListener('resize', handleResize);
      
      return () => {
        window.removeEventListener('resize', handleResize);
        cancelAnimationFrame(animationId);
        tl.kill();
        const ScrollTrigger = window.ScrollTrigger;
        if (ScrollTrigger) {
          ScrollTrigger.getAll().forEach(t => t.kill());
        }
      };
    };

    loadScripts();
  }, []);

  return (
    <div ref={containerRef} className="relative bg-[#080808] min-h-[500vh] text-white font-sans selection:bg-[#FFC800] selection:text-[#080808] z-10">
      <TechGrid opacity="opacity-80" maskPosition="center center" />

      {/* Main Drawing Area */}
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="z-20 w-full h-full cursor-crosshair" />
      </div>

      {/* Perspective Info Sections (The text that moves up and down) */}
      <div className="relative z-30 pointer-events-none max-w-[1700px] mx-auto w-full">
          <section className="h-screen flex items-center p-6 md:p-8 lg:p-12">
              <div className="bg-[#FFC800] text-[#0f0f0f] p-8 md:p-12 max-w-lg w-full pointer-events-auto shadow-2xl">
                  <div className="flex justify-between items-start mb-8 border-b border-[#0f0f0f]/10 pb-4">
                      <span className="text-tech-label font-mono font-bold">Perspective 01 //</span>
                      <div className="text-[9px] font-mono text-right opacity-60 tracking-blueprint">Status: Nominal</div>
                  </div>
                  <h2 className="text-fluid-h3 font-bold tracking-tightest leading-none mb-4">Profile<br/>View</h2>
                  <p className="text-[#1a1a1a] font-mono text-fluid-body tracking-tight">
                      Initial orientation showcasing longitudinal axis and primary flange depth.
                  </p>
              </div>
          </section>
          
          <section className="h-screen flex items-center justify-end p-6 md:p-8 lg:p-12">
              <div className="bg-[#FFC800] text-[#0f0f0f] p-8 md:p-12 max-w-lg w-full pointer-events-auto shadow-2xl text-right">
                  <div className="flex justify-between items-start mb-8 border-b border-[#0f0f0f]/10 pb-4">
                      <div className="text-[9px] font-mono text-left opacity-60 tracking-blueprint">Status: Nominal</div>
                      <span className="text-tech-label font-mono font-bold">Perspective 02 //</span>
                  </div>
                  <h2 className="text-fluid-h3 font-bold tracking-tightest leading-none mb-4">Radial<br/>Core</h2>
                  <p className="text-[#1a1a1a] font-mono text-fluid-body tracking-tight">
                      90° rotation. Visualization of the concentric bore and keyway alignment.
                  </p>
              </div>
          </section>

          <section className="h-screen flex items-center p-6 md:p-8 lg:p-12">
              <div className="bg-[#FFC800] text-[#0f0f0f] p-8 md:p-12 max-w-lg w-full pointer-events-auto shadow-2xl">
                  <div className="flex justify-between items-start mb-8 border-b border-[#0f0f0f]/10 pb-4">
                      <span className="text-tech-label font-mono font-bold">Perspective 03 //</span>
                      <div className="text-[9px] font-mono text-right opacity-60 tracking-blueprint">Status: Nominal</div>
                  </div>
                  <h2 className="text-fluid-h3 font-bold tracking-tightest leading-none mb-4">ISO<br/>Dynamic</h2>
                  <p className="text-[#1a1a1a] font-mono text-fluid-body tracking-tight">
                      Isometric offset highlighting the intersection of horizontal and vertical planes.
                  </p>
              </div>
          </section>

          <section className="min-h-screen flex items-center justify-center p-6 md:p-8 lg:p-12">
              <div className="bg-[#FFC800] text-[#0f0f0f] p-10 md:p-14 w-full max-w-4xl pointer-events-auto shadow-2xl">
                  {/* Header row */}
                  <div className="flex justify-between items-start mb-8 border-b border-[#0f0f0f]/15 pb-5">
                      <span className="text-tech-label font-mono font-bold tracking-widest">Perspective 04 // Final</span>
                      <div className="text-[9px] font-mono text-right tracking-blueprint opacity-60">
                          Lat 42.00 N<br/>Lng 21.43 E
                      </div>
                  </div>

                  {/* Two-column layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10">
                      {/* Left — headline + single line */}
                      <div className="flex flex-col justify-between">
                          <h2 className="text-fluid-h3 font-bold tracking-tightest leading-none mb-4">
                              Full<br/>Structural<br/>Analysis
                          </h2>
                          <p className="font-mono text-fluid-body text-[#1a1a1a] tracking-tight leading-relaxed opacity-80">
                              360° rotation complete. Flange geometry, bore concentricity, and keyway tolerances — all nominal.
                          </p>
                      </div>

                      {/* Right — spec grid (4 cells) */}
                      <div className="grid grid-cols-2 gap-px bg-[#0f0f0f]/15">
                          {[
                              { label: 'Flange Ø', value: '120 mm' },
                              { label: 'Bore Ø', value: '40 mm' },
                              { label: 'Overall L', value: '250 mm' },
                              { label: 'Tolerance', value: 'ISO H7/h6' },
                          ].map(({ label, value }) => (
                              <div key={label} className="bg-[#FFC800] p-4">
                                  <div className="text-[9px] font-mono opacity-60 tracking-widest uppercase mb-1">{label}</div>
                                  <div className="font-mono font-bold text-sm tracking-wide">{value}</div>
                              </div>
                          ))}
                      </div>
                  </div>

                  {/* Footer CTA row */}
                  <div className="border-t border-[#0f0f0f]/15 pt-5 flex items-center justify-between">
                      <span className="font-mono text-[9px] tracking-widest uppercase opacity-50">
                          Sequence complete
                      </span>
                      <button className="flex items-center gap-2 bg-[#0f0f0f] text-[#FFC800] px-5 py-2.5 font-mono font-bold text-xs tracking-widest uppercase hover:bg-[#1a1a1a] transition-colors">
                          Initiate Contact
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                              <line x1="7" y1="17" x2="17" y2="7"></line>
                              <polyline points="7 7 17 7 17 17"></polyline>
                          </svg>
                      </button>
                  </div>
              </div>
          </section>
      </div>
    </div>
  );
};

export default MechanicalPart;
