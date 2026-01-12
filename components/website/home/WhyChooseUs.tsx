"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";

export default function WhyChooseUs() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive and transparent pricing without compromising on quality. Get professional signage solutions that fit your budget and exceed your expectations.",
    },
    {
      title: "Quality Assurance",
      description:
        "Every sign we create undergoes rigorous quality testing to ensure durability, visibility, and long-lasting performance. We stand behind our work with comprehensive warranties.",
    },
    {
      title: "Quick Turnarounds",
      description:
        "We understand time is money. Our efficient production process ensures fast turnaround times without compromising quality, helping you meet your deadlines.",
    },
    {
      title: "Expert Team",
      description:
        "Our experienced team combines creativity with technical expertise to deliver signage solutions that perfectly match your vision and business needs.",
    },
  ];

  // Duplicate features for seamless scrolling
  const duplicatedFeatures = [...features, ...features];

  // Auto-scroll feature boxes
  useEffect(() => {
    const cardHeight = 180; // Approximate height of each card (including gap)
    const maxScroll = features.length * cardHeight;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const newPosition = prev + 0.5; // Smooth scroll increment
        // Reset to 0 when we reach the end of first set for seamless loop
        if (newPosition >= maxScroll) {
          return 0;
        }
        return newPosition;
      });
    }, 16); // ~60fps smooth scrolling

    return () => clearInterval(interval);
  }, [features.length]);

  // Images
  const images = [
    "/assets/images/1704643966414629399_362025089872131_6843393301147201332_n.jpg",
    "/assets/images/1710846915Mecarvi-prints-login-n.png",
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-1 sm:px-2 md:px-4 lg:px-6">
      <div className="max-w-[95%] mx-auto">
        {/* Title - Centered */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 text-center mb-12 md:mb-16">
          Why Choose Us
        </h2>

        {/* Main Content Container */}
        <div className="overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center rounded-lg p-6 md:p-8" style={{ backgroundColor: '#28190F' }}>
            {/* Left Area - Composite Image Layout */}
            <div className="order-2 lg:order-1">
              <div className="relative w-full aspect-[3/2] max-w-4xl mx-auto rounded-lg overflow-hidden" style={{ backgroundColor: '#28190F', minHeight: '500px' }}>
                {/* Top-Left: Installation Photo */}
                <div className="absolute top-0 left-0 w-[65%] h-[60%] rounded-lg overflow-hidden">
                  <Image
                    src={images[0]}
                    alt="Sign Installation"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                
                {/* Bottom-Right: Logo */}
                <div className="absolute bottom-0 right-0 w-[45%] h-[50%] rounded-lg overflow-hidden">
                  <Image
                    src={images[1]}
                    alt="Mecarvi Signs Logo"
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
              </div>
            </div>

            {/* Right Area - Auto-scrolling Feature Cards with Red Borders */}
            <div className="order-1 lg:order-2 relative h-[600px] overflow-hidden">
              <div
                ref={scrollContainerRef}
                className="space-y-6"
                style={{
                  transform: `translateY(-${scrollPosition}px)`,
                  transition: "none", // Remove transition for smooth continuous scroll
                }}
              >
                {duplicatedFeatures.map((feature, index) => (
                  <div
                    key={`${index}-${feature.title}`}
                    className="bg-white rounded-xl p-6 shadow-lg border-2 border-red-500 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex gap-4">
                      {/* Red Star Icon */}
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          className="w-6 h-6 text-red-500"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold text-red-500 mb-2 pb-2 border-b border-red-300">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
