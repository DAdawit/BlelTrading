import GalleryImageItem from "@/components/gallery/GalleryImageItem";
import GalleryVideoItem from "@/components/gallery/GalleryVideoItem";

export default function GalleryGrid({ items, onOpenImage, onOpenVideo }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {items.map((item) =>
        item.type === "video" ? (
          <GalleryVideoItem key={item.id} item={item} onOpen={onOpenVideo} />
        ) : (
          <GalleryImageItem key={item.id} item={item} onOpen={onOpenImage} />
        )
      )}
    </div>
  );
}
