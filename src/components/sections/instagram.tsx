import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "../fade-in";

export function InstagramSection() {
  const instaPosts = PlaceHolderImages.filter(p => p.id.startsWith('instagram-')).slice(0, 6);

  return (
    <section id="instagram" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <h2 className="section-title">Latest Instagram Edits</h2>
        </FadeIn>
        
        <FadeIn>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4">
            {instaPosts.map((post) => (
              <a 
                href="https://www.instagram.com/harshhk_16"
                target="_blank"
                rel="noopener noreferrer"
                key={post.id}
                className="group relative block overflow-hidden rounded-lg"
              >
                <Image
                  src={post.imageUrl}
                  alt={post.description}
                  width={500}
                  height={500}
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                  data-ai-hint={post.imageHint}
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 border-4 border-transparent group-hover:border-primary transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </FadeIn>
        
        <FadeIn className="text-center mt-12">
          <Button asChild size="lg" className="liquid-btn glow-on-hover">
            <a href="https://www.instagram.com/harshhk_16" target="_blank" rel="noopener noreferrer">
              <span>Visit Instagram Profile</span>
              <ArrowRight className="ml-2"/>
            </a>
          </Button>
        </FadeIn>
      </div>
    </section>
  );
}
