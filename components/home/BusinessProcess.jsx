"use client";

import Reveal from "@/components/motion/Reveal";
import ProcessTimeline from "@/components/shared/ProcessTimeline";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function BusinessProcess() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.home.businessProcess;

  return (
    <section className="py-24 bg-beige-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <Reveal as="p" className="section-eyebrow mb-3">
            {t(section.eyebrow)}
          </Reveal>
          <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950">
            {t(section.title)}
          </Reveal>
        </div>
        <ProcessTimeline />
      </div>
    </section>
  );
}
