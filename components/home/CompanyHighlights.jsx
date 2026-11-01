"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function CompanyHighlights() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.home.companyHighlights;

  return (
    <section className="py-24 bg-beige-50">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="relative h-[440px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=1200&auto=format&fit=crop"
            alt="Agricultural and commodity sourcing in Ethiopia"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute -bottom-6 -end-6 hidden sm:block bg-white rounded-xl shadow-xl p-5 max-w-[220px] border border-beige-200">
            <p className="stamp mb-2">{t(section.badge)}</p>
            <p className="text-sm text-[--ink-soft]">{t(section.badgeCopy)}</p>
          </div>
        </Reveal>

        <div>
          <Reveal as="p" className="section-eyebrow mb-3">
            {t(section.eyebrow)}
          </Reveal>
          <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950 mb-8">
            {t(section.title)}
          </Reveal>
          <div className="space-y-6">
            {section.pillars.map((pillar, i) => (
              <Reveal key={i} delay={i + 2} className="flex gap-4">
                <div className="w-10 h-10 shrink-0 rounded-full border border-gold-500 text-gold-600 flex items-center justify-center">
                  <i className={`fa-solid ${pillar.icon}`}></i>
                </div>
                <div>
                  <h3 className="font-semibold text-navy-950 mb-1">{t(pillar.title)}</h3>
                  <p className="text-sm leading-relaxed text-[--ink-soft]">{t(pillar.copy)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
