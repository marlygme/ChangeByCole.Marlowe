import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import WorkSection from "@/components/work-section";
import AboutSection from "@/components/about-section";
import ServicesSection from "@/components/services-section";
import TestimonialSection from "@/components/testimonial-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Navigation />
      <HeroSection />
      <WorkSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
