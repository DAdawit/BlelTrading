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
      className="relative rounded-xl overflow-hidden group aspect-square w-full"
    >
      <Image
        src={item.poster}
        alt={caption}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-black/30 flex items-center justify-center">
        <span className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
          <i className="fa-solid fa-play text-navy-900"></i>
        </span>
      </span>
      <span className="absolute bottom-0 left-0 right-0 p-3 text-left text-xs text-white bg-gradient-to-t from-black/70 to-transparent">
        {caption}
      </span>
    </button>
  );
}
