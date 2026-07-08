"use client";

import Image from "next/image";
import { Cross } from "lucide-react";
import { videoAlbums, videoSectionContent } from "@/lib/site-data";
import { HERO_CHURCH_BG } from "@/lib/hero-collage";
import { heroChurchTheme, lifeLegacySectionBackground } from "@/lib/hero-theme";
import { VideoAlbumCard } from "./video/VideoAlbumCard";

const { maroon, textBody } = heroChurchTheme;

export function VideosSection() {
  const topRow = videoAlbums.slice(0, 3);
  const bottomRow = videoAlbums.slice(3);

  return (
    <section id="videos" className="scroll-mt-28">
      <div style={{ background: lifeLegacySectionBackground }}>
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

          <div className="relative z-10 max-w-2xl mx-auto text-center mb-7 sm:mb-8 space-y-2.5">
            <h2
              className="font-playfair font-bold text-[1.85rem] sm:text-[2.1rem] lg:text-[2.35rem] leading-tight"
              style={{ color: maroon }}
            >
              Videos
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
              {videoSectionContent.intro}
            </p>
          </div>

          <div className="relative z-10 text-center max-w-2xl mx-auto mb-6 sm:mb-7 space-y-2">
            <h3
              className="font-playfair font-bold text-[1.5rem] sm:text-[1.65rem] lg:text-[1.85rem]"
              style={{ color: maroon }}
            >
              {videoSectionContent.albumsTitle}
            </h3>
            <Cross size={16} className="text-[#6D1414] mx-auto" strokeWidth={2.25} />
            <p
              className="font-lora text-sm sm:text-[0.9375rem] leading-relaxed"
              style={{ color: textBody }}
            >
              {videoSectionContent.albumsSubtitle}
            </p>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
            {topRow.map((album) => (
              <VideoAlbumCard key={album.id} album={album} />
            ))}
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-6 max-w-3xl mx-auto mt-5 lg:mt-6">
            {bottomRow.map((album) => (
              <VideoAlbumCard key={album.id} album={album} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
