"use client";
import React, { useRef, useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";

export default function LocomotiveProvider({ children }) {
  const scrollRef = useRef(null);
  const locoInstance = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!scrollRef.current) return;

    locoInstance.current = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.08,
      multiplier: 1,
      class: "is-reveal",
    });

    return () => {
      if (locoInstance.current) locoInstance.current.destroy();
    };
  }, []);

  return (
    <div ref={scrollRef} data-scroll-container style={{ minHeight: "100vh" }}>
      {children}
    </div>
  );
}
