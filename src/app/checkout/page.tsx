import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CheckoutCartSection from "@/components/checkout/CheckoutCartSection";
import { checkoutHighlightIds, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Pedidos",
  description:
    "Monte seu carrinho e peça batidas Ursprung pelo WhatsApp: a mensagem leva sabores e quantidades; combinamos entrega com a equipe.",
};

export default function CheckoutPage() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="scroll-mt-28 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto outline-none"
      >
        <section className="mb-14">
          <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-tertiary-container text-on-tertiary-container rounded-full">
            Pedidos
          </span>
          <h1 className="font-headline font-black text-4xl md:text-6xl text-on-surface tracking-tighter leading-none mb-6">
            Finalize pelo WhatsApp
          </h1>
          <p className="text-lg md:text-xl text-on-surface-variant font-body max-w-2xl leading-relaxed">
            Use o carrinho para escolher sabores e quantidades; ao enviar, abrimos
            o WhatsApp com o pedido por escrito. Valores finais e entrega na região
            combinamos direto com a equipe Ursprung.
          </p>
        </section>

        <CheckoutCartSection />

        <section className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <h2 className="font-headline font-black text-2xl uppercase tracking-tighter text-on-surface">
              Sabores em destaque
            </h2>
            <Link
              href="/produtos"
              className="font-headline font-bold text-sm uppercase tracking-widest text-primary hover:text-secondary transition-colors"
            >
              Ver catálogo completo →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {checkoutHighlightIds.map((id) => {
              const p = products[id];
              return (
                <div
                  key={p.id}
                  className="bg-surface-container-highest rounded-xl overflow-hidden border border-outline-variant/15 transition-[border-color,box-shadow] duration-300 ease-orchard hover:border-primary/25"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      className="object-cover"
                      src={p.image}
                      alt={p.alt}
                      fill
                      sizes="(min-width: 640px) 33vw, 100vw"
                    />
                  </div>
                  <div className="p-5 flex justify-between items-center gap-3">
                    <div>
                      <h3 className="font-headline font-bold text-on-surface">
                        {p.name}
                      </h3>
                      <p className="text-primary font-headline font-bold">
                        {p.price}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <p className="text-sm text-on-surface-variant font-body max-w-xl">
          Dúvidas antes de pedir?{" "}
          <Link
            href="/contato"
            className="text-primary font-bold underline-offset-2 hover:underline"
          >
            Fale conosco
          </Link>{" "}
          ou confira a página{" "}
          <Link
            href="/sobre"
            className="text-primary font-bold underline-offset-2 hover:underline"
          >
            Sobre
          </Link>
          .
        </p>
      </main>

      <Footer />
    </>
  );
}
