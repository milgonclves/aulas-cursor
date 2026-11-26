import Image from "next/image";
import { ContactForm } from "./ContactForm";

export default function Contato() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-6 py-16">
      <h1 className="text-4xl font-semibold tracking-tight">Contato</h1>
      <p className="mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
        Envie uma mensagem com seu nome, e-mail e telefone. Respondemos assim
        que possível.
      </p>
      <figure className="mt-8 overflow-hidden rounded-2xl">
        <Image
          src="/contato/pessoas-conversando.jpg"
          alt="Quatro pessoas sentadas à mesa, conversando e sorrindo"
          width={1600}
          height={1067}
          priority
          className="h-auto w-full object-cover"
        />
      </figure>
      <ContactForm />
    </main>
  );
}
