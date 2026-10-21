import { useEffect, useRef, useState } from 'react';

interface UseRevealOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(options: UseRevealOptions = {}) {
  const ref = useRef<T>(null);
  const [hasRevealed, setHasRevealed] = useState(false);
  const { threshold = 0.08, rootMargin = '0px 0px -40px 0px' } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
      setHasRevealed(true);
      return;
    }

    let fallbackTimer: ReturnType<typeof setTimeout> | undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          window.requestAnimationFrame(() => {
            setHasRevealed(true);
          });
          observer.disconnect();
          if (fallbackTimer) clearTimeout(fallbackTimer);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    try {
      observer.observe(node);
      fallbackTimer = setTimeout(() => {
        setHasRevealed(true);
      }, 1200);
    } catch {
      setHasRevealed(true);
    }

    return () => {
      observer.disconnect();
      if (fallbackTimer) clearTimeout(fallbackTimer);
    };
  }, [threshold, rootMargin]);

  return { ref, hasRevealed };
}
