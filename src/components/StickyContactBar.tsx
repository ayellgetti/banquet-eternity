import { Link } from "@tanstack/react-router";
import { CalendarCheck, Phone } from "lucide-react";
import { WhatsAppIcon } from "@/components/WhatsAppIcon";

const PHONE = "919930413300";

/** Fixed bottom action bar shown on mobile only. */
export function StickyContactBar() {
  const item =
    "flex flex-1 flex-col items-center justify-center gap-0.5 py-2.5 text-xs font-semibold";
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background/95 backdrop-blur md:hidden pb-[env(safe-area-inset-bottom)]"
    >
      <a href={`tel:+${PHONE}`} className={`${item} text-primary`}>
        <Phone className="size-5" aria-hidden />
        Call
      </a>
      <a
        href={`https://wa.me/${PHONE}`}
        target="_blank"
        rel="noopener noreferrer"
        className={`${item} text-primary border-x border-border`}
      >
        <WhatsAppIcon className="size-5" />
        WhatsApp
      </a>
      <Link to="/enquiry" className={`${item} bg-accent text-primary`}>
        <CalendarCheck className="size-5" aria-hidden />
        Enquire
      </Link>
    </nav>
  );
}
