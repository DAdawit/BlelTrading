import ProductsHero from "@/components/products/ProductsHero";
import ProductsExplorer from "@/components/products/ProductsExplorer";
import CtaBanner from "@/components/shared/CtaBanner";
import { content } from "@/utils/data";

export const metadata = {
  title: "Products | Blel Export Company",
  description:
    "Browse Blel's export catalog — coffee, pulses, oil seeds, spices, grains and herbs. Search by name or product code, filter by category, and request a quotation.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductsExplorer />
      <CtaBanner
        title={content.pages.products.cta.title}
        subtitle={content.pages.products.cta.subtitle}
        primaryHref="/contact"
        primaryKey="contactUs"
        secondaryHref="/"
        secondaryKey="backToHome"
      />
    </>
  );
}
