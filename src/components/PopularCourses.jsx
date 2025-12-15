import React from "react";

export default function PopularCourses() {
  const courses = [
    {
      title: "Standard First Aid CPR AED – Level C",
      desc: "Comprehensive training combining first aid, CPR, and AED skills for adults, children, and infants.",
      extra: "Includes live scenario practice, official certification, and hands-on AED training for real emergencies.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e53935"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/>
        </svg>
      )
    },
    {
      title: "Basic Life Support",
      desc: "Essential life-saving techniques for healthcare providers and first responders.",
      extra: "Covers CPR, airway management, team response, rescue breathing, and certification exam preparation.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e53935"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      )
    },
    {
      title: "Child Care First Aid",
      desc: "Specialized training for caregivers, teachers, and parents working with children.",
      extra: "Focused on infant CPR, choking emergencies, wound care, allergic reactions, and child-specific injuries.",
      icon: (
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#e53935"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-10 bg-gradient-to-b from-red-600 to-red-800">

      {/* Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-white animate-fadeUp">
          Popular Courses
        </h2>
        <p className="mt-3 text-red-100 text-lg animate-fadeUpSlow">
          Our most trusted and certified lifesaving training programs.
        </p>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatCard {
          0% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp .7s ease-out both; }
        .animate-fadeUpSlow { animation: fadeUp 1s ease-out both; }
        .animate-floatCard { animation: floatCard 3s ease-in-out infinite; }
      `}</style>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">

        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border border-red-200 shadow-xl rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 animate-floatCard"
          >
            {/* ICON */}
            <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center mb-6">
              {course.icon}
            </div>

            <h3 className="text-xl font-bold text-red-700 mb-3">{course.title}</h3>

            <p className="text-gray-700 mb-3">{course.desc}</p>

            <p className="text-gray-500 text-sm mb-6">{course.extra}</p>

            <button className="w-full border border-red-400 text-red-600 py-2 rounded-xl font-medium hover:bg-red-50 transition">
              Learn More
            </button>
          </div>
        ))}

      </div>

    </section>
  );
}
