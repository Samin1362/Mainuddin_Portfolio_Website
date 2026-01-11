import React from "react";
import logo from "../assets/logo.png";

const Loader = () => {
  return (
    <div className="fixed inset-0 bg-linear-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center z-50">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
      </div>

      {/* Main Loader Content */}
      <div className="relative text-center">
        {/* Animated Logo Container */}
        <div className="mb-8 relative">
          {/* Outer Spinning Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 border-4 border-transparent border-t-yellow-400 border-r-yellow-400 rounded-full animate-spin"></div>
          </div>

          {/* Middle Ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-4 border-transparent border-b-white border-l-white rounded-full animate-spin-slow"></div>
          </div>

          {/* Logo with Glow Animation */}
          <div className="relative flex items-center justify-center w-40 h-40 mx-auto">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-white rounded-2xl animate-pulse shadow-2xl"></div>
            </div>
            <div className="relative bg-white border-4 border-blue-500 rounded-2xl p-4 shadow-2xl animate-logo-glow">
              <img
                src={logo}
                alt="Loading"
                className="w-16 h-24 object-contain"
              />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white animate-pulse">
            Loading
          </h2>

          {/* Animated Dots */}
          <div className="flex justify-center gap-2">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-white rounded-full animate-bounce animation-delay-200"></div>
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-bounce animation-delay-400"></div>
          </div>

          {/* Subtitle */}
          <p className="text-blue-100 text-lg font-medium">
            Preparing your Kyokushin experience...
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-64 mx-auto">
          <div className="h-2 bg-white/20 rounded-full overflow-hidden">
            <div className="h-full bg-linear-to-r from-yellow-400 to-white rounded-full animate-progress"></div>
          </div>
        </div>

        {/* Karate Belt Icon */}
        <div className="mt-6 text-5xl animate-pulse">🥋</div>
      </div>

      {/* Decorative Floating Elements */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float">
        🥋
      </div>
      <div className="absolute bottom-20 right-10 text-4xl opacity-20 animate-float animation-delay-400">
        🥋
      </div>
    </div>
  );
};

export default Loader;
