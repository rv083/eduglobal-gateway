// src/components/layout/Header.jsx
import { useState, useEffect } from "react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [studyDropdownOpen, setStudyDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`w-full top-0 left-0 z-50 sticky transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div
        className="
          max-w-7xl mx-auto px-4 py-3
          grid grid-cols-[auto_1fr_auto]
          items-center gap-4
        "
      >
        {/* Left — Logo + Title */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 rounded-lg bg-yellow-300 flex items-center justify-center text-blue-800 font-extrabold text-lg shadow-sm">
            EGG
          </div>
          <div>
            <h1 className="text-xl md:text-2xl font-extrabold text-blue-700">
              EduGlobalGateway
            </h1>
            <p className="text-xs md:text-sm text-slate-500">
              Your pathway to study abroad
            </p>
          </div>
        </div>

        {/* Center — Navigation */}
        <nav className="hidden md:flex items-center justify-center gap-8 text-[15px] font-medium">
          <div className="relative group">
            <button className="flex items-center gap-1 text-slate-700 hover:text-blue-600 transition">
              Study Abroad
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            <div className="absolute left-1/2 -translate-x-1/2 mt-3 w-56 bg-white/95 border border-blue-50 rounded-xl shadow-lg opacity-0 pointer-events-none transform translate-y-3 scale-95 group-hover:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:scale-100 transition-all duration-300 ease-out backdrop-blur-sm">
              {["IELTS / PTE", "SOP / LOR", "Profiling"].map((item, i) => (
                <a
                  key={i}
                  href="#"
                  className="block px-5 py-3 text-sm text-slate-700 hover:bg-blue-50/70 hover:text-blue-700 rounded-lg transition-colors duration-200 text-center"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          <a href="#services" className="text-slate-700 hover:text-blue-600 transition">
            Career Counselling
          </a>
          <a href="#corporate" className="text-slate-700 hover:text-blue-600 transition">
            Corporate Training
          </a>
          <a href="#universities" className="text-slate-700 hover:text-blue-600 transition">
            Universities
          </a>
          <a href="#advisory" className="text-slate-700 hover:text-blue-600 transition">
            Advisory Board
          </a>
          <a href="#about" className="text-slate-700 hover:text-blue-600 transition">
            About Us
          </a>
        </nav>

        {/* Right — Contact Button */}
        <div className="flex items-center justify-end">
          <a
            href="#contact"
            className="hidden md:inline-block px-5 py-2 rounded-md bg-blue-600 text-white shadow hover:bg-blue-700 transition whitespace-nowrap"
          >
            Contact
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="md:hidden ml-2 flex items-center justify-center w-10 h-10 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-md py-4">
          <ul className="flex flex-col gap-2 text-base font-medium px-4">
            <li>
              <button
                className="w-full flex justify-between items-center px-2 py-2 rounded hover:bg-blue-50"
                onClick={() => setStudyDropdownOpen((s) => !s)}
              >
                Study Abroad
                <svg
                  className={`w-4 h-4 transition-transform ${
                    studyDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {studyDropdownOpen && (
                <div className="mt-1 ml-4 flex flex-col gap-1">
                  {["IELTS / PTE", "SOP / LOR", "Profiling"].map((item, i) => (
                    <a
                      key={i}
                      href="#"
                      className="px-2 py-2 rounded hover:bg-blue-50 text-slate-700"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </li>
            <li><a href="#services" className="block px-2 py-2 rounded hover:bg-blue-50">Career Counselling</a></li>
            <li><a href="#corporate" className="block px-2 py-2 rounded hover:bg-blue-50">Corporate Training</a></li>
            <li><a href="#universities" className="block px-2 py-2 rounded hover:bg-blue-50">Universities</a></li>
            <li><a href="#advisory" className="block px-2 py-2 rounded hover:bg-blue-50">Advisory Board</a></li>
            <li><a href="#about" className="block px-2 py-2 rounded hover:bg-blue-50">About Us</a></li>
            <li>
              <a
                href="#contact"
                className="mt-2 px-4 py-2 rounded-md bg-blue-600 text-white text-center block hover:bg-blue-700 transition"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
