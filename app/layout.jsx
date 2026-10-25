import { Fraunces, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/layout/BackToTop";
import LocalePathSync from "@/components/layout/LocalePathSync";

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

export const metadata = {
  title: "Blel | Ethiopian Export Company",
  description:
    "Blel exports premium Ethiopian coffee, pulses, oil seeds, spices, grains and herbs to over 20 countries.",
  themeColor: "#0b1726",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      dir="ltr"
      // ^ server-rendered default. LocalePathSync (client-only, mounted
      // below) flips lang/dir to match the saved language immediately
      // after mount — localStorage isn't available during SSR, so there's
      // a brief flash of English/LTR on first paint if the saved
      // preference was Arabic. See LocalePathSync.jsx for the tradeoff.
      className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}
    >
      <head>
        {/* Font Awesome via CDN — swap for a local icon package later if preferred */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
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
