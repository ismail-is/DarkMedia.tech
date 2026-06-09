"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const serviceCards = [
  { label: "Web Development", animName: "float-1", delay: 0,   dur: 5.5 },
  { label: "Videography",     animName: "float-2", delay: 0.8, dur: 6.2 },
  { label: "Graphic Design",  animName: "float-3", delay: 1.4, dur: 5.0 },
  { label: "Branding",        animName: "float-4", delay: 2.0, dur: 6.8 },
];

const cardPositions: React.CSSProperties[] = [
  { top:  "8%",  right: "6%"  },
  { top:  "38%", right: "-4%" },
  { bottom:"26%",left:  "4%"  },
  { bottom:"8%", right: "14%" },
];

export default function LogoVisual() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rotateX = useSpring(useMotionValue(0), { stiffness: 35, damping: 18 });
  const rotateY = useSpring(useMotionValue(0), { stiffness: 35, damping: 18 });
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Slight delay so SSR hydration doesn't conflict
    const t = setTimeout(() => setReady(true), 100);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top  + rect.height / 2;
      const nx = (e.clientX - cx) / (rect.width  / 2);
      const ny = (e.clientY - cy) / (rect.height / 2);
      rotateX.set(-ny * 9);
      rotateY.set( nx * 9);
    };
    const onLeave = () => {
      rotateX.set(0);
      rotateY.set(0);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [rotateX, rotateY]);

  return (
    <div
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        perspective: "1200px",
      }}
    >
      {/* ── Far orbital ring ── */}
      <div
        style={{
          position: "absolute",
          width: "var(--orbit-far-size, 580px)",
          height: "var(--orbit-far-size, 580px)",
          borderRadius: "50%",
          border: "1px solid rgba(0,0,0,0.06)",
          animation: "orbit-cw 28s linear infinite",
          pointerEvents: "none",
        }}
      >
        {/* dot on ring */}
        <div style={{
          position:"absolute", top:"-4px", left:"50%",
          width:"7px", height:"7px", borderRadius:"50%",
          background:"#000", transform:"translateX(-50%)",
          boxShadow:"0 0 10px rgba(0,0,0,0.4)",
        }}/>
      </div>

      {/* ── Mid orbital ring ── */}
      <div
        style={{
          position: "absolute",
          width: "var(--orbit-mid-size, 460px)",
          height: "var(--orbit-mid-size, 460px)",
          borderRadius: "50%",
          border: "0.8px solid rgba(0,0,0,0.08)",
          animation: "orbit-ccw 18s linear infinite",
          transform: "rotateX(70deg)",
          pointerEvents: "none",
        }}
      >
        <div style={{
          position:"absolute", bottom:"-3px", left:"50%",
          width:"5px", height:"5px", borderRadius:"50%",
          background:"#555", transform:"translateX(-50%)",
        }}/>
      </div>

      {/* ── Inner orbit ── */}
      <div
        style={{
          position: "absolute",
          width: "var(--orbit-inner-size, 360px)",
          height: "var(--orbit-inner-size, 360px)",
          borderRadius: "50%",
          border: "0.5px solid rgba(0,0,0,0.05)",
          animation: "orbit-cw 36s linear infinite reverse",
          pointerEvents: "none",
        }}
      />

      {/* ── Main Logo Visual (Mouse-Tilt Outer) ── */}
      <motion.div
        style={{
          position: "relative",
          width: "var(--sphere-size, 380px)",
          height: "var(--sphere-size, 380px)",
          borderRadius: "50%",
          animation: "logo-breathe 7s ease-in-out infinite",
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180, damping: 20 }}
      >
        {/* ── Inner Rotating Visual (Scroll Parallax & Rotation target) ── */}
        <div
          id="hero-sphere-inner"
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "50%",
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {/* ── Glowing aura behind the sphere (White Glow) ── */}
          <div
            style={{
              position: "absolute",
              inset: "-25px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 50%, transparent 75%)",
              filter: "blur(24px)",
              pointerEvents: "none",
              zIndex: -1,
            }}
          />

          {/* ── Secondary ambient soft dark shadow backing ── */}
          <div
            style={{
              position: "absolute",
              inset: "-35px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(0,0,0,0.12) 0%, transparent 70%)",
              filter: "blur(32px)",
              pointerEvents: "none",
              zIndex: -2,
            }}
          />

          {/* ── Circle base (Split Half White and Half Black) ── */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              borderRadius: "50%",
              overflow: "hidden",
              background: "linear-gradient(to right, #ffffff 50%, #000000 50%)",
              boxShadow: `
                0 50px 120px rgba(0,0,0,0.22),
                0 20px 60px  rgba(0,0,0,0.15),
                0  4px 20px  rgba(0,0,0,0.10),
                inset 0 0 60px rgba(255,255,255,0.2),
                inset 0 -30px 40px rgba(0,0,0,0.4)
              `,
              border: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            {/* Spherical Shadow Overlay (Multiplied for 3D depth) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.75) 100%)",
                mixBlendMode: "multiply",
                pointerEvents: "none",
              }}
            />

            {/* Spherical Highlight Overlay (Screened for 3D glass gloss) */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                background: "radial-gradient(circle at 35% 35%, rgba(255,255,255,0.45) 0%, transparent 60%)",
                mixBlendMode: "screen",
                pointerEvents: "none",
              }}
            />

            {/* Glowing Vertical Split Line */}
            <div
              style={{
                position: "absolute",
                top: 0,
                bottom: 0,
                left: "50%",
                width: "1.5px",
                background: "linear-gradient(to bottom, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0.95) 50%, rgba(255,255,255,0.2) 100%)",
                boxShadow: "0 0 12px rgba(255,255,255,0.9), 0 0 6px rgba(255,255,255,0.4)",
                transform: "translateX(-50%)",
                pointerEvents: "none",
              }}
            />

            {/* Shimmer sweep */}
            <div
              style={{
                position:"absolute", inset:0,
                overflow:"hidden",
                borderRadius:"50%",
                pointerEvents:"none",
              }}
            >
              <div
                style={{
                  position:"absolute",
                  top:0, bottom:0,
                  width:"40%",
                  background:"linear-gradient(90deg,transparent,rgba(255,255,255,0.35),transparent)",
                  animation:"shimmer-sweep 4s ease 1.8s infinite",
                }}
              />
            </div>
          </div>

          {/* ── Floating particles ── */}
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width:  `${1.5 + (i % 3) * 1.2}px`,
                height: `${1.5 + (i % 3) * 1.2}px`,
                borderRadius: "50%",
                background: i % 3 === 0 ? "#111" : i % 3 === 1 ? "#666" : "#aaa",
                top:  `${12 + (i * 13) % 74}%`,
                left: `${8  + (i * 19) % 82}%`,
                animation: `particle-drift ${4.2 + i * 0.6}s ease-in-out ${i * 0.45}s infinite`,
                opacity: 0.55,
                pointerEvents: "none",
              }}
            />
          ))}

          {/* ── Ground shadow ── */}
          <div
            style={{
              position: "absolute",
              bottom: "-38px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "300px",
              height: "36px",
              borderRadius: "50%",
              background: "radial-gradient(ellipse, rgba(0,0,0,0.13) 0%, transparent 70%)",
              filter: "blur(12px)",
              pointerEvents: "none",
            }}
          />
        </div>
      </motion.div>

      {/* ── Floating Service Cards (Old Keep layout) ── */}
      {ready && serviceCards.map((card, i) => (
        <motion.div
          key={card.label}
          initial={{ opacity: 0, scale: 0.8, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            delay: 1.0 + card.delay,
            duration: 0.7,
            ease: [0.25, 0.46, 0.45, 0.94],
          }}
          className="service-card glass"
          style={{
            position: "absolute",
            ...cardPositions[i],
            animation: `${card.animName} ${card.dur}s ease-in-out ${card.delay}s infinite`,
            boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
            zIndex: 10,
          }}
        >
          <span style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "10.5px",
            fontWeight: "600",
            letterSpacing: "0.05em",
            color: "#000",
          }}>
            {card.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
}
