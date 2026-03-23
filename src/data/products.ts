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
  /** sRGB flavor accent for card hovers (packaging-aligned). */
  accentHex?: string;
};

export const products: Record<ProductId, Product> = {
  maracuja: {
    id: "maracuja",
    accentHex: "#C87522",
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
    accentHex: "#D4A34D",
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
    accentHex: "#EFEBE0",
    name: "Kokos | Coco",
    price: "R$ 32,00",
    description:
      "Textura aveludada com leite de coco artesanal e infusão de fava tonka.",
    category: "tropical",
    image: "/products/kokos.png",
    alt: "Batida de coco cremosa com coco ralado",
  },
  melancia: {
    id: "melancia",
    accentHex: "#D65D5B",
    name: "Wassermelone | Melancia",
    price: "R$ 38,50",
    description:
      "A refrescância máxima da melancia com um kick de pimenta rosa e cachaça branca.",
    category: "limited",
    image: "/products/wassermelone.png",
    alt: "Drink vermelho vibrante com frutas vermelhas",
    editionLabel: "Edição Limitada",
  },
  frutas_vermelhas: {
    id: "frutas_vermelhas",
    accentHex: "#5E1A3D",
    name: "Beerenmischung | Frutas Vermelhas",
    price: "R$ 36,00",
    description:
      "Mix de amora, framboesa e morango com cachaça prata de Minas.",
    category: "tropical",
    image: "/products/beerenmischung.png",
    alt: "Batida roxa intensa de frutas vermelhas",
  },
  abacaxi: {
    id: "abacaxi",
    accentHex: "#D9A426",
    name: "Ananas | Abacaxi",
    price: "R$ 29,00",
    description:
      "Abacaxi pérola com hortelã fresca e xarope artesanal de gengibre.",
    category: "tropical",
    image: "/products/ananas.png",
    alt: "Batida amarela de abacaxi com hortelã",
  },
  kit: {
    id: "kit",
    name: "Degustationsset | Kit Degustação",
    price: "R$ 55,00",
    description:
      "Três mini garrafas (200ml) com nossos sabores mais icônicos.",
    category: "kit",
    image: "/products/kit.png",
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
