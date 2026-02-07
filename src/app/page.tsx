import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PortfolioSection } from "@/components/sections/portfolio";
import { InstagramSection } from "@/components/sections/instagram";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <InstagramSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
