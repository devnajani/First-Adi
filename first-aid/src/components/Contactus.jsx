import React from "react";

export default function ContactUs() {
  return (
    <section className="py-20 bg-white px-6">

      {/* Container */}
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <h2 className="text-4xl font-extrabold text-red-600 mb-4 animate-fadeUp">
          Contact Us
        </h2>

        <p className="text-gray-600 text-lg mb-14 animate-fadeUpSlow">
          Reach out anytime — we’re always here to help you.
        </p>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* PHONE */}
          <div className="bg-white shadow-xl border border-red-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all animate-floatCard flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center shadow-md">
              <svg width="32" height="32" stroke="#d32f2f" fill="none" strokeWidth="2">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.79 19.79 0 0 1 11 19a19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.09 4.18 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.72 12.44 12.44 0 0 0 .67 2.73 2 2 0 0 1-.45 2L8.09 9.91a16 16 0 0 0 6 6l1.46-1.12a2 2 0 0 1 2-.45 12.44 12.44 0 0 0 2.73.67A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mt-4 text-red-700">Phone</h4>
            <p className="text-gray-600 mt-1">+91 98765 43210</p>
          </div>

          {/* EMAIL */}
          <div className="bg-white shadow-xl border border-red-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all animate-floatCard flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center shadow-md">
              <svg width="32" height="32" stroke="#c62828" fill="none" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="M22 6 12 13 2 6" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mt-4 text-red-700">Email</h4>
            <p className="text-gray-600 mt-1">support@youracademy.com</p>
          </div>

          {/* INSTAGRAM */}
          <div className="bg-white shadow-xl border border-red-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all animate-floatCard flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center shadow-md">
              <svg width="32" height="32" stroke="#e91e63" fill="none" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mt-4 text-red-700">Instagram</h4>
            <p className="text-gray-600 mt-1">@youracademy</p>
          </div>

          {/* WHATSAPP */}
          <div className="bg-white shadow-xl border border-red-200 rounded-2xl p-8 hover:shadow-2xl hover:-translate-y-2 transition-all animate-floatCard flex flex-col items-center">
            <div className="w-16 h-16 rounded-2xl bg-red-100 flex items-center justify-center shadow-md">
              <svg width="32" height="32" stroke="#25D366" fill="none" strokeWidth="2">
                <path d="M12 2a10 10 0 0 0-8.7 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2z" />
                <path d="M8 10c0 3 4 6 6 6l1-1" />
              </svg>
            </div>
            <h4 className="text-lg font-semibold mt-4 text-red-700">WhatsApp</h4>
            <p className="text-gray-600 mt-1">+91 98765 43210</p>
          </div>

        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatCard {
          0% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp .7s ease-out both; }
        .animate-fadeUpSlow { animation: fadeUp 1s ease-out both; }
        .animate-floatCard { animation: floatCard 4s ease-in-out infinite; }
      `}</style>

    </section>
  );
}
