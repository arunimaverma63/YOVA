import React from "react";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center mr-30">
      <h1 className="text-white text-5xl font-bold leading-tight mb-8">
        Your AI-powered <br />
        Career & Education <br />
        Advisor
      </h1>
      <div className="flex gap-6 mb-4">
        <button className="flex items-center gap-2 border border-white rounded-xl px-6 py-3 text-white bg-white bg-opacity-10 hover:bg-opacity-20 transition">
          <span className="material-icons">mic</span>
          Ask the AI Advisor
        </button>
        <button className="flex items-center gap-2 border border-white rounded-xl px-6 py-3 text-white bg-white bg-opacity-10 hover:bg-opacity-20 transition">
          <span className="material-icons">work</span>
          Explore Careers
        </button>
      </div>
      <div>
        <button className="flex items-center gap-2 border border-white rounded-xl px-6 py-3 text-white bg-white bg-opacity-10 hover:bg-opacity-20 transition">
          <span className="material-icons">school</span>
          Find Courses
        </button>
      </div>
    </div>
  );
}