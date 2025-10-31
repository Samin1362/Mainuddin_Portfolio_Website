import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 flex items-center justify-center px-4 overflow-hidden relative">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.15),transparent_40%)]"></div>
      </div>

      {/* Floating Karate Icons */}
      <div className="absolute top-20 left-10 text-6xl opacity-20 animate-bounce">
        🥋
      </div>
      <div className="absolute bottom-32 right-20 text-5xl opacity-15 animate-pulse">
        🥋
      </div>
      <div className="absolute top-1/3 right-10 text-4xl opacity-10 animate-bounce delay-300">
        🥋
      </div>

      {/* Main Content */}
      <div className="relative max-w-4xl mx-auto text-center z-10">
        {/* 404 Number */}
        <div className="mb-8">
          <h1 className="text-[200px] md:text-[280px] font-black text-white/20 leading-none select-none">
            404
          </h1>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full">
            <div className="text-8xl md:text-9xl animate-pulse">🥋</div>
          </div>
        </div>

        {/* Error Message */}
        <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-2">
            The page you're looking for has vanished like a swift karate strike
          </p>
          <p className="text-blue-200 text-base mb-8">
            It seems you've ventured into uncharted territory
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              to="/"
              className="group relative inline-flex items-center gap-3 bg-white text-blue-600 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Go Home
            </Link>

            <Link
              to="/gallery"
              className="group relative inline-flex items-center gap-3 bg-yellow-400 text-blue-900 font-bold text-lg px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              View Gallery
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-8 pt-6 border-t border-white/20">
            <p className="text-white/70 text-sm">
              Error Code: <span className="font-bold text-white">404</span> |
              Page Not Found
            </p>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-12">
          <p className="text-white/80 text-lg italic font-semibold">
            "The ultimate aim of karate lies not in victory or defeat, but in
            the perfection of the character"
          </p>
          <p className="text-white/60 text-sm mt-2">- Gichin Funakoshi</p>
        </div>
      </div>

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0 opacity-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-24 fill-white"
        >
          <path d="M0,0 L0,40 Q300,90 600,40 T1200,40 L1200,0 Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default ErrorPage;
