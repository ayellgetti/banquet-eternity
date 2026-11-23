import { testimonials } from "@/lib/events";

export type TestimonialItem = {
  event: string;
  /** Video in public/videos, when we have one. */
  video?: string;
  quote?: string;
  /** Neutral caption shown when there is no guest comment yet (not a review). */
  caption?: string;
};

const byEvent = (event: string) => testimonials.find((t) => t.event === event);

/** One card per reel; a guest comment is attached only where we have one. */
export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  {
    event: "Baby Shower",
    video: "/videos/baby-shower.mp4",
    quote: byEvent("Baby Shower")?.quote,
  },
  {
    event: "Haldi",
    video: "/videos/haldi.mp4",
    quote:
      "Had a wonderful experience at Eternity Banquet! Beautiful ambience, excellent arrangements and very cooperative staff. Everything was perfectly managed. Highly recommended!",
  },
  {
    event: "Engagement Function",
    video: "/videos/engagement-reel-oct.mp4",
    quote:
      "Perfect place for hosting an engagement ceremony. Lovely ambience, beautiful arrangements and professional management. Everything was just as expected.",
  },
  {
    event: "Birthday Celebration",
    video: "/videos/birthday.mp4",
    quote:
      "Celebrated a birthday here and had an amazing experience. Beautiful decoration, spacious hall and wonderful arrangements. Everyone enjoyed the event!",
  },
  {
    event: "Birthday Celebration",
    video: "/videos/birthday-sep.mp4",
    quote:
      "We had a wonderful birthday celebration here. Everything was well organised, from the decoration to the food service. Thank you for making our day special!",
  },
  {
    event: "Birthday Celebration",
    video: "/videos/birthday-reel-aug.mp4",
    quote:
      "One of the best birthday party venues in Kandivali West. Beautiful interiors, spacious seating and amazing arrangements.",
  },
  {
    event: "Birthday Celebration",
    video: "/videos/birthday-reel-aug-2.mp4",
    quote:
      "Very beautiful and well-maintained banquet. Perfect for intimate birthday parties and family gatherings. Excellent service throughout!",
  },
  {
    event: "Corporate Event",
    video: "/videos/corporate-event.mp4",
    quote:
      "One of the best banquet venues in the area. Excellent facilities, attractive decoration and good service at reasonable prices.",
  },
];
