import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [logoVisible, setLogoVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setLogoVisible(true), 100); // slight delay for effect
  }, []);

  return (
    <nav className="w-full flex justify-between items-center px-20 pt-8">
      <div className="flex justify-between items-center gap-10 w-full text-white text-lg font-medium">
        <div className="flex gap-3">
          {/* Icon */}
          <div
            className="flex items-center justify-center w-10 h-10 rounded-xl cursor-pointer bg-gradient-to-r from-purple-500 to-blue-500"
            style={{
              opacity: logoVisible ? 1 : 0,
              transform: logoVisible ? "scale(1)" : "scale(0.7)",
              transition:
                "opacity 0.7s ease, transform 0.7s cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Graduation Cap Icon (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5-2m7 0L12 14"
              />
            </svg>
          </div>
          {/* Text */}
          <span className="text-lg font-bold bg-white bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(80,80,200,0.5)] cursor-pointer animate-fade-in-up">
            YOVA - Your Own Virtual Assistant
          </span>
        </div>
        <div className="flex gap-10">
          <span className="hover:underline hover:underline-offset-8 cursor-pointer">
            Careers
          </span>
          <span className="hover:underline hover:underline-offset-8 cursor-pointer">
            Courses
          </span>
          <span className="hover:underline hover:underline-offset-8 cursor-pointer">
            About
          </span>
        </div>
        <button className="border border-white rounded-xl px-6 py-2 text-white font-medium hover:bg-white hover:text-indigo-600 transition">
          Login
        </button>
      </div>
    </nav>
  );
}
