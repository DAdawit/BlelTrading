"use client";

import { useMemo, useState } from "react";
import { GALLERY_ITEMS, GALLERY_TABS } from "@/lib/data/gallery";
import GalleryTabs from "@/components/gallery/GalleryTabs";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import Lightbox from "@/components/gallery/Lightbox";
import VideoModal from "@/components/gallery/VideoModal";

export default function GalleryExplorer() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxItem, setLightboxItem] = useState(null);
  const [videoItem, setVideoItem] = useState(null);

  const items = useMemo(
    () =>
      activeTab === "All"
        ? GALLERY_ITEMS
        : GALLERY_ITEMS.filter((item) => item.category === activeTab),
    [activeTab]
  );

  return (
    <>
      <section className="sticky top-20 z-30 bg-beige-50/95 backdrop-blur border-b border-beige-200 py-5">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <GalleryTabs tabs={GALLERY_TABS} active={activeTab} onChange={setActiveTab} />
        </div>
      </section>

      <section className="py-16 bg-beige-50">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          <GalleryGrid items={items} onOpenImage={setLightboxItem} onOpenVideo={setVideoItem} />
        </div>
      </section>

      <Lightbox item={lightboxItem} onClose={() => setLightboxItem(null)} />
      <VideoModal item={videoItem} onClose={() => setVideoItem(null)} />
    </>
  );
}
