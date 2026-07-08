"use client";

import { useState } from "react";
import type { GalleryAlbum } from "@/lib/site-data";
import { heroChurchTheme } from "@/lib/hero-theme";
import { GalleryLightbox } from "./GalleryLightbox";
import { GalleryThumbnail } from "./GalleryThumbnail";

const { maroon } = heroChurchTheme;

type GalleryAlbumGridProps = {
  album: GalleryAlbum;
};

export function GalleryAlbumGrid({ album }: GalleryAlbumGridProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1
          className="font-playfair font-bold text-[1.75rem] sm:text-[2rem] lg:text-[2.25rem] leading-tight mb-6 sm:mb-8"
          style={{ color: maroon }}
        >
          {album.title}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {album.photos.map((photo, index) => (
            <GalleryThumbnail
              key={`${photo}-${index}`}
              src={photo}
              alt={`View ${album.title} photo ${index + 1}`}
              onClick={() => setLightboxIndex(index)}
            />
          ))}
        </div>
      </div>

      {lightboxIndex !== null && (
        <GalleryLightbox
          key={lightboxIndex}
          photos={album.photos}
          albumTitle={album.title}
          initialIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}
    </>
  );
}
