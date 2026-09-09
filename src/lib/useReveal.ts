import { useEffect } from 'react';

/**
 * Fades `.reveal` elements in as they enter the viewport.
 *
 * The hidden state lives under `.js-reveal` (set on <html> by `mount`), so if
 * the bundle never executes the content is simply visible. Anyone who has asked
 * for reduced motion, or whose browser lacks IntersectionObserver, gets the
 * same: everything shown at once, no animation.
 */
export function useReveal() {
  useEffect(() => {
    const elements = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !('IntersectionObserver' in window)) {
      elements.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;

          // Siblings cascade rather than all landing at once. Capped so a long
          // grid does not leave the last card waiting.
          const siblings = Array.from(el.parentElement?.children ?? []);
          const index = siblings.filter((node) => node.classList.contains('reveal')).indexOf(el);
          el.style.animationDelay = `${Math.min(Math.max(index, 0), 4) * 70}ms`;

          el.classList.add('is-visible');
          observer.unobserve(el);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}
