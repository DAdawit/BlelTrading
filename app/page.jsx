import Hero from "@/components/home/Hero";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Categories from "@/components/home/Categories";
import CompanyHighlights from "@/components/home/CompanyHighlights";
import GalleryPreview from "@/components/home/GalleryPreview";
import BusinessProcess from "@/components/home/BusinessProcess";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/shared/CtaBanner";
import { content } from "@/utils/data";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <FeaturedProducts />
      <Categories />
      <CompanyHighlights />
      <GalleryPreview />
      <BusinessProcess />
      <Testimonials />
      <CtaBanner
        title={content.pages.home.cta.title}
        subtitle={content.pages.home.cta.subtitle}
      />
    </>
  );
}
