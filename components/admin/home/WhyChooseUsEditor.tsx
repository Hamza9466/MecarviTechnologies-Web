"use client";

import { useState } from "react";
import Image from "next/image";

export default function WhyChooseUsEditor() {
  const [image1, setImage1] = useState<File | null>(null);
  const [image2, setImage2] = useState<File | null>(null);

  const [tabs, setTabs] = useState([
    {
      id: 1,
      title: "Adorable Pricing",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Testing",
      description: "as molestias excepturi sint occaecati cupiditate non provident",
    },
    {
      id: 3,
      title: "Testing 2",
      description: "Et harum quidem rerum facilis est et expedita distinctio.",
    },
  ]);

  const handleTabChange = (tabId: number, field: string, value: string) => {
    setTabs((prev) =>
      prev.map((tab) =>
        tab.id === tabId ? { ...tab, [field]: value } : tab
      )
    );
  };

  const handleImage1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage1(e.target.files[0]);
    }
  };

  const handleImage2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage2(e.target.files[0]);
    }
  };

  return (
    <div className="space-y-8">
      {/* Main Heading */}
      <h3 className="text-2xl font-bold text-pink-600 mb-6">Edit What We Create Section</h3>

      {/* Edit Why Choose Us Images Section */}
      <div className="space-y-6 pb-6 border-b border-gray-200">
        <h4 className="text-lg font-semibold text-gray-900 mb-4">Edit Why Choose Us Images</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image 1 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image 1</label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <label className="inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImage1Change}
                  />
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors">
                    Choose File
                  </span>
                </label>
                <span className="text-sm text-gray-600">
                  {image1 ? image1.name : "No file chosen"}
                </span>
              </div>
              {image1 && (
                <div className="relative w-full h-64 border border-gray-300 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={URL.createObjectURL(image1)}
                    alt="Image 1 Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Image 2 */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Image 2</label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <label className="inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImage2Change}
                  />
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors">
                    Choose File
                  </span>
                </label>
                <span className="text-sm text-gray-600">
                  {image2 ? image2.name : "No file chosen"}
                </span>
              </div>
              {image2 ? (
                <div className="relative w-full h-64 border border-gray-300 rounded-lg overflow-hidden bg-gray-200">
                  <Image
                    src={URL.createObjectURL(image2)}
                    alt="Image 2 Preview"
                    fill
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="relative w-full h-64 border border-gray-300 rounded-lg overflow-hidden bg-black flex items-center justify-center">
                  <span className="text-white text-lg font-medium">600 x 400</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* TABS Section */}
      <div>
        <h4 className="text-xl font-bold text-gray-900 mb-6">TABS</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {tabs.map((tab) => (
            <div key={tab.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h5 className="text-sm font-bold text-gray-900">
                  TAB # {tab.id}
                </h5>
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                  <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Title</label>
                  <input
                    type="text"
                    value={tab.title}
                    onChange={(e) => handleTabChange(tab.id, "title", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white text-sm font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                  <textarea
                    value={tab.description}
                    onChange={(e) => handleTabChange(tab.id, "description", e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white text-sm scrollbar-hide overflow-y-auto"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add New Tab Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm flex items-center justify-center min-h-[200px] cursor-pointer hover:border-pink-500 transition-colors">
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

