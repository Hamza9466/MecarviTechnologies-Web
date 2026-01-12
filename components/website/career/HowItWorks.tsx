export default function HowItWorks() {
  const steps = [
    {
      id: 1,
      title: "Apply test",
      description: "Explain your requirements by selecting your preferred service and get quotation for your order. We'll be there if you need any consultation",
      color: "yellow",
      borderColor: "border-yellow-400",
      textColor: "text-yellow-400",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/>
        </svg>
      ),
    },
    {
      id: 2,
      title: "Apply",
      description: "Explain your requirements by selecting your preferred service and get quotation for your order. We'll be there if you need any consultation",
      color: "teal",
      borderColor: "border-teal-400",
      textColor: "text-teal-400",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" fill="currentColor" opacity="0.2"/>
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" fill="currentColor"/>
        </svg>
      ),
    },
    {
      id: 3,
      title: "test",
      description: "the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
      color: "blue",
      borderColor: "border-blue-400",
      textColor: "text-blue-400",
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9.19 6.35c-2.04 2.29-3.44 5.58-3.57 9.11-.02.27.17.51.44.55.26.04.51-.15.55-.41.12-3.31 1.4-6.36 3.26-8.47l1.74-1.96c.16-.18.43-.21.62-.05s.21.43.05.62l-1.74 1.96zm7.62 0c-.16-.18-.43-.21-.62-.05s-.21.43-.05.62l1.74 1.96c1.86 2.11 3.14 5.16 3.26 8.47.04.26.29.45.55.41.27-.04.46-.28.44-.55-.13-3.53-1.53-6.82-3.57-9.11l-1.75-1.85zM12 2.81c.41 0 .75.34.75.75v1.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75V3.56c0-.41.34-.75.75-.75zm0 14.63c.41 0 .75.34.75.75v1.88c0 .41-.34.75-.75.75s-.75-.34-.75-.75v-1.88c0-.42.34-.75.75-.75zm-8.78-6.28c.29-.29.77-.29 1.06 0l1.33 1.33c.29.29.29.77 0 1.06-.29.29-.77.29-1.06 0l-1.33-1.33c-.3-.29-.3-.77 0-1.06zm15.56 0c.29.29.29.77 0 1.06l-1.33 1.33c-.29.29-.77.29-1.06 0-.29-.29-.29-.77 0-1.06l1.33-1.33c.3-.29.77-.29 1.06 0z"/>
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-gray-900 text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 md:mb-16">
          How It Works
        </h2>

        {/* Timeline and Cards Container */}
        <div className="relative">
          {/* Timeline Line - Separate line at top */}
          <div className="relative mb-12 md:mb-16 hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div>
            <div className="relative flex justify-around items-center">
              {/* Timeline Circles - Centered on line */}
              {steps.map((step, index) => (
                <div key={`top-${step.id}`} className="relative z-10 flex justify-center">
                  <div 
                    className="w-6 h-6 rounded-full shadow-lg relative -top-3 -mb-3" 
                    style={{
                      backgroundColor: 
                        step.color === 'yellow' ? '#facc15' : 
                        step.color === 'teal' ? '#2dd4bf' : 
                        '#3b82f6',
                      boxShadow: `0 0 20px ${
                        step.color === 'yellow' ? 'rgba(250, 204, 21, 0.5)' : 
                        step.color === 'teal' ? 'rgba(45, 212, 191, 0.5)' : 
                        'rgba(59, 130, 246, 0.5)'
                      }`
                    }}
                  >
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
            {steps.map((step, index) => (
              <div key={step.id} className="relative">
                {/* Step Card */}
                <div className={`bg-white rounded-lg p-6 md:p-8 border-4 ${step.borderColor} shadow-lg h-full`}>
                  {/* Icon */}
                  <div className={`flex justify-center mb-4 ${step.textColor}`}>
                    {step.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl md:text-2xl font-bold ${step.textColor} mb-4 text-center`}>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 text-sm md:text-base leading-relaxed text-center">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Timeline Line - Separate line at bottom */}
          <div className="relative hidden md:block">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gray-300 -translate-y-1/2 z-0"></div>
            <div className="relative flex justify-around items-center">
              {/* Timeline Circles - Centered on line */}
              {steps.map((step, index) => (
                <div key={`bottom-${step.id}`} className="relative z-10 flex justify-center">
                  <div 
                    className="w-6 h-6 rounded-full shadow-lg relative -top-3 -mb-3" 
                    style={{
                      backgroundColor: 
                        step.color === 'yellow' ? '#facc15' : 
                        step.color === 'teal' ? '#2dd4bf' : 
                        '#3b82f6',
                      boxShadow: `0 0 20px ${
                        step.color === 'yellow' ? 'rgba(250, 204, 21, 0.5)' : 
                        step.color === 'teal' ? 'rgba(45, 212, 191, 0.5)' : 
                        'rgba(59, 130, 246, 0.5)'
                      }`
                    }}
                  >
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

