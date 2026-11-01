"use client";

import Link from "next/link";
import Image from "next/image";
import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";
import { CATEGORY_UI_KEY } from "@/lib/data/products";

/**
 * Reusable product card. The image/name/description area links through to
 * the full product detail page (/products/[id]); the "Order Now" button is
 * a separate sibling link (not nested) straight to the pre-filled contact form.
 */
export default function ProductCard({ product }) {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);

  const name = t(product.name);
  const description = t(product.description);
  const categoryLabel = t(CATEGORY_UI_KEY[product.category]);
  const detailHref = `/products/${product.id}`;

  const orderHref = `/contact?${new URLSearchParams({
    product: name,
    code: product.product_code,
  }).toString()}`;

  return (
    <article className="manifest-card group flex flex-col">
      <Link href={detailHref} className="contents">
        <div className="img-zoom relative h-56">
          <Image
            src={product.image}
            alt={name}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover"
          />
          <span className="absolute top-4 left-4 bg-white/90 text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full text-navy-900">
            {categoryLabel}
          </span>
        </div>
        <div className="manifest-tear"></div>
      </Link>

      <div className="p-6 flex flex-col flex-1">
        <Link href={detailHref} className="contents">
          <span className="manifest-code text-[11px] text-[--ink-soft] mb-1">
            {product.product_code}
          </span>
          <h3 className="font-display text-xl mb-2 text-navy-950">{name}</h3>
          <p className="text-sm leading-relaxed mb-4 flex-1 text-[--ink-soft] line-clamp-3">{description}</p>
        </Link>
        <div className="flex items-center justify-between mt-auto pt-3 border-t border-beige-100">
          <div className="flex items-center gap-1.5 text-gold-600 font-mono text-xs">
            <i className="fa-solid fa-file-invoice text-gold-500"></i>
            <span>{t("priceOnRequest")}</span>
          </div>
          <Link href={orderHref} className="btn btn-dark !py-2 !px-4 text-sm">
            {t("orderNow")}
          </Link>
        </div>
      </div>
    </article>
  );
}
