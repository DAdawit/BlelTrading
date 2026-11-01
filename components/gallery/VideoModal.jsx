"use client";

import { useEffect, useRef } from "react";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function VideoModal({ item, onClose }) {
  const language = useAppStore((state) => state.language);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    if (videoRef.current) {
      videoRef.current.muted = true;
    }
    videoRef.current?.play().catch(() => {});
    const onKeyDown = (e) => {
      if (e.key === "Escape") handleClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [item]);

  function handleClose() {
    videoRef.current?.pause();
    onClose();
  }

  if (!item) return null;

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      <button
        onClick={handleClose}
        aria-label="Close"
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <figure className="max-w-4xl w-full">
        <video
          ref={videoRef}
          src={item.src}
          controls
          muted
          playsInline
          className="w-full max-h-[75vh] rounded-lg bg-black"
        />
        <figcaption className="text-center text-beige-100/80 text-sm mt-4">
          {languageTranslate(language, item.caption)}
        </figcaption>
      </figure>
    </div>
  );
}
