import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import image21 from "../assets/images/gallery/21.jpeg";
import image38 from "../assets/images/gallery/38.jpeg";
import image46 from "../assets/images/gallery/46.jpeg";

const About = () => {
  // Refs for animation targets
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const underlineRef = useRef(null);
  const taglineRef = useRef(null);
  const featuredImageRef = useRef(null);
  const smallImagesRef = useRef([]);
  const badgeRef = useRef(null);
  const blackBeltRef = useRef(null);
  const achievementCardsRef = useRef([]);
  const statsCardsRef = useRef([]);
  const achievements = [
    {
      icon: "🥋",
      title: "Kyokushin Karate Black Belt",
      description:
        "Achieved the prestigious Black Belt rank in Kyokushin Karate",
      year: "",
      featured: true,
    },
    {
      icon: "🥈",
      title: "1st Runner Up",
      description: "10th Young Lion Karate Tournament",
      year: "2025",
      featured: false,
    },
    {
      icon: "🏆",
      title: "Best in Kata Award",
      description: "Outstanding performance in traditional forms",
      year: "2022",
      featured: false,
    },
    {
      icon: "🥉",
      title: "3rd Runner Up",
      description: "All Bangladesh Karate Tournament",
      year: "2022",
      featured: false,
    },
    {
      icon: "⭐",
      title: "Student of the Year",
      description: "Recognition for exceptional dedication and progress",
      year: "2023",
      featured: false,
    },
  ];

  const images = [
    { src: image38, alt: "Kyokushin Training 2" },
    { src: image21, alt: "Kyokushin Training 1" },
    { src: image46, alt: "Kyokushin Training 3" },
  ];

  // GSAP Animations on mount
  useEffect(() => {
    // Small delay to ensure DOM is ready
    const timer = setTimeout(() => {
      try {
        const ctx = gsap.context(() => {
          // Create master timeline with faster animations
          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            onComplete: () => {
              // Ensure everything is visible after animation
              gsap.set(
                [
                  titleRef.current,
                  underlineRef.current,
                  taglineRef.current,
                  featuredImageRef.current,
                  smallImagesRef.current,
                  badgeRef.current,
                  blackBeltRef.current,
                  achievementCardsRef.current,
                  statsCardsRef.current,
                ],
                { clearProps: "all" }
              );
            },
          });

          // Header animations - faster
          if (titleRef.current) {
            tl.from(titleRef.current, {
              y: -30,
              opacity: 0,
              duration: 0.5,
            });
          }

          if (underlineRef.current) {
            tl.from(
              underlineRef.current,
              {
                scaleX: 0,
                duration: 0.4,
                ease: "back.out(1.5)",
              },
              "-=0.3"
            );
          }

          if (taglineRef.current) {
            tl.from(
              taglineRef.current,
              {
                y: 15,
                opacity: 0,
                duration: 0.4,
              },
              "-=0.2"
            );
          }

          // Featured image animation - faster
          if (featuredImageRef.current) {
            tl.from(
              featuredImageRef.current,
              {
                scale: 0.9,
                opacity: 0,
                duration: 0.6,
                ease: "back.out(1.1)",
              },
              "-=0.3"
            );
          }

          // Small images stagger - faster
          if (smallImagesRef.current.length > 0) {
            tl.from(
              smallImagesRef.current,
              {
                y: 30,
                opacity: 0,
                scale: 0.9,
                duration: 0.5,
                stagger: 0.15,
                ease: "back.out(1.3)",
              },
              "-=0.5"
            );
          }

          // Badge pop in - faster
          if (badgeRef.current) {
            tl.from(
              badgeRef.current,
              {
                scale: 0,
                opacity: 0,
                duration: 0.5,
                ease: "back.out(1.7)",
              },
              "-=0.3"
            );
          }

          // Black Belt card dramatic entrance - faster
          if (blackBeltRef.current) {
            tl.from(
              blackBeltRef.current,
              {
                rotateY: 90,
                opacity: 0,
                scale: 0.9,
                duration: 0.7,
                ease: "power3.out",
              },
              "-=0.6"
            );
          }

          // Achievement cards stagger - faster
          if (achievementCardsRef.current.length > 0) {
            tl.from(
              achievementCardsRef.current,
              {
                x: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.1,
                ease: "power2.out",
              },
              "-=0.5"
            );
          }

          // Stats cards slide up - faster
          if (statsCardsRef.current.length > 0) {
            tl.from(
              statsCardsRef.current,
              {
                y: 30,
                opacity: 0,
                duration: 0.5,
                stagger: 0.08,
                ease: "back.out(1.3)",
              },
              "-=0.4"
            );
          }
        }, sectionRef);

        return () => ctx.revert();
      } catch (error) {
        console.error("GSAP animation error:", error);
        // If animations fail, ensure content is visible
        gsap.set(
          [
            titleRef.current,
            underlineRef.current,
            taglineRef.current,
            featuredImageRef.current,
            smallImagesRef.current,
            badgeRef.current,
            blackBeltRef.current,
            achievementCardsRef.current,
            statsCardsRef.current,
          ],
          { clearProps: "all" }
        );
      }
    }, 50); // Reduced delay for faster appearance

    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full bg-linear-to-b from-white via-gray-50 to-white py-16"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div ref={headerRef} className="text-center mb-12">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            About <span className="text-blue-600">Me</span>
          </h2>
          <div
            ref={underlineRef}
            className="w-24 h-1.5 bg-linear-to-r from-blue-600 via-blue-400 to-blue-600 mx-auto rounded-full mb-4"
          ></div>
          <p
            ref={taglineRef}
            className="text-gray-600 text-lg max-w-2xl mx-auto"
          >
            A journey of dedication, discipline, and excellence in Kyokushin
            Karate
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Images Gallery */}
          <div className="space-y-6">
            <div className="relative">
              {/* Main Featured Image */}
              <div
                ref={featuredImageRef}
                className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-blue-600 group"
              >
                <img
                  src={images[0].src}
                  alt={images[0].alt}
                  className="w-full h-[300px] sm:h-[400px] object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Kyokushin Excellence
                  </h3>
                  <p className="text-blue-200 text-sm">
                    Dedication to the martial arts way
                  </p>
                </div>
              </div>

              {/* Two Smaller Images Grid */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                {images.slice(1).map((image, index) => (
                  <div
                    key={index}
                    ref={(el) => (smallImagesRef.current[index] = el)}
                    className="relative rounded-2xl overflow-hidden shadow-xl border-2 border-blue-300 hover:border-blue-600 transition-all duration-300 group hover:scale-105"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-[140px] sm:h-[180px] object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative Badge */}
            <div className="flex justify-center">
              <div
                ref={badgeRef}
                className="inline-flex items-center gap-3 bg-linear-to-r from-yellow-400 via-yellow-500 to-yellow-400 text-gray-900 px-6 py-3 rounded-full font-bold shadow-lg"
              >
                <span className="text-2xl">🏆</span>
                <span>Award-Winning Karateka</span>
              </div>
            </div>
          </div>

          {/* Right Side - Achievements */}
          <div className="space-y-6">
            {/* Featured Achievement - Black Belt */}
            <div
              ref={blackBeltRef}
              className="bg-linear-to-br from-blue-600 to-blue-700 rounded-3xl p-8 shadow-2xl border-4 border-blue-800 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🥋</div>
                <h3 className="text-3xl font-bold text-white mb-2">
                  Black Belt
                </h3>
                <p className="text-blue-100 text-lg">Kyokushin Karate</p>
                <div className="mt-4 pt-4 border-t border-blue-400">
                  <p className="text-white font-semibold">
                    The highest achievement in traditional martial arts
                    excellence
                  </p>
                </div>
              </div>
            </div>

            {/* Other Achievements Grid */}
            <div className="grid gap-4">
              {achievements.slice(1).map((achievement, index) => (
                <div
                  key={index}
                  ref={(el) => (achievementCardsRef.current[index] = el)}
                  className="group bg-white rounded-2xl p-6 shadow-lg border-2 border-gray-200 hover:border-blue-600 hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-16 h-16 bg-linear-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <h4 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                          {achievement.title}
                        </h4>
                        {achievement.year && (
                          <span className="shrink-0 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                            {achievement.year}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div
                ref={(el) => (statsCardsRef.current[0] = el)}
                className="bg-linear-to-br from-blue-50 to-blue-100 rounded-xl p-4 text-center border-2 border-blue-200"
              >
                <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
                <div className="text-xs text-gray-600 font-semibold">
                  Major Awards
                </div>
              </div>
              <div
                ref={(el) => (statsCardsRef.current[1] = el)}
                className="bg-linear-to-br from-yellow-50 to-yellow-100 rounded-xl p-4 text-center border-2 border-yellow-200"
              >
                <div className="text-3xl font-bold text-yellow-600 mb-1">
                  3+
                </div>
                <div className="text-xs text-gray-600 font-semibold">
                  Years Training
                </div>
              </div>
              <div
                ref={(el) => (statsCardsRef.current[2] = el)}
                className="bg-linear-to-br from-purple-50 to-purple-100 rounded-xl p-4 text-center border-2 border-purple-200"
              >
                <div className="text-3xl font-bold text-purple-600 mb-1">
                  1st
                </div>
                <div className="text-xs text-gray-600 font-semibold">
                  Black Belt
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
