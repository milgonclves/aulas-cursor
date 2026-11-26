import Image from "next/image";
import type { Product } from "../data/products";

/**
 * Formata um valor em reais no padrão brasileiro, sem depender do locale do sistema.
 * @param value Valor em reais. Centavos iguais a zero são omitidos.
 * @returns Texto como "R$ 2.499" ou "R$ 208,25".
 */
function formatBRL(value: number): string {
  const [whole, cents] = value.toFixed(2).split(".");
  const grouped = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ".");

  if (cents === "00") {
    return `R$ ${grouped}`;
  }

  return `R$ ${grouped},${cents}`;
}

/**
 * Monta a linha de parcelamento sem juros.
 * @param installments Quantidade de parcelas.
 * @param installmentValue Valor de cada parcela, em reais.
 * @returns Texto como "12x R$ 208,25 sem juros".
 */
function formatInstallment(installments: number, installmentValue: number): string {
  return `${installments}x ${formatBRL(installmentValue)} sem juros`;
}

/**
 * Monta o texto do selo de posição de venda.
 * @param rank Posição no ranking, começando em 1.
 * @returns Texto como "1º MAIS VENDIDO".
 */
function formatRankLabel(rank: number): string {
  return `${rank}º MAIS VENDIDO`;
}

/**
 * Renderiza um card de produto com foto, preço, parcelamento e frete.
 * @param product Dados de vitrine do produto.
 * @returns Card pronto para a grade.
 */
export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-md bg-white shadow-[0_1px_2px_rgba(0,0,0,0.12)]">
      <div className="relative aspect-[16/10] bg-white">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover"
        />
      </div>

      <div className="flex flex-1 flex-col border-t border-zinc-100 px-4 pb-5 pt-4">
        {product.rank ? (
          <span className="mb-3 inline-flex w-fit rounded-[3px] bg-[#FF7733] px-1.5 py-0.5 text-[11px] font-bold uppercase leading-4 text-white">
            {formatRankLabel(product.rank)}
          </span>
        ) : (
          <span className="mb-3 inline-flex h-5" aria-hidden="true" />
        )}

        {product.originalPrice ? (
          <p className="text-sm leading-4 text-[#999999] line-through">
            {formatBRL(product.originalPrice)}
          </p>
        ) : (
          <p className="text-sm leading-4 text-transparent" aria-hidden="true">
            R$ 0
          </p>
        )}

        <p className="mt-1 flex items-baseline gap-2">
          <span className="text-[28px] font-light leading-none tracking-tight text-[#333333]">
            {formatBRL(product.price)}
          </span>
          {product.discount ? (
            <span className="text-sm font-semibold text-[#00a650]">{product.discount}% OFF</span>
          ) : null}
        </p>

        <p className="mt-2 text-sm font-normal text-[#00a650]">
          {formatInstallment(product.installments, product.installmentValue)}
        </p>

        <p className="mt-1 flex items-center gap-1 text-sm text-[#00a650]">
          <span>Frete grátis</span>
          <svg
            aria-hidden="true"
            viewBox="0 0 16 16"
            className="h-3.5 w-3.5 fill-[#00a650]"
          >
            <path d="M9.2 1.2 3.4 9.1h3.3L6.2 14.8l6.4-8.4H9.1l.1-5.2Z" />
          </svg>
          <span className="text-[13px] font-extrabold italic tracking-wide text-[#00a650]">
            FULL
          </span>
        </p>

        <h2 className="mt-4 text-sm leading-5 text-[#333333]">{product.title}</h2>
        <p className="mt-1 text-[13px] text-[#999999]">Por {product.seller}</p>
      </div>
    </article>
  );
}
