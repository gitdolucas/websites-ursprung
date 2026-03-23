"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo } from "react";
import { useCart } from "@/contexts/CartContext";
import { products } from "@/data/products";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contact";
import { formatBRL, parsePriceBRL } from "@/lib/price-brl";

const fv =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function CheckoutCartSection() {
  const { lines, totalCount, setLineQuantity, removeLine, orderMessage } =
    useCart();
  const waHref = whatsappUrl(orderMessage);
  const hasItems = lines.length > 0;

  const { lineTotals, cartTotal } = useMemo(() => {
    let sum = 0;
    const lineTotals = lines.map((line) => {
      const p = products[line.id];
      const unit = parsePriceBRL(p.price);
      const sub = unit * line.quantity;
      sum += sub;
      return sub;
    });
    return { lineTotals, cartTotal: sum };
  }, [lines]);

  return (
    <>
      <section className="mb-14" aria-labelledby="checkout-cart-heading">
        <h2
          id="checkout-cart-heading"
          className="font-headline font-black text-2xl uppercase tracking-tighter text-on-surface mb-6"
        >
          Seu carrinho
        </h2>

        {!hasItems ? (
          <div className="rounded-2xl border border-outline-variant/25 bg-surface-container-highest/60 px-6 py-12 md:px-10 md:py-14 text-center">
            <span
              className="material-symbols-outlined text-primary text-4xl mb-4 inline-block"
              aria-hidden
            >
              shopping_bag
            </span>
            <p className="font-body text-on-surface-variant text-lg mb-6 max-w-md mx-auto leading-relaxed">
              Seu carrinho está vazio. Explore o catálogo e adicione sabores —
              eles aparecem aqui e vão na mensagem do WhatsApp.
            </p>
            <Link
              href="/produtos"
              className={`${fv} inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-headline text-sm font-bold uppercase tracking-wide text-on-primary`}
            >
              Ver produtos
              <span className="material-symbols-outlined text-lg" aria-hidden>
                arrow_forward
              </span>
            </Link>
          </div>
        ) : (
          <ul className="flex flex-col gap-4">
            {lines.map((line, index) => {
              const p = products[line.id];
              const lineSubtotal = lineTotals[index] ?? 0;
              return (
                <li
                  key={line.id}
                  className="flex flex-col sm:flex-row sm:items-center gap-4 rounded-2xl border border-outline-variant/20 bg-surface-container-highest p-4 sm:p-5"
                >
                  <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl ring-1 ring-white/[0.06]">
                    <Image
                      src={p.image}
                      alt={p.alt}
                      fill
                      className="object-cover"
                      sizes="96px"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-headline font-bold text-on-surface text-pretty">
                      {p.name}
                    </h3>
                    <p className="text-primary font-headline font-bold tabular-nums mt-1">
                      {p.price}{" "}
                      <span className="text-on-surface-variant font-body text-sm font-normal">
                        cada
                      </span>
                    </p>
                    <p className="mt-2 text-sm font-body text-on-surface-variant">
                      Subtotal:{" "}
                      <span className="font-headline font-bold tabular-nums text-on-surface">
                        {formatBRL(lineSubtotal)}
                      </span>
                    </p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 sm:justify-end">
                    <div
                      className="flex items-center rounded-xl border border-outline-variant/30 bg-surface-container-low"
                      role="group"
                      aria-label={`Quantidade de ${p.name}`}
                    >
                      <button
                        type="button"
                        className={`${fv} flex size-10 items-center justify-center rounded-l-xl text-on-surface hover:bg-surface-variant transition-colors`}
                        onClick={() =>
                          setLineQuantity(line.id, line.quantity - 1)
                        }
                        aria-label="Diminuir quantidade"
                      >
                        <span className="material-symbols-outlined text-xl" aria-hidden>
                          remove
                        </span>
                      </button>
                      <span className="min-w-[2.5rem] text-center font-headline font-bold tabular-nums text-on-surface">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        className={`${fv} flex size-10 items-center justify-center rounded-r-xl text-on-surface hover:bg-surface-variant transition-colors`}
                        onClick={() =>
                          setLineQuantity(line.id, line.quantity + 1)
                        }
                        aria-label="Aumentar quantidade"
                      >
                        <span className="material-symbols-outlined text-xl" aria-hidden>
                          add
                        </span>
                      </button>
                    </div>
                    <button
                      type="button"
                      className={`${fv} font-headline text-xs font-bold uppercase tracking-widest text-on-surface-variant hover:text-secondary transition-colors px-2 py-2`}
                      onClick={() => removeLine(line.id)}
                    >
                      Remover
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        )}

        {hasItems ? (
          <div className="mt-8 space-y-4">
            <div className="rounded-2xl border border-outline-variant/25 bg-surface-container-low/80 px-5 py-5 sm:px-6">
              <div className="flex flex-wrap items-baseline justify-between gap-2 border-b border-outline-variant/20 pb-4">
                <span className="font-headline text-sm font-bold uppercase tracking-widest text-on-surface-variant">
                  Total (produtos)
                </span>
                <span className="font-headline text-2xl font-black tabular-nums text-primary">
                  {formatBRL(cartTotal)}
                </span>
              </div>
              <p className="mt-4 text-sm font-body leading-relaxed text-on-surface-variant">
                <span className="font-headline font-bold text-secondary">
                  Frete não incluso.
                </span>{" "}
                O valor do envio não entra neste total — combinamos separadamente
                no WhatsApp conforme a região.
              </p>
            </div>
            <p className="text-sm text-on-surface-variant font-body">
              <span className="font-headline font-bold text-on-surface">
                {totalCount}
              </span>{" "}
              {totalCount === 1 ? "item" : "itens"} no pedido. Preços seguem o
              catálogo; qualquer ajuste final confirmamos no atendimento.
            </p>
          </div>
        ) : null}
      </section>

      <section className="mb-14">
        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <div className="bg-[#25d366] rounded-2xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg shadow-[#25d366]/20 hover:shadow-xl hover:shadow-[#25d366]/35 hover:scale-[1.01] active:scale-[0.99] transition-[transform,box-shadow] duration-300 ease-orchard focus-within:ring-2 focus-within:ring-white focus-within:ring-offset-2 focus-within:ring-offset-background">
            <div>
              <p className="text-white/90 font-body text-sm uppercase tracking-widest mb-1">
                Falar agora
              </p>
              <p className="font-headline font-black text-3xl md:text-4xl text-white tracking-tighter">
                {WHATSAPP_DISPLAY}
              </p>
              <p className="text-white/85 font-body mt-2">
                {hasItems
                  ? "Envia no WhatsApp a lista completa do seu carrinho."
                  : "Abre o WhatsApp com uma mensagem para iniciar o pedido."}
              </p>
            </div>
            <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4 font-headline font-bold text-white uppercase tracking-widest group-hover:bg-white/30 transition-colors">
              Enviar pedido
              <span className="material-symbols-outlined">arrow_forward</span>
            </span>
          </div>
        </a>
      </section>
    </>
  );
}
