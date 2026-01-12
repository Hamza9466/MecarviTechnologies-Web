"use client";

import { useState } from "react";
import Image from "next/image";

export default function ServicesEditor() {
  const [formData, setFormData] = useState({
    tagline: "What We can",
    mainTitle: "Our Services",
    buttonText: "View All Feature",
    description: "Customized prints on all items, good place to get things done, experienced staff and contact here for ur needs",
  });

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Custom branding tools",
      description: "Add your branding easily to any product with our intuitive tools.",
      imageUrl: "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
      image: null as File | null,
    },
    {
      id: 2,
      title: "Web Development",
      description: "We are here to help you to grow your business by boosting and developing your websites",
      imageUrl: "/assets/images/8jc9fH3B63sSTdln1747924955.png",
      image: null as File | null,
    },
    {
      id: 3,
      title: "Web Designing",
      description: "We will help you to grow your business by providing you eye catchy design for your websites",
      imageUrl: "/assets/images/Nf1nlX1qwFqlvskC1748264332.jpg",
      image: null as File | null,
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (serviceId: number, field: string, value: string) => {
    setServices((prev) =>
      prev.map((service) =>
        service.id === serviceId ? { ...service, [field]: value } : service
      )
    );
  };

  const handleServiceImageChange = (serviceId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setServices((prev) =>
        prev.map((service) =>
          service.id === serviceId ? { ...service, image: e.target.files![0] } : service
        )
      );
    }
  };

  return (
    <div className="space-y-8">
      {/* Main Form Section */}
      <div className="space-y-6 pb-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tagline" className="block text-sm font-medium text-gray-700 mb-2">
              Tagline
            </label>
            <input
              type="text"
              id="tagline"
              name="tagline"
              value={formData.tagline}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>

          <div>
            <label htmlFor="mainTitle" className="block text-sm font-medium text-gray-700 mb-2">
              Main Title
            </label>
            <input
              type="text"
              id="mainTitle"
              name="mainTitle"
              value={formData.mainTitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
        </div>

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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>

        <div>
          <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
          />
        </div>

        <div className="flex justify-end pt-2">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Service Cards Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Service Cards</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm font-bold text-pink-600">
                  SERVICE #{service.id}
                </h4>
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                  <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Icon/Image */}
              <div className="relative w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg overflow-hidden">
                {service.image ? (
                  <Image
                    src={URL.createObjectURL(service.image)}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                ) : service.imageUrl ? (
                  <Image
                    src={service.imageUrl}
                    alt={service.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-gray-100">
                    <svg className="w-10 h-10 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleServiceImageChange(service.id, e)}
                  className="absolute inset-0 opacity-0 cursor-pointer z-10"
                />
              </div>

              {/* Title */}
              <div className="mb-3">
                <label className="block text-xs font-medium text-gray-600 mb-1">Subtitle</label>
                <input
                  type="text"
                  value={service.title}
                  onChange={(e) => handleServiceChange(service.id, "title", e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white text-sm font-semibold"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-medium text-gray-600 mb-1">Description</label>
                <textarea
                  value={service.description}
                  onChange={(e) => handleServiceChange(service.id, "description", e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white text-sm scrollbar-hide overflow-y-auto"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                />
              </div>
            </div>
          ))}

          {/* Add New Service Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm flex items-center justify-center min-h-[300px] cursor-pointer hover:border-pink-500 transition-colors">
            <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

