"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import CartToastStack, {
  type CartToastItem,
} from "@/components/cart/CartToastStack";
import { products, type ProductId } from "@/data/products";
import { type CartLine, formatOrderMessage } from "@/lib/order-message";

function newToastId() {
  if (typeof crypto !== "undefined" && crypto.randomUUID) {
    return crypto.randomUUID();
  }
  return `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

const STORAGE_KEY = "ursprung-cart-v1";

const productIds = new Set(Object.keys(products) as ProductId[]);

function parseStored(raw: string | null): CartLine[] {
  if (!raw) return [];
  try {
    const data = JSON.parse(raw) as unknown;
    if (!Array.isArray(data)) return [];
    const tallies = new Map<ProductId, number>();
    for (const row of data) {
      if (
        row &&
        typeof row === "object" &&
        "id" in row &&
        "quantity" in row &&
        productIds.has(row.id as ProductId) &&
        typeof (row as { quantity: unknown }).quantity === "number"
      ) {
        const id = row.id as ProductId;
        const quantity = Math.min(
          99,
          Math.max(1, Math.floor((row as { quantity: number }).quantity)),
        );
        tallies.set(id, Math.min(99, (tallies.get(id) ?? 0) + quantity));
      }
    }
    return [...tallies.entries()].map(([id, quantity]) => ({ id, quantity }));
  } catch {
    return [];
  }
}

type CartContextValue = {
  lines: CartLine[];
  totalCount: number;
  addToCart: (id: ProductId, quantity?: number) => void;
  setLineQuantity: (id: ProductId, quantity: number) => void;
  removeLine: (id: ProductId) => void;
  clearCart: () => void;
  orderMessage: string;
};

const CartContext = createContext<CartContextValue | null>(null);

const MAX_STACKED_TOASTS = 2;

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [toasts, setToasts] = useState<CartToastItem[]>([]);

  useEffect(() => {
    setLines(parseStored(localStorage.getItem(STORAGE_KEY)));
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    if (lines.length === 0) {
      localStorage.removeItem(STORAGE_KEY);
      return;
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  const dismissToast = useCallback((toastId: string) => {
    setToasts((prev) => prev.filter((t) => t.id !== toastId));
  }, []);

  const dismissAllToasts = useCallback(() => {
    setToasts([]);
  }, []);

  const addToCart = useCallback((id: ProductId, quantity = 1) => {
    if (!productIds.has(id)) return;
    const q = Math.min(99, Math.max(1, Math.floor(quantity)));
    setLines((prev) => {
      const i = prev.findIndex((l) => l.id === id);
      if (i === -1) return [...prev, { id, quantity: q }];
      const next = [...prev];
      next[i] = {
        id,
        quantity: Math.min(99, next[i].quantity + q),
      };
      return next;
    });
    setToasts((prev) => {
      const incoming: CartToastItem = {
        id: newToastId(),
        productId: id,
        addedQty: q,
      };
      if (prev.length < MAX_STACKED_TOASTS) return [...prev, incoming];
      const [, ...rest] = prev;
      return [...rest, incoming];
    });
  }, []);

  const setLineQuantity = useCallback((id: ProductId, quantity: number) => {
    const q = Math.floor(quantity);
    if (q <= 0) {
      setLines((prev) => prev.filter((l) => l.id !== id));
      return;
    }
    setLines((prev) => {
      const capped = Math.min(99, q);
      const i = prev.findIndex((l) => l.id === id);
      if (i === -1) return [...prev, { id, quantity: capped }];
      const next = [...prev];
      next[i] = { id, quantity: capped };
      return next;
    });
  }, []);

  const removeLine = useCallback((id: ProductId) => {
    setLines((prev) => prev.filter((l) => l.id !== id));
  }, []);

  const clearCart = useCallback(() => setLines([]), []);

  const totalCount = useMemo(
    () => lines.reduce((sum, l) => sum + l.quantity, 0),
    [lines],
  );

  const orderMessage = useMemo(() => formatOrderMessage(lines), [lines]);

  const value = useMemo(
    () => ({
      lines,
      totalCount,
      addToCart,
      setLineQuantity,
      removeLine,
      clearCart,
      orderMessage,
    }),
    [
      lines,
      totalCount,
      addToCart,
      setLineQuantity,
      removeLine,
      clearCart,
      orderMessage,
    ],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartToastStack
        toasts={toasts}
        onDismiss={dismissToast}
        onDismissAll={dismissAllToasts}
      />
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within CartProvider");
  }
  return ctx;
}
