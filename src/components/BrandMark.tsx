import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import { BrandName } from "@/components/BrandName";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  textClassName?: string;
};

export function BrandMark({ className, imageClassName, textClassName }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center gap-2 sm:gap-3", className)}>
      <BrandLogo imageClassName={imageClassName} />
      <BrandName className={textClassName} />
    </div>
  );
}

export function BrandMarkLink({ className, imageClassName, textClassName }: BrandMarkProps) {
  return (
    <Link
      to="/"
      className={cn("inline-flex shrink-0", className)}
      aria-label="Eternity Banquet home"
    >
      <BrandMark imageClassName={imageClassName} textClassName={textClassName} />
    </Link>
  );
}
