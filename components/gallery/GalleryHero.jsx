"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function GalleryHero() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const hero = content.pages.gallery.hero;

  return (
    <section className="relative pt-40 pb-16 bg-navy-950 texture-weave overflow-hidden">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center">
        <Reveal as="p" className="section-eyebrow text-gold-400 mb-4">{t(hero.eyebrow)}</Reveal>
        <Reveal delay={1} as="h1" className="font-display text-4xl sm:text-5xl text-beige-50 leading-tight">
          {t(hero.title)}
        </Reveal>
        <Reveal delay={2} as="p" className="text-beige-100/75 mt-5 max-w-xl mx-auto">
          {t(hero.subtitle)}
        </Reveal>
      </div>
    </section>
  );
}
