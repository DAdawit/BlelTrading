"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

const CATEGORIES = [
  { key: "categoryCoffee", image: "/gallary/coffee1.jpg" },
  { key: "categoryLivestock", image: "/gallary/cow1.jpg" },
  { key: "categoryPulses", image: "/gallary/Pulses.jpg" },
  { key: "categoryOilSeeds", image: "/gallary/Sesame Seed.jpg" },
  { key: "categorySpices", image: "/gallary/Black seed.jpg" },
  { key: "categoryGrains", image: "/gallary/Sorghum.jpg" },
];

export default function Categories() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.home.categories;

  return (
    <section className="py-24 bg-navy-950 texture-weave relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative">
        <div className="max-w-2xl mb-14">
          <Reveal as="p" className="section-eyebrow text-gold-400 mb-3">
            {t(section.eyebrow)}
          </Reveal>
          <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-beige-50">
            {t(section.title)}
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {CATEGORIES.map((category, i) => (
            <Reveal key={category.key} delay={i}>
              <Link
                href="/products"
                className="group relative rounded-2xl overflow-hidden aspect-[4/5] block"
              >
                <Image
                  src={category.image}
                  alt={t(category.key)}
                  fill
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent"></div>
                <span className="absolute bottom-4 left-4 font-display text-lg text-beige-50">
                  {t(category.key)}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
