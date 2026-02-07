import Image from "next/image";
import { Button } from "@/components/ui/button";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Download } from "lucide-react";
import { FadeIn } from "../fade-in";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function AboutSection() {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'harsh-professional-about');

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <h2 className="section-title">About Me</h2>
        </FadeIn>
        
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <FadeIn className="space-y-8">
            <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Skills</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                    <li>Video Editing (Premiere Pro, After Effects)</li>
                    <li>Color Grading & Color Correction</li>
                    <li>Green Screen / Chroma Key</li>
                    <li>Thumbnail Design (Photoshop)</li>
                    <li>Teaser & Trailer Editing</li>
                    <li>Reels, Shorts & YouTube Video Editing</li>
                </ul>
            </div>

            <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Experience</h3>
                <div className="space-y-6">
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle className="text-xl flex flex-col items-start gap-1 sm:flex-row sm:items-center justify-between">
                                <span>Freelance Gigs</span>
                                <span className="text-sm text-muted-foreground font-normal">2022 - 2024</span>
                            </CardTitle>
                            <p className="text-sm font-medium text-primary">Video Editor</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>Edited fast-paced Instagram Reels & YouTube Shorts</li>
                                <li>Created Music Videos, Ads, and Promotional Content</li>
                                <li>Designed clear and engaging Explainer Videos</li>
                            </ul>
                        </CardContent>
                    </Card>
                    <Card className="glass-card">
                        <CardHeader>
                            <CardTitle className="text-xl flex flex-col items-start gap-1 sm:flex-row sm:items-center justify-between">
                                <span>Adda247</span>
                                <span className="text-sm text-muted-foreground font-normal">2024 - Present</span>
                            </CardTitle>
                            <p className="text-sm font-medium text-primary">Video Editor and Graphic Designer</p>
                        </CardHeader>
                        <CardContent>
                            <ul className="list-disc list-inside text-muted-foreground space-y-1">
                                <li>High-Impact Teasers, Promotional & Advertisement Videos.</li>
                                <li>Instagram Reels, YouTube Shorts & Music Video Editing.</li>
                                <li>Explainer Videos & Green Screen Editing.</li>
                            </ul>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <Button className="mt-4 liquid-btn glow-on-hover w-full sm:w-auto" size="lg" asChild>
              <a href="https://drive.google.com/file/d/1Khla8T6dwa-vGtPin6fzpu1DlGX1C44E/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                <Download className="mr-2" />
                <span>Download Resume</span>
              </a>
            </Button>
          </FadeIn>
          <FadeIn className="flex justify-center items-center">
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
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
