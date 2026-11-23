export const CRM_EVENT_SLOTS = ["morning", "evening", "full_day"] as const;
export type CrmEventSlot = (typeof CRM_EVENT_SLOTS)[number];

export const EVENT_SLOT_LABELS: Record<CrmEventSlot, string> = {
  morning: "Morning",
  evening: "Evening",
  full_day: "Full day",
};

export const CRM_ENQUIRY_SOURCES = [
  "Walk-in",
  "Referral",
  "Instagram",
  "Facebook",
  "Google",
  "WhatsApp",
  "Wedding Wire",
  "Other",
] as const;

export const MOBILE_PATTERN = /^\+?[0-9]{7,15}$/;

export function formatDate(value: string | null | undefined): string {
  if (!value) return "—";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString(undefined, { dateStyle: "medium" });
}

export function toLocalDateKey(date: Date): string {
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
}
