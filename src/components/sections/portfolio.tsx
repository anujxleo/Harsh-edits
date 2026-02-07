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
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="h-16 w-16 text-white/80 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
        </div>
      </div>
    ))}
  </div>
);

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="section-title">My Edits</h2>
        </FadeIn>
        
        <FadeIn>
          <Tabs defaultValue="reels" className="w-full">
            <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mb-12">
              <TabsTrigger value="reels">Instagram Reels</TabsTrigger>
              <TabsTrigger value="cinematic">Cinematic Edits</TabsTrigger>
              <TabsTrigger value="transitions">Transitions</TabsTrigger>
              <TabsTrigger value="music">Music Edits</TabsTrigger>
              <TabsTrigger value="client">Client Work</TabsTrigger>
            </TabsList>
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
