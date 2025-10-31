import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/banner/banner-1.jpeg";
import banner2 from "../assets/images/banner/banner-2.jpeg";
import banner3 from "../assets/images/banner/banner-3.jpeg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      title: "Kyokushin Karate Excellence",
      subtitle: "Strength • Discipline • Mastery",
      description:
        "Empowering students through the ultimate martial art of self-discipline and power",
      badge: "1st Dan Black Belt",
      icon: "🥋",
    },
    {
      image: banner2,
      title: "Training Warriors of Spirit",
      subtitle: "Mind • Body • Spirit",
      description:
        "Building character and confidence through traditional Kyokushin training methods",
      badge: "Professional Instructor",
      icon: "💪",
    },
    {
      image: banner3,
      title: "Journey to Black Belt",
      subtitle: "Dedication • Honor • Excellence",
      description:
        "Transform your life through the path of Kyokushin Karate and achieve greatness",
      badge: "2+ Years Experience",
      icon: "🏆",
    },
  ];

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          {/* Background Image with Parallax Effect */}
          <div
            className="absolute inset-0 bg-cover bg-center transform scale-105 transition-transform duration-[6000ms]"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          />

          {/* Gradient Overlay - Blue Theme */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 via-blue-800/70 to-blue-900/80"></div>

          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
          </div>

          {/* Content */}
          <div className="relative min-h-screen flex items-center justify-center px-4">
            <div className="max-w-5xl mx-auto text-center">
              {/* Top Badge */}
              <div className="mb-6 animate-fade-in-down">
                <div className="inline-flex items-center gap-3 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg shadow-2xl">
                  <span className="text-2xl">{slide.icon}</span>
                  <span>{slide.badge}</span>
                </div>
              </div>

              {/* Main Title */}
              <h1 className="mb-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-white animate-fade-in">
                {slide.title}
              </h1>

              {/* Subtitle with Decorative Elements */}
              <div className="mb-6 flex items-center justify-center gap-4 animate-fade-in-delay">
                <div className="hidden sm:block h-px w-12 bg-yellow-400"></div>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-yellow-400 tracking-wide">
                  {slide.subtitle}
                </p>
                <div className="hidden sm:block h-px w-12 bg-yellow-400"></div>
              </div>

              {/* Description */}
              <p className="mb-8 text-lg md:text-xl lg:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed animate-fade-in-delay-2">
                {slide.description}
              </p>

              {/* Decorative Karate Belt Divider */}
              <div className="flex justify-center items-center gap-4 animate-fade-in-delay-3">
                <div className="h-1 w-16 bg-gradient-to-r from-transparent via-yellow-400 to-yellow-400 rounded-full"></div>
                <span className="text-5xl animate-pulse">🥋</span>
                <div className="h-1 w-16 bg-gradient-to-l from-transparent via-yellow-400 to-yellow-400 rounded-full"></div>
              </div>

              {/* Bottom Stats */}
              <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in-delay-4">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                    4+
                  </div>
                  <div className="text-xs md:text-sm text-blue-100 font-semibold">
                    Institutions
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                    100+
                  </div>
                  <div className="text-xs md:text-sm text-blue-100 font-semibold">
                    Students Trained
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-1">
                    6+
                  </div>
                  <div className="text-xs md:text-sm text-blue-100 font-semibold">
                    Achievements
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Wave Decoration */}
          <div className="absolute bottom-0 left-0 right-0 z-10">
            <svg
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full h-16 md:h-24 fill-white opacity-90"
            >
              <path d="M0,0 L0,40 Q300,90 600,40 T1200,40 L1200,0 Z"></path>
            </svg>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 md:left-8 top-[15%] sm:top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white text-xl sm:text-2xl font-bold transition-all duration-300 hover:scale-110 shadow-xl"
        aria-label="Previous slide"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 md:right-8 top-[15%] sm:top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 hover:border-white/50 text-white text-xl sm:text-2xl font-bold transition-all duration-300 hover:scale-110 shadow-xl"
        aria-label="Next slide"
      >
        ›
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-24 md:bottom-32 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-yellow-400 w-12 shadow-lg shadow-yellow-400/50"
                : "bg-white/50 hover:bg-white/75 w-3"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 left-10 text-4xl opacity-20 animate-float z-0">
        🥋
      </div>
      <div className="absolute top-40 right-16 text-3xl opacity-15 animate-float animation-delay-200 z-0">
        💪
      </div>
      <div className="absolute bottom-40 left-20 text-3xl opacity-15 animate-float animation-delay-400 z-0">
        🏆
      </div>
    </div>
  );
};

export default Banner;
