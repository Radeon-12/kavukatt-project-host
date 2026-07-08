import { HERO_COLLAGE, type CollageSliceRect } from "@/lib/hero-collage";

type CollageSliceProps = {
  slice: CollageSliceRect;
  className?: string;
  imgClassName?: string;
  alt?: string;
};

/** Renders a cropped region from the hero collage sprite sheet */
export function CollageSlice({
  slice,
  className = "",
  imgClassName = "",
  alt = "",
}: CollageSliceProps) {
  const scaleX = 1 / slice.width;
  const scaleY = 1 / slice.height;

  return (
    <div className={`relative overflow-hidden w-full h-full min-h-[1px] ${className}`}>
      <img
        src={HERO_COLLAGE}
        alt={alt}
        draggable={false}
        className={`absolute max-w-none pointer-events-none select-none ${imgClassName}`}
        style={{
          width: `${scaleX * 100}%`,
          height: `${scaleY * 100}%`,
          left: `${-(slice.left / slice.width) * 100}%`,
          top: `${-(slice.top / slice.height) * 100}%`,
        }}
      />
    </div>
  );
}
