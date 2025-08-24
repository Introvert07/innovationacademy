import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import gsap from "gsap";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = ["About", "Courses", "Faculty", "Contact", "Gallery"];
  const navbarRef = useRef(null);
  const navRef = useRef(null);

  useEffect(() => {
    if (navbarRef.current && navRef.current) {
      const links = navRef.current.querySelectorAll("a");

      const tl = gsap.timeline();
      tl.fromTo(
        navbarRef.current,
        { y: -50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      tl.fromTo(
        links,
        { opacity: 0, y: -20 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.3,
          ease: "power3.out",
        },
        "-=0.3"
      );
    }
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[96%] md:w-[94%] bg-white/50 backdrop-blur-lg shadow-lg rounded-3xl px-8 py-3 z-50 border-2 border-blue-300 opacity-0"
    >
      <div className="flex flex-row md:flex-row items-center justify-between gap-2">
        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-bold text-blue-700 hover:text-blue-800 transition-colors"
        >
          Innovation Academy
        </Link>

        {/* Desktop Nav */}
        <nav
          ref={navRef}
          className="hidden md:flex items-center space-x-6 relative"
        >
          {navItems.map((item) => (
            <NavLink
              key={item}
              to={item === "Gallery" ? "/Gallery" : `/${item.toLowerCase()}`}
              className="px-4 py-1.5 rounded-full border border-blue-600 text-gray-800 font-medium
                         transition-colors duration-300
                         hover:bg-blue-600 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {item}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          {open ? <FaTimes size={22} /> : <FaBars size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-white/60 backdrop-blur-lg rounded-xl shadow-lg p-4 border border-white/30">
          <nav className="flex flex-col space-y-4 text-lg">
            {navItems.map((item) => (
              <NavLink
                key={item}
                onClick={() => setOpen(false)}
                to={item === "Join Now" ? "/Joinnow" : `/${item.toLowerCase()}`}
                className="text-gray-800 px-4 py-2 rounded-full border border-blue-600
                           hover:bg-blue-600 hover:text-white
                           transition-colors duration-300"
              >
                {item}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
