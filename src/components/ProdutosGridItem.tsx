import Image from "next/image";
import type { CSSProperties } from "react";
import AddToCartButton from "@/components/AddToCartButton";
import { products, type ProdutosSection } from "@/data/products";

export default function ProdutosGridItem({
  section,
}: {
  section: ProdutosSection;
}) {
  const p = products[section.id];

  if (section.kind === "large") {
    const rev = section.rowReverse === true;
    const imgWrapBase =
      "relative w-full overflow-hidden rounded-xl ring-1 ring-white/[0.06] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)]";
    const imgClass =
      "w-full object-cover object-center shadow-2xl transition-transform duration-[900ms] ease-orchard group-hover:scale-105 aspect-[3/4] max-h-[min(72vh,520px)] md:aspect-auto md:h-64 md:max-h-none";

    const intro = (
      <div
        className={`min-w-0 md:row-start-1 ${rev ? "md:col-start-1" : "md:col-start-2"}`}
      >
        {p.editionLabel ? (
          <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-1.5 block md:mb-2">
            {p.editionLabel}
          </span>
        ) : null}
        <h3 className="text-2xl font-headline font-bold text-on-surface tracking-tight text-pretty sm:text-3xl mb-2 md:mb-4">
          {p.name}
        </h3>
        <p className="text-on-surface-variant font-body text-sm leading-snug mb-2 md:mb-6 md:text-base md:leading-normal">
          {p.description}
        </p>
        {p.tags && p.tags.length > 0 ? (
          <div className="flex flex-wrap gap-2 mb-0 md:mb-8">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-surface-variant text-[10px] uppercase font-bold text-on-surface-variant rounded tracking-widest"
              >
                {tag}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    );

    const media = (
      <div
        className={`${imgWrapBase} min-w-0 md:row-span-2 md:row-start-1 ${
          rev ? "md:col-start-2" : "md:col-start-1"
        }`}
      >
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 ease-orchard group-hover:opacity-100"
          aria-hidden
        />
        <Image
          className={imgClass}
          src={p.image}
          alt={p.alt}
          width={600}
          height={800}
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
    );

    const actions = (
      <div
        className={`flex min-w-0 flex-wrap items-center justify-between gap-3 md:row-start-2 md:self-end md:gap-4 md:pt-2 ${
          rev ? "md:col-start-1" : "md:col-start-2"
        }`}
      >
        <span className="text-xl font-bold text-primary tabular-nums md:text-2xl">
          {p.price}
        </span>
        <AddToCartButton
          productId={p.id}
          className="relative z-10 min-h-[44px] shrink-0 rounded-md bg-secondary px-6 py-3 font-bold text-on-secondary transition-[background-color,color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.03] hover:bg-secondary-container hover:text-on-secondary-container hover:shadow-[0_10px_32px_rgba(255,117,24,0.28)] active:scale-[0.98] md:px-8"
        >
          ADICIONAR
        </AddToCartButton>
      </div>
    );

    return (
      <div
        className={`group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-highest p-4 shadow-[0_4px_0_0_rgba(221,255,176,0.06)_inset] transition-[transform,background-color,box-shadow,border-color] duration-500 ease-orchard hover:-translate-y-1 hover:border-primary/25 motion-reduce:hover:translate-y-0 md:col-span-8 md:p-10 ${
          p.accentHex
            ? "flavor-catalog-card-lg"
            : "hover:shadow-[0_28px_64px_-28px_rgba(0,0,0,0.5),0_0_0_1px_rgba(221,255,176,0.08)]"
        }`}
        style={
          p.accentHex
            ? ({ "--flavor-accent": p.accentHex } as CSSProperties)
            : undefined
        }
      >
        <div
          className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-gradient-to-br from-primary/15 to-transparent opacity-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-full bg-secondary/5 blur-2xl"
          aria-hidden
        />
        <div className="relative z-[1] grid grid-cols-1 gap-3 md:grid-cols-2 md:grid-rows-[auto_1fr] md:items-stretch md:gap-8">
          {intro}
          {media}
          {actions}
        </div>
      </div>
    );
  }

  const showBadge = section.showBadge && p.badge;

  return (
    <div
      className={`group relative flex flex-col gap-2 rounded-2xl border border-outline-variant/20 bg-surface-container-highest p-4 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-orchard hover:-translate-y-1 hover:border-primary/20 motion-reduce:hover:translate-y-0 md:col-span-4 md:gap-0 md:p-6 ${
        p.accentHex
          ? "flavor-catalog-card"
          : "hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.45)]"
      }`}
      style={
        p.accentHex
          ? ({ "--flavor-accent": p.accentHex } as CSSProperties)
          : undefined
      }
    >
      <div className="order-1 flex items-start justify-between gap-3 md:order-2 md:mb-2">
        <h3 className="min-w-0 flex-1 text-lg font-headline font-bold leading-tight text-on-surface text-pretty md:text-xl">
          {p.name}
        </h3>
        <span className="shrink-0 text-sm font-bold text-primary tabular-nums md:text-base">
          {p.price}
        </span>
      </div>

      <div className="relative order-2 min-h-0 w-full overflow-hidden rounded-xl ring-1 ring-white/[0.05] md:order-1 md:mb-6">
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background/50 via-transparent to-primary/5 opacity-60 transition-opacity duration-500 ease-orchard group-hover:opacity-90"
          aria-hidden
        />
        <Image
          className="aspect-[3/4] max-h-[min(58vh,400px)] w-full object-cover object-center transition-transform duration-[900ms] ease-orchard group-hover:scale-105 md:aspect-auto md:h-48 md:max-h-none md:group-hover:scale-110"
          src={p.image}
          alt={p.alt}
          width={400}
          height={533}
          sizes="(min-width: 768px) 33vw, 100vw"
        />
        {showBadge ? (
          <div className="absolute right-2 top-2 z-[2] glass-card rounded-full border border-primary/20 px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-primary shadow-[0_8px_24px_-8px_rgba(221,255,176,0.25)] md:right-3 md:top-3 md:px-3 md:py-1.5">
            {p.badge}
          </div>
        ) : null}
      </div>

      <p className="order-3 text-sm leading-snug text-on-surface-variant font-body md:mb-6 md:leading-normal">
        {p.description}
      </p>

      <AddToCartButton
        productId={p.id}
        className="relative z-10 order-4 mt-0 w-full min-h-[44px] rounded-xl border border-primary/35 py-3 font-headline text-sm font-bold text-primary transition-[background-color,color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.02] hover:border-transparent hover:bg-primary hover:text-on-primary hover:shadow-[0_12px_32px_-12px_rgba(221,255,176,0.25)] active:scale-[0.98] motion-reduce:hover:scale-100 md:mt-auto md:py-3.5"
      >
        ADICIONAR
      </AddToCartButton>
    </div>
  );
}
