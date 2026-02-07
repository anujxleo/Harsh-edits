import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download } from "lucide-react";
import { AnimatedProgress } from "../animated-progress";
import { FadeIn } from "../fade-in";

const skills = [
  { name: "Video Editing", level: 95 },
  { name: "Color Grading", level: 90 },
  { name: "Motion Graphics", level: 80 },
  { name: "Sound Design", level: 85 },
  { name: "Cinematic Transitions", level: 92 },
];

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'harsh-professional-about');

  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">About Me</h2>
        </FadeIn>
        
        <FadeIn className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I am a passionate and creative video editor specializing in crafting compelling visual narratives. With a keen eye for detail, I excel in producing dynamic Instagram Reels, breathtaking cinematic edits, and seamless transitions. My expertise in color grading brings mood and emotion to every frame, while my storytelling skills ensure that each video resonates with its audience. Let's create something extraordinary together.
            </p>
            <div className="space-y-4">
              {skills.map(skill => (
                <div key={skill.name}>
                  <p className="mb-2 font-medium">{skill.name}</p>
                  <AnimatedProgress value={skill.level} />
                </div>
              ))}
            </div>
            <Button className="mt-4 liquid-btn glow-on-hover" size="lg" asChild>
              <a href="#" download>
                <Download className="mr-2" />
                <span>Download Resume</span>
              </a>
            </Button>
          </div>
          <div className="flex justify-center items-center">
            {aboutImage && (
              <div className="golden-frame">
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={400}
                  height={400}
                  className="rounded-lg object-cover"
                  data-ai-hint={aboutImage.imageHint}
                />
              </div>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
