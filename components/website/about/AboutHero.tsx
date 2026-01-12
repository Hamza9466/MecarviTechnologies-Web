import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 pt-24 pb-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center w-full mt-8 sm:mt-10 md:mt-12">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
            About <span className="text-pink-500">Mecarvi Technologies</span>
          </h1>
          <p className="text-gray-700 text-lg sm:text-xl md:text-2xl leading-relaxed">
            Leading the industry with innovation, quality, and exceptional service since 1989.
          </p>
          <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
            We create exceptional signage solutions that help businesses stand out. With over 35 years of experience, we combine cutting-edge technology with traditional craftsmanship to deliver results that exceed expectations.
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="relative flex items-center justify-center">
          <div className="relative w-full max-w-xl">
            <Image
              src="/assets/images/qioBaPBkCKqAHtwu1747656560.png"
              alt="About Mecarvi Technologies"
              width={800}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

