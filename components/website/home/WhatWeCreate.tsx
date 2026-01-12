"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef } from "react";

export default function WhatWeCreate() {
  const [activeTab, setActiveTab] = useState("visualization");
  const tabsScrollRef = useRef<HTMLDivElement>(null);

  const categories = [
    { id: "visualization", label: "Data Visualization", image: "fuel_01.webp" },
    { id: "insights", label: "Data Insights", image: "fuel_02.webp" },
    { id: "decisions", label: "Data-driven decisions", image: "fuel_03.webp" },
    { id: "alerts", label: "Alerts and predictions", image: "fuel_01.webp" },
    { id: "analytics", label: "Advanced Analytics", image: "fuel_02.webp" },
    { id: "reporting", label: "Custom Reporting", image: "fuel_03.webp" },
    { id: "integration", label: "System Integration", image: "fuel_01.webp" },
    { id: "dashboard", label: "Real-time Dashboard", image: "fuel_02.webp" },
  ];

  const content = {
    visualization: {
      tag: "Data Visualization",
      title: "Insights drive action with confidence",
      description: "When application users ask for data, they don't want static metrics and charts. They want data in a form that enables interactive exploration. For example, plant managers need to uncover contributing factors to their operating KPIs: the right visualization.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_01.webp"
    },
    insights: {
      tag: "Data Insights",
      title: "Unlock valuable insights from your data",
      description: "Transform raw data into actionable insights that drive business decisions. Our advanced analytics platform helps you discover patterns, trends, and opportunities hidden in your data.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_02.webp"
    },
    decisions: {
      tag: "Data-driven decisions",
      title: "Make informed decisions with confidence",
      description: "Empower your team with real-time data and analytics to make smarter, faster decisions. Our comprehensive reporting tools provide the insights you need when you need them.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_03.webp"
    },
    alerts: {
      tag: "Alerts and predictions",
      title: "Stay ahead with intelligent alerts",
      description: "Get instant notifications and predictive insights to proactively manage your business. Our intelligent alerting system ensures you never miss critical changes or opportunities.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_01.webp"
    },
    analytics: {
      tag: "Advanced Analytics",
      title: "Deep dive into advanced analytics",
      description: "Leverage cutting-edge analytics tools to explore complex data relationships and gain deeper understanding of your business metrics and performance indicators.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_02.webp"
    },
    reporting: {
      tag: "Custom Reporting",
      title: "Create custom reports tailored to your needs",
      description: "Build comprehensive, customized reports that tell your data story exactly how you need it. Our flexible reporting system adapts to your unique business requirements.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_03.webp"
    },
    integration: {
      tag: "System Integration",
      title: "Seamlessly integrate with your systems",
      description: "Connect all your tools and platforms for a unified view of your data. Our integration capabilities ensure smooth data flow across all your business applications.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_01.webp"
    },
    dashboard: {
      tag: "Real-time Dashboard",
      title: "Monitor everything in real-time",
      description: "Get instant visibility into your business metrics with live, updating dashboards. Track KPIs, monitor performance, and react to changes as they happen.",
      features: [
        "Automated renewal tracking and reminders",
        "Powerful filters and search to access information quickly",
        "Folder structure to stay organized"
      ],
      image: "fuel_02.webp"
    },
  };

  const currentContent = content[activeTab as keyof typeof content];
  const currentCategory = categories.find(cat => cat.id === activeTab);

  return (
    <section 
      className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden min-h-screen bg-white"
    >
      {/* Wave Shape with Gradient */}
      <svg 
        className="absolute top-0 left-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
        style={{ zIndex: 0 }}
      >
        <defs>
          <linearGradient id="waveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#663AFF" />
            <stop offset="100%" stopColor="#30B4FE" />
          </linearGradient>
        </defs>
        <path
          d="M0,0 Q720,50 1440,0 L1440,900 L0,900 Z"
          fill="url(#waveGradient)"
        />
      </svg>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white text-center mb-12 md:mb-16">
          What We Create
        </h1>

        {/* Main Content - Single White Container */}
        <div className="bg-white rounded-2xl pt-0 pb-8 md:pb-10 px-8 md:px-10 shadow-2xl relative">
          {/* Navigation Tabs - At Top of White Container */}
          <div className="flex items-center justify-center gap-3 mb-8 md:mb-12">
            {/* Left Arrow */}
            <button
              onClick={() => {
                if (tabsScrollRef.current) {
                  tabsScrollRef.current.scrollBy({
                    left: -300,
                    behavior: "smooth",
                  });
                }
              }}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
              style={{ background: 'linear-gradient(to right, #663AFF, #30B4FE)' }}
              aria-label="Previous"
            >
              <svg
                className="w-5 h-5 text-white"
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

            {/* Tabs Container */}
            <div 
              ref={tabsScrollRef}
              className="rounded-b-2xl px-4 py-3 flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth flex-1 max-w-3xl"
              style={{ background: 'linear-gradient(to right, #663AFF, #30B4FE)' }}
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`flex-shrink-0 px-6 py-2 rounded-lg font-semibold text-sm md:text-base transition-colors whitespace-nowrap ${
                    activeTab === category.id
                      ? "bg-yellow-400 text-black"
                      : "text-white hover:opacity-80"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => {
                if (tabsScrollRef.current) {
                  tabsScrollRef.current.scrollBy({
                    left: 300,
                    behavior: "smooth",
                  });
                }
              }}
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:opacity-80"
              style={{ background: 'linear-gradient(to right, #663AFF, #30B4FE)' }}
              aria-label="Next"
            >
              <svg
                className="w-5 h-5 text-white"
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
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Left Column - Dashboard Image */}
            <div className="order-2 lg:order-1 -ml-8 md:-ml-10 -mb-8 md:-mb-10">
              <div className="relative w-full aspect-[4/5]">
                <Image
                  key={activeTab}
                  src={`/assets/images/${currentContent.image}`}
                  alt={currentContent.tag}
                  fill
                  className="object-contain rounded-lg"
                  priority
                />
              </div>
            </div>

            {/* Right Column - Content */}
            <div key={activeTab} className="order-1 lg:order-2 space-y-6">
            {/* Yellow Tag */}
            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {currentContent.tag}
            </span>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {currentContent.title}
            </h2>

            {/* Description */}
            <p className="text-gray-700 text-base md:text-lg leading-relaxed mb-8">
              {currentContent.description}
            </p>

            {/* Features List with Blue Checkmarks */}
            <ul className="space-y-4 mb-8">
              {currentContent.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 text-gray-700">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5" style={{ backgroundColor: '#1248D4' }}>
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-base md:text-lg">{feature}</span>
                </li>
              ))}
            </ul>

            {/* CTA Button - Blue */}
            <Link
              href="/services"
              className="inline-block text-white px-8 py-4 rounded-lg font-semibold text-base transition-colors"
              style={{ backgroundColor: '#1248D4' }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#0E3AA0'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#1248D4'}
            >
              Learn More
            </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Convex Wave Divider */}
      <svg 
        className="absolute bottom-0 left-0 w-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 100"
        style={{ zIndex: 0 }}
      >
        <path
          d="M0,100 Q720,50 1440,100 L1440,100 L0,100 Z"
          fill="white"
        />
      </svg>
    </section>
  );
}

