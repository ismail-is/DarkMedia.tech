"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const navItems = ["Work", "Services", "About", "Process", "Journal", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false);
  const [menuOpen, setMenuOpen]     = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ opacity: 0, y: -22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`navbar-header ${scrolled ? "scrolled" : ""}`}
        style={{
          position: "fixed",
          top: 0, left: 0, right: 0,
          zIndex: 100,
          transition: "all 0.55s cubic-bezier(0.25,0.46,0.45,0.94)",
          background: scrolled ? "rgba(255,255,255,0.94)" : "transparent",
          backdropFilter: scrolled ? "blur(24px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.05)" : "none",
        }}
      >
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          maxWidth: "1560px",
          margin: "0 auto",
        }}>

          {/* ── Logo ── */}
          <motion.div whileHover={{ scale: 1.02 }}>
            <Link href="/" style={{ display:"flex", alignItems:"center", gap:"0px", textDecoration:"none" }}>
              <div style={{ position:"relative", width:"120px", height:"40px" }}>
                <Image
                  src="/images/logo/Dark Media Logo.png"
                  alt="Dark Media"
                  fill
                  style={{ objectFit:"contain", objectPosition:"left center" }}
                  priority
                />
              </div>
            </Link>
          </motion.div>

          {/* ── Centre Nav ── */}
          <nav className="desktop-nav" style={{ display:"flex", alignItems:"center", gap:"44px" }}>
            {navItems.map((item, idx) => (
              <div
                key={item}
                style={{ position:"relative" }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onMouseLeave={() => setHoveredIdx(null)}
              >
                <Link href={`#${item.toLowerCase()}`} className="nav-link">
                  {item}
                </Link>
                {hoveredIdx === idx && (
                  <motion.div
                    layoutId="nav-line"
                    style={{
                      position:"absolute", bottom:"-3px",
                      left:0, right:0, height:"1px",
                      background:"#000",
                    }}
                    transition={{ type:"spring", stiffness:500, damping:32 }}
                  />
                )}
              </div>
            ))}
          </nav>

          {/* ── Right ── */}
          <div style={{ display:"flex", alignItems:"center", gap:"14px" }}>
            <motion.a
              href="#contact"
              className="btn-talk"
              whileHover={{ scale:1.04 }}
              whileTap={{ scale:0.96 }}
            >
              <span>Let&apos;s Talk</span>
              <span style={{
                width:"18px", height:"18px",
                background:"rgba(255,255,255,0.15)", borderRadius:"50%",
                display:"flex", alignItems:"center", justifyContent:"center",
                fontSize:"10px",
              }}>↗</span>
            </motion.a>

            {/* Hamburger */}
            <motion.button
              onClick={() => setMenuOpen(!menuOpen)}
              whileHover={{ scale:1.08 }}
              whileTap={{ scale:0.92 }}
              style={{
                width:"42px", height:"42px", borderRadius:"50%",
                border:"1.5px solid rgba(0,0,0,0.14)",
                background:"transparent",
                display:"flex", alignItems:"center", justifyContent:"center",
                cursor:"pointer", flexDirection:"column", gap:"5px",
              }}
              aria-label="Menu"
            >
              <motion.span animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6.5 : 0 }}
                style={{ display:"block", width:"15px", height:"1.5px", background:"#000", borderRadius:"2px" }}/>
              <motion.span animate={{ opacity: menuOpen ? 0 : 1, scaleX: menuOpen ? 0 : 1 }}
                style={{ display:"block", width:"15px", height:"1.5px", background:"#000", borderRadius:"2px" }}/>
              <motion.span animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6.5 : 0 }}
                style={{ display:"block", width:"15px", height:"1.5px", background:"#000", borderRadius:"2px" }}/>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* ── Fullscreen Menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity:0, clipPath:"circle(0% at 96% 4%)" }}
            animate={{ opacity:1, clipPath:"circle(150% at 96% 4%)" }}
            exit={{   opacity:0, clipPath:"circle(0% at 96% 4%)" }}
            transition={{ duration:0.72, ease:[0.25,0.46,0.45,0.94] }}
            style={{
              position:"fixed", inset:0,
              background:"#000", zIndex:98,
              display:"flex", alignItems:"center", justifyContent:"center",
            }}
          >
            {/* Menu items */}
            <nav style={{ display:"flex", flexDirection:"column", gap:"4px", textAlign:"center" }}>
              {navItems.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity:0, y:44 }}
                  animate={{ opacity:1, y:0 }}
                  exit={{   opacity:0, y:-20 }}
                  transition={{ delay: i * 0.055 + 0.2, duration:0.52, ease:[0.25,0.46,0.45,0.94] }}
                >
                  <Link
                    href={`#${item.toLowerCase()}`}
                    onClick={() => setMenuOpen(false)}
                    style={{
                      fontFamily:"'Playfair Display', serif",
                      fontSize:"clamp(44px, 7.5vw, 88px)",
                      fontWeight:"700",
                      color:"#fff",
                      textDecoration:"none",
                      letterSpacing:"-0.03em",
                      display:"block",
                      lineHeight:"1.08",
                      transition:"all 0.3s ease",
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = "#bbb";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "24px";
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = "#fff";
                      (e.currentTarget as HTMLElement).style.paddingLeft = "0";
                    }}
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* White logo inside dark menu */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.5 }}
              style={{
                position:"absolute", top:"32px", left:"48px",
                width:"100px", height:"36px",
              }}
            >
              <Image
                src="/images/logo/Dark Media Logo - White.png"
                alt="Dark Media"
                fill
                style={{ objectFit:"contain", objectPosition:"left center" }}
              />
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity:0 }}
              animate={{ opacity:1 }}
              transition={{ delay:0.6 }}
              style={{
                position:"absolute", bottom:"36px", left:"48px", right:"48px",
                display:"flex", justifyContent:"space-between", alignItems:"center",
              }}
            >
              <span style={{ color:"#444", fontFamily:"Inter,sans-serif", fontSize:"11px" }}>
                © 2025 Dark Media
              </span>
              <div style={{ display:"flex", gap:"24px" }}>
                {["Behance","Instagram","LinkedIn"].map(s => (
                  <a key={s} href="#" style={{ color:"#444", fontFamily:"Inter,sans-serif", fontSize:"11px", textDecoration:"none", transition:"color 0.3s" }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color="#fff"}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color="#444"}
                  >{s}</a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
