import React from "react";

const features = [
  {
    icon: "explore",
    title: "Career Guidance",
  },
  {
    icon: "check_box",
    title: "Skill Assessment\nTests",
  },
  {
    icon: "school",
    title: "College/University\nFinder",
  },
  {
    icon: "description",
    title: "Resume Builder",
  },
];

export default function FeatureCards() {
  return (
    <div className="flex justify-center gap-8 m-16">
      {features.map((feature, idx) => (
        <div key={idx} className="bg-white rounded-2xl shadow-lg px-10 py-6 flex flex-col items-center w-64">
          <span className="material-icons text-blue-600 text-4xl mb-2">{feature.icon}</span>
          <span className="text-lg font-semibold text-gray-800 text-center" style={{ whiteSpace: "pre-line" }}>
            {feature.title}
          </span>
        </div>
      ))}
    </div>
  );
}