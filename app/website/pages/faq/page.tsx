import Header from "@/components/website/home/Header";
import FAQHero from "@/components/website/faq/FAQHero";
import FAQSection from "@/components/website/faq/FAQSection";
import Footer from "@/components/website/home/Footer";

export default function FAQ() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <FAQHero />
      <FAQSection />
      <Footer />
    </main>
  );
}

