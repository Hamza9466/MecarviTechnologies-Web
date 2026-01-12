"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Portfolio() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Calculate items per view based on screen size
  useEffect(() => {
    const calculateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1280) setItemsPerView(6);
      else if (width >= 1024) setItemsPerView(4);
      else if (width >= 640) setItemsPerView(3);
      else if (width >= 384) setItemsPerView(2);
      else setItemsPerView(1);
    };

    calculateItemsPerView();
    window.addEventListener('resize', calculateItemsPerView);
    return () => window.removeEventListener('resize', calculateItemsPerView);
  }, []);

  const portfolioImages = [
    "/assets/images/49TX8jOWzRs1BMlR1748264596.jpg",
    "/assets/images/52TKTDhK5biR7l621748331097.jpg",
    "/assets/images/Nf1nlX1qwFqlvskC1748264332.jpg",
    "/assets/images/BW8QVSBRcBLItUoc1747748716.jpg",
    "/assets/images/65G1VK9uRjWOnnjJ1747748716.jpg",
  ];

  // Create duplicated array for seamless infinite loop
  const duplicatedImages = [...portfolioImages, ...portfolioImages, ...portfolioImages];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = prevIndex + 1;
        // Reset to start of second set when reaching end of second set
        if (nextIndex >= portfolioImages.length * 2) {
          setTimeout(() => {
            setIsTransitioning(false);
            setCurrentIndex(portfolioImages.length);
            setTimeout(() => {
              setIsTransitioning(true);
            }, 50);
          }, 1000);
          return nextIndex;
        }
        return nextIndex;
      });
    }, 3000); // Change slide every 3 seconds

    // Initialize to start of second set
    setCurrentIndex(portfolioImages.length);

    return () => clearInterval(interval);
  }, [portfolioImages.length]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      if (newIndex < portfolioImages.length) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(portfolioImages.length * 2 - 1);
          setTimeout(() => {
            setIsTransitioning(true);
          }, 50);
        }, 1000);
        return newIndex;
      }
      return newIndex;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + 1;
      if (nextIndex >= portfolioImages.length * 2) {
        setTimeout(() => {
          setIsTransitioning(false);
          setCurrentIndex(portfolioImages.length);
          setTimeout(() => {
            setIsTransitioning(true);
          }, 50);
        }, 1000);
        return nextIndex;
      }
      return nextIndex;
    });
  };

  return (
    <section className="bg-white relative">
      {/* Header Section */}
      <div className="relative bg-white px-1 sm:px-2 md:px-4 lg:px-6 py-3 md:py-4 lg:py-5">
        <div className="max-w-[95%] mx-auto relative z-10 px-2 sm:px-0">
          {/* PORTFOLIO Title */}
          <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 uppercase mb-2 sm:mb-3">
            PORTFOLIO
          </h2>

          {/* Description Text */}
          <p className="text-center text-gray-600 text-xs sm:text-sm md:text-base max-w-6xl mx-auto leading-relaxed px-2 sm:px-0">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deserunt sed eligendi velit laboriosam suscipit, quisquam eveniet illo soluta adipisci necessitatibus officia id blanditiis voluptates eos. Ab alias inventore molestiae.
          </p>
        </div>
      </div>

      {/* Photo Collage Section - Full Width Auto Slide */}
      <div className="relative w-full overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 sm:p-3 md:p-4 shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg
            className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <div
          className="flex"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            transition: isTransitioning ? "transform 1000ms ease-in-out" : "none",
          }}
        >
          {duplicatedImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] overflow-hidden px-1 sm:px-2 flex-shrink-0"
              style={{ width: `${100 / itemsPerView}%`, minWidth: `${100 / itemsPerView}%` }}
            >
              <Image
                src={image}
                alt={`Portfolio ${index + 1}`}
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
