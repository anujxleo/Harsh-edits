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
        <section className="mt-8 w-full z-10 relative">
            <FadeIn>
                <VFXCard className="p-0 overflow-hidden">
                    <div className="relative p-6 bg-black/40 backdrop-blur-md border border-white/10 rounded-xl">
                        {/* Header inside the card */}
                        <div className="flex items-center gap-4 mb-4">
                            <h3 className="text-lg font-bold text-primary uppercase tracking-wider">Skills</h3>
                            <div className="h-px flex-1 bg-gradient-to-r from-primary/50 to-transparent"></div>
                        </div>

                        {/* List of Skills */}
                        <div className="space-y-3 text-left">
                            {skills.map((skill, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(255,215,0,0.6)] flex-shrink-0" />
                                    <span className="text-sm font-medium text-white/90 leading-relaxed tracking-wide">
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Decorative glow */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>
                         <div className="absolute bottom-0 left-0 w-24 h-24 bg-purple-500/5 rounded-full blur-2xl -z-10 pointer-events-none"></div>
                    </div>
                </VFXCard>
            </FadeIn>
        </section>
    );
}
