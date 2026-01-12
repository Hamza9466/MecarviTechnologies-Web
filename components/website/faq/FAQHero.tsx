export default function FAQHero() {
  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12 relative overflow-hidden">
      {/* Background with curve */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-pink-100 to-purple-100 opacity-40"></div>
      <div className="absolute top-0 right-0 w-full h-full">
        <svg viewBox="0 0 1440 400" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <linearGradient id="curveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fb923c" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#ec4899" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <path
            d="M1440,0 Q1200,100 1000,150 Q800,200 600,180 Q400,160 200,120 Q0,80 0,0 L1440,0 Z"
            fill="url(#curveGradient)"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 pt-8 md:pt-12">
        {/* Main Title */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 text-center">
          Frequently Asked Question
        </h1>
      </div>
    </section>
  );
}

