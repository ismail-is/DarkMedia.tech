"use client";

import { useEffect, useRef } from "react";

export default function BackgroundScene() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      draw();
    };

    const draw = () => {
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const drawRange = (
        pts: { x: number; y: number }[],
        fill: string,
        fog: string
      ) => {
        ctx.beginPath();
        ctx.moveTo(0, h);
        pts.forEach(p => ctx.lineTo(p.x * w, p.y * h));
        ctx.lineTo(w, h);
        ctx.closePath();
        const g = ctx.createLinearGradient(0, h * 0.35, 0, h);
        g.addColorStop(0, fill);
        g.addColorStop(0.65, fog);
        g.addColorStop(1, "rgba(246,246,246,0)");
        ctx.fillStyle = g;
        ctx.fill();
      };

      // Layer 1 — very distant, barely visible
      drawRange(
        [
          { x:0,    y:0.60 }, { x:0.10, y:0.50 }, { x:0.20, y:0.57 },
          { x:0.32, y:0.43 }, { x:0.44, y:0.52 }, { x:0.57, y:0.41 },
          { x:0.68, y:0.53 }, { x:0.80, y:0.46 }, { x:1.0,  y:0.58 },
        ],
        "rgba(185,185,185,0.10)",
        "rgba(240,240,240,0.03)"
      );

      // Layer 2 — mid distance
      drawRange(
        [
          { x:0,    y:0.74 }, { x:0.08, y:0.64 }, { x:0.18, y:0.71 },
          { x:0.28, y:0.57 }, { x:0.40, y:0.66 }, { x:0.52, y:0.54 },
          { x:0.63, y:0.64 }, { x:0.76, y:0.59 }, { x:0.88, y:0.67 },
          { x:1.0,  y:0.72 },
        ],
        "rgba(165,165,165,0.16)",
        "rgba(238,238,238,0.06)"
      );

      // Layer 3 — close, most visible
      drawRange(
        [
          { x:0,    y:0.88 }, { x:0.09, y:0.77 }, { x:0.20, y:0.84 },
          { x:0.30, y:0.71 }, { x:0.42, y:0.79 }, { x:0.53, y:0.68 },
          { x:0.64, y:0.78 }, { x:0.76, y:0.73 }, { x:0.88, y:0.81 },
          { x:1.0,  y:0.86 },
        ],
        "rgba(145,145,145,0.22)",
        "rgba(232,232,232,0.10)"
      );

      // Fog at the base
      const fog = ctx.createLinearGradient(0, h * 0.68, 0, h);
      fog.addColorStop(0, "rgba(246,246,246,0)");
      fog.addColorStop(0.45, "rgba(246,246,246,0.45)");
      fog.addColorStop(1, "rgba(246,246,246,0.9)");
      ctx.fillStyle = fog;
      ctx.fillRect(0, 0, w, h);
    };

    resize();
    window.addEventListener("resize", resize);
    return () => window.removeEventListener("resize", resize);
  }, []);

  return (
    <>
      {/* Mountains canvas */}
      <canvas
        ref={canvasRef}
        style={{
          position:"absolute", bottom:0, left:0, right:0,
          width:"100%", height:"65%",
          pointerEvents:"none", zIndex:0,
        }}
      />

      {/* SVG geometric lines — pure black/grey, no orange */}
      <svg
        style={{
          position:"absolute", inset:0,
          width:"100%", height:"100%",
          pointerEvents:"none", zIndex:0,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Large circles around sphere area */}
        <circle cx="62%" cy="45%" r="340" stroke="rgba(0,0,0,0.035)" strokeWidth="0.7" fill="none"/>
        <circle cx="62%" cy="45%" r="440" stroke="rgba(0,0,0,0.025)" strokeWidth="0.5" fill="none"/>
        <circle cx="62%" cy="45%" r="540" stroke="rgba(0,0,0,0.018)" strokeWidth="0.5" fill="none"/>

        {/* Horizontal rule */}
        <line x1="0" y1="50%" x2="100%" y2="50%" stroke="rgba(0,0,0,0.03)" strokeWidth="0.6"/>

        {/* Diagonal lines */}
        <line x1="0"    y1="0"    x2="28%"  y2="100%" stroke="rgba(0,0,0,0.025)" strokeWidth="0.4"/>
        <line x1="100%" y1="0"    x2="72%"  y2="100%" stroke="rgba(0,0,0,0.025)" strokeWidth="0.4"/>

        {/* Cross-hair on sphere area */}
        <line x1="62%" y1="0"    x2="62%"  y2="100%" stroke="rgba(0,0,0,0.02)" strokeWidth="0.4"/>

        {/* Grid dots — subtle */}
        {[20,40,60,80].map(cx =>
          [25,50,75].map(cy => (
            <circle
              key={`${cx}-${cy}`}
              cx={`${cx}%`} cy={`${cy}%`}
              r="1.2"
              fill="rgba(0,0,0,0.06)"
            />
          ))
        )}
      </svg>

      {/* Soft left-side radial glow */}
      <div style={{
        position:"absolute", top:"10%", left:"-5%",
        width:"45%", height:"70%",
        background:"radial-gradient(ellipse at top left, rgba(255,255,255,0.75) 0%, transparent 65%)",
        pointerEvents:"none", zIndex:0,
      }}/>

      {/* Animated ink-blot blob */}
      <div style={{
        position:"absolute", top:"20%", left:"8%",
        width:"280px", height:"280px", borderRadius:"50%",
        background:"radial-gradient(ellipse, rgba(220,220,220,0.18) 0%, rgba(220,220,220,0.08) 40%, transparent 60%)",
        animation:"blob-drift 14s ease-in-out infinite",
        pointerEvents:"none", zIndex:0,
        willChange: "transform",
      }}/>

      {/* Film grain noise layer */}
      <div className="noise-overlay" />
    </>
  );
}
