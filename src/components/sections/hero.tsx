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
            <div className="container mx-auto px-2 sm:px-6 relative z-20">
                <div className="grid grid-cols-2 gap-4 md:gap-16 items-center">
                    <FadeIn as="div" className="text-left">
                        <h1 className="text-2xl sm:text-5xl md:text-7xl font-black tracking-tight uppercase leading-tight md:leading-none">
                            Harsh
                            <span className="block text-primary mt-1 md:mt-0">Professional Video Editor</span>
                        </h1>
                        <p className="mt-2 md:mt-6 text-xs sm:text-lg md:text-xl text-muted-foreground max-w-lg">
                            Creative Video Editor with 3+ years of experience in editing, motion graphics, and visual storytelling. Passionate about creating engaging content while meeting tight deadlines and client expectations
                        </p>
                        <div className="mt-4 md:mt-8 flex flex-row gap-2 md:gap-4 justify-start">
                            <Button asChild className="liquid-btn glow-on-hover w-auto px-4 py-2 h-auto text-xs md:text-base hidden md:inline-flex" size="lg">
                                <a href="#portfolio"><span>View My Work</span></a>
                            </Button>
                            <Button asChild variant="outline" className="liquid-btn w-auto px-4 py-2 h-auto text-xs md:text-base" size="lg">
                                <a href="#contact"><span>Hire Me</span></a>
                            </Button>
                        </div>
                        <div className="mt-4 md:mt-8 flex justify-start">
                             <Button variant="ghost" size="icon" asChild className="h-8 w-8 md:h-10 md:w-10">
                                <a href="https://www.instagram.com/harshhk_16" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                    <Instagram className="h-4 w-4 md:h-6 md:w-6 text-muted-foreground hover:text-primary transition-colors" />
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
