import { cn } from "@/lib/utils";

export function BrandName({ className }: { className?: string }) {
  return (
    <span className={cn("font-display font-bold text-gradient-gold", className)}>
      Eternity Banquet
    </span>
  );
}
