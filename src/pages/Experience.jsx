import React from "react";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: "Karate Instructor",
      organization: "Bangladesh Kyokushin Karate Academy",
      location: "Hathazari, Chittagong, Bangladesh",
      period: "April 2024 – Present",
      current: true,
      responsibilities: [
        "Lead and manage classes for multiple skill levels",
        "Develop self-defense and fighting techniques tailored to student needs",
        "Promote safe training practices and overall physical well-being",
      ],
    },
    {
      id: 2,
      title: "Karate Instructor",
      organization: "Bangladesh International School and College",
      location: "Dhaka, Bangladesh",
      period: "April 2023 – Present",
      current: true,
      responsibilities: [
        "Teach fundamental and advanced Kyokushin Karate techniques",
        "Foster discipline, confidence, and personal growth through martial arts",
      ],
    },
    {
      id: 3,
      title: "Assistant Karate Instructor",
      organization: "South Breeze School and College",
      location: "Dhaka, Bangladesh",
      period: "October 2023 – December 2023",
      current: false,
      responsibilities: [
        "Supported senior instructors in conducting classes and tracking progress",
        "Assisted in fitness training and technical demonstrations",
      ],
    },
    {
      id: 4,
      title: "Karate Instructor",
      organization: "Daffodil International School and College",
      location: "Dhaka, Bangladesh",
      period: "March 2023 – December 2023",
      current: false,
      responsibilities: [
        "Designed dynamic training programs focused on competition readiness",
        "Trained and mentored students for national tournaments and personal fitness goals",
      ],
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
            <span className="text-3xl">🥋</span>
            <span>Professional Experience</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Teaching Journey
          </h1>
          <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto">
            Empowering students through Kyokushin Karate instruction across
            Bangladesh
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

      {/* Experience Timeline */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 text-center border-2 border-blue-200 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-blue-600 mb-2">4</div>
            <div className="text-sm text-gray-600 font-semibold">
              Institutions
            </div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 text-center border-2 border-green-200 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-green-600 mb-2">2+</div>
            <div className="text-sm text-gray-600 font-semibold">
              Years Teaching
            </div>
          </div>
          <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl p-6 text-center border-2 border-yellow-200 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-yellow-600 mb-2">2</div>
            <div className="text-sm text-gray-600 font-semibold">
              Current Roles
            </div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 text-center border-2 border-purple-200 hover:scale-105 transition-transform duration-300">
            <div className="text-4xl font-bold text-purple-600 mb-2">100+</div>
            <div className="text-sm text-gray-600 font-semibold">
              Students Trained
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 via-blue-400 to-blue-600 transform md:-translate-x-1/2"></div>

          {/* Experience Cards */}
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative mb-16 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-8 h-8 bg-white border-4 border-blue-600 rounded-full shadow-lg z-10">
                {exp.current && (
                  <div className="absolute inset-0 bg-blue-600 rounded-full animate-ping"></div>
                )}
              </div>

              {/* Experience Card */}
              <div
                className={`ml-20 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-16" : "md:ml-16"
                }`}
              >
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-blue-600 transition-all duration-300 overflow-hidden hover:scale-105">
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {exp.title}
                        </h3>
                        <p className="text-blue-100 font-semibold text-lg mb-1">
                          {exp.organization}
                        </p>
                        <p className="text-blue-200 text-sm flex items-center gap-2">
                          <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          {exp.location}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="flex-shrink-0 bg-yellow-400 text-blue-900 px-4 py-2 rounded-full text-xs font-bold uppercase shadow-lg animate-pulse">
                          Current
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6">
                    {/* Period */}
                    <div className="flex items-center gap-2 text-gray-600 mb-4">
                      <svg
                        className="w-5 h-5 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      <span className="font-semibold">{exp.period}</span>
                    </div>

                    {/* Responsibilities */}
                    <h4 className="text-sm font-bold text-gray-800 mb-3 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                            ✓
                          </span>
                          <span className="text-sm leading-relaxed">
                            {resp}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Footer Icon */}
                  <div className="bg-gray-50 px-6 py-4 flex items-center justify-between">
                    <span className="text-blue-600 font-semibold text-sm">
                      🥋 Kyokushin Karate
                    </span>
                    <div className="text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                      🥋
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 pt-12 border-t-2 border-gray-200">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            <span className="text-2xl">🥋</span>
            <span>Dedicated to Teaching Excellence</span>
          </div>
          <p className="text-gray-600 mt-6 text-lg italic">
            "Training not just fighters, but disciplined individuals"
          </p>
        </div>
      </section>
    </div>
  );
};

export default Experience;
