"use client";

import { FadeIn } from "./fade-in";
import { VFXCard } from "./ui/vfx-card";

export function MobileSkills() {
    const skills = [
        "Video Editing (Premiere Pro, After Effects)",
        "Color Grading & Color Correction",
        "Green Screen / Chroma Key",
        "Thumbnail Design (Photoshop)",
        "Teaser & Trailer Editing",
        "Reels, Shorts & YouTube Video Editing"
    ];

    return (
        <section className="mt-10 px-5 w-full">
            <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                    <h3 className="text-xl font-bold text-primary uppercase tracking-wider">Skills</h3>
                    <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                </div>
                
                <div className="space-y-4">
                    {skills.map((skill, index) => (
                        <VFXCard key={index} className="p-0 overflow-hidden group">
                            <div className="relative p-5 bg-black/40 backdrop-blur-md border border-white/5 rounded-xl transition-all duration-300 hover:border-primary/30 hover:bg-black/60">
                                {/* Soft Golden Glow Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="flex items-start gap-3 relative z-10">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,215,0,0.6)] flex-shrink-0" />
                                    <span className="text-sm font-medium text-white/90 leading-relaxed tracking-wide">
                                        {skill}
                                    </span>
                                </div>
                            </div>
                        </VFXCard>
                    ))}
                </div>
            </FadeIn>
        </section>
    );
}
