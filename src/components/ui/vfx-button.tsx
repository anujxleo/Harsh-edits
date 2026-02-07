"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import React from "react";
import { Slot } from "@radix-ui/react-slot";
import { ButtonProps } from "@/components/ui/button";

interface VFXButtonProps extends ButtonProps {
  asChild?: boolean;
}

export const VFXButton = React.forwardRef<HTMLButtonElement, VFXButtonProps>(
  ({ className, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    
    // We wrap the button content to handle the animation and styling
    // If asChild is true, we need to be careful with refs and props forwarding.
    // However, Framer Motion usually wants to be the direct element.
    // For simplicity with asChild (e.g. Next.js Link), we will style the container or use a span.
    // But since we want the button itself to be animated, we might need to use motion.create(Comp).
    
    // Simplified approach: Render a motion.button or just apply classes if using asChild with heavy overrides.
    // Layout animations are easier if we just use standard CSS transitions for the hover effects described (scale, lift)
    // or wrap in motion.div.
    
    // User requested Framer Motion animations.
    
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ 
            y: -4, 
            scale: 1.02,
            boxShadow: "0 0 20px rgba(255, 215, 0, 0.4)" 
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className="inline-block w-full relative group rounded-[18px]"
      >
        <Comp
          className={cn(
            "relative w-full overflow-hidden rounded-[18px] border border-[rgba(255,215,0,0.3)] bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] px-6 py-4 text-center uppercase tracking-widest text-primary transition-all duration-300 hover:text-[#FFD700] hover:border-[#FFD700]",
            "shadow-[0_0_20px_rgba(255,215,0,0.1)] hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]",
            "flex items-center justify-center gap-3 font-bold text-sm md:text-base cursor-pointer",
             className
          )}
          ref={ref}
          {...props}
        >
          {children}
        </Comp>
        
        {/* Animated Sheen Effect */}
        <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent z-10 pointer-events-none rounded-[18px]" />
      </motion.div>
    );
  }
);
VFXButton.displayName = "VFXButton";
