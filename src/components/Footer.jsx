import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t border-gray-100">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-3 sm:mb-4">
              Mainuddin Kabir
            </h3>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Passionate professional dedicated to excellence in development and
              delivering innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Quick Links
            </h6>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#experience"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  Certifications
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  Education
                </a>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h6 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Explore
            </h6>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <a
                  href="#accomplishments"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  Accomplishments
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 text-xs sm:text-sm"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h6 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4">
              Connect
            </h6>
            <div className="flex gap-2.5 sm:gap-3">
              <a
                href="#linkedin"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a
                href="#github"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="#twitter"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-100 hover:bg-blue-600 flex items-center justify-center text-gray-700 hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Twitter"
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 sm:py-5 md:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4">
            <p className="text-xs sm:text-sm text-gray-600 text-center md:text-left">
              © {currentYear} Mainuddin Kabir. All rights reserved.
            </p>
            <div className="flex gap-4 sm:gap-6 text-xs sm:text-sm">
              <a
                href="#privacy"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
