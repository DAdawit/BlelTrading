"use client";

import { useEffect } from "react";
import useAppStore from "@/Store/useAppStore";

export default function LocalePathSync() {
  const language = useAppStore((state) => state.language);
  const setLanguage = useAppStore((state) => state.setLanguage);

  // Restore saved language preference on client mount (post-hydration, avoids hydration mismatch)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("language");
      if (saved && (saved === "ar" || saved === "en") && saved !== language) {
        setLanguage(saved);
      }
    } catch {}
  }, [language, setLanguage]);

  // Keep <html lang> and <html dir> in sync with the current language
  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return null;
}
