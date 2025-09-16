import React, { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Set mounted to true after component mounts to trigger entrance animation
    setMounted(true);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-8 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      } ${mounted ? "animate-fadeIn" : "opacity-0"}`}
    >
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <div
          className={`flex-shrink-0 flex items-center gap-2 text-white text-2xl ${
            mounted ? "animate-slideInLeft" : "opacity-0"
          }`}
        >
          <img src="/logos/Logo-y.svg" alt="logo" className="h-8" />
          <h1 className="text-4xl">O.S.A</h1>
        </div>

        {/* Hamburger Menu - Mobile only */}
        <button
          className={`block md:hidden text-white text-3xl ml-auto ${
            mounted ? "animate-slideInRight" : "opacity-0"
          }`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation - Links in the middle */}
        <div
          className={`hidden md:flex items-center justify-center flex-1 mx-12 text-base ${
            mounted ? "animate-slideInDown" : "opacity-0"
          }`}
        >
          <ul className="flex items-center gap-10">
            {["Home", "Services", "Gallery"].map((item, index) => (
              <li
                key={item}
                className={`text-white relative group cursor-pointer hover:text-primary transition-all duration-300 ${
                  mounted ? `animate-slideInDown` : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="transition-colors duration-300 group-hover:text-primary">
                  {item}
                </span>
                <span className="absolute left-0 bottom-0 w-0 h-1 bg-primary transition-all duration-500 group-hover:w-full"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact button on the right */}
        <div
          className={`hidden md:block ${
            mounted ? "animate-slideInRight" : "opacity-0"
          }`}
        >
          <button className="border border-white text-white text-base font-medium px-8 py-3 rounded-full transition-colors duration-300 hover:bg-white hover:text-black">
            Contact
          </button>
        </div>
      </div>
    

      {/* Fullscreen Menu - Mobile only */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-12 z-40">
          {["Home", "Services", "Gallery"].map((item) => (
            <button
              key={item}
              className="text-white text-3xl hover:text-primary"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </button>
          ))}
          <button
            className="border border-white text-white font-medium px-8 py-3 rounded-standard mt-8 text-xl hover:bg-white hover:text-black"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </button>
          <button
            className="absolute top-8 right-8 text-white text-3xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default Nav;
