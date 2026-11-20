import { testimonials } from "@/lib/events";

export type TestimonialItem = {
  event: string;
  /** Video in public/videos, when we have one. */
  video?: string;
  name?: string;
  quote?: string;
  /** Neutral caption shown when there is no guest comment yet (not a review). */
  caption?: string;
};

const byEvent = (event: string) => testimonials.find((t) => t.event === event);

/** One card per reel; a guest comment is attached only where we have one. */
export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  { event: "Baby Shower", video: "/videos/baby-shower.mp4", ...byEvent("Baby Shower") },
  {
    event: "Haldi",
    video: "/videos/haldi.mp4",
    caption: "A haldi celebration at Eternity Banquet",
  },
  {
    event: "Engagement",
    video: "/videos/engagement-reel-oct.mp4",
    caption: "An engagement celebration at Eternity Banquet",
  },
  {
    event: "Birthday",
    video: "/videos/birthday.mp4",
    caption: "A birthday celebration at Eternity Banquet",
  },
  {
    event: "Birthday",
    video: "/videos/birthday-sep.mp4",
    caption: "A birthday celebration at Eternity Banquet",
  },
  {
    event: "Birthday",
    video: "/videos/birthday-reel-aug.mp4",
    caption: "A birthday celebration at Eternity Banquet",
  },
  {
    event: "Birthday",
    video: "/videos/birthday-reel-aug-2.mp4",
    caption: "A birthday celebration at Eternity Banquet",
  },
];
