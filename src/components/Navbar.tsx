"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelId = useId();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const onPointer = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", onPointer);
    return () => document.removeEventListener("mousedown", onPointer);
  }, [menuOpen]);

  return (
    <nav
      ref={navRef}
      className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-2xl border border-outline-variant/15 bg-surface-container-highest/80 backdrop-blur-md z-40 flex flex-wrap justify-between items-center gap-3 px-4 sm:px-8 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)]"
    >
        <Link
          href="/"
          className="text-xl sm:text-2xl font-black tracking-widest text-on-surface font-headline uppercase shrink-0 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
        URSPRUNG
      </Link>

      <div className="flex items-center gap-2 sm:gap-3 ml-auto md:ml-0 md:order-none">
        <button
          type="button"
          className="md:hidden flex items-center justify-center w-11 h-11 rounded-lg border border-outline-variant/30 text-on-surface hover:bg-surface-variant transition-[background-color,color,border-color] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          aria-expanded={menuOpen}
          aria-controls={menuPanelId}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="material-symbols-outlined text-2xl" aria-hidden>
            {menuOpen ? "close" : "menu"}
          </span>
        </button>

        <div className="hidden md:flex gap-8 items-center">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                className={`font-headline font-bold tracking-tighter uppercase transition-[color,opacity,border-color] duration-300 rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${
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
          className="bg-primary text-on-primary px-4 sm:px-6 py-2 font-headline font-bold uppercase tracking-widest text-xs sm:text-sm rounded-lg active:scale-90 motion-reduce:active:scale-100 transition-[transform] duration-200 whitespace-nowrap focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e0f03]"
        >
          Pedir Agora
        </Link>
      </div>

      {menuOpen ? (
        <div
          id={menuPanelId}
          className="md:hidden basis-full flex flex-col gap-1 pt-2 pb-1 border-t border-outline-variant/20"
          role="navigation"
          aria-label="Principal"
        >
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-headline font-bold tracking-tighter uppercase py-3 px-2 rounded-lg transition-[color,background-color,opacity] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-on-surface opacity-90 hover:bg-surface-variant"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      ) : null}
    </nav>
  );
}
