import React from "react";

export default function ConsultationBanner() {
  return (
    <div className="w-full flex justify-center items-center py-12 bg-transparent">
      <div className="w-full max-w-3xl mx-auto rounded-3xl bg-gradient-to-r from-blue-500 to-purple-500 px-8 py-10 text-center shadow-lg">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Discover Your Future?
        </h2>
        <p className="text-lg text-white/90 mb-8">
          Join thousands of students who found their perfect career path with our AI guidance
        </p>
        <button className="bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl shadow hover:bg-blue-50 transition flex items-center justify-center mx-auto gap-2">
          Start Free Consultation
          <span className="material-icons text-blue-600 text-xl">arrow_forward</span>
        </button>
      </div>
    </div>
  );
}