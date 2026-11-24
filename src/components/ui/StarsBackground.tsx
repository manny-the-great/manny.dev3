"use client";

import React, { useEffect, useRef } from "react";

export function StarsBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let animationFrameId: number;
    let starColor = "255, 255, 255";
    const updateStarColor = () => {
      starColor = document.documentElement.classList.contains("light")
        ? "24, 35, 44"
        : "255, 255, 255";
    };
    let stars: { x: number; y: number; radius: number; opacity: number; fadeDir: number; speed: number }[] = [];

    let lastWidth = 0;
    const resizeCanvas = () => {
      const currentWidth = window.innerWidth;
      const currentHeight = window.innerHeight;
      
      canvas.width = currentWidth;
      canvas.height = currentHeight;
      
      if (currentWidth !== lastWidth) {
        initStars();
        lastWidth = currentWidth;
      }
    };

    const initStars = () => {
      stars = [];
      const numStars = Math.floor((canvas.width * canvas.height) / 10000);
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

        // Slight drift upwards
        star.y -= star.speed * 10;
        if (star.y < 0) {
          star.y = canvas.height;
          star.x = Math.random() * canvas.width;
        }

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${starColor}, ${star.opacity * 0.45})`;
        ctx.fill();
      });

      if (!reducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    };

    const handleResize = () => {
      resizeCanvas();
      if (reducedMotion) render();
    };

    window.addEventListener("resize", handleResize);
    const themeObserver = new MutationObserver(updateStarColor);
    themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });
    updateStarColor();
    resizeCanvas();
    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      themeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-50 pointer-events-none bg-background"
    />
  );
}
