"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const StackedCard = ({
  children,
  isLast = false,
  zIndex = 1,
}: {
  children: React.ReactNode;
  isLast?: boolean;
  zIndex?: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [topOffset, setTopOffset] = useState("0px");

  useEffect(() => {
    const updateTop = () => {
      if (cardRef.current) {
        const height = cardRef.current.offsetHeight;
        const windowHeight = window.innerHeight;
        // If content is taller than viewport, stick to bottom so we can read it all
        if (height > windowHeight) {
          setTopOffset(`${windowHeight - height}px`);
        } else {
          // If it fits, sticky to top with a slight margin so it looks like a stacked card
          // The margin can be small, or 0 if we want full bleed.
          // Let's use 24px so it looks like cards stacking slightly down.
          // But actually, perfect 0px overlapping is very premium. We will use 0px.
          setTopOffset("0px");
        }
      }
    };
    updateTop();
    window.addEventListener("resize", updateTop);
    return () => window.removeEventListener("resize", updateTop);
  }, []);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    // Tracks when this element reaches top, until the next element covers it
    offset: ["start start", "end start"],
  });

  // If it's the last card, don't scale or fade because nothing comes after it
  const scale = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.94]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, isLast ? 1 : 0.65]);

  return (
    <div
      ref={cardRef}
      className="sticky w-full flex items-center justify-center"
      style={{
        top: topOffset,
        zIndex,
      }}
    >
      <motion.div
        style={{
          scale,
          opacity,
        }}
        className="w-full h-full transform-gpu flex flex-col items-center justify-center p-4 md:p-6"
      >
        <div className="w-full max-w-7xl mx-auto rounded-[32px] border border-white/10 bg-background/60 backdrop-blur-3xl shadow-[0_25px_80px_rgba(0,0,0,0.4)] relative overflow-hidden flex flex-col">
          {children}
        </div>
      </motion.div>
    </div>
  );
};
