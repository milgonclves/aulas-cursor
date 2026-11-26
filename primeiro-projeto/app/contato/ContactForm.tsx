"use client";

import { FormEvent, useState } from "react";

type ContactFormValues = {
  nome: string;
  email: string;
  telefone: string;
  mensagem: string;
};

/**
 * Lê os campos do formulário de contato e devolve os valores já sem espaços extras.
 * @param form - Elemento do formulário enviado pelo usuário.
 * @returns Objeto com nome, e-mail, telefone e mensagem.
 */
function readContactForm(form: HTMLFormElement): ContactFormValues {
  const data = new FormData(form);

  return {
    nome: String(data.get("nome") ?? "").trim(),
    email: String(data.get("email") ?? "").trim(),
    telefone: String(data.get("telefone") ?? "").trim(),
    mensagem: String(data.get("mensagem") ?? "").trim(),
  };
}

export function ContactForm() {
  const [sentName, setSentName] = useState("");

  /**
   * Impede o recarregamento da página, lê os campos e mostra a confirmação de envio.
   * @param event - Evento de envio do formulário.
   * @returns Nada.
   */
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const values = readContactForm(event.currentTarget);
    setSentName(values.nome);
    event.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 flex max-w-xl flex-col gap-5">
      <div className="flex flex-col gap-2">
        <label htmlFor="nome" className="text-sm font-medium">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base outline-none ring-emerald-600 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          autoComplete="email"
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base outline-none ring-emerald-600 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="telefone" className="text-sm font-medium">
          Telefone
        </label>
        <input
          id="telefone"
          name="telefone"
          type="tel"
          required
          autoComplete="tel"
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base outline-none ring-emerald-600 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="mensagem" className="text-sm font-medium">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          required
          rows={5}
          className="rounded-lg border border-zinc-300 bg-white px-3 py-2 text-base outline-none ring-emerald-600 focus:ring-2 dark:border-zinc-700 dark:bg-zinc-950"
        />
      </div>

      <button
        type="submit"
        className="w-fit rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-emerald-700"
      >
        Enviar
      </button>

      {sentName ? (
        <p role="status" className="text-sm text-emerald-700 dark:text-emerald-400">
          Mensagem enviada, {sentName}. Em breve retornamos o contato.
        </p>
      ) : null}
    </form>
  );
}
