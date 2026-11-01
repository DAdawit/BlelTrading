import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryExplorer from "@/components/gallery/GalleryExplorer";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bleltrading.com";

export const metadata = {
  title: "Export Operations Gallery | Photos & Videos",
  description:
    "Explore Blel Trading PLC's export operations — authentic photos and videos of Ethiopian specialty coffee drying, Boran cattle herds, sheep yards, camel selection, and sesame lots.",
  alternates: {
    canonical: "/gallery",
  },
  openGraph: {
    title: "Export Operations Gallery | Blel Trading PLC",
    description:
      "Visual documentation of Blel Trading PLC's coffee, livestock, and commodity export operations across Ethiopia.",
    url: "/gallery",
    images: [
      {
        url: "/gallary/cow1.jpg",
        width: 1200,
        height: 800,
        alt: "Ethiopian Boran Cattle Export Herd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Export Operations Gallery | Blel Trading PLC",
    description:
      "High-resolution photos and real video records of Blel Trading PLC's export operations.",
    images: ["/gallary/cow1.jpg"],
  },
};

const galleryJsonLd = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  name: "Blel Trading PLC Export Operations Gallery",
  url: `${SITE_URL}/gallery`,
  description:
    "Photo and video records of Blel Trading PLC's agricultural commodity processing, specialty coffee handling, and live livestock export yards.",
};

export default function GalleryPage() {
  return (
    <>
      <JsonLd data={galleryJsonLd} />
      <GalleryHero />
      <GalleryExplorer />
    </>
  );
}
