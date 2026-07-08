import { notFound } from "next/navigation";
import { getGalleryAlbum, galleryAlbums } from "@/lib/site-data";
import { lifeLegacySectionBackground } from "@/lib/hero-theme";
import { GalleryAlbumPageClient } from "./GalleryAlbumPageClient";
import { GalleryAlbumGrid } from "@/app/components/GalleryAlbumGrid";

export function generateStaticParams() {
  return galleryAlbums.map((album) => ({ id: album.id }));
}

export default async function GalleryAlbumPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album = getGalleryAlbum(id);

  if (!album) {
    notFound();
  }

  return (
    <GalleryAlbumPageClient activeId={album.id}>
      <div
        className="py-8 sm:py-10"
        style={{ background: lifeLegacySectionBackground }}
      >
        <GalleryAlbumGrid album={album} />
      </div>
    </GalleryAlbumPageClient>
  );
}
