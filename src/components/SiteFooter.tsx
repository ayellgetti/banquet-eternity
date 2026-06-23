import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Instagram, MessageCircle } from "lucide-react";
import { MAPS_URL } from "@/lib/maps";

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/eternitybanquet",
  whatsapp: "https://wa.me/message/S7HJ6LWWEQ4AD1",
  maps: MAPS_URL,
};
const LINKS = SOCIAL_LINKS;

export function SiteFooter() {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-x py-14 grid gap-10 md:grid-cols-4">
        <div>
          <h3 className="font-display text-2xl text-gradient-gold mb-3">Eternity Banquet</h3>
          <p className="text-sm opacity-80 leading-relaxed italic">
            Creating memories that last forever.
          </p>
          <p className="text-xs opacity-70 mt-2">Capacity 250–400 guests.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li><Link to="/about" className="hover:text-accent">About</Link></li>
            <li><Link to="/events" className="hover:text-accent">Events</Link></li>
            <li><Link to="/gallery" className="hover:text-accent">Gallery</Link></li>
            <li><Link to="/enquiry" className="hover:text-accent">Enquiry</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent">Contact</h4>
          <ul className="space-y-2 text-sm opacity-90">
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0" /> Akash Y — +91 99304 13300</li>
            <li className="flex gap-2"><Phone className="size-4 mt-0.5 shrink-0" /> Harshal J — +91 99301 43300</li>
            <li className="flex gap-2"><MapPin className="size-4 mt-0.5 shrink-0" /> Plot No. 93-A, 2nd Floor, Bank Of Baroda, Sahyadri Nagar, Charkop, Kandivali West, Mumbai 400068</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3 text-accent">Follow Us</h4>
          <div className="flex gap-3">
            <a href={LINKS.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-10 grid place-items-center rounded-full border border-accent/40 hover:bg-accent hover:text-primary transition"><Instagram className="size-5" /></a>
            <a href={LINKS.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="size-10 grid place-items-center rounded-full border border-accent/40 hover:bg-accent hover:text-primary transition"><MessageCircle className="size-5" /></a>
            <a href={LINKS.maps} target="_blank" rel="noopener noreferrer" aria-label="Find us on Google Maps" className="size-10 grid place-items-center rounded-full border border-accent/40 hover:bg-accent hover:text-primary transition"><MapPin className="size-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/15">
        <div className="container-x py-5 text-xs opacity-70 text-center">
          © {new Date().getFullYear()} Eternity Banquet. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
