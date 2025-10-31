import React from "react";

const Accomplishments = () => {
  const accomplishments = [
    {
      id: 1,
      title: "Black Belt (1st Dan)",
      subtitle: "Kyokushin Karate",
      year: "Achievement",
      icon: "🥋",
      badge: "1st Dan",
      description:
        "Earned the prestigious 1st Dan Black Belt through years of dedicated training, discipline, and mastery of Kyokushin techniques. Recognized for exceptional strength, spirit, and technical precision in both kata and kumite.",
      color: "from-gray-800 to-gray-900",
      bgColor: "from-gray-50 to-gray-100",
      borderColor: "border-gray-700",
      featured: true,
      type: "Certification",
    },
    {
      id: 2,
      title: "1st Runner-up",
      subtitle: "10th Young Lion Karate Tournament",
      year: "2025",
      icon: "🥈",
      badge: "Silver Medal",
      description:
        "Secured second place in a highly competitive national tournament, demonstrating outstanding combat strategy, endurance, and respect for the martial arts code.",
      color: "from-blue-600 to-blue-700",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-400",
      featured: true,
      type: "Tournament",
    },
    {
      id: 3,
      title: "Best in Kata Award",
      subtitle: "Excellence in Form Performance",
      year: "2024",
      icon: "🏅",
      badge: "Gold Award",
      description:
        "Recognized for excellence in kata performance, showcasing precision, balance, and mastery of traditional Kyokushin forms through controlled power and fluid motion.",
      color: "from-yellow-600 to-yellow-700",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-400",
      featured: false,
      type: "Award",
    },
    {
      id: 4,
      title: "3rd Runner-up",
      subtitle: "All Bangladesh Karate Tournament",
      year: "2022",
      icon: "🥉",
      badge: "Bronze Medal",
      description:
        "Achieved top placement in one of the country's leading martial arts competitions, exhibiting consistency, determination, and sportsmanship against experienced practitioners.",
      color: "from-orange-600 to-orange-700",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-400",
      featured: false,
      type: "Tournament",
    },
    {
      id: 5,
      title: "Student of the Year",
      subtitle: "Outstanding Progress & Leadership",
      year: "2023",
      icon: "⭐",
      badge: "Recognition",
      description:
        "Honored for exceptional progress, discipline, and leadership within the dojo community — serving as a role model for fellow karateka in training and attitude.",
      color: "from-purple-600 to-purple-700",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-400",
      featured: false,
      type: "Award",
    },
    {
      id: 6,
      title: "Best in Kata Award",
      subtitle: "Technical Mastery & Artistic Expression",
      year: "2022",
      icon: "🏅",
      badge: "Gold Award",
      description:
        "Earned distinction for technical mastery and artistic expression in kata, reflecting deep understanding of Kyokushin form, rhythm, and spirit.",
      color: "from-green-600 to-green-700",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-400",
      featured: false,
      type: "Award",
    },
  ];

  const stats = [
    {
      value: "6",
      label: "Major Achievements",
      icon: "🏆",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      value: "1st",
      label: "Dan Black Belt",
      icon: "🥋",
      gradient: "from-gray-700 to-gray-900",
    },
    {
      value: "3",
      label: "Tournament Medals",
      icon: "🥇",
      gradient: "from-yellow-500 to-yellow-600",
    },
    {
      value: "3",
      label: "Special Awards",
      icon: "⭐",
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const categories = [
    { name: "Tournaments", count: 2, icon: "🥊", color: "text-blue-600" },
    { name: "Awards", count: 3, icon: "🏅", color: "text-yellow-600" },
    { name: "Certifications", count: 1, icon: "🥋", color: "text-gray-800" },
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
            <span className="text-3xl">🏆</span>
            <span>Major Accomplishments</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Achievements & Recognition
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            A journey of dedication, discipline, and excellence in Kyokushin
            Karate
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

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:scale-105 p-6 text-center"
            >
              <div className={`text-6xl mb-3 ${category.color}`}>
                {category.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {category.name}
              </h3>
              <div className="text-3xl font-bold text-blue-600">
                {category.count}
              </div>
            </div>
          ))}
        </div>

        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Hall of Achievements
          </h2>
          <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Recognition and honors earned through years of dedicated training
            and competition
          </p>
        </div>

        {/* Accomplishments Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {accomplishments.map((achievement) => (
            <div
              key={achievement.id}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 ${
                achievement.featured ? "border-yellow-400" : "border-gray-200"
              } hover:border-blue-600 transition-all duration-300 hover:scale-105 overflow-hidden ${
                achievement.featured
                  ? "ring-4 ring-yellow-400/20 lg:col-span-2 lg:row-span-1"
                  : ""
              }`}
            >
              {/* Featured Badge */}
              {achievement.featured && (
                <div className="absolute -top-3 -right-3 z-10">
                  <div className="bg-yellow-400 text-blue-900 w-16 h-16 rounded-full flex items-center justify-center font-bold text-xs shadow-lg border-4 border-white animate-pulse">
                    ⭐<br />
                    TOP
                  </div>
                </div>
              )}

              {/* Card Header */}
              <div
                className={`bg-gradient-to-r ${achievement.color} p-6 relative overflow-hidden`}
              >
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex-1">
                    {/* Type Badge */}
                    <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-bold mb-3 border border-white/30">
                      <span>{achievement.icon}</span>
                      <span>{achievement.type}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-white/90 font-semibold text-sm mb-3">
                      {achievement.subtitle}
                    </p>

                    {/* Year/Badge */}
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <span>📅</span>
                      <span className="font-semibold">{achievement.year}</span>
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="text-6xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 opacity-30 group-hover:opacity-50">
                    {achievement.icon}
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <p className="text-gray-700 leading-relaxed text-sm">
                  {achievement.description}
                </p>
              </div>

              {/* Card Footer */}
              <div
                className={`bg-gradient-to-r ${achievement.bgColor} px-6 py-4 flex items-center justify-between border-t-2 ${achievement.borderColor}`}
              >
                <span className="text-gray-700 font-bold text-sm flex items-center gap-2">
                  <span className="text-blue-600">🏆</span>
                  {achievement.badge}
                </span>
                <div className="text-2xl opacity-40">{achievement.icon}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Black Belt Highlight */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl shadow-2xl p-8 md:p-12 text-white mb-16 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.3),transparent_50%)]"></div>
          </div>

          <div className="relative text-center">
            <div className="text-7xl mb-6">🥋</div>
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full font-bold text-lg mb-4">
              <span>⚫</span>
              <span>Black Belt Achievement</span>
            </div>
            <h3 className="text-4xl font-bold mb-4">
              1st Dan Kyokushin Karate
            </h3>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8">
              The pinnacle of years of dedication, discipline, and mastery.
              Recognized for exceptional strength, spirit, and technical
              precision in both kata and kumite.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
                <span className="font-bold">💪 Exceptional Strength</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
                <span className="font-bold">🔥 Indomitable Spirit</span>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full">
                <span className="font-bold">🎯 Technical Precision</span>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline View */}
        <div className="bg-gradient-to-br from-blue-50 to-white rounded-3xl shadow-xl border-2 border-blue-200 p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Achievement Timeline
          </h3>
          <div className="space-y-6">
            {[2025, 2024, 2023, 2022].map((year) => {
              const yearAchievements = accomplishments.filter(
                (a) => a.year === year.toString()
              );
              if (yearAchievements.length === 0) return null;

              return (
                <div key={year} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl flex items-center justify-center font-bold text-xl shadow-lg">
                      {year}
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    {yearAchievements.map((achievement) => (
                      <div
                        key={achievement.id}
                        className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-shadow duration-300 border-2 border-gray-200 hover:border-blue-600"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-3xl">{achievement.icon}</span>
                          <div>
                            <h4 className="font-bold text-gray-800">
                              {achievement.title}
                            </h4>
                            <p className="text-sm text-gray-600">
                              {achievement.subtitle}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center pt-12 border-t-2 border-gray-200">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span className="text-2xl">🏆</span>
            <span>Driven by Excellence, Guided by Discipline</span>
          </div>
          <p className="text-gray-600 mt-6 text-lg italic">
            "True victory is victory over oneself"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Accomplishments;
