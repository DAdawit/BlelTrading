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
import { content } from "@/utils/data";

export const metadata = {
  title: "About Us | Blel Export Company",
  description:
    "Learn how Blel grew from a small Addis Ababa trading desk into a trusted Ethiopian export partner shipping to 20+ countries.",
};

export default function AboutPage() {
  return (
    <>
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
