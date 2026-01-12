"use client";

import { useState } from "react";

export default function WhatWeDoEditor() {
  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "Free Standing Signs",
    },
    {
      id: 2,
      title: "Building Signs",
    },
    {
      id: 3,
      title: "Marketing Signs & Displays",
    },
    {
      id: 4,
      title: "Event Signs & Display",
    },
    {
      id: 5,
      title: "Digital Signs",
    },
  ]);

  const [selectedTab, setSelectedTab] = useState<number | null>(null);

  const handleTabChange = (tabId: number, field: string, value: string) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === tabId ? { ...tab, [field]: value } : tab
      )
    );
  };

  const getSelectedTabTitle = () => {
    if (selectedTab === null) return "---";
    const tab = tabs.find((t) => t.id === selectedTab);
    return tab ? tab.title : "---";
  };

  return (
    <div className="space-y-8">
      {/* Main Heading */}
      <h3 className="text-2xl font-bold text-pink-600 mb-6">Edit What We Create Section</h3>

      {/* TABS Section */}
      <div className="space-y-6 pb-6 border-b border-gray-200">
        <h4 className="text-xl font-bold text-gray-900 text-center mb-6">TABS</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {tabs.map((tab) => (
            <div key={tab.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h5 className="text-sm font-bold">
                  <span className="text-gray-900">TAB # </span>
                  <span className="text-red-600">{tab.id}</span>
                </h5>
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </div>
              </div>

              <div>
                <input
                  type="text"
                  value={tab.title}
                  onChange={(e) => handleTabChange(tab.id, "title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white text-sm font-medium"
                />
              </div>
            </div>
          ))}

          {/* Add New Tab Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm flex items-center justify-center min-h-[120px] cursor-pointer hover:border-pink-500 transition-colors">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* TABS CONTENT Section */}
      <div className="space-y-6">
        <h4 className="text-xl font-bold text-gray-900 text-center mb-6">TABS CONTENT</h4>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setSelectedTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedTab === tab.id
                  ? "bg-pink-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm flex flex-col items-center justify-center min-h-[400px] p-8">
          <div className="flex flex-col items-center gap-4">
            <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            <p className="text-gray-600 text-lg">
              Add content for {getSelectedTabTitle()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

