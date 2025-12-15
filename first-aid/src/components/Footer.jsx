import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-red-700 to-red-900 text-white pt-20 pb-10">

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1521790797524-b2497295b8a0?auto=format&fit=crop&w=1200&q=60')] bg-cover bg-center animate-slowFade"></div>

      {/* Container */}
      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-3xl font-extrabold mb-4 tracking-wide">
            YourAcademy
          </h2>
          <p className="text-red-100">
            Empowering you with certified lifesaving skills.  
            Learn. Practice. Save Lives.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-red-100">
            <li className="hover:text-white transition cursor-pointer">Home</li>
            <li className="hover:text-white transition cursor-pointer">Courses</li>
            <li className="hover:text-white transition cursor-pointer">About Us</li>
            <li className="hover:text-white transition cursor-pointer">Contact</li>
          </ul>
        </div>

        {/* COURSES */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Popular Courses</h3>
          <ul className="space-y-2 text-red-100">
            <li className="hover:text-white transition cursor-pointer">First Aid CPR - Level C</li>
            <li className="hover:text-white transition cursor-pointer">Basic Life Support (BLS)</li>
            <li className="hover:text-white transition cursor-pointer">Child Care First Aid</li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Connect With Us</h3>

          <div className="flex space-x-4">
            {/* Instagram */}
            <div className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:scale-110 transition-all">
              <svg width="28" height="28" stroke="#fff" fill="none" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17" cy="7" r="1" />
              </svg>
            </div>

            {/* WhatsApp */}
            <div className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:scale-110 transition-all">
              <svg width="28" height="28" stroke="#25D366" fill="none" strokeWidth="2">
                <path d="M12 2a10 10 0 0 0-8.7 15.2L2 22l4.9-1.3A10 10 0 1 0 12 2z" />
                <path d="M8 10c0 3 4 6 6 6l1-1" />
              </svg>
            </div>

            {/* Email */}
            <div className="w-12 h-12 bg-white/10 border border-white/20 backdrop-blur-lg rounded-xl flex items-center justify-center hover:scale-110 transition-all">
              <svg width="28" height="28" stroke="#fff" fill="none" strokeWidth="2">
                <path d="M4 4h16v16H4z" />
                <path d="M22 6 12 13 2 6" />
              </svg>
            </div>
          </div>

          <p className="text-red-100 mt-4 text-sm">
            support@youracademy.com
          </p>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-red-600/40 pt-6 text-center text-red-200 text-sm">
        © {new Date().getFullYear()} YourAcademy. All Rights Reserved.
      </div>

      {/* Animations */}
      <style>{`
        @keyframes slowFade {
          0% { opacity: 0.05; transform: scale(1); }
          50% { opacity: 0.15; transform: scale(1.05); }
          100% { opacity: 0.05; transform: scale(1); }
        }
        .animate-slowFade {
          animation: slowFade 12s ease-in-out infinite;
        }
      `}</style>

    </footer>
  );
}
