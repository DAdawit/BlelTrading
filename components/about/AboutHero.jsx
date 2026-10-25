"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function AboutHero() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const hero = content.pages.about.hero;

  return (
    <section className="relative pt-40 pb-20 bg-navy-950 texture-weave overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=2000&auto=format&fit=crop"
        alt="Blel export warehouse team at work"
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 to-navy-950/60"></div>
      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
        <Reveal as="p" className="section-eyebrow text-gold-400 mb-4">{t(hero.eyebrow)}</Reveal>
        <Reveal delay={1} as="h1" className="font-display text-4xl sm:text-6xl text-beige-50 leading-tight mb-8">
          {t(hero.title)}
        </Reveal>
        <Reveal delay={2} as="p" className="text-beige-100/80 leading-relaxed max-w-3xl mx-auto">
          {t(hero.description)}
        </Reveal>
      </div>
    </section>
  );
}
