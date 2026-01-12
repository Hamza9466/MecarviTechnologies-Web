"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutEditor() {
  const [formData, setFormData] = useState({
    pageTitle: "About Us",
    founderTitle: "About The Founder",
    founderDescription: "The first foundations were laid in 2012 by Rara Vazquez along with and her friends. She is the brain behind the name and possesses 17 years of industry's experience. Rara had a vision of...",
    companyTitle: "About our Company",
    companyDescription: "Mecarvi Prints is an industry leading printing company that offers a comprehensive range of integrated advertising and marketing solutions, with an aim of providing unparalleled print &...",
    missionTitle: "Mission Statement",
    missionDescription: "Our mission is to serve as our client's most trusted indispensable partner. We work in close liaison with customers to empower their brand value, fuel their growth and achieve their goals by providing...",
    visionTitle: "Vision Statement",
    visionDescription: "Our mission is to serve as our client's most trusted indispensable partner. We work in close liaison with customers to empower their brand value, fuel their growth and achieve their goals by providing...",
    coreValueTitle: "Core Values",
    coreValueDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam nec ex non odio vulputate imperdiet delectus enim leo. Neque erat sed lectus eleifend auctor. Sed non enim sed nulla...",
    image: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, image: e.target.files![0] }));
    }
  };

  const [pageDescription, setPageDescription] = useState("");
  const [logo, setLogo] = useState(null as File | null);

  const handleLogoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setLogo(e.target.files[0]);
    }
  };

  const fields = [
    { label: "Page Title", name: "pageTitle", type: "input" },
    { label: "Founder Title", name: "founderTitle", type: "input" },
    { label: "Founder Description", name: "founderDescription", type: "textarea" },
    { label: "Company Title", name: "companyTitle", type: "input" },
    { label: "Company Description", name: "companyDescription", type: "textarea" },
    { label: "Mission Title", name: "missionTitle", type: "input" },
    { label: "Mission Description", name: "missionDescription", type: "textarea" },
    { label: "Vision Title", name: "visionTitle", type: "input" },
    { label: "Vision Description", name: "visionDescription", type: "textarea" },
    { label: "Core Value Title", name: "coreValueTitle", type: "input" },
    { label: "Core Value Description", name: "coreValueDescription", type: "textarea" },
  ];

  return (
    <div className="space-y-6">
      {/* Two-column form layout */}
      <div className="space-y-4">
        {/* Page Title - standalone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Page Title
          </label>
          <input
            type="text"
            name="pageTitle"
            value={formData.pageTitle}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>

        {/* Title and Description pairs in one row */}
        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Founder Title
            </label>
            <input
              type="text"
              name="founderTitle"
              value={formData.founderTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Founder Description
            </label>
            <textarea
              name="founderDescription"
              value={formData.founderDescription}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Title
            </label>
            <input
              type="text"
              name="companyTitle"
              value={formData.companyTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Company Description
            </label>
            <textarea
              name="companyDescription"
              value={formData.companyDescription}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mission Title
            </label>
            <input
              type="text"
              name="missionTitle"
              value={formData.missionTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Mission Description
            </label>
            <textarea
              name="missionDescription"
              value={formData.missionDescription}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vision Title
            </label>
            <input
              type="text"
              name="visionTitle"
              value={formData.visionTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Vision Description
            </label>
            <textarea
              name="visionDescription"
              value={formData.visionDescription}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 items-center">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Core Value Title
            </label>
            <input
              type="text"
              name="coreValueTitle"
              value={formData.coreValueTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Core Value Description
            </label>
            <textarea
              name="coreValueDescription"
              value={formData.coreValueDescription}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
            />
          </div>
        </div>
      </div>

      {/* Background Image Section */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Background Image
        </label>
        <div className="flex items-center gap-4">
          <label className="inline-block">
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
            <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors">
              Choose File
            </span>
          </label>
          <span className="text-sm text-gray-600">
            {formData.image ? formData.image.name : "No file chosen"}
          </span>
          {formData.image && (
            <div className="relative w-16 h-16 border border-gray-300 rounded-lg overflow-hidden bg-gray-200">
              <Image
                src={URL.createObjectURL(formData.image)}
                alt="Preview"
                fill
                className="object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

