"use client";

import type { ButtonHTMLAttributes } from "react";
import { useCart } from "@/contexts/CartContext";
import type { ProductId } from "@/data/products";

type Props = {
  productId: ProductId;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export default function AddToCartButton({
  productId,
  onClick,
  className = "",
  ...rest
}: Props) {
  const { addToCart } = useCart();

  const mergedClass = [
    "cursor-pointer touch-manipulation [-webkit-tap-highlight-color:transparent]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type="button"
      {...rest}
      className={mergedClass}
      onClick={(e) => {
        addToCart(productId, 1);
        onClick?.(e);
      }}
    />
  );
}
