"use client";

import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import { GALLERY_CATEGORY_UI_KEY } from "@/lib/data/gallery";

export default function GalleryTabs({ tabs, active, onChange }) {
  const language = useAppStore((state) => state.language);

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onChange(tab)}
          className={`tab-pill px-5 py-2.5 rounded-full text-xs font-medium shrink-0 ${
            active === tab ? "is-active" : ""
          }`}
        >
          {languageTranslate(language, GALLERY_CATEGORY_UI_KEY[tab])}
        </button>
      ))}
    </div>
  );
}
