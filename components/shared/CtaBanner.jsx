"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

/**
 * Reusable CTA banner. `title` / `subtitle` are translation nodes
 * (e.g. content.pages.home.cta.title). Button labels default to the
 * common "Contact Us" / "Request Quotation" ui strings but can be
 * overridden with any ui key via primaryKey / secondaryKey.
 */
export default function CtaBanner({
  title,
  subtitle,
  primaryHref = "/contact",
  primaryKey = "contactUs",
  secondaryHref = "/products",
  secondaryKey = "requestQuotation",
}) {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);

  return (
    <section className="py-20 bg-navy-950 texture-weave relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-5 text-center relative">
        <Reveal as="h2" className="font-display text-3xl sm:text-4xl text-beige-50 mb-5">
          {t(title)}
        </Reveal>
        {subtitle && (
          <Reveal delay={1} as="p" className="text-beige-100/75 mb-9">
            {t(subtitle)}
          </Reveal>
        )}
        <Reveal delay={2} className="flex flex-wrap justify-center gap-4">
          <Link href={primaryHref} className="btn btn-gold">
            {t(primaryKey)}
          </Link>
          <Link href={secondaryHref} className="btn btn-outline">
            {t(secondaryKey)}
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
