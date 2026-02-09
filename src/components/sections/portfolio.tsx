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
      cinematic: [
      { id: 'short-1', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/video/upload/v1770619873/mee_1_c4zbqt.mp4', description: 'Short Edit 1', imageHint: 'Short Edit' },
      { id: 'short-2', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/video/upload/v1770619642/mee_c4iaff.mp4', description: 'Short Edit 2', imageHint: 'Short Edit' },
      { id: 'short-3', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/video/upload/v1770619587/01_ilk3ey.mp4', description: 'Short Edit 3', imageHint: 'Short Edit' },
      { id: 'short-4', imageUrl: 'https://res.cloudinary.com/dz5aiigdm/video/upload/v1770619494/mee_2_e3dqms.mp4', description: 'Short Edit 4', imageHint: 'Short Edit' },
    ],
  transitions: PlaceHolderImages.filter(p => p.id.startsWith('transitions-')),
  music: PlaceHolderImages.filter(p => p.id.startsWith('music-')),
  client: PlaceHolderImages.filter(p => p.id.startsWith('client-')),
};

const PortfolioGrid = ({ category }: { category: keyof typeof portfolioItems }) => {
  const isVertical = category === 'cinematic';
  
  /* Container with border only for cinematic ("Short Edits") */
  if (category === 'cinematic') {
    return (
      <div className="border border-primary/20 rounded-xl p-2 md:p-4 bg-background/5">
        <div className={cn(
          "grid gap-4 md:gap-8", 
          isVertical 
            ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
            : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3" 
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
                      autoPlay={false} 
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
      </div>
    );
  }

  return (
    <div className={cn(
      "grid gap-4 md:gap-8", 
      isVertical 
        ? "grid-cols-2 md:grid-cols-3 lg:grid-cols-4" 
        : "grid-cols-2 md:grid-cols-2 lg:grid-cols-3" 
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
                  autoPlay={false} 
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
          <div className="md:hidden">
             <div className="bg-primary/10 border border-primary/20 rounded-xl p-4 text-center mb-12 backdrop-blur-sm">
                <h2 className="text-3xl font-black uppercase tracking-tighter text-primary drop-shadow-[0_0_10px_rgba(234,179,8,0.3)]">My Edits</h2>
             </div>
          </div>
          <h2 className="section-title hidden md:block">My Edits</h2>
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
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-bold text-primary uppercase tracking-wider">Short Edits</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <PortfolioGrid category="cinematic" />
                </div>
            </FadeIn>

            {/* Thumbnails */}
            <FadeIn>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-bold text-primary uppercase tracking-wider">Thumbnails</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <PortfolioGrid category="thumbnails" />
                </div>
            </FadeIn>

            {/* Transitions */}
             <FadeIn>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-bold text-primary uppercase tracking-wider">Transitions</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <PortfolioGrid category="transitions" />
                </div>
            </FadeIn>

             {/* Music Edits */}
             <FadeIn>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-bold text-primary uppercase tracking-wider">Music Edits</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                    </div>
                    <PortfolioGrid category="music" />
                </div>
            </FadeIn>

             {/* Client Work */}
             <FadeIn>
                <div className="space-y-6">
                    <div className="flex items-center gap-4 mb-6">
                        <h3 className="text-xl font-bold text-primary uppercase tracking-wider">Client Work</h3>
                        <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
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
