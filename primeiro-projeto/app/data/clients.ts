export type Client = {
  id: string;
  name: string;
  segment: string;
  city: string;
  image: string;
  imageAlt: string;
};

export const clients: Client[] = [
  {
    id: "aurora-cafe",
    name: "Aurora Café",
    segment: "Cafeteria",
    city: "Curitiba",
    image: "https://picsum.photos/id/431/800/600",
    imageAlt: "Balcão de uma cafeteria com xícaras e luz quente",
  },
  {
    id: "oficina-leme",
    name: "Oficina Leme",
    segment: "Mecânica",
    city: "Santos",
    image: "https://picsum.photos/id/1071/800/600",
    imageAlt: "Fachada de uma oficina com ferramentas organizadas",
  },
  {
    id: "studio-norte",
    name: "Studio Norte",
    segment: "Arquitetura",
    city: "Porto Alegre",
    image: "https://picsum.photos/id/1015/800/600",
    imageAlt: "Maquete e plantas sobre uma mesa de projeto",
  },
  {
    id: "padaria-do-bairro",
    name: "Padaria do Bairro",
    segment: "Alimentação",
    city: "Campinas",
    image: "https://picsum.photos/id/292/800/600",
    imageAlt: "Pães e bolos expostos em uma vitrine",
  },
  {
    id: "clinica-vale-verde",
    name: "Clínica Vale Verde",
    segment: "Saúde",
    city: "Belo Horizonte",
    image: "https://picsum.photos/id/1011/800/600",
    imageAlt: "Recepção clara de uma clínica com plantas",
  },
  {
    id: "livraria-mare",
    name: "Livraria Maré",
    segment: "Livraria",
    city: "Recife",
    image: "https://picsum.photos/id/24/800/600",
    imageAlt: "Estantes de livros em uma livraria pequena",
  },
  {
    id: "atelie-sol",
    name: "Ateliê Sol",
    segment: "Moda",
    city: "Fortaleza",
    image: "https://picsum.photos/id/106/800/600",
    imageAlt: "Tecidos e manequim em um ateliê de costura",
  },
  {
    id: "mercado-da-esquina",
    name: "Mercado da Esquina",
    segment: "Mercado",
    city: "Salvador",
    image: "https://picsum.photos/id/1080/800/600",
    imageAlt: "Frutas e verduras em caixas de um mercado",
  },
  {
    id: "escola-horizonte",
    name: "Escola Horizonte",
    segment: "Educação",
    city: "Brasília",
    image: "https://picsum.photos/id/20/800/600",
    imageAlt: "Sala de aula com carteiras e quadro",
  },
];
