"use client";

import Image from "next/image";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function GalleryVideoItem({ item, onOpen }) {
  const language = useAppStore((state) => state.language);
  const caption = languageTranslate(language, item.caption);

  return (
    <button
      onClick={() => onOpen(item)}
      className="relative rounded-xl overflow-hidden group aspect-square w-full bg-navy-950 text-start"
    >
      {item.poster ? (
        <Image
          src={item.poster}
          alt={caption}
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <video
          src={item.src}
          className="w-full h-full object-cover pointer-events-none"
          muted
          playsInline
          preload="metadata"
        />
      )}
      <span className="absolute inset-0 bg-black/35 flex items-center justify-center transition-colors group-hover:bg-black/20">
        <span className="w-14 h-14 rounded-full bg-white/95 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
          <i className="fa-solid fa-play text-navy-950 text-lg ms-0.5"></i>
        </span>
      </span>
      <span className="absolute bottom-0 inset-x-0 p-3 text-xs text-white bg-gradient-to-t from-black/85 via-black/40 to-transparent">
        {caption}
      </span>
    </button>
  );
}
