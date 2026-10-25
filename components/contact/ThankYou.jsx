"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function ThankYou() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const thankYou = content.pages.contact.thankYou;

  return (
    <section className="py-24 bg-navy-950 texture-weave relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-3xl mx-auto px-5 sm:px-8 text-center relative">
        <Reveal>
          <i className="fa-solid fa-hands-holding-circle text-gold-400 text-3xl mb-6"></i>
        </Reveal>
        <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-beige-50 mb-6">
          {t(thankYou.title)}
        </Reveal>
        <Reveal delay={2} as="p" className="text-beige-100/75 leading-relaxed mb-8">
          {t(thankYou.body)}
        </Reveal>
        <Reveal delay={3}>
          <p className="stamp text-gold-400 inline-flex">{t("motto")}</p>
        </Reveal>
      </div>
    </section>
  );
}
