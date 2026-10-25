import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoStrip from "@/components/contact/ContactInfoStrip";
import ContactPageClient from "@/components/contact/ContactPageClient";
import MapCard from "@/components/contact/MapCard";
import ThankYou from "@/components/contact/ThankYou";

export const metadata = {
  title: "Contact Us | Blel Export Company",
  description:
    "Get a quotation from Blel — coffee, pulses, oil seeds, spices, grains and herbs exported from Addis Ababa to 20+ countries.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfoStrip />

      <section className="py-24 bg-beige-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            {/* useSearchParams requires a Suspense boundary in the App Router */}
            <Suspense fallback={null}>
              <ContactPageClient />
            </Suspense>
          </div>
          <div className="lg:col-span-2">
            <MapCard />
          </div>
        </div>
      </section>

      <ThankYou />
    </>
  );
}
