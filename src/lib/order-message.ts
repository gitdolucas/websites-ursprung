import { products, type ProductId } from "@/data/products";
import { formatBRL, parsePriceBRL } from "@/lib/price-brl";

export type CartLine = { id: ProductId; quantity: number };

const EMPTY_CART_MESSAGE =
  "Olá! Quero fazer um pedido de batidas Ursprung. Pode me ajudar com valores e entrega?";

export function formatOrderMessage(lines: CartLine[]): string {
  const valid = lines.filter(
    (l) => l.quantity > 0 && products[l.id] != null,
  );
  if (valid.length === 0) return EMPTY_CART_MESSAGE;

  let grandTotal = 0;
  const blocks = valid.map((l) => {
    const p = products[l.id];
    const unit = parsePriceBRL(p.price);
    const lineSubtotal = unit * l.quantity;
    grandTotal += lineSubtotal;
    return `${l.quantity}x ${p.name} — ${p.price}\nSubtotal: ${formatBRL(lineSubtotal)}`;
  });

  const body = blocks.join("\n\n");
  const totalUnits = valid.reduce((sum, l) => sum + l.quantity, 0);

  return `Olá! Gostaria de pedir pela Ursprung:

${body}

Total (produtos): ${formatBRL(grandTotal)}
Frete não incluso — combinamos à parte.
Total de garrafas/unidades: ${totalUnits}

Podem confirmar disponibilidade, valores e entrega? Obrigado!`;
}
