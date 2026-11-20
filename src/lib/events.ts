import decorations from "@/lib/decorations.json";

/** Venue photo from public/decor (generated from the decorations folder). */
const decor = (folder: string, n: number) => `/decor/${folder}/${String(n).padStart(2, "0")}.webp`;

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
    image: decor("anniversary", 7),
    images: [
      decor("anniversary", 7),
      decor("anniversary", 6),
      decor("engagement", 9),
      decor("basic", 2),
    ],
    description:
      "Make your big day timeless with a grand mandap, floral décor, and unforgettable hospitality.",
  },
  {
    name: "Haldi and Sangeet",
    image: decor("haldi", 4),
    images: [decor("haldi", 4), decor("haldi", 1), decor("haldi", 14), decor("haldi", 5)],
    description:
      "Vibrant haldi ceremonies and lively sangeet nights with colorful décor, music, and dance floor setups.",
  },
  {
    name: "Birthday",
    image: decor("birthday", 8),
    images: [
      decor("birthday", 8),
      decor("birthday", 38),
      decor("birthday", 35),
      decor("birthday", 31),
    ],
    description:
      "From milestone birthdays to kids' themed parties — colorful, joyful celebrations done right.",
  },
  {
    name: "Engagement",
    image: decor("engagement", 2),
    images: [
      decor("engagement", 2),
      decor("engagement", 9),
      decor("engagement", 12),
      decor("engagement", 1),
    ],
    description:
      "Romantic, intimate setups with elegant lighting to mark the start of your forever.",
  },
  {
    name: "Baby Shower",
    image: decor("baby-shower", 1),
    images: [
      decor("baby-shower", 1),
      decor("baby-shower", 3),
      decor("baby-shower", 4),
      decor("baby-shower", 8),
      decor("baby-shower", 9),
    ],
    description:
      "Pastel-perfect baby shower arrangements with custom themes and dedicated planning.",
  },
  {
    name: "Naming Ceremony",
    image: decor("naming-ceremony", 2),
    images: [decor("naming-ceremony", 2), decor("naming-ceremony", 1)],
    description:
      "Traditional naamkaran celebrations with cradle décor, floral setups and warm family gatherings.",
  },
  {
    name: "Anniversary",
    image: decor("anniversary", 1),
    images: [
      decor("anniversary", 1),
      decor("anniversary", 4),
      decor("anniversary", 2),
      decor("anniversary", 8),
    ],
    description: "Relive your love story with candlelit dining and curated music & menus.",
  },
  {
    name: "Corporate Event",
    image: decor("basic", 3),
    images: [decor("basic", 3), decor("basic", 2)],
    description: "Conferences, AGMs, product launches and gala dinners with full A/V support.",
  },
  {
    name: "Other",
    image: decor("basic", 2),
    images: [decor("basic", 2), decor("basic", 3)],
    description:
      "Festivals, reunions, social gatherings — share your vision and we'll bring it to life.",
  },
];

export type GalleryCategory = EventCategory | "Basic Decor";

export const galleryImages: {
  src: string;
  thumb?: string;
  category: GalleryCategory;
  alt: string;
}[] = [];

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
