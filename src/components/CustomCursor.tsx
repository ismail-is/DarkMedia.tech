"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef      = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mx = 0, my = 0, fx = 0, fy = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = `${mx}px`;
        dotRef.current.style.top  = `${my}px`;
      }
    };

    const raf = () => {
      fx += (mx - fx) * 0.1;
      fy += (my - fy) * 0.1;
      if (followerRef.current) {
        followerRef.current.style.left = `${fx}px`;
        followerRef.current.style.top  = `${fy}px`;
      }
      requestAnimationFrame(raf);
    };

    const onEnter = () => {
      if (dotRef.current)      dotRef.current.style.transform      = "translate(-50%,-50%) scale(2.8)";
      if (followerRef.current) followerRef.current.style.transform  = "translate(-50%,-50%) scale(1.6)";
    };
    const onLeave = () => {
      if (dotRef.current)      dotRef.current.style.transform      = "translate(-50%,-50%) scale(1)";
      if (followerRef.current) followerRef.current.style.transform  = "translate(-50%,-50%) scale(1)";
    };

    document.addEventListener("mousemove", onMove);
    requestAnimationFrame(raf);

    const links = document.querySelectorAll("a,button,.cursor-hover");
    links.forEach(el => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <>
      <div ref={dotRef}      className="cursor" />
      <div ref={followerRef} className="cursor-follower" />
    </>
  );
}
