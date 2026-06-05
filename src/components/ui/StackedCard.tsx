"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

/**
 * Section wrapper — replaces the old sticky StackedCard.
 * Each section fades up smoothly as it enters the viewport.
 * No sticky positioning, no scroll-jacking, no overlapping cards.
 */
export const StackedCard = ({
  children,
  isLast = false,
}: {
  children: React.ReactNode;
  isLast?: boolean;
  /** @deprecated kept for API compat — has no effect */
  zIndex?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="w-full"
    >
      {/* Thin section divider above every section except the last */}
      {!isLast && (
        <div className="section-divider max-w-7xl mx-auto px-4" />
      )}
      <div className="w-full py-4 md:py-6">
        {children}
      </div>
    </motion.div>
  );
};
