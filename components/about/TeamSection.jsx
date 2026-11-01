"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function TeamSection() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.about.team;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <Reveal as="p" className="section-eyebrow mb-3">{t(section.eyebrow)}</Reveal>
          <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950">{t(section.title)}</Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {section.members.map((member, i) => (
            <Reveal key={i} delay={i} className="manifest-card overflow-hidden flex flex-col">
              <div className="relative w-full h-80 bg-beige-100">
                <Image
                  src={member.image}
                  alt={t(member.name)}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-semibold text-navy-950 text-base">{t(member.name)}</h3>
                <p className="text-xs text-gold-600 font-medium tracking-wide mt-1 uppercase">{t(member.role)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
