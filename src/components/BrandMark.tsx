import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";
import { BrandName } from "@/components/BrandName";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  plain?: boolean;
};

/** The logo already contains the "Eternity Banquet" wordmark, so no separate text. */
export function BrandMark({ className, imageClassName, plain }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center", plain && "gap-2 sm:gap-3", className)}>
      <BrandLogo imageClassName={imageClassName} plain={plain} />
      {/* The plain lotus has no wordmark, so show the name beside it. */}
      {plain && (
        <BrandName className="whitespace-nowrap text-lg leading-tight sm:text-2xl lg:text-xl xl:text-2xl" />
      )}
    </div>
  );
}

export function BrandMarkLink({ className, imageClassName, plain }: BrandMarkProps) {
  return (
    <Link
      to="/"
      className={cn("inline-flex shrink-0", className)}
      aria-label="Eternity Banquet home"
    >
      <BrandMark imageClassName={imageClassName} plain={plain} />
    </Link>
  );
}
