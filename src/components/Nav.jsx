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
      className={`fixed top-0 left-0 w-full z-50 px-8 py-6 transition-colors duration-300 ${
        scrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center">
        <img src="" alt="logo" className="h-12" />

        {/* Hamburger Menu */}
        <button
          className="block md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-8">
          {["Home", "Services", "Gallery", "Contact"].map((item) => (
            <li
              key={item}
              className="text-white relative group cursor-pointer hover:text-yellow-500"
            >
              <span className="transition-colors duration-300 group-hover:text-yellow-500">
                {item}
              </span>
              <span
                className="absolute left-0 bottom-0 w-0 h-1 bg-yellow-500 transition-all duration-500 group-hover:w-full"
              ></span>
            </li>
          ))}
        </ul>
      </div>

      {/* Fullscreen Menu */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black flex flex-col items-center justify-center gap-8 z-40">
          {["Home", "Services", "Gallery", "Contact"].map((item) => (
            <button
              key={item}
              className="text-white text-4xl hover:text-yellow-500"
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </button>
          ))}
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
