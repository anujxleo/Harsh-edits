"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoPlayerProps {
  src: string;
  className?: string;
  aspectRatio?: "video" | "vertical"; // 'video' = 16:9, 'vertical' = 9:16
  autoPlay?: boolean;
  isPlaying?: boolean; // Controlled state
  onPlay?: () => void; // Callback when play is requested
  onPause?: () => void; // Callback when pause is requested
}

export function VideoPlayer({ 
    src, 
    className, 
    aspectRatio = "video", 
    autoPlay = false,
    isPlaying: controlledIsPlaying, 
    onPlay,
    onPause
}: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [internalIsPlaying, setInternalIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  // Determine if component is controlled or uncontrolled
  const isControlled = controlledIsPlaying !== undefined;
  const isPlaying = isControlled ? controlledIsPlaying : internalIsPlaying;

  useEffect(() => {
    if (videoRef.current) {
        if (isPlaying) {
            videoRef.current.play().catch(error => {
                console.log("Play prevented:", error);
                if (!isControlled) setInternalIsPlaying(false);
                if (onPause) onPause();
            });
        } else {
            videoRef.current.pause();
        }
    }
  }, [isPlaying, isControlled, onPause]);

  const handlePlayClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isPlaying) {
        if (onPause) onPause();
        if (!isControlled) setInternalIsPlaying(false);
    } else {
        if (onPlay) onPlay();
        if (!isControlled) setInternalIsPlaying(true);
        // Auto-unmute on play
        setIsMuted(false);
        if (videoRef.current) {
            videoRef.current.muted = false;
        }
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
        onClick={handlePlayClick}
    >
      <video
        ref={videoRef}
        src={src}
        className="w-full h-full object-cover"
        muted={isMuted}
        loop
        playsInline
      />

      {/* Overlay: Visible on pause */}
      {/* Hide immediately when playing, regardless of hover */}
      <div 
        className={cn(
            "absolute inset-0 flex items-center justify-center bg-black/40 transition-opacity duration-300",
            isPlaying ? "opacity-0 pointer-events-none" : "opacity-100"
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

      {/* Status Badge REMOVED as per request */}
    </div>
  );
}

