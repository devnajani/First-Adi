import React from "react";

export default function About() {
  return (
    <div className="bg-white text-gray-900">

      {/* 🔴 Section: Title */}
      <div className="text-center pt-12">
        <h1 className="text-4xl font-extrabold text-red-600">About Us</h1>
        <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
          Learn more about our mission, training approach, and why thousands trust
          us for lifesaving first aid & CPR education.
        </p>
      </div>

      {/* 🔴 Section 1 — Popular Courses Style (3 red & white cards) */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Core Training Programs
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Designed to give you the confidence to respond in emergencies.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

          {/* Card 1 */}
          <div className="bg-white rounded-xl shadow-md border p-6 hover:shadow-xl transition cursor-pointer">
            <div className="text-red-500 text-4xl mb-4">❤️</div>
            <h3 className="font-semibold text-xl">CPR Training</h3>
            <p className="text-gray-600 mt-2">
              Learn chest compressions and rescue breathing techniques.
            </p>
            <button className="mt-6 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-xl shadow-md border p-6 hover:shadow-xl transition cursor-pointer">
            <div className="text-red-500 text-4xl mb-4">🛡️</div>
            <h3 className="font-semibold text-xl">First Aid Basics</h3>
            <p className="text-gray-600 mt-2">
              Essential skills for wounds, injuries, burns & emergency response.
            </p>
            <button className="mt-6 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-xl shadow-md border p-6 hover:shadow-xl transition cursor-pointer">
            <div className="text-red-500 text-4xl mb-4">⚡</div>
            <h3 className="font-semibold text-xl">AED Training</h3>
            <p className="text-gray-600 mt-2">
              Learn the correct use of automated external defibrillators.
            </p>
            <button className="mt-6 border border-red-500 text-red-500 px-4 py-2 rounded-lg hover:bg-red-500 hover:text-white transition">
              Learn More
            </button>
          </div>

        </div>
      </section>

      {/* 🔴 Section 2 — Image + Text (Matches 2nd Photo Style) */}
      <section className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left Image */}
        <div className="flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=600&q=80"
            className="rounded-2xl shadow-lg w-full max-w-md"
            alt="About Team"
          />
        </div>

        {/* Right Text */}
        <div>
          <h2 className="text-3xl font-bold text-red-600">Who We Are</h2>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We offer practical, easy-to-understand first aid & CPR training for
            families, individuals, workplaces and schools. Our trainers use
            hands-on demonstrations, real-life scenarios and simple step-by-step
            methods to help you build confidence.
          </p>

          <p className="mt-4 text-gray-700">
            Whether it’s home training, corporate workshops or community programs
            — we bring certified, friendly and expert-led sessions to your place.
          </p>

          <button className="mt-6 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-semibold transition">
            Get a Quote
          </button>
        </div>

      </section>

      {/* 🔴 Section 3 — Extra About Info (Premium touch) */}
      <section className="bg-red-50 py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-red-600">
            Why People Choose Us
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-red-600">Expert Trainers</h3>
              <p className="mt-2 text-gray-600">
                Certified instructors with years of hands-on field experience.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-red-600">Hands-on Learning</h3>
              <p className="mt-2 text-gray-600">
                Practice using manikins, AED trainers, and real-life situations.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="font-bold text-lg text-red-600">Flexible Scheduling</h3>
              <p className="mt-2 text-gray-600">
                We come to your home or office — morning, evening or weekend.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
