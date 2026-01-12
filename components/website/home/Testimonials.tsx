"use client";

import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: "Michel Markar",
      designation: "CEO Archin Studio",
      rating: 5,
      text: "A studio with passionate, professional and full creativity. Much more than i'm expect. Great services, high quality products & affordable prices. I'm extremly satisfied!",
      logo: "/assets/images/8jc9fH3B63sSTdln1747924955.png",
    },
    {
      name: "Smith Gordon",
      designation: "CEO Archin Studio",
      rating: 5,
      text: "A studio with passionate, professional and full creativity. Much more than i'm expect. Great services, high quality products & affordable prices. I'm extremly satisfied!",
      logo: "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
    },
    {
      name: "John Doe",
      designation: "CEO",
      rating: 4,
      text: "Great experience working with this team. They delivered exactly what we needed on time and within budget.",
      logo: "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
    },
    {
      name: "Jane Smith",
      designation: "Creative Director",
      rating: 5,
      text: "Outstanding quality and service. Highly recommend their services to anyone looking for professional work.",
      logo: "/assets/images/8jc9fH3B63sSTdln1747924955.png",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const clientAvatars = [
    "/assets/images/8jc9fH3B63sSTdln1747924955.png",
    "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
    "/assets/images/kNN4g6hmCmM5HZvO1747642029.png",
    "/assets/images/8jc9fH3B63sSTdln1747924955.png",
  ];

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-wide" style={{ color: '#E60F77' }}>
            WHAT OUR CLIENT SAY
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[30%_70%] gap-8 md:gap-12 lg:gap-12">
          {/* Left Side - Stats Card */}
          <div className="rounded-2xl p-6 md:p-8 lg:p-10 shadow-xl h-full flex flex-col" style={{ backgroundColor: '#FDE7F3' }}>
            {/* Rating */}
            <div className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black mb-6 text-center">
              4.9
            </div>

            {/* Client Avatars and Review Count */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {/* Overlapping Avatars */}
              <div className="flex -space-x-3">
                {clientAvatars.map((avatar, index) => (
                  <div
                    key={index}
                    className="w-8 h-8 md:w-10 md:h-10 relative flex-shrink-0 border-2 border-white rounded-full overflow-hidden"
                  >
                    <Image
                      src={avatar}
                      alt={`Client ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>

              {/* Review Count */}
              <div>
                <p className="text-black font-semibold text-xs md:text-sm">
                  Our Client
                </p>
                <p className="text-black text-xs">
                  (5k+ Reviews)
                </p>
              </div>
            </div>

            {/* Heading */}
            <h3 className="text-base md:text-lg lg:text-xl font-bold text-black mb-6 text-center">
              Customer experiences that speak for themselves
            </h3>

            {/* Book Now Button */}
            <div className="mt-auto flex justify-center">
              <button 
                className="text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity text-sm md:text-base"
                style={{ background: 'linear-gradient(to right, #1B25FF, #B21FF3)' }}
              >
                Book Now
              </button>
            </div>
          </div>

          {/* Right Side - Testimonials */}
          <div className="h-full flex flex-col mr-6 md:mr-8">
            {/* Single Card with Two Testimonials and Center Line */}
            <div className="bg-gradient-to-b from-blue-100 to-purple-100 rounded-2xl px-6 md:px-8 pt-6 md:pt-8 pb-12 shadow-lg w-full relative flex flex-col h-full">
              <div className="flex gap-8 md:gap-12 relative flex-1">
                {/* Left Testimonial */}
                <div className="flex-1">
                  {/* Testimonial Text */}
                  <p className="text-black text-sm md:text-base mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </p>

                  {/* User Profile */}
                  <div className="mb-4 mt-15">
                    {/* Top Row: Profile Image and Name/Title */}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      {/* Circular Profile Image */}
                      <div className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0 rounded-full overflow-hidden">
                        <Image
                          src={testimonials[currentIndex].logo}
                          alt={testimonials[currentIndex].name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Name and Designation */}
                      <div className="pt-1 ml-2 md:ml-3 mt-2">
                        <h4 className="text-blue-800 font-bold text-lg md:text-xl mb-0.5">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonials[currentIndex].designation}
                        </p>
                      </div>
                    </div>

                    {/* Bottom Row: Rating and Stars */}
                    <div className="flex items-center gap-2">
                      <span className="text-black font-bold text-xl md:text-2xl">
                        {testimonials[currentIndex].rating}.0
                      </span>
                      <div className="flex gap-0.5">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <svg
                            key={star}
                            className={`w-5 h-5 md:w-6 md:h-6 ${
                              star <= testimonials[currentIndex].rating
                                ? "text-purple-600 fill-current"
                                : "text-gray-300 fill-current"
                            }`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Vertical Line with Top and Bottom Dots */}
                <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 flex flex-col items-center justify-between py-4">
                  {/* Top Dot */}
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                  {/* Vertical Line */}
                  <div className="w-0.5 h-full bg-gray-300"></div>
                  {/* Bottom Dot */}
                  <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                </div>

                {/* Right Testimonial */}
                <div className="flex-1">
                  {/* Testimonial Text */}
                  <p className="text-black text-sm md:text-base mb-6 leading-relaxed">
                    "{testimonials[(currentIndex + 1) % testimonials.length].text}"
                  </p>

                  {/* User Profile */}
                  <div className="mb-4 mt-15">
                    <div className="flex items-start gap-4">
                      {/* Name and Designation */}
                      <div className="flex-1 pt-1 mt-2">
                        <h4 className="text-blue-800 font-bold text-lg md:text-xl mb-0.5">
                          {testimonials[(currentIndex + 1) % testimonials.length].name}
                        </h4>
                        <p className="text-gray-600 text-sm">
                          {testimonials[(currentIndex + 1) % testimonials.length].designation}
                        </p>
                      </div>

                      {/* Profile Image and Rating Container */}
                      <div className="flex flex-col">
                        {/* Circular Profile Image */}
                        <div className="w-20 h-20 md:w-24 md:h-24 relative flex-shrink-0 rounded-full overflow-hidden mb-2 ml-auto">
                          <Image
                            src={testimonials[(currentIndex + 1) % testimonials.length].logo}
                            alt={testimonials[(currentIndex + 1) % testimonials.length].name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Rating and Stars */}
                        <div className="flex items-center gap-2">
                          <span className="text-black font-bold text-xl md:text-2xl">
                            {testimonials[(currentIndex + 1) % testimonials.length].rating}.0
                          </span>
                          <div className="flex gap-0.5 mr-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                              <svg
                                key={star}
                                className={`w-5 h-5 md:w-6 md:h-6 ${
                                  star <= testimonials[(currentIndex + 1) % testimonials.length].rating
                                    ? "text-purple-600 fill-current"
                                    : "text-gray-300 fill-current"
                                }`}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <div className="flex gap-1 items-center justify-center mt-auto -mb-7 mt-2">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm mt-6 md:mt-9"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18 12H6M6 12L11 17M6 12L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 md:w-14 md:h-14 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shadow-sm mt-6 md:mt-8"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-6 h-6 md:w-7 md:h-7"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                </svg>
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
