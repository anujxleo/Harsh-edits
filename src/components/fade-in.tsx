"use client";

import { useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';

type FadeInProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
};

export function FadeIn({ children, className, as: Component = 'div' }: FadeInProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove('opacity-0', 'translate-y-10');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <Component
      ref={ref}
      className={cn('opacity-0 translate-y-10 transition-all duration-1000 ease-in-out', className)}
    >
      {children}
    </Component>
  );
}
