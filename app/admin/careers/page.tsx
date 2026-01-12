"use client";

import CareersEditor from "@/components/admin/careers/CareersEditor";

export default function CareersPageEditor() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Careers</h1>
      </div>
      
      {/* Edit Section */}
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <CareersEditor />
          
          {/* Save Button */}
          <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

