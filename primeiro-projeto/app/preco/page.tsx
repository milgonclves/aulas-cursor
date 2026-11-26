import Link from "next/link";

type BillingPlan = {
  id: string;
  name: string;
  price: number;
  cadence: string;
  note: string;
  highlighted: boolean;
  badge?: string;
};

const plans: BillingPlan[] = [
  {
    id: "mensal",
    name: "Mensal",
    price: 120,
    cadence: "por mês",
    note: "Pagamento todo mês. Cancele quando quiser.",
    highlighted: false,
  },
  {
    id: "anual",
    name: "Anual",
    price: 99,
    cadence: "por mês",
    note: "Cobrado uma vez por ano (R$ 1.188). Economia de R$ 252 em relação ao mensal.",
    highlighted: true,
    badge: "Mais vantajoso",
  },
];

const advantages = [
  "Controle financeiro completo",
  "Controle de cartões",
  "Entradas e saídas",
  "Exportação de dados financeiros",
  "Categorias e metas de economia",
  "Relatórios do mês",
];

/**
 * Formata um valor inteiro em reais com texto fixo, igual no servidor e no navegador.
 * @param value Valor numérico em reais, sem centavos.
 * @returns Texto no formato "R$ 120".
 */
function formatPrice(value: number): string {
  return `R$ ${value}`;
}

export default function Preco() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Preço</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600">
        Escolha como prefere pagar. Os dois planos incluem o mesmo conjunto de
        recursos para acompanhar o seu dinheiro.
      </p>

      <section className="mt-12" aria-labelledby="planos-titulo">
        <h2 id="planos-titulo" className="text-2xl font-semibold tracking-tight">
          Planos
        </h2>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <article
              key={plan.id}
              className={
                plan.highlighted
                  ? "relative flex flex-col rounded-2xl border-2 border-[#3483FA] bg-white p-8 shadow-sm"
                  : "flex flex-col rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm"
              }
            >
              {plan.badge ? (
                <span className="absolute -top-3 right-6 rounded-full bg-[#FFF159] px-3 py-1 text-xs font-semibold text-[#333333]">
                  {plan.badge}
                </span>
              ) : null}
              <h3 className="text-lg font-semibold text-[#333333]">{plan.name}</h3>
              <p className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold tracking-tight text-[#333333]">
                  {formatPrice(plan.price)}
                </span>
                <span className="pb-1 text-sm text-zinc-500">{plan.cadence}</span>
              </p>
              <p className="mt-4 text-sm leading-6 text-zinc-600">{plan.note}</p>
              <Link
                href="/contato"
                className={
                  plan.highlighted
                    ? "mt-8 inline-flex items-center justify-center rounded-full bg-[#3483FA] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#2968c8]"
                    : "mt-8 inline-flex items-center justify-center rounded-full border border-[#3483FA] px-5 py-2.5 text-sm font-semibold text-[#3483FA] transition-colors hover:bg-[#3483FA] hover:text-white"
                }
              >
                Quero este plano
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14" aria-labelledby="vantagens-titulo">
        <h2 id="vantagens-titulo" className="text-2xl font-semibold tracking-tight">
          Vantagens incluídas
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {advantages.map((advantage) => (
            <li
              key={advantage}
              className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-[#FFF159]/30 px-4 py-3 text-sm text-[#333333]"
            >
              <span
                aria-hidden="true"
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#3483FA] text-xs font-bold text-white"
              >
                ✓
              </span>
              {advantage}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
