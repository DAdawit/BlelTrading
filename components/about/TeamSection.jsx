"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

const TEAM_IMAGES = [
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=600&auto=format&fit=crop",
];

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
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {section.members.map((member, i) => (
            <Reveal key={i} delay={i} className="manifest-card overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src={TEAM_IMAGES[i % TEAM_IMAGES.length]}
                  alt={t(member.name)}
                  fill
                  sizes="(max-width: 640px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-navy-950 text-sm">{t(member.name)}</h3>
                <p className="text-xs text-[--ink-soft]">{t(member.role)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
