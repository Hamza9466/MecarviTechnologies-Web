"use client";

import { useState } from "react";
import Image from "next/image";

export default function ReviewsEditor() {
  const [formData, setFormData] = useState({
    mainHeading: "What our cleint say",
    title: "our clients.",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deserunt sed eligendi velit laboriosam suscipit, quisquam eveniet illo soluta adipisci necessitatibus officia id blanditiis voluptates eos. Ab",
    heading: "Customer experience that speak for themself",
    averageRating: "3.0",
    reviewCount: "3",
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: "check userrrr",
      designation: "check designation",
      rating: 4,
      description: "",
      imageUrl: null as string | null,
      image: null as File | null,
    },
    {
      id: 2,
      name: "Micheal",
      designation: "Designation",
      rating: 4,
      description: "A studio with passionate, professional and full creativity. Much more than I'm expect. Great services, high quality products & affordable prices. I'm extremely satisfied.",
      imageUrl: null as string | null,
      image: null as File | null,
    },
    {
      id: 3,
      name: "check user",
      designation: "check designation",
      rating: 4,
      description: "",
      imageUrl: null as string | null,
      image: null as File | null,
    },
  ]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReviewChange = (reviewId: number, field: string, value: string | number) => {
    setReviews((prev) =>
      prev.map((review) =>
        review.id === reviewId ? { ...review, [field]: value } : review
      )
    );
  };

  const handleReviewImageChange = (reviewId: number, e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setReviews((prev) =>
        prev.map((review) =>
          review.id === reviewId ? { ...review, image: e.target.files![0] } : review
        )
      );
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`w-4 h-4 ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="space-y-8">
      {/* Portfolio Section Title */}
      <h3 className="text-xl font-bold text-gray-900 mb-6">Portfolio Section</h3>
      
      {/* Main Form Section */}
      <div className="space-y-6 pb-6 border-b border-gray-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="space-y-4">
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
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            <div>
              <label htmlFor="heading" className="block text-sm font-medium text-gray-700 mb-2">
                Heading
              </label>
              <input
                type="text"
                id="heading"
                name="heading"
                value={formData.heading}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
              />
            </div>

            <div>
              <label htmlFor="averageRating" className="block text-sm font-medium text-gray-700 mb-2">
                Average Rating
              </label>
              <input
                type="text"
                id="averageRating"
                name="averageRating"
                value={formData.averageRating}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
              />
            </div>

            <div>
              <label htmlFor="reviewCount" className="block text-sm font-medium text-gray-700 mb-2">
                Review Count
              </label>
              <input
                type="text"
                id="reviewCount"
                name="reviewCount"
                value={formData.reviewCount}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end pt-2">
          <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
            Save Changes
          </button>
        </div>
      </div>

      {/* Review Cards Section */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-6">Review Cards</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {reviews.map((review) => (
            <div key={review.id} className="border border-gray-200 rounded-lg p-4 bg-white shadow-sm">
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-sm font-bold text-pink-600">
                  SERVICE #{review.id}
                </h4>
                <div className="flex gap-2">
                  <button className="w-6 h-6 bg-blue-500 flex items-center justify-center text-white hover:bg-blue-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </button>
                  <button className="w-6 h-6 bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors rounded">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="flex items-start gap-4 mb-4">
                {/* Profile Picture */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 bg-gray-100 flex-shrink-0">
                  {review.image ? (
                    <Image
                      src={URL.createObjectURL(review.image)}
                      alt={review.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-pink-400 to-blue-400 text-white font-bold text-lg">
                      {getInitials(review.name)}
                    </div>
                  )}
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleReviewImageChange(review.id, e)}
                    className="absolute inset-0 opacity-0 cursor-pointer"
                  />
                </div>

                {/* Name and Designation */}
                <div className="flex-1">
                  <input
                    type="text"
                    value={review.name}
                    onChange={(e) => handleReviewChange(review.id, "name", e.target.value)}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white text-sm font-medium mb-1"
                  />
                  <input
                    type="text"
                    value={review.designation}
                    onChange={(e) => handleReviewChange(review.id, "designation", e.target.value)}
                    className="w-full px-3 py-1 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-gray-900 bg-white text-sm mb-2"
                  />
                  {renderStars(review.rating)}
                </div>
              </div>

              {review.description && (
                <div className="mb-3">
                  <textarea
                    value={review.description}
                    onChange={(e) => handleReviewChange(review.id, "description", e.target.value)}
                    rows={3}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent resize-none text-gray-900 bg-white text-sm"
                    placeholder="Review description (optional)"
                  />
                </div>
              )}

              <div className="flex items-center gap-2">
                <label className="text-xs text-gray-600">Rating:</label>
                <select
                  value={review.rating}
                  onChange={(e) => handleReviewChange(review.id, "rating", parseInt(e.target.value))}
                  className="px-2 py-1 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-pink-500 text-sm"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          ))}

          {/* Add New Review Card */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg bg-white shadow-sm flex items-center justify-center min-h-[200px] cursor-pointer hover:border-pink-500 transition-colors">
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

