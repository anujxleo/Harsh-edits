"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { VFXButton } from "@/components/ui/vfx-button";
import { Instagram, Mail, ArrowRight } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { FadeIn } from "./fade-in";

// Add to props definition at the top of file or component
interface MobileHomeProps {
    onHireMeClick?: () => void;
}

export function MobileHome({ onHireMeClick }: MobileHomeProps) {
    const heroImage = PlaceHolderImages.find(p => p.id === 'harsh-professional-hero');

    return (
        <section className="min-h-[85vh] flex flex-col items-center justify-center relative px-5 py-12 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.08),transparent_60%)]">
             {/* Dynamic Background */}
             <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background z-0 pointer-events-none"></div>
             <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
             <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="relative z-10 flex flex-col items-center text-center space-y-8 w-full">
                
                {/* Profile Image with Golden Glow */}
                <FadeIn delay={0.1} className="relative">
                    <div className="relative w-48 h-48 sm:w-56 sm:h-56 mx-auto">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary to-purple-500 blur-lg opacity-70 animate-pulse"></div>
                        <div className="relative w-full h-full rounded-full border-2 border-primary/30 overflow-hidden shadow-2xl ring-4 ring-black/50">
                            {heroImage && (
                                <Image
                                    src={heroImage.imageUrl}
                                    alt="Harsh - Professional Editor"
                                    fill
                                    className="object-cover object-center"
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
                <FadeIn delay={0.3} className="space-y-4 px-2">
                    <h1 className="text-5xl font-black tracking-tighter uppercase leading-none bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60">
                        Harsh
                    </h1>
                    <div className="h-px w-12 bg-primary/50 mx-auto"></div>
                     <h2 className="text-xl font-medium text-primary tracking-widest uppercase">
                        Video Editor
                    </h2>
                    <p className="text-base text-muted-foreground/90 leading-relaxed max-w-[320px] mx-auto">
                        Creative Video Editor with 3+ years of experience in editing, motion graphics, and visual storytelling. Passionate about creating engaging content while meeting tight deadlines and client expectations 
                    </p>
                </FadeIn>

                {/* CTAs */}
                <FadeIn delay={0.5} className="w-full space-y-4 max-w-sm mx-auto">
                    {/* Button Removed as per request */}
                    
                    <div className="grid grid-cols-2 gap-4 w-full px-2">
                        <VFXButton asChild className="h-14">
                            <a 
                                href="#contact"
                                onClick={(e) => {
                                    if (onHireMeClick) {
                                        e.preventDefault();
                                        onHireMeClick();
                                    }
                                }}
                            >
                                <Mail className="mr-2 h-5 w-5" />
                                <span>Hire Me</span>
                            </a>
                        </VFXButton>
                        <VFXButton asChild className="h-14">
                             <a href="https://www.instagram.com/harshhk_16" target="_blank" rel="noopener noreferrer">
                                <Instagram className="mr-2 h-5 w-5" />
                                <span>Instagram</span>
                            </a>
                        </VFXButton>
                    </div>
                </FadeIn>
                
                 {/* Social Proof / Stats (Optional enhancement) */}
                <FadeIn delay={0.7} className="pt-6 flex justify-center gap-10 text-center">
                    <div>
                        <p className="text-2xl font-bold text-white">3+</p>
                        <p className="text-xs text-muted-foreground uppercase tracking-widest">Years Exp.</p>
                    </div>
                    <div>
                         <p className="text-2xl font-bold text-white">50+</p>
                         <p className="text-xs text-muted-foreground uppercase tracking-widest">Projects</p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
