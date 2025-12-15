import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow">
      {/* top strip */}
      <div className="bg-red-600 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-1.5 text-sm">
          <p> First Aid & CPR Training — Learn lifesaving skills</p>
          <a href="tel:+10000000000" className="hidden sm:inline hover:underline">
            Call: +1 000 000 0000
          </a>
        </div>
      </div>

      {/* main nav */}
      <div className="bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          {/* logo */}
          <a href="/" className="flex items-center gap-2">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-red-600">
              <BusLogo className="h-6 w-6 text-white" />
            </span>
            <span className="text-xl font-semibold text-red-700 tracking-tight">
              FirstAid Co.
            </span>
          </a>

          {/* nav links */}
          <nav className="hidden md:flex items-center gap-8">
            {["Home", "About", "Courses", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-800 font-medium hover:text-red-700 transition"
              >
                {link}
              </a>
            ))}
          </nav>

          {/* mobile menu button */}
          <button
            className="md:hidden rounded-md p-2 ring-1 ring-gray-300 hover:bg-red-50"
            aria-label="Open menu"
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon className="h-6 w-6 text-gray-900" />
          </button>
        </div>

        {/* mobile menu */}
        {open && (
          <nav className="md:hidden border-t border-gray-100 px-4 py-2">
            {["Home", "About", "Courses", "Contact"].map((label) => (
              <a
                key={label}
                href="#"
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-red-50 hover:text-red-700"
              >
                {label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

/* Icons */
function BusLogo({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <rect x="3" y="4" width="18" height="12" rx="2" />
      <path d="M7 16v2M17 16v2M3 12h18M6 8h6" />
      <circle cx="7" cy="20" r="1.5" fill="currentColor" stroke="none" />
      <circle cx="17" cy="20" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function MenuIcon({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M3 6h18M3 12h18M3 18h18" strokeLinecap="round" />
    </svg>
  );
}
