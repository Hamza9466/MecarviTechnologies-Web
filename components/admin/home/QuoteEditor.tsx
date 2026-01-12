"use client";

import { useState } from "react";
import Image from "next/image";

export default function QuoteEditor() {
  const [formData, setFormData] = useState({
    requestQuoteTitle: "Start Your Project updated",
    requestQuoteSubtitle: "Get the Signs You Need, at the Right Price",
    description: "We're here to help. Take the first step by sharing a few details about your project, and We'll provide a tailored estimate that's that's accurate, fair, and aligned with your budget. Great signage begins with clear communication—and that includes pricing. Our streamlined process makes it easy to bring your vision to life with transparent, upfront estimates. No pressure. No surprises. Just honest, expert guidance every step of the way",
    buttonText: "Quote Request",
    title1: "Start Now, Pay Later",
    title2: "Start Now, Pay Later",
    paragraph1: "Mecarvi Advantage Credit makes it easier to move forward with the signage solutions you need—without the upfront cash flow strain. Our in-house financing is built to align with your budget, offering the flexibility to start your project now and pay over time. With a simplified process and strong approval support, Mecarvi Advantage Credit gives you the confidence to invest in your brand without delay or uncertainty",
    paragraph2: "Mecarvi Advantage Credit makes it easier to move forward with the signage solutions you need—without the upfront cash flow strain. Our in-house financing is built to align with your budget, offering the flexibility to start your project now and pay over time. With a simplified process and strong approval support, Mecarvi Advantage Credit gives you the confidence to invest in your brand without delay or uncertainty.",
    image1: null as File | null,
    image2: null as File | null,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, imageKey: 'image1' | 'image2') => {
    if (e.target.files && e.target.files[0]) {
      setFormData((prev) => ({ ...prev, [imageKey]: e.target.files![0] }));
    }
  };

  return (
    <div className="space-y-6">
      {/* Request Quote Title */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Request Quote Title
        </label>
        <input
          type="text"
          name="requestQuoteTitle"
          value={formData.requestQuoteTitle}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
        />
      </div>

      {/* Request Quote Subtitle */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Request Quote Subtitle
        </label>
        <input
          type="text"
          name="requestQuoteSubtitle"
          value={formData.requestQuoteSubtitle}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Description
        </label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleInputChange}
          rows={6}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
        />
      </div>

      {/* Button Text and Title 1 in one row */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Button Text
          </label>
          <input
            type="text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title 1
          </label>
          <input
            type="text"
            name="title1"
            value={formData.title1}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>
      </div>

      {/* Title 2 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title 2
        </label>
        <input
          type="text"
          name="title2"
          value={formData.title2}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
        />
      </div>

      {/* Paragraph 1 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Paragraph 1
        </label>
        <textarea
          name="paragraph1"
          value={formData.paragraph1}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
        />
      </div>

      {/* Title 2 (duplicate) */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Title 2
        </label>
        <input
          type="text"
          name="title2"
          value={formData.title2}
          onChange={handleInputChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
        />
      </div>

      {/* Paragraph 2 */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Paragraph 2
        </label>
        <textarea
          name="paragraph2"
          value={formData.paragraph2}
          onChange={handleInputChange}
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
        />
      </div>

      {/* Image 1 and Image 2 in one row */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Image 1 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image 1
          </label>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <label className="inline-block">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'image1')}
                />
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors">
                  Choose File
                </span>
              </label>
              <span className="text-sm text-gray-600">
                {formData.image1 ? formData.image1.name : "No file chosen"}
              </span>
            </div>
            <div className="relative w-full h-32 border border-gray-300 rounded-lg overflow-hidden bg-gray-50 shadow-sm">
              {formData.image1 ? (
                <Image
                  src={URL.createObjectURL(formData.image1)}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Image 2 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Image 2
          </label>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <label className="inline-block">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, 'image2')}
                />
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors">
                  Choose File
                </span>
              </label>
              <span className="text-sm text-gray-600">
                {formData.image2 ? formData.image2.name : "No file chosen"}
              </span>
            </div>
            <div className="relative w-full h-32 border border-gray-300 rounded-lg overflow-hidden bg-gray-50 shadow-sm">
              {formData.image2 ? (
                <Image
                  src={URL.createObjectURL(formData.image2)}
                  alt="Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

