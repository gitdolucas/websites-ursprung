import Image from "next/image";
import { products, type ProdutosSection } from "@/data/products";

export default function ProdutosGridItem({
  section,
}: {
  section: ProdutosSection;
}) {
  const p = products[section.id];

  if (section.kind === "large") {
    const rowDir = section.rowReverse ? "md:flex-row-reverse" : "md:flex-row";
    const imgClass =
      "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-orchard shadow-2xl";

    return (
      <div className="md:col-span-8 group relative overflow-hidden rounded-2xl border border-outline-variant/20 bg-surface-container-highest p-7 md:p-10 shadow-[0_4px_0_0_rgba(221,255,176,0.06)_inset] transition-[transform,background-color,box-shadow,border-color] duration-500 ease-orchard hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_28px_64px_-28px_rgba(0,0,0,0.5),0_0_0_1px_rgba(221,255,176,0.08)] motion-reduce:hover:translate-y-0">
        <div
          className="pointer-events-none absolute left-0 top-0 h-24 w-24 bg-gradient-to-br from-primary/15 to-transparent opacity-80"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 right-0 h-32 w-32 rounded-full bg-secondary/5 blur-2xl"
          aria-hidden
        />
        <div className={`relative z-[1] flex flex-col gap-8 items-center h-full ${rowDir}`}>
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-xl ring-1 ring-white/[0.06] shadow-[0_20px_50px_-24px_rgba(0,0,0,0.45)]">
            <div
              className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-orchard"
              aria-hidden
            />
            <Image
              className={imgClass}
              src={p.image}
              alt={p.alt}
              width={600}
              height={256}
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-between h-full min-h-0">
            <div>
              {p.editionLabel ? (
                <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
                  {p.editionLabel}
                </span>
              ) : null}
              <h3 className="text-3xl font-headline font-bold text-on-surface tracking-tight mb-4 text-pretty">
                {p.name}
              </h3>
              <p className="text-on-surface-variant font-body mb-6">
                {p.description}
              </p>
              {p.tags && p.tags.length > 0 ? (
                <div className="flex flex-wrap gap-2 mb-8">
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
            <div className="flex flex-wrap items-center justify-between gap-4 mt-auto pt-2">
              <span className="text-2xl font-bold text-primary tabular-nums">
                {p.price}
              </span>
              <button
                type="button"
                className="px-8 py-3 bg-secondary text-on-secondary font-bold rounded-md shrink-0 hover:bg-secondary-container hover:text-on-secondary-container transition-[background-color,color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_10px_32px_rgba(255,117,24,0.28)]"
              >
                ADICIONAR
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const showBadge = section.showBadge && p.badge;

  return (
    <div className="md:col-span-4 group relative flex flex-col rounded-2xl border border-outline-variant/20 bg-surface-container-highest p-6 transition-[transform,background-color,box-shadow,border-color] duration-500 ease-orchard hover:-translate-y-1 hover:border-primary/20 hover:shadow-[0_24px_48px_-28px_rgba(0,0,0,0.45)] motion-reduce:hover:translate-y-0">
      <div className="relative mb-6 overflow-hidden rounded-xl ring-1 ring-white/[0.05]">
        <div
          className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-background/50 via-transparent to-primary/5 opacity-60 group-hover:opacity-90 transition-opacity duration-500 ease-orchard"
          aria-hidden
        />
        <Image
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-orchard"
          src={p.image}
          alt={p.alt}
          width={400}
          height={192}
        />
        {showBadge ? (
          <div className="absolute top-3 right-3 z-[2] glass-card px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-primary border border-primary/20 shadow-[0_8px_24px_-8px_rgba(221,255,176,0.25)]">
            {p.badge}
          </div>
        ) : null}
      </div>
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-headline font-bold text-on-surface">
          {p.name}
        </h3>
        <span className="text-primary font-bold">{p.price}</span>
      </div>
      <p className="text-sm text-on-surface-variant font-body mb-6">
        {p.description}
      </p>
      <button
        type="button"
        className="mt-auto py-3.5 border border-primary/35 text-primary font-headline text-sm font-bold rounded-xl hover:bg-primary hover:text-on-primary hover:border-transparent transition-[background-color,color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.02] hover:shadow-[0_12px_32px_-12px_rgba(221,255,176,0.25)] active:scale-[0.98] motion-reduce:hover:scale-100"
      >
        ADICIONAR
      </button>
    </div>
  );
}
