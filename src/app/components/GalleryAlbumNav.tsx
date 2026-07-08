"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { galleryAlbums } from "@/lib/site-data";
import { heroChurchTheme } from "@/lib/hero-theme";

const { maroon } = heroChurchTheme;

type GalleryAlbumNavProps = {
  activeId: string;
};

export function GalleryAlbumNav({ activeId }: GalleryAlbumNavProps) {
  return (
    <div className="bg-[#FFFCF7] border-b border-[#E8E0D0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <Link
          href="/#gallery"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border border-stone-200 bg-white text-stone-700 text-sm font-medium hover:border-stone-300 hover:bg-stone-50 transition-colors shadow-sm mb-4 sm:mb-5"
        >
          <ArrowLeft size={16} strokeWidth={2.25} />
          Back
        </Link>

        <div className="flex flex-wrap gap-2 sm:gap-2.5 -mx-0.5">
          {galleryAlbums.map((album) => {
            const isActive = album.id === activeId;
            return (
              <Link
                key={album.id}
                href={`/gallery/${album.id}`}
                className={`px-3.5 sm:px-4 py-2 rounded-full text-[0.78rem] sm:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  isActive
                    ? "text-white shadow-[0_4px_14px_rgba(109,20,20,0.35)]"
                    : "bg-stone-100 text-stone-600 hover:bg-stone-200/80 hover:text-stone-800"
                }`}
                style={isActive ? { backgroundColor: maroon } : undefined}
                aria-current={isActive ? "page" : undefined}
              >
                {album.title}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
