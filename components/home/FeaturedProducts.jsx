"use client";

import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import ProductCard from "@/components/products/ProductCard";
import { PRODUCTS, FEATURED_IDS } from "@/lib/data/products";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

export default function FeaturedProducts() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.home.featuredProducts;
  const featured = PRODUCTS.filter((p) => FEATURED_IDS.includes(p.id));

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-14">
          <div className="max-w-xl">
            <Reveal as="p" className="section-eyebrow mb-3">
              {t(section.eyebrow)}
            </Reveal>
            <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950">
              {t(section.title)}
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link href="/products" className="btn btn-dark">
              {t("viewAllProducts")}
            </Link>
          </Reveal>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
