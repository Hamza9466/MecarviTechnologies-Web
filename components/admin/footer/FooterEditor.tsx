"use client";

import { useState } from "react";

export default function FooterEditor() {
  const [footerSections, setFooterSections] = useState<any[]>([]);

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm flex items-center justify-center w-full h-32 cursor-pointer hover:border-pink-500 transition-colors">
          <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

