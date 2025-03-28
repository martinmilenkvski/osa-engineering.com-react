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
          {["Home", "Services", "Gallery", "Contact"].map((item) => (
            <li
              key={item}
              className="text-white relative group cursor-pointer"
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
    </div>
  );
};

export default Nav;
