"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function ContactInfoStrip() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const { companyInfo } = content.commone;

  const INFO = [
    { icon: "fa-phone", titleKey: "labelPhone", value: t(companyInfo.phone) },
    { icon: "fa-envelope", titleKey: "labelEmail", value: t(companyInfo.email) },
    { icon: "fa-location-dot", titleKey: "labelAddress", value: t(companyInfo.address) },
  ];

  return (
    <section className="py-16 bg-white border-b border-beige-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-3 gap-6">
        {INFO.map((item, i) => (
          <Reveal key={item.titleKey} delay={i} className="manifest-card p-7 flex items-start gap-4">
            <div className="w-11 h-11 shrink-0 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center">
              <i className={`fa-solid ${item.icon}`}></i>
            </div>
            <div>
              <h3 className="font-semibold text-navy-950 text-sm mb-1">{t(item.titleKey)}</h3>
              <p className="text-sm text-[--ink-soft]">{item.value}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
