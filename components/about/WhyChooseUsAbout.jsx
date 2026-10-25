"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function WhyChooseUsAbout() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.about.whyChoose;

  return (
    <section className="py-24 bg-navy-950 texture-weave">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <Reveal as="p" className="section-eyebrow text-gold-400 mb-3">{t(section.eyebrow)}</Reveal>
          <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-beige-50">{t(section.title)}</Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {section.items.map((item, i) => (
            <Reveal key={i} delay={i} className="glass rounded-2xl p-6 flex items-center gap-4">
              <div className="w-11 h-11 shrink-0 rounded-full bg-gold-500/15 text-gold-400 flex items-center justify-center">
                <i className={`fa-solid ${item.icon}`}></i>
              </div>
              <h3 className="text-beige-50 font-semibold text-sm">{t(item)}</h3>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
