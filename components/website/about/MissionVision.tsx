export default function MissionVision() {
  return (
    <section className="bg-white pb-16 sm:pb-20 md:pb-24 pt-0 px-4 sm:px-6 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Mission Statement Card */}
          <div className="bg-teal-900 rounded-2xl p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 md:mb-8">
              Mission Statement
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Our mission is to serve as our client's most trusted indispensable partner. We work in close liaison with customers to empower their brand value, fuel their growth and achieve their goals by providing fast innovative solutions that will lead to unprecedented results.
            </p>
          </div>

          {/* Vision Statement Card */}
          <div className="bg-teal-900 rounded-2xl p-8 md:p-10 lg:p-12">
            <h2 className="text-xl sm:text-3xl md:text-4xl font-semibold text-white mb-6 md:mb-8">
              Vision Statement
            </h2>
            <p className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed">
              Our mission is to serve as our client's most trusted indispensable partner. We work in close liaison with customers to empower their brand value, fuel their growth and achieve their goals by providing fast innovative solutions that will lead to unprecedented results.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

