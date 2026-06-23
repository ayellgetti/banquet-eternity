import weddingStage1 from "@/assets/wedding-stage-1.png";
import weddingStage2 from "@/assets/wedding-stage-2.png";
import weddingStage3 from "@/assets/wedding-stage-3.png";
import weddingStage4 from "@/assets/wedding-stage-4.png";
import weddingStage5 from "@/assets/wedding-stage-5.png";
import weddingStage6 from "@/assets/wedding-stage-6.png";
import weddingHall1 from "@/assets/wedding-hall-1.png";
import weddingHall2 from "@/assets/wedding-hall-2.png";
import weddingInvitation from "@/assets/wedding-invitation.png";
import birthday from "@/assets/event-birthday.jpg";
import engagement from "@/assets/event-engagement.jpg";
import babyshowerStage1 from "@/assets/babyshower-stage-1.png";
import babyshowerStage2 from "@/assets/babyshower-stage-2.png";
import babyshowerBoySign from "@/assets/babyshower-boy-sign.png";
import babyshowerGirlSign from "@/assets/babyshower-girl-sign.png";
import haldiSangeetStage from "@/assets/haldi-sangeet-stage.png";
import haldiSangeetHall from "@/assets/haldi-sangeet-hall.png";
import anniversary from "@/assets/event-anniversary.jpg";
import corporate from "@/assets/event-corporate.jpg";
import other from "@/assets/event-other.jpg";
import stage from "@/assets/stage.jpg";
import dining from "@/assets/dining.jpg";
import exterior from "@/assets/exterior.jpg";
import hall from "@/assets/hero-hall.jpg";

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
  | "Anniversary"
  | "Corporate Event"
  | "Other";

export const eventCategories: { name: EventCategory; image: string; images: string[]; description: string }[] = [
  {
    name: "Wedding",
    image: weddingStage1,
    images: weddingImages,
    description: "Make your big day timeless with a grand mandap, floral décor, and unforgettable hospitality.",
  },
  {
    name: "Haldi and Sangeet",
    image: haldiSangeetStage,
    images: haldiSangeetImages,
    description: "Vibrant haldi ceremonies and lively sangeet nights with colorful décor, music, and dance floor setups.",
  },
  {
    name: "Birthday",
    image: birthday,
    images: [birthday, stage, hall, dining],
    description: "From milestone birthdays to kids' themed parties — colorful, joyful celebrations done right.",
  },
  {
    name: "Engagement",
    image: engagement,
    images: [engagement, stage, dining, hall],
    description: "Romantic, intimate setups with elegant lighting to mark the start of your forever.",
  },
  {
    name: "Baby Shower",
    image: babyshowerStage1,
    images: babyShowerImages,
    description: "Pastel-perfect baby shower arrangements with custom themes and dedicated planning.",
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
    description: "Festivals, reunions, social gatherings — share your vision and we'll bring it to life.",
  },
];

export const galleryImages: { src: string; category: EventCategory | "Venue"; alt: string }[] = [
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
  { src: haldiSangeetStage, category: "Haldi and Sangeet", alt: "Haldi ceremony stage with marigold décor" },
  { src: haldiSangeetHall, category: "Haldi and Sangeet", alt: "Banquet hall seating for sangeet night" },
  { src: birthday, category: "Birthday", alt: "Birthday celebration" },
  { src: engagement, category: "Engagement", alt: "Engagement ceremony" },
  { src: babyshowerStage1, category: "Baby Shower", alt: "Baby shower stage with boy and girl décor" },
  { src: babyshowerStage2, category: "Baby Shower", alt: "Gender reveal baby shower setup" },
  { src: babyshowerBoySign, category: "Baby Shower", alt: "It's a boy baby shower sign" },
  { src: babyshowerGirlSign, category: "Baby Shower", alt: "It's a girl baby shower sign" },
  { src: anniversary, category: "Anniversary", alt: "Anniversary table setting" },
  { src: corporate, category: "Corporate Event", alt: "Corporate event" },
  { src: other, category: "Other", alt: "Cultural celebration" },
  { src: dining, category: "Venue", alt: "Elegant dining setup" },
  { src: exterior, category: "Venue", alt: "Venue exterior at dusk" },
];

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
