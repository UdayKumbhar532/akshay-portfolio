import { useEffect, useRef, useState } from 'react';

/**
 * Custom hook to detect when an element scrolls into viewport
 * using IntersectionObserver. Stays visible once triggered.
 */
export function useScrollReveal(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // If window or IntersectionObserver not available (SSR), default to visible
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const { threshold = 0.12, rootMargin = '0px 0px -40px 0px' } = options;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      }
    }, { threshold, rootMargin });

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return [ref, isVisible];
}

/**
 * Hook to animate a count-up number when triggered
 * In SSR, returns targetValue immediately for SEO & accessibility
 */
export function useCountUp(targetValue, duration = 1600, startTrigger = true, decimals = 0) {
  const [count, setCount] = useState(() => {
    if (typeof window === 'undefined') return targetValue;
    return 0;
  });

  useEffect(() => {
    if (!startTrigger || typeof window === 'undefined') return;

    let startTime = null;
    let animationFrameId;

    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easedProgress = easeOutCubic(progress);
      
      const current = easedProgress * targetValue;
      setCount(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(targetValue);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetValue, duration, startTrigger, decimals]);

  return count;
}
