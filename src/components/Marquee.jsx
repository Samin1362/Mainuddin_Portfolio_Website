import React from "react";
import logo from "../assets/logo.png";

const Marquee = () => {
  const marqueeText =
    "Dedicated Kyokushin Karate instructor committed to building strength, discipline, and spirit through traditional full-contact training.";

  return (
    <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 border-y-4 border-blue-800 shadow-2xl overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>
      </div>

      <div className="relative max-w-[1440px] mx-auto flex items-center">
        {/* Fixed Logo on Left Side */}
        <div className="shrink-0 bg-white/95 backdrop-blur-sm pl-6 pr-8 py-4 z-10 shadow-xl border-r-4 border-blue-800">
          <div className="flex items-center gap-3">
            <div className="logo-glow border-3 border-blue-500 rounded-lg p-2.5 bg-white shadow-lg">
              <img src={logo} alt="logo" className="w-10 h-14 object-contain" />
            </div>
            <div className="hidden sm:block">
              <h3 className="text-lg font-bold text-gray-800 leading-tight">
                Mainuddin
              </h3>
              <p className="text-xs text-blue-600 font-semibold">
                Kyokushin Sensei
              </p>
            </div>
          </div>
        </div>

        {/* Marquee Scrolling Content */}
        <div className="flex-1 overflow-hidden py-5">
          <div className="marquee-content inline-flex whitespace-nowrap">
            {/* Multiple copies for seamless loop - no gaps */}
            {[...Array(4)].map((_, index) => (
              <span
                key={index}
                className="text-white text-xl md:text-2xl font-semibold inline-flex items-center"
              >
                <span className="inline-block w-3 h-3 bg-yellow-400 rounded-full animate-pulse mx-8"></span>
                {marqueeText}
              </span>
            ))}
          </div>
        </div>

        {/* Right Side Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-blue-600 to-transparent pointer-events-none z-10"></div>
      </div>

      {/* Decorative Bottom Border Animation */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent animate-pulse"></div>
    </div>
  );
};

export default Marquee;
