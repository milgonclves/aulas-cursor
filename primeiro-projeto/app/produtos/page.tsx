import type { Metadata } from "next";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

export const metadata: Metadata = {
  title: "Produtos",
  description: "Smart TVs mais vendidas, com preço, desconto e frete grátis.",
};

export default function Produtos() {
  return (
    <main className="flex-1 bg-[#ebebeb]">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6">
        <h1 className="text-2xl font-semibold tracking-tight text-[#333333]">Produtos</h1>
        <p className="mt-1 text-sm text-[#666666]">Smart TVs mais vendidas</p>

        <ul className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <li key={product.id} className="min-w-0">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
