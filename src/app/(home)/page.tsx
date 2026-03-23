import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/AddToCartButton";
import Navbar from "@/components/Navbar";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contact";
import Footer from "@/components/Footer";
import PointerPanZoomShell from "@/components/PointerPanZoomShell";
import ProductZoomCard from "@/components/ProductZoomCard";
import { products } from "@/data/products";

const { maracuja, limao, coco } = products;

const NEWSLETTER_EMAIL_ID = "home-newsletter-email";

const fv =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";
const fvInverse =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-primary";

export default function Home() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="home-atmosphere relative scroll-mt-28 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto outline-none"
      >
        <div className="home-bento-stagger relative z-[1] grid grid-cols-1 md:grid-cols-4 md:grid-rows-6 gap-4 min-h-[1400px]">
          {/* Hero Section */}
          <PointerPanZoomShell
            className="md:col-span-3 md:row-span-3 bg-surface-container-highest rounded-[2rem] overflow-hidden relative group transition-[box-shadow] duration-500 ease-orchard hover:shadow-[0_24px_80px_-20px_rgba(221,255,176,0.08)] motion-reduce:hover:shadow-none"
            imageSrc="/images/hero-image.png"
            imageAlt="Garrafa Ursprung Passionsfrucht sobre pedra escura com maracujá e gotas de água"
            sizes="(min-width: 768px) 75vw, 100vw"
            imageClassName="object-center"
            priority
            maxPanPx={28}
            zoom={1.06}
            overlay={
              <div className="absolute inset-0 z-[1] bg-gradient-to-br from-primary/10 to-transparent transition-opacity duration-700 ease-orchard group-hover:opacity-90 motion-reduce:group-hover:opacity-100 pointer-events-none" />
            }
          >
            <div className="hero-content-stagger relative h-full flex flex-col justify-end p-8 md:p-12 z-10">
              <span className="inline-block px-3 py-1 bg-tertiary-container text-on-tertiary-container rounded-full text-xs font-label font-semibold tracking-[0.22em] uppercase mb-4 w-fit transition-transform duration-300 ease-orchard group-hover:translate-y-[-2px] motion-reduce:group-hover:translate-y-0">
                Authentic Experience
              </span>
              <h1 className="home-hero-display text-pretty font-headline font-semibold text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-[-0.02em] md:tracking-[-0.03em] text-on-surface mb-6 transition-[text-shadow,transform] duration-500 ease-orchard group-hover:translate-y-[-2px] motion-reduce:group-hover:translate-y-0">
                O GOSTO
                <br />
                AUTÊNTICO
                <br />
                DO BRASIL
              </h1>
              <div className="flex flex-wrap gap-4 items-center">
                <Link
                  href="/produtos"
                  className={`home-cta-shimmer group/cta bg-primary text-on-primary px-8 py-4 font-headline font-bold uppercase tracking-tight text-xl rounded-lg shadow-[0_10px_40px_rgba(221,255,176,0.2)] hover:bg-primary-fixed hover:text-on-primary-fixed transition-[background-color,color,transform] duration-300 ease-orchard hover:scale-[1.02] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 motion-reduce:animate-none flex items-center gap-3 ${fvInverse}`}
                >
                  Explorar Sabores
                  <span
                    className="material-symbols-outlined transition-transform duration-300 ease-orchard group-hover/cta:translate-x-1 motion-reduce:group-hover/cta:translate-x-0"
                    aria-hidden
                  >
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          </PointerPanZoomShell>

          {/* About Section */}
          <div className="md:col-span-1 md:row-span-3 bg-surface-container-low rounded-[2rem] p-8 flex flex-col justify-between border-outline-variant/15 border transition-[transform,background-color] duration-500 ease-orchard hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
            <div>
              <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-lg mb-8">
                <span
                  className="material-symbols-outlined text-on-secondary"
                  aria-hidden
                >
                  auto_awesome
                </span>
              </div>
              <h2 className="text-pretty font-headline font-semibold text-4xl uppercase tracking-tight leading-none mb-6">
                ESSÊNCIA ARTESANAL
              </h2>
              <p className="font-body text-on-surface-variant leading-relaxed text-lg">
                Unimos a tradição do campo com a pulsação urbana. Cada garrafa é
                um manifesto de sabor, destilada para quem não aceita o comum.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-outline-variant/20">
              <div className="flex items-center gap-4">
                <div className="text-3xl font-headline font-semibold text-secondary tabular-nums">
                  01
                </div>
                <div className="text-xs font-label font-semibold uppercase tracking-[0.2em] opacity-60">
                  Pureza Máxima
                </div>
              </div>
            </div>
          </div>

          {/* Product: Maracujá */}
          <ProductZoomCard
            className="md:col-span-1 md:row-span-3 bg-surface-container-high rounded-[2rem] overflow-hidden group relative transition-[transform,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 shadow-none hover:shadow-[inset_0_0_88px_rgba(200,117,34,0.22),inset_0_0_36px_rgba(200,117,34,0.12),inset_0_0_0_1px_rgba(200,117,34,0.25)] motion-reduce:hover:shadow-none"
            imageSrc={maracuja.image}
            imageAlt={maracuja.alt}
            sizes="(min-width: 768px) 25vw, 100vw"
            imageClassName="opacity-40"
          >
            <div className="relative z-10 h-full p-8 flex flex-col justify-between min-w-0">
              <div>
                <h3 className="text-pretty font-headline font-semibold text-3xl uppercase tracking-tight">
                  Maracujá
                </h3>
                <p className="font-body text-sm opacity-70">Tropical &amp; Intenso</p>
              </div>
              <div className="flex justify-between items-end gap-3">
                <div className="text-2xl font-headline font-bold tabular-nums min-w-0">
                  {maracuja.price}
                </div>
                <button
                  type="button"
                  aria-label={`Adicionar ${maracuja.name} ao carrinho`}
                  className={`w-12 h-12 shrink-0 bg-on-surface text-background flex items-center justify-center rounded-lg group-hover:bg-primary group-hover:text-on-primary transition-[background-color,color,transform] duration-300 ease-orchard group-hover:scale-105 active:scale-95 motion-reduce:group-hover:scale-100 motion-reduce:active:scale-100 ${fv}`}
                >
                  <span className="material-symbols-outlined" aria-hidden>
                    shopping_bag
                  </span>
                </button>
              </div>
            </div>
          </ProductZoomCard>

          {/* Product: Limão */}
          <ProductZoomCard
            className="md:col-span-2 md:row-span-2 bg-surface-container-high rounded-[2rem] overflow-hidden group relative transition-[transform,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 shadow-none hover:shadow-[inset_0_0_100px_rgba(233,193,111,0.2),inset_0_0_40px_rgba(233,193,111,0.1),inset_0_0_0_1px_rgba(233,193,111,0.28)] motion-reduce:hover:shadow-none"
            imageSrc={limao.image}
            imageAlt={limao.alt}
            sizes="(min-width: 768px) 50vw, 100vw"
            imageClassName="opacity-50"
          >
            <div className="relative z-10 h-full p-8 flex flex-col justify-between min-w-0">
              <div className="max-w-[60%] min-w-0 [text-shadow:0_2px_20px_rgba(14,15,3,0.85),0_1px_3px_rgba(14,15,3,0.9)]">
                <h3 className="text-pretty font-headline font-semibold text-4xl uppercase tracking-tight mb-2">
                  Clássico Limão
                </h3>
                <p className="font-body text-on-surface-variant break-words leading-relaxed">
                  A receita original elevada ao nível digital. Ácido,
                  refrescante e letalmente saboroso.
                </p>
              </div>
              <div className="flex justify-between items-center gap-3">
                <div className="text-3xl font-headline font-bold text-primary tabular-nums [text-shadow:0_2px_18px_rgba(14,15,3,0.8)] min-w-0">
                  {limao.price}
                </div>
                <button
                  type="button"
                  aria-label={`Adicionar ${limao.name} ao carrinho`}
                  className={`shrink-0 bg-primary text-on-primary px-6 py-3 font-headline font-bold uppercase rounded-lg flex items-center gap-2 transition-[background-color,color,transform,box-shadow] duration-300 ease-orchard hover:bg-primary-fixed hover:text-on-primary-fixed hover:scale-[1.03] hover:shadow-[inset_0_0_28px_rgba(62,102,0,0.12)] active:scale-[0.98] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 ${fvInverse}`}
                >
                  Add{" "}
                  <span
                    className="material-symbols-outlined transition-transform duration-300 ease-orchard group-hover:rotate-90 motion-reduce:group-hover:rotate-0"
                    aria-hidden
                  >
                    add
                  </span>
                </button>
              </div>
            </div>
          </ProductZoomCard>

          {/* WhatsApp Link */}
          <a
            href={whatsappUrl("Olá! Vim pelo site da Ursprung.")}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-1 md:row-span-1 bg-[#25d366] text-white rounded-[2rem] p-6 flex items-center justify-center hover:scale-[1.02] active:scale-[0.99] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 transition-[transform,box-shadow] duration-300 ease-orchard shadow-lg shadow-[#25d366]/20 hover:shadow-xl hover:shadow-[#25d366]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label={`Abrir conversa no WhatsApp com ${WHATSAPP_DISPLAY}`}
          >
            <div className="flex flex-col items-center">
              <span
                className="material-symbols-outlined text-4xl mb-1"
                aria-hidden
              >
                chat
              </span>
              <span className="font-headline font-bold tracking-tight">
                {WHATSAPP_DISPLAY}
              </span>
              <span className="text-[10px] font-label font-semibold uppercase tracking-[0.2em] opacity-80">
                WhatsApp Direto
              </span>
            </div>
          </a>

          {/* Newsletter */}
          <div className="md:col-span-2 md:row-span-1 bg-surface-container-lowest rounded-[2rem] p-8 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-8 border border-outline-variant/15 transition-[border-color,box-shadow] duration-300 ease-orchard focus-within:border-primary/40 focus-within:shadow-[0_0_0_1px_rgba(221,255,176,0.15)] min-w-0">
            <div className="flex-1 min-w-0">
              <h3
                id="home-newsletter-heading"
                className="text-pretty font-headline font-semibold text-xl uppercase tracking-tight mb-2"
              >
                News do Orchard
              </h3>
              <p className="font-body text-xs opacity-60 leading-relaxed">
                Receba drops exclusivos e novos sabores.
              </p>
            </div>
            <div
              className="flex-[2] flex flex-col sm:flex-row gap-2 min-w-0 w-full sm:w-auto"
              role="group"
              aria-labelledby="home-newsletter-heading"
            >
              <label htmlFor={NEWSLETTER_EMAIL_ID} className="sr-only">
                E-mail para a newsletter
              </label>
              <input
                id={NEWSLETTER_EMAIL_ID}
                name="newsletter-email"
                className={`bg-surface-container border-none rounded-lg flex-1 min-w-0 text-sm focus:ring-1 focus:ring-primary placeholder:opacity-30 font-body font-medium tracking-normal normal-case px-4 py-2 transition-[background-color,box-shadow] duration-300 ease-orchard ${fv}`}
                placeholder="nome@exemplo.com…"
                type="email"
                autoComplete="email"
                spellCheck={false}
                inputMode="email"
              />
              <button
                type="button"
                aria-label="Inscrever-se na newsletter"
                className={`shrink-0 bg-on-surface text-background px-6 rounded-lg font-headline font-bold text-sm uppercase tracking-tight transition-[background-color,transform,color] duration-300 ease-orchard hover:bg-primary hover:text-on-primary active:scale-[0.97] motion-reduce:hover:scale-100 motion-reduce:active:scale-100 ${fv}`}
              >
                Assinar
              </button>
            </div>
          </div>

          {/* Product: Coco */}
          <div className="md:col-span-1 md:row-span-1 bg-surface-container-high rounded-[2rem] overflow-hidden group relative hover:bg-secondary-container transition-[transform,background-color] duration-500 ease-orchard hover:-translate-y-0.5 motion-reduce:hover:translate-y-0">
            <Image
              className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-10 motion-reduce:group-hover:opacity-30 transition-opacity duration-500 ease-orchard"
              src={coco.image}
              alt={coco.alt}
              fill
              sizes="(min-width: 768px) 25vw, 100vw"
            />
            <div className="relative h-full px-8 flex items-center justify-between gap-3 min-w-0">
              <div className="min-w-0">
                <h3 className="text-pretty font-headline font-semibold text-2xl uppercase tracking-tight">
                  {coco.name}
                </h3>
                <div className="text-xl font-headline font-bold text-secondary tabular-nums">
                  {coco.price}
                </div>
              </div>
              <AddToCartButton
                productId="coco"
                aria-label={`Adicionar ${coco.name} ao carrinho`}
                className={`w-10 h-10 shrink-0 border border-on-surface/20 flex items-center justify-center rounded-lg hover:bg-on-surface hover:text-background transition-[background-color,color,border-color,transform] duration-300 ease-orchard hover:scale-105 active:scale-95 motion-reduce:hover:scale-100 motion-reduce:active:scale-100 ${fv}`}
              >
                <span className="material-symbols-outlined text-sm" aria-hidden>
                  add_shopping_cart
                </span>
              </AddToCartButton>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
