import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contact";
import { checkoutHighlightIds, products } from "@/data/products";

export const metadata: Metadata = {
  title: "Pedidos",
  description:
    "Peça batidas Ursprung pelo WhatsApp: combinamos sabores, quantidades e entrega. Veja destaques e fale direto com a equipe.",
};

const ORDER_MESSAGE =
  "Olá! Quero fazer um pedido de batidas Ursprung. Pode me ajudar com valores e entrega?";

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
            Nosso checkout é humano: você chama no WhatsApp, combinamos sabores,
            quantidades e entrega na região. Sem carrinho automático — atendimento
            direto da equipe Ursprung.
          </p>
        </section>

        <section className="mb-14">
          <a
            href={whatsappUrl(ORDER_MESSAGE)}
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
                  Abre o WhatsApp com uma mensagem pronta para o pedido.
                </p>
              </div>
              <span className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4 font-headline font-bold text-white uppercase tracking-widest group-hover:bg-white/30 transition-colors">
                Enviar pedido
                <span className="material-symbols-outlined">arrow_forward</span>
              </span>
            </div>
          </a>
        </section>

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
