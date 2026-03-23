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
  ...rest
}: Props) {
  const { addToCart } = useCart();

  return (
    <button
      type="button"
      {...rest}
      onClick={(e) => {
        addToCart(productId, 1);
        onClick?.(e);
      }}
    />
  );
}
