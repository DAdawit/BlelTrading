"use client";

import Link from "next/link";
import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import useAppStore from "@/Store/useAppStore";
import { content, languageTranslate } from "@/utils/data";

const PREVIEW_IMAGES = [
  { src: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?q=80&w=700&auto=format&fit=crop", alt: "Coffee lot inspection" },
  { src: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=700&auto=format&fit=crop", alt: "Cleaned pulses" },
  { src: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=700&auto=format&fit=crop", alt: "Spice blending" },
  { src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?q=80&w=700&auto=format&fit=crop", alt: "Sun-drying beds" },
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
