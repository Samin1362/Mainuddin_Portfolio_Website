import React from "react";

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      icon: "🏯",
      badge: "1 Year Program",
      title: "Uchi Deshi Training (Live-in Apprenticeship)",
      instructor: "Sensei Arifur Rahman, 4th Dan (IKO Japan)",
      role: "Branch Chief of Chittagong",
      highlights: [
        "Completed intensive one-year live-in training program",
        "Advanced knowledge in Kyokushin Karate techniques",
        "Traditional martial arts philosophy and discipline",
        "Strength conditioning and mental endurance training",
        "Daily hands-on practice under direct supervision",
      ],
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-400",
      featured: true,
    },
    {
      id: 2,
      icon: "🥋",
      badge: "3 Years Training",
      title: "Special Karate Training",
      instructor: "Sensei Arifur Rahman, 4th Dan (IKO Japan)",
      role: "Direct Supervision",
      highlights: [
        "Three years of specialized training completed",
        "Advanced combat techniques mastery",
        "Kata mastery and perfection",
        "Instructional methodology for multiple class levels",
        "Teaching strategies and student development",
      ],
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-400",
      featured: true,
    },
    {
      id: 3,
      icon: "🏖️",
      badge: "Intensive Camps",
      title: "Summer & National Training Camps",
      instructor: "National-Level Training",
      role: "Cox's Bazar & Cumilla",
      highlights: [
        "Summer Training Camp in Cox's Bazar",
        "National Training Camp in Cumilla",
        "High-intensity full-contact sparring sessions",
        "Team training with national practitioners",
        "Advanced physical conditioning programs",
      ],
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-400",
      featured: false,
    },
    {
      id: 4,
      icon: "📜",
      badge: "Official Certification",
      title: "Promotional Kyu Test Certification",
      instructor: "Authorized Examiner",
      role: "Kyokushin Ranking System",
      highlights: [
        "Officially certified to conduct promotional kyu examinations",
        "Accurate assessment of technical performance",
        "Evaluation of discipline and student progression",
        "Authority within Kyokushin Karate ranking system",
        "Student development and advancement tracking",
      ],
      color: "from-yellow-600 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-400",
      featured: false,
    },
  ];

  const stats = [
    {
      value: "4",
      label: "Major Certifications",
      icon: "🎖️",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      value: "4",
      label: "Years Training",
      icon: "⏱️",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      value: "2",
      label: "Intensive Camps",
      icon: "🏕️",
      gradient: "from-green-500 to-green-600",
    },
    {
      value: "100%",
      label: "Dedication",
      icon: "💯",
      gradient: "from-yellow-500 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white">
      {/* Header Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 py-20 px-4">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent_50%)]"></div>
        </div>

        <div className="relative max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-3 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-lg mb-6 shadow-lg animate-bounce">
            <span className="text-3xl">🎖️</span>
            <span>Professional Certifications</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Training & Credentials
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Certified excellence through intensive training and continuous
            professional development
          </p>
        </div>

        {/* Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="w-full h-16 fill-white"
          >
            <path d="M0,0 L0,40 Q300,90 600,40 T1200,40 L1200,0 Z"></path>
          </svg>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div
                className={`bg-gradient-to-r ${stat.gradient} p-6 text-center`}
              >
                <div className="text-5xl mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/90 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Professional Credentials
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Comprehensive training and certifications under renowned Kyokushin
            Karate masters
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="space-y-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className={`group relative ${
                cert.featured ? "lg:scale-105" : ""
              } transition-all duration-300`}
            >
              {/* Featured Badge */}
              {cert.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-yellow-400 text-blue-900 px-6 py-2 rounded-full font-bold text-sm shadow-lg border-2 border-white animate-pulse">
                    ⭐ Featured Certification
                  </div>
                </div>
              )}

              <div
                className={`bg-white rounded-3xl shadow-lg hover:shadow-2xl border-2 ${
                  cert.featured ? "border-yellow-400" : "border-gray-200"
                } hover:border-blue-600 transition-all duration-300 overflow-hidden ${
                  cert.featured ? "ring-4 ring-yellow-400/20" : ""
                }`}
              >
                {/* Header with Gradient */}
                <div
                  className={`bg-gradient-to-r ${cert.color} p-8 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                  <div className="relative flex flex-col md:flex-row md:items-center gap-6">
                    {/* Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center text-6xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 border-2 border-white/30">
                        {cert.icon}
                      </div>
                    </div>

                    {/* Title and Details */}
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-3 border border-white/30">
                        <span>⏱️</span>
                        <span>{cert.badge}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-3">
                        {cert.title}
                      </h3>
                      <div className="space-y-2">
                        <p className="text-white/90 font-semibold text-lg flex items-center gap-2">
                          <span>👤</span>
                          {cert.instructor}
                        </p>
                        <p className="text-white/80 text-sm flex items-center gap-2">
                          <span>📍</span>
                          {cert.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body with Highlights */}
                <div className="p-8">
                  <h4 className="text-lg font-bold text-gray-800 mb-4 uppercase tracking-wide flex items-center gap-2">
                    <span className="text-blue-600">✦</span>
                    Key Highlights
                  </h4>
                  <ul className="space-y-4">
                    {cert.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-4 group/item"
                      >
                        <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg flex items-center justify-center text-sm font-bold shadow-md group-hover/item:scale-110 transition-transform duration-300">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700 leading-relaxed pt-0.5">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer */}
                <div
                  className={`bg-gradient-to-r ${cert.bgColor} px-8 py-4 flex items-center justify-between border-t-2 ${cert.borderColor}`}
                >
                  <span className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                    <span className="text-blue-600">🥋</span>
                    Kyokushin Karate Certification
                  </span>
                  <div className="text-4xl opacity-30 group-hover:opacity-50 transition-opacity">
                    {cert.icon}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Training Journey Timeline */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl border-2 border-blue-200 p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Training Journey
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                1
              </div>
              <h4 className="font-bold text-gray-800">Live-in Training</h4>
              <p className="text-sm text-gray-600">1 Year Uchi Deshi Program</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                2
              </div>
              <h4 className="font-bold text-gray-800">Special Training</h4>
              <p className="text-sm text-gray-600">3 Years Advanced Program</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                3
              </div>
              <h4 className="font-bold text-gray-800">Camp Training</h4>
              <p className="text-sm text-gray-600">National & Summer Camps</p>
            </div>
            <div className="text-center space-y-3">
              <div className="w-16 h-16 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto shadow-lg">
                4
              </div>
              <h4 className="font-bold text-gray-800">Examiner Status</h4>
              <p className="text-sm text-gray-600">Authorized Certification</p>
            </div>
          </div>
        </div>

        {/* Instructor Highlight */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12 text-center text-white mb-16">
          <div className="text-6xl mb-6">👨‍🏫</div>
          <h3 className="text-3xl font-bold mb-4">Trained Under</h3>
          <p className="text-4xl font-bold mb-2">Sensei Arifur Rahman</p>
          <p className="text-xl text-blue-100 mb-4">
            4th Dan (IKO Japan) • Branch Chief of Chittagong
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
              <span className="font-bold">🥋 IKO Japan Certified</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
              <span className="font-bold">📍 Chittagong Branch</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
              <span className="font-bold">⚫⚫⚫⚫ 4th Dan</span>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12 border-t-2 border-gray-200">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span className="text-2xl">🎖️</span>
            <span>Certified Excellence in Kyokushin Karate</span>
          </div>
          <p className="text-gray-600 mt-6 text-lg italic">
            "Credentials earned through discipline, dedication, and continuous
            learning"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Certifications;
