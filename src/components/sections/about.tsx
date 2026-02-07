import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download } from "lucide-react";
import { FadeIn } from "../fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  // const aboutImage = PlaceHolderImages.find(p => p.id === 'harsh-professional-about');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeIn>
          <h2 className="section-title">About Me</h2>
        </FadeIn>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <FadeIn className="space-y-6 md:space-y-8 order-2 md:order-1">
            <div className="text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4">Skills</h3>
                <Card className="glass-card text-left">
                    <CardContent className="p-4 md:p-6">
                        <ul className="list-disc list-inside space-y-2 text-base md:text-lg text-muted-foreground">
                            <li>Video Editing (Premiere Pro, After Effects)</li>
                            <li>Color Grading & Color Correction</li>
                            <li>Green Screen / Chroma Key</li>
                            <li>Thumbnail Design (Photoshop)</li>
                            <li>Teaser & Trailer Editing</li>
                            <li>Reels, Shorts & YouTube Video Editing</li>
                        </ul>
                    </CardContent>
                </Card>
            </div>

            <div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-3 md:mb-4 text-center md:text-left">Experience</h3>
                <div className="space-y-4">
                    <Card className="glass-card">
                         <CardContent className="p-4 md:p-6 space-y-6">
                            {/* Freelance Gigs */}
                            <div>
                                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center justify-between mb-2">
                                    <h4 className="text-lg md:text-xl font-semibold leading-none tracking-tight">Freelance Gigs</h4>
                                    <span className="text-sm text-muted-foreground font-normal">2022 - 2024</span>
                                </div>
                                <p className="text-sm font-medium text-primary mb-2">Video Editor</p>
                                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1">
                                    <li>Edited fast-paced Instagram Reels & YouTube Shorts</li>
                                    <li>Created Music Videos, Ads, and Promotional Content</li>
                                    <li>Designed clear and engaging Explainer Videos</li>
                                </ul>
                            </div>

                            <div className="h-px bg-border/50 w-full" />

                            {/* Adda247 */}
                            <div>
                                <div className="flex flex-col items-start gap-1 sm:flex-row sm:items-center justify-between mb-2">
                                    <h4 className="text-lg md:text-xl font-semibold leading-none tracking-tight">Adda247</h4>
                                    <span className="text-sm text-muted-foreground font-normal">2024 - Present</span>
                                </div>
                                <p className="text-sm font-medium text-primary mb-2">Video Editor and Graphic Designer</p>
                                <ul className="list-disc list-inside text-sm md:text-base text-muted-foreground space-y-1">
                                    <li>High-Impact Teasers, Promotional & Advertisement Videos.</li>
                                    <li>Instagram Reels, YouTube Shorts & Music Video Editing.</li>
                                    <li>Explainer Videos & Green Screen Editing.</li>
                                </ul>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Button className="mt-4 liquid-btn glow-on-hover w-full sm:w-auto h-12 text-sm uppercase tracking-wide font-medium" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1Khla8T6dwa-vGtPin6fzpu1DlGX1C44E/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2 h-4 w-4" />
                <span>Download Resume</span>
              </a>
            </Button>
          </FadeIn>
          
          <FadeIn className="flex justify-center items-center order-1 md:order-2 mb-4 md:mb-0">
            <div className="golden-frame w-full max-w-[280px] md:max-w-md aspect-[4/7] !p-1">
                <Image
                  src="https://res.cloudinary.com/dz5aiigdm/image/upload/v1770480844/IMG_20260122_173108.jpg_i6nbyr.jpg"
                  alt="Harsh - Video Editor"
                  width={1024}
                  height={1792}
                  className="rounded-lg object-cover w-full h-full"
                />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
