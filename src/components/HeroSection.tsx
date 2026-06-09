"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import dynamic from "next/dynamic";
import MagneticButton from "./MagneticButton";

const LogoVisual   = dynamic(() => import("./LogoSphere"),      { ssr: false });
const BackgroundScene = dynamic(() => import("./BackgroundScene"), { ssr: false });

// ── animation variants ──────────────────────────────────────────────────────
const container: Variants = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};

const reveal: Variants = {
  hidden:  { y: "108%", opacity: 0 },
  visible: {
    y: "0%", opacity: 1,
    transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] },
  },
};

const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 24 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] },
  },
};

const stats = [
  { num: "150+", label: "Projects" },
  { num: "8+",   label: "Years"    },
  { num: "50+",  label: "Clients"  },
  { num: "12",   label: "Awards"   },
];

// ── component ───────────────────────────────────────────────────────────────
export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView   = useInView(sectionRef, { once: true });

  /* smooth staggered parallax and scroll-controlled 3D rotation */
  useEffect(() => {
    let ticking = false;

    const updateParallax = () => {
      const y = window.scrollY;
      const h1 = document.getElementById("hero-headline-1");
      const h2 = document.getElementById("hero-headline-2");
      const h3 = document.getElementById("hero-headline-3");
      const sub = document.getElementById("hero-sub");
      const s = document.getElementById("hero-sphere");
      const inner = document.getElementById("hero-sphere-inner");
      const b = document.getElementById("hero-bg-text");
      
      if (h1) h1.style.transform = `translateY(${y * 0.05}px) translateZ(0)`;
      if (h2) h2.style.transform = `translateY(${y * 0.11}px) translateZ(0)`;
      if (h3) h3.style.transform = `translateY(${y * 0.17}px) translateZ(0)`;
      if (sub) {
        sub.style.transform = `translateY(${y * 0.08}px) translateZ(0)`;
        sub.style.opacity = `${Math.max(0, 1 - y / 480)}`;
      }
      if (s) s.style.transform = `translateY(${y * -0.07}px) translateZ(0)`;
      if (inner) {
        inner.style.transform = `rotateY(${y * 0.35}deg) rotateZ(${y * 0.08}deg) translateZ(0)`;
      }
      if (b) b.style.transform = `translateY(${y * 0.05}px) translateZ(0)`;
      
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="hero-section"
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "680px",
        background: "#F6F6F6",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* ── Background scene (mountains + geometry) ── */}
      <BackgroundScene />

      {/* ── Giant watermark text (background layer) ── */}
      <div
        id="hero-bg-text"
        style={{
          position: "absolute",
          bottom: "8%",
          left: "-2%",
          fontFamily: "'Playfair Display', serif",
          fontSize: "clamp(100px, 16vw, 240px)",
          fontWeight: "900",
          letterSpacing: "-0.06em",
          color: "transparent",
          WebkitTextStroke: "1px rgba(0,0,0,0.055)",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 1,
          whiteSpace: "nowrap",
          lineHeight: 1,
        }}
      >
        Dark Media
      </div>

      {/* ── Horizontal thin accent lines ── */}
      <div style={{
        position:"absolute", top:"50%", left:0, right:0,
        height:"1px", background:"rgba(0,0,0,0.04)",
        zIndex:1, pointerEvents:"none",
      }}/>
      <div style={{
        position:"absolute", top:"30%", left:0, right:0,
        height:"1px", background:"rgba(0,0,0,0.03)",
        zIndex:1, pointerEvents:"none",
      }}/>

      {/* ── MAIN GRID ── */}
      <div
        className="hero-grid"
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "grid",
          gridTemplateColumns: "1fr 1.15fr",
          alignItems: "center",
          maxWidth: "1560px",
          width: "100%",
          margin: "0 auto",
          padding: "96px 56px 24px",
          gap: "0px",
        }}
      >

        {/* ════════ LEFT ════════ */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          style={{ display:"flex", flexDirection:"column", gap:0 }}
        >

          {/* Agency pill */}
          <motion.div variants={fadeUp} style={{ marginBottom:"28px" }}>
            <div style={{
              display:"inline-flex", alignItems:"center", gap:"8px",
              padding:"7px 16px", borderRadius:"100px",
              border:"1px solid rgba(0,0,0,0.1)",
              background:"rgba(255,255,255,0.6)",
              backdropFilter:"blur(12px)",
            }}>
              <span className="label-dot" />
              <span style={{
                fontFamily:"var(--font-sans,'Inter',sans-serif)",
                fontSize:"9.5px", fontWeight:"600",
                letterSpacing:"0.18em", textTransform:"uppercase", color:"#444",
              }}>
                Digital Creative Agency
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <div id="hero-headline" style={{ marginBottom:"30px" }}>
            {["Build.", "Brand.", "Impact."].map((word, i) => (
              <div key={word} style={{ overflow:"hidden", lineHeight:"0.92" }}>
                <motion.h1
                  variants={reveal}
                  id={`hero-headline-${i + 1}`}
                  style={{
                    fontFamily:"'Playfair Display', serif",
                    fontSize:"clamp(58px, 7.4vw, 108px)",
                    fontWeight: i === 2 ? "800" : "900",
                    fontStyle:  i === 2 ? "italic" : "normal",
                    letterSpacing: i === 2 ? "-0.04em" : "-0.03em",
                    color: "#000",
                    margin: 0, padding: 0, display:"block",
                    willChange: "transform",
                  }}
                >
                  {word}
                </motion.h1>
              </div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            variants={fadeUp}
            style={{ display:"flex", alignItems:"center", gap:"16px", marginBottom:"22px" }}
          >
            <div style={{ width:"36px", height:"1px", background:"#000" }}/>
            <span style={{
              fontFamily:"var(--font-sans,'Inter',sans-serif)",
              fontSize:"9px", fontWeight:"600",
              letterSpacing:"0.18em", textTransform:"uppercase", color:"#888",
            }}>
              Est. 2016
            </span>
          </motion.div>

          {/* Sub-copy */}
          <motion.p
            variants={fadeUp}
            id="hero-sub"
            style={{
              fontFamily:"var(--font-sans,'Inter',sans-serif)",
              fontSize:"14.5px", fontWeight:"400",
              lineHeight:"1.8", color:"#555",
              maxWidth:"360px", marginBottom:"40px",
              letterSpacing:"0.01em",
              willChange: "transform, opacity",
            }}
          >
            We craft premium websites, branding systems, graphic design,
            videography, and digital experiences that help ambitious
            businesses stand out.
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            style={{ display:"flex", alignItems:"center", gap:"14px", flexWrap:"wrap", marginBottom:"48px" }}
          >
            <MagneticButton href="#work" className="btn-primary ">
              <span style={{ display:"flex", alignItems:"center", gap:"10px" }}>
                <span>Explore Our Work</span>
                <span style={{
                  width:"20px", height:"20px",
                  background:"rgba(255,255,255,0.14)", borderRadius:"50%",
                  display:"flex", alignItems:"center", justifyContent:"center", fontSize:"10px",
                }}>↗</span>
              </span>
            </MagneticButton>

            {/* Showreel */}
            <motion.button
              whileHover={{ scale:1.04 }}
              whileTap={{ scale:0.96 }}
              style={{
                display:"flex", alignItems:"center", gap:"12px",
                background:"transparent", border:"none",
                cursor:"pointer", padding:0,
                fontFamily:"var(--font-sans,'Inter',sans-serif)",
                fontSize:"10px", fontWeight:"600",
                letterSpacing:"0.14em", textTransform:"uppercase", color:"#000",
              }}
            >
              <div
                style={{
                  width:"44px", height:"44px", borderRadius:"50%",
                  border:"1.5px solid rgba(0,0,0,0.18)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  transition:"all 0.3s ease",
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget as HTMLElement;
                  t.style.background = "#000";
                  t.style.borderColor = "#000";
                  t.style.color = "#fff";
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget as HTMLElement;
                  t.style.background = "transparent";
                  t.style.borderColor = "rgba(0,0,0,0.18)";
                  t.style.color = "#000";
                }}
              >
                <svg width="11" height="13" viewBox="0 0 11 13" fill="currentColor">
                  <path d="M0 1.4C0 0.46 1 0 1.72 0.5L10.4 5.6C11.1 6.06 11.1 6.94 10.4 7.4L1.72 12.5C1 13 0 12.54 0 11.6V1.4Z"/>
                </svg>
              </div>
              <span>Watch Showreel</span>
            </motion.button>
          </motion.div>

          {/* Social row */}
          <motion.div variants={fadeUp} style={{ display:"flex", alignItems:"center", gap:"16px" }}>
            <span style={{
              fontFamily:"var(--font-sans,'Inter',sans-serif)",
              fontSize:"8.5px", fontWeight:"600",
              letterSpacing:"0.2em", textTransform:"uppercase", color:"#aaa",
            }}>
              Follow —
            </span>
            {[
              { label:"Be",  href:"#" },
              { label:"IG",  href:"#" },
              { label:"Li",  href:"#" },
            ].map(s => (
              <motion.a
                key={s.label}
                href={s.href}
                whileHover={{ scale:1.14, y:-2 }}
                style={{
                  width:"32px", height:"32px", borderRadius:"50%",
                  border:"1px solid rgba(0,0,0,0.12)",
                  display:"flex", alignItems:"center", justifyContent:"center",
                  textDecoration:"none", color:"#000",
                  fontSize:"9.5px", fontWeight:"700",
                  fontFamily:"Inter,sans-serif",
                  transition:"all 0.3s ease",
                }}
                onMouseEnter={e => {
                  const t = e.currentTarget as HTMLElement;
                  t.style.background = "#000";
                  t.style.color = "#fff";
                  t.style.borderColor = "#000";
                }}
                onMouseLeave={e => {
                  const t = e.currentTarget as HTMLElement;
                  t.style.background = "transparent";
                  t.style.color = "#000";
                  t.style.borderColor = "rgba(0,0,0,0.12)";
                }}
              >
                {s.label}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* ════════ RIGHT: Logo Visual ════════ */}
        <motion.div
          id="hero-sphere"
          className="hero-sphere-container"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.3, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{
            position: "relative",
            height: "620px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <LogoVisual />
        </motion.div>
      </div>

      {/* ── Scroll indicator (right-edge) ── */}
      <motion.div
        initial={{ opacity:0 }}
        animate={{ opacity:1 }}
        transition={{ delay:2.6, duration:0.9 }}
        style={{
          position:"absolute",
          right:"28px",
          top:"50%",
          transform:"translateY(-50%)",
          zIndex:5,
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          gap:"14px",
        }}
      >
        <span className="scroll-indicator">Scroll to Explore</span>
        <div style={{
          width:"1px", height:"56px",
          background:"linear-gradient(to bottom, rgba(0,0,0,0.25), rgba(0,0,0,0.05))",
        }}/>
        <motion.div
          animate={{ y:[0, 8, 0] }}
          transition={{ duration:1.6, repeat:Infinity, ease:"easeInOut" }}
          style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#000" }}
        />
      </motion.div>

      {/* ── STATS BAR ── */}
      <motion.div
        initial={{ opacity:0, y:18 }}
        animate={{ opacity:1, y:0 }}
        transition={{ delay:1.8, duration:0.85, ease:[0.16,1,0.3,1] }}
        className="stats-bar"
        style={{
          position:"relative",
          zIndex:3,
          borderTop:"1px solid rgba(0,0,0,0.07)",
          padding:"16px 56px",
          maxWidth:"1560px",
          width:"100%",
          margin:"0 auto",
          display:"flex",
          alignItems:"center",
          justifyContent:"space-between",
          background:"rgba(255,255,255,0.55)",
          backdropFilter:"blur(16px)",
        }}
      >
        {stats.map((s, i) => (
          <div key={s.num} style={{ display:"flex", alignItems:"center", gap:"12px" }}>
            {i > 0 && (
              <div className="stats-bar-divider" style={{ width:"1px", height:"28px", background:"rgba(0,0,0,0.08)", marginRight:"12px" }}/>
            )}
            <span style={{
              fontFamily:"'Playfair Display',serif",
              fontSize:"22px", fontWeight:"700",
              color:"#000", letterSpacing:"-0.03em",
            }}>
              {s.num}
            </span>
            <span style={{
              fontFamily:"var(--font-sans,'Inter',sans-serif)",
              fontSize:"9.5px", fontWeight:"500",
              letterSpacing:"0.12em", textTransform:"uppercase", color:"#999",
            }}>
              {s.label}
            </span>
          </div>
        ))}

        {/* Available badge */}
        <motion.div
          animate={{
            boxShadow: [
              "0 0 0 0 rgba(0,0,0,0.08)",
              "0 0 0 6px rgba(0,0,0,0)",
              "0 0 0 0 rgba(0,0,0,0.08)",
            ],
          }}
          transition={{ duration:2.2, repeat:Infinity }}
          style={{
            display:"flex", alignItems:"center", gap:"8px",
            padding:"8px 18px", borderRadius:"100px",
            background:"#000", color:"#fff",
            fontSize:"9.5px",
            fontFamily:"var(--font-sans,'Inter',sans-serif)",
            fontWeight:"600", letterSpacing:"0.1em", textTransform:"uppercase",
          }}
        >
          <motion.div
            animate={{ opacity:[1, 0.3, 1] }}
            transition={{ duration:1.4, repeat:Infinity }}
            style={{ width:"5px", height:"5px", borderRadius:"50%", background:"#fff" }}
          />
          <span>Available for Projects</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
