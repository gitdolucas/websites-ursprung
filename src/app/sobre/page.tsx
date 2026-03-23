import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Luiz Guilherme, fundador da Ursprung: marido, pai, motociclista Gárgula e mestre cachaceiro — a origem por trás das batidas artesanais.",
};

const facets = [
  {
    icon: "favorite",
    title: "Marido",
    text: "Parceiro de jornada — na mesa, na estrada e em cada decisão que molda a marca.",
  },
  {
    icon: "child_care",
    title: "Pai",
    text: "Pai de uma menina; a leveza e a responsabilidade de educar lembram por que o produto precisa ser verdadeiro.",
  },
  {
    icon: "two_wheeler",
    title: "Gárgula",
    text: "Motociclista Gárgula: estrada, vento e a mesma teimosia boa de quem não aceita meio termo no que faz.",
  },
  {
    icon: "local_bar",
    title: "Mestre cachaceiro",
    text: "A mão e o paladar por trás da cachaça e das batidas Ursprung — receita, tempo e respeito ao ofício.",
  },
] as const;

const fv =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-container";

const PROFILE_IMAGE_SRC = "/images/owner.png";

export default function Sobre() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="sobre-atmosphere relative scroll-mt-32 pt-32 pb-24 outline-none"
      >
        {/* Hero — editorial masthead */}
        <section className="relative z-[1] px-5 md:px-10 max-w-7xl mx-auto pb-16 md:pb-24">
          <div className="orchard-stagger-children grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="font-label text-secondary text-[0.7rem] md:text-xs font-semibold tracking-[0.28em] uppercase mb-6">
                A pessoa por trás da origem
              </p>
              <h1 className="font-headline font-semibold text-on-surface text-5xl sm:text-6xl md:text-7xl lg:text-[5.25rem] leading-[0.95] tracking-[-0.03em] text-pretty mb-6">
                Luiz Guilherme
              </h1>
              <div className="sobre-editorial-rule mb-8" aria-hidden />
              <p className="font-body text-lg md:text-xl text-on-surface-variant leading-relaxed max-w-2xl mb-4">
                É o dono da{" "}
                <span className="text-primary-container font-medium">
                  Ursprung
                </span>
                : marido, pai de uma menina, motociclista{" "}
                <span className="text-on-surface italic">Gárgula</span> e
                mestre cachaceiro — o mestre por trás de cada garrafa que sai
                do alambique para a sua mesa.
              </p>
              <p className="font-body text-base md:text-lg text-on-surface-variant/90 leading-relaxed max-w-2xl mb-10">
                Mais que uma bebida, um resgate de receita e de encontro.
                Ursprung é feito à mão, com calma e com coração — do jeito que
                se faz para quem ama.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/produtos"
                  className={`inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-headline font-semibold py-4 px-8 rounded-xl uppercase tracking-[0.12em] text-sm md:text-base shadow-[0_0_28px_rgba(161,254,0,0.18)] hover:bg-primary-fixed hover:text-on-primary-fixed transition-[background-color,color,box-shadow] duration-300 ease-orchard ${fv}`}
                >
                  Ver batidas
                  <span className="material-symbols-outlined text-xl" aria-hidden>
                    arrow_forward
                  </span>
                </Link>
                <Link
                  href="/contato"
                  className={`inline-flex items-center gap-2 glass-card text-on-surface font-headline font-semibold py-4 px-8 rounded-xl uppercase tracking-[0.12em] text-sm md:text-base border border-outline-variant/40 hover:border-primary-container/45 transition-[border-color,background-color] duration-300 ease-orchard ${fv}`}
                >
                  Falar com a gente
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="sobre-frame-float relative mx-auto max-w-md lg:max-w-none">
                <div
                  className="absolute -inset-3 rounded-[2rem] opacity-60 blur-xl bg-gradient-to-br from-secondary/25 via-primary-container/15 to-transparent -z-10"
                  aria-hidden
                />
                <div className="relative rounded-[2rem] border border-outline-variant/35 bg-surface-container-highest/80 backdrop-blur-sm shadow-[0_28px_90px_-30px_rgba(0,0,0,0.55)] overflow-hidden">
                  <div
                    className="absolute top-0 right-0 w-40 h-40 rounded-full bg-primary-container/8 blur-2xl pointer-events-none"
                    aria-hidden
                  />
                  <div className="relative z-[1] p-6 md:p-8 pb-4 md:pb-5">
                    <p className="font-label text-on-surface-variant text-[0.65rem] tracking-[0.35em] uppercase mb-4">
                      Retrato
                    </p>
                    <div className="relative aspect-[4/5] w-full max-h-[min(420px,55vh)] mx-auto rounded-xl overflow-hidden border border-outline-variant/30">
                      <Image
                        src={PROFILE_IMAGE_SRC}
                        alt="Luiz Guilherme, fundador da Ursprung"
                        fill
                        className="object-cover object-center brightness-90 contrast-110"
                        sizes="(max-width: 1024px) 100vw, 400px"
                        priority
                      />
                    </div>
                  </div>
                  <div className="relative z-[1] px-6 md:px-8 pb-8 md:pb-10 pt-2 border-t border-outline-variant/25">
                    <p className="font-body text-on-surface-variant text-sm md:text-base leading-relaxed italic border-l-2 border-secondary/70 pl-5">
                      &ldquo;Tradição viva não é repetir o passado — é honrar o que
                      veio antes e colocar alma no que se faz hoje.&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Facets — asymmetric strip */}
        <section className="relative z-[1] px-5 md:px-10 max-w-7xl mx-auto py-12 md:py-20">
          <div className="orchard-stagger-children flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 md:mb-14">
            <div>
              <h2 className="font-headline font-semibold text-3xl md:text-4xl text-on-surface tracking-tight">
                Quatro vidas na mesma história
              </h2>
              <p className="font-body text-on-surface-variant mt-3 max-w-xl leading-relaxed">
                Quem conhece a Ursprung conhece o sabor; quem conhece Luiz
                entende de onde vem a obstinação por qualidade.
              </p>
            </div>
            <p className="font-label text-primary-container text-xs tracking-[0.3em] uppercase shrink-0">
              Dono · Família · Estrada · Ofício
            </p>
          </div>
          <ul className="orchard-stagger-children grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 list-none p-0 m-0">
            {facets.map((facet, i) => (
              <li
                key={facet.title}
                className={`glass-card rounded-2xl p-8 md:p-9 border-t-2 transition-[transform,box-shadow,border-color] duration-500 ease-orchard hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 ${
                  i % 2 === 0 ? "border-secondary/80" : "border-primary-container/50"
                }`}
              >
                <span
                  className="material-symbols-outlined text-3xl text-primary-container mb-5 block"
                  aria-hidden
                >
                  {facet.icon}
                </span>
                <h3 className="font-headline font-semibold text-xl md:text-2xl text-on-surface mb-3 tracking-tight">
                  {facet.title}
                </h3>
                <p className="font-body text-on-surface-variant text-[0.95rem] leading-relaxed">
                  {facet.text}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Pull quote */}
        <section
          className="relative z-[1] py-16 md:py-20 lg:py-24 border-y border-outline-variant/25 bg-surface-container-low/40"
          aria-labelledby="sobre-citacao"
        >
          <div className="max-w-4xl mx-auto px-5 md:px-10 text-center">
            <p
              id="sobre-citacao"
              className="font-headline font-medium text-2xl md:text-3xl lg:text-4xl text-on-surface leading-snug tracking-tight text-balance"
            >
              O limão na sua origem — e o cuidado de quem vive tantas vidas
              antes de assinar cada lote.
            </p>
          </div>
        </section>

        {/* Narrative + image */}
        <section className="relative z-[1] px-5 md:px-10 max-w-7xl mx-auto py-16 md:py-24">
          <div className="orchard-stagger-children grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative order-2 lg:order-1">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 w-1 h-32 bg-gradient-to-b from-secondary to-primary-container rounded-full opacity-80 hidden md:block" />
              <figure className="relative rounded-[2rem] overflow-hidden border border-outline-variant/30 shadow-[0_32px_100px_-40px_rgba(161,254,0,0.15)] rotate-[-1deg] hover:rotate-0 transition-transform duration-700 ease-orchard motion-reduce:rotate-0 motion-reduce:hover:rotate-0">
                <Image
                  src="/images/o-que-sai-do-alambique.jpeg"
                  alt="Garrafas Ursprung Zitrone em fileiras sobre mesa de vime reflexiva, rótulos brancos e líquido cítrico"
                  width={900}
                  height={1200}
                  className="w-full h-[min(72vh,520px)] object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/85 to-transparent pt-24 pb-6 px-6">
                  <p className="font-label text-[0.65rem] tracking-[0.25em] uppercase text-on-surface-variant">
                    O que sai do alambique
                  </p>
                </figcaption>
              </figure>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="font-headline font-semibold text-3xl md:text-4xl text-on-surface mb-6 tracking-tight">
                Herança de cozinha, alma de ofício
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-5">
                A história da Ursprung não começa em uma linha industrial, mas
                em conversa de família e limão espremido na hora. Luiz
                Guilherme leva essa memória para o alambique: cachaça honesta,
                fruta de verdade e o mesmo respeito de quem faz para os seus.
              </p>
              <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                Cada garrafa é um convite ao brinde — entre quem se ama, como
                nas primeiras reuniões de amigos que deram origem à receita.
              </p>
              <ul className="space-y-4 font-body text-on-surface-variant">
                <li className="flex gap-3 items-start">
                  <span
                    className="material-symbols-outlined text-secondary shrink-0 text-xl mt-0.5"
                    aria-hidden
                  >
                    eco
                  </span>
                  <span>
                    <strong className="text-on-surface font-semibold">
                      Ingredientes diretos.
                    </strong>{" "}
                    O que a natureza dá, sem atalho de laboratório.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span
                    className="material-symbols-outlined text-secondary shrink-0 text-xl mt-0.5"
                    aria-hidden
                  >
                    pan_tool
                  </span>
                  <span>
                    <strong className="text-on-surface font-semibold">
                      Feito à mão.
                    </strong>{" "}
                    O cuidado de quem assina o próprio trabalho.
                  </span>
                </li>
                <li className="flex gap-3 items-start">
                  <span
                    className="material-symbols-outlined text-secondary shrink-0 text-xl mt-0.5"
                    aria-hidden
                  >
                    groups
                  </span>
                  <span>
                    <strong className="text-on-surface font-semibold">
                      Para dividir.
                    </strong>{" "}
                    O propósito é sempre o encontro.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Closing CTA */}
        <section className="relative z-[1] px-5 md:px-10 max-w-7xl mx-auto pt-8 pb-4">
          <div className="relative overflow-hidden rounded-[2rem] border border-primary-container/25 bg-surface-container-high p-10 md:p-16 lg:p-20 text-center">
            <div
              className="absolute inset-0 bg-gradient-to-br from-primary-container/[0.07] via-transparent to-secondary/[0.06] pointer-events-none"
              aria-hidden
            />
            <div className="relative z-[1] orchard-stagger-children max-w-2xl mx-auto flex flex-col items-center">
              <h2 className="font-headline font-semibold text-3xl md:text-5xl text-on-surface tracking-tight text-balance mb-6">
                Leve a origem para a sua mesa
              </h2>
              <p className="font-body text-on-surface-variant text-lg leading-relaxed mb-10">
                Experimente o sabor que Luiz Guilherme coloca em cada batida — e
                faça o próximo brinde com a Ursprung.
              </p>
              <Link
                href="/produtos"
                className={`inline-flex items-center gap-2 bg-primary-container text-on-primary-container font-headline font-semibold py-5 px-12 rounded-xl uppercase tracking-[0.14em] text-sm md:text-base shadow-[0_20px_50px_rgba(161,254,0,0.25)] hover:bg-primary-fixed hover:text-on-primary-fixed transition-[background-color,color,box-shadow] duration-300 ease-orchard ${fv}`}
              >
                Explorar loja
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
