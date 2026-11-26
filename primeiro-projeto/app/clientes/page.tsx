import type { Metadata } from "next";
import { ClientGallery } from "../components/ClientGallery";
import { clients } from "../data/clients";

export const metadata: Metadata = {
  title: "Clientes",
  description: "Galeria de clientes fictícios que já compraram na loja.",
};

export default function Clientes() {
  return (
    <main className="flex-1 bg-[#ebebeb]">
      <div className="mx-auto w-full max-w-6xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-[#333333]">Clientes</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4a4a4a]">
          Lojas, clínicas e ateliês que escolheram a gente. As fotos abaixo são ilustrações
          fictícias de cada cliente — clique em uma imagem para ampliar.
        </p>
        <ClientGallery clients={clients} />
      </div>
    </main>
  );
}
