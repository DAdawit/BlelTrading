"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function WhyChooseUs() {
  const language = useAppStore((state) => state.language);
  const section = content.pages.home.whyChooseUs;
  const t = (node) => languageTranslate(language, node);

  return (
    <section className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <Reveal as="p" className="section-eyebrow mb-3">
            {t(section.eyebrow)}
          </Reveal>
          <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950">
            {t(section.title)}
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {section.reasons.map((reason, i) => (
            <Reveal key={i} delay={i} className="manifest-card p-7">
              <div className="w-12 h-12 rounded-full bg-navy-900 flex items-center justify-center text-gold-400 mb-5">
                <i className={`fa-solid ${reason.icon}`}></i>
              </div>
              <h3 className="font-display text-lg text-navy-950 mb-2">{t(reason.title)}</h3>
              <p className="text-sm text-[--ink-soft] leading-relaxed">{t(reason.copy)}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
