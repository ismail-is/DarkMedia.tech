import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ClientsSection from "@/components/ClientsSection";
import ServicesSection from "@/components/ServicesSection";
import CustomCursor from "@/components/CustomCursor";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import Footer from "@/components/Footer";

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
        <section
          id="work"
          style={{
            height: "100vh",
            background: "#000",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div style={{
            textAlign: "center",
            color: "#fff",
            fontFamily: "'Playfair Display', serif",
          }}>
            <h2 style={{ fontSize: "48px", fontWeight: "700", marginBottom: "16px" }}>
              Our Work
            </h2>
            <p style={{ color: "#888", fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
              More sections coming soon...
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
