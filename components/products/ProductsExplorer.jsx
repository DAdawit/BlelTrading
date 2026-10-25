"use client";

import { useMemo, useState } from "react";
import { PRODUCTS, CATEGORIES } from "@/lib/data/products";
import ProductCard from "@/components/products/ProductCard";
import ProductSearchBar from "@/components/products/ProductSearchBar";
import CategoryFilterBar from "@/components/products/CategoryFilterBar";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function ProductsExplorer() {
  const language = useAppStore((state) => state.language);
  const t = (key) => languageTranslate(language, key);

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return PRODUCTS.filter((p) => {
      const matchesCategory = activeCategory === "All" || p.category === activeCategory;
      const name = languageTranslate(language, p.name).toLowerCase();
      const matchesTerm = !term || name.includes(term) || p.product_code.toLowerCase().includes(term);
      return matchesCategory && matchesTerm;
    });
  }, [searchTerm, activeCategory, language]);

  return (
    <>
      <section className="sticky top-20 z-30 bg-beige-50/95 backdrop-blur border-b border-beige-200 py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <ProductSearchBar value={searchTerm} onChange={setSearchTerm} />
          <CategoryFilterBar
            categories={CATEGORIES}
            active={activeCategory}
            onChange={setActiveCategory}
          />
        </div>
      </section>

      <section className="py-16 bg-beige-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-24">
              <i className="fa-solid fa-box-open text-3xl mb-4 text-[--ink-soft]"></i>
              <p className="text-[--ink-soft]">{t("noProductsFound")}</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
