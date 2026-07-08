"use client";

import Image from "next/image";
import { Cross } from "lucide-react";
import {
  churchImg,
  portraitImg,
  videoAlbums,
  videoSectionContent,
} from "@/lib/site-data";
import { heroChurchTheme, lifeLegacySectionBackground } from "@/lib/hero-theme";
import { VideoAlbumCard } from "./video/VideoAlbumCard";

const { maroon, textBody } = heroChurchTheme;

export function VideosPageContent() {
  const topRow = videoAlbums.slice(0, 3);
  const bottomRow = videoAlbums.slice(3);

  return (
    <div className="min-h-screen">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={churchImg}
            alt=""
            aria-hidden
            fill
            className="object-cover object-center sepia-[25%] saturate-[85%]"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B1606]/92 via-[#2B1606]/75 to-[#2B1606]/35" />
        </div>

        <div className="absolute inset-y-0 right-0 w-[55%] sm:w-[48%] lg:w-[42%] pointer-events-none hidden sm:block">
          <Image
            src={portraitImg}
            alt=""
            aria-hidden
            fill
            className="object-cover object-top sepia-[20%] opacity-90"
            sizes="(max-width: 1024px) 50vw, 42vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2B1606] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl space-y-4">
            <h1 className="font-playfair font-bold text-[2.25rem] sm:text-[2.75rem] lg:text-[3rem] text-[#FFF4D2] leading-tight">
              Videos
            </h1>
            <Cross size={18} className="text-[#D99A20]" strokeWidth={2.25} />
            <p className="font-lora text-[#E8D4A8]/95 text-base sm:text-lg leading-relaxed">
              {videoSectionContent.intro}
            </p>
          </div>
        </div>
      </section>

      <div style={{ background: lifeLegacySectionBackground }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 space-y-8 sm:space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2.5">
            <h2
              className="font-playfair font-bold text-[1.65rem] sm:text-[1.85rem] lg:text-[2rem]"
              style={{ color: maroon }}
            >
              {videoSectionContent.albumsTitle}
            </h2>
            <Cross size={16} className="text-[#6D1414] mx-auto" strokeWidth={2.25} />
            <p
              className="font-lora text-sm sm:text-[0.9375rem] leading-relaxed"
              style={{ color: textBody }}
            >
              {videoSectionContent.albumsSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {topRow.map((album) => (
              <VideoAlbumCard key={album.id} album={album} />
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto">
            {bottomRow.map((album) => (
              <VideoAlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
