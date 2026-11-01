"use client";

import Link from "next/link";
import Image from "next/image";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import { CATEGORY_UI_KEY } from "@/lib/data/products";
import Reveal from "@/components/motion/Reveal";

export default function ProductDetailView({ product }) {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);

  if (!product) return null;

  const name = t(product.name);
  const description = t(product.description);
  const categoryLabel = t(CATEGORY_UI_KEY[product.category]);

  const orderHref = `/contact?${new URLSearchParams({
    product: name,
    code: product.product_code,
  }).toString()}`;

  const specs = [
    {
      label: t("specOrigin"),
      value: product.origin
        ? typeof product.origin === "object"
          ? t(product.origin)
          : product.origin
        : t("originValue"),
    },
    { label: t("specCategory"), value: categoryLabel },
    { label: t("specCode"), value: product.product_code },
    { label: t("specGrade"), value: t("gradeValue") },
  ];

  return (
    <div className="bg-beige-50 min-h-screen">
      {/* Hero Section */}
      <section className="pt-36 pb-16 bg-navy-950 texture-weave border-b border-gold-600/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gold-500/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
          <Reveal delay={0}>
            <Link
              href="/products"
              className="inline-flex items-center gap-3 text-gold-400 hover:text-gold-100 transition-colors text-[11px] font-mono uppercase tracking-widest mb-10"
            >
              <i className={`fa-solid ${language === "ar" ? "fa-arrow-right" : "fa-arrow-left"} text-[10px]`}></i>
              {t("backToCatalog")}
            </Link>
          </Reveal>

          <Reveal delay={1}>
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="section-eyebrow text-gold-500 bg-gold-500/10 px-3.5 py-1.5 rounded-full border border-gold-500/20">
                {categoryLabel}
              </span>
              <span className="manifest-code text-beige-100/40">
                {t("specCode")}: {product.product_code}
              </span>
            </div>
          </Reveal>

          <Reveal delay={2}>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-beige-50 leading-[1.1] max-w-4xl drop-shadow-lg">
              {name}
            </h1>
          </Reveal>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20">
          {/* Left Column: Feature Image */}
          <div className="lg:col-span-7">
            <Reveal delay={3} className="sticky top-28">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border-[6px] border-white bg-white group">
                <div className="absolute inset-0 bg-navy-950/10 z-10 pointer-events-none group-hover:bg-transparent transition-colors duration-700"></div>
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-beige-100">
                  <Image
                    src={product.image}
                    alt={name}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-110"
                  />
                </div>
                <div className="absolute bottom-8 left-8 z-20 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <div className="stamp text-white border-white bg-white/10 backdrop-blur-md px-6 py-2 shadow-lg">
                    {t("exportReady")}
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Details & Order Manifest */}
          <div className="lg:col-span-5 flex flex-col">
            <Reveal delay={4}>
              <h3 className="font-display text-3xl text-navy-950 mb-6 border-b border-beige-200 pb-5">
                {t("overview")}
              </h3>
              <p className="text-lg text-[--ink-soft] leading-relaxed mb-6">{description}</p>
              {product.harvesting_places && (
                <div className="mb-10 p-5 rounded-2xl bg-gold-500/5 border border-gold-500/20">
                  <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-gold-600 mb-2 font-semibold">
                    <i className="fa-solid fa-map-location-dot"></i>
                    {t("harvestingRegions")}
                  </div>
                  <p className="text-sm text-navy-950 leading-relaxed font-medium">
                    {t(product.harvesting_places)}
                  </p>
                </div>
              )}
            </Reveal>

            <Reveal delay={5}>
              <div className="grid grid-cols-2 gap-x-8 gap-y-8 mb-14">
                {specs.map((spec, i) => (
                  <div key={i} className="flex flex-col group">
                    <span className="manifest-code text-[10px] text-gold-600 mb-1.5 transition-colors">
                      {spec.label}
                    </span>
                    <span className="font-medium text-navy-950 border-b border-beige-200 pb-2.5 group-hover:border-gold-400 transition-colors">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={6} className="mt-auto">
              <div className="manifest-card bg-white shadow-xl shadow-navy-900/5 hover:-translate-y-2 transition-transform duration-500">
                <div className="p-8 pb-6 bg-gradient-to-br from-gold-100/50 to-white">
                  <div className="flex items-center justify-between mb-4">
                    <span className="manifest-code text-xs text-gold-600 tracking-[0.2em] font-semibold">
                      {t("quotationLabel")}
                    </span>
                    <span className="manifest-code text-[10px] text-[--ink-soft] bg-beige-100 px-2 py-1 rounded">
                      {t("incotermsLabel")}
                    </span>
                  </div>
                  <div className="mt-4 mb-2">
                    <span className="font-display text-3xl sm:text-4xl text-navy-950 tracking-tight block mb-2">
                      {t("priceOnRequest")}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-xs font-mono text-gold-600 bg-gold-500/10 px-3 py-1 rounded-full border border-gold-500/20">
                      <i className="fa-solid fa-anchor text-[10px]"></i>
                      {t("fobDjibouti")}
                    </span>
                  </div>
                  <p className="text-[13px] text-[--ink-soft] mt-4 leading-relaxed">
                    {t("pricingAvailableNote")}
                  </p>
                </div>

                <div className="manifest-tear"></div>

                <div className="p-8 pt-6">
                  <Link
                    href={orderHref}
                    className="btn btn-gold w-full justify-center py-4 text-lg group relative overflow-hidden rounded-xl"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {t("orderNow")}
                      <i
                        className={`fa-solid ${language === "ar" ? "fa-arrow-left" : "fa-arrow-right"} transition-transform duration-300 group-hover:translate-x-2`}
                      ></i>
                    </span>
                  </Link>
                  <a
                    href={`https://wa.me/251922858489?text=${encodeURIComponent(`Hello Blel Trading, I would like to inquire about ${name} (Code: ${product.product_code}).`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full mt-3 py-3 px-4 rounded-xl border border-beige-300 text-navy-950 bg-white hover:bg-beige-100 hover:border-gold-500 text-sm font-medium transition flex items-center justify-center gap-2"
                  >
                    <i className="fa-brands fa-whatsapp text-gold-600 text-base"></i>
                    <span>{t("inquireWhatsApp")}</span>
                  </a>
                  <p className="text-center text-[10px] tracking-widest text-[--ink-soft] font-mono mt-5">
                    {t("secureExportProcessing")}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
