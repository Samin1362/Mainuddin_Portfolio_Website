import React from "react";

const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Social Science (BSS)",
      field: "Political Science",
      institution: "National University",
      location: "Chittagong, Bangladesh",
      year: "January 2023",
      icon: "🎓",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-400",
      description: [
        "Developed a strong understanding of political systems, social structures, and leadership principles",
        "Gained valuable analytical and organizational skills that complement teaching and team management in martial arts instruction",
      ],
      level: "Bachelor's Degree",
      featured: true,
    },
    {
      id: 2,
      degree: "Higher Secondary Certificate (HSC)",
      field: "Humanities",
      institution: "Hathazari Government College",
      location: "Chittagong, Bangladesh",
      year: "January 2017",
      icon: "📚",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-400",
      description: [
        "Studied subjects emphasizing communication, ethics, and social awareness",
        "Helped build interpersonal and motivational teaching abilities essential for martial arts instruction",
      ],
      level: "Higher Secondary",
      featured: false,
    },
    {
      id: 3,
      degree: "Secondary School Certificate (SSC)",
      field: "Science",
      institution: "Gardurara Multilateral High School",
      location: "Hathazari, Bangladesh",
      year: "January 2015",
      icon: "🔬",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-400",
      description: [
        "Acquired a foundational understanding of logical reasoning, physical sciences, and discipline",
        "Formed a strong base for structured martial arts and fitness education",
      ],
      level: "Secondary School",
      featured: false,
    },
  ];

  const stats = [
    {
      value: "BSS",
      label: "Bachelor's Degree",
      icon: "🎓",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      value: "3",
      label: "Academic Levels",
      icon: "📊",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      value: "8+",
      label: "Years of Study",
      icon: "⏱️",
      gradient: "from-green-500 to-green-600",
    },
    {
      value: "2023",
      label: "Latest Degree",
      icon: "🏆",
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
            <span className="text-3xl">🎓</span>
            <span>Academic Background</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Educational Journey
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Building knowledge foundations that enhance martial arts instruction
            and personal development
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
      <section className="max-w-6xl mx-auto px-4 py-16">
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
                <div className="text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-white/90 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education Timeline Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Academic Timeline
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A progressive academic journey spanning multiple disciplines and
            institutions
          </p>
        </div>

        {/* Education Timeline */}
        <div className="relative">
          {/* Vertical Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-purple-500 to-green-600 transform md:-translate-x-1/2 hidden sm:block"></div>

          {/* Education Cards */}
          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={edu.id}
                className={`relative ${
                  index % 2 === 0
                    ? "md:pr-1/2 md:text-right"
                    : "md:pl-1/2 md:ml-auto"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 md:left-1/2 top-8 transform -translate-x-1/2 w-10 h-10 bg-white border-4 border-blue-600 rounded-full shadow-lg z-10 hidden sm:flex items-center justify-center">
                  <div className="text-xl">{edu.icon}</div>
                  {edu.featured && (
                    <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping opacity-75"></div>
                  )}
                </div>

                {/* Education Card */}
                <div
                  className={`ml-0 sm:ml-20 md:ml-0 ${
                    index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                  }`}
                >
                  <div
                    className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 ${
                      edu.featured ? "border-blue-400" : "border-gray-200"
                    } hover:border-blue-600 transition-all duration-300 hover:scale-105 overflow-hidden ${
                      edu.featured ? "ring-4 ring-blue-400/20" : ""
                    }`}
                  >
                    {/* Card Header */}
                    <div
                      className={`bg-gradient-to-r ${edu.color} p-6 relative overflow-hidden`}
                    >
                      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                      <div className="relative">
                        {/* Level Badge */}
                        <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-bold mb-3 border border-white/30">
                          <span>{edu.icon}</span>
                          <span>{edu.level}</span>
                        </div>

                        {/* Degree Title */}
                        <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                          {edu.degree}
                        </h3>
                        <p className="text-xl text-white/90 font-semibold mb-4">
                          {edu.field}
                        </p>

                        {/* Institution Details */}
                        <div className="space-y-2">
                          <p className="text-white/90 font-semibold flex items-center gap-2 justify-start md:justify-end">
                            <span className="md:order-2">🏛️</span>
                            <span className="md:order-1">
                              {edu.institution}
                            </span>
                          </p>
                          <p className="text-white/80 text-sm flex items-center gap-2 justify-start md:justify-end">
                            <span className="md:order-2">📍</span>
                            <span className="md:order-1">{edu.location}</span>
                          </p>
                          <p className="text-white/80 text-sm flex items-center gap-2 justify-start md:justify-end">
                            <span className="md:order-2">📅</span>
                            <span className="md:order-1">{edu.year}</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Card Body */}
                    <div className="p-6">
                      <h4 className="text-sm font-bold text-gray-800 mb-4 uppercase tracking-wide flex items-center gap-2">
                        <span className="text-blue-600">✦</span>
                        Key Learnings
                      </h4>
                      <ul className="space-y-3">
                        {edu.description.map((desc, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-gray-700"
                          >
                            <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                              ✓
                            </span>
                            <span className="text-sm leading-relaxed">
                              {desc}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Card Footer */}
                    <div
                      className={`bg-gradient-to-r ${edu.bgColor} px-6 py-4 flex items-center justify-between border-t-2 ${edu.borderColor}`}
                    >
                      <span className="text-gray-700 font-semibold text-sm flex items-center gap-2">
                        <span className="text-blue-600">📜</span>
                        Completed {edu.year}
                      </span>
                      <div className="text-3xl opacity-30 group-hover:opacity-50 transition-opacity">
                        {edu.icon}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education Path Visual */}
        <div className="mt-16 bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl border-2 border-blue-200 p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Educational Path
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-green-700 text-white rounded-2xl flex items-center justify-center text-4xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                🔬
              </div>
              <h4 className="font-bold text-gray-800 text-lg">Foundation</h4>
              <p className="text-sm text-gray-600">
                Science Background
                <br />
                <span className="font-semibold">2015</span>
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-2xl flex items-center justify-center text-4xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                📚
              </div>
              <h4 className="font-bold text-gray-800 text-lg">Development</h4>
              <p className="text-sm text-gray-600">
                Humanities Studies
                <br />
                <span className="font-semibold">2017</span>
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center text-4xl mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                🎓
              </div>
              <h4 className="font-bold text-gray-800 text-lg">Achievement</h4>
              <p className="text-sm text-gray-600">
                Bachelor's Degree
                <br />
                <span className="font-semibold">2023</span>
              </p>
            </div>
          </div>
        </div>

        {/* Skills Integration Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12 text-white">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🥋</div>
            <h3 className="text-3xl font-bold mb-4">
              Education Meets Martial Arts
            </h3>
            <p className="text-blue-100 text-lg max-w-3xl mx-auto">
              Academic knowledge complements practical martial arts instruction,
              creating a well-rounded teaching approach
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">🧠</div>
              <h4 className="font-bold text-lg mb-2">Analytical Thinking</h4>
              <p className="text-sm text-blue-100">
                From political science to strategic martial arts planning
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">💬</div>
              <h4 className="font-bold text-lg mb-2">Communication</h4>
              <p className="text-sm text-blue-100">
                Humanities background enhances student interaction
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/30 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
              <div className="text-4xl mb-3">⚖️</div>
              <h4 className="font-bold text-lg mb-2">Discipline</h4>
              <p className="text-sm text-blue-100">
                Scientific method applied to structured training programs
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t-2 border-gray-200">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span className="text-2xl">🎓</span>
            <span>Knowledge Applied Through Action</span>
          </div>
          <p className="text-gray-600 mt-6 text-lg italic">
            "Education is not just about books, but applying wisdom to life"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Education;
