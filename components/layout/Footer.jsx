"use client";

import Link from "next/link";
import Image from "next/image";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

const QUICK_LINKS = [
  { href: "/", key: "navHome" },
  { href: "/about", key: "navAbout" },
  { href: "/products", key: "navProducts" },
  { href: "/gallery", key: "navGallery" },
  { href: "/contact", key: "navContact" },
];

const CATEGORY_KEYS = [
  "categoryCoffee",
  "categoryPulses",
  "categoryOilSeeds",
  "categorySpices",
  "categoryGrains",
  "categoryHerbs",
];

const SOCIALS = [
  { icon: "fa-facebook-f", label: "Facebook" },
  { icon: "fa-linkedin-in", label: "LinkedIn" },
  { icon: "fa-instagram", label: "Instagram" },
  { icon: "fa-x-twitter", label: "X (Twitter)" },
];

export default function Footer() {
  const language = useAppStore((state) => state.language);
  const t = (key) => languageTranslate(language, key);
  const { companyInfo } = content.commone;

  return (
    <footer className="bg-beige-100 pt-16 pb-8 border-t border-beige-200">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        <div>
          <Image
            src="/logo1.png"
            alt={t(companyInfo.companyName)}
            width={0}
            height={0}
            sizes="100vw"
            className="h-24 w-auto"
          />
          <p className="text-sm text-navy-800/70 mt-4 leading-relaxed">
            {t(companyInfo.description)}
          </p>
          <p className="text-xs font-mono uppercase tracking-widest text-gold-600 mt-4">
            {t("motto")}
          </p>
          <div className="flex gap-3 mt-6">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-navy-900/15 flex items-center justify-center text-navy-900 hover:border-gold-500 hover:text-gold-600 transition"
              >
                <i className={`fa-brands ${s.icon} text-sm`}></i>
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-navy-950 font-semibold mb-5 text-sm tracking-wide uppercase">
            {t("footerQuickLinks")}
          </h3>
          <ul className="space-y-3 text-sm text-navy-800/70">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold-600 transition">
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-navy-950 font-semibold mb-5 text-sm tracking-wide uppercase">
            {t("footerCategories")}
          </h3>
          <ul className="space-y-3 text-sm text-navy-800/70">
            {CATEGORY_KEYS.map((key) => (
              <li key={key}>{t(key)}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-navy-950 font-semibold mb-5 text-sm tracking-wide uppercase">
            {t("footerContact")}
          </h3>
          <ul className="space-y-3 text-sm text-navy-800/70">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot mt-1 text-gold-600"></i>
              {t(companyInfo.address)}
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-phone text-gold-600"></i>
              {t(companyInfo.phone)}
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-gold-600"></i>
              {t(companyInfo.email)}
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 border-t border-beige-200 text-xs text-navy-800/50 flex flex-col sm:flex-row gap-2 justify-between">
        <p>&copy; {new Date().getFullYear()} {t(companyInfo.companyName)}. All rights reserved.</p>
        <p>{t("footerDesignedBy")}</p>
      </div>
    </footer>
  );
}
