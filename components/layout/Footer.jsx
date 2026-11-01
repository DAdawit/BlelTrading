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
  "categoryLivestock",
  "categoryPulses",
  "categoryOilSeeds",
  "categorySpices",
  "categoryGrains",
];

const SOCIALS = [
  { icon: "fa-whatsapp", label: "WhatsApp", href: "https://wa.me/251922858489" },
  { icon: "fa-x-twitter", label: "X (Twitter)", href: "https://x.com/kukusha42296" },
  { icon: "fa-linkedin-in", label: "LinkedIn", href: "https://www.linkedin.com/in/elias-mendaye-3013352bb/" },
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
            width={240}
            height={96}
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
                href={s.href}
                target={s.href !== "#" ? "_blank" : undefined}
                rel={s.href !== "#" ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="w-10 h-10 rounded-full border border-navy-900/20 flex items-center justify-center text-navy-900 hover:border-gold-500 hover:text-gold-600 hover:bg-gold-500/5 transition shadow-sm"
              >
                <i className={`fa-brands ${s.icon} text-base`}></i>
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
              <li key={key}>
                <Link href="/products" className="hover:text-gold-600 transition">
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-navy-950 font-semibold mb-5 text-sm tracking-wide uppercase">
            {t("footerContact")}
          </h3>
          <ul className="space-y-3 text-sm text-navy-800/70">
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-location-dot text-base text-gold-600 mt-1 w-5 text-center shrink-0"></i>
              <span>{t(companyInfo.address)}</span>
            </li>
            <li className="flex items-start gap-3">
              <i className="fa-solid fa-phone text-base text-gold-600 mt-1 w-5 text-center shrink-0"></i>
              <div className="flex flex-col">
                <a href="tel:+251922858489" className="hover:text-gold-600 transition-colors">
                  +251 922 858 489
                </a>
                <a href="tel:+251928761835" className="hover:text-gold-600 transition-colors">
                  +251 928 761 835
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-brands fa-whatsapp text-lg text-gold-600 w-5 text-center shrink-0"></i>
              <a
                href={companyInfo.whatsapp || "https://wa.me/251922858489"}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold-600 transition-colors"
              >
                +251 922 858 489 (WhatsApp)
              </a>
            </li>
            <li className="flex items-center gap-3">
              <i className="fa-solid fa-envelope text-base text-gold-600 w-5 text-center shrink-0"></i>
              <a href={`mailto:${t(companyInfo.email)}`} className="hover:text-gold-600 transition-colors">
                {t(companyInfo.email)}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 border-t border-beige-200 text-xs text-navy-800/50 flex flex-col sm:flex-row gap-2 justify-between">
        <p>&copy; {new Date().getFullYear()} {t(companyInfo.companyName)}. All rights reserved.</p>
        <p>
          {t("developedBy")}{" "}
          <a
            href="https://www.linkedin.com/in/dawit-d/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-navy-900/80 hover:text-gold-600 font-medium underline underline-offset-2 transition-colors"
          >
            Dawit D.
          </a>
        </p>
      </div>
    </footer>
  );
}
