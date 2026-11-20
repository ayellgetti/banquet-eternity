import decorations from "@/lib/decorations.json";
import weddingStage1 from "@/assets/wedding-stage-1.webp";
import weddingStage2 from "@/assets/wedding-stage-2.webp";
import weddingStage3 from "@/assets/wedding-stage-3.webp";
import weddingStage4 from "@/assets/wedding-stage-4.webp";
import weddingStage5 from "@/assets/wedding-stage-5.webp";
import weddingStage6 from "@/assets/wedding-stage-6.webp";
import weddingHall1 from "@/assets/wedding-hall-1.webp";
import weddingHall2 from "@/assets/wedding-hall-2.webp";
import weddingInvitation from "@/assets/wedding-invitation.webp";
import birthday from "@/assets/event-birthday.webp";
import engagement from "@/assets/event-engagement.webp";
import babyshowerStage1 from "@/assets/babyshower-stage-1.webp";
import babyshowerStage2 from "@/assets/babyshower-stage-2.webp";
import babyshowerBoySign from "@/assets/babyshower-boy-sign.webp";
import babyshowerGirlSign from "@/assets/babyshower-girl-sign.webp";
import haldiSangeetStage from "@/assets/haldi-sangeet-stage.webp";
import haldiSangeetHall from "@/assets/haldi-sangeet-hall.webp";
import anniversary from "@/assets/event-anniversary.webp";
import corporate from "@/assets/event-corporate.webp";
import other from "@/assets/event-other.webp";
import stage from "@/assets/stage.webp";
import dining from "@/assets/dining.webp";
import exterior from "@/assets/exterior.webp";
import hall from "@/assets/hero-hall.webp";

const weddingImages = [
  weddingStage1,
  weddingStage2,
  weddingStage3,
  weddingStage4,
  weddingStage5,
  weddingStage6,
  weddingHall1,
  weddingHall2,
  weddingInvitation,
];

const babyShowerImages = [
  babyshowerStage1,
  babyshowerStage2,
  babyshowerBoySign,
  babyshowerGirlSign,
];

const haldiSangeetImages = [haldiSangeetStage, haldiSangeetHall];

export type EventCategory =
  | "Wedding"
  | "Haldi and Sangeet"
  | "Birthday"
  | "Engagement"
  | "Baby Shower"
  | "Naming Ceremony"
  | "Anniversary"
  | "Corporate Event"
  | "Other";

export const eventCategories: {
  name: EventCategory;
  image: string;
  images: string[];
  description: string;
}[] = [
  {
    name: "Wedding",
    image: weddingStage1,
    images: weddingImages,
    description:
      "Make your big day timeless with a grand mandap, floral décor, and unforgettable hospitality.",
  },
  {
    name: "Haldi and Sangeet",
    image: haldiSangeetStage,
    images: haldiSangeetImages,
    description:
      "Vibrant haldi ceremonies and lively sangeet nights with colorful décor, music, and dance floor setups.",
  },
  {
    name: "Birthday",
    image: birthday,
    images: [birthday, stage, hall, dining],
    description:
      "From milestone birthdays to kids' themed parties — colorful, joyful celebrations done right.",
  },
  {
    name: "Engagement",
    image: engagement,
    images: [engagement, stage, dining, hall],
    description:
      "Romantic, intimate setups with elegant lighting to mark the start of your forever.",
  },
  {
    name: "Baby Shower",
    image: babyshowerStage1,
    images: babyShowerImages,
    description:
      "Pastel-perfect baby shower arrangements with custom themes and dedicated planning.",
  },
  {
    name: "Naming Ceremony",
    image: babyshowerStage2,
    images: [babyshowerStage2, babyshowerBoySign, babyshowerGirlSign, stage],
    description:
      "Traditional naamkaran celebrations with cradle décor, floral setups and warm family gatherings.",
  },
  {
    name: "Anniversary",
    image: anniversary,
    images: [anniversary, dining, stage, hall],
    description: "Relive your love story with candlelit dining and curated music & menus.",
  },
  {
    name: "Corporate Event",
    image: corporate,
    images: [corporate, hall, stage, dining],
    description: "Conferences, AGMs, product launches and gala dinners with full A/V support.",
  },
  {
    name: "Other",
    image: other,
    images: [other, hall, stage, exterior],
    description:
      "Festivals, reunions, social gatherings — share your vision and we'll bring it to life.",
  },
];

export type GalleryCategory = EventCategory | "Venue" | "Basic Decor";

export const galleryImages: {
  src: string;
  thumb?: string;
  category: GalleryCategory;
  alt: string;
}[] = [
  { src: hall, category: "Venue", alt: "Grand banquet hall" },
  { src: weddingStage1, category: "Wedding", alt: "Wedding stage with floral mandap" },
  { src: weddingStage2, category: "Wedding", alt: "Elegant wedding stage décor" },
  { src: weddingStage3, category: "Wedding", alt: "Grand wedding mandap setup" },
  { src: weddingStage4, category: "Wedding", alt: "Wedding stage with uplighting" },
  { src: weddingStage5, category: "Wedding", alt: "Floral wedding backdrop" },
  { src: weddingStage6, category: "Wedding", alt: "Wedding ceremony stage" },
  { src: weddingHall1, category: "Wedding", alt: "Wedding guest seating arrangement" },
  { src: weddingHall2, category: "Wedding", alt: "Banquet hall ready for wedding guests" },
  { src: weddingInvitation, category: "Wedding", alt: "Wedding celebration at Eternity Banquet" },
  {
    src: haldiSangeetStage,
    category: "Haldi and Sangeet",
    alt: "Haldi ceremony stage with marigold décor",
  },
  {
    src: haldiSangeetHall,
    category: "Haldi and Sangeet",
    alt: "Banquet hall seating for sangeet night",
  },
  { src: birthday, category: "Birthday", alt: "Birthday celebration" },
  { src: engagement, category: "Engagement", alt: "Engagement ceremony" },
  {
    src: babyshowerStage1,
    category: "Baby Shower",
    alt: "Baby shower stage with boy and girl décor",
  },
  { src: babyshowerStage2, category: "Baby Shower", alt: "Gender reveal baby shower setup" },
  { src: babyshowerBoySign, category: "Baby Shower", alt: "It's a boy baby shower sign" },
  { src: babyshowerGirlSign, category: "Baby Shower", alt: "It's a girl baby shower sign" },
  {
    src: babyshowerStage2,
    category: "Naming Ceremony",
    alt: "Naming ceremony stage with cradle décor",
  },
  { src: babyshowerBoySign, category: "Naming Ceremony", alt: "Naming ceremony welcome sign" },
  { src: stage, category: "Naming Ceremony", alt: "Naming ceremony celebration setup" },
  { src: anniversary, category: "Anniversary", alt: "Anniversary table setting" },
  { src: corporate, category: "Corporate Event", alt: "Corporate event" },
  { src: other, category: "Other", alt: "Cultural celebration" },
  { src: dining, category: "Venue", alt: "Elegant dining setup" },
  { src: exterior, category: "Venue", alt: "Venue exterior at dusk" },
];

// Decoration photos (public/decor, generated into decorations.json) live in the same gallery.
const DECOR_CATEGORY: Record<string, GalleryCategory> = {
  Haldi: "Haldi and Sangeet",
  Basic: "Basic Decor",
};
for (const [folder, photos] of Object.entries(
  decorations as Record<string, { src: string; thumb: string }[]>,
)) {
  const category = DECOR_CATEGORY[folder] ?? (folder as GalleryCategory);
  photos.forEach((p, i) =>
    galleryImages.push({
      src: p.src,
      thumb: p.thumb,
      category,
      alt: `${category} decoration ${i + 1}`,
    }),
  );
}

export const testimonials = [
  {
    name: "Priya & Arjun",
    event: "Wedding",
    quote:
      "Eternity made our wedding magical. The decor team understood every little detail and the food was outstanding. Our guests are still talking about it!",
  },
  {
    name: "Rohan Mehta",
    event: "Corporate Event",
    quote:
      "We hosted our annual conference for 300 employees. Spotless service, great A/V, and the team handled last-minute changes effortlessly.",
  },
  {
    name: "Sneha Kapoor",
    event: "Baby Shower",
    quote:
      "The pastel decor was exactly what I had imagined. So warm, so personal. Eternity truly cares about your day.",
  },
  {
    name: "The Sharma Family",
    event: "Anniversary",
    quote:
      "We celebrated my parents' 40th anniversary here. Elegant, classy, and the staff treated everyone like family.",
  },
];
