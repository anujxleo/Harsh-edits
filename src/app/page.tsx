import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { PortfolioSection } from "@/components/sections/portfolio";
import { ServicesSection } from "@/components/sections/services";
import { ContactSection } from "@/components/sections/contact";
import { Footer } from "@/components/footer";

import { MobileAppInterface } from "@/components/mobile-app-interface";
import { MobileHome } from "@/components/mobile-home";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Desktop Layout - Hidden on Mobile */}
      <div className="hidden md:block">
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <ServicesSection />
        <ContactSection />
        <Footer />
      </div>

      {/* Mobile Layout - App Interface */}
      <MobileAppInterface 
        hero={<MobileHome />}
        about={<AboutSection />}
        portfolio={<PortfolioSection />}
        services={<ServicesSection />}
        contact={
          <>
            <ContactSection />
            <Footer />
          </>
        }
      />
    </main>
  );
}
