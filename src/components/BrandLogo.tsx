import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
};

export function BrandLogo({ className, imageClassName }: BrandLogoProps) {
  return (
    <img
      src={logo}
      alt=""
      aria-hidden
      width={120}
      height={160}
      className={cn("h-12 w-auto object-contain shrink-0", imageClassName, className)}
    />
  );
}
