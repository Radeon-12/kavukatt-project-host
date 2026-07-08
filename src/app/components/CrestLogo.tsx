import Image from "next/image";
import { logoImg } from "@/lib/site-data";

type CrestLogoProps = {
  size?: number;
  className?: string;
};

/** Coat of arms — navbar, footer & hero */
export function CrestLogo({ size, className = "" }: CrestLogoProps) {
  return (
    <div
      className={`relative rounded-xl overflow-hidden border-2 border-[#D4AF37]/65 shadow-[0_4px_14px_rgba(184,121,16,0.22)] shrink-0 bg-[#FFF9EE] ${className}`}
      style={size ? { width: size, height: size } : undefined}
    >
      <Image
        src={logoImg}
        alt="Mar Mathew Kavukatt coat of arms"
        fill
        unoptimized
        className="object-contain p-0.5 sm:p-1"
        sizes={size ? `${size}px` : "128px"}
      />
    </div>
  );
}
