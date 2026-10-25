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
          src="https://www.google.com/maps?q=Bole+Road,Addis+Ababa,Ethiopia&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
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
