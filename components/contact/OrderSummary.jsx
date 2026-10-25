"use client";

import useAppStore from "@/Store/useAppStore";
import { languageTranslate } from "@/utils/data";

export default function OrderSummary({ product, code, price, discount }) {
  const language = useAppStore((state) => state.language);
  const t = (key) => languageTranslate(language, key);

  if (!product) return null;

  return (
    <div className="order-summary rounded-2xl p-6 mb-8">
      <p className="stamp mb-4 text-gold-600">{t("orderSummaryTitle")}</p>
      <dl className="grid sm:grid-cols-2 gap-4 text-sm">
        <div>
          <dt className="text-xs uppercase tracking-wide mb-1 text-[--ink-soft]">{t("orderProduct")}</dt>
          <dd className="font-semibold text-navy-950">{product}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide mb-1 text-[--ink-soft]">{t("orderCode")}</dt>
          <dd className="manifest-code text-navy-950">{code || "—"}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide mb-1 text-[--ink-soft]">{t("orderPrice")}</dt>
          <dd className="font-semibold text-navy-950">{price ? `$${price}` : "—"}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-wide mb-1 text-[--ink-soft]">{t("orderDiscount")}</dt>
          <dd className="font-semibold text-navy-950">
            {discount && Number(discount) > 0 ? `${discount}%` : t("discountNone")}
          </dd>
        </div>
      </dl>
    </div>
  );
}
