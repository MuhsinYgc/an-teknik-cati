"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  /**
   * `light` — footer: `1-01.png`
   * `dark` — koyu zemin: `logo-on-dark.png`
   * `header` — navbar: `1-03.png`
   */
  surface?: "light" | "dark" | "header";
};

const SRC = {
  light: "/brand/1-01.png",
  dark: "/brand/logo-on-dark.png",
  header: "/brand/1-03.png",
} as const;

export default function BrandLogo({
  className,
  surface = "light",
}: BrandLogoProps) {
  const src = SRC[surface];

  return (
    <Image
      src={src}
      alt="AN Teknik Çatı"
      width={320}
      height={64}
      sizes="(max-width: 768px) 200px, 280px"
      className={cn(
        surface === "header"
          ? "h-11 w-auto max-w-[200px] object-contain object-left sm:h-[3.25rem] sm:max-w-[240px] md:h-14 md:max-w-[280px]"
          : "h-9 w-auto max-w-[200px] object-contain object-left sm:h-10 sm:max-w-[220px]",
        className
      )}
      priority
    />
  );
}
