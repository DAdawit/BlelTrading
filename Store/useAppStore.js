// Store/useAppStore.js
import { create } from "zustand";

const loadLanguageFromStorage = () => {
  // Guard for SSR — localStorage doesn't exist on the server. The store's
  // initial render will always be "en" on the server / first client paint;
  // LocalePathSync (components/layout/LocalePathSync.jsx) re-syncs it to the
  // saved value right after mount.
  if (typeof window === "undefined") return "en";
  try {
    const saved = localStorage.getItem("language");
    return saved ? saved : "en";
  } catch {
    return "en";
  }
};

const useAppStore = create((set, get) => ({
  // State
  language: loadLanguageFromStorage(),
  title: null,

  // Actions
  setLanguage: (language) => {
    set({ language });
    try {
      localStorage.setItem("language", language);
    } catch {
      // localStorage unavailable (SSR / privacy mode) — state still updates in memory
    }
  },

  setNavTitle: (title) => {
    set({ title });
  },

  // Getter functions
  getLanguage: () => get().language,
}));

export default useAppStore;
