const brl = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

/** Parses display prices like "R$ 35,00" or "R$ 1.234,56" into a number (BRL). */
export function parsePriceBRL(price: string): number {
  const trimmed = price.replace(/R\$\s*/i, "").trim();
  const commaIdx = trimmed.lastIndexOf(",");
  if (commaIdx === -1) {
    const n = parseFloat(trimmed.replace(/\./g, ""));
    return Number.isFinite(n) ? n : 0;
  }
  const intPart = trimmed.slice(0, commaIdx).replace(/\./g, "");
  const decPart = trimmed.slice(commaIdx + 1).replace(/\D/g, "").slice(0, 2);
  const n = parseFloat(`${intPart}.${decPart.padEnd(2, "0")}`);
  return Number.isFinite(n) ? n : 0;
}

export function formatBRL(value: number): string {
  return brl.format(value);
}
