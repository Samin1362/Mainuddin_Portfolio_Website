import React from "react";
import LoginCard from "./LoginCard";
import Newspaper from "./Newspaper";

const RightAside = () => {
  return (
    <aside className="w-full lg:w-96 xl:w-[420px]">
      {/* Sticky Container for Sidebar */}
      <div className="sticky top-24 space-y-6 p-4">
        {/* Section Title */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            <span className="text-blue-600">Quick</span> Access
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
        </div>

        {/* Login Card Section */}
        <div className="transform transition-all duration-300 hover:scale-[1.02]">
          <LoginCard />
        </div>

        {/* Divider with Icon */}
        <div className="flex items-center justify-center gap-3 py-2">
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
          <div className="bg-blue-100 text-blue-600 p-2 rounded-full">
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
          </div>
          <div className="h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent flex-1"></div>
        </div>

        {/* Newspaper Section */}
        <div className="transform transition-all duration-300 hover:scale-[1.02]">
          <Newspaper />
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full">
            <span className="text-xs text-blue-600 font-semibold">
              🥋 Kyokushin Excellence
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default RightAside;
