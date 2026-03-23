"use client";

import { useMemo, useState } from "react";
import ProdutosGridItem from "@/components/ProdutosGridItem";
import {
  products,
  type ProductCategory,
  type ProdutosSection,
} from "@/data/products";

const FILTERS: { id: "all" | ProductCategory; label: string }[] = [
  { id: "all", label: "Todos" },
  { id: "tropical", label: "Frutas tropicais" },
  { id: "limited", label: "Edições limitadas" },
  { id: "kit", label: "Kits de presente" },
];

const fvChip =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function ProdutosCatalog({
  sections,
}: {
  sections: ProdutosSection[];
}) {
  const [filter, setFilter] = useState<"all" | ProductCategory>("all");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sections.filter((s) => {
      const p = products[s.id];
      if (filter !== "all" && p.category !== filter) return false;
      if (!q) return true;
      const hay = `${p.name} ${p.description}`.toLowerCase();
      return hay.includes(q);
    });
  }, [sections, filter, query]);

  return (
    <>
      <section
        className="relative z-[10] px-4 sm:px-8 mb-14 max-w-7xl mx-auto"
        aria-label="Filtros do catálogo"
      >
        <div className="produtos-toolbar orchard-stagger-children flex flex-col gap-6 lg:flex-row lg:flex-wrap lg:items-center lg:gap-4">
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {FILTERS.map((f) => {
              const active = filter === f.id;
              return (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setFilter(f.id)}
                  className={`${fvChip} relative px-5 py-2.5 rounded-full text-sm font-semibold tracking-tight transition-[transform,box-shadow,background-color,color,border-color] duration-300 ease-orchard motion-reduce:transition-none ${
                    active
                      ? "bg-primary text-on-primary shadow-[0_0_0_1px_rgba(221,255,176,0.35),0_12px_40px_-12px_rgba(221,255,176,0.35)] scale-[1.02] hover:bg-primary-fixed hover:text-on-primary-fixed"
                      : "glass-card text-on-surface hover:-translate-y-0.5 hover:border-primary/30 hover:bg-surface-variant/85 hover:text-primary motion-reduce:hover:translate-y-0"
                  }`}
                >
                  {f.label}
                </button>
              );
            })}
          </div>
          <div className="lg:ml-auto w-full lg:w-auto lg:min-w-[280px]">
            <label className="sr-only" htmlFor="produtos-busca">
              Buscar no catálogo
            </label>
            <div className="produtos-search-shell flex items-center gap-3 rounded-full px-5 py-3 border border-outline-variant/25 bg-surface-container-high/80 backdrop-blur-md transition-[border-color,box-shadow] duration-300 ease-orchard focus-within:border-primary/45 focus-within:shadow-[0_0_0_1px_rgba(221,255,176,0.12)]">
              <span
                className="material-symbols-outlined text-primary text-xl shrink-0"
                aria-hidden
              >
                search
              </span>
              <input
                id="produtos-busca"
                className="w-full min-w-0 bg-transparent border-none focus:ring-0 text-sm text-on-surface placeholder:text-on-surface-variant/70 outline-none"
                placeholder="Buscar sabor ou nota…"
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                autoComplete="off"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-[10] px-4 sm:px-8 max-w-7xl mx-auto pb-4">
        {visible.length === 0 ? (
          <p
            className="rounded-2xl border border-outline-variant/30 bg-surface-container-low/90 px-8 py-16 text-center font-body text-on-surface-variant text-lg"
            role="status"
          >
            Nenhum produto encontrado. Ajuste os filtros ou a busca.
          </p>
        ) : (
          <div className="produtos-bento-stagger grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-7">
            {visible.map((section) => (
              <ProdutosGridItem key={section.id} section={section} />
            ))}
          </div>
        )}
      </section>
    </>
  );
}
