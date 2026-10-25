"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function CoreValues() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const values = content.pages.about.values;

  return (
    <section className="py-24 bg-beige-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
        <Reveal as="p" className="section-eyebrow mb-3">{t(values.eyebrow)}</Reveal>
        <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950 mb-12">
          {t(values.title)}
        </Reveal>
        <div className="flex flex-wrap justify-center gap-4">
          {values.items.map((item, i) => (
            <Reveal key={i} delay={i}>
              <span className="inline-flex items-center gap-2 bg-white border border-beige-200 rounded-full px-6 py-3 font-display text-lg text-navy-900 shadow-sm">
                <i className="fa-solid fa-star text-gold-500 text-xs"></i>
                {t(item)}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
