import { useEffect } from "react";
import { trackContact, trackLead } from "@/lib/fbpixel";

const WEBHOOK_HOST = "hook.us2.make.com";

/**
 * Global Meta Pixel tracker:
 * - Fires `Contact` on any click that targets a WhatsApp link or a
 *   button/link whose text includes "Contact".
 * - Fires `Lead` when any form on the site is submitted, or when a
 *   fetch/XHR request is sent to the Make webhook (covers form submissions
 *   that call preventDefault and post via fetch).
 */
const MetaPixelTracker = () => {
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const el = target.closest("a, button") as HTMLElement | null;
      if (!el) return;

      const href = (el as HTMLAnchorElement).href || "";
      const text = (el.textContent || "").toLowerCase();
      const label = (el.getAttribute("aria-label") || "").toLowerCase();

      const isWhatsApp = /wa\.me|whatsapp|api\.whatsapp/i.test(href) || /whatsapp/.test(label);
      const isContact = /contactar|contáctanos|contactanos|contacto|hablar con|agendar/i.test(text);

      if (isWhatsApp || isContact) {
        trackContact({ source: isWhatsApp ? "whatsapp" : "contact_button" });
      }
    };

    const onSubmit = () => {
      trackLead();
    };

    document.addEventListener("click", onClick, true);
    document.addEventListener("submit", onSubmit, true);

    // Backup: track Lead on webhook fetch calls
    const originalFetch = window.fetch;
    window.fetch = function (input: RequestInfo | URL, init?: RequestInit) {
      try {
        const url = typeof input === "string" ? input : input instanceof URL ? input.href : (input as Request).url;
        if (url && url.includes(WEBHOOK_HOST)) {
          trackLead();
        }
      } catch {
        /* noop */
      }
      return originalFetch.call(this, input as RequestInfo, init);
    };

    return () => {
      document.removeEventListener("click", onClick, true);
      document.removeEventListener("submit", onSubmit, true);
      window.fetch = originalFetch;
    };
  }, []);

  return null;
};

export default MetaPixelTracker;
