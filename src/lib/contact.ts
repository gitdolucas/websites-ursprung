/** Canonical WhatsApp (E.164 without +). */
export const WHATSAPP_E164 = "5547992483508";

/** Display format for UI (DDD + number). */
export const WHATSAPP_DISPLAY = "47 99248-3508";

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_E164}?text=${encodeURIComponent(message)}`;
}
