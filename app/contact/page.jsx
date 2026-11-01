import { Suspense } from "react";
import ContactHero from "@/components/contact/ContactHero";
import ContactInfoStrip from "@/components/contact/ContactInfoStrip";
import ContactPageClient from "@/components/contact/ContactPageClient";
import MapCard from "@/components/contact/MapCard";
import ThankYou from "@/components/contact/ThankYou";
import JsonLd from "@/components/seo/JsonLd";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bleltrading.com";

export const metadata = {
  title: "Contact Us & Request Quotation | Addis Ababa Export Desk",
  description:
    "Get in touch with Blel Trading PLC for proforma export quotations. Direct phone: +251 922 858 489, WhatsApp support, email, and office location in Addis Ababa, Ethiopia.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Blel Trading PLC | Commercial Quotation Requests",
    description:
      "Request quotes for specialty coffee, live livestock, pulses, oil seeds, and spices. Office in Addis Ababa, shipping worldwide.",
    url: "/contact",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Contact Blel Trading PLC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Blel Trading PLC",
    description:
      "Direct communication desk for international buyers sourcing Ethiopian commodities.",
    images: ["/logo1.png"],
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Blel Trading PLC",
  url: `${SITE_URL}/contact`,
  description:
    "Direct contact channel and formal inquiry desk for Blel Trading PLC.",
  mainEntity: {
    "@type": "LocalBusiness",
    name: "Blel Trading PLC",
    image: `${SITE_URL}/logo1.png`,
    telephone: "+251922858489",
    email: "elasnaku89@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Blel Trading PLC",
      addressLocality: "Addis Ababa",
      addressCountry: "ET",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "9.0325948",
      longitude: "38.7730418",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "09:00",
        closes: "13:00",
      },
    ],
    sameAs: [
      "https://www.linkedin.com/in/elias-mendaye-3013352bb/",
      "https://x.com/kukusha42296",
      "https://wa.me/251922858489",
    ],
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />
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
