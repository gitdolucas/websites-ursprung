"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl border border-outline-variant/15 bg-surface-container-highest/60 backdrop-blur-2xl z-40 flex justify-between items-center px-8 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
      <Link
        href="/"
        className="text-2xl font-black tracking-widest text-on-surface font-headline uppercase"
      >
        URSPRUNG
      </Link>
      <div className="hidden md:flex gap-8 items-center">
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              className={`font-headline font-bold tracking-tighter uppercase transition-all duration-300 ${
                isActive
                  ? "text-primary border-b-2 border-primary pb-1"
                  : "text-on-surface opacity-80 hover:text-primary hover:opacity-100"
              }`}
              href={link.href}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
      <Link
        href="/checkout"
        className="bg-primary text-on-primary px-6 py-2 font-headline font-bold uppercase tracking-widest rounded-lg active:scale-90 transition-transform"
      >
        Pedir Agora
      </Link>
    </nav>
  );
}
