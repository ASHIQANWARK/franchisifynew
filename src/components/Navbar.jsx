import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Franchisify.in-logo-white-png-(2).png";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#334155] shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img
            src={Logo}
            alt="Logo"
            className="h-14 sm:h-16 md:h-16 max-w-full object-contain transition-transform duration-300 hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex space-x-10 text-lg font-semibold items-center">
          <li>
            <Link
              to="/"
              className="text-white hover:text-orange-400 transition-all duration-200"
            >
              Home
            </Link>
          </li>
          <li>
            <a
              href="#about"
              className="text-white hover:text-orange-400 transition-all duration-200"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
          </li>
          <li>
            <Link
              to="/deservices"
              className="text-white hover:text-orange-400 transition-all duration-200"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-orange-400 transition-all duration-200"
            >
              Career
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-white hover:text-orange-400 transition-all duration-200"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden w-full bg-[#1e293b] transition-all duration-300 ease-in-out font-serif`}
      >
        <div className="px-8 py-6 space-y-5 text-center text-lg font-semibold">
          <Link
            to="/"
            className="block text-white hover:text-orange-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/deservices"
            className="block text-white hover:text-orange-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Services
          </Link>
          <a
            href="#about"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
              setIsOpen(false);
            }}
            className="block text-white hover:text-orange-400 transition"
          >
            About
          </a>
          <Link
            to="/contact"
            className="block text-white hover:text-orange-400 transition"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
