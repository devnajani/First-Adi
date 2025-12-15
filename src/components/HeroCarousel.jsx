import { useEffect, useMemo, useRef, useState } from "react";

export default function HeroCarousel() {
  const images = useMemo(() => ["/cpr-1.jpg", "/cpr-2.jpg", "/cpr-3.png"], []);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef(null);

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % images.length);
      },2000);
    }
    return () => clearInterval(timerRef.current);
  }, [paused, images.length]);

  const go = (n) => setIndex((n + images.length) % images.length);

  return (
    <section
      className="relative h-[80vh] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Slides */}
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`CPR and First Aid training ${i + 1}`}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-all duration-1000 ease-in-out ${
            i === index ? "opacity-100 scale-105" : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className="mx-auto max-w-6xl px-6">
          <div className="max-w-xl text-white space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow-md">
              Empower Yourself with Certified First Aid & CPR Training
            </h1>
            <p className="text-lg text-white/90 leading-relaxed">
              Gain confidence and practical skills to respond in emergencies.
              Learn CPR, first aid, and safety response from certified experts.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#courses"
                className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform hover:scale-105"
              >
                View Courses
              </a>
              <a
                href="#about"
                className="bg-white/90 text-red-700 hover:bg-white px-6 py-3 rounded-lg text-lg font-semibold shadow-lg transition-transform hover:scale-105"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => go(index - 1)}
        className="absolute left-5 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition"
      >
        <ChevronLeft className="h-6 w-6 text-gray-800" />
      </button>
      <button
        onClick={() => go(index + 1)}
        className="absolute right-5 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-2 shadow hover:bg-white transition"
      >
        <ChevronRight className="h-6 w-6 text-gray-800" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => go(i)}
            className={`h-3 w-3 rounded-full transition ${
              i === index ? "bg-white" : "bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

/* Inline Icons */
function ChevronLeft({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function ChevronRight({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
