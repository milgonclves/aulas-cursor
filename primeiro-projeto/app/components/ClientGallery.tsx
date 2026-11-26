"use client";

import { useEffect, useState } from "react";
import type { Client } from "../data/clients";

type ClientGalleryProps = {
  clients: Client[];
};

/**
 * Junta o ramo e a cidade em uma única linha de contexto.
 * @param segment Ramo de atividade do cliente.
 * @param city Cidade em que o cliente atua.
 * @returns Texto como "Cafeteria · Curitiba".
 */
function formatClientMeta(segment: string, city: string): string {
  return `${segment} · ${city}`;
}

/**
 * Calcula o índice da foto vizinha, voltando ao início ou ao fim da lista.
 * @param current Índice da foto aberta.
 * @param total Quantidade de fotos na galeria.
 * @param step Direção: 1 para a próxima, -1 para a anterior.
 * @returns Índice válido dentro da lista.
 */
function getNeighborIndex(current: number, total: number, step: 1 | -1): number {
  return (current + step + total) % total;
}

/**
 * Mostra os clientes em uma grade e amplia a foto selecionada.
 * @param clients Lista de clientes fictícios, cada um com uma imagem.
 * @returns Galeria com visualização ampliada.
 */
export function ClientGallery({ clients }: ClientGalleryProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const openClient = openIndex === null ? null : clients[openIndex];

  useEffect(() => {
    if (openIndex === null) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }

      if (event.key === "ArrowRight") {
        setOpenIndex((current) =>
          current === null ? current : getNeighborIndex(current, clients.length, 1),
        );
      }

      if (event.key === "ArrowLeft") {
        setOpenIndex((current) =>
          current === null ? current : getNeighborIndex(current, clients.length, -1),
        );
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [openIndex, clients.length]);

  return (
    <>
      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {clients.map((client, index) => (
          <li key={client.id}>
            <button
              type="button"
              onClick={() => setOpenIndex(index)}
              className="group w-full overflow-hidden rounded-xl bg-white text-left shadow-sm"
            >
              <img
                src={client.image}
                alt={client.imageAlt}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="block px-4 py-4">
                <span className="block text-base font-semibold text-[#333333]">{client.name}</span>
                <span className="mt-1 block text-sm text-[#666666]">
                  {formatClientMeta(client.segment, client.city)}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {openClient && openIndex !== null ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={openClient.name}
          onClick={() => setOpenIndex(null)}
        >
          <div
            className="w-full max-w-3xl overflow-hidden rounded-xl bg-white"
            onClick={(event) => event.stopPropagation()}
          >
            <img
              src={openClient.image}
              alt={openClient.imageAlt}
              width={800}
              height={600}
              className="aspect-[4/3] w-full object-cover"
            />
            <div className="flex items-center justify-between gap-4 px-4 py-4">
              <div>
                <p className="text-lg font-semibold text-[#333333]">{openClient.name}</p>
                <p className="text-sm text-[#666666]">
                  {formatClientMeta(openClient.segment, openClient.city)}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setOpenIndex(getNeighborIndex(openIndex, clients.length, -1))}
                  className="rounded-md border border-zinc-200 px-3 py-2 text-sm text-[#333333] hover:border-[#3483FA] hover:text-[#3483FA]"
                >
                  Anterior
                </button>
                <button
                  type="button"
                  onClick={() => setOpenIndex(getNeighborIndex(openIndex, clients.length, 1))}
                  className="rounded-md border border-zinc-200 px-3 py-2 text-sm text-[#333333] hover:border-[#3483FA] hover:text-[#3483FA]"
                >
                  Próxima
                </button>
                <button
                  type="button"
                  onClick={() => setOpenIndex(null)}
                  className="rounded-md bg-[#3483FA] px-3 py-2 text-sm font-semibold text-white"
                >
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
