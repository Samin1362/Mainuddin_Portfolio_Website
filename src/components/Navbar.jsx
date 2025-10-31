import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const navLinks = [
    "Experience",
    "Skills",
    "Certifications",
    "Education",
    "Accomplishments",
    "Gallery",
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md border-b border-gray-100">
      <div className="navbar max-w-7xl mx-auto px-4 lg:px-8">
        {/* Mobile Menu Button */}
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden hover:bg-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-700"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-white rounded-lg z-1 mt-3 w-60 p-3 shadow-xl border border-gray-100"
            >
              {navLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-700 hover:bg-blue-50 hover:text-blue-600 rounded-md py-3 font-medium transition-all duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Logo/Brand */}
          <a
            href="#home"
            className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-300 ml-2 lg:ml-0"
          >
            <div className="flex items-center gap-2">
              <div className="logo-glow border-2 border-blue-600 rounded-lg p-1.5 bg-white">
                <img
                  src={logo}
                  alt="logo"
                  className="w-8 h-12 object-contain"
                />
              </div>
              Mainuddin Kabir
            </div>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className="relative px-4 py-2 text-gray-700 font-medium hover:text-blue-600 transition-colors duration-300 group"
                >
                  {link}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Button */}
        <div className="navbar-end">
          <a
            href="#contact"
            className="btn bg-blue-600 hover:bg-blue-700 text-white border-none px-6 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
