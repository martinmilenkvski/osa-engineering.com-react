import React, { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full z-50 px-8 md:px-16 py-8 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <img src="/logos/Logo.svg" alt="logo" className="h-12" />
        </div>

        {/* Hamburger Menu - Mobile only */}
        <button
          className="block md:hidden text-white text-3xl ml-auto"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Navigation - Links in the middle */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-12">
          <ul className="flex items-center gap-10">
            {["Home", "Services", "Gallery"].map((item) => (
              <li
                key={item}
                className="text-white relative group cursor-pointer hover:text-primary"
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
        <div className="hidden md:block">
          <button className="bg-primary hover:bg-primary-light text-black font-medium px-8 py-3 rounded-standard transition-colors duration-300">
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
            className="bg-primary hover:bg-primary-light text-black font-medium px-8 py-3 rounded-standard mt-8 text-xl"
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
