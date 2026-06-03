import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import ServicesSection from "@/components/ServicesSection";
import WorkGallery from "@/components/WorkGallery";
import PricingSection from "@/components/PricingSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import ServiceAreaSection from "@/components/ServiceAreaSection";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <ServicesSection />
        <WorkGallery />
        <PricingSection />
        <ServiceAreaSection />
        <AboutSection />
        <ContactSection />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}