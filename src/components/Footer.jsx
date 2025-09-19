import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#181f36] text-white pt-12 pb-6 px-4 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        {/* Brand & Description */}
        <div className="flex-1 min-w-[200px]">
          <div className="flex items-center gap-2 mb-2">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 rounded-full p-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12 14l9-5-9-5-9 5 9 5zm0 0v6m0-6l-3.5-2m7 0L12 14" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="font-bold text-lg">YOVA-Your Own Virtual Assistant</span>
          </div>
          <p className="text-gray-300 text-sm">
            Empowering students with AI-driven career guidance and education recommendations.
          </p>
        </div>
        {/* Features */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Features</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Career Assessment</li>
            <li>Course Recommendations</li>
            <li>College Finder</li>
            <li>Voice Assistant</li>
          </ul>
        </div>
        {/* Resources */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Resources</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>YOVA Guides</li>
            <li>Industry Insights</li>
            <li>Success Stories</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* Support */}
        <div className="flex-1 min-w-[150px]">
          <h4 className="font-semibold mb-2">Support</h4>
          <ul className="text-gray-300 text-sm space-y-1">
            <li>Help Center</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-400">
        © 2024 YOVA-Your Own Virtual Assistant. All rights reserved.
      </div>
    </footer>
  );
}