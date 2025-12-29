import React, { useState, useEffect, useRef } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { IoCloseSharp } from "react-icons/io5";
import { HiShoppingBag } from "react-icons/hi";
import ThemeToggle from "./ThemeToggle";

const NAV_ITEMS = ["Furniture", "Shop", "About Us", "Contact"];

const Navbar = () => {
  const [openBar, setOpenBar] = useState(false);
  const [active, setActive] = useState("home");
  const [showNav, setShowNav] = useState(true);
  const lastScroll = useRef(0);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");
        if (scrollY >= top && scrollY < top + height) {
          setActive(id);
        }
      });
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScroll.current && window.scrollY > 100) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
      lastScroll.current = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
    setOpenBar(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md transition-transform duration-300
        ${showNav ? "translate-y-0" : "-translate-y-full"} ${
        lastScroll.current > 50 ? "shadow-lg" : ""
      }`}
    >
      <div className="main_section py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Panto</h1>

        <div className="hidden md:flex gap-8 text-white">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => handleClick(id)}
                className={`relative font-medium cursor-pointer transition
                  ${
                    active === id
                      ? "text-[#2091F9] after:w-full"
                      : "text-white after:w-0"
                  }
                  after:content-[''] after:absolute after:left-0 after:-bottom-1
                  after:h-0.5 after:bg-[#2091F9] after:transition-all duration-300
                  hover:after:w-full`}
              >
                {item}
              </button>
            );
          })}
        </div>

        <div className="hidden md:flex gap-4 text-white items-center">
          <ThemeToggle />
          <HiShoppingBag className="text-2xl cursor-pointer" />
        </div>

        <div className="md:hidden text-white cursor-pointer">
          {openBar ? (
            <IoCloseSharp
              size={28}
              onClick={() => setOpenBar(false)}
              aria-label="Close menu"
            />
          ) : (
            <BiMenuAltRight
              size={28}
              onClick={() => setOpenBar(true)}
              aria-label="Open menu"
            />
          )}
        </div>
      </div>

      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black/30 backdrop-blur-md border-b border-white/20 shadow z-50 overflow-hidden transition-all duration-300 ${
          openBar ? "max-h-96 py-6" : "max-h-0 py-0"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          {NAV_ITEMS.map((item) => {
            const id = item.toLowerCase();
            return (
              <button
                key={item}
                onClick={() => handleClick(id)}
                className={`transition text-lg ${
                  active === id ? "text-[#2091F9]" : "text-white"
                }`}
              >
                {item}
              </button>
            );
          })}

          <div className="flex gap-6 mt-4 items-center">
            <HiShoppingBag className="text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
