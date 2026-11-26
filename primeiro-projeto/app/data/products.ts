export type Product = {
  id: string;
  rank?: number;
  image: string;
  imageAlt: string;
  originalPrice?: number;
  price: number;
  discount?: number;
  installments: number;
  installmentValue: number;
  title: string;
  seller: string;
};

export const products: Product[] = [
  {
    id: "tv-50-4k",
    rank: 1,
    image: "/produtos/tv-50-4k.jpg",
    imageAlt: "Smart TV de 50 polegadas 4K com a tela de aplicativos ligada",
    originalPrice: 2799,
    price: 2499,
    discount: 10,
    installments: 12,
    installmentValue: 208.25,
    title: 'Smart TV TCL 50P715 LED 4K 50" 100V/240V',
    seller: "Mercado Livre",
  },
  {
    id: "tv-uhd-50",
    rank: 2,
    image: "/produtos/tv-uhd-50.jpg",
    imageAlt: "Smart TV de 50 polegadas 4K exibindo o menu de streaming",
    originalPrice: 2899,
    price: 2499,
    discount: 13,
    installments: 12,
    installmentValue: 208.25,
    title: 'Smart TV TCL LED 50" 4K UHD HDR HDMI Netflix e YouTube',
    seller: "Mercado Livre",
  },
  {
    id: "tv-32-hd",
    rank: 3,
    image: "/produtos/tv-32-hd.jpg",
    imageAlt: "Smart TV de 32 polegadas sobre um rack branco na sala",
    price: 1499,
    installments: 12,
    installmentValue: 124.92,
    title: 'Smart TV TCL S-Series L32S6500 LED HD 32" 100V/240V',
    seller: "Mercado Livre",
  },
  {
    id: "tv-qled-55",
    image: "/produtos/tv-qled-55.jpg",
    imageAlt: "Smart TV QLED de 55 polegadas instalada na parede da sala",
    originalPrice: 4299,
    price: 3599,
    discount: 16,
    installments: 12,
    installmentValue: 299.92,
    title: 'Smart TV QLED 55" 4K Ultra HD HDMI Wi-Fi',
    seller: "Mercado Livre",
  },
  {
    id: "tv-gamer-43",
    image: "/produtos/tv-gamer-43.jpg",
    imageAlt: "Smart TV gamer de 43 polegadas com tela de jogo ligada",
    originalPrice: 2199,
    price: 1899,
    discount: 14,
    installments: 12,
    installmentValue: 158.25,
    title: 'Smart TV Gamer 43" 4K 120 Hz HDMI 2.1',
    seller: "Mercado Livre",
  },
  {
    id: "tv-oled-65",
    image: "/produtos/tv-oled-65.jpg",
    imageAlt: "Smart TV OLED de 65 polegadas em uma sala com rack branco",
    originalPrice: 8999,
    price: 7499,
    discount: 17,
    installments: 12,
    installmentValue: 624.92,
    title: 'Smart TV OLED 65" 4K Cinema HDR Dolby Vision',
    seller: "Mercado Livre",
  },
];

/**
 * Seleciona os produtos exibidos em destaque na home.
 * @param count Quantidade de produtos a destacar. O padrão é 3.
 * @returns Os primeiros produtos do catálogo, com os mesmos códigos e imagens.
 */
export function getFeaturedProducts(count = 3): Product[] {
  return products.slice(0, count);
}
