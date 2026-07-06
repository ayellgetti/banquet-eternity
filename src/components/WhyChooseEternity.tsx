import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  AirVent,
  CarFront,
  Cctv,
  ChefHat,
  DoorOpen,
  ShieldCheck,
  SquareParking,
  Users,
  UtensilsCrossed,
  Zap,
  ArrowUpDown,
} from "lucide-react";
import { Section } from "@/components/Section";
import { cn } from "@/lib/utils";

const AMENITIES: { icon: LucideIcon; title: string; description?: string }[] = [
  { icon: SquareParking, title: "Parking", description: "Ample on-site parking for guests" },
  { icon: Users, title: "1000 Guests", description: "Spacious halls across both venues" },
  { icon: AirVent, title: "Central AC", description: "Fully air-conditioned comfort" },
  { icon: Zap, title: "Power Backup", description: "Uninterrupted celebrations" },
  { icon: DoorOpen, title: "Changing Rooms", description: "Private bridal & family rooms" },
  { icon: ArrowUpDown, title: "Lift", description: "Dedicated elevator access" },
  { icon: Accessibility, title: "Wheelchair Access", description: "Accessible entry & movement" },
  { icon: CarFront, title: "Valet Parking", description: "Optional valet on request" },
  { icon: UtensilsCrossed, title: "Premium Catering", description: "In-house multi-cuisine menus" },
  { icon: ChefHat, title: "Live Kitchen", description: "Fresh live counters & stations" },
  { icon: ShieldCheck, title: "Security", description: "Trained staff on duty" },
  { icon: Cctv, title: "CCTV", description: "Monitored premises throughout" },
];

type WhyChooseEternityProps = {
  className?: string;
  embedded?: boolean;
};

export function WhyChooseEternity({ className, embedded = false }: WhyChooseEternityProps) {
  const grid = (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-5">
      {AMENITIES.map((item) => (
        <div
          key={item.title}
          className="group flex flex-col items-center text-center rounded-2xl border border-border bg-card p-4 md:p-5 shadow-[var(--shadow-soft)] transition-colors hover:border-accent/40 hover:bg-accent/5"
        >
          <div className="size-12 md:size-14 rounded-full grid place-items-center bg-accent/15 text-accent mb-3 transition-transform group-hover:scale-105">
            <item.icon className="size-6 md:size-7" strokeWidth={1.75} />
          </div>
          <h3 className="font-display text-sm md:text-base font-bold text-primary leading-snug">
            {item.title}
          </h3>
          {item.description && (
            <p className="text-[0.7rem] md:text-xs text-muted-foreground mt-1.5 leading-relaxed">
              {item.description}
            </p>
          )}
        </div>
      ))}
    </div>
  );

  if (embedded) {
    return <div className={cn(className)}>{grid}</div>;
  }

  return (
    <Section
      eyebrow="Amenities"
      title="Why Choose Eternity"
      subtitle="World-class facilities at both our Borivali and Charkop venues — everything your celebration needs, under one roof."
      center
      className={className}
    >
      {grid}
    </Section>
  );
}
