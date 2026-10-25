"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function MissionVision() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const { mission, vision } = content.pages.about;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 space-y-16">
        <Reveal className="relative ps-8 border-s-2 border-gold-500">
          <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center absolute -start-6 top-0">
            <i className="fa-solid fa-bullseye"></i>
          </div>
          <p className="section-eyebrow mb-3 ms-2">{t(mission.eyebrow)}</p>
          <p className="text-lg leading-relaxed text-[--ink-soft] ms-2">{t(mission.body)}</p>
        </Reveal>

        <Reveal delay={1} className="relative ps-8 border-s-2 border-navy-900">
          <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center absolute -start-6 top-0">
            <i className="fa-solid fa-eye"></i>
          </div>
          <p className="section-eyebrow mb-3 ms-2">{t(vision.eyebrow)}</p>
          <p className="text-lg leading-relaxed text-[--ink-soft] ms-2">{t(vision.body)}</p>
        </Reveal>
      </div>
    </section>
  );
}
