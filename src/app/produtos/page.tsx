import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProdutosGridItem from "@/components/ProdutosGridItem";
import { produtosGrid } from "@/data/products";

export const metadata: Metadata = {
  title: "Produtos",
  description:
    "Catálogo de batidas artesanais Ursprung: sabores tropicais, edições limitadas e kits. Cachaça de alambique e frutas frescas.",
};

export default function Produtos() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="scroll-mt-28 pt-24 pb-20 outline-none"
      >
        {/* Hero Section */}
        <section className="px-8 py-16 md:py-24 max-w-7xl mx-auto">
          <div className="relative overflow-hidden bg-surface-container-low rounded-xl p-8 md:p-16 border-l-4 border-primary transition-[box-shadow,border-color] duration-500 ease-orchard hover:shadow-[0_20px_60px_-20px_rgba(221,255,176,0.06)]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent pointer-events-none transition-opacity duration-700 ease-orchard" />
            <div className="orchard-stagger-children relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-tertiary-container text-on-tertiary-container rounded-full">
                Artesanal &amp; Digital
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter leading-none mb-6">
                Coleções Tropicais
              </h1>
              <p className="text-lg md:text-xl font-body text-on-surface-variant leading-relaxed">
                Experimente a fusão eletrizante entre a tradição dos destilados
                brasileiros e a precisão do futuro neon. Batidas formuladas com
                frutas frescas e cachaça de alambique premium.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <section className="px-8 mb-12 max-w-7xl mx-auto">
          <div className="orchard-stagger-children flex flex-wrap gap-4 items-center">
            <button
              type="button"
              className="px-6 py-2 bg-primary text-on-primary font-bold rounded-md hover:scale-[1.02] active:scale-[0.97] transition-[transform,box-shadow] duration-300 ease-orchard hover:shadow-[0_8px_28px_rgba(221,255,176,0.15)]"
            >
              Todos
            </button>
            <button
              type="button"
              className="px-6 py-2 glass-card text-on-surface font-medium rounded-md hover:bg-surface-variant transition-[background-color,transform] duration-300 ease-orchard hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Frutas Tropicais
            </button>
            <button
              type="button"
              className="px-6 py-2 glass-card text-on-surface font-medium rounded-md hover:bg-surface-variant transition-[background-color,transform] duration-300 ease-orchard hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Edições Limitadas
            </button>
            <button
              type="button"
              className="px-6 py-2 glass-card text-on-surface font-medium rounded-md hover:bg-surface-variant transition-[background-color,transform] duration-300 ease-orchard hover:-translate-y-0.5 active:scale-[0.98]"
            >
              Kits de Presente
            </button>
            <div className="ml-auto flex items-center glass-card rounded-md px-4 py-2 border border-outline-variant/15 transition-[border-color,box-shadow] duration-300 ease-orchard focus-within:border-primary/40 focus-within:shadow-[0_0_0_1px_rgba(221,255,176,0.12)]">
              <span className="material-symbols-outlined text-on-surface-variant mr-2">
                search
              </span>
              <input
                className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-40 md:w-64 outline-none transition-[color] duration-300 ease-orchard"
                placeholder="Buscar sabor..."
                type="text"
              />
            </div>
          </div>
        </section>

        {/* Bento Grid Gallery */}
        <section className="px-8 max-w-7xl mx-auto">
          <div className="orchard-stagger-children grid grid-cols-1 md:grid-cols-12 gap-6">
            {produtosGrid.map((section) => (
              <ProdutosGridItem key={section.id} section={section} />
            ))}
          </div>
        </section>

        {/* Artisanal Badge Section */}
        <section className="mt-24 px-8 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-4 glass-card rounded-full px-6 py-3 border border-outline-variant/15 transition-[transform,border-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 hover:border-primary/25">
            <span
              className="material-symbols-outlined text-primary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            <span className="font-label text-sm font-bold uppercase tracking-widest text-on-surface">
              Destilado no Brasil • 100% Natural • Sem Conservantes
            </span>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
