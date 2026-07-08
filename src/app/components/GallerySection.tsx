"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Church,
  Cross,
  Flame,
  Landmark,
  User,
  Users,
} from "lucide-react";
import {
  galleryAlbums,
  gallerySectionContent,
  getGalleryCoverImage,
} from "@/lib/site-data";
import { HERO_CHURCH_BG } from "@/lib/hero-collage";
import { heroChurchTheme, lifeLegacySectionBackground } from "@/lib/hero-theme";
import { GalleryThumbnail } from "./GalleryThumbnail";

const { maroon, textBody } = heroChurchTheme;

type AlbumIcon = (typeof galleryAlbums)[number]["icon"];

function AlbumIconBadge({ icon }: { icon: AlbumIcon }) {
  const size = 20;
  const className = "text-white";
  switch (icon) {
    case "church":
      return <Church size={size} className={className} strokeWidth={2.25} />;
    case "person":
      return <User size={size} className={className} strokeWidth={2.25} />;
    case "family":
      return <Users size={size} className={className} strokeWidth={2.25} />;
    case "candle":
      return <Flame size={size} className={className} strokeWidth={2.25} />;
    case "council":
      return <Landmark size={size} className={className} strokeWidth={2.25} />;
    default:
      return <Church size={size} className={className} strokeWidth={2.25} />;
  }
}

function GalleryAlbumCard(album: (typeof galleryAlbums)[number]) {
  const { id, title, icon } = album;
  const coverImage = getGalleryCoverImage(album);
  return (
    <Link
      href={`/gallery/${id}`}
      className="group block h-full cursor-pointer"
      aria-label={`Open ${title} album`}
    >
      <article className="rounded-2xl bg-[#FFFCF4] border border-[#E8D4A8]/90 shadow-[0_8px_28px_rgba(43,22,6,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(43,22,6,0.14)] h-full flex flex-col">
        <div className="relative">
          <GalleryThumbnail
            src={coverImage}
            alt=""
            className="rounded-none"
            imageClassName="sepia-[15%] saturate-[90%]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1606]/25 via-transparent to-transparent pointer-events-none" />
        </div>

        <div className="relative px-5 pb-6 pt-7 text-center">
          <div
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(109,20,20,0.4)] border-2 border-[#FFF4D2]"
            style={{
              background: `linear-gradient(145deg, ${maroon} 0%, #8B1A1A 100%)`,
            }}
          >
            <AlbumIconBadge icon={icon} />
          </div>

          <h3
            className="font-playfair font-bold text-lg sm:text-xl leading-tight"
            style={{ color: maroon }}
          >
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export function GallerySection() {
  const topRow = galleryAlbums.slice(0, 3);
  const bottomRow = galleryAlbums.slice(3);

  return (
    <section id="gallery" className="scroll-mt-28">
      <div style={{ background: lifeLegacySectionBackground }}>
        {/* Hero + albums — single compact block */}
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-9 pb-8 sm:pb-10">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <Image
              src={HERO_CHURCH_BG}
              alt=""
              aria-hidden
              fill
              className="object-cover object-left-top opacity-[0.1] sepia-[20%]"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#FBF0D0]/94 via-[#F5E4A8]/90 to-[#F0DC88]/92" />
          </div>

          {/* Hero */}
          <div className="relative z-10 max-w-2xl mx-auto text-center mb-7 sm:mb-8 space-y-2.5">
            <h2
              className="font-playfair font-bold text-[1.85rem] sm:text-[2.1rem] lg:text-[2.35rem] leading-tight"
              style={{ color: maroon }}
            >
              Gallery
            </h2>
            <div className="flex items-center gap-2.5 max-w-[220px] mx-auto">
              <span className="h-px flex-1 bg-[#C8941A]/60" />
              <Cross size={16} className="text-[#6D1414]" strokeWidth={2.25} />
              <span className="h-px flex-1 bg-[#C8941A]/60" />
            </div>
            <p
              className="font-lora text-[0.9375rem] sm:text-base leading-relaxed"
              style={{ color: textBody }}
            >
              {gallerySectionContent.intro}
            </p>
          </div>

          {/* Photo albums */}
          <div className="relative z-10 text-center max-w-2xl mx-auto mb-6 sm:mb-7 space-y-2">
            <h3
              className="font-playfair font-bold text-[1.5rem] sm:text-[1.65rem] lg:text-[1.85rem]"
              style={{ color: maroon }}
            >
              {gallerySectionContent.albumsTitle}
            </h3>
            <Cross size={16} className="text-[#6D1414] mx-auto" strokeWidth={2.25} />
            <p
              className="font-lora text-sm sm:text-[0.9375rem] leading-relaxed"
              style={{ color: textBody }}
            >
              {gallerySectionContent.albumsSubtitle}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {topRow.map((album) => (
              <GalleryAlbumCard key={album.id} {...album} />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto mt-5 lg:mt-6">
            {bottomRow.map((album) => (
              <GalleryAlbumCard key={album.id} {...album} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
