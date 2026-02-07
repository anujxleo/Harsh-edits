"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Play } from "lucide-react";
import { FadeIn } from "../fade-in";

const portfolioItems = {
  reels: PlaceHolderImages.filter(p => p.id.startsWith('reel-')),
  cinematic: PlaceHolderImages.filter(p => p.id.startsWith('cinematic-')),
  transitions: PlaceHolderImages.filter(p => p.id.startsWith('transitions-')),
  music: PlaceHolderImages.filter(p => p.id.startsWith('music-')),
  client: PlaceHolderImages.filter(p => p.id.startsWith('client-')),
};

const PortfolioGrid = ({ category }: { category: keyof typeof portfolioItems }) => (
  <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
    {portfolioItems[category].map((item) => (
      <div key={item.id} className="group relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20">
        <Image
          src={item.imageUrl}
          alt={item.description}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
          data-ai-hint={item.imageHint}
        />
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
          <Play className="h-16 w-16 text-white/80 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
          <span className="text-white font-bold text-lg border-2 border-primary px-4 py-1 rounded-full bg-black/50 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            Work in Pending
          </span>
        </div>
      </div>
    ))}
  </div>
);

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <FadeIn>
          <h2 className="section-title">My Edits</h2>
        </FadeIn>
        
        <FadeIn>
          <Tabs defaultValue="reels" className="w-full">
            <div className="overflow-x-auto pb-4 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
              <TabsList className="inline-flex h-auto w-auto min-w-full md:w-full md:grid md:grid-cols-5 p-1 gap-2 bg-muted/50 backdrop-blur-sm rounded-xl">
                <TabsTrigger value="reels" className="flex-1 whitespace-nowrap px-4 py-2">Instagram Reels</TabsTrigger>
                <TabsTrigger value="cinematic" className="flex-1 whitespace-nowrap px-4 py-2">Cinematic Edits</TabsTrigger>
                <TabsTrigger value="transitions" className="flex-1 whitespace-nowrap px-4 py-2">Transitions</TabsTrigger>
                <TabsTrigger value="music" className="flex-1 whitespace-nowrap px-4 py-2">Music Edits</TabsTrigger>
                <TabsTrigger value="client" className="flex-1 whitespace-nowrap px-4 py-2">Client Work</TabsTrigger>
              </TabsList>
            </div>
            <TabsContent value="reels"><PortfolioGrid category="reels" /></TabsContent>
            <TabsContent value="cinematic"><PortfolioGrid category="cinematic" /></TabsContent>
            <TabsContent value="transitions"><PortfolioGrid category="transitions" /></TabsContent>
            <TabsContent value="music"><PortfolioGrid category="music" /></TabsContent>
            <TabsContent value="client"><PortfolioGrid category="client" /></TabsContent>
          </Tabs>
        </FadeIn>

        <FadeIn className="text-center mt-12">
            <Button asChild size="lg" className="liquid-btn glow-on-hover">
                <a href="https://drive.google.com/drive/mobile/folders/1qrgBlQ5iJMA-bHcxywdl2Tg7G-D0iKDZ" target="_blank" rel="noopener noreferrer">
                    <span>View Full Editing Materials</span>
                </a>
            </Button>
        </FadeIn>
      </div>
    </section>
  );
}
