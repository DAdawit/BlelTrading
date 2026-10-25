"use client";

import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function ProcessTimeline() {
  const language = useAppStore((state) => state.language);
  const steps = content.commone.processSteps;

  return (
    <div className="flex flex-wrap items-stretch justify-center gap-3 md:gap-2">
      {steps.map((step, i) => (
        <Reveal key={i} delay={i} className="flex items-center gap-3 md:gap-2">
          <div className="flex flex-col items-center text-center w-32 sm:w-36">
            <div className="w-12 h-12 rounded-full bg-navy-900 text-gold-400 flex items-center justify-center font-mono text-sm shrink-0 mb-3">
              {String(i + 1).padStart(2, "0")}
            </div>
            <h3 className="font-semibold text-navy-900 text-sm leading-snug">
              {languageTranslate(language, step.title)}
            </h3>
          </div>
          {i < steps.length - 1 && (
            <i
              className={`fa-solid ${language === "ar" ? "fa-arrow-left" : "fa-arrow-right"} text-gold-400 text-sm hidden md:block`}
              aria-hidden="true"
            ></i>
          )}
        </Reveal>
      ))}
    </div>
  );
}
