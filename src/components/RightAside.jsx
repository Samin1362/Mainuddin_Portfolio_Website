import React from "react";
import LoginCard from "./LoginCard";
import Newspaper from "./Newspaper";

const RightAside = () => {
  return (
    <aside className="w-full lg:w-96 xl:w-[420px]">
      {/* Sticky Container for Sidebar */}
      <div className="sticky top-24 space-y-6 p-4">

        {/* Newspaper Section */}
        <div className="transform transition-all duration-300 hover:scale-[1.02]">
          <Newspaper />
        </div>

        {/* Bottom Decorative Element */}
        <div className="text-center pt-4">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-full">
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
