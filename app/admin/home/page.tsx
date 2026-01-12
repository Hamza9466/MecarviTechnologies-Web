"use client";

import { useState, useRef } from "react";
import AdminTabs from "@/components/admin/AdminTabs";
import HeroEditor from "@/components/admin/home/HeroEditor";
import AboutEditor from "@/components/admin/home/AboutEditor";
import ExploreEditor from "@/components/admin/home/ExploreEditor";
import ServicesEditor from "@/components/admin/home/ServicesEditor";
import WhatWeDoEditor from "@/components/admin/home/WhatWeDoEditor";
import WhyChooseUsEditor from "@/components/admin/home/WhyChooseUsEditor";
import PortfolioEditor from "@/components/admin/home/PortfolioEditor";
import ReviewsEditor from "@/components/admin/home/ReviewsEditor";
import QuoteEditor from "@/components/admin/home/QuoteEditor";

export default function HomePageEditor() {
  const [activeTab, setActiveTab] = useState("Hero");
  const heroEditorRef = useRef<{ save: () => Promise<void> }>(null);

  const handleSave = async () => {
    if (activeTab === "Hero" && heroEditorRef.current) {
      await heroEditorRef.current.save();
    }
    // Add save handlers for other tabs as needed
  };

  const tabs = [
    "Hero",
    "About",
    "Explore",
    "Services",
    "What We Do",
    "Why Choose Us",
    "Our Facts",
    "Portfolio",
    "Reviews",
    "Quote",
  ];

  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Home Page</h1>
      </div>
      
      {/* Tabs */}
      <div className="px-6 mb-4">
        <AdminTabs tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
      
      {/* Edit Section */}
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-pink-600 mb-2">
              {activeTab === "Quote" ? "Edit Quote Section" : activeTab === "Explore" ? "Edit Explore Page" : activeTab === "About" ? "About Home Page" : activeTab === "Portfolio" ? "Portfolio Section" : activeTab === "Services" ? "Edit Services Section" : "Edit Home Page"}
            </h2>
            {activeTab !== "Portfolio" && activeTab !== "Services" && <div className="h-1 bg-pink-600 w-full"></div>}
          </div>
          
          {/* Content based on active tab */}
          {activeTab === "Hero" && <HeroEditor ref={heroEditorRef} />}
          {activeTab === "About" && <AboutEditor />}
          {activeTab === "Explore" && <ExploreEditor />}
          {activeTab === "Services" && <ServicesEditor />}
          {activeTab === "What We Do" && <WhatWeDoEditor />}
          {activeTab === "Why Choose Us" && <WhyChooseUsEditor />}
          {activeTab === "Our Facts" && <div className="text-gray-600">Our Facts Editor - Coming Soon</div>}
          {activeTab === "Portfolio" && <PortfolioEditor />}
          {activeTab === "Reviews" && <ReviewsEditor />}
          {activeTab === "Quote" && <QuoteEditor />}
          
          {/* Save Button */}
          <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
            <button 
              onClick={handleSave}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

