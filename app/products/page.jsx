import ProductsHero from "@/components/products/ProductsHero";
import ProductsExplorer from "@/components/products/ProductsExplorer";
import CtaBanner from "@/components/shared/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { PRODUCTS } from "@/lib/data/products";
import { content } from "@/utils/data";

export const metadata = {
  title: "Export Product Catalog | Specialty Coffee, Livestock, Pulses & Seeds",
  description:
    "Explore Blel Trading PLC's verified export catalog — Ethiopian specialty coffee (Yirgacheffe & Sidamo), live cattle, sheep, camels, Humera sesame, green mung beans, chickpeas, and cardamom. Quote directly by lot code.",
  alternates: {
    canonical: "/products",
  },
  openGraph: {
    title: "Export Product Catalog | Blel Trading PLC",
    description:
      "Full export catalog with product codes, harvesting regions, and FOB Djibouti quotation options. Coffee, live livestock, pulses, oil seeds, and spices.",
    url: "/products",
    images: [
      {
        url: "/gallary/coffee1.jpg",
        width: 810,
        height: 1080,
        alt: "Blel Trading PLC Export Catalog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Product Catalog | Blel Trading PLC",
    description:
      "Specialty coffee, live cattle & sheep, sesame seeds, pulses, and spices ready for global shipment.",
    images: ["/gallary/coffee1.jpg"],
  },
};

const productsCollectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Blel Trading PLC Export Catalog",
  url: "https://bleltrading.com/products",
  description:
    "Export-ready catalog of Ethiopian agricultural commodities, specialty coffee, and live livestock.",
  mainEntity: {
    "@type": "ItemList",
    numberOfItems: PRODUCTS.length,
    itemListElement: PRODUCTS.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Product",
        name: product.name.en,
        sku: product.product_code,
        category: product.category,
        image: `https://bleltrading.com${product.image.startsWith("/") ? product.image : `/${product.image}`}`,
        url: `https://bleltrading.com/products/${product.id}`,
        description: product.description.en,
      },
    })),
  },
};

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={productsCollectionJsonLd} />
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
