import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const smallProducts = [
  {
    name: "Clássico Limão",
    price: "R$ 25,00",
    description:
      "Batida artesanal de cachaça com limão taiti e segredo da casa.",
    image: "/products/zitrone.png",
    alt: "Garrafa Ursprung Zitrone — batida artesanal de limão",
    badge: "BEST SELLER",
  },
  {
    name: "Coco Cyber",
    price: "R$ 32,00",
    description:
      "Textura aveludada com leite de coco artesanal e infusão de fava tonka.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNEetgRFAzcGgo_lmY7LT9FRJZZlDRvBVSdYnjqUpHkXh17koTeA9HqrU1kGFMtd66lTT6DngyC0iKr60h3RJB_bH0weUeYIpSLpOOSLi4n16_eoe3_-luWe2B4xDUbPDD-5LTMihYvY8-ViPsqTjjZZSAiRpfft2zvt6wRwaNDuiJYWX_XXQ6rRVKYnKJb-XiZAukiCbO5PDtqg7TEaJm4QAUO9O_NkSXyAvmc8GowxWsMdqDSrEwv9fnafb86qy8iDrBkP1yaHtz",
    alt: "Batida de coco cremosa com coco ralado",
  },
  {
    name: "Frutas Vermelhas",
    price: "R$ 36,00",
    description: "Mix de amora, framboesa e morango com cachaça prata de Minas.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsuaETRAqHVXb4PcJx1JfH-x4jWU09uEfnMpZWaaS1RxnUNlOa5rzQe5OWfKewQ8LR1nP4YkwbwR9RIOoZeawDNeTMJNZaEdNn3erUE1L5Sn3USP_D-6eHvWgwNG39yNgMPFUu3Aahveg7vvxLPzKG2orTc9Dx0NxR8GNeGX110P9U0FFlnMXz00cQxhFnrGVDs4gqP4XMt9U8qbc0VY9xINy1dzzsrae6lDnvlbLovL3ugRO9TiSalHyhwkc6suhoLx2NEOUucwkS",
    alt: "Batida roxa intensa de frutas vermelhas",
  },
  {
    name: "Abacaxi Cyber",
    price: "R$ 29,00",
    description:
      "Abacaxi pérola com hortelã fresca e xarope artesanal de gengibre.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeBlQ1fY82Cg9tYWiL-ANhGQgaPVp1XzFP8n4TROQsvJsCE0C_Gg8mBBoCdwb9W0JnnDhiPLcnqkRPTAKLL3ELRsozdb43c_KqugGiwm-D9bciSbI-7gV82Gyhk9wKiIEj7bY_-TX1_p_-dcwWkr2sqMBuEhPq4Yx4oMufwS5hVY-q-mdPGQ8mdFjhwgIbN_BYCgZTegauBOwUcqzbTq1XeJjPekQso5kYNdbH1Y55OQ7Q-Si1ULBLUhJVt6yebsbUnBiYNCSHtETY",
    alt: "Batida amarela de abacaxi com hortelã",
  },
  {
    name: "Kit Degustação",
    price: "R$ 85,00",
    description:
      "Três mini garrafas (200ml) com nossos sabores mais icônicos.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLRu9vqmbyKkGE6eObUlEtcu8sNETeRGUb0x0ze3tjc4GeeY7fpZGyLasD23WvRq_kOK0hXz-HLPRf1oIRXB-f2r4BWOs3kFTsrs6-uXVcKasSm9G3U4dPevA77yd11CVZQDgk7qc7CQeuPsmKDaGor55TUvIme2dmepVZLE6KAVKddRe-839UIinnabZSee6Tz45tiiSWT_Je-LFmqs96U2IdntTCUarEsIBSnFbTMMi-znMuwdlyshGESiyPufBgeDl1HeRKXMRb",
    alt: "Kit de presente com garrafas artesanais",
  },
];

export default function Produtos() {
  return (
    <>
      <Navbar />

      <main className="pt-24 pb-20">
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
            <button className="px-6 py-2 bg-primary text-on-primary font-bold rounded-md hover:scale-[1.02] active:scale-[0.97] transition-[transform,box-shadow] duration-300 ease-orchard hover:shadow-[0_8px_28px_rgba(221,255,176,0.15)]">
              Todos
            </button>
            <button className="px-6 py-2 glass-card text-on-surface font-medium rounded-md hover:bg-surface-variant transition-[background-color,transform] duration-300 ease-orchard hover:-translate-y-0.5 active:scale-[0.98]">
              Frutas Tropicais
            </button>
            <button className="px-6 py-2 glass-card text-on-surface font-medium rounded-md hover:bg-surface-variant transition-[background-color,transform] duration-300 ease-orchard hover:-translate-y-0.5 active:scale-[0.98]">
              Edições Limitadas
            </button>
            <button className="px-6 py-2 glass-card text-on-surface font-medium rounded-md hover:bg-surface-variant transition-[background-color,transform] duration-300 ease-orchard hover:-translate-y-0.5 active:scale-[0.98]">
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
            {/* Product 1: Large Bento — Tropical Maracujá */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col md:flex-row gap-8 items-center h-full">
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
                  <Image
                    className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-orchard shadow-2xl"
                    src="/products/passionfrucht.png"
                    alt="Garrafa Ursprung Passionsfrucht — batida artesanal de maracujá"
                    width={600}
                    height={320}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between h-full py-4">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-3xl font-headline font-bold text-primary tracking-tight">
                        Tropical Maracujá
                      </h3>
                      <span className="text-secondary font-bold text-2xl">
                        R$ 35,00
                      </span>
                    </div>
                    <p className="text-on-surface-variant font-body mb-6">
                      Batida artesanal de maracujá com toque de baunilha cyber e
                      cachaça envelhecida em bálsamo.
                    </p>
                    <div className="flex gap-2 mb-8">
                      <span className="px-2 py-1 bg-surface-variant text-[10px] uppercase font-bold text-on-surface-variant rounded tracking-widest">
                        Premium
                      </span>
                      <span className="px-2 py-1 bg-surface-variant text-[10px] uppercase font-bold text-on-surface-variant rounded tracking-widest">
                        Fruta Fresca
                      </span>
                    </div>
                  </div>
                  <button className="group/cart w-full py-4 bg-primary text-on-primary font-bold rounded-md flex items-center justify-center gap-2 hover:bg-secondary-container transition-[background-color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.01] hover:shadow-[0_12px_40px_rgba(221,255,176,0.12)] active:scale-[0.99]">
                    <span className="material-symbols-outlined transition-transform duration-300 ease-orchard group-hover/cart:-translate-y-0.5">
                      add_shopping_cart
                    </span>
                    ADICIONAR AO CARRINHO
                  </button>
                </div>
              </div>
            </div>

            {/* Product 2: Clássico Limão (with badge) */}
            <div className="md:col-span-4 group flex flex-col bg-surface-container-highest rounded-xl p-6 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-orchard"
                  src={smallProducts[0].image}
                  alt={smallProducts[0].alt}
                  width={400}
                  height={192}
                />
                <div className="absolute top-3 right-3 glass-card px-3 py-1 rounded-full text-xs font-bold text-primary">
                  BEST SELLER
                </div>
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Clássico Limão
                </h3>
                <span className="text-primary font-bold">R$ 25,00</span>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-6">
                Batida artesanal de cachaça com limão taiti e segredo da casa.
              </p>
              <button className="mt-auto py-3 border border-primary/30 text-primary font-bold rounded-md hover:bg-primary hover:text-on-primary transition-[background-color,color,transform] duration-300 ease-orchard hover:scale-[1.02] active:scale-[0.98]">
                ADICIONAR
              </button>
            </div>

            {/* Product 3: Coco Cyber */}
            <div className="md:col-span-4 group flex flex-col bg-surface-container-highest rounded-xl p-6 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-orchard"
                  src={smallProducts[1].image}
                  alt={smallProducts[1].alt}
                  width={400}
                  height={192}
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Coco Cyber
                </h3>
                <span className="text-primary font-bold">R$ 32,00</span>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-6">
                Textura aveludada com leite de coco artesanal e infusão de fava
                tonka.
              </p>
              <button className="mt-auto py-3 border border-primary/30 text-primary font-bold rounded-md hover:bg-primary hover:text-on-primary transition-[background-color,color,transform] duration-300 ease-orchard hover:scale-[1.02] active:scale-[0.98]">
                ADICIONAR
              </button>
            </div>

            {/* Product 4: Melancia Neon — Wide Bento */}
            <div className="md:col-span-8 group relative overflow-hidden bg-surface-container-highest rounded-xl p-8 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 hover:shadow-[0_20px_50px_-24px_rgba(0,0,0,0.35)]">
              <div className="flex flex-col md:flex-row-reverse gap-8 items-center h-full">
                <div className="w-full md:w-1/2 relative overflow-hidden rounded-lg">
                  <Image
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-[900ms] ease-orchard shadow-2xl"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDaWfhlu52YajybuS_b7LEl3lj7847XTsgq9RW1lJkIjU47l565D_tFDiqVW5HHvP-L_qiSeBaruiJaVz4ERdHKK6XpwFRDck1U96hNBZ3PZjh2YrEXhtWzKMgZhNfQumilv5FSeGjCBsOsUbcfXeSa8gMtlthe2jMJtD7Zif-6rQU_vhlp8E1yKEvvH5a7DdBKInWrVfyaFQWalfWu0UnPphsguo9nUXint5ItRjA8mePb90fyjg_rHI0oHHT2Wymw0uxxb-NaGLaD"
                    alt="Drink vermelho vibrante com frutas vermelhas"
                    width={600}
                    height={256}
                  />
                </div>
                <div className="w-full md:w-1/2 flex flex-col justify-between h-full">
                  <div>
                    <span className="text-secondary font-bold text-xs tracking-widest uppercase mb-2 block">
                      Edição Limitada
                    </span>
                    <h3 className="text-3xl font-headline font-bold text-on-surface tracking-tight mb-4">
                      Melancia Neon
                    </h3>
                    <p className="text-on-surface-variant font-body mb-6">
                      A refrescância máxima da melancia com um kick de pimenta
                      rosa e cachaça branca.
                    </p>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-primary">
                      R$ 38,50
                    </span>
                    <button className="px-8 py-3 bg-secondary text-on-secondary font-bold rounded-md hover:bg-secondary-container transition-[background-color,transform,box-shadow] duration-300 ease-orchard hover:scale-[1.03] active:scale-[0.98] hover:shadow-[0_10px_32px_rgba(255,117,24,0.2)]">
                      ADICIONAR
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Product 5: Frutas Vermelhas */}
            <div className="md:col-span-4 group flex flex-col bg-surface-container-highest rounded-xl p-6 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-orchard"
                  src={smallProducts[2].image}
                  alt={smallProducts[2].alt}
                  width={400}
                  height={192}
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Frutas Vermelhas
                </h3>
                <span className="text-primary font-bold">R$ 36,00</span>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-6">
                Mix de amora, framboesa e morango com cachaça prata de Minas.
              </p>
              <button className="mt-auto py-3 border border-primary/30 text-primary font-bold rounded-md hover:bg-primary hover:text-on-primary transition-[background-color,color,transform] duration-300 ease-orchard hover:scale-[1.02] active:scale-[0.98]">
                ADICIONAR
              </button>
            </div>

            {/* Product 6: Abacaxi Cyber */}
            <div className="md:col-span-4 group flex flex-col bg-surface-container-highest rounded-xl p-6 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-orchard"
                  src={smallProducts[3].image}
                  alt={smallProducts[3].alt}
                  width={400}
                  height={192}
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Abacaxi Cyber
                </h3>
                <span className="text-primary font-bold">R$ 29,00</span>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-6">
                Abacaxi pérola com hortelã fresca e xarope artesanal de
                gengibre.
              </p>
              <button className="mt-auto py-3 border border-primary/30 text-primary font-bold rounded-md hover:bg-primary hover:text-on-primary transition-[background-color,color,transform] duration-300 ease-orchard hover:scale-[1.02] active:scale-[0.98]">
                ADICIONAR
              </button>
            </div>

            {/* Product 7: Kit Degustação */}
            <div className="md:col-span-4 group flex flex-col bg-surface-container-highest rounded-xl p-6 transition-[transform,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <Image
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-[900ms] ease-orchard"
                  src={smallProducts[4].image}
                  alt={smallProducts[4].alt}
                  width={400}
                  height={192}
                />
              </div>
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-headline font-bold text-on-surface">
                  Kit Degustação
                </h3>
                <span className="text-primary font-bold">R$ 85,00</span>
              </div>
              <p className="text-sm text-on-surface-variant font-body mb-6">
                Três mini garrafas (200ml) com nossos sabores mais icônicos.
              </p>
              <button className="mt-auto py-3 border border-primary/30 text-primary font-bold rounded-md hover:bg-primary hover:text-on-primary transition-[background-color,color,transform] duration-300 ease-orchard hover:scale-[1.02] active:scale-[0.98]">
                ADICIONAR
              </button>
            </div>
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
