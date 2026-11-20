import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/BrandLogo";

type BrandMarkProps = {
  className?: string;
  imageClassName?: string;
  plain?: boolean;
};

/** The logo already contains the "Eternity Banquet" wordmark, so no separate text. */
export function BrandMark({ className, imageClassName, plain }: BrandMarkProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <BrandLogo imageClassName={imageClassName} plain={plain} />
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
