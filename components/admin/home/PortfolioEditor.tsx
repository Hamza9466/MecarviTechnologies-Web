"use client";

import { useState } from "react";
import Image from "next/image";

export default function PortfolioEditor() {
  const [formData, setFormData] = useState({
    mainHeading: "PORTFOLIO",
    title: "",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deserunt sed eligendi velit laboriosam suscipit, quisquam eveniet illo soluta adipisci necessitatibus officia id blanditiis voluptates eos. Ab alias inventore molestiae.",
  });

  const [services, setServices] = useState([
    {
      id: 1,
      title: "Rum Distillery",
      imageUrl: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400&h=300&fit=crop",
      image: null as File | null,
    },
    {
      id: 2,
      title: "Title",
      imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=300&fit=crop",
      image: null as File | null,
    },
    {
      id: 3,
      title: "Testing",
      imageUrl: "/assets/images/Nf1nlX1qwFqlvskC1748264332.jpg",
      image: null as File | null,
    },
    {
      id: 4,
      title: "Testingoooooo",
      imageUrl: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=400&h=300&fit=crop",
      image: null as File | null,
    },
    {
      id: 5,
      title: "Testingooooooooooooo :)",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
      image: null as File | null,
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
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
      {/* Portfolio Section Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">Portfolio Section</h3>
      
      {/* Main Form Section */}
      <div className="space-y-6 pb-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="mainHeading" className="block text-sm font-medium text-gray-700 mb-2">
              Main Heading
            </label>
            <input
              type="text"
              id="mainHeading"
              name="mainHeading"
              value={formData.mainHeading}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>

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
              placeholder="Enter title"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
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

        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Service Cards Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Service Cards</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service) => (
            <div key={service.id} className="border border-gray-200 rounded-lg overflow-hidden bg-white shadow-sm">
              <div className="relative w-full h-48 bg-gray-100 overflow-hidden">
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
                    <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-sm font-bold text-gray-900">
                    SERVICE #{service.id}
                  </h4>
                  <div className="flex gap-2">
                    <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors rounded">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </button>
                    <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors rounded">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                  <input
                    type="text"
                    value={service.title}
                    onChange={(e) => {
                      setServices((prev) =>
                        prev.map((s) => (s.id === service.id ? { ...s, title: e.target.value } : s))
                      );
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white text-sm"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleServiceImageChange(service.id, e)}
                    className="w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-blue-600 file:text-white hover:file:bg-blue-700"
                  />
                </div>
              </div>
            </div>
          ))}

          {/* Add New Service Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm flex items-center justify-center min-h-[400px] cursor-pointer hover:border-pink-500 transition-colors">
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

