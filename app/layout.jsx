import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import LocalePathSync from "@/components/layout/LocalePathSync";
import JsonLd from "@/components/seo/JsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fraunces",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-inter",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://bleltrading.com";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Blel Trading PLC | Ethiopian Agricultural Commodities & Livestock Export",
    template: "%s | Blel Trading PLC",
  },
  description:
    "Blel Trading PLC is a premier Ethiopian export company shipping specialty Arabica coffee, live cattle & sheep, Humera sesame seeds, green mung beans, chickpeas, sorghum, and spices to global markets across 7+ countries.",
  keywords: [
    "Blel Trading PLC",
    "Ethiopian export company",
    "Ethiopian coffee exporter",
    "Yirgacheffe coffee export",
    "Sidamo natural coffee",
    "Ethiopian livestock export",
    "Boran cattle export",
    "Somali sheep export",
    "Live camel export Ethiopia",
    "Ethiopian sesame seeds",
    "Humera sesame seeds",
    "Green mung beans Ethiopia",
    "Kabuli chickpeas exporter",
    "Sorghum grain Ethiopia",
    "Ethiopian Cardamom Korerima",
    "Black seed Nigella sativa",
    "Addis Ababa export trading",
    "FOB Djibouti commodity export",
    "تصدير القهوة الإثيوبية",
    "تصدير المواشي من إثيوبيا",
    "سمسم هوميرا إثيوبيا",
  ],
  authors: [
    { name: "Blel Trading PLC", url: SITE_URL },
    { name: "Dawit D.", url: "https://www.linkedin.com/in/dawit-d/" },
  ],
  creator: "Blel Trading PLC",
  publisher: "Blel Trading PLC",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
    languages: {
      en: "/",
      ar: "/?lang=ar",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ar_AR"],
    url: SITE_URL,
    siteName: "Blel Trading PLC",
    title: "Blel Trading PLC | Ethiopian Agricultural Commodities & Livestock Export",
    description:
      "Reliable export of Ethiopian specialty coffee, live livestock, pulses, oil seeds, and spices with verified health certification and transparent FOB/CIF delivery.",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "Blel Trading PLC — Ethiopian Export Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Blel Trading PLC | Ethiopian Export Company",
    description:
      "Connecting Ethiopian agricultural producers and pastoralists with international buyers worldwide.",
    site: "@kukusha42296",
    creator: "@kukusha42296",
    images: ["/logo1.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },
};

export const viewport = {
  themeColor: "#0b1726",
  width: "device-width",
  initialScale: 1,
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Corporation",
      "@id": `${SITE_URL}/#organization`,
      name: "Blel Trading PLC",
      alternateName: ["BLEL Trading", "BLEL Import & Export", "بلل تريدينغ"],
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo1.png`,
        width: 1200,
        height: 630,
      },
      image: `${SITE_URL}/logo1.png`,
      description:
        "Blel Trading PLC is a trusted Ethiopian export company connecting local agricultural producers and pastoralists with international buyers, exporting specialty coffee, livestock, pulses, oil seeds, grains, and spices.",
      founder: {
        "@type": "Person",
        name: "Elias Mendaye",
        jobTitle: "Founder & CEO",
        sameAs: "https://www.linkedin.com/in/elias-mendaye-3013352bb/",
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: "Blel Trading PLC",
        addressLocality: "Addis Ababa",
        addressRegion: "Addis Ababa",
        addressCountry: "ET",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+251922858489",
          contactType: "sales",
          availableLanguage: ["English", "Arabic", "Amharic"],
        },
        {
          "@type": "ContactPoint",
          telephone: "+251928761835",
          contactType: "customer service",
          availableLanguage: ["English", "Arabic", "Amharic"],
        },
      ],
      sameAs: [
        "https://www.linkedin.com/in/elias-mendaye-3013352bb/",
        "https://x.com/kukusha42296",
        "https://wa.me/251922858489",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Blel Trading PLC",
      description:
        "Official export portal for Ethiopian agricultural commodities, specialty coffee, and live livestock.",
      publisher: {
        "@id": `${SITE_URL}/#organization`,
      },
      inLanguage: ["en", "ar"],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <JsonLd data={organizationJsonLd} />
      </head>
      <body className="font-body bg-beige-50 text-ink antialiased">
        <LocalePathSync />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
