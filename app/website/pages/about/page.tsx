import Header from "@/components/website/home/Header";
import AboutHero from "@/components/website/about/AboutHero";
import AboutFounder from "@/components/website/about/AboutFounder";
import AboutCompany from "@/components/website/about/AboutCompany";
import MissionVision from "@/components/website/about/MissionVision";
import CoreValues from "@/components/website/about/CoreValues";
import Footer from "@/components/website/home/Footer";

export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutFounder />
      <AboutCompany />
      <MissionVision />
      <CoreValues />
      <Footer />
    </main>
  );
}

