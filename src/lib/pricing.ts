/** Pricing & packages — kept in sync with banquet-manager enquiry options. */

export type MenuCategory =
  | "Welcome Drink"
  | "Starters"
  | "Salads"
  | "Farsan"
  | "Main Course"
  | "Breakfast"
  | "Kathiawadi"
  | "Rajasthani"
  | "Indian Breads"
  | "Raita"
  | "Rice"
  | "Dal"
  | "Sweets & Ice Cream"
  | "Live Counters";

export const MENU_CATEGORY_ORDER: MenuCategory[] = [
  "Welcome Drink",
  "Salads",
  "Starters",
  "Main Course",
  "Breakfast",
  "Kathiawadi",
  "Rajasthani",
  "Indian Breads",
  "Raita",
  "Rice",
  "Dal",
  "Farsan",
  "Sweets & Ice Cream",
  "Live Counters",
];

export type PlatePackage = {
  id: string;
  name: string;
  /** Price per plate after the offer discount (what the guest pays). */
  basePrice: number;
  /** Original per-plate price before the offer discount. */
  listPrice?: number;
  minPax: number;
  tagline: string;
  limits: Partial<Record<MenuCategory, number>>;
  extras?: string[];
  highlight?: boolean;
};

/** Current promotion, per the printed menu. */
export const PACKAGE_OFFER = {
  percent: 10,
  label: "Special Offer · Flat 10% OFF on all packages",
} as const;

export const PLATE_PACKAGES: PlatePackage[] = [
  {
    id: "plate-bronze",
    name: "Bronze",
    listPrice: 700,
    basePrice: 630,
    minPax: 100,
    tagline: "Essential wedding plate",
    limits: {
      "Welcome Drink": 1,
      Starters: 1,
      "Main Course": 1,
      "Indian Breads": 1,
      Rice: 1,
      Dal: 1,
      "Sweets & Ice Cream": 1,
    },
    extras: ["Indian Breads: Poori only · Sweets: Gulab Jamun only"],
  },
  {
    id: "plate-silver",
    name: "Silver",
    listPrice: 850,
    basePrice: 765,
    minPax: 100,
    tagline: "Popular choice with farsan",
    limits: {
      "Welcome Drink": 1,
      Starters: 1,
      "Main Course": 2,
      "Indian Breads": 2,
      Rice: 1,
      Dal: 1,
      Farsan: 1,
      "Sweets & Ice Cream": 1,
    },
    extras: ["Indian Breads: Poori and Fulka only"],
    highlight: true,
  },
  {
    id: "plate-gold",
    name: "Gold",
    listPrice: 1000,
    basePrice: 900,
    minPax: 100,
    tagline: "Premium spread",
    limits: {
      "Welcome Drink": 2,
      Farsan: 1,
      Starters: 2,
      "Main Course": 2,
      "Indian Breads": 2,
      Rice: 1,
      Dal: 1,
      "Sweets & Ice Cream": 2,
    },
  },
  {
    id: "plate-custom",
    name: "Elite",
    basePrice: 0,
    minPax: 100,
    tagline: "Build your own menu",
    limits: {},
    extras: ["Each dish charged at its category rate · Hall rent & decoration quoted separately"],
  },
];

export const PACKAGE_INCLUDES = [
  "Hall Rent + AC Electricity",
  "2 Changing Rooms",
  "Mic & Music",
  "Stage Light",
  "Stage Sofa",
  "Chairs with Seat Covers",
  "Separate Dining Area (up to 100 guests)",
  "Dedicated Elevator",
  "2 Parking Spaces",
] as const;

export const COMMON_PLATE_ITEMS = [
  "Salad",
  "Papad",
  "Achar",
  "Raita",
  "Chutney",
  "Mukhwas",
  "Packaged Drinking Water",
] as const;

export const SWAPPABLE_CATEGORIES = ["Main Course", "Rice", "Dal", "Live Counters"] as const;

export const CATEGORY_EXTRA_PRICES: Record<MenuCategory, number> = {
  "Welcome Drink": 30,
  Starters: 40,
  Salads: 30,
  Farsan: 40,
  "Main Course": 100,
  Breakfast: 45,
  Kathiawadi: 100,
  Rajasthani: 100,
  "Indian Breads": 30,
  Raita: 30,
  Rice: 60,
  Dal: 75,
  "Sweets & Ice Cream": 50,
  "Live Counters": 110,
};

export const LIVE_COUNTER_RULES: { name: string; price: string }[] = [
  { name: "Chaat Counter", price: "₹40/plate (flat per counter)" },
  { name: "Pasta Counter", price: "₹40/plate (flat per counter)" },
  { name: "Pizza", price: "₹50/plate (flat per counter)" },
  { name: "South Indian Counter", price: "₹75/plate (min. 3 varieties)" },
  { name: "Chinese / Oriental Counter", price: "₹30/plate × min. 3 varieties" },
  { name: "Additional Counters", price: "₹110/plate (flat per counter)" },
];

export const HALL_RENT = {
  venue: "Main Banquet Hall",
  description: "Indoor AC hall · up to 400 guests",
  ratePerHour: 7500,
  extraHourRate: 10000,
} as const;

export const TIME_SLOTS = [
  { label: "08:00 AM – 02:00 PM", hours: 6 },
  { label: "04:00 PM – 10:00 PM", hours: 6 },
  { label: "08:00 AM – 08:00 PM", hours: 12 },
  { label: "10:00 AM – 10:00 PM", hours: 12 },
] as const;

export const ADD_ON_SERVICES: { name: string; price: string; note?: string }[] = [
  { name: "DJ & Sound", price: "₹6,000" },
  { name: "Balloon Decoration", price: "₹4,500 – ₹15,000" },
  { name: "Photography", price: "₹3,000", note: "per hour" },
  { name: "Valet Parking", price: "₹8,000" },
  { name: "Anchor / MC", price: "₹3,500" },
  {
    name: "Smoke & Cold Pyro Entry With Smoke Bubble Machine",
    price: "₹800 – ₹1,000",
    note: "per pyro or smoke bubble machine",
  },
  { name: "Projector", price: "₹3,500" },
  { name: "Vidhi Mandap", price: "₹15,000 – ₹25,000" },
  { name: "Digital Screen", price: "₹15,000 – ₹25,000", note: "10' × 10' or 10' × 12'" },
];

export const STAGE_OPTIONS: { name: string; price: string; description: string }[] = [
  { name: "Classic Floral Stage", price: "₹15,000", description: "Roses + drapes" },
  { name: "Royal Mandap", price: "₹35,000", description: "Traditional wedding mandap" },
  { name: "LED Wall Stage", price: "₹45,000", description: "Full LED backdrop with visuals" },
  { name: "Minimal Modern", price: "₹18,000", description: "Clean geometric stage design" },
  { name: "Birthday Theme Stage", price: "₹12,000", description: "Character / theme based" },
];

export const DECOR_OPTIONS: { name: string; price: string; description: string }[] = [
  { name: "Floral Entrance Arch", price: "₹8,000", description: "Fresh flower entry gate" },
  { name: "Fairy Light Canopy", price: "₹6,000", description: "Warm fairy lights overhead" },
  { name: "Balloon Décor", price: "₹4,500 – ₹15,000", description: "Themed balloon arrangements" },
  { name: "Table Centerpieces", price: "₹3,500", description: "Per 10 tables" },
  { name: "Theme Backdrop", price: "₹7,000", description: "Custom photo backdrop" },
  { name: "Mandap Floral Setup", price: "₹25,000", description: "Traditional flower mandap" },
  { name: "Haldi Yellow Theme", price: "₹9,000", description: "Marigold & yellow drapes" },
  { name: "Mehendi Green Theme", price: "₹9,000", description: "Green florals & jhumkas" },
  { name: "Ring Ceremony Platter", price: "₹3,000", description: "Decorated ring tray" },
  { name: "Cradle Decoration", price: "₹6,500", description: "Floral cradle for baby" },
  { name: "Baby Shower Drapes", price: "₹5,500", description: "Pastel drapes & props" },
  { name: "Corporate Branding Standee", price: "₹4,000", description: "Logo standees & flags" },
  { name: "Stage Podium & Banner", price: "₹5,000", description: "Podium with branded banner" },
  { name: "Conference Table Setup", price: "₹3,500", description: "Table linens & notepads" },
  { name: "Awards Spotlight Setup", price: "₹12,000", description: "Spotlight + red carpet" },
  { name: "Garba Dandiya Décor", price: "₹8,500", description: "Traditional chaniya theme" },
  { name: "LED Dance Floor", price: "₹18,000", description: "Illuminated dance floor" },
  { name: "Karaoke Lounge Setup", price: "₹6,000", description: "Mood lighting + props" },
  { name: "Cake Table Décor", price: "₹2,500", description: "Decorated cake table" },
  { name: "School Theme Cutouts", price: "₹5,500", description: "Cartoon/educational props" },
  { name: "Charity Donor Wall", price: "₹7,000", description: "Sponsor & donor display" },
];

export function formatInr(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function formatPlatePackageLabel(pkg: PlatePackage): string {
  if (pkg.basePrice === 0) return `${pkg.name} — Custom menu`;
  return `${pkg.name} — ${formatInr(pkg.basePrice)}/plate`;
}

export function sortPackageCategories(categories: string[]): string[] {
  const rank = new Map(MENU_CATEGORY_ORDER.map((cat, i) => [cat, i]));
  return [...categories].sort((a, b) => {
    const ra = rank.get(a as MenuCategory) ?? Number.MAX_SAFE_INTEGER;
    const rb = rank.get(b as MenuCategory) ?? Number.MAX_SAFE_INTEGER;
    return ra !== rb ? ra - rb : a.localeCompare(b);
  });
}
