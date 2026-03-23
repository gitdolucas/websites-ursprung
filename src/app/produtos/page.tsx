import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProdutosCatalog from "@/components/produtos/ProdutosCatalog";
import { produtosGrid, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Catálogo de batidas artesanais Ursprung: sabores tropicais, edições limitadas e kits. Cachaça de alambique e frutas frescas.",
};

const fv =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

export default function Produtos() {
  const count = Object.keys(products).length;

  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="produtos-atmosphere relative max-w-full scroll-mt-28 pt-24 pb-24 outline-none md:pb-28"
      >
        <div className="produtos-hero-orb motion-reduce:hidden" aria-hidden />

        <section className="relative z-[1] px-4 sm:px-8 pt-10 pb-6 md:pt-14 md:pb-10 max-w-7xl mx-auto">
          <div className="produtos-hero-grid">
            <div className="orchard-stagger-children relative">
              <p className="inline-flex items-center gap-2 text-[11px] sm:text-xs font-bold tracking-[0.28em] uppercase text-secondary mb-5">
                <span
                  className="h-px w-8 bg-gradient-to-r from-secondary to-transparent"
                  aria-hidden
                />
                Catálogo ursprung
              </p>
              <h1 className="text-pretty font-headline font-extrabold text-4xl sm:text-6xl md:text-7xl lg:text-[4.25rem] leading-[0.95] tracking-tight text-on-surface mb-6">
                <span className="block bg-gradient-to-br from-primary via-primary-fixed to-tertiary-dim bg-clip-text text-transparent drop-shadow-[0_0_40px_rgba(221,255,176,0.12)]">
                  Coleções tropicais
                </span>
                <span className="block mt-2 text-on-surface/95">
                  &amp; edições de pico
                </span>
              </h1>
              <p className="max-w-xl font-body text-base sm:text-lg text-on-surface-variant leading-relaxed mb-8">
                Batidas de alambique com fruta de verdade — entre o brejo e o
                asfalto. Filtre por linha ou busque por nota e nome.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href="/checkout"
                  className={`${fv} inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3 font-headline text-sm font-bold uppercase tracking-wide text-on-secondary shadow-[0_12px_40px_-8px_rgba(255,117,24,0.35)] transition-[transform,box-shadow,background-color,color] duration-300 ease-orchard hover:-translate-y-0.5 hover:bg-secondary-container hover:text-on-secondary-container hover:shadow-[0_16px_48px_-6px_rgba(255,117,24,0.45)] active:scale-[0.98] motion-reduce:hover:translate-y-0`}
                >
                  Finalizar pedido
                  <span className="material-symbols-outlined text-lg" aria-hidden>
                    shopping_bag
                  </span>
                </Link>
                <span className="text-xs font-label uppercase tracking-widest text-on-surface-variant/90">
                  {count} rótulos vivos no grid
                </span>
              </div>
            </div>

            <aside
              className="produtos-hero-index orchard-stagger-children lg:justify-self-end w-full max-w-md lg:max-w-none"
              aria-label="Resumo do catálogo"
            >
              <div className="produtos-hero-index-row">
                <span>Origem</span>
                <span>Brasil</span>
              </div>
              <div className="produtos-hero-index-row">
                <span>Processo</span>
                <span>Pequenos lotes</span>
              </div>
              <div className="produtos-hero-index-row">
                <span>Nota</span>
                <span>Fruta + cachaça</span>
              </div>
              <div className="produtos-hero-index-row">
                <span>Edição</span>
                <span>2025</span>
              </div>
            </aside>
          </div>
        </section>

        <ProdutosCatalog sections={produtosGrid} />

        <section className="relative z-[1] mt-20 md:mt-28 px-4 sm:px-8 max-w-7xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl border border-outline-variant/25 bg-gradient-to-br from-surface-container-highest via-surface-container-low to-surface-container-high px-8 py-12 md:px-14 md:py-16 text-center">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/10 blur-3xl"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute -bottom-20 left-1/4 h-40 w-40 rounded-full bg-secondary/15 blur-3xl"
              aria-hidden
            />
            <span
              className="material-symbols-outlined text-primary text-3xl mb-4 inline-block"
              style={{ fontVariationSettings: "'FILL' 1" }}
              aria-hidden
            >
              verified
            </span>
            <p className="font-headline text-xl md:text-2xl font-bold text-on-surface tracking-tight mb-3">
              Destilado no Brasil • 100% natural • Sem conservantes
            </p>
            <p className="font-body text-on-surface-variant max-w-lg mx-auto text-sm md:text-base leading-relaxed">
              Cada garrafa é um recorte do que acreditamos: sabor honesto,
              embalagem que brilha na vitrine e respeito ao produtor.
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
