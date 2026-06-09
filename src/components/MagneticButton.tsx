"use client";

import { useEffect, useRef } from "react";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
  onClick?: () => void;
  strength?: number;
}

export default function MagneticButton({
  children,
  className = "",
  style = {},
  href,
  onClick,
  strength = 0.35,
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let animFrame: number;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      cancelAnimationFrame(animFrame);
      animFrame = requestAnimationFrame(() => {
        el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
      });
    };

    const onMouseLeave = () => {
      cancelAnimationFrame(animFrame);
      el.style.transition = "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)";
      el.style.transform = "translate(0, 0)";
      setTimeout(() => {
        if (el) el.style.transition = "";
      }, 500);
    };

    el.addEventListener("mousemove", onMouseMove);
    el.addEventListener("mouseleave", onMouseLeave);
    return () => {
      el.removeEventListener("mousemove", onMouseMove);
      el.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [strength]);

  const content = href ? (
    <a href={href} className={className} style={{ display: "block", ...style }}>
      {children}
    </a>
  ) : (
    <button onClick={onClick} className={className} style={{ border: "none", background: "none", padding: 0, cursor: "pointer", ...style }}>
      {children}
    </button>
  );

  return (
    <div ref={ref} style={{ display: "inline-block" }}>
      {content}
    </div>
  );
}
