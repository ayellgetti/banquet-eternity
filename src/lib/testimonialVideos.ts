import { testimonials } from "@/lib/events";

export type TestimonialItem = {
  event: string;
  /** Video in public/videos, when we have one. */
  video?: string;
  name?: string;
  quote?: string;
};

const byEvent = (event: string) => testimonials.find((t) => t.event === event);

/** One list for the site: a video and/or a written comment per event. */
export const TESTIMONIAL_ITEMS: TestimonialItem[] = [
  { event: "Baby Shower", video: "/videos/baby-shower.mp4", ...byEvent("Baby Shower") },
  { event: "Haldi", video: "/videos/haldi.mp4" },
  { event: "Birthday", video: "/videos/birthday.mp4" },
  { event: "Celebration", video: "/videos/celebration.mp4" },
  // Written-only comments (no video yet).
  ...testimonials.filter((t) => t.event !== "Baby Shower"),
];
