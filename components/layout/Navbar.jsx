"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

const NAV_LINKS = [
  { href: "/", key: "navHome" },
  { href: "/about", key: "navAbout" },
  { href: "/products", key: "navProducts" },
  { href: "/gallery", key: "navGallery" },
  { href: "/contact", key: "navContact" },
];

export default function Navbar() {
  const language = useAppStore((state) => state.language);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const t = (key) => languageTranslate(language, key);
  const companyInfo = content.commone.companyInfo;

  return (
    <header
      className={`nav-shell fixed top-0 inset-x-0 z-50 ${isScrolled ? "is-scrolled" : ""}`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-20">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image
            src="/logo1.png"
            alt={t(companyInfo.companyName)}
            width={180}
            height={56}
            sizes="100vw"
            className="h-14 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-9 font-medium text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href
                  ? "is-active text-navy-950"
                  : "text-navy-800/80 hover:text-gold-600"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="hidden md:inline-flex btn btn-gold !py-2.5 !px-5 text-sm"
          >
            {t("navContact")}
          </Link>
          <button
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((v) => !v)}
            className="md:hidden text-navy-900 text-xl w-10 h-10 flex items-center justify-center"
          >
            <i
              className={`fa-solid ${isMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-beige-50 border-t border-beige-200 px-5 py-5 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${
                pathname === link.href
                  ? "is-active text-navy-950"
                  : "text-navy-800/80 hover:text-gold-600"
              }`}
            >
              {t(link.key)}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-gold justify-center mt-2">
            {t("navContact")}
          </Link>
        </div>
      )}
    </header>
  );
}
