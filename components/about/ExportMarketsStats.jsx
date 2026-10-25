"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function ExportMarketsStats() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.about.exportMarkets;

  return (
    <section className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <p className="section-eyebrow mb-3">{t(section.eyebrow)}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 mb-6">{t(section.title)}</h2>
          <p className="text-sm leading-relaxed mb-8 text-[--ink-soft]">{t(section.description)}</p>
          <div className="flex flex-wrap gap-2">
            {section.markets.map((market, i) => (
              <span key={i} className={`tab-pill px-4 py-2 rounded-full text-xs ${i === 0 ? "is-active" : ""}`}>
                {t(market)}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="grid grid-cols-2 gap-5">
          {section.stats.map((stat, i) => (
            <div key={i} className="manifest-card p-7 text-center">
              <p className="font-display text-4xl text-gold-600">{t(stat.value)}</p>
              <p className="text-xs mt-2 text-[--ink-soft]">{t(stat.label)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
