import { Film, Clapperboard, Youtube, Image as ImageIcon } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { FadeIn } from "../fade-in";

const services = [
  {
    icon: Film,
    title: "Reel Editing",
    description: "Creating dynamic, engaging, and trend-setting Instagram Reels to boost your social media presence.",
  },
  {
    icon: Clapperboard,
    title: "Cinematic Edits",
    description: "Transforming raw footage into breathtaking cinematic experiences with professional color grading and storytelling.",
  },
  {
    icon: Youtube,
    title: "YouTube Video Editing",
    description: "Full-service editing for YouTube content, from vlogs to tutorials, ensuring high retention and professional quality.",
  },
  {
    icon: ImageIcon,
    title: "Thumbnail Design",
    description: "Designing eye-catching and click-worthy thumbnails that make your videos stand out from the crowd.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 md:py-32 bg-black/20">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">What I Offer</h2>
        </FadeIn>
        
        <FadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="glass-card text-center p-6">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 rounded-full flex items-center justify-center bg-primary/10 border border-primary/30">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
                </CardHeader>
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
              </Card>
            );
          })}
        </FadeIn>
      </div>
    </section>
  );
}
