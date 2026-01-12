"use client";

import AboutEditor from "@/components/admin/about/AboutEditor";

export default function AboutPageEditor() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 mb-4">
        <h1 className="text-xl font-semibold text-gray-900">About Page Section</h1>
      </div>
      
      {/* Edit Section */}
      <div className="px-6">
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-pink-600 mb-2">Edit Home Page</h2>
            <div className="h-0.5 bg-pink-600 w-full"></div>
          </div>
          
          <AboutEditor />
          
          {/* Save Button */}
          <div className="flex justify-end mt-8 pt-6 border-t border-gray-200">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Save
            </button>
          </div>
        </div>

        {/* Core Values Cards Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Core Value Cards */}
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-sm font-bold">
                    <span className="text-pink-600">CORE VALUE #</span>
                    <span className="text-gray-900">{index}</span>
                  </h3>
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
                <div className="space-y-3">
                  <h4 className="font-bold text-gray-900">Innovation</h4>
                  <p className="text-sm text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Evertiat, vitae consequuntur labore laboris dignissimoes, ipsum saepe eligendi aut corrupit accusamus veniam.
                  </p>
                </div>
              </div>
            ))}
            
            {/* Add New Card */}
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
    </div>
  );
}

