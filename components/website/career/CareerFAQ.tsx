"use client";

import { useState } from "react";

export default function CareerFAQ() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      question: "What is flowbite",
      answer: "Flowbite is a collection of utility-first CSS components built with Tailwind CSS that you can use to build faster custom layouts and components.",
    },
    {
      id: 2,
      question: "How can I get started with Flowbite?",
      answer: "Getting started with Flowbite is easy. You can install it via npm or yarn, or simply include the CSS file in your project. Check out our documentation for detailed instructions.",
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, deserunt sed eligendi velit laboriosam suscipit, quisquam eveniet illo soluta adipisci necessitatibus officia id blanditiis voluptates eos. Ab alias inventore molestiae.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 mb-12 md:mb-16">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="border border-pink-400 bg-gray-50 rounded-lg p-4 md:p-6 cursor-pointer hover:bg-gray-100 transition-colors"
              onClick={() => setOpenFAQ(openFAQ === faq.id ? null : faq.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-gray-900 text-lg md:text-xl font-medium pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full border-2 border-pink-400 flex items-center justify-center">
                    <svg
                      className={`w-5 h-5 text-pink-400 transition-transform duration-300 ${
                        openFAQ === faq.id ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              {openFAQ === faq.id && (
                <div className="mt-4 text-gray-700 text-sm md:text-base leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gray-50 rounded-lg p-8 md:p-12">
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Apply Today!
          </h3>
          <p className="text-gray-900 text-lg sm:text-xl md:text-2xl mb-6">
            Ready to work at Mecarvi prints?
          </p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors text-base md:text-lg">
            Apply now
          </button>
        </div>
      </div>
    </section>
  );
}

