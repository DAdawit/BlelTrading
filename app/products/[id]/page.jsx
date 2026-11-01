import { notFound } from "next/navigation";
import { PRODUCTS } from "@/lib/data/products";
import ProductDetailView from "@/components/products/ProductDetailView";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bleltrading.com";

export function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    id: String(product.id),
  }));
}

export function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.id === parseInt(params.id));
  if (!product) return { title: "Product Not Found" };

  const originText =
    typeof product.origin === "object"
      ? product.origin.en
      : product.origin || "Ethiopia";

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image.startsWith("/") ? product.image : `/${product.image}`}`;

  return {
    title: `${product.name.en} (Code: ${product.product_code})`,
    description: `${product.description.en} Sourced from ${originText}. Official export quotation provided via FOB Djibouti or CIF.`,
    alternates: {
      canonical: `/products/${product.id}`,
    },
    openGraph: {
      title: `${product.name.en} | Blel Trading PLC`,
      description: product.description.en,
      url: `/products/${product.id}`,
      images: [
        {
          url: imageUrl,
          alt: product.name.en,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name.en} | Blel Trading PLC`,
      description: product.description.en,
      images: [imageUrl],
    },
  };
}

export default function ProductPage({ params }) {
  const product = PRODUCTS.find((p) => p.id === parseInt(params.id));
  if (!product) notFound();

  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${SITE_URL}${product.image.startsWith("/") ? product.image : `/${product.image}`}`;

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name.en,
    sku: product.product_code,
    mpn: product.product_code,
    image: imageUrl,
    description: product.description.en,
    category: product.category,
    countryOfOrigin: {
      "@type": "Country",
      name: "Ethiopia",
    },
    brand: {
      "@type": "Brand",
      name: "Blel Trading PLC",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/products/${product.id}`,
      itemCondition: "https://schema.org/NewCondition",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: "0",
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
        description: "Official quotation on request (Incoterms: FOB Djibouti / CIF)",
      },
      seller: {
        "@type": "Organization",
        name: "Blel Trading PLC",
      },
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: SITE_URL,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Products",
          item: `${SITE_URL}/products`,
        },
        {
          "@type": "ListItem",
          position: 3,
          name: product.name.en,
          item: `${SITE_URL}/products/${product.id}`,
        },
      ],
    },
  };

  return (
    <>
      <JsonLd data={productJsonLd} />
      <ProductDetailView product={product} />
    </>
  );
}
