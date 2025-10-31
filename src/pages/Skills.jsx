import React from "react";

const Skills = () => {
  const skills = [
    {
      id: 1,
      icon: "🛡️",
      title: "Self-Defense Techniques",
      description:
        "Proficient in teaching practical self-defense strategies focused on situational awareness, reaction timing, and counterattack methods suitable for all age groups.",
      color: "from-blue-500 to-blue-600",
      bgColor: "from-blue-50 to-blue-100",
      borderColor: "border-blue-300",
    },
    {
      id: 2,
      icon: "💪",
      title: "Physical Conditioning & Flexibility Training",
      description:
        "Skilled in designing strength, endurance, and mobility exercises to improve balance, coordination, and overall athletic performance.",
      color: "from-purple-500 to-purple-600",
      bgColor: "from-purple-50 to-purple-100",
      borderColor: "border-purple-300",
    },
    {
      id: 3,
      icon: "📋",
      title: "Fitness Program Development",
      description:
        "Experienced in creating customized fitness plans that align with individual goals, emphasizing progressive improvement and long-term well-being.",
      color: "from-green-500 to-green-600",
      bgColor: "from-green-50 to-green-100",
      borderColor: "border-green-300",
    },
    {
      id: 4,
      icon: "🩹",
      title: "Injury Prevention & Minor Injury Treatment",
      description:
        "Knowledgeable in proper warm-up, stretching, and recovery techniques to prevent injuries, and capable of administering first-aid treatment when necessary.",
      color: "from-red-500 to-red-600",
      bgColor: "from-red-50 to-red-100",
      borderColor: "border-red-300",
    },
    {
      id: 5,
      icon: "👥",
      title: "Group Class Instruction & Demonstration",
      description:
        "Adept at managing group classes, maintaining discipline, and delivering clear technique demonstrations to ensure understanding and safety for all participants.",
      color: "from-yellow-500 to-yellow-600",
      bgColor: "from-yellow-50 to-yellow-100",
      borderColor: "border-yellow-300",
    },
    {
      id: 6,
      icon: "⚡",
      title: "Safe & Effective Exercise Routines",
      description:
        "Focused on implementing structured, evidence-based exercise routines that build stamina and strength while maintaining proper form and safety.",
      color: "from-orange-500 to-orange-600",
      bgColor: "from-orange-50 to-orange-100",
      borderColor: "border-orange-300",
    },
    {
      id: 7,
      icon: "📊",
      title: "Fitness Assessment & Evaluation",
      description:
        "Skilled in assessing student progress through observation, performance metrics, and periodic evaluations to tailor training intensity and ensure measurable development.",
      color: "from-teal-500 to-teal-600",
      bgColor: "from-teal-50 to-teal-100",
      borderColor: "border-teal-300",
    },
  ];

  const categories = [
    {
      name: "Technical Skills",
      count: 3,
      icon: "🥋",
      gradient: "from-blue-500 to-blue-600",
    },
    {
      name: "Training Methods",
      count: 2,
      icon: "💪",
      gradient: "from-purple-500 to-purple-600",
    },
    {
      name: "Safety & Care",
      count: 2,
      icon: "🛡️",
      gradient: "from-green-500 to-green-600",
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
            <span className="text-3xl">💪</span>
            <span>Professional Skills</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Expertise & Capabilities
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive skill set developed through dedicated training and
            teaching experience
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
        {/* Category Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group relative overflow-hidden bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              ></div>
              <div className="relative p-8 text-center">
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {category.name}
                </h3>
                <div
                  className={`inline-flex items-center gap-2 bg-gradient-to-r ${category.gradient} text-white px-4 py-2 rounded-full font-bold shadow-lg`}
                >
                  <span className="text-2xl">{category.count}</span>
                  <span className="text-sm">Skills</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="mb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Core Competencies
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 hover:scale-105 overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Skill Header */}
                <div
                  className={`bg-gradient-to-r ${skill.color} p-6 relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <div className="relative flex items-center gap-4">
                    <div className="text-5xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300">
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white leading-tight">
                      {skill.title}
                    </h3>
                  </div>
                </div>

                {/* Skill Body */}
                <div className="p-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    {skill.description}
                  </p>
                </div>

                {/* Skill Footer with Progress Indicator */}
                <div className={`bg-gradient-to-r ${skill.bgColor} p-4`}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-600 font-semibold">
                      Proficiency
                    </span>
                    <span className="text-gray-800 font-bold">Expert</span>
                  </div>
                  <div
                    className={`mt-2 h-2 bg-white rounded-full overflow-hidden border ${skill.borderColor}`}
                  >
                    <div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:w-full`}
                      style={{ width: "85%" }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Stats Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl shadow-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
            <div className="space-y-2">
              <div className="text-5xl font-bold">7</div>
              <div className="text-blue-100 text-sm font-semibold uppercase tracking-wide">
                Core Skills
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">100%</div>
              <div className="text-blue-100 text-sm font-semibold uppercase tracking-wide">
                Commitment
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">2+</div>
              <div className="text-blue-100 text-sm font-semibold uppercase tracking-wide">
                Years Refined
              </div>
            </div>
            <div className="space-y-2">
              <div className="text-5xl font-bold">∞</div>
              <div className="text-blue-100 text-sm font-semibold uppercase tracking-wide">
                Continuous Growth
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t-2 border-gray-200">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span className="text-2xl">🥋</span>
            <span>Excellence Through Dedication</span>
          </div>
          <p className="text-gray-600 mt-6 text-lg italic">
            "Skills refined through discipline, perfected through practice"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Skills;
