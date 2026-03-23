"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { products, type ProductId } from "@/data/products";

export type CartToastItem = {
  id: string;
  productId: ProductId;
  addedQty: number;
};

const AUTO_DISMISS_MS = 4800;
const EXIT_ANIMATION_MS = 180;

function ToastRow({
  toast,
  onDismiss,
  isPaused,
  onHoverChange,
}: {
  toast: CartToastItem;
  onDismiss: (id: string) => void;
  isPaused: boolean;
  onHoverChange: (isHovering: boolean) => void;
}) {
  const p = products[toast.productId];
  const title = p?.name ?? "Produto";
  const [isClosing, setIsClosing] = useState(false);
  const closeTimeoutRef = useRef<number | null>(null);
  const dismissTimeoutRef = useRef<number | null>(null);
  const remainingMsRef = useRef(AUTO_DISMISS_MS);
  const startedAtRef = useRef<number | null>(null);

  const queueClose = () => {
    if (isClosing) return;
    setIsClosing(true);
    dismissTimeoutRef.current = window.setTimeout(
      () => onDismiss(toast.id),
      EXIT_ANIMATION_MS,
    );
  };

  useEffect(() => {
    if (isClosing || isPaused) return;
    startedAtRef.current = Date.now();
    closeTimeoutRef.current = window.setTimeout(queueClose, remainingMsRef.current);
    return () => {
      if (closeTimeoutRef.current !== null) {
        if (startedAtRef.current !== null && !isPaused) {
          const elapsed = Date.now() - startedAtRef.current;
          remainingMsRef.current = Math.max(0, remainingMsRef.current - elapsed);
        }
        window.clearTimeout(closeTimeoutRef.current);
        closeTimeoutRef.current = null;
      }
      if (dismissTimeoutRef.current !== null)
        window.clearTimeout(dismissTimeoutRef.current);
    };
  }, [toast.id, onDismiss, isClosing, isPaused]);

  const message =
    toast.addedQty > 1
      ? `${toast.addedQty}× ${title} adicionados ao carrinho`
      : `${title} adicionado ao carrinho`;

  return (
    <div
      role="status"
      onMouseEnter={() => onHoverChange(true)}
      onMouseLeave={() => onHoverChange(false)}
      className={`group/cart-toast pointer-events-auto flex items-center gap-2 rounded-xl border border-outline-variant/25 bg-surface-container-highest/95 py-2 pl-2 pr-2 shadow-[0_12px_40px_rgba(0,0,0,0.35)] backdrop-blur-md ${
        isClosing
          ? "motion-safe:animate-[cart-toast-out_0.18s_ease-in_forwards]"
          : "motion-safe:animate-[cart-toast-in_0.22s_ease-out]"
      }`}
    >
      <Link
        href="/checkout"
        onClick={queueClose}
        className="min-w-0 flex-1 flex items-center gap-3 rounded-lg px-2 py-1.5 text-left text-on-surface transition-colors hover:bg-surface-variant/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
        aria-label={`${message}. Ir para o carrinho e pedidos.`}
      >
        <span
          className="material-symbols-outlined text-primary shrink-0 text-xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
          aria-hidden
        >
          check_circle
        </span>
        <div className="toast-flip-frame min-w-0 flex-1 self-stretch">
          <div className="toast-flip-inner h-full min-h-[2.5rem]">
            <p className="toast-flip-face text-sm font-body leading-snug">
              {message}
            </p>
            <span className="toast-flip-face toast-flip-face-back toast-flip-face-back-cta">
              Ir para o carrinho
            </span>
          </div>
        </div>
      </Link>
      <button
        type="button"
        onClick={queueClose}
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
  const [hoveredCount, setHoveredCount] = useState(0);
  const isPaused = hoveredCount > 0;

  const handleHoverChange = (isHovering: boolean) => {
    setHoveredCount((prev) =>
      isHovering ? prev + 1 : Math.max(0, prev - 1),
    );
  };

  useEffect(() => {
    if (toasts.length === 0) setHoveredCount(0);
  }, [toasts.length]);

  if (toasts.length === 0) return null;

  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[110] flex max-h-[50vh] flex-col justify-end gap-2 overflow-y-auto overscroll-contain p-4 pb-[max(1rem,env(safe-area-inset-bottom))]"
      aria-live="polite"
      aria-relevant="additions"
    >
      <div className="mx-auto flex w-full max-w-md flex-col gap-2">
        {toasts.map((toast) => (
          <ToastRow
            key={toast.id}
            toast={toast}
            onDismiss={onDismiss}
            isPaused={isPaused}
            onHoverChange={handleHoverChange}
          />
        ))}
      </div>
    </div>
  );
}
