import Image from "next/image";
import Link from "next/link";

export default function Services() {
  const services = [
    {
      title: "Sign Design & Engineering",
      description: "Explain your requirements by selecting your preferred service and get quotation for your order. We'll be there if you need any consultation.",
      image: "/assets/images/1641335787step01.png",
    },
    {
      title: "Reliable quality",
      description: "Make a lasting impression by using our industry leading tech, quality inks, and premium materials. 99.9% of our orders reach happy customers with no issues.",
      image: "/assets/images/1641335875step02.png",
    },
    {
      title: "Smooth automation",
      description: "When customers buy from you, we receive and fulfill their orders automatically, so you can focus on running your business.",
      image: "/assets/images/1641335827step03.png",
    },
    {
      title: "Custom branding tools",
      description: "Build your reputation by keeping your brand at the forefront. We're a white-label partner, so your customers won't see our name attached to your products.",
      image: "/assets/images/1641335909step04.png",
    },
    {
      title: "Intuitive design tools",
      description: "Create unique pieces with our built-in Design Maker, even with no design experience. Simple or intricate, patterned or minimalist, our features are versatile.",
      image: "/assets/images/1641335787step01.png",
    },
    {
      title: "No order minimums",
      description: "Save money and avoid any leftover stock. The products you sell are created only when your customer places an order.",
      image: "/assets/images/1641335875step02.png",
    },
    {
      title: "Fast turnaround",
      description: "We understand time is money. Our efficient production process ensures fast turnaround times without compromising quality, helping you meet your deadlines.",
      image: "/assets/images/1641335827step03.png",
    },
    {
      title: "Expert support",
      description: "Our experienced team combines creativity with technical expertise to deliver signage solutions that perfectly match your vision and business needs.",
      image: "/assets/images/1641335909step04.png",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-1 sm:px-2 md:px-4 lg:px-6 relative overflow-hidden">
      {/* Background color section - 400px height at top */}
      <div 
        className="absolute top-0 left-0 w-full pointer-events-none"
        style={{ 
          height: '500px', 
          backgroundColor: '#CEEEFA',
          zIndex: 0
        }}
      >
        {/* Bottom curved overlay */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-full pointer-events-none"
          preserveAspectRatio="none"
          viewBox="0 0 1200 500"
        >
          <path
            d="M 0 500 Q 300 450 600 470 Q 900 490 1200 750 L 1200 500 L 0 500 Z"
            fill="white"
            fillOpacity="1"
          />
        </svg>
      </div>
      
      <div className="max-w-[95%] mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-3xl mx-auto">
            Discover what we offer to help grow your business
          </p>
        </div>

        {/* Services Grid - 4 cards per row, 2 rows */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-blue-100 flex flex-col items-center text-center group"
            >
              <div className="group-hover:scale-90 transition-transform duration-300 flex flex-col items-center w-full">
                {/* Circular Icon Image */}
                <div className="flex justify-center mb-4">
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-pink-500 flex items-center justify-center bg-white">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={80}
                      height={80}
                      className="object-contain p-2"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* View Services Button */}
        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-block bg-pink-500 text-white px-8 md:px-12 py-4 md:py-5 rounded-lg font-semibold text-base md:text-lg hover:bg-pink-600 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}

