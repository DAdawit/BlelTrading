import AboutHero from "@/components/about/AboutHero";
import AboutStory from "@/components/about/AboutStory";
import FounderMessage from "@/components/about/FounderMessage";
import MissionVision from "@/components/about/MissionVision";
import CoreValues from "@/components/about/CoreValues";
import AboutProcess from "@/components/about/AboutProcess";
import WhyChooseUsAbout from "@/components/about/WhyChooseUsAbout";
import ExportMarketsStats from "@/components/about/ExportMarketsStats";
import TeamSection from "@/components/about/TeamSection";
import CtaBanner from "@/components/shared/CtaBanner";
import JsonLd from "@/components/seo/JsonLd";
import { content } from "@/utils/data";

export const metadata = {
  title: "About Us | Ethiopian Commodity & Livestock Exporter",
  description:
    "Learn about Blel Trading PLC — our mission, vision, leadership team led by Elias Mendaye, and our proven export operations connecting Ethiopia's harvest to 7+ countries.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Blel Trading PLC | Ethiopian Commodity & Livestock Exporter",
    description:
      "Bridging the gap between Ethiopian agricultural producers, pastoral communities, and international buyers with rigorous quality grading and export documentation.",
    url: "/about",
    images: [
      {
        url: "/teams/ELIAS MENDAYE.png",
        width: 800,
        height: 800,
        alt: "Elias Mendaye, Founder & CEO of Blel Trading PLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Blel Trading PLC",
    description: "Exporting premium Ethiopian commodities and livestock worldwide.",
    images: ["/teams/ELIAS MENDAYE.png"],
  },
};

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Blel Trading PLC",
  url: "https://bleltrading.com/about",
  description:
    "Company background, mission, vision, and executive team of Blel Trading PLC.",
  mainEntity: {
    "@type": "Corporation",
    name: "Blel Trading PLC",
    founder: {
      "@type": "Person",
      name: "Elias Mendaye",
      jobTitle: "Founder & CEO",
      sameAs: "https://www.linkedin.com/in/elias-mendaye-3013352bb/",
    },
    employee: [
      {
        "@type": "Person",
        name: "Daniel Tadesse",
        jobTitle: "Head of Quality Control and International Sales",
      },
      {
        "@type": "Person",
        name: "Yetemegn Mersha",
        jobTitle: "Logistics & Documentation",
      },
    ],
  },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />
      <AboutHero />
      <AboutStory />
      <FounderMessage />
      <MissionVision />
      <CoreValues />
      <AboutProcess />
      <WhyChooseUsAbout />
      <ExportMarketsStats />
      <TeamSection />
      <CtaBanner
        title={content.pages.about.cta.title}
        primaryHref="/contact"
        primaryKey="contactUs"
        secondaryHref="/products"
        secondaryKey="browseProducts"
      />
    </>
  );
}
