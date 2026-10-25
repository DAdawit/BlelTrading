import GalleryHero from "@/components/gallery/GalleryHero";
import GalleryExplorer from "@/components/gallery/GalleryExplorer";

export const metadata = {
  title: "Gallery | Blel Export Company",
  description:
    "See Blel's export operation in pictures and video — from cupping tables in Addis Ababa to container loading at Djibouti port.",
};

export default function GalleryPage() {
  return (
    <>
      <GalleryHero />
      <GalleryExplorer />
    </>
  );
}
