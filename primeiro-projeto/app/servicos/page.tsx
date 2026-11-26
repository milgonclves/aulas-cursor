import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Entrega em até 3 dias para todo o Brasil, reembolso garantido e produtos originais.",
};

const garantias = [
  {
    titulo: "Entrega em até 3 dias",
    texto:
      "O pedido sai rápido e chega em até 3 dias em qualquer estado, do litoral ao interior.",
  },
  {
    titulo: "Reembolso garantido",
    texto:
      "Se algum produto não atender, o valor é devolvido. Você compra sem ficar no prejuízo.",
  },
  {
    titulo: "Produtos originais",
    texto:
      "Todo item do catálogo é original, com procedência conferida antes de seguir para o envio.",
  },
];

export default function Servicos() {
  return (
    <main className="flex-1 bg-[#ebebeb]">
      <div className="mx-auto w-full max-w-5xl px-6 py-12">
        <h1 className="text-4xl font-semibold tracking-tight text-[#333333]">Serviços</h1>
        <p className="mt-4 max-w-2xl text-lg leading-8 text-[#4a4a4a]">
          Comprar aqui é direto: os prazos de entrega são rápidos, com envio em até 3 dias
          para todo o Brasil. Se algum produto não corresponder ao que você esperava, o
          reembolso é garantido. E todos os produtos são originais — a marca e a qualidade
          que você escolheu, sem réplica.
        </p>

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          {garantias.map((item) => (
            <li key={item.titulo} className="rounded-xl bg-white p-5 shadow-sm">
              <h2 className="text-lg font-semibold text-[#333333]">{item.titulo}</h2>
              <p className="mt-2 text-sm leading-6 text-[#666666]">{item.texto}</p>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
