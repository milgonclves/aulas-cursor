import { ProductCard } from "./components/ProductCard";
import { getFeaturedProducts } from "./data/products";

const featuredProducts = getFeaturedProducts(3);

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Home</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Texto de teste da página inicial. Acompanhe receitas, gastos e o saldo
        do mês em um só lugar.
      </p>

      <section
        aria-labelledby="destaques-titulo"
        className="mt-12 rounded-xl bg-[#fff4b8] px-4 py-6 sm:px-6"
      >
        <h2 id="destaques-titulo" className="text-xl font-semibold text-[#333333]">
          Produtos em destaque
        </h2>

        <ul className="mt-6 grid grid-cols-3 gap-4">
          {featuredProducts.map((product) => (
            <li key={product.id} className="min-w-0">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
