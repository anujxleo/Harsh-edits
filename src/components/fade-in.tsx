"use client";

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: React.ElementType;
};

export function FadeIn({ children, className, delay = 0, as: Component = 'div' }: FadeInProps) {
  const ref = useRef<any>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
            // Add a small initial delay before starting animation logic if needed,
            // or rely on transition-delay style below.
            // But modifying classes immediately might start transition.
            // With transition-delay, it should wait.
            
          element.classList.remove('opacity-0', 'translate-y-8', 'scale-95');
          // We don't necessarily need 'is-visible' if we just remove the hiding classes, 
          // assuming default is visible. But keeping previous logic for safety.
          element.classList.add('is-visible'); 
          observer.unobserve(element);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => {
      observer.unobserve(element);
    };
  }, []);

  return (
    <Component
      ref={ref}
      style={{ transitionDelay: `${delay}s` }}
      className={cn('opacity-0 translate-y-8 scale-95 transition-all duration-700 ease-out', className)}
    >
      {children}
    </Component>
  );
}
