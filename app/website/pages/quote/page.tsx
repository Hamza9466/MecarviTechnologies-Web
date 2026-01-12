import Header from "@/components/website/home/Header";
import QuoteHero from "@/components/website/quote/QuoteHero";
import QuoteForm from "@/components/website/quote/QuoteForm";
import Footer from "@/components/website/home/Footer";

export default function Quote() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="relative">
        {/* Blue background section with curved bottom */}
        <div className="relative pt-24 pb-32 md:pb-40" style={{ backgroundColor: '#0284c7' }}>
          <QuoteHero />
          {/* Curved white bottom */}
          <div className="absolute bottom-0 left-0 right-0">
            <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-20 md:h-32">
              <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
            </svg>
          </div>
        </div>
        
        {/* White section with form */}
        <div className="relative bg-white -mt-16 md:-mt-20 overflow-hidden">
          {/* Curved decorative shape in background - left side */}
          <div className="absolute left-0 top-0 bottom-0 w-[40%] pointer-events-none z-0">
            <svg viewBox="0 0 500 1000" preserveAspectRatio="none" className="w-full h-full">
              {/* Main curved shape */}
              <path 
                d="M0,0 Q200,150 150,400 T250,700 Q300,850 400,1000 L0,1000 Z" 
                fill="#0284c7" 
                opacity="0.08"
              />
              {/* Secondary curved accent */}
              <path 
                d="M0,50 Q180,200 130,450 T230,750 Q280,900 380,1000 L0,1000 Z" 
                fill="#0284c7" 
                opacity="0.12"
              />
            </svg>
          </div>
          {/* Curved line accent on left edge */}
          <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-500 via-blue-600/30 to-transparent opacity-30 z-0"></div>
          <div className="relative z-10">
            <QuoteForm />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

