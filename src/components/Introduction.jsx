import React from "react";

const Introduction = () => {
  const highlights = [
    {
      icon: "🥋",
      title: "Expertise",
      description:
        "Self-defense, fighting techniques, and diverse strength training programs",
    },
    {
      icon: "🎯",
      title: "Teaching Style",
      description:
        "Managing multiple class levels simultaneously with hands-on approach",
    },
    {
      icon: "💪",
      title: "Philosophy",
      description:
        "Promoting martial arts principles, fitness development, and safe practice",
    },
  ];

  return (
    <section className="w-full bg-linear-to-br from-gray-50 to-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Main Card */}
        <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden hover:shadow-3xl transition-shadow duration-500">
          {/* Card Header with Gradient */}
          <div className="relative bg-linear-to-r from-blue-600 via-blue-700 to-blue-600 px-8 py-12 text-center">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
            </div>

            <div className="relative">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-5 py-2 rounded-full font-bold text-sm mb-4 shadow-lg">
                <span>⭐</span>
                <span>3+ Years Experience</span>
              </div>

              {/* Title */}
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                Kyokushin Karate Instructor
              </h2>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                Skilled and dedicated instructor committed to building strength,
                discipline, and spirit through traditional Kyokushin training
              </p>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0">
              <svg
                viewBox="0 0 1200 120"
                preserveAspectRatio="none"
                className="w-full h-12 fill-white"
              >
                <path d="M0,0 L0,40 Q300,90 600,40 T1200,40 L1200,0 Z"></path>
              </svg>
            </div>
          </div>

          {/* Card Body */}
          <div className="px-8 py-10">
            {/* Main Description */}
            <div className="mb-10">
              <div className="flex items-start gap-4 bg-blue-50 border-l-4 border-blue-600 rounded-r-xl p-6 shadow-md">
                <div className="text-3xl shrink-0">📖</div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    About the Instructor
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Recognized for successfully managing and teaching multiple
                    class levels simultaneously. A hands-on, caring instructor
                    committed to ensuring the safe practice of martial arts
                    while helping students of all ages achieve their personal
                    fitness goals.
                  </p>
                </div>
              </div>
            </div>

            {/* Highlights Grid */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {highlights.map((item, index) => (
                <div
                  key={index}
                  className="group bg-linear-to-br from-white to-blue-50 rounded-2xl p-6 border-2 border-blue-200 hover:border-blue-600 hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="text-center pt-6 border-t-2 border-gray-100">
              <div className="inline-flex items-center gap-3 bg-linear-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-default">
                <span className="text-2xl">🥋</span>
                <span className="text-lg">
                  Passionate About Martial Arts Excellence
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
