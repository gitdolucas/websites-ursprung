export type ProductId =
  | "maracuja"
  | "limao"
  | "coco"
  | "melancia"
  | "frutas_vermelhas"
  | "abacaxi"
  | "kit";

/** Used for catalog filters on /produtos */
export type ProductCategory = "tropical" | "limited" | "kit";

export type Product = {
  id: ProductId;
  name: string;
  price: string;
  description: string;
  image: string;
  alt: string;
  category: ProductCategory;
  badge?: string;
  /** Shown on large bento card (maracujá). */
  tags?: string[];
  /** Shown above title on large bento (melancia). */
  editionLabel?: string;
};

export const products: Record<ProductId, Product> = {
  maracuja: {
    id: "maracuja",
    name: "Passionfrucht | Maracujá",
    price: "R$ 35,00",
    description:
      "Batida artesanal de maracujá com toque de baunilha cyber e cachaça envelhecida em bálsamo.",
    image: "/products/passionfrucht.png",
    alt: "Garrafa Ursprung Passionsfrucht — batida artesanal de maracujá",
    category: "tropical",
    tags: ["Premium", "Fruta Fresca"],
  },
  limao: {
    id: "limao",
    name: "Zitrone | Limão",
    price: "R$ 25,00",
    description:
      "Batida artesanal de cachaça com limão taiti e segredo da casa.",
    image: "/products/zitrone.png",
    alt: "Garrafa Ursprung Zitrone — batida artesanal de limão",
    category: "tropical",
    badge: "BEST SELLER",
  },
  coco: {
    id: "coco",
    name: "Coco Cyber",
    price: "R$ 32,00",
    description:
      "Textura aveludada com leite de coco artesanal e infusão de fava tonka.",
    category: "tropical",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDNEetgRFAzcGgo_lmY7LT9FRJZZlDRvBVSdYnjqUpHkXh17koTeA9HqrU1kGFMtd66lTT6DngyC0iKr60h3RJB_bH0weUeYIpSLpOOSLi4n16_eoe3_-luWe2B4xDUbPDD-5LTMihYvY8-ViPsqTjjZZSAiRpfft2zvt6wRwaNDuiJYWX_XXQ6rRVKYnKJb-XiZAukiCbO5PDtqg7TEaJm4QAUO9O_NkSXyAvmc8GowxWsMdqDSrEwv9fnafb86qy8iDrBkP1yaHtz",
    alt: "Batida de coco cremosa com coco ralado",
  },
  melancia: {
    id: "melancia",
    name: "Melancia Neon",
    price: "R$ 38,50",
    description:
      "A refrescância máxima da melancia com um kick de pimenta rosa e cachaça branca.",
    category: "limited",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDaWfhlu52YajybuS_b7LEl3lj7847XTsgq9RW1lJkIjU47l565D_tFDiqVW5HHvP-L_qiSeBaruiJaVz4ERdHKK6XpwFRDck1U96hNBZ3PZjh2YrEXhtWzKMgZhNfQumilv5FSeGjCBsOsUbcfXeSa8gMtlthe2jMJtD7Zif-6rQU_vhlp8E1yKEvvH5a7DdBKInWrVfyaFQWalfWu0UnPphsguo9nUXint5ItRjA8mePb90fyjg_rHI0oHHT2Wymw0uxxb-NaGLaD",
    alt: "Drink vermelho vibrante com frutas vermelhas",
    editionLabel: "Edição Limitada",
  },
  frutas_vermelhas: {
    id: "frutas_vermelhas",
    name: "Frutas Vermelhas",
    price: "R$ 36,00",
    description:
      "Mix de amora, framboesa e morango com cachaça prata de Minas.",
    category: "tropical",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDsuaETRAqHVXb4PcJx1JfH-x4jWU09uEfnMpZWaaS1RxnUNlOa5rzQe5OWfKewQ8LR1nP4YkwbwR9RIOoZeawDNeTMJNZaEdNn3erUE1L5Sn3USP_D-6eHvWgwNG39yNgMPFUu3Aahveg7vvxLPzKG2orTc9Dx0NxR8GNeGX110P9U0FFlnMXz00cQxhFnrGVDs4gqP4XMt9U8qbc0VY9xINy1dzzsrae6lDnvlbLovL3ugRO9TiSalHyhwkc6suhoLx2NEOUucwkS",
    alt: "Batida roxa intensa de frutas vermelhas",
  },
  abacaxi: {
    id: "abacaxi",
    name: "Abacaxi Cyber",
    price: "R$ 29,00",
    description:
      "Abacaxi pérola com hortelã fresca e xarope artesanal de gengibre.",
    category: "tropical",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBeBlQ1fY82Cg9tYWiL-ANhGQgaPVq1XzFP8n4TROQsvJsCE0C_Gg8mBBoCdwb9W0JnnDhiPLcnqkRPTAKLL3ELRsozdb43c_KqugGiwm-D9bciSbI-7gV82Gyhk9wKiIEj7bY_-TX1_p_-dcwWkr2sqMBuEhPq4Yx4oMufwS5hVY-q-mdPGQ8mdFjhwgIbN_BYCgZTegauBOwUcqzbTq1XeJjPekQso5kYNdbH1Y55OQ7Q-Si1ULBLUhJVt6yebsbUnBiYNCSHtETY",
    alt: "Batida amarela de abacaxi com hortelã",
  },
  kit: {
    id: "kit",
    name: "Kit Degustação",
    price: "R$ 85,00",
    description:
      "Três mini garrafas (200ml) com nossos sabores mais icônicos.",
    category: "kit",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBLRu9vqmbyKkGE6eObUlEtcu8sNETeRGUb0x0ze3tjc4GeeY7fpZGyLasD23WvRq_kOK0hXz-HLPRf1oIRXB-f2r4BWOs3kFTsrs6-uXVcKasSm9G3U4dPevA77yd11CVZQDgk7qc7CQeuPsmKDaGor55TUvIme2dmepVZLE6KAVKddRe-839UIinnabZSee6Tz45tiiSWT_Je-LFmqs96U2IdntTCUarEsIBSnFbTMMi-znMuwdlyshGESiyPufBgeDl1HeRKXMRb",
    alt: "Kit de presente com garrafas artesanais",
  },
};

export type ProdutosSection =
  | { kind: "large"; id: ProductId; rowReverse?: boolean }
  | { kind: "small"; id: ProductId; showBadge?: boolean };

/** Order and layout of the produtos bento grid. */
export const produtosGrid: ProdutosSection[] = [
  { kind: "large", id: "maracuja" },
  { kind: "small", id: "limao", showBadge: true },
  { kind: "small", id: "coco" },
  { kind: "large", id: "melancia", rowReverse: true },
  { kind: "small", id: "frutas_vermelhas" },
  { kind: "small", id: "abacaxi" },
  { kind: "small", id: "kit" },
];

export const checkoutHighlightIds: ProductId[] = ["maracuja", "limao", "coco"];
