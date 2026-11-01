"use client";

import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function MapCard() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const { officeHours } = content.commone;

  return (
    <div>
      <div className="rounded-2xl overflow-hidden border border-beige-200 h-72 lg:h-full min-h-[320px] relative bg-beige-100">
        <iframe
          title={t(content.pages.contact.map.title)}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.341330679604!2d38.7730418!3d9.0325948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85ae0e832c6d%3A0x18cc91082943f41d!2sBlel%20Trading%20PLC!5e0!3m2!1sen!2set!4v1793082330822!5m2!1sen!2set"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        />
      </div>
      <div className="manifest-card p-6 mt-6">
        <p className="stamp mb-3">{t(officeHours.title)}</p>
        <ul className="text-sm space-y-2 text-[--ink-soft]">
          {officeHours.rows.map((row, i) => (
            <li key={i} className="flex justify-between">
              <span>{t(row.day)}</span>
              <span>{t(row.time)}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
