import React, { useState, useEffect } from "react";
import banner1 from "../assets/images/banner/banner-1.jpeg";
import banner2 from "../assets/images/banner/banner-2.jpeg";
import banner3 from "../assets/images/banner/banner-3.jpeg";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: banner1,
      title: "Welcome to My Portfolio",
      description:
        "Crafting innovative solutions with cutting-edge technology and creative design.",
    },
    {
      image: banner2,
      title: "Excellence in Development",
      description:
        "Building responsive, scalable, and modern web applications that make an impact.",
    },
    {
      image: banner3,
      title: "Let's Build Together",
      description:
        "Transforming ideas into reality with passion, precision, and expertise.",
    },
  ];

  // Auto-slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
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
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <div
            className="hero min-h-screen"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-neutral-content text-center">
              <div className="max-w-3xl animate-fade-in">
                <h1 className="mb-5 text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  {slide.title}
                </h1>
                <p className="mb-8 text-lg md:text-xl lg:text-2xl">
                  {slide.description}
                </p>
                <button className="btn btn-primary btn-lg">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Previous Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-ghost bg-white/20 hover:bg-white/40 text-white border-none"
        aria-label="Previous slide"
      >
        ❮
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 btn btn-circle btn-ghost bg-white/20 hover:bg-white/40 text-white border-none"
        aria-label="Next slide"
      >
        ❯
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-white w-8"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
