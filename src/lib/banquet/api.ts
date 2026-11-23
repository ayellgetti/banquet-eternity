import type { PublicEnquiryInput } from "./enquiry";

export class ApiError extends Error {
  constructor(
    public readonly status: number,
    message: string,
  ) {
    super(message);
    this.name = "ApiError";
  }
}

/**
 * Base URL of the banquet CRM API (no trailing slash). Set VITE_CRM_API_URL to override,
 * e.g. for a staging deploy.
 */
const CRM_API_URL: string = (
  import.meta.env.VITE_CRM_API_URL ?? "https://banquet.myfinancefreedom.com"
).replace(/\/$/, "");

/** Unauthenticated banquet intake: the enquiry lands in the CRM. */
export async function submitPublicEnquiry(input: PublicEnquiryInput): Promise<void> {
  const response = await fetch(`${CRM_API_URL}/api/crm/public/enquiries`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(input),
  });
  let message = "Could not submit the enquiry";
  let ok = response.ok;
  try {
    const body = (await response.json()) as { status?: boolean; message?: string };
    if (body.status === false) ok = false;
    if (body.message) message = body.message;
  } catch {
    // non-JSON response: keep the generic message
  }
  if (!ok) throw new ApiError(response.status, message);
}
