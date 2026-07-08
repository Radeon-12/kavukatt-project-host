import Image from "next/image";

/** Standard gallery tile — 4:3, filled frame, top-aligned crop */
export const galleryThumbClass =
  "relative w-full aspect-[4/3] overflow-hidden rounded-xl bg-[#F0EBE3]";

export const galleryThumbImageClass =
  "object-cover object-top transition-transform duration-300 group-hover:scale-[1.03]";

type GalleryThumbnailProps = {
  src: string;
  alt: string;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  onClick?: () => void;
};

export function GalleryThumbnail({
  src,
  alt,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw",
  className = "",
  imageClassName = "",
  onClick,
}: GalleryThumbnailProps) {
  const frameClass = `${galleryThumbClass} group ${className}`.trim();

  const image = (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      className={`${galleryThumbImageClass} ${imageClassName}`.trim()}
      sizes={sizes}
    />
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${frameClass} shadow-[0_4px_20px_rgba(0,0,0,0.08)] hover:shadow-[0_8px_28px_rgba(0,0,0,0.14)] transition-shadow duration-300 cursor-pointer group text-left`}
        aria-label={alt}
      >
        {image}
      </button>
    );
  }

  return <div className={frameClass}>{image}</div>;
}
