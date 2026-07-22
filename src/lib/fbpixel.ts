// Meta Pixel helpers
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

export const fbqTrack = (event: string, params?: Record<string, unknown>) => {
  if (typeof window !== "undefined" && typeof window.fbq === "function") {
    try {
      params ? window.fbq("track", event, params) : window.fbq("track", event);
    } catch {
      /* noop */
    }
  }
};

export const trackLead = (params?: Record<string, unknown>) => fbqTrack("Lead", params);
export const trackContact = (params?: Record<string, unknown>) => fbqTrack("Contact", params);
