import React, { useState, useEffect } from "react";
import image1 from "../assets/images/gallery/1.jpeg";
import image2 from "../assets/images/gallery/2.jpeg";
import image3 from "../assets/images/gallery/3.jpeg";
import logo from "../assets/logo.png";

const Newspaper = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1, image2, image3];

  // Auto-rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
      {/* Newspaper Masthead Header */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 border-b-4 border-blue-600 py-6 px-4">
        <div className="flex items-center justify-center gap-3 mb-3">
          <div className="logo-glow border-2 border-blue-500 rounded-lg p-2 bg-white">
            <img src={logo} alt="logo" className="w-8 h-10 object-contain" />
          </div>
          <div className="text-center">
            <h1
              className="text-2xl font-bold text-white tracking-wider uppercase"
              style={{ fontFamily: "Georgia, serif" }}
            >
              The Karate
            </h1>
            <p className="text-blue-400 text-xs font-semibold tracking-widest">
              CHRONICLE
            </p>
          </div>
        </div>
        <div className="border-t border-b border-gray-600 py-1 px-2">
          <p className="text-center text-gray-400 text-xs italic">
            Excellence in Martial Arts • Est. 2025
          </p>
        </div>
      </div>

      {/* Featured Photo Section */}
      <div className="p-4">
        <div className="mb-4">
          <h2
            className="text-xl font-bold text-gray-900 mb-1 pb-2 border-b-2 border-blue-600"
            style={{ fontFamily: "Georgia, serif" }}
          >
            FEATURED GALLERY
          </h2>
          <p className="text-xs text-gray-500 italic mt-1">
            Moments of Excellence
          </p>
        </div>

        {/* Auto-Rotating Image Carousel */}
        <div className="relative mb-4">
          <div className="relative h-[350px] rounded-lg overflow-hidden shadow-lg border-2 border-gray-300">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <img
                  src={image}
                  alt={`Kyokushin Karate ${index + 1}`}
                  className="w-full h-full object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

                {/* Photo Caption */}
                <div className="absolute bottom-0 left-0 right-0 bg-black/70 px-3 py-2">
                  <p className="text-white text-xs font-semibold">
                    Training Excellence in Kyokushin Karate
                  </p>
                  <p className="text-gray-300 text-[10px]">
                    Photo {index + 1} of {images.length} • October 2025
                  </p>
                </div>
              </div>
            ))}

            {/* Image Navigation Dots */}
            <div className="absolute top-3 right-3 flex gap-1.5 bg-black/50 rounded-full px-2 py-1.5">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentImageIndex
                      ? "bg-blue-500 w-4"
                      : "bg-white/60 hover:bg-white"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                ></button>
              ))}
            </div>

            {/* Kyokushin Badge */}
            <div className="absolute top-3 left-3 bg-blue-600 text-white px-3 py-1 rounded-md text-[10px] font-bold shadow-lg uppercase tracking-wide">
              🥋 Kyokushin
            </div>
          </div>
        </div>

        {/* News Headlines */}
        <div className="space-y-3 mb-4">
          <div className="border-l-4 border-blue-600 pl-3 py-1 bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
            <h3
              className="text-sm font-bold text-gray-900 mb-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              International Tournament Success
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Outstanding performance showcasing exceptional martial arts
              expertise.
            </p>
            <span className="text-[10px] text-blue-600 font-semibold">
              Oct 31, 2025
            </span>
          </div>

          <div className="border-l-4 border-blue-600 pl-3 py-1 bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
            <h3
              className="text-sm font-bold text-gray-900 mb-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Black Belt Mastery
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Achieving the highest level of discipline and technical skill.
            </p>
            <span className="text-[10px] text-blue-600 font-semibold">
              Sep 15, 2025
            </span>
          </div>

          <div className="border-l-4 border-blue-600 pl-3 py-1 bg-gray-50 hover:bg-blue-50 transition-colors duration-300">
            <h3
              className="text-sm font-bold text-gray-900 mb-1"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Leading Next Generation
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed">
              Inspiring and training future Kyokushin champions.
            </p>
            <span className="text-[10px] text-blue-600 font-semibold">
              Aug 20, 2025
            </span>
          </div>
        </div>

        {/* View Gallery Button */}
        <a
          href="#gallery"
          className="block w-full text-center bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 hover:shadow-lg hover:scale-105 group"
        >
          <span className="flex items-center justify-center gap-2">
            VIEW FULL GALLERY
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </span>
        </a>

        {/* Newspaper Footer */}
        <div className="mt-4 pt-3 border-t border-gray-300 text-center">
          <p className="text-[10px] text-gray-500 italic">
            "Strength through discipline, Honor through perseverance"
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newspaper;
