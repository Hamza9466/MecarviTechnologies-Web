import Image from "next/image";

export default function CareerContent() {
  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto mb-12 md:mb-16">
        <p className="text-gray-900 text-center text-sm sm:text-xl md:text-xl">
          With we want to optimize the customization process so your team can save time when building websites.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {/* Left Section - Text Content */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl font-bold text-gray-900">
            Your career starts at Mecarvi Prints
          </h2>
          
          <div className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed space-y-0">
            <p className="mb-0">
              Strategies, products and systems are all very important, but success comes from bringing the right people together.
            </p>
            <p className="mb-0">
              At Mecarvi our culture of growth starts with our people. We look for employees who are smart, creative, empathetic, and fun.
            </p>
            <p className="mb-0">
              Once they're part of our team, we support them by giving them opportunities to grow.
            </p>
            <p className="mb-0">
              employment is a two-way street and that jobs only work when they are mutually beneficial.
            </p>
            <p className="mb-0">
              Our core values articulate what we care about most.
            </p>
            <p className="mb-0">
              They guide how we work with each other, with our clients, and our partners.
            </p>
            <p className="mb-0">
              As an employer, Mecarvi understands its responsibility of treating its team with respect, empathy, care and consideration.
            </p>
            <p className="mb-0">
              We offer a wide range of benefits to our employees including market competitive salaries, health care, retirement funds, paid leaves, bonuses, employee discounts and much more.
            </p>
            <p className="mb-0">
              If you want to work for a company that gives you the autonomy to explore and implement new ideas in a highly collaborative environment, you will succeed here. Join us!
            </p>
          </div>
        </div>

        {/* Right Section - Video and Images */}
        <div className="space-y-6">
          {/* Video Player */}
          <div className="relative w-full aspect-video bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Career Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          {/* Two Images Below Video */}
          <div className="grid grid-cols-2 gap-4">
            <div className="relative w-full aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/BW8QVSBRcBLItUoc1747748716.jpg"
                alt="Career Image 1"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative w-full aspect-[3/2] bg-gray-200 rounded-lg overflow-hidden">
              <Image
                src="/assets/images/65G1VK9uRjWOnnjJ1747748716.jpg"
                alt="Career Image 2"
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

