import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { WHATSAPP_DISPLAY, whatsappUrl } from "@/lib/contact";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Fale com a Ursprung pelo WhatsApp: pedidos, eventos, revenda e dúvidas. Atendimento em Balneário Camboriú e região.",
};

const quickMessages = [
  {
    icon: "shopping_bag",
    title: "Fazer um Pedido",
    description: "Quero encomendar batidas artesanais para mim ou meu evento.",
    message: "Olá! Gostaria de fazer um pedido de batidas artesanais.",
  },
  {
    icon: "groups",
    title: "Evento ou Festa",
    description: "Preciso de batidas em grande quantidade para uma ocasião.",
    message:
      "Olá! Gostaria de saber sobre batidas para um evento. Podem me ajudar?",
  },
  {
    icon: "storefront",
    title: "Ser Revendedor",
    description: "Tenho interesse em revender os produtos Ursprung.",
    message:
      "Olá! Tenho interesse em ser revendedor Ursprung. Podem me passar mais informações?",
  },
  {
    icon: "help",
    title: "Dúvidas Gerais",
    description: "Quero saber mais sobre ingredientes, entrega ou a marca.",
    message: "Olá! Tenho algumas dúvidas sobre os produtos Ursprung.",
  },
];

export default function Contato() {
  return (
    <>
      <Navbar />

      <main
        id="main-content"
        tabIndex={-1}
        className="scroll-mt-28 pt-28 pb-20 px-4 md:px-8 max-w-7xl mx-auto outline-none"
      >
        {/* Hero */}
        <section className="mb-16">
          <div className="relative overflow-hidden bg-surface-container-low rounded-xl p-8 md:p-16 border-l-4 border-[#25d366] transition-[box-shadow] duration-500 ease-orchard hover:shadow-[0_20px_60px_-20px_rgba(37,211,102,0.08)]">
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#25d366]/10 to-transparent pointer-events-none transition-opacity duration-700 ease-orchard" />
            <div className="orchard-stagger-children relative z-10 max-w-2xl">
              <span className="inline-block px-3 py-1 mb-6 text-xs font-bold tracking-widest uppercase bg-[#25d366]/20 text-[#25d366] rounded-full">
                Fale Conosco
              </span>
              <h1 className="text-5xl md:text-7xl font-headline font-bold text-on-surface tracking-tighter leading-none mb-6">
                Direto no
                <br />
                WhatsApp
              </h1>
              <p className="text-lg md:text-xl font-body text-on-surface-variant leading-relaxed">
                Sem formulário, sem espera. Manda uma mensagem e a gente resolve
                na hora. Atendimento humano, do jeito que tem que ser.
              </p>
            </div>
          </div>
        </section>

        {/* Main WhatsApp CTA */}
        <section className="mb-16">
          <a
            href={whatsappUrl("Olá! Vim pelo site da Ursprung.")}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <div className="bg-[#25d366] rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-lg shadow-[#25d366]/20 hover:shadow-xl hover:shadow-[#25d366]/35 hover:scale-[1.02] active:scale-[0.99] transition-[transform,box-shadow] duration-300 ease-orchard">
              <div className="flex items-center gap-6">
                <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-white text-5xl">
                    chat
                  </span>
                </div>
                <div>
                  <h2 className="font-headline font-black text-3xl md:text-4xl text-white uppercase tracking-tighter mb-1">
                    {WHATSAPP_DISPLAY}
                  </h2>
                  <p className="text-white/80 font-body text-lg">
                    Clique para abrir uma conversa no WhatsApp
                  </p>
                </div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl px-8 py-4 flex items-center gap-3 group-hover:bg-white/30 transition-[background-color,transform] duration-300 ease-orchard group-hover:scale-[1.02]">
                <span className="font-headline font-bold text-white uppercase tracking-widest text-lg">
                  Iniciar Conversa
                </span>
                <span className="material-symbols-outlined text-white text-2xl group-hover:translate-x-1 transition-transform duration-300 ease-orchard">
                  arrow_forward
                </span>
              </div>
            </div>
          </a>
        </section>

        {/* Quick Message Cards */}
        <section className="mb-16">
          <h2 className="font-headline font-black text-3xl uppercase tracking-tighter mb-8">
            Como podemos ajudar?
          </h2>
          <div className="orchard-stagger-children grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickMessages.map((item) => (
              <a
                key={item.title}
                href={whatsappUrl(item.message)}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="bg-surface-container-highest rounded-xl p-8 border border-outline-variant/15 hover:border-[#25d366]/40 hover:bg-surface-container-high transition-[transform,border-color,background-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 h-full">
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 bg-surface-variant rounded-xl flex items-center justify-center shrink-0 group-hover:bg-[#25d366]/20 transition-[background-color,transform] duration-300 ease-orchard group-hover:scale-105">
                      <span className="material-symbols-outlined text-primary group-hover:text-[#25d366] text-2xl transition-colors duration-300 ease-orchard">
                        {item.icon}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-headline font-bold text-xl text-on-surface mb-2 group-hover:text-[#25d366] transition-colors duration-300 ease-orchard">
                        {item.title}
                      </h3>
                      <p className="text-on-surface-variant text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <span className="inline-flex items-center gap-2 text-[#25d366] font-headline font-bold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-[opacity,transform] duration-300 ease-orchard group-hover:translate-x-0">
                        Enviar mensagem
                        <span className="material-symbols-outlined text-base">
                          arrow_forward
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* Info Grid */}
        <section>
          <div className="orchard-stagger-children grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Horários */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 transition-[transform,border-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 hover:border-outline-variant/30">
              <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-secondary text-2xl">
                  schedule
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl uppercase tracking-tighter mb-4">
                Horários
              </h3>
              <div className="space-y-3 text-on-surface-variant text-sm">
                <div className="flex justify-between">
                  <span>Seg — Sex</span>
                  <span className="text-on-surface font-bold">
                    09:00 — 18:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado</span>
                  <span className="text-on-surface font-bold">
                    09:00 — 14:00
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo</span>
                  <span className="text-on-surface/40">Fechado</span>
                </div>
              </div>
            </div>

            {/* Localização */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 transition-[transform,border-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 hover:border-outline-variant/30">
              <div className="w-12 h-12 bg-tertiary-container rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-on-tertiary-container text-2xl">
                  location_on
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl uppercase tracking-tighter mb-4">
                Localização
              </h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">
                Blumenau - SC
                <br />
                Brasil
              </p>
              <p className="text-on-surface-variant/60 text-xs mt-4 uppercase tracking-widest">
                Entregas para toda região
              </p>
            </div>

            {/* Redes */}
            <div className="bg-surface-container-low rounded-xl p-8 border border-outline-variant/15 transition-[transform,border-color,box-shadow] duration-500 ease-orchard hover:-translate-y-0.5 hover:border-outline-variant/30">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">
                  share
                </span>
              </div>
              <h3 className="font-headline font-bold text-xl uppercase tracking-tighter mb-4">
                Redes Sociais
              </h3>
              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/ursprung.oficial/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 text-on-surface-variant hover:text-secondary transition-[color,transform] duration-300 ease-orchard text-sm hover:translate-x-0.5"
                >
                  <span className="material-symbols-outlined text-lg">
                    photo_camera
                  </span>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
