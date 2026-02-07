"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram, Mail, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "./fade-in";

export function MobileHome() {
    const heroImage = PlaceHolderImages.find(p => p.id === 'harsh-professional-hero');

    return (
        <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-6 py-12 overflow-hidden">
             {/* Dynamic Background */}
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0"></div>
             <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
             <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-8 w-full max-w-sm">
                
                {/* Profile Image with Golden Glow */}
                <FadeIn delay={0.1} className="relative">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-lg opacity-70 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-2 border-primary/30 overflow-hidden shadow-2xl ring-4 ring-black/50">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt="Harsh - Professional Editor"
                                    fill
                                    className="object-cover object-top"
                                    priority
                                    data-ai-hint={heroImage.imageHint}
                                />
                            )}
                        </div>
                         {/* Floating Badge */}
                        <div className="absolute -bottom-2 -right-2 bg-background/80 backdrop-blur-md border border-primary/30 px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
                            <span className="relative flex h-2 w-2">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-[10px] font-medium text-primary uppercase tracking-wider">Open to Work</span>
                        </div>
                    </div>
                </FadeIn>

                {/* Text Content */}
                <FadeIn delay={0.3} className="space-y-3">
                    <h1 className="text-4xl font-black tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Harsh
                    </h1>
                    <div className="h-px w-12 bg-primary/50 mx-auto"></div>
                     <h2 className="text-lg font-medium text-primary tracking-widest uppercase">
                        Visual Storyteller
                    </h2>
                    <p className="text-sm text-muted-foreground/80 leading-relaxed max-w-[280px] mx-auto">
                        Crafting high-end cinematic visuals that captivate and convert. 
                    </p>
                </FadeIn>

                {/* CTAs */}
                <FadeIn delay={0.5} className="w-full space-y-3">
                    <Button asChild className="w-full liquid-btn glow-on-hover h-12 text-sm uppercase tracking-wide font-semibold group" size="lg">
                        <a href="#portfolio">
                            <span>View Selected Works</span>
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    
                    <div className="grid grid-cols-2 gap-3">
                        <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary/10 h-10 text-xs uppercase tracking-wider" size="sm">
                            <a href="#contact">
                                <Mail className="mr-2 h-3 w-3" />
                                Hire Me
                            </a>
                        </Button>
                        <Button asChild variant="outline" className="w-full border-primary/20 hover:bg-primary/10 h-10 text-xs uppercase tracking-wider" size="sm">
                             <a href="https://www.instagram.com/harshhk_16" target="_blank" rel="noopener noreferrer">
                                <Instagram className="mr-2 h-3 w-3" />
                                Instagram
                            </a>
                        </Button>
                    </div>
                </FadeIn>
                
                 {/* Social Proof / Stats (Optional enhancement) */}
                <FadeIn delay={0.7} className="pt-4 flex justify-center gap-8 text-center">
                    <div>
                        <p className="text-xl font-bold text-white">3+</p>
                        <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Years Exp.</p>
                    </div>
                    <div>
                         <p className="text-xl font-bold text-white">50+</p>
                         <p className="text-[10px] text-muted-foreground uppercase tracking-widest">Projects</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
