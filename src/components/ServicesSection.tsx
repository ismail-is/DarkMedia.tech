"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import MagneticButton from "./MagneticButton";
import Image from "next/image";

// ── CUSTOM ICONS ─────────────────────────────────────────────────────────────

function CubeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function PencilIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function TrendIcon() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
      <polyline points="17 6 23 6 23 12" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function BulbIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A5 5 0 0 0 8 8c0 1 .4 2.5 1.5 3.5.7.8 1.3 1.5 1.5 2.5" />
      <line x1="9" y1="18" x2="15" y2="18" />
      <line x1="10" y1="22" x2="14" y2="22" />
    </svg>
  );
}

function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

// ── INDIVIDUAL CARD COMPONENT (WITH 3D TILT PHYSICS) ─────────────────────────

interface ServiceData {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  img: string;
}

function ServiceCard({ service, index }: { service: ServiceData; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // Motion values for tilt angles
  const rotateXVal = useMotionValue(0);
  const rotateYVal = useMotionValue(0);

  // Smooth springs
  const springConfig = { stiffness: 100, damping: 20 };
  const rotateX = useSpring(rotateXVal, springConfig);
  const rotateY = useSpring(rotateYVal, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    // Calculate rotation (-6 to 6 degrees)
    const rX = ((mouseY - height / 2) / (height / 2)) * -6;
    const rY = ((mouseX - width / 2) / (width / 2)) * 6;

    rotateXVal.set(rX);
    rotateYVal.set(rY);
  };

  const handleMouseLeave = () => {
    rotateXVal.set(0);
    rotateYVal.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      variants={{
        hidden: { opacity: 0, y: 36 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
      }}
      className="service-grid-card"
    >
      {/* Content Area */}
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", height: "100%", transform: "translateZ(20px)" }}>
        <div>
          {/* Index Row */}
          <div style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "9.5px",
            fontWeight: "700",
            color: "#888",
            letterSpacing: "0.1em",
            marginBottom: "20px",
          }}>
            {service.num}
          </div>

          {/* Icon Circle */}
          <div style={{
            width: "38px",
            height: "38px",
            borderRadius: "50%",
            background: "#000",
            color: "#FFF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: "24px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.06)",
          }}>
            {service.icon}
          </div>

          {/* Title */}
          <h3 style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "clamp(20px, 1.8vw, 24px)",
            fontWeight: "800",
            color: "#000",
            letterSpacing: "-0.02em",
            lineHeight: "1.2",
            marginBottom: "12px",
          }}>
            {service.title}
          </h3>

          {/* Description */}
          <p style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "12.5px",
            lineHeight: "1.6",
            color: "#666",
            maxWidth: "230px",
          }}>
            {service.desc}
          </p>
        </div>

        {/* Bottom Learn More link */}
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          marginTop: "20px",
          fontSize: "9.5px",
          fontWeight: "700",
          letterSpacing: "0.12em",
          color: "#000",
          textTransform: "uppercase",
        }}>
          <span>Learn More</span>
          <span style={{ transition: "transform 0.3s ease" }} className="learn-more-arrow">↗</span>
        </div>
      </div>

      {/* Right Visual Image Area */}
      <div style={{ transform: "translateZ(10px)" }} className="service-card-visual-container">
        <Image
          src={service.img}
          alt={service.title}
          width={280}
          height={330}
          className="service-card-visual"
          priority
        />
      </div>
    </motion.div>
  );
}

// ── SERVICES MAIN COMPONENT ──────────────────────────────────────────────────

export default function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgCirclesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-120px" });

  // Concentric circle scroll parallax
  useEffect(() => {
    const handleScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate where container is in viewport (0 = fully below, 1 = fully above)
      const scrollProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
      
      if (scrollProgress >= 0 && scrollProgress <= 1) {
        const bg = bgCirclesRef.current;
        if (bg) {
          // Move circles down as user scrolls down
          bg.style.transform = `translateY(${(scrollProgress - 0.5) * 110}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services: ServiceData[] = [
    {
      num: "01",
      title: "Brand Strategy",
      desc: "We build digital strategies that align with your goals and create measurable business impact.",
      icon: <CubeIcon />,
      img: "/images/service_1.png",
    },
    {
      num: "02",
      title: "Web Design & Development",
      desc: "We design and develop high-performing websites that are fast, responsive, and future-ready.",
      icon: <PencilIcon />,
      img: "/images/service_2.png",
    },
    {
      num: "03",
      title: "Video Production",
      desc: "We craft engaging videos that tell your brand story and connect with your audience emotionally.",
      icon: <VideoIcon />,
      img: "/images/service_3.png",
    },
    {
      num: "04",
      title: "Digital Marketing",
      desc: "We drive growth with data-driven marketing strategies that increase visibility and generate real results.",
      icon: <TrendIcon />,
      img: "/images/service_4.png",
    },
  ];

  return (
    <section
      ref={containerRef}
      id="services"
      className="services-container"
    >
      {/* ── BACKGROUND CONCENTRIC ORBITAL RINGS ── */}
      <div ref={bgCirclesRef} className="services-bg-circles">
        {/* Track 1 */}
        <div className="services-bg-circle-track" style={{ width: "200px", height: "200px" }} />
        {/* Track 2 */}
        <div className="services-bg-circle-track" style={{ width: "320px", height: "320px" }} />
        {/* Track 3 with orbiting dot */}
        <div
          className="services-bg-circle-track"
          style={{
            width: "440px",
            height: "440px",
            animation: "orbit-cw 38s linear infinite",
          }}
        >
          <div className="services-bg-dot" style={{ top: "0", left: "50%", transform: "translate(-50%, -50%)" }} />
        </div>
        {/* Bottom-left solid decoration base half-circle */}
        <div style={{
          position: "absolute",
          bottom: "150px",
          left: "150px",
          width: "140px",
          height: "140px",
          borderRadius: "50%",
          background: "linear-gradient(to right, #000 50%, transparent 50%)",
          transform: "translate(-50%, 50%) rotate(45deg)",
          opacity: 0.95,
        }} />
      </div>

      <div className="services-layout">
        {/* ════════ LEFT COLUMN (Sticky Intro) ════════ */}
        <div className="services-left">
          {/* Label tag */}
          <div style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "24px",
          }}>
            <span className="label-dot" />
            <span style={{
              fontFamily: "var(--font-sans, 'Inter', sans-serif)",
              fontSize: "9px",
              fontWeight: "700",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#333",
            }}>
              What We Do
            </span>
          </div>

          {/* Title */}
          <h2 style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "clamp(38px, 4.2vw, 56px)",
            fontWeight: "800",
            color: "#000",
            letterSpacing: "-0.03em",
            lineHeight: "1.12",
            margin: "0 0 24px",
          }}>
            Digital Solutions <br />
            <span style={{
              fontFamily: "var(--font-serif, 'Playfair Display', serif)",
              fontWeight: "500",
              fontStyle: "italic",
              letterSpacing: "-0.01em",
            }}>
              That Drive Results.
            </span>
          </h2>

          {/* Sub-text */}
          <p style={{
            fontFamily: "var(--font-sans, 'Inter', sans-serif)",
            fontSize: "14px",
            lineHeight: "1.75",
            color: "#555",
            maxWidth: "380px",
            marginBottom: "40px",
            letterSpacing: "0.01em",
          }}>
            We blend creativity, strategy, and technology to build digital experiences that help brands grow, engage, and lead in the digital world.
          </p>

          {/* CTA View All Services Button */}
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
            <MagneticButton href="#work">
              <div style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: "#000",
                color: "#FFF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "12px",
                fontWeight: "600",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",
              }}>
                ↗
              </div>
            </MagneticButton>
            <span style={{
              fontFamily: "var(--font-sans, 'Inter', sans-serif)",
              fontSize: "9.5px",
              fontWeight: "700",
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#000",
            }}>
              View All Services
            </span>
          </div>
        </div>

        {/* ════════ RIGHT COLUMN (Grid of 4 Cards) ════════ */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } }
          }}
          className="services-grid"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.num} service={service} index={index} />
          ))}
        </motion.div>
      </div>

      {/* ── BOTTOM VALUES BAR ── */}
      <div className="services-bottom-bar">
        {/* Value 1 */}
        <div className="service-value-item">
          <div className="service-value-icon-wrapper">
            <TargetIcon />
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "6px" }}>
              Strategic Approach
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11.5px", color: "#666", lineHeight: "1.5", maxWidth: "260px" }}>
              We combine insight and innovation to build strategies that deliver real impact.
            </p>
          </div>
        </div>

        {/* Value 2 */}
        <div className="service-value-item">
          <div className="service-value-icon-wrapper">
            <BulbIcon />
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "6px" }}>
              Creative Excellence
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11.5px", color: "#666", lineHeight: "1.5", maxWidth: "260px" }}>
              Designs that are not only beautiful but also functional and conversion-focused.
            </p>
          </div>
        </div>

        {/* Value 3 */}
        <div className="service-value-item">
          <div className="service-value-icon-wrapper">
            <CodeIcon />
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "6px" }}>
              Cutting-Edge Technology
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11.5px", color: "#666", lineHeight: "1.5", maxWidth: "260px" }}>
              We use the latest technologies to build fast, scalable, and future-ready solutions.
            </p>
          </div>
        </div>

        {/* Value 4 */}
        <div className="service-value-item">
          <div className="service-value-icon-wrapper">
            <TrendIcon />
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-sans)", fontSize: "11px", fontWeight: "700", letterSpacing: "0.05em", textTransform: "uppercase", marginBottom: "6px" }}>
              Results That Matter
            </h4>
            <p style={{ fontFamily: "var(--font-sans)", fontSize: "11.5px", color: "#666", lineHeight: "1.5", maxWidth: "260px" }}>
              We focus on what truly matters: measurable results, growth, and long-term success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
