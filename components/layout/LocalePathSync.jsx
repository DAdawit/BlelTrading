"use client";

import { useEffect } from "react";
import useAppStore from "@/Store/useAppStore";

/**
 * Mounted once in the root layout. Job:
 *
 * Keeps <html lang> / <html dir> in sync with the Zustand language
 * state (drives RTL layout for Arabic).
 *
 * URLs stay clean — no /en or /ar prefix. Language lives purely in
 * Zustand + localStorage, so it survives reloads without touching the
 * URL at all.
 */
export default function LocalePathSync() {
  const language = useAppStore((state) => state.language);

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  }, [language]);

  return null;
}
