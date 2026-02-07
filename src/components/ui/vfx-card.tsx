"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";

interface VFXCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function VFXCard({ children, className, delay = 0 }: VFXCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      whileHover={{ 
        y: -6, 
        scale: 1.03,
        boxShadow: "0 0 25px rgba(255, 215, 0, 0.4), 0 0 50px rgba(255, 215, 0, 0.2)",
      }}
      className={cn(
        "relative rounded-[18px] border border-[rgba(255,215,0,0.3)] bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] shadow-[0_0_20px_rgba(255,215,0,0.1)] backdrop-blur-md overflow-hidden group cursor-pointer transition-colors duration-300",
        className
      )}
    >
      {/* Soft inner glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />

      {/* Subtle golden radial glow behind card (simulated inside for containment) */}
      <div className="absolute -inset-1 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.15),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

      {/* Animated Gradient Border using pseudo-element implementation via absolute div */}
      <div className="absolute inset-0 rounded-[18px] p-[1px] bg-gradient-to-r from-transparent via-[#FFD700] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-linear-gradient" style={{ pointerEvents: 'none' }}></div>

      <div className="relative z-10 h-full">
        {children}
      </div>
    </motion.div>
  );
}
