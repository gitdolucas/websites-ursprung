/** Canonical WhatsApp (E.164 without +). */
export const WHATSAPP_E164 = "5547992937579";

/** Display format for UI (DDD + number). */
export const WHATSAPP_DISPLAY = "(47) 992937579";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
