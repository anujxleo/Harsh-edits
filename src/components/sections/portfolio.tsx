"use client"

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Play } from "lucide-react";
import { FadeIn } from "../fade-in";
import { VideoPlayer } from "@/components/ui/video-player";
import { cn } from "@/lib/utils";

const portfolioItems = {
  thumbnails: [
    { id: 'thumb-1', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478283/md_sir_copy_jqzp0k.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-2', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478284/sudhanshu_sir_cujlfe.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-3', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478284/tarun_sir_02_gioyek.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-4', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478279/tarun_sir_and_MD_sir._tljsyd.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-5', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478279/md_sir_plqvzi.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-6', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478279/ACP_Sir_nelilc.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-7', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478270/SELECTION_DAIRY_1_tarun_sir_l89itj.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-8', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478269/manthan_2.0_sr1b7t.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-9', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478268/Ho_gyi_copy_sylmgy.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
    { id: 'thumb-10', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/image/upload/v1770478267/Manthan_2.0_Achievers_Books_combo_pgesd0.jpg', description: 'Thumbnail Design', imageHint: 'Thumbnail Design' },
  ],
  cinematic: PlaceHolderImages.filter(p => p.id.startsWith('cinematic-')),
  transitions: PlaceHolderImages.filter(p => p.id.startsWith('transitions-')),
  music: PlaceHolderImages.filter(p => p.id.startsWith('music-')),
  client: PlaceHolderImages.filter(p => p.id.startsWith('client-')),
};

const PortfolioGrid = ({ category }: { category: keyof typeof portfolioItems }) => {
  const isVertical = category === 'cinematic';
  
  return (
    <div className={cn(
      "grid gap-4 md:gap-8", // Reduced gap on mobile
      isVertical 
        ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
        : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3" // Changed mobile to grid-cols-2 for all
    )}>
      {portfolioItems[category].map((item) => {
        const isVideo = item.imageUrl.endsWith('.mp4');
        return (
          <div key={item.id} className={cn(
            "group relative overflow-hidden rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300 shadow-lg hover:shadow-primary/20",
            isVertical ? "aspect-[9/16]" : "aspect-video"
          )}>
            {isVideo ? (
               <VideoPlayer 
                  src={item.imageUrl} 
                  aspectRatio={isVertical ? "vertical" : "video"}
                  autoPlay={false} // Disable autoplay to let user control it
               />
            ) : (
              <Image
                src={item.imageUrl}
                alt={item.description}
                fill
                className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                data-ai-hint={item.imageHint}
              />
            )}
            
            {/* Overlay for non-video items or additional info */}
            {!isVideo && (
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:flex flex-col items-center justify-center gap-4">
                    <span className="text-white font-bold text-base md:text-lg border-2 border-primary px-4 py-1 rounded-full bg-black/50 backdrop-blur-sm transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    View Project
                    </span>
                </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-5 sm:px-6">
        <FadeIn>
          <h2 className="section-title">My Edits</h2>
        </FadeIn>
        
        <div className="hidden md:block">
          <FadeIn>
            <Tabs defaultValue="thumbnails" className="w-full">
              <div className="w-full overflow-x-auto pb-4 -mx-5 px-5 md:mx-0 md:px-0 no-scrollbar">
                <TabsList className="inline-flex h-auto w-auto min-w-full md:w-full md:grid md:grid-cols-5 p-1 gap-2 bg-muted/50 backdrop-blur-sm rounded-xl">
                  <TabsTrigger value="thumbnails" className="flex-1 whitespace-nowrap px-4 py-2 text-sm md:text-base">Thumbnails</TabsTrigger>
                  <TabsTrigger value="cinematic" className="flex-1 whitespace-nowrap px-4 py-2 text-sm md:text-base">Short Edits</TabsTrigger>
                  <TabsTrigger value="transitions" className="flex-1 whitespace-nowrap px-4 py-2 text-sm md:text-base">Transitions</TabsTrigger>
                  <TabsTrigger value="music" className="flex-1 whitespace-nowrap px-4 py-2 text-sm md:text-base">Music Edits</TabsTrigger>
                  <TabsTrigger value="client" className="flex-1 whitespace-nowrap px-4 py-2 text-sm md:text-base">Client Work</TabsTrigger>
                </TabsList>
              </div>
              <div className="mt-6 md:mt-8">
                  <TabsContent value="thumbnails"><PortfolioGrid category="thumbnails" /></TabsContent>
                  <TabsContent value="cinematic"><PortfolioGrid category="cinematic" /></TabsContent>
                  <TabsContent value="transitions"><PortfolioGrid category="transitions" /></TabsContent>
                  <TabsContent value="music"><PortfolioGrid category="music" /></TabsContent>
                  <TabsContent value="client"><PortfolioGrid category="client" /></TabsContent>
              </div>
            </Tabs>
          </FadeIn>
        </div>

        {/* Mobile View - Vertical Stack */}
        <div className="md:hidden space-y-16">
            {/* Short Edits */}
            <FadeIn>
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-foreground">Short Edits</h3>
                        <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    </div>
                    <PortfolioGrid category="cinematic" />
                </div>
            </FadeIn>

            {/* Thumbnails */}
            <FadeIn>
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-foreground">Thumbnails</h3>
                         <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    </div>
                    <PortfolioGrid category="thumbnails" />
                </div>
            </FadeIn>

            {/* Transitions */}
             <FadeIn>
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-foreground">Transitions</h3>
                         <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    </div>
                    <PortfolioGrid category="transitions" />
                </div>
            </FadeIn>

             {/* Music Edits */}
             <FadeIn>
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-foreground">Music Edits</h3>
                         <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    </div>
                    <PortfolioGrid category="music" />
                </div>
            </FadeIn>

             {/* Client Work */}
             <FadeIn>
                <div className="space-y-6">
                    <div className="text-center">
                        <h3 className="text-2xl font-bold uppercase tracking-wider text-foreground">Client Work</h3>
                         <div className="h-1 w-24 bg-primary mx-auto mt-2 rounded-full shadow-[0_0_10px_rgba(234,179,8,0.5)]"></div>
                    </div>
                    <PortfolioGrid category="client" />
                </div>
            </FadeIn>
        </div>

        <FadeIn className="text-center mt-12">
            <Button asChild size="lg" className="liquid-btn glow-on-hover w-full sm:w-auto h-12 text-sm uppercase tracking-wide font-medium">
                <a href="https://drive.google.com/drive/mobile/folders/1qrgBlQ5iJMA-bHcxywdl2Tg7G-D0iKDZ" target="_blank" rel="noopener noreferrer">
                    <span>View Full Editing Materials</span>
                </a>
            </Button>
        </FadeIn>
      </div>
    </section>
  );
}
