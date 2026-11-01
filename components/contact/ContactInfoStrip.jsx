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
              {item.titleKey === "labelPhone" ? (
                <div className="flex flex-col gap-1.5">
                  <div className="text-sm text-[--ink-soft] flex flex-wrap items-center gap-x-2">
                    <a href="tel:+251922858489" className="hover:text-gold-600 transition-colors">
                      +251 922 858 489
                    </a>
                    <span>/</span>
                    <a href="tel:+251928761835" className="hover:text-gold-600 transition-colors">
                      +251 928 761 835
                    </a>
                  </div>
                  <a
                    href={companyInfo.whatsapp || "https://wa.me/251922858489"}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs text-[--ink-soft] hover:text-gold-600 font-medium transition-colors"
                  >
                    <i className="fa-brands fa-whatsapp text-gold-600"></i>
                    <span>{t("whatsappChat")} (+251 922 858 489)</span>
                  </a>
                </div>
              ) : item.titleKey === "labelEmail" ? (
                <a
                  href={`mailto:${item.value}`}
                  className="text-sm text-[--ink-soft] hover:text-gold-600 transition-colors"
                >
                  {item.value}
                </a>
              ) : (
                <p className="text-sm text-[--ink-soft]">{item.value}</p>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
