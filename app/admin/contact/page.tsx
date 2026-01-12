"use client";

import ContactEditor from "@/components/admin/contact/ContactEditor";

export default function ContactPageEditor() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Contact Us</h1>
      </div>
      
      {/* Editor Section */}
      <div className="px-6">
        <h2 className="text-2xl font-bold text-pink-600 mb-2">Edit Contact Us Page</h2>
        <div className="h-1 bg-pink-600 w-full mb-6"></div>
        
        <ContactEditor />
      </div>
    </div>
  );
}

