"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wraps children in a fade-up-on-scroll animation.
 * Usage: <Reveal delay={1}><h2>Heading</h2></Reveal>
 * delay is in steps of ~80ms (0-6 recommended), matching the original
 * .reveal-delay-N classes from the static site.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay * 80}ms` }}
    >
      {children}
    </Tag>
  );
}
