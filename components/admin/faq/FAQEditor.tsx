"use client";

import { useState } from "react";

export default function FAQEditor() {
  const [selectedCategory, setSelectedCategory] = useState("check faq category 2");

  const categories = [
    { id: 1, name: "check faq category 2" },
    { id: 2, name: "check faq category 13" },
  ];

  const faqItems = [
    { id: 1, category: "check faq category 1", description: "check faq category 1 description" },
    { id: 2, category: "check faq category 1", description: "check faq category 1 description" },
  ];

  return (
    <div className="space-y-8">
      {/* CATEGORIES Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300 text-center uppercase">CATEGORIES</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Category Cards */}
          {categories.map((category) => (
            <div key={category.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold">
                  <span className="text-pink-600">CATEGORY # </span>
                  <span className="text-gray-900">{category.id}</span>
                </h4>
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>
              <p className="text-sm text-gray-700">{category.name}</p>
            </div>
          ))}

          {/* Add New Category Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white shadow-sm flex items-center justify-center min-h-[120px] cursor-pointer hover:border-pink-500 transition-colors">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ CONTENT Section */}
      <div>
        <h3 className="text-lg font-bold text-gray-900 mb-4 pb-2 border-b border-gray-300 text-center uppercase">FAQ CONTENT</h3>
        
        {/* Category Filter Buttons */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory("check faq category 2")}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              selectedCategory === "check faq category 2"
                ? "bg-pink-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            check faq category 2
          </button>
          <button
            onClick={() => setSelectedCategory("check faq category 13")}
            className={`px-4 py-2 rounded text-sm font-medium transition-colors ${
              selectedCategory === "check faq category 13"
                ? "bg-pink-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            check faq category 13
          </button>
        </div>

        {/* FAQ Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* FAQ Item Cards */}
          {faqItems.map((item) => (
            <div key={item.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-2">
                <h4 className="text-sm font-bold">
                  <span className="text-pink-600">Q#</span>
                  <span className="text-gray-900">{item.id}</span>
                </h4>
                <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
              </div>
              <p className="text-sm font-semibold text-gray-900 mb-1">{item.category}</p>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          ))}

          {/* Add New FAQ Item Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 bg-white shadow-sm flex items-center justify-center min-h-[200px] cursor-pointer hover:border-pink-500 transition-colors">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

