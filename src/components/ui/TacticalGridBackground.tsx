"use client";

import React, { useEffect, useRef } from "react";
import { useTheme } from "next-themes";

export function TacticalGridBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let offset = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const isLight = resolvedTheme === "light";
      
      // Tactical colors
      const baseColor = isLight ? "#f0ebdc" : "#0f110f"; // Desert Tan vs Gunmetal
      const gridColor = isLight ? "rgba(40, 45, 35, 0.08)" : "rgba(100, 115, 85, 0.15)";
      const radarColor = isLight ? "rgba(220, 75, 25, 0.15)" : "rgba(150, 255, 0, 0.15)";
      const camoBlobColor = isLight ? "rgba(145, 155, 130, 0.1)" : "rgba(30, 40, 30, 0.4)";

      ctx.fillStyle = baseColor;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw subtle camo "blobs" moving slowly
      const time = Date.now() * 0.0002;
      for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        const x = canvas.width/2 + Math.sin(time + i * 2) * canvas.width * 0.4;
        const y = canvas.height/2 + Math.cos(time * 0.8 + i * 2) * canvas.height * 0.4;
        ctx.arc(x, y, Math.max(canvas.width, canvas.height) * 0.35, 0, Math.PI * 2);
        ctx.fillStyle = camoBlobColor;
        // Blur filter is heavy, so we just use big soft transparent circles or globalAlpha
        ctx.filter = "blur(80px)";
        ctx.fill();
        ctx.filter = "none";
      }

      // Draw tactical grid
      const gridSize = 60;
      ctx.lineWidth = 1;
      ctx.strokeStyle = gridColor;
      ctx.beginPath();
      for (let x = (offset * 0.5) % gridSize; x < canvas.width; x += gridSize) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
      }
      for (let y = (offset * 0.5) % gridSize; y < canvas.height; y += gridSize) {
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
      }
      ctx.stroke();

      // Draw sweeping radar
      const radarAngle = (Date.now() * 0.0015) % (Math.PI * 2);
      ctx.save();
      ctx.translate(canvas.width / 2, canvas.height / 2);
      ctx.rotate(radarAngle);
      
      // Radar line
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(0, -Math.max(canvas.width, canvas.height));
      ctx.strokeStyle = radarColor;
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Radar sweep wedge
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.arc(0, 0, Math.max(canvas.width, canvas.height), -Math.PI/2, -Math.PI/2 + 0.3);
      ctx.lineTo(0,0);
      ctx.fillStyle = isLight ? "rgba(220, 75, 25, 0.03)" : "rgba(150, 255, 0, 0.02)";
      ctx.fill();
      
      ctx.restore();

      // Crosshairs in center
      ctx.strokeStyle = radarColor;
      ctx.beginPath();
      ctx.moveTo(canvas.width/2 - 20, canvas.height/2);
      ctx.lineTo(canvas.width/2 + 20, canvas.height/2);
      ctx.moveTo(canvas.width/2, canvas.height/2 - 20);
      ctx.lineTo(canvas.width/2, canvas.height/2 + 20);
      ctx.stroke();
      
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, 10, 0, Math.PI*2);
      ctx.stroke();

      offset += 1;
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
      style={{ background: resolvedTheme === "light" ? "#f0ebdc" : "#0f110f" }}
    />
  );
}
