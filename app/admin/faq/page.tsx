"use client";

import FAQEditor from "@/components/admin/faq/FAQEditor";

export default function FAQPageEditor() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 mb-4">
        <h1 className="text-sm font-medium text-gray-600 mb-2">Faq</h1>
      </div>
      
      {/* Edit Section */}
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-blue-900 mb-2">Edit FAQ Page</h2>
            <div className="h-0.5 bg-blue-900 w-full"></div>
          </div>
          
          <FAQEditor />
        </div>
      </div>
    </div>
  );
}

