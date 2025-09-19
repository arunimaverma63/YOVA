import React from "react";

export default function Avatar() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-[320px] h-[320px] rounded-full border-4 border-cyan-400 flex items-center justify-center bg-gradient-to-br from-blue-600 via-indigo-500 to-purple-700 shadow-2xl animate-avatar-float">
          <svg width="200" height="200" viewBox="0 0 200 200">
            <circle cx="100" cy="100" r="90" stroke="#38bdf8" strokeWidth="8" fill="none" />
            <circle cx="100" cy="100" r="70" fill="#18181b" />
            <ellipse cx="70" cy="110" rx="12" ry="18" fill="#38bdf8" />
            <ellipse cx="130" cy="110" rx="12" ry="18" fill="#38bdf8" />
            <circle cx="80" cy="100" r="8" fill="#fff" />
            <circle cx="120" cy="100" r="8" fill="#fff" />
            <path d="M85 130 Q100 145 115 130" stroke="#fff" strokeWidth="4" fill="none" />
            <ellipse cx="40" cy="100" rx="15" ry="20" fill="#38bdf8" opacity="0.7" />
            <ellipse cx="160" cy="100" rx="15" ry="20" fill="#38bdf8" opacity="0.7" />
          </svg>
        </div>
      </div>
    </div>
  );
}
