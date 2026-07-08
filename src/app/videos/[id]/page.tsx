import { notFound } from "next/navigation";
import { getVideoAlbum, videoAlbums } from "@/lib/site-data";
import { VideoWatchPageClient } from "./VideoWatchPageClient";

export function generateStaticParams() {
  return videoAlbums.map((album) => ({ id: album.id }));
}

export default async function VideoWatchPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const album = getVideoAlbum(id);

  if (!album) {
    notFound();
  }

  return <VideoWatchPageClient album={album} />;
}
