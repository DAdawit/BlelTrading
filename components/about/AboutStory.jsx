"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function AboutStory() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const story = content.pages.about.story;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-14 items-center">
        <Reveal className="order-2 lg:order-1">
          <p className="section-eyebrow mb-3">{t(story.eyebrow)}</p>
          <h2 className="font-display text-3xl sm:text-4xl text-navy-950 mb-6">{t(story.title)}</h2>
          <p className="text-[--ink-soft] leading-relaxed mb-4">{t(story.paragraph1)}</p>
          <p className="text-[--ink-soft] leading-relaxed">{t(story.paragraph2)}</p>
        </Reveal>
        <Reveal delay={1} className="order-1 lg:order-2 relative h-[420px] rounded-2xl overflow-hidden">
          <Image
            src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=1200&auto=format&fit=crop"
            alt="Coffee lot being graded"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
      </div>
    </section>
  );
}
