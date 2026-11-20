import { cn } from "@/lib/utils";
import logo from "@/assets/logo.webp";
import logoPlain from "@/assets/logo-plain.webp";

type BrandLogoProps = {
  className?: string;
  imageClassName?: string;
  /** Lotus mark only, without the "Eternity Banquet" wordmark. */
  plain?: boolean;
};

export function BrandLogo({ className, imageClassName, plain }: BrandLogoProps) {
  return (
    <img
      src={plain ? logoPlain : logo}
      alt="Eternity Banquet"
      width={plain ? 397 : 400}
      height={plain ? 336 : 400}
      className={cn("h-14 w-auto object-contain shrink-0", imageClassName, className)}
    />
  );
}
