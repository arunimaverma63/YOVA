import React from "react";
import ConsultationBanner from "./ConsultationBanner";
export default function CareerSuccess() {
  return (
    <section className="w-full bg-gray-100 py-10 px-4 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-900">
        Everything You Need for Career Success
      </h2>
      <p className="text-lg text-gray-500 text-center mb-10">
        Comprehensive guidance powered by advanced AI technology
      </p>
      <div className="flex flex-wrap justify-center gap-8 mb-12 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-2xl border px-8 py-6 w-64 flex flex-col items-center">
          <span className="material-icons text-blue-400 text-4xl mb-2">work</span>
          <h3 className="font-semibold text-lg mb-1 text-gray-900">Career Guidance</h3>
          <p className="text-gray-500 text-center text-sm">
            Discover career paths that match your interests, skills, and goals
          </p>
        </div>
        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-2xl border px-8 py-6 w-64 flex flex-col items-center">
          <span className="material-icons text-purple-400 text-4xl mb-2">menu_book</span>
          <h3 className="font-semibold text-lg mb-1 text-gray-900">Course & College Recommendations</h3>
          <p className="text-gray-500 text-center text-sm">
            Find the best courses and colleges tailored to your career aspirations
          </p>
        </div>
        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-2xl border px-8 py-6 w-64 flex flex-col items-center">
          <span className="material-icons text-green-400 text-4xl mb-2">trending_up</span>
          <h3 className="font-semibold text-lg mb-1 text-gray-900">Skill Mapping & Job Trends</h3>
          <p className="text-gray-500 text-center text-sm">
            Stay ahead with insights on in-demand skills and market trends
          </p>
        </div>
        {/* Card 4 */}
        <div className="bg-white rounded-xl shadow-2xl border px-8 py-6 w-64 flex flex-col items-center">
          <span className="material-icons text-orange-400 text-4xl mb-2">mic</span>
          <h3 className="font-semibold text-lg mb-1 text-gray-900">Virtual AI Voice Assistant</h3>
          <p className="text-gray-500 text-center text-sm">
            Get instant answers through natural voice conversations
          </p>
        </div>
      </div>
      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-16 mt-8 w-full max-w-4xl">
        <div className="flex flex-col items-center">
          <span className="text-blue-600 text-3xl font-bold">10K+</span>
          <span className="text-gray-500">Students Guided</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-purple-600 text-3xl font-bold">500+</span>
          <span className="text-gray-500">Career Paths</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-green-600 text-3xl font-bold">95%</span>
          <span className="text-gray-500">Success Rate</span>
        </div>
      </div>
      <ConsultationBanner /> {/* <-- add here */}
    </section>
  );
}