import Image from "next/image";
import Link from "next/link";
import { BookOpen, Church, Mic, Play, Users, Wine } from "lucide-react";
import type { VideoAlbum } from "@/lib/site-data";
import { heroChurchTheme } from "@/lib/hero-theme";

const { maroon } = heroChurchTheme;

type VideoIcon = VideoAlbum["icon"];

function VideoAlbumIcon({ icon }: { icon: VideoIcon }) {
  const size = 20;
  const className = "text-white";
  switch (icon) {
    case "mic":
      return <Mic size={size} className={className} strokeWidth={2.25} />;
    case "church":
      return <Church size={size} className={className} strokeWidth={2.25} />;
    case "chalice":
      return <Wine size={size} className={className} strokeWidth={2.25} />;
    case "events":
      return <Users size={size} className={className} strokeWidth={2.25} />;
    case "book":
      return <BookOpen size={size} className={className} strokeWidth={2.25} />;
    default:
      return <Play size={size} className={className} strokeWidth={2.25} />;
  }
}

export function VideoAlbumCard({ album }: { album: VideoAlbum }) {
  return (
    <Link
      href={`/videos/${album.id}`}
      className="group block h-full cursor-pointer"
      aria-label={`Play ${album.title}`}
    >
      <article className="rounded-2xl bg-[#FFFCF4] border border-[#E8D4A8]/90 shadow-[0_8px_28px_rgba(43,22,6,0.08)] overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_14px_36px_rgba(43,22,6,0.14)] h-full flex flex-col">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#2B1606]">
          <Image
            src={album.thumbnail}
            alt=""
            fill
            unoptimized={album.thumbnail.startsWith("https://i.ytimg.com")}
            className="object-cover sepia-[12%] saturate-[92%] group-hover:scale-[1.03] transition-transform duration-500"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2B1606]/50 via-[#2B1606]/10 to-transparent" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.35)] border-2 border-[#FFF4D2]/80 transition-transform duration-300 group-hover:scale-110"
              style={{
                background: `linear-gradient(145deg, ${maroon} 0%, #8B1A1A 100%)`,
              }}
            >
              <Play
                size={26}
                className="text-white fill-white ml-1"
                strokeWidth={1.5}
              />
            </div>
          </div>
        </div>

        <div className="relative px-5 pb-6 pt-7 text-center">
          <div
            className="absolute -top-5 left-1/2 -translate-x-1/2 w-11 h-11 rounded-full flex items-center justify-center shadow-[0_4px_14px_rgba(109,20,20,0.4)] border-2 border-[#FFF4D2]"
            style={{
              background: `linear-gradient(145deg, ${maroon} 0%, #8B1A1A 100%)`,
            }}
          >
            <VideoAlbumIcon icon={album.icon} />
          </div>

          <h3
            className="font-playfair font-bold text-lg sm:text-xl leading-tight px-1"
            style={{ color: maroon }}
          >
            {album.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
