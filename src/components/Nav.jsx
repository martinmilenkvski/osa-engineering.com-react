import React, { useState, useEffect } from "react";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

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

        <ul className="flex items-center gap-8">
          <li className="text-white hover:text-yellow-500 transition-colors cursor-pointer">
            Home
          </li>
          <li className="text-white hover:text-yellow-500 transition-colors cursor-pointer">
            Services
          </li>
          <li className="text-white hover:text-yellow-500 transition-colors cursor-pointer">
            Gallery
          </li>
          <li className="text-white hover:text-yellow-500 transition-colors cursor-pointer">
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
