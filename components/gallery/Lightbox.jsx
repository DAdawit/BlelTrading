"use client";

import { useEffect } from "react";
import Image from "next/image";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function Lightbox({ item, onClose }) {
  const language = useAppStore((state) => state.language);

  useEffect(() => {
    if (!item) return;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;
  const caption = languageTranslate(language, item.caption);

  return (
    <div
      className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20"
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <figure className="max-w-4xl w-full">
        <Image
          src={item.src}
          alt={caption}
          width={1200}
          height={800}
          sizes="90vw"
          className="w-full h-auto max-h-[75vh] object-contain rounded-lg"
        />
        <figcaption className="text-center text-beige-100/80 text-sm mt-4">{caption}</figcaption>
      </figure>
    </div>
  );
}
