"use client";

import { useState, useEffect, useRef } from 'react';
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

type AnimatedProgressProps = {
  value: number;
  className?: string;
};

export function AnimatedProgress({ value, className }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const timer = setTimeout(() => setProgress(value), 300);
          return () => clearTimeout(timer);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [value]);

  return (
    <div ref={ref}>
      <Progress 
        value={progress} 
        className={cn("h-2 transition-all duration-1000 ease-out", className)} 
      />
    </div>
  );
}
