// Store/useAppStore.js
import { create } from "zustand";

const useAppStore = create((set, get) => ({
  // State: starts as "en" for SSR/initial hydration consistency.
  // LocalePathSync restores any saved preference from localStorage on mount.
  language: "en",
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
