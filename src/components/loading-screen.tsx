"use client";

import { useEffect, useState } from 'react';

export function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust duration as needed

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      document.getElementById('loading-screen')?.classList.add('opacity-0', 'pointer-events-none');
      document.getElementById('main-content')?.classList.remove('opacity-0');
    }
  }, [loading]);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-background z-50 flex items-center justify-center transition-opacity duration-1000"
    >
      <h1 className="text-5xl md:text-7xl font-black tracking-widest text-primary animate-pulse">
        HARSH
      </h1>
    </div>
  );
}
