import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/Footer";
import WorkSection from "@/components/WorkSection";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <Navbar />
      <main>
        <HeroSection />
        <ClientsSection />
        <ServicesSection />
        {/* Future sections */}
        <WorkSection />
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
