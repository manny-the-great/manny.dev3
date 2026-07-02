"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let stars: { x: number; y: number; radius: number; opacity: number; fadeDir: number; speed: number }[] = [];

    const isLight = resolvedTheme === "light";

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initStars();
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 10000); // adjust density
      for (let i = 0; i < numStars; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: Math.random() * 1.5 + 0.5,
          opacity: Math.random(),
          fadeDir: Math.random() > 0.5 ? 1 : -1,
          speed: Math.random() * 0.02 + 0.005,
        });
      }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = isLight ? "#fafafa" : "#050505";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        // Twinkle effect
        star.opacity += star.speed * star.fadeDir;
        if (star.opacity <= 0.1) {
          star.opacity = 0.1;
          star.fadeDir = 1;
        } else if (star.opacity >= 1) {
          star.opacity = 1;
          star.fadeDir = -1;
        }

        // Slight drift upwards (optional, like dust/snow)
        star.y -= star.speed * 10;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? `rgba(0, 0, 0, ${star.opacity * 0.5})`
          : `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [resolvedTheme]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none transition-colors duration-300"
      style={{ background: resolvedTheme === "light" ? "#fafafa" : "#050505" }}
    />
  );
}
