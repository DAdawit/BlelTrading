import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import CompanyHighlights from "@/components/home/CompanyHighlights";
import GalleryPreview from "@/components/home/GalleryPreview";
import BusinessProcess from "@/components/home/BusinessProcess";
// import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/shared/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { content } from "@/utils/data";

export const metadata = {
  title: "Blel Trading PLC | Ethiopian Agricultural Commodities & Livestock Export",
  description:
    "Direct exporter of Ethiopian specialty coffee, live cattle & sheep, Humera white sesame seeds, green mung beans, chickpeas, and spices. Inspected, documented, and shipped worldwide.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Blel Trading PLC | Ethiopian Agricultural Commodities & Livestock Export",
    description:
      "Reliable export of Ethiopian specialty coffee, live livestock, pulses, oil seeds, and spices with verified health certification and transparent FOB/CIF delivery.",
    url: "/",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Blel Trading PLC",
      },
    ],
  },
};

const homeJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Blel Trading PLC — Home",
  url: "https://bleltrading.com",
  description:
    "Official website of Blel Trading PLC, Ethiopian exporter of specialty coffee, live livestock, pulses, oil seeds, grains, and spices.",
  mainEntity: {
    "@type": "ItemList",
    name: "Export Commodity Lines",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Specialty Arabica Coffee",
        description: "Yirgacheffe Washed Grade 1 & Sidamo Natural Grade 2 export coffee.",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Live Livestock",
        description: "Pasture-raised Boran cattle, Somali sheep, and pastoral dromedary camels.",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Pulses & Legumes",
        description: "Kabuli chickpeas, green mung beans, soya beans, and red kidney beans.",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: "Oil Seeds",
        description: "Humera & Metema grade white sesame seeds (Selit).",
      },
      {
        "@type": "ListItem",
        position: 5,
        name: "Spices & Aromatics",
        description: "Ethiopian black seed (Nigella sativa) and Ethiopian Cardamom (Korerima).",
      },
    ],
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={homeJsonLd} />
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <Categories />
      <CompanyHighlights />
      <GalleryPreview />
      <BusinessProcess />
      {/* <Testimonials /> */}
      <CtaBanner
        title={content.pages.home.cta.title}
        subtitle={content.pages.home.cta.subtitle}
      />
    </>
  );
}
