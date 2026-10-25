"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function Testimonials() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.home.testimonials;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <Reveal as="p" className="section-eyebrow mb-3">
            {t(section.eyebrow)}
          </Reveal>
          <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950">
            {t(section.title)}
          </Reveal>
        </div>
        <div className="grid md:grid-cols-3 gap-7">
          {section.items.map((item, i) => (
            <Reveal key={i} delay={i} className="manifest-card p-7">
              <div className="flex gap-1 text-gold-500 mb-4">★★★★★</div>
              <p className="text-sm leading-relaxed mb-6 text-[--ink-soft]">{t(item.quote)}</p>
              <p className="font-semibold text-navy-950 text-sm">{t(item.name)}</p>
              <p className="text-xs text-[--ink-soft]">{t(item.org)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
