"use client";

import { useState, useEffect, isValidElement, cloneElement } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

interface MobileAppInterfaceProps {
  hero: React.ReactNode;
  about: React.ReactNode;
  portfolio: React.ReactNode;
  services: React.ReactNode;
  contact: React.ReactNode;
}

export function MobileAppInterface({ hero, about, portfolio, services, contact }: MobileAppInterfaceProps) {
  const [activeTab, setActiveTab] = useState("home");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (!isMobile) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "home":
        return <div className="pb-24">
          {isValidElement(hero) ? cloneElement(hero as React.ReactElement<any>, { 
            onHireMeClick: () => setActiveTab("contact") 
          }) : hero}
        </div>;
      case "about":
        return <div className="pb-24 space-y-8">
          {isValidElement(about) ? cloneElement(about as React.ReactElement<any>, { 
            onHireMeClick: () => setActiveTab("contact") 
          }) : about}
          {services}
        </div>;
      case "work":
        return <div className="pb-24">{portfolio}</div>;
      case "contact":
        return <div className="pb-24">{contact}</div>;
      default:
        return <div className="pb-24">{hero}</div>;
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground md:hidden flex flex-col">
      {/* Content Area - Scrollable */}
      <main className="flex-1 overflow-y-auto no-scrollbar">
        {renderContent()}
      </main>

      {/* Fixed Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-lg border-t border-border flex items-center justify-around z-50">
        <button
          onClick={() => setActiveTab("home")}
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors",
            activeTab === "home" ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Home className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Home</span>
        </button>
        <button
          onClick={() => setActiveTab("about")}
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors",
            activeTab === "about" ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <User className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">About</span>
        </button>
        <button
          onClick={() => setActiveTab("work")}
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors",
            activeTab === "work" ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Briefcase className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Work</span>
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={cn(
            "flex flex-col items-center justify-center w-full h-full transition-colors",
            activeTab === "contact" ? "text-primary" : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Mail className="h-6 w-6" />
          <span className="text-xs mt-1 font-medium">Contact</span>
        </button>
      </nav>
    </div>
  );
}
