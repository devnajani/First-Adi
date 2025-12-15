import React from "react";

export default function About() {
  return (
    <div className="pb-20 bg-white">

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeUpSlow {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        @keyframes float {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }

        .animate-fadeUp { animation: fadeUp .8s ease-out both; }
        .animate-fadeUpSlow { animation: fadeUpSlow 1.2s ease-out both; }
        .animate-float { animation: float 3s ease-in-out infinite; }
      `}</style>

      {/* Hero */}
      <div className="bg-red-500 text-white py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
        <p className="max-w-xl mx-auto mt-4 text-lg opacity-90">
          Practical, friendly, and hands-on first aid & CPR training.
        </p>
      </div>

      {/* Main Card */}
      <div className="max-w-7xl mx-auto px-6 -mt-24 animate-fadeUp">
        <div className="bg-white shadow-2xl rounded-3xl p-10 md:p-14 border">

          {/* 2 Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-14 items-center">

            {/* LEFT TEXT */}
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-extrabold text-red-600 leading-tight">
                Your Local Training Partner
              </h2>

              <p className="text-gray-700 text-lg leading-relaxed">
                We provide practical, friendly, and easy-to-follow first aid & CPR
                training for individuals, families, schools, and organizations.
              </p>

              <h3 className="text-xl font-bold text-red-600">
                We Come To You — At Your Convenient Time
              </h3>

              <p className="text-gray-700 leading-relaxed">
                Choose a time that works for you: <b>morning</b>, <b>evening</b>, or
                <b>weekends</b>. We train at your home, office, school, or a local venue.
              </p>

              <ul className="space-y-2 text-gray-700">
                <li>✔ Flexible scheduling options</li>
                <li>✔ Real manikins & AED practice</li>
                <li>✔ Scenario-based hands-on training</li>
                <li>✔ Official certification included</li>
              </ul>
            </div>

            {/* RIGHT SIDE — IMAGE + WHY CHOOSE US */}
            <div className="space-y-8">
              {/* IMAGE */}
              <div className="w-full rounded-2xl overflow-hidden shadow-xl animate-float">
<img
  src="/cpr-4.png"
  alt="CPR Training"
  className="w-full h-[260px] md:h-[280px] lg:h-[300px] object-contain bg-[#f7f7f7] rounded-9xl shadow-xl"
/>


              </div>

              {/* WHY CHOOSE US */}
              <div className="bg-red-50 rounded-xl border border-red-200 p-6 animate-fadeUpSlow">
                <h3 className="text-xl font-bold text-red-600">Why Choose Us</h3>

                <ul className="mt-4 space-y-2 text-gray-700">
                  <li>• Certified & experienced trainers</li>
                  <li>• Fun, simple & memorable techniques</li>
                  <li>• Real-life emergency simulation</li>
                  <li>• Continued post-training support</li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
