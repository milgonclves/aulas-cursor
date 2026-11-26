"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/produtos", label: "Produtos" },
  { href: "/preco", label: "Preço" },
  { href: "/servicos", label: "Serviços" },
  { href: "/clientes", label: "Clientes" },
  { href: "/contato", label: "Contato" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="border-b border-[#e6d34a] bg-[#FFF159]">
      <nav className="mx-auto flex max-w-5xl items-center justify-end px-6 py-4">
        <ul className="flex items-center gap-6 text-sm">
          {links.map((link) => {
            const active = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={
                    active
                      ? "font-semibold text-[#3483FA]"
                      : "text-[#333333] transition-colors hover:text-[#3483FA]"
                  }
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
