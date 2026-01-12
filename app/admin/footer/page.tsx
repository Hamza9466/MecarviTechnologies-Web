"use client";

import FooterEditor from "@/components/admin/footer/FooterEditor";

export default function FooterPageEditor() {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="bg-gray-100 px-6 py-4 mb-4">
        <h1 className="text-xl font-semibold text-gray-900">Footer</h1>
      </div>
      
      {/* Editor Section */}
      <div className="px-6">
        <FooterEditor />
      </div>
    </div>
  );
}

