"use client";

import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function FounderMessage() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const founder = content.commone.founderMessage;

  return (
    <section className="py-24 bg-beige-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-4 gap-10 md:gap-14 items-start">
          {/* Left quarter: founder photo + name */}
          <Reveal className="md:col-span-1 flex flex-col items-center text-center">
            <div className="relative w-40 h-40 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-5 bg-beige-200">
              <Image
                src={founder.image}
                alt={t(founder.name)}
                fill
                sizes="200px"
                className="object-cover object-top"
              />
            </div>
            <h3 className="font-display text-xl text-navy-950">{t(founder.name)}</h3>
            <p className="text-xs uppercase tracking-widest text-gold-600 mt-1">{t(founder.role)}</p>
            {founder.linkedin && (
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-navy-900 hover:text-gold-600 transition-colors mt-3 py-1.5 px-3.5 rounded-full bg-white border border-beige-200 shadow-sm"
              >
                <i className="fa-brands fa-linkedin text-sm text-[#0077b5]"></i>
                <span className="font-medium">LinkedIn</span>
              </a>
            )}
          </Reveal>

          {/* Right three-quarters: message */}
          <Reveal delay={1} className="md:col-span-3">
            <p className="section-eyebrow mb-4">{t(founder.eyebrow)}</p>
            <i className="fa-solid fa-quote-left text-gold-500/40 text-3xl mb-4 block"></i>
            <p className="font-display text-2xl sm:text-3xl text-navy-950 leading-snug mb-6">
              {t(founder.body)}
            </p>
            <p className="text-sm font-mono uppercase tracking-widest text-gold-600">{t("motto")}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
