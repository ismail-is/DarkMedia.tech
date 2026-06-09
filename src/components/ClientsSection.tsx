"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

// ── HIGH-FIDELITY CLIENT LOGOS ───────────────────────────────────────────────

function SamsungLogo() {
  return (
    <span style={{
      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
      fontSize: "18.5px",
      fontWeight: "900",
      letterSpacing: "0.06em",
      color: "#000",
    }}>
      SAMSUNG
    </span>
  );
}

function GoogleLogo() {
  return (
    <span style={{
      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
      fontSize: "20px",
      fontWeight: "700",
      letterSpacing: "-0.03em",
      color: "#000",
    }}>
      Google
    </span>
  );
}

// ... Nike, CocaCola, Lenovo, Microsoft, Bose, Airbnb, Uber, Dropbox components ...
// (We keep them identical, so we target lines 3 to 190. Let's make sure we preserve the exact components)


function NikeLogo() {
  return (
    <svg viewBox="0 0 24 24" width="56" height="24" fill="currentColor">
      <path d="M24 7.8L6.442 15.276c-1.456.616-2.679.925-3.668.925-1.12 0-1.933-.392-2.437-1.177-.317-.504-.41-1.143-.28-1.918.13-.775.476-1.6 1.036-2.478.467-.71 1.232-1.643 2.297-2.8a6.122 6.122 0 0 1 1.484-1.26c.486-.28.916-.42 1.29-.42.337 0 .59.13.757.392.149.243.14.533-.028.868-.14.3-.393.73-.756 1.289a22.25 22.25 0 0 0-1.275 2.1c-.392.747-.588 1.354-.588 1.82 0 .373.103.663.308.868.206.205.514.308.925.308a6.22 6.22 0 0 0 1.946-.42c.86-.318 2.364-1.046 4.51-2.185L24 7.8z"/>
    </svg>
  );
}

function CocaColaLogo() {
  return (
    <span style={{
      fontFamily: "'Playfair Display', var(--font-serif), Georgia, serif",
      fontStyle: "italic",
      fontSize: "21px",
      fontWeight: "800",
      letterSpacing: "-0.04em",
      color: "#000",
    }}>
      Coca-Cola
    </span>
  );
}

function LenovoLogo() {
  return (
    <span style={{
      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
      fontSize: "18px",
      fontWeight: "700",
      letterSpacing: "-0.01em",
      color: "#000",
    }}>
      Lenovo
    </span>
  );
}

function MicrosoftLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#000" }}>
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M0 0h11v11H0zM12 0h11v11H12zM0 12h11v11H0zM12 12h11v11H12z" />
      </svg>
      <span style={{
        fontFamily: "Segoe UI, var(--font-sans), sans-serif",
        fontWeight: "600",
        fontSize: "16.5px",
        letterSpacing: "-0.02em",
      }}>
        Microsoft
      </span>
    </div>
  );
}

function BoseLogo() {
  return (
    <span style={{
      fontFamily: "Impact, Arial Black, sans-serif",
      fontStyle: "italic",
      fontSize: "21px",
      fontWeight: "900",
      letterSpacing: "0.05em",
      color: "#000",
    }}>
      BOSE
    </span>
  );
}

function AirbnbLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#000" }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 .09C11.517.09 11.047.327 10.74.74L.69 14.908c-.76 1.077-.73 2.507.08 3.557.81 1.048 2.08 1.637 3.39 1.617h15.68c1.31.02 2.58-.569 3.39-1.617.81-1.05.84-2.48.08-3.557L13.26.74C12.953.327 12.483.09 12 .09zm0 1.543c.12-.008.23.056.29.157L22.33 16.03c.19.27.17.63-.05.87-.22.25-.56.36-.88.3h-18.8c-.32.06-.66-.05-.88-.3-.22-.24-.24-.6-.05-.87L11.71 1.79c.06-.1.17-.165.29-.157zm0 9.27c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6 1.6-.72 1.6-1.6-.72-1.6-1.6-1.6zm0 1.6c0-.06.04-.1.1-.1s.1.04.1.1-.04.1-.1.1-.1-.04-.1-.1z"/>
      </svg>
      <span style={{
        fontFamily: "var(--font-sans), sans-serif",
        fontWeight: "800",
        fontSize: "16px",
        letterSpacing: "-0.04em",
      }}>
        airbnb
      </span>
    </div>
  );
}

function UberLogo() {
  return (
    <span style={{
      fontFamily: "var(--font-sans, 'Inter', sans-serif)",
      fontSize: "19px",
      fontWeight: "900",
      letterSpacing: "-0.02em",
      color: "#000",
    }}>
      UBER
    </span>
  );
}

function DropboxLogo() {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "#000" }}>
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M6 2l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zM6 11l6 4-6 4-6-4 6-4zm12 0l6 4-6 4-6-4 6-4zm-6 4.5l6 4-6 4-6-4 6-4z"/>
      </svg>
      <span style={{
        fontFamily: "var(--font-sans), sans-serif",
        fontWeight: "800",
        fontSize: "15.5px",
        letterSpacing: "-0.02em",
      }}>
        Dropbox
      </span>
    </div>
  );
}

// ── CLIENTS LIST ────────────────────────────────────────────────────────────

const clientLogos = [
  { name: "Samsung",   component: <SamsungLogo /> },
  { name: "Google",    component: <GoogleLogo /> },
  { name: "Nike",      component: <NikeLogo /> },
  { name: "Coca-Cola", component: <CocaColaLogo /> },
  { name: "Lenovo",    component: <LenovoLogo /> },
  { name: "Microsoft", component: <MicrosoftLogo /> },
  { name: "Bose",      component: <BoseLogo /> },
  { name: "Airbnb",    component: <AirbnbLogo /> },
  { name: "Uber",      component: <UberLogo /> },
  { name: "Dropbox",   component: <DropboxLogo /> },
];

export default function ClientsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-120px" });
  const [marqueeDir, setMarqueeDir] = useState<"normal" | "reverse">("normal");

  useEffect(() => {
    let ticking = false;

    const updateScroll = () => {
      const el = containerRef.current;
      if (!el) {
        ticking = false;
        return;
      }
      
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const offset = (scrollProgress - 0.5) * 140; // range from -70px to 70px
        
        const title = document.getElementById("clients-title");
        const sub = document.getElementById("clients-sub");
        const leftAccent = document.getElementById("clients-accent-left");
        const rightAccent = document.getElementById("clients-accent-right");
        
        if (title) title.style.transform = `translateY(${offset * 0.12}px) translateZ(0)`;
        if (sub) sub.style.transform = `translateY(${offset * 0.06}px) translateZ(0)`;
        if (leftAccent) leftAccent.style.transform = `translateY(calc(-50% + ${offset * -0.22}px)) translateZ(0)`;
        if (rightAccent) rightAccent.style.transform = `translateY(calc(-50% + ${offset * 0.22}px)) translateZ(0)`;
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScroll);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      style={{
        position: "relative",
        width: "100%",
        background: "#F8F9FA",
        padding: "112px 56px 80px",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      className="clients-section-container"
    >
      {/* Soft gradient background overlay */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.8) 0%, transparent 80%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* Decorative spheres & abstract blurs */}
      <div style={{
        position: "absolute",
        top: "15%",
        left: "5%",
        width: "140px",
        height: "140px",
        borderRadius: "50%",
        background: "radial-gradient(circle at 30% 30%, #ffffff, rgba(230,230,230,0.5) 40%, transparent 80%)",
        boxShadow: "10px 20px 40px rgba(0,0,0,0.06)",
        pointerEvents: "none",
        zIndex: 0,
        animation: "particle-drift 22s ease-in-out infinite alternate",
        willChange: "transform",
      }} />
      <div style={{
        position: "absolute",
        top: "40%",
        right: "-5%",
        width: "300px",
        height: "300px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(150,200,255,0.08) 0%, rgba(150,200,255,0.02) 40%, transparent 60%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />
      <div style={{
        position: "absolute",
        bottom: "10%",
        left: "-10%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(200,150,255,0.06) 0%, rgba(200,150,255,0.02) 40%, transparent 60%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      {/* ── HEADER CONTAINER ── */}
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1560px",
          textAlign: "center",
          marginBottom: "64px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
        }}
      >
        {/* Subtitle tag */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } }
          }}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            marginBottom: "32px",
            padding: "8px 16px",
            borderRadius: "100px",
            border: "1px solid rgba(0,0,0,0.08)",
            background: "rgba(255,255,255,0.6)",
            backdropFilter: "blur(10px)",
          }}
        >
          <span style={{ fontSize: "5px", color: "#000" }}>●</span>
          <span style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "10px",
            fontWeight: "700",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#333",
          }}>
            Our Clients
          </span>
        </motion.div>

        {/* Title */}
        <h2
          id="clients-title"
          style={{
            fontSize: "clamp(48px, 6vw, 72px)",
            color: "#000",
            letterSpacing: "-0.03em",
            lineHeight: "1.1",
            margin: "0 0 20px",
            maxWidth: "800px",
            willChange: "transform",
          }}
        >
          <span style={{ display: "block", overflow: "hidden", lineHeight: "1.2" }}>
            <motion.span
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{ display: "block", fontFamily: "var(--font-sans, 'Inter', sans-serif)", fontWeight: "800" }}
            >
              Proud to work with
            </motion.span>
          </span>
          <span style={{ display: "block", overflow: "hidden", lineHeight: "1.2" }}>
            <motion.span
              variants={{
                hidden: { y: "100%", opacity: 0 },
                visible: { y: 0, opacity: 1, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
              }}
              style={{
                display: "block",
                fontFamily: "var(--font-serif, 'Playfair Display', serif)",
                fontWeight: "500",
                fontStyle: "italic",
                letterSpacing: "-0.01em",
              }}
            >
              incredible brands.
            </motion.span>
          </span>
        </h2>

        {/* Subhead text */}
        <motion.p
          id="clients-sub"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } }
          }}
          style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "15px",
            lineHeight: "1.6",
            color: "#555",
            maxWidth: "500px",
            margin: "0 0 28px",
            letterSpacing: "0.01em",
            willChange: "transform",
          }}
        >
          We partner with forward-thinking companies across industries to create impact that matters.
        </motion.p>
      </motion.div>

      {/* ── CLIENTS LOGO SLIDER ── */}
      <motion.div
        initial={{ opacity: 0, y: 44 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1.0, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className="clients-marquee-container"
        style={{ flexDirection: "column", gap: "24px" }}
      >
        <button className="client-nav-btn left" aria-label="Scroll left" onClick={() => setMarqueeDir("normal")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Row 1 */}
        <div className="clients-marquee" style={{ animationDirection: marqueeDir }}>
          {[...clientLogos, ...clientLogos].map((logo, index) => (
            <div key={`${logo.name}-row1-${index}`} className="client-logo-card">
              <div className="client-logo-card-inner">
                {logo.component}
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 (Moves in opposite direction) */}
        <div className="clients-marquee" style={{ animationDirection: marqueeDir === "normal" ? "reverse" : "normal" }}>
          {[...clientLogos].reverse().concat([...clientLogos].reverse()).map((logo, index) => (
            <div key={`${logo.name}-row2-${index}`} className="client-logo-card">
              <div className="client-logo-card-inner">
                {logo.component}
              </div>
            </div>
          ))}
        </div>

        <button className="client-nav-btn right" aria-label="Scroll right" onClick={() => setMarqueeDir("reverse")}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </button>
      </motion.div>

      {/* ── BOTTOM STATS BANNER ── */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="clients-stats-banner"
      >
        {/* Stat 1 */}
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number">100+</span>
            <span className="stat-label">Happy Clients</span>
          </div>
        </div>
        <div className="stat-divider" />

        {/* Stat 2 */}
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number">20+</span>
            <span className="stat-label">Countries</span>
          </div>
        </div>
        <div className="stat-divider" />

        {/* Stat 3 */}
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number">250+</span>
            <span className="stat-label">Projects Delivered</span>
          </div>
        </div>
        <div className="stat-divider" />

        {/* Stat 4 */}
        <div className="stat-item">
          <div className="stat-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
            </svg>
          </div>
          <div className="stat-text">
            <span className="stat-number">98%</span>
            <span className="stat-label">Client Retention</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
