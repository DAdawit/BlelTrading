"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

const LanguageSwitcher = () => {
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);

  return (
    <Select value={language} onValueChange={(val) => setLanguage(val)}>
      <SelectTrigger className="w-max bg-transparent [&_svg]:!text-gold-600 hover:bg-gold-500/10 hover:text-gold-700 transition-colors relative text-gold-600 gap-1.5 rounded-full py-2.5 px-3.5 border border-gold-500/60 hover:border-gold-500 shadow-sm text-sm font-medium">
        <SelectValue placeholder={languageTranslate(language, "selectLanguage")} />
      </SelectTrigger>
      <SelectContent className="min-w-[120px]">
        <SelectGroup>
          <SelectItem value="en">{languageTranslate(language, "english")}</SelectItem>
          {/* NOTE: value fixed to "ar" (Arabic) — the original snippet used
              "am" (Amharic), which doesn't match the en/ar data below. */}
          <SelectItem value="ar">{languageTranslate(language, "arabic")}</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default LanguageSwitcher;
