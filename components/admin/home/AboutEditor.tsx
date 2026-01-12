"use client";

import { useState } from "react";
import Image from "next/image";

export default function AboutEditor() {
  const [formData, setFormData] = useState({
    mainTitle: "We Are Increasing Business Success With Technolo",
    mainDescription: "Synergistically incentivize effective imperatives through fully researched intellectual capital. Appropriately fashion client-based",
    backgroundImage: null as File | null,
    backgroundImageUrl: null as string | null,
    tab1Title: "Award Winning",
    tab1Subtitle: "An Award-Winning Company",
    tab1Description: "An Award-Winning Company Monotonically matrix extensible applications and go forward communities. Synergistically extend client-based manufactured.",
    tab1Image: null as File | null,
    tab1ImageUrl: null as string | null,
    tab2Title: "Technology Index",
    tab2Subtitle: "Technology Innovations.",
    tab2Description: "Technology Innovations Our technology index drives new possibilities for the future, enabling seamless integration and high-performance solutions.",
    tab2Image: null as File | null,
    tab2ImageUrl: null as string | null,
    experienceYears: "35",
    experienceDescription: "",
    aboutImage1: null as File | null,
    aboutImage1Url: null as string | null,
    aboutImage2: null as File | null,
    aboutImage2Url: null as string | null,
  });

  const [deleting, setDeleting] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, imageType: string) => {
    if (e.target.files && e.target.files[0]) {
      const urlKey = `${imageType}Url` as keyof typeof formData;
      setFormData((prev) => ({ 
        ...prev, 
        [imageType]: e.target.files![0],
        [urlKey]: null 
      }));
    }
  };

  const handleDeleteImage = (imageType: string) => {
    if (!confirm(`Are you sure you want to delete this image?`)) {
      return;
    }

    const urlKey = `${imageType}Url` as keyof typeof formData;
    setFormData((prev) => ({
      ...prev,
      [imageType]: null,
      [urlKey]: null,
    }));
  };

  return (
    <div className="space-y-6">
      {/* Main Title & Main Description Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

        <div>
          <label htmlFor="mainDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Main Description
          </label>
          <input
            type="text"
            id="mainDescription"
            name="mainDescription"
            value={formData.mainDescription}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>
      </div>

      {/* Background Image Section */}
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
                onChange={(e) => handleFileChange(e, "backgroundImage")}
              />
              <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors text-sm">
                Choose File
              </span>
            </label>
            <span className="text-sm text-gray-600">
              {formData.backgroundImage 
                ? formData.backgroundImage.name 
                : formData.backgroundImageUrl 
                  ? "Existing image" 
                  : "No file chosen"}
            </span>
          </div>
          {(formData.backgroundImage || formData.backgroundImageUrl) && (
            <div className="relative w-32 h-32 border border-gray-300 rounded-lg overflow-hidden bg-gray-200 group">
              {formData.backgroundImage ? (
                <Image
                  src={URL.createObjectURL(formData.backgroundImage)}
                  alt="Background Preview"
                  fill
                  className="object-cover"
                />
              ) : (
                <img
                  src={`http://localhost:8000${formData.backgroundImageUrl}`}
                  alt="Background"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Failed to load background image:", formData.backgroundImageUrl);
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              <button
                onClick={() => handleDeleteImage("backgroundImage")}
                disabled={deleting === "backgroundImage"}
                className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                title="Delete image"
              >
                {deleting === "backgroundImage" ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Tab 1 Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tab 1 Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tab1Title" className="block text-sm font-medium text-gray-700 mb-2">
              Tab 1 Title
            </label>
            <input
              type="text"
              id="tab1Title"
              name="tab1Title"
              value={formData.tab1Title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>

          <div>
            <label htmlFor="tab1Subtitle" className="block text-sm font-medium text-gray-700 mb-2">
              Tab 1 Subtitle
            </label>
            <input
              type="text"
              id="tab1Subtitle"
              name="tab1Subtitle"
              value={formData.tab1Subtitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tab1Description" className="block text-sm font-medium text-gray-700 mb-2">
            Tab 1 Description
          </label>
          <input
            type="text"
            id="tab1Description"
            name="tab1Description"
            value={formData.tab1Description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tab 1 Image
          </label>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <label className="inline-block">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "tab1Image")}
                />
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors text-sm">
                  Choose File
                </span>
              </label>
              <span className="text-sm text-gray-600">
                {formData.tab1Image 
                  ? formData.tab1Image.name 
                  : formData.tab1ImageUrl 
                    ? "Existing image" 
                    : "No file chosen"}
              </span>
            </div>
            {(formData.tab1Image || formData.tab1ImageUrl) && (
              <div className="relative w-32 h-32 border border-gray-300 rounded-lg overflow-hidden bg-gray-200 group">
                {formData.tab1Image ? (
                  <Image
                    src={URL.createObjectURL(formData.tab1Image)}
                    alt="Tab 1 Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <img
                    src={`http://localhost:8000${formData.tab1ImageUrl}`}
                    alt="Tab 1"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("Failed to load tab1 image:", formData.tab1ImageUrl);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <button
                  onClick={() => handleDeleteImage("tab1Image")}
                  disabled={deleting === "tab1Image"}
                  className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Delete image"
                >
                  {deleting === "tab1Image" ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tab 2 Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Tab 2 Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="tab2Title" className="block text-sm font-medium text-gray-700 mb-2">
              Tab 2 Title
            </label>
            <input
              type="text"
              id="tab2Title"
              name="tab2Title"
              value={formData.tab2Title}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>

          <div>
            <label htmlFor="tab2Subtitle" className="block text-sm font-medium text-gray-700 mb-2">
              Tab 2 Subtitle
            </label>
            <input
              type="text"
              id="tab2Subtitle"
              name="tab2Subtitle"
              value={formData.tab2Subtitle}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
            />
          </div>
        </div>

        <div>
          <label htmlFor="tab2Description" className="block text-sm font-medium text-gray-700 mb-2">
            Tab 2 Description
          </label>
          <input
            type="text"
            id="tab2Description"
            name="tab2Description"
            value={formData.tab2Description}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tab 2 Image
          </label>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <label className="inline-block">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={(e) => handleFileChange(e, "tab2Image")}
                />
                <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors text-sm">
                  Choose File
                </span>
              </label>
              <span className="text-sm text-gray-600">
                {formData.tab2Image 
                  ? formData.tab2Image.name 
                  : formData.tab2ImageUrl 
                    ? "Existing image" 
                    : "No file chosen"}
              </span>
            </div>
            {(formData.tab2Image || formData.tab2ImageUrl) && (
              <div className="relative w-32 h-32 border border-gray-300 rounded-lg overflow-hidden bg-gray-200 group">
                {formData.tab2Image ? (
                  <Image
                    src={URL.createObjectURL(formData.tab2Image)}
                    alt="Tab 2 Preview"
                    fill
                    className="object-cover"
                  />
                ) : (
                  <img
                    src={`http://localhost:8000${formData.tab2ImageUrl}`}
                    alt="Tab 2"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      console.error("Failed to load tab2 image:", formData.tab2ImageUrl);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                )}
                <button
                  onClick={() => handleDeleteImage("tab2Image")}
                  disabled={deleting === "tab2Image"}
                  className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  title="Delete image"
                >
                  {deleting === "tab2Image" ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="experienceYears" className="block text-sm font-medium text-gray-700 mb-2">
            Experience Years
          </label>
          <input
            type="text"
            id="experienceYears"
            name="experienceYears"
            value={formData.experienceYears}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
          />
        </div>

        <div>
          <label htmlFor="experienceDescription" className="block text-sm font-medium text-gray-700 mb-2">
            Experience Description
          </label>
          <textarea
            id="experienceDescription"
            name="experienceDescription"
            value={formData.experienceDescription}
            onChange={handleInputChange}
            rows={4}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white"
          />
        </div>
      </div>

      {/* About Images Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">About Images Section</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Image 1
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <label className="inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "aboutImage1")}
                  />
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors text-sm">
                    Choose File
                  </span>
                </label>
                <span className="text-sm text-gray-600">
                  {formData.aboutImage1 
                    ? formData.aboutImage1.name 
                    : formData.aboutImage1Url 
                      ? "Existing image" 
                      : "No file chosen"}
                </span>
              </div>
              {(formData.aboutImage1 || formData.aboutImage1Url) && (
                <div className="relative w-full h-48 border border-gray-300 rounded-lg overflow-hidden bg-gray-200 group">
                  {formData.aboutImage1 ? (
                    <Image
                      src={URL.createObjectURL(formData.aboutImage1)}
                      alt="About Image 1 Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <img
                      src={`http://localhost:8000${formData.aboutImage1Url}`}
                      alt="About Image 1"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Failed to load aboutImage1:", formData.aboutImage1Url);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <button
                    onClick={() => handleDeleteImage("aboutImage1")}
                    disabled={deleting === "aboutImage1"}
                    className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Delete image"
                  >
                    {deleting === "aboutImage1" ? (
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              About Image 2
            </label>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <label className="inline-block">
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e, "aboutImage2")}
                  />
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg cursor-pointer inline-block font-medium transition-colors text-sm">
                    Choose File
                  </span>
                </label>
                <span className="text-sm text-gray-600">
                  {formData.aboutImage2 
                    ? formData.aboutImage2.name 
                    : formData.aboutImage2Url 
                      ? "Existing image" 
                      : "No file chosen"}
                </span>
              </div>
              {(formData.aboutImage2 || formData.aboutImage2Url) && (
                <div className="relative w-full h-48 border border-gray-300 rounded-lg overflow-hidden bg-gray-200 group">
                  {formData.aboutImage2 ? (
                    <Image
                      src={URL.createObjectURL(formData.aboutImage2)}
                      alt="About Image 2 Preview"
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <img
                      src={`http://localhost:8000${formData.aboutImage2Url}`}
                      alt="About Image 2"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        console.error("Failed to load aboutImage2:", formData.aboutImage2Url);
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  )}
                  <button
                    onClick={() => handleDeleteImage("aboutImage2")}
                    disabled={deleting === "aboutImage2"}
                    className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white p-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                    title="Delete image"
                  >
                    {deleting === "aboutImage2" ? (
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    )}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

