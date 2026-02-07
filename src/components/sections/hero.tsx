import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "../fade-in";

export function HeroSection() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'harsh-professional-hero');

    return (
        <section id="home" className="min-h-[90vh] md:min-h-screen flex items-center justify-center relative pt-32 pb-12 md:py-20 overflow-hidden">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background z-10"></div>
             <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10"></div>
            <div className="container mx-auto px-4 sm:px-6 relative z-20">
                <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
                    <FadeIn as="div" className="text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase leading-tight md:leading-none">
                            Harsh
                            <span className="block text-primary mt-2 md:mt-0">Professional Video Editor</span>
                        </h1>
                        <p className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-lg mx-auto md:mx-0">
                            Creative Video Editor with 3+ years of experience in editing, motion graphics, and visual storytelling. Passionate about creating engaging content while meeting tight deadlines and client expectations
                        </p>
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <Button asChild className="liquid-btn glow-on-hover w-full sm:w-auto" size="lg">
                                <a href="#portfolio"><span>View My Work</span></a>
                            </Button>
                            <Button asChild variant="outline" className="liquid-btn w-full sm:w-auto" size="lg">
                                <a href="#contact"><span>Hire Me</span></a>
                            </Button>
                        </div>
                        <div className="mt-8 flex justify-center md:justify-start">
                             <Button variant="ghost" size="icon" asChild>
                                <a href="https://www.instagram.com/harshhk_16" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="h-6 w-6 text-muted-foreground hover:text-primary transition-colors" />
                                </a>
                            </Button>
                        </div>
                    </FadeIn>
                    <FadeIn className="flex justify-center items-center">
                         {heroImage && (
                            <div className="golden-frame transform transition-transform duration-500 hover:scale-105">
                                 <Image
                                    src={heroImage.imageUrl}
                                    alt={heroImage.description}
                                    width={400}
                                    height={500}
                                    className="rounded-lg object-cover"
                                    priority
                                    data-ai-hint={heroImage.imageHint}
                                />
                            </div>
                        )}
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
