"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function BusinessSuccess() {
  const [activeTab, setActiveTab] = useState("award");

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-6 md:space-y-8">
          {/* Main Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-3xl font-bold text-pink-500 leading-tight">
            We Are Increasing Business Success With Technology
          </h2>

          {/* Sub-paragraph */}
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl">
            Synergistically incentivize effective imperatives through fully
            researched intellectual capital. Appropriately fashion client-based
          </p>

          {/* Navigation Tabs */}
          <div className="flex gap-0 relative">
            <button
              onClick={() => setActiveTab("award")}
              className={`relative px-20 py-3 rounded-l-lg font-semibold text-white transition-colors min-w-[180px] ${
                activeTab === "award"
                  ? "bg-pink-700"
                  : "bg-pink-500"
              }`}
            >
              Award Index
              {activeTab === "award" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-pink-700"></div>
                </div>
              )}
            </button>
            <button
              onClick={() => setActiveTab("technology")}
              className={`relative px-18 py-3 rounded-r-lg font-semibold text-white transition-colors min-w-[180px] ${
                activeTab === "technology"
                  ? "bg-pink-700"
                  : "bg-pink-500"
              }`}
            >
              Technology Index
              {activeTab === "technology" && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-transparent border-t-pink-700"></div>
                </div>
              )}
            </button>
          </div>

          {/* Content Section - Changes based on active tab */}
          {activeTab === "award" ? (
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Logo Card - White square */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-64 lg:h-64 rounded-xl bg-white shadow-xl flex items-center justify-center p-4 relative overflow-hidden">
                  <Image
                    src="/assets/images/yqMS5qrWhHsVPL5l1747744517.jpg"
                    alt="Award-Winning Company Logo"
                    fill
                    className="object-contain p-2"
                  />
                </div>
              </div>

              {/* Text Content - On dark background */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900">
                  An Award-Winning Company.
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  An Award-Winning Company. Monotonically matrix extensible
                  applications and go forward communities. Synergistically extend
                  client-based manufactured.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-pink-600 transition-colors"
                >
                  About More
                </Link>
              </div>
            </div>
          ) : (
            <div className="flex flex-col sm:flex-row gap-6 items-start">
              {/* Technology Logo - Hexagonal */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 lg:w-48 lg:h-48 relative flex items-center justify-center">
                  <Image
                    src="/assets/images/cnRu3VHkjbFgrLdL1747746044.png"
                    alt="Technology Innovations Logo"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Text Content - Technology Innovations */}
              <div className="flex-1 space-y-4">
                <h3 className="text-2xl md:text-3xl lg:text-3xl font-bold text-gray-900">
                  Technology Innovations
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Our technology index drives new possibilities for the future, enabling seamless integration and high-performance solutions.
                </p>
                <Link
                  href="/about"
                  className="inline-block bg-pink-500 text-white px-6 py-2 rounded-lg font-semibold text-sm hover:bg-pink-600 transition-colors"
                >
                  About More
                </Link>
              </div>
            </div>
          )}
        </div>

        {/* Right Content - Images */}
        <div className="relative">
          {/* Main Image Container */}
          <div className="relative overflow-visible">
            {/* Main Portrait Image */}
            <div className="aspect-[3/3] relative max-h-[560px] rounded-2xl overflow-hidden">
              <Image
                src="/assets/images/BW8QVSBRcBLItUoc1747748716.jpg"
                alt="Business professional"
                fill
                className="object-cover rounded-2xl"
                priority
              />

              {/* Experience Badge - Bottom Center, Overlapping the main image */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-pink-500 text-white px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 z-10 whitespace-nowrap">
                <svg
                  className="w-8 h-8 md:w-12 md:h-12 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 512 512"
                >
                  <path d="M156.6 384.9L125.7 354c-8.5-8.5-11.5-20.8-7.7-32.2c3-8.9 7-20.5 11.8-33.8L24 288c-8.6 0-16.6-4.6-20.9-12.1s-4.2-16.7 .2-24.1l52.5-88.5c13-21.9 36.5-35.3 61.9-35.3l82.3 0c2.4-4 4.8-7.7 7.2-11.3C289.1-4.1 411.1-8.1 483.9 5.3c11.6 2.1 20.6 11.2 22.8 22.8c13.4 72.9 9.3 194.8-111.4 276.7c-3.5 2.4-7.3 4.8-11.3 7.2l0 82.3c0 25.4-13.4 49-35.3 61.9l-88.5 52.5c-7.4 4.4-16.6 4.5-24.1 .2s-12.1-12.2-12.1-20.9l0-107.2c-14.1 4.9-26.4 8.9-35.7 11.9c-11.2 3.6-23.4 .5-31.8-7.8zM384 168a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"></path>
                </svg>
                <div>
                  <p className="font-bold text-xl md:text-2xl">35+</p>
                  <p className="text-sm md:text-base">Years of Experience</p>
                </div>
              </div>
            </div>

            {/* Inset Image Overlay - Upper Right, Overlapping the main image */}
            <div className="absolute top-12 sm:top-16 md:top-20 right-[-8%] sm:right-[-6%] md:right-[-4%] w-[42%] sm:w-[38%] md:w-[36%] aspect-[3/4] rounded-xl border-4 border-white shadow-2xl overflow-hidden z-10">
              <Image
                src="/assets/images/65G1VK9uRjWOnnjJ1747748716.jpg"
                alt="Office team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

