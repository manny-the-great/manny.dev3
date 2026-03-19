"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion';

export const PageLoader = () => {
  const [loading, setLoading] = useState(true);
  
  // Mouse movement tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for the movement
  const springConfig = { damping: 25, stiffness: 150 };
  const avatarX = useSpring(useTransform(mouseX, [-500, 500], [-30, 30]), springConfig);
  const avatarY = useSpring(useTransform(mouseY, [-500, 500], [-30, 30]), springConfig);
  const rotateX = useSpring(useTransform(mouseY, [-500, 500], [15, -15]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-500, 500], [-15, 15]), springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate relative position from center
      const x = e.clientX - window.innerWidth / 2;
      const y = e.clientY - window.innerHeight / 2;
      mouseX.set(x);
      mouseY.set(y);
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Slightly longer for the effect
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timer);
    };
  }, [mouseX, mouseY]);

  return (
    <AnimatePresence mode="wait">
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-background flex flex-col items-center justify-center overflow-hidden font-[family-name:var(--font-bricolage)]"
        >
          {/* Subtle grid background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

          <div className="relative flex flex-col items-center">
            {/* 3D Cursor-Sensitive Avatar */}
            <motion.div
              style={{
                x: avatarX,
                y: avatarY,
                rotateX,
                rotateY,
                perspective: 1000,
              }}
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ 
                duration: 1, 
                ease: [0.16, 1, 0.3, 1],
                delay: 0.2
              }}
              className="w-48 h-48 mb-6 relative group"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] group-hover:bg-primary/30 transition-colors" />
              <img 
                src="/assets/loader-avatar.png" 
                alt="3D Manny" 
                className="w-full h-full object-contain relative z-10 drop-shadow-[0_20px_50px_rgba(189,255,1,0.3)]"
              />
            </motion.div>

            {/* Name */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl font-extrabold mb-8 tracking-tighter"
            >
              MANNY<span className="text-primary italic">.DEV</span>
            </motion.div>

            {/* Neon Bar Loader */}
            <div className="w-64 h-1.5 bg-foreground/10 rounded-full overflow-hidden relative backdrop-blur-sm">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.2, ease: "circIn" }}
                className="h-full bg-primary shadow-[0_0_20px_rgba(189,255,1,0.8)]"
              />
            </div>
            
            {/* Animated particles */}
            <div className="absolute inset-0 -z-10 pointer-events-none">
              {[...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    y: [0, -150],
                    x: [0, (i % 2 === 0 ? 80 : -80) * Math.random()],
                    opacity: [0, 0.8, 0],
                    scale: [0, 1.2, 0.8]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.2,
                    ease: "easeOut"
                  }}
                  className="absolute bottom-1/2 left-1/2 w-1 h-1 bg-primary/40 rounded-full blur-[1px]"
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
