import React from "react";
import Banner from "../components/Banner";
import Introduction from "../components/Introduction";
import Marquee from "../components/Marquee";
import RightAside from "../components/RightAside";
import About from "../components/About";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Banner Section */}
      <section className="w-full">
        <Banner />
      </section>

      {/* Marquee Section */}
      <section className="w-full">
        <Marquee />
      </section>

      {/* Main Content Section */}
      <section className="w-full px-4 py-8 md:py-12">
        <div className="max-w-[1400px] mx-auto">
          {/* Responsive Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
            {/* Main Content Area */}
            <main className="lg:col-span-8 xl:col-span-8 space-y-6 md:space-y-8">
              {/* Introduction Card */}
              <div className="w-full">
                <Introduction />
              </div>

              {/* About Section */}
              <div className="w-full">
                <About />
              </div>
            </main>

            {/* Right Sidebar */}
            <aside className="lg:col-span-4 xl:col-span-4">
              <div className="lg:sticky lg:top-24">
                <RightAside />
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Decorative Bottom Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 py-12 px-4 mt-16">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full mb-6">
            <span className="text-3xl">🥋</span>
            <span className="text-white font-bold text-lg">
              Kyokushin Excellence
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Begin Your Martial Arts Journey
          </h2>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto mb-8">
            Join us in the pursuit of strength, discipline, and personal growth
            through the art of Kyokushin Karate
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              <span>📞</span>
              <span>Get in Touch</span>
            </a>
            <a
              href="/gallery"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 hover:scale-105 transition-all duration-300"
            >
              <span>📸</span>
              <span>View Gallery</span>
            </a>
          </div>
        </div>

        {/* Decorative Wave at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 opacity-10">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 fill-white"
          >
            <path d="M0,0 L0,40 Q300,90 600,40 T1200,40 L1200,0 Z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default Home;
