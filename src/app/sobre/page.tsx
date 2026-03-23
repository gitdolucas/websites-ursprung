import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "A história da Ursprung: tradição artesanal, ingredientes naturais e o sabor autêntico das batidas brasileiras.",
};

export default function Sobre() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="scroll-mt-32 pt-32 pb-20 outline-none"
      >
        {/* Hero Section */}
        <section className="px-6 py-12 md:py-24 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="orchard-stagger-children md:w-1/2 z-10">
            <span className="font-label text-primary-container font-bold tracking-[0.3em] uppercase text-xs mb-6 block neon-glow">
              A TRADIÇÃO VIVA
            </span>
            <h1 className="font-headline font-black text-5xl md:text-8xl tracking-tighter leading-none mb-8 uppercase text-on-surface">
              O limão na sua <br />
              <span className="text-primary-container italic">origem</span>
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg mb-12 leading-relaxed font-body">
              Mais que uma bebida, um resgate. Ursprung nasce do desejo de
              preservar a receita que atravessou décadas, celebrando a
              simplicidade do feito à mão.
            </p>
            <div className="flex gap-4">
              <Link
                href="/produtos"
                className="bg-primary-container text-on-primary-container font-headline font-black py-5 px-10 rounded-xl uppercase tracking-tighter text-xl hover:bg-primary-fixed hover:text-on-primary-fixed hover:scale-[1.02] active:scale-[0.98] transition-[background-color,color,transform,box-shadow] duration-300 ease-orchard shadow-[0_0_30px_rgba(161,254,0,0.2)] hover:shadow-[0_0_40px_rgba(161,254,0,0.35)]"
              >
                Descubra Nossas Batidas
              </Link>
            </div>
          </div>
          <div className="orchard-stagger-children md:w-1/2 relative">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-container/10 rounded-full blur-3xl -z-10" />
            <div className="relative rounded-[2rem] overflow-hidden border-2 border-outline-variant/30 group transition-[box-shadow] duration-500 ease-orchard hover:shadow-[0_24px_80px_-20px_rgba(161,254,0,0.12)]">
              <Image
                className="w-full h-[600px] object-cover mix-blend-luminosity group-hover:mix-blend-normal group-hover:scale-[1.02] transition-[filter,transform] duration-[900ms] ease-orchard"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDb9WjJq6dZBC1FPLcWARcoOdeGjRxsFTAAxqkDqulEtjS9jMhR3UifB1ARxVLpxV6mWORa_SRvprzRittCHnDPMlLPjaBNoavUsW4Ld-I5-6tfM_LNYQt1ALUxVVcN-M7ZQC82nSnyDV_q24mh-4XJb-SBRcc7mRRUaJtnDvxAr6iMCl9KT0g8lUccefjj5Dw6ImPYdMNp1bxgoWsDDr8mz59ZgeBM3ZJkgEIKjo04biW2lp_Pi851J4Y8OEkkcqb4GKdTRFle9xh"
                alt="Artisanal lime caipirinha preparation"
                width={800}
                height={600}
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Floating Element */}
            <div className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl max-w-[240px] border-l-4 border-primary-container hidden md:block transition-[transform,box-shadow] duration-500 ease-orchard hover:-translate-y-1">
              <p className="font-headline text-[10px] font-black text-primary-container mb-3 tracking-[0.2em] uppercase">
                INGREDIENTE SELECIONADO
              </p>
              <p className="font-headline text-sm italic text-on-surface leading-tight">
                &ldquo;Limão espremido na hora, cachaça de alambique e segredos
                guardados.&rdquo;
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Bento Grid */}
        <section className="px-6 py-20 max-w-7xl mx-auto">
          <div className="orchard-stagger-children grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[800px]">
            {/* A Origem */}
            <div className="md:col-span-2 md:row-span-2 glass-card rounded-[2rem] p-12 md:p-16 flex flex-col justify-end relative overflow-hidden group transition-[transform,background-color] duration-500 ease-orchard hover:-translate-y-0.5">
              <div className="absolute top-0 right-0 p-12 opacity-5 text-primary-container">
                <span className="material-symbols-outlined text-[180px]">
                  history_edu
                </span>
              </div>
              <div className="relative z-10">
                <div className="text-secondary font-headline font-black text-3xl mb-4">
                  01
                </div>
                <h2 className="font-headline font-black text-4xl md:text-5xl uppercase tracking-tighter mb-8 leading-none">
                  Uma herança transmitida de gerações.
                </h2>
                <p className="text-lg leading-relaxed text-on-surface-variant font-body">
                  Nossa história não começa em uma fábrica, mas em uma cozinha
                  familiar. A receita de Ursprung foi refinada ao longo de
                  muitos anos, passando de mãos em mãos, mantendo a
                  simplicidade e a alma em cada gota.
                </p>
                <div className="flex items-center gap-4 mt-10">
                  <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center border border-outline-variant/30">
                    <span className="material-symbols-outlined text-primary-container text-xl">
                      history
                    </span>
                  </div>
                  <p className="font-headline font-bold text-xs uppercase tracking-widest opacity-60">
                    Desde as primeiras reuniões de amigos.
                  </p>
                </div>
              </div>
            </div>

            {/* Visual Hook */}
            <div className="md:col-span-2 md:row-span-1 bg-surface-container-highest rounded-[2rem] overflow-hidden relative group transition-[transform,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <Image
                className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-80 transition-[filter,opacity,transform] duration-[900ms] ease-orchard group-hover:scale-[1.03]"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP9pDfmtGMOyzjpRyDwh5SRY1_MwIbkf-UFOOKXOTSjXxRkvKsmu-n6PS2qAlxB2_tFByI6XviO7uq_YKENC-q94RtpPuOWcQNGs6zrqgBF6xxkh5saB0AqWy0-KhY5qCNFJZRFrDlhKl3DichqbZuzf-AlTxGn8uQ8XS2VyhSAFOOw7KX9OdDSva3BHkp6uavtOSGInCHsUS5WuBKspMJUV_BnMSc2CzpcJWFXZPPA9Yl6wOEhID1ctd4Z9Sa3k1x9mid_x1t_hfX"
                alt="Handcrafted batida preparation process"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent flex items-end p-10">
                <p className="text-on-surface font-headline font-black text-2xl uppercase tracking-tighter">
                  Feito com calma, à mão e com o coração.
                </p>
              </div>
            </div>

            {/* Ingredientes */}
            <div className="md:col-span-1 md:row-span-1 glass-card rounded-[2rem] p-8 flex flex-col justify-between border-t-4 border-secondary transition-[transform,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <span className="material-symbols-outlined text-secondary text-4xl">
                restaurant_menu
              </span>
              <div>
                <h3 className="font-headline font-black text-xl uppercase tracking-tighter mb-2">
                  Paladar Inconfundível
                </h3>
                <p className="text-xs text-on-surface-variant font-body leading-relaxed">
                  Sabor suave, levemente adocicado e profundamente aromático.
                  Equilíbrio entre o cítrico e o calor.
                </p>
              </div>
            </div>

            {/* Compartilhada */}
            <div className="md:col-span-1 md:row-span-1 glass-card rounded-[2rem] p-8 flex flex-col justify-between overflow-hidden relative transition-[transform,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5">
              <Image
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsy-c0dOaV3nfgpCTjJ6mXT-lORYE4FuPOenaLbAFWXuB9MrjBL9OUHbn3zbhkDp8JGJqO-NwyMcnZl1j9s5rzQmHXaNwLJWlyuTygLqPUhFmxvqBfLyQt7kbO8ijnpViFGaUdcOmBn6_mQZxjcpHM1zSs13tKLrf4B3MV8WtFnTyOvLmo0fH-WtXGvhxXZNZeFah87vAbx0NnC1Gh4QcJCGHqdvkd2ryVb9rVzOdjkMgxv2SbbN5Vv0zuduV8YqHWZoJurN-D2AP5"
                alt="Friends sharing batidas"
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
              />
              <div className="relative z-10 h-full flex flex-col justify-between">
                <h3 className="font-headline font-black text-xl uppercase tracking-tighter">
                  Compartilhada
                </h3>
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-primary-container border border-background" />
                  <div className="w-8 h-8 rounded-full bg-secondary border border-background" />
                  <div className="w-8 h-8 rounded-full bg-on-surface-variant border border-background flex items-center justify-center text-[10px] font-bold">
                    +12
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Signature Section */}
        <section className="py-32 bg-surface-container-low/30 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[300px] font-headline font-black opacity-[0.02] select-none uppercase pointer-events-none">
            ORIGEM
          </div>
          <div className="orchard-stagger-children max-w-4xl mx-auto px-6 text-center relative z-10">
            <h2 className="font-headline font-black text-4xl md:text-6xl tracking-tighter leading-none mb-10 uppercase text-on-surface">
              Memória, origem e convivência: a essência engarrafada.
            </h2>
            <div className="w-24 h-2 bg-primary-container mx-auto mb-8" />
            <p className="font-headline font-black text-primary-container tracking-[0.4em] uppercase text-sm">
              Família Ursprung
            </p>
          </div>
        </section>

        {/* Pillars */}
        <section className="px-6 py-24 max-w-7xl mx-auto">
          <h2 className="font-headline font-black text-4xl text-center uppercase tracking-tighter mb-20">
            Nossos Pilares
          </h2>
          <div className="orchard-stagger-children grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "eco",
                title: "Simplicidade",
                text: "Ingredientes honestos. Nada de químicos, apenas o que a natureza nos dá.",
              },
              {
                icon: "pan_tool",
                title: "Artesania",
                text: "Cada garrafa é tratada com o cuidado de quem faz para os seus próprios.",
              },
              {
                icon: "groups",
                title: "União",
                text: "O propósito final é sempre o brinde entre pessoas que se amam.",
              },
            ].map((pillar) => (
              <div
                key={pillar.title}
                className="text-center group glass-card p-12 rounded-[2rem] border-b-4 border-transparent hover:border-primary-container transition-[transform,border-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5"
              >
                <div className="w-20 h-20 bg-surface-container-highest rounded-2xl mx-auto flex items-center justify-center mb-8 border border-outline-variant/20 group-hover:rotate-12 transition-transform duration-500 ease-orchard">
                  <span className="material-symbols-outlined text-primary-container text-4xl">
                    {pillar.icon}
                  </span>
                </div>
                <h4 className="font-headline font-black text-2xl uppercase tracking-tighter mb-4">
                  {pillar.title}
                </h4>
                <p className="text-on-surface-variant font-body">
                  {pillar.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto bg-surface-container-high border-2 border-primary-container/20 rounded-[2rem] p-12 md:p-24 relative overflow-hidden flex flex-col items-center text-center transition-[border-color,box-shadow] duration-500 ease-orchard hover:border-primary-container/35 hover:shadow-[0_24px_80px_-24px_rgba(161,254,0,0.08)]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary-container/10 to-transparent transition-opacity duration-700 ease-orchard" />
            <div className="absolute top-0 right-0 p-10 opacity-5">
              <span className="material-symbols-outlined text-[300px]">
                local_bar
              </span>
            </div>
            <div className="orchard-stagger-children relative z-10 flex flex-col items-center text-center">
            <h2 className="font-headline font-black text-5xl md:text-7xl text-on-surface mb-8 uppercase tracking-tighter leading-none">
              Leve a origem <br />
              para sua casa.
            </h2>
            <p className="text-on-surface-variant text-xl max-w-xl mb-12 relative z-10 font-body">
              Experimente o sabor da nossa história. Uma garrafa de Ursprung é o
              convite perfeito para o seu próximo encontro.
            </p>
            <Link
              href="/produtos"
              className="bg-primary-container text-on-primary-container font-headline font-black py-6 px-16 rounded-xl uppercase tracking-tighter text-2xl shadow-[0_20px_50px_rgba(161,254,0,0.3)] hover:bg-primary-fixed hover:text-on-primary-fixed hover:scale-[1.02] active:scale-[0.98] transition-[background-color,color,transform,box-shadow] duration-300 ease-orchard hover:shadow-[0_24px_60px_rgba(161,254,0,0.4)]"
            >
              Explorar Loja
            </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
