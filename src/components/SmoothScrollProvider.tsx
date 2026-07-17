"use client";

import { ReactNode, useEffect } from "react";
import Lenis from "lenis";

export const SmoothScrollProvider = ({ children }: { children: ReactNode }) => {
  useEffect(() => {
    // Only run on client side
    if (typeof window === "undefined") return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // https://www.desmos.com/calculator/brc1gd442r
      smoothWheel: true,
      syncTouch: false,
    });

    (window as any).lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    const handleResize = () => {
      lenis.resize();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", handleResize);
      if ((window as any).lenis === lenis) {
        (window as any).lenis = undefined;
      }
    };
  }, []);

  return <>{children}</>;
};
