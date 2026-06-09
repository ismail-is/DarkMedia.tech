"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-container">
      {/* ── TOP SECTION: Main Content ── */}
      <div className="footer-top">
        {/* Left: Brand & CTA */}
        <div className="footer-brand">
          <div className="footer-logo">
            <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="48" stroke="#000" strokeWidth="2"/>
              <path d="M50 2 A48 48 0 0 1 50 98 Z" fill="#000"/>
              <line x1="2" y1="50" x2="98" y2="50" stroke="#000" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="50" y1="2" x2="50" y2="98" stroke="#000" strokeWidth="1" strokeDasharray="4 4" />
            </svg>
            <span className="footer-logo-text">
              Dark<br />Media
            </span>
          </div>
          <p className="footer-desc">
            We create digital experiences that inspire, engage, and drive real results for ambitious brands.
          </p>
          <button className="footer-cta-btn">
            <span className="cta-text">LET'S CREATE SOMETHING</span>
            <span className="cta-icon">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="7" y1="17" x2="17" y2="7" />
                <polyline points="7 7 17 7 17 17" />
              </svg>
            </span>
          </button>
        </div>

        {/* Middle: Links Grid */}
        <div className="footer-links-grid">
          <div className="footer-link-col">
            <h4>COMPANY</h4>
            <a href="#">About Us</a>
            <a href="#">Our Process</a>
            <a href="#">Careers</a>
            <a href="#">Journal</a>
            <a href="#">Contact Us</a>
          </div>
          <div className="footer-link-col">
            <h4>SERVICES</h4>
            <a href="#">Branding</a>
            <a href="#">Web Design</a>
            <a href="#">Development</a>
            <a href="#">UI/UX Design</a>
            <a href="#">Digital Marketing</a>
          </div>
          <div className="footer-link-col">
            <h4>RESOURCES</h4>
            <a href="#">Case Studies</a>
            <a href="#">Blog</a>
            <a href="#">FAQs</a>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
          <div className="footer-link-col">
            <h4>INDUSTRIES</h4>
            <a href="#">SaaS</a>
            <a href="#">Healthcare</a>
            <a href="#">Fintech</a>
            <a href="#">E-commerce</a>
            <a href="#">Education</a>
          </div>
        </div>

        {/* Right: Newsletter */}
        <div className="footer-newsletter">
          <div className="newsletter-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <h3>Stay inspired</h3>
          <p>Get the latest insights on design, strategy, and digital innovation.</p>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit" aria-label="Subscribe">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </form>
        </div>
      </div>

      {/* ── DIVIDER: 3D Wave Graphic ── */}
      <div className="footer-wave-divider">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="wave-svg">
          <defs>
            <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f3f3f3" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#e8e8e8" stopOpacity="1" />
              <stop offset="100%" stopColor="#d5d5d5" stopOpacity="0.4" />
            </linearGradient>
            <linearGradient id="goldAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#d4af37" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#d4af37" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#d4af37" stopOpacity="0.1" />
            </linearGradient>
            <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
              <feDropShadow dx="0" dy="15" stdDeviation="20" floodOpacity="0.05" />
            </filter>
          </defs>
          
          {/* Back subtle wave */}
          <path fill="url(#waveGrad)" fillOpacity="0.5" d="M0,192L48,197.3C96,203,192,213,288,197.3C384,181,480,139,576,149.3C672,160,768,224,864,240C960,256,1056,224,1152,192C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
          
          {/* Main front wave with shadow */}
          <path fill="#ffffff" filter="url(#shadow)" d="M0,256L60,250.7C120,245,240,235,360,202.7C480,171,600,117,720,117.3C840,117,960,171,1080,202.7C1200,235,1320,245,1380,250.7L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z" />
          
          {/* Thin gold accent line following the wave */}
          <path fill="none" stroke="url(#goldAccent)" strokeWidth="1.5" d="M0,256L60,250.7C120,245,240,235,360,202.7C480,171,600,117,720,117.3C840,117,960,171,1080,202.7C1200,235,1320,245,1380,250.7L1440,256" />
        </svg>
      </div>

      {/* ── BOTTOM SECTION: Copyright & Social ── */}
      <div className="footer-bottom-bar">
        <div className="footer-copyright">
          © 2024 Dark Media. All rights reserved.
        </div>
        
        <div className="footer-quote">
          Let's build something extraordinary together.
        </div>

        <div className="footer-social-wrapper">
          <span className="follow-text">FOLLOW US</span>
          <div className="footer-social-icons">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="#" aria-label="Behance">Bē</a>
            <a href="#" aria-label="Dribbble">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <line x1="2" y1="12" x2="22" y2="12" />
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
              </svg>
            </a>
            <a href="#" aria-label="Twitter">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-back-to-top">
          <span className="back-top-text">BACK TO TOP</span>
          <button onClick={scrollToTop} className="back-top-btn" aria-label="Back to top">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="12" y1="19" x2="12" y2="5" />
              <polyline points="5 12 12 5 19 12" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}
