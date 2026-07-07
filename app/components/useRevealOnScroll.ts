"use client";

import { RefObject, useEffect } from "react";

export default function useRevealOnScroll(containerRef: RefObject<HTMLElement | null>) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const targets = Array.from(container.querySelectorAll<HTMLElement>("[data-reveal]"));

    if (reducedMotion) {
      targets.forEach((target) => target.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        threshold: 0.14,
        rootMargin: "0px 0px -8% 0px",
      }
    );

    targets.forEach((target, index) => {
      target.style.setProperty("--reveal-delay", `${Math.min(index * 45, 220)}ms`);
      observer.observe(target);
    });

    return () => observer.disconnect();
  }, [containerRef]);
}
