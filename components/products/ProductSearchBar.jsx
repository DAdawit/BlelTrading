"use client";

import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function ProductSearchBar({ value, onChange }) {
  const language = useAppStore((state) => state.language);

  return (
    <div className="relative w-full md:max-w-sm">
      <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 -translate-y-1/2 text-sm text-[--ink-soft]"></i>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={languageTranslate(language, "searchPlaceholder")}
        aria-label={languageTranslate(language, "searchPlaceholder")}
        className="w-full pl-10 pr-4 py-3 rounded-full border border-beige-200 bg-white text-sm focus:outline-none focus:border-gold-500"
      />
    </div>
  );
}
