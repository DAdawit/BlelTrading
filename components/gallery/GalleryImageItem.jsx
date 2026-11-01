"use client";

import Image from "next/image";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function GalleryImageItem({ item, onOpen }) {
  const language = useAppStore((state) => state.language);
  const caption = languageTranslate(language, item.caption);

  return (
    <button
      onClick={() => onOpen(item)}
      className="relative rounded-xl overflow-hidden group aspect-square w-full"
    >
      <Image
        src={item.src}
        alt={caption}
        fill
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <span className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></span>
      <span className="absolute bottom-0 inset-x-0 p-3 text-start text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-to-t from-black/80 via-black/40 to-transparent">
        {caption}
      </span>
    </button>
  );
}
