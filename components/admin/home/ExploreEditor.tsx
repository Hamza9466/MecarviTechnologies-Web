"use client";

import { useState } from "react";
import Image from "next/image";

export default function ExploreEditor() {
  const [formData, setFormData] = useState({
    title: "",
    subTitle: "Discover",
    buttonText: "",
    buttonUrl: "http://",
    description: "",
    backgroundImage: null as File | null,
    secondaryImage: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, imageType: "background" | "secondary") => {
    if (e.target.files && e.target.files[0]) {
      if (imageType === "background") {
        setFormData((prev) => ({ ...prev, backgroundImage: e.target.files![0] }));
      } else {
        setFormData((prev) => ({ ...prev, secondaryImage: e.target.files![0] }));
      }
    }
  };

  return (
    <div className="space-y-6">
      {/* Row 1: Title and Sub Title */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            placeholder="Title"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>

        <div>
          <label htmlFor="subTitle" className="block text-sm font-medium text-gray-700 mb-2">
            Sub Title
          </label>
          <input
            type="text"
            id="subTitle"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleInputChange}
            placeholder="Discover"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>
      </div>

      {/* Row 2: Button Text and Button URL */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="buttonText" className="block text-sm font-medium text-gray-700 mb-2">
            Button Text
          </label>
          <input
            type="text"
            id="buttonText"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleInputChange}
            placeholder="http://"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>

        <div>
          <label htmlFor="buttonUrl" className="block text-sm font-medium text-gray-700 mb-2">
            Button URL
          </label>
          <input
            type="url"
            id="buttonUrl"
            name="buttonUrl"
            value={formData.buttonUrl}
            onChange={handleInputChange}
            placeholder="http://"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>
      </div>

      {/* Row 3: Description and Image Uploads */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Description */}
        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={6}
            placeholder="Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
          />
        </div>

        {/* Image Uploads - Two columns side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Background Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Background Image
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <label className="inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "background")}
                  />
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors text-sm">
                    Choose File
                  </span>
                </label>
                <span className="text-sm text-gray-600">
                  {formData.backgroundImage ? formData.backgroundImage.name : "No file chosen"}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {formData.backgroundImage ? "" : "No image selected"}
              </div>
            </div>
          </div>

          {/* Secondary Image */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Secondary Image
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <label className="inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "secondary")}
                  />
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors text-sm">
                    Choose File
                  </span>
                </label>
                <span className="text-sm text-gray-600">
                  {formData.secondaryImage ? formData.secondaryImage.name : "No file chosen"}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {formData.secondaryImage ? "" : "No image selected"}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

