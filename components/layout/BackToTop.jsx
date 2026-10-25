"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`back-to-top ${
        isVisible ? "is-visible" : ""
      } fixed bottom-7 right-7 z-40 w-12 h-12 rounded-full bg-gold-500 text-navy-950 shadow-lg flex items-center justify-center hover:bg-gold-400 transition`}
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}
