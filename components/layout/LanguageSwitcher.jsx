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
      <SelectTrigger className="w-max bg-transparent [&_svg]:!text-beige-100 hover:bg-white/10 transition-colors relative text-beige-100 gap-1 rounded-full py-2.5 px-3.5 border border-white/25 shadow-[0px_1px_2px_0px_#1018280A] text-sm">
        <SelectValue placeholder={languageTranslate(language, "selectLanguage")} />
      </SelectTrigger>
      <SelectContent className="min-w-25 sm:min-w-30">
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
