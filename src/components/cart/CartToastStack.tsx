"use client";

import Link from "next/link";
import { useEffect } from "react";
import { products, type ProductId } from "@/data/products";

export type CartToastItem = {
  id: string;
  productId: ProductId;
  addedQty: number;
};

const AUTO_DISMISS_MS = 4800;

function ToastRow({
  toast,
  onDismiss,
}: {
  toast: CartToastItem;
  onDismiss: (id: string) => void;
}) {
  const p = products[toast.productId];
  const title = p?.name ?? "Produto";

  useEffect(() => {
    const t = window.setTimeout(() => onDismiss(toast.id), AUTO_DISMISS_MS);
    return () => window.clearTimeout(t);
  }, [toast.id, onDismiss]);

  const message =
    toast.addedQty > 1
      ? `${toast.addedQty}× ${title} adicionados ao carrinho`
      : `${title} adicionado ao carrinho`;

  return (
    <div
      role="status"
      className="pointer-events-auto flex items-start gap-2 rounded-xl border border-outline-variant/25 bg-surface-container-highest/95 py-2 pl-2 pr-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md motion-safe:animate-[cart-toast-in_0.22s_ease-out]"
    >
      <Link
        href="/checkout"
        onClick={() => onDismiss(toast.id)}
        className="min-w-0 flex-1 flex items-start gap-3 rounded-lg px-2 py-1.5 text-left text-on-surface transition-colors hover:bg-surface-variant/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label={`${message}. Ir para o carrinho e pedidos.`}
      >
        <span
          className="material-symbols-outlined text-primary shrink-0 text-xl mt-0.5"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden
        >
          check_circle
        </span>
        <p className="min-w-0 flex-1 text-sm font-body leading-snug">
          {message}
        </p>
      </Link>
      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        className="shrink-0 self-start rounded-lg p-1.5 text-on-surface-variant transition-colors hover:bg-surface-variant hover:text-on-surface focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label="Fechar aviso"
      >
        <span className="material-symbols-outlined text-lg" aria-hidden>
          close
        </span>
      </button>
    </div>
  );
}

export default function CartToastStack({
  toasts,
  onDismiss,
}: {
  toasts: CartToastItem[];
  onDismiss: (id: string) => void;
}) {
  if (toasts.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[110] flex max-h-[50vh] flex-col justify-end gap-2 overflow-y-auto overscroll-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      aria-live="polite"
      aria-relevant="additions"
    >
      <div className="mx-auto flex w-full max-w-md flex-col gap-2">
        {toasts.map((toast) => (
          <ToastRow key={toast.id} toast={toast} onDismiss={onDismiss} />
        ))}
      </div>
    </div>
  );
}
