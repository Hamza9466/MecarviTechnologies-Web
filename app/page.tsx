import Header from "@/components/website/home/Header";
import Hero from "@/components/website/home/Hero";
import BusinessSuccess from "@/components/website/home/BusinessSuccess";
import Services from "@/components/website/home/Services";
import WhatWeCreate from "@/components/website/home/WhatWeCreate";
import WhyChooseUs from "@/components/website/home/WhyChooseUs";
import OurFacts from "@/components/website/home/OurFacts";
import Testimonials from "@/components/website/home/Testimonials";
import Portfolio from "@/components/website/home/Portfolio";
import StartYourProject from "@/components/website/home/StartYourProject";
import Footer from "@/components/website/home/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BusinessSuccess />
      <Services />
      <WhatWeCreate />
      <WhyChooseUs />
      <OurFacts />
      <Testimonials />
      <Portfolio />
      <StartYourProject />
      <Footer />
    </main>
  );
}
