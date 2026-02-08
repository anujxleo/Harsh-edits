"use client";

import { motion } from "framer-motion";

export function GlowingCurves() {
    return (
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            {/* Left Curve */}
            <motion.svg
                viewBox="0 0 100 200"
                className="absolute top-0 left-0 w-1/2 h-full opacity-80"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{ filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))" }}
            >
                <motion.path
                    d="M -20 50 Q 50 100 20 200"
                    fill="none"
                    stroke="url(#goldGradientLeft)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                />
                <defs>
                    <linearGradient id="goldGradientLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </motion.svg>

            {/* Right Curve */}
            <motion.svg
                viewBox="0 0 100 200"
                className="absolute top-0 right-0 w-1/2 h-full opacity-80"
                initial={{ opacity: 0, pathLength: 0 }}
                animate={{ opacity: 1, pathLength: 1 }}
                transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
                 style={{ filter: "drop-shadow(0 0 8px rgba(255, 215, 0, 0.5))" }}
            >
                <motion.path
                    d="M 120 50 Q 50 100 80 200"
                    fill="none"
                    stroke="url(#goldGradientRight)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
                <defs>
                    <linearGradient id="goldGradientRight" x1="100%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stopColor="transparent" />
                        <stop offset="50%" stopColor="#FFD700" />
                        <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                </defs>
            </motion.svg>
            
            {/* Radial Golden Light Background */}
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,215,0,0.03),transparent_70%)] pointer-events-none"></div>
        </div>
    );
}
