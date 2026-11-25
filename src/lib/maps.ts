export type VenueLocation = {
  id: "charkop" | "borivali";
  name: string;
  tagline: string;
  area: string;
  address: string;
  pincode: string;
  mapsUrl: string;
  embedUrl: string;
  badge: string;
  badgeTone: "new" | "established";
  capacity?: string;
  landmarks: string[];
};

export const VENUES: VenueLocation[] = [
  {
    id: "charkop",
    name: "Eternity Banquet",
    tagline: "Sahyadri Nagar, Charkop",
    area: "Charkop, Kandivali West, Mumbai",
    address:
      "Plot No. 93-A, 2nd Floor, Bank Of Baroda, Opp Sahyadri Nagar Hanuman Temple, Charkop Gaon, Kandivali West, Mumbai, Maharashtra 400067",
    pincode: "400067",
    mapsUrl: "https://maps.app.goo.gl/HheP6zr9LLzHH3M56",
    embedUrl:
      "https://www.google.com/maps?q=Eternity+Banquet,+Charkop,+Kandivali+West,+Mumbai+400067&ll=19.2094992,72.8274876&z=17&output=embed",
    badge: "Newly opened",
    badgeTone: "new",
    capacity: "250–400 guests",
    landmarks: [
      "Bank Of Baroda (in the building)",
      "Opp. Hanuman Temple, Sahyadri Nagar",
      "Near Golden Leaf Pure Veg Restaurant",
    ],
  },
  {
    id: "borivali",
    name: "Eternity Hospitality",
    tagline: "Garjato Marathi",
    area: "Rail Nagar, Borivali West, Mumbai",
    address:
      "Rail Nagar CHS, Chandavarkar Road, Near Ashirwad Building, Vazira, Borivali West, Mumbai, Maharashtra 400092",
    pincode: "400092",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Garjato+Marathi+Eternity+Banquets,+Rail+Nagar,+Borivali+West,+Mumbai+400092",
    embedUrl:
      "https://www.google.com/maps?q=Garjato+Marathi+Eternity+Banquets,+Rail+Nagar,+Borivali+West,+Mumbai+400092&z=16&output=embed",
    badge: "6 years of service",
    badgeTone: "established",
    capacity: "100–1000 guests",
    landmarks: [
      "Near Ashirwad Building, Chandavarkar Road",
      "Close to Don Bosco High School",
      "5 min from Borivali railway station",
    ],
  },
];

export const VENUE_CHARKOP = VENUES[0];
export const VENUE_BORIVALI = VENUES[1];

/** @deprecated Use VENUE_CHARKOP — kept for existing imports */
export const VENUE = {
  name: VENUE_CHARKOP.name,
  area: VENUE_CHARKOP.area,
  pincode: VENUE_CHARKOP.pincode,
  lat: 19.2094992,
  lng: 72.8274876,
  address: VENUE_CHARKOP.address,
} as const;

export const MAPS_URL = VENUE_CHARKOP.mapsUrl;
export const MAPS_EMBED_URL = VENUE_CHARKOP.embedUrl;

export const HERITAGE_YEARS_BORIVALI = 6;
