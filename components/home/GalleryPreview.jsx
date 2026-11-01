"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

const PREVIEW_IMAGES = [
  { src: "/gallary/cow1.jpg", alt: "Ethiopian Boran cattle export herd" },
  { src: "/gallary/camel1.jpg", alt: "Pastoral export camels" },
  { src: "/gallary/coffee1.jpg", alt: "Premium Grade 1 Ethiopian coffee" },
  { src: "/gallary/Sesame Seed.jpg", alt: "Export-grade Ethiopian sesame seeds" },
];

export default function GalleryPreview() {
  const language = useAppStore((state) => state.language);
  const t = (node) => languageTranslate(language, node);
  const section = content.pages.home.galleryPreview;

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
          <div>
            <Reveal as="p" className="section-eyebrow mb-3">
              {t(section.eyebrow)}
            </Reveal>
            <Reveal delay={1} as="h2" className="font-display text-3xl sm:text-4xl text-navy-950">
              {t(section.title)}
            </Reveal>
          </div>
          <Reveal delay={2}>
            <Link href="/gallery" className="btn btn-dark">
              {t("viewFullGallery")}
            </Link>
          </Reveal>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PREVIEW_IMAGES.map((img, i) => (
            <Reveal key={img.alt} delay={i} className="relative h-52 rounded-xl overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
