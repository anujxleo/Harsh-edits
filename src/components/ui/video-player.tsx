"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
  aspectRatio?: "video" | "vertical"; // 'video' = 16:9, 'vertical' = 9:16
  autoPlay?: boolean;
}

export function VideoPlayer({ src, className, aspectRatio = "video", autoPlay = false }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
        if (autoPlay) {
            videoRef.current.play().catch(error => {
                console.log("Autoplay prevented:", error);
                setIsPlaying(false);
            });
        }
    }
  }, [autoPlay]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent event bubbling if necessary
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div 
        className={cn(
            "relative overflow-hidden rounded-xl bg-black group", 
            aspectRatio === "vertical" ? "aspect-[9/16]" : "aspect-video",
            className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={togglePlay}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
      />

      {/* Overlay: Visible on pause or hover */}
      <div 
        className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300",
            isPlaying && !isHovered ? "opacity-0" : "opacity-100"
        )}
      >
         <button 
            className="rounded-full bg-white/10 p-4 backdrop-blur-sm transition-transform hover:scale-110 hover:bg-white/20"
         >
            {isPlaying ? (
                <Pause className="h-8 w-8 text-white fill-white/20" />
            ) : (
                <Play className="h-8 w-8 text-white fill-white/20 ml-1" />
            )}
         </button>
      </div>

      {/* Mute Toggle: Absolute position */}
      <button
        onClick={toggleMute}
        className={cn(
            "absolute bottom-4 right-4 z-10 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-opacity hover:bg-black/70",
            // Always show mute button on mobile (hover not applicable), or when hovered on desktop
             "opacity-100 md:opacity-0 md:group-hover:opacity-100" 
        )}
      >
        {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
      </button>

      {/* Status Badge */}
      <div className="absolute top-4 left-4 z-10">
          <span className="px-2 py-1 text-xs font-medium text-white bg-black/50 backdrop-blur-md rounded-md border border-white/10">
              {aspectRatio === 'vertical' ? 'Short' : 'Video'}
          </span>
      </div>
    </div>
  );
}
