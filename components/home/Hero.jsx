"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function Hero() {
  const language = useAppStore((state) => state.language);
  const hero = content.pages.home.hero;
  const t = (node) => languageTranslate(language, node);

  return (
    <section className="texture-weave relative min-h-screen flex items-center bg-navy-950 overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=2000&auto=format&fit=crop"
        alt="Coffee cherries being sorted at an Ethiopian export facility"
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/85 to-navy-950/40"></div>

      <svg
        className="absolute inset-0 w-full h-full hidden lg:block"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          className="route-line"
          d="M120,650 C400,500 500,750 760,600 C1000,470 1150,520 1340,360"
          stroke="#c9a868"
          strokeWidth="1.5"
          fill="none"
          opacity="0.5"
        />
        <circle cx="120" cy="650" r="4" fill="#c9a868" />
        <circle cx="1340" cy="360" r="4" fill="#c9a868" />
      </svg>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        <Reveal className="flex flex-wrap items-center gap-4 mb-5">
          <p className="section-eyebrow text-gold-400">{t(hero.eyebrow)}</p>
          <span className="stamp text-gold-400">{t("motto")}</span>
        </Reveal>
        <Reveal
          delay={1}
          as="h1"
          className="font-display text-4xl sm:text-6xl lg:text-7xl leading-[1.05] text-beige-50 max-w-4xl"
        >
          {t(hero.title)}
        </Reveal>
        <Reveal delay={2} as="p" className="mt-6 text-beige-100/80 text-lg max-w-xl leading-relaxed">
          {t(hero.subtitle)}
        </Reveal>

        <Reveal delay={3} className="mt-9 flex flex-wrap gap-4">
          <Link href="/products" className="btn btn-gold">
            {t(hero.ctaPrimary)} <i className="fa-solid fa-arrow-right text-xs"></i>
          </Link>
          <Link href="/contact" className="btn btn-outline">
            {t(hero.ctaSecondary)}
          </Link>
        </Reveal>

        <Reveal
          delay={4}
          className="mt-16 grid grid-cols-3 max-w-2xl gap-6 sm:gap-10 border-t border-white/10 pt-8"
        >
          {hero.stats.map((stat, i) => (
            <div key={i}>
              <p className="font-display text-3xl sm:text-4xl text-gold-400">{t(stat.value)}</p>
              <p className="text-xs sm:text-sm text-beige-100/70 mt-1">{t(stat.label)}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
