"use client";

import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import { CATEGORY_UI_KEY } from "@/lib/data/products";

export default function CategoryFilterBar({ categories, active, onChange }) {
  const language = useAppStore((state) => state.language);
  const t = (key) => languageTranslate(language, key);
  const all = ["All", ...categories];

  return (
    <div className="flex gap-2 overflow-x-auto no-scrollbar">
      {all.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`tab-pill px-4 py-2.5 rounded-full text-xs font-medium shrink-0 ${
            active === category ? "is-active" : ""
          }`}
        >
          {category === "All" ? t("all") : t(CATEGORY_UI_KEY[category])}
        </button>
      ))}
    </div>
  );
}
