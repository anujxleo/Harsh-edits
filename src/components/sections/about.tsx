import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download } from "lucide-react";
import { FadeIn } from "../fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { VFXCard } from "@/components/ui/vfx-card";

import { MobileSkills } from "@/components/mobile-skills";

interface AboutSectionProps {
    onHireMeClick?: () => void;
}

export function AboutSection({ onHireMeClick }: AboutSectionProps) {
  // const aboutImage = PlaceHolderImages.find(p => p.id === 'harsh-professional-about');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeIn>
          <h2 className="section-title mb-8 md:mb-12">About Me</h2>
        </FadeIn>
        
        {/* Mobile Layout - New Structure */}
        <div className="md:hidden space-y-8">
            <FadeIn>
                {/* Profile Header - Side by Side */}
                <div className="flex items-center gap-5">
                    {/* Profile Image - Circular */}
                    <div className="relative flex-shrink-0">
                         <div className="w-[120px] h-[120px] rounded-full p-1 bg-gradient-to-tr from-primary via-primary/50 to-transparent">
                            <div className="w-full h-full rounded-full overflow-hidden border-2 border-background relative">
                                <Image
                                    src="https://res.cloudinary.com/dz5aiigdm/image/upload/v1770480844/IMG_20260122_173108.jpg_i6nbyr.jpg"
                                    alt="Harsh"
                                    fill
                                    className="object-cover object-top"
                                />
                            </div>
                        </div>
                        {/* Golden Glow Effect behind */}
                        <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10"></div>
                    </div>

                    {/* Text Content */}
                    <div className="flex-1 min-w-0 flex flex-col justify-center space-y-1">
                         <h3 className="text-2xl font-black uppercase text-white tracking-wide leading-none">Harsh</h3>
                         <p className="text-primary font-bold text-sm uppercase tracking-wider">Video Editor</p>
                         <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">
                            Creative editor with 3+ years of experience in visual storytelling and motion graphics.
                         </p>
                    </div>
                </div>

                {/* Mobile Skills Section - Moved Above Experience */}
                 <div className="w-full">
                    <MobileSkills />
                </div>

                {/* Badges & Buttons Row */}
                <div className="mt-6 space-y-4">
                    {/* Open to Work Badge */}
                     <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 self-start">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[10px] font-bold text-primary uppercase tracking-wider">Open to Work</span>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 gap-3 w-full">
                         <Button 
                            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-xl h-11 font-bold tracking-wide uppercase text-sm" 
                            onClick={(e) => {
                                if (onHireMeClick) {
                                    e.preventDefault();
                                    onHireMeClick();
                                }
                            }}
                            asChild={!onHireMeClick}
                         >
                            {onHireMeClick ? (
                                <span>Hire Me</span>
                            ) : (
                                <a href="#contact">Hire Me</a>
                            )}
                         </Button>
                         <div className="grid grid-cols-2 gap-3">
                            <Button variant="outline" className="w-full rounded-xl h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white" asChild>
                                <a href="https://www.instagram.com/harshhk_16" target="_blank" rel="noopener noreferrer">Instagram</a>
                            </Button>
                            <Button variant="outline" className="w-full rounded-xl h-11 border-white/10 bg-white/5 hover:bg-white/10 hover:text-white" asChild>
                                <a href="https://www.linkedin.com/in/harsh-kumar-9348672a6" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                            </Button>
                         </div>
                    </div>
                </div>
            </FadeIn>

             {/* Experience Section (Preserved on Mobile) */}
            <FadeIn>
                 <div className="pt-4">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-bold text-primary uppercase tracking-wider">Experience</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    {/* Reusing existing experience content structure but simplified for mobile if needed, 
                        or just using the same content as desktop but ensuring it renders well. 
                        For now, I'll copy the Experience content block to ensure it displays correctly here without the Grid layout.
                    */}
                    <div className="space-y-4">
                     <VFXCard className="p-0">
                        <div className="relative z-20 p-5 space-y-6 bg-black/20 backdrop-blur-sm rounded-[18px]">
                            {/* Freelance Gigs */}
                            <div>
                                <div className="flex flex-col items-start gap-1 mb-2">
                                    <div className="flex items-center justify-between w-full">
                                        <h4 className="text-lg font-bold text-primary tracking-tight">Freelance Gigs</h4>
                                        <span className="text-[10px] text-muted-foreground/80 font-mono border border-white/10 px-2 py-0.5 rounded-full bg-white/5">2022 - 2024</span>
                                    </div>
                                    <p className="text-xs font-medium text-white/90">Video Editor</p>
                                </div>
                                <ul className="list-disc list-inside text-xs text-muted-foreground/90 space-y-1.5 ml-1">
                                    <li>Edited fast-paced Instagram Reels & YouTube Shorts</li>
                                    <li>Created Music Videos, Ads, and Promotional Content</li>
                                    <li>Designed clear and engaging Explainer Videos</li>
                                </ul>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />

                            {/* Adda247 */}
                            <div>
                                <div className="flex flex-col items-start gap-1 mb-2">
                                    <div className="flex items-center justify-between w-full">
                                        <h4 className="text-lg font-bold text-primary tracking-tight">Adda247</h4>
                                        <span className="text-[10px] text-muted-foreground/80 font-mono border border-white/10 px-2 py-0.5 rounded-full bg-white/5">2024 - Present</span>
                                    </div>
                                    <p className="text-xs font-medium text-white/90">Video Editor and Graphic Designer</p>
                                </div>
                                <ul className="list-disc list-inside text-xs text-muted-foreground/90 space-y-1.5 ml-1">
                                    <li>High-Impact Teasers, Promotional & Advertisement Videos.</li>
                                    <li>Instagram Reels, YouTube Shorts & Music Video Editing.</li>
                                    <li>Explainer Videos & Green Screen Editing.</li>
                                </ul>
                            </div>
                        </div>
                    </VFXCard>
                </div>
                 </div>
            </FadeIn>
        </div>

        {/* Desktop Layout - Existing Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="text-left">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Skills</h3>
                <VFXCard className="text-left p-6">
                    <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-muted-foreground">
                        <li>Video Editing (Premiere Pro, After Effects)</li>
                        <li>Color Grading & Color Correction</li>
                        <li>Green Screen / Chroma Key</li>
                        <li>Thumbnail Design (Photoshop)</li>
                        <li>Teaser & Trailer Editing</li>
                        <li>Reels, Shorts & YouTube Video Editing</li>
                    </ul>
                </VFXCard>
            </div>

            <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 text-left">Experience</h3>
                <div className="space-y-4">
                     <VFXCard className="p-0">
                        <div className="relative z-20 p-6 space-y-6 bg-black/20 backdrop-blur-sm rounded-[18px]">
                            {/* Freelance Gigs */}
                            <div>
                                <div className="flex flex-col items-start gap-1 mb-2">
                                    <div className="flex items-center justify-between w-full">
                                        <h4 className="text-xl font-bold text-primary tracking-tight">Freelance Gigs</h4>
                                        <span className="text-xs text-muted-foreground/80 font-mono border border-white/10 px-2 py-0.5 rounded-full bg-white/5">2022 - 2024</span>
                                    </div>
                                    <p className="text-sm font-medium text-white/90">Video Editor</p>
                                </div>
                                <ul className="list-disc list-inside text-sm text-muted-foreground/90 space-y-2 ml-1">
                                    <li>Edited fast-paced Instagram Reels & YouTube Shorts</li>
                                    <li>Created Music Videos, Ads, and Promotional Content</li>
                                    <li>Designed clear and engaging Explainer Videos</li>
                                </ul>
                            </div>

                            <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent w-full" />

                            {/* Adda247 */}
                            <div>
                                <div className="flex flex-col items-start gap-1 mb-2">
                                    <div className="flex items-center justify-between w-full">
                                        <h4 className="text-xl font-bold text-primary tracking-tight">Adda247</h4>
                                        <span className="text-xs text-muted-foreground/80 font-mono border border-white/10 px-2 py-0.5 rounded-full bg-white/5">2024 - Present</span>
                                    </div>
                                    <p className="text-sm font-medium text-white/90">Video Editor and Graphic Designer</p>
                                </div>
                                <ul className="list-disc list-inside text-sm text-muted-foreground/90 space-y-2 ml-1">
                                    <li>High-Impact Teasers, Promotional & Advertisement Videos.</li>
                                    <li>Instagram Reels, YouTube Shorts & Music Video Editing.</li>
                                    <li>Explainer Videos & Green Screen Editing.</li>
                                </ul>
                            </div>
                        </div>
                    </VFXCard>
                </div>
            </div>
          </FadeIn>
          
          <FadeIn className="flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
            <VFXCard className="w-full max-w-[280px] md:max-w-md aspect-[4/7] !p-1 overflow-hidden">
                <Image
                  src="https://res.cloudinary.com/dz5aiigdm/image/upload/v1770480844/IMG_20260122_173108.jpg_i6nbyr.jpg"
                  alt="Harsh - Video Editor"
                  width={1024}
                  height={1792}
                  className="rounded-lg object-cover w-full h-full"
                />
            </VFXCard>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
