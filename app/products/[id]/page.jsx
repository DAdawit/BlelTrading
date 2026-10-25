import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import ProductDetailView from "@/components/products/ProductDetailView";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: String(product.id),
  }));
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.id === parseInt(params.id));
  if (!product) return { title: "Product Not Found" };

  // Metadata is rendered server-side before the client language store
  // hydrates, so it always uses English — search engines and social
  // previews will see the English name/description regardless of the
  // visitor's chosen language.
  return {
    title: `${product.name.en} | Blel Export Company`,
    description: product.description.en,
  };
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.id === parseInt(params.id));
  if (!product) notFound();

  return <ProductDetailView product={product} />;
}
