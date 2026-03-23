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
    const imgClass = p.editionLabel
      ? "w-full h-64 object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-orchard shadow-2xl"
      : "w-full h-80 object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-orchard shadow-2xl";

    return (
      <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)]">
        <div className={`flex flex-col gap-8 items-center h-full ${rowDir}`}>
          <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
            <Image
              className={imgClass}
              src={p.image}
              alt={p.alt}
              width={600}
              height={p.editionLabel ? 256 : 320}
            />
          </div>
          <div
            className={`w-full md:w-1/2 flex flex-col justify-between h-full ${p.editionLabel ? "" : "py-4"}`}
          >
            <div>
              {p.editionLabel ? (
                <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
                  {p.editionLabel}
                </span>
              ) : null}
              <div
                className={
                  p.editionLabel ? "" : "flex justify-between items-start mb-4"
                }
              >
                <h3
                  className={
                    p.editionLabel
                      ? "text-3xl font-headline font-bold text-on-surface tracking-tight mb-4"
                      : "text-3xl font-headline font-bold text-primary tracking-tight"
                  }
                >
                  {p.name}
                </h3>
                {!p.editionLabel ? (
                  <span className="text-secondary font-bold text-2xl">
                    {p.price}
                  </span>
                ) : null}
              </div>
              <p className="text-on-surface-variant font-body mb-6">
                {p.description}
              </p>
              {p.tags && p.tags.length > 0 ? (
                <div className="flex gap-2 mb-8">
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
            {p.editionLabel ? (
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary">
                  {p.price}
                </span>
                <button
                  type="button"
                  className="px-8 py-3 bg-secondary text-on-secondary font-bold rounded-md hover:bg-secondary-container transition-[background-color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_10px_32px_rgba(255,117,24,0.2)]"
                >
                  ADICIONAR
                </button>
              </div>
            ) : (
              <button
                type="button"
                className="group/cart w-full py-4 bg-primary text-on-primary font-bold rounded-md flex items-center justify-center gap-2 hover:bg-secondary-container transition-[background-color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(221,255,176,0.12)] active:scale-[0.99]"
              >
                <span className="material-symbols-outlined transition-transform duration-300 ease-orchard group-hover/cart:-translate-y-0.5">
                  add_shopping_cart
                </span>
                ADICIONAR AO CARRINHO
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  const showBadge = section.showBadge && p.badge;

  return (
    <div className="md:col-span-4 group flex flex-col bg-surface-container-highest rounded-xl p-6 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
      <div className="relative mb-6 overflow-hidden rounded-lg">
        <Image
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-orchard"
          src={p.image}
          alt={p.alt}
          width={400}
          height={192}
        />
        {showBadge ? (
          <div className="absolute top-3 right-3 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary">
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
        className="mt-auto py-3 border border-primary/30 text-primary font-bold rounded-md hover:bg-primary hover:text-on-primary transition-[background-color,color,transform] duration-300 ease-orchard hover:scale-[1.02] active:scale-[0.98]"
      >
        ADICIONAR
      </button>
    </div>
  );
}
