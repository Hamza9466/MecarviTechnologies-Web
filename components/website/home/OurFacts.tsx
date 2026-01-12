export default function OurFacts() {
  const facts = [
    {
      percentage: "99%",
      label: "Satisfaction Rate",
      position: "bottom",
    },
    {
      percentage: "14%",
      label: "Years in business",
      position: "top",
    },
    {
      percentage: "15%",
      label: "Location",
      position: "bottom",
    },
  ];

  const processSteps = [
    {
      number: 1,
      title: "Information Collection",
      description:
        "We gather comprehensive details about your business needs, objectives, and requirements to create tailored solutions.",
    },
    {
      number: 2,
      title: "Projection Report Analysis",
      description:
        "Our team analyzes data and creates detailed projections to ensure optimal outcomes for your signage projects.",
    },
    {
      number: 3,
      title: "Consultation Solution",
      description:
        "We provide expert consultation and customized solutions that align with your vision and business goals.",
    },
  ];

  return (
    <section className="bg-white py-8 sm:py-10 md:py-12">
      {/* Top Row - Full Width */}
      <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 w-full">
        {/* Top Left - Pink Background with Years */}
        <div className="p-8 md:p-12 lg:p-16 flex items-center justify-center min-h-[300px] md:min-h-[400px]" style={{ backgroundColor: '#E60F77' }}>
          <div className="text-white text-center lg:text-left">
            <div className="text-9xl sm:text-9xl md:text-[10rem] lg:text-[14rem] font-bold pl-12 md:pl-12 lg:pl-30 lg:pt-35">
              15+
            </div>
          </div>
        </div>

        {/* Top Right - Background with Circular Indicators */}
        <div className="p-8 md:p-12 lg:p-16 min-h-[300px] md:min-h-[400px]" style={{ backgroundColor: '#F3F4F6' }}>
          <div className="max-w-4xl mx-auto lg:mx-0">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 mb-8 md:mb-12">
              Our Facts
            </h2>
            <div className="flex flex-nowrap gap-4 md:gap-6 lg:gap-8 justify-center lg:justify-start">
              {facts.map((fact, index) => {
                const percentage = parseInt(fact.percentage.replace('%', ''));
                const circumference = 2 * Math.PI * 54; // radius = 54
                const offset = circumference - (percentage / 100) * circumference;
                // Calculate dot position at the end of the progress arc
                const angle = (percentage / 100) * 360 - 90; // -90 to start from top
                const dotX = 60 + 54 * Math.cos((angle * Math.PI) / 180);
                const dotY = 60 + 54 * Math.sin((angle * Math.PI) / 180);
                
                return (
                  <div key={index} className="relative flex-shrink-0 flex flex-col items-center">
                    <div className="w-36 h-36 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 relative">
                      {/* Circle Background */}
                      <svg
                        className="w-full h-full transform -rotate-90"
                        viewBox="0 0 120 120"
                      >
                        {/* Inner Circle - Light Gray */}
                        <circle
                          cx="60"
                          cy="60"
                          r="48"
                          fill="#e5e7eb"
                        />
                        {/* Background Circle - Outer Ring */}
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          fill="none"
                          stroke="#E2E8F2"
                          strokeWidth="2"
                        />
                        {/* Blue Dot */}
                        <circle
                          cx={dotX}
                          cy={dotY}
                          r="5"
                          fill="#2563EB"
                        />
                      </svg>
                      {/* Percentage Text - Centered */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
                          {fact.percentage}
                        </div>
                      </div>
                    </div>
                    {/* Label - Below Circle */}
                    <div className="text-center mt-3">
                      <p className="text-sm md:text-base text-gray-600 font-medium">
                        {fact.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Background with Overlay Card */}
      <div className="relative w-full">
        {/* Full Width Background */}
        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-0 min-h-[500px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[500px] w-full">
        <div style={{ backgroundColor: '#E60F77' }}></div>
        <div style={{ backgroundColor: '#F3F4F6' }}></div>
        </div>

        {/* Single White Card Overlay - Constrained */}
        <div className="absolute inset-0 flex items-center justify-center px-1 sm:px-2 md:px-4 lg:px-6">
          <div className="max-w-[95%] w-full h-full relative">
            <div className="absolute inset-2 md:inset-4 lg:inset-6 bg-white rounded-2xl p-4 sm:p-8 md:p-12 lg:p-16 shadow-2xl overflow-y-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 h-full">
                {/* Left Side - Our Promise */}
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4 md:mb-6">
                    Our Promise
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed">
                    We help you scale your vision and services through thoughtful
                    planning and consultation.
                  </p>
                </div>

                {/* Right Side - Process Steps */}
                <div className="flex flex-col justify-center w-full">
                  <div className="relative w-full">
                    <div className="flex flex-col gap-2 md:gap-3">
                      {processSteps.map((step, index) => (
                        <div key={index} className="flex items-start gap-3 sm:gap-4 py-1 sm:py-2">
                          {/* Light Pink Circular Number */}
                          <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#FEE8F4' }}>
                            <span className="font-bold text-base sm:text-lg md:text-xl" style={{ color: '#E60F77' }}>
                              {step.number}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="flex-1 min-w-0">
                            <h4 className="text-sm sm:text-base md:text-lg font-bold text-gray-900 mb-1 sm:mb-2">
                              {step.title}
                            </h4>
                            <p className="text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

