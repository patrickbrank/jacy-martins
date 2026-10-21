import { useEffect, useRef } from 'react';

interface UseParallaxOptions {
  speed?: number;
  maxOffset?: number;
}

export function useParallax<T extends HTMLElement = HTMLDivElement>(
  options: UseParallaxOptions = {}
) {
  const ref = useRef<T>(null);
  const { speed = 0.1, maxOffset = 50 } = options;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let isVisible = false;
    let ticking = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updateTransform();
        }
      },
      { threshold: 0 }
    );

    observer.observe(node);

    const updateTransform = () => {
      if (!isVisible || !node) return;

      const rect = node.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const elementCenter = rect.top + rect.height / 2;
      const screenCenter = windowHeight / 2;
      const distanceFromCenter = elementCenter - screenCenter;

      let offset = distanceFromCenter * speed;
      if (maxOffset > 0) {
        offset = Math.max(-maxOffset, Math.min(maxOffset, offset));
      }

      node.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      ticking = false;
    };

    const onScroll = () => {
      if (!isVisible) return;
      if (!ticking) {
        window.requestAnimationFrame(updateTransform);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (node) {
        node.style.transform = '';
      }
    };
  }, [speed, maxOffset]);

  return ref;
}
