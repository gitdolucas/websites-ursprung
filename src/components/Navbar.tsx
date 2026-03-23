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
    <div className="pointer-events-none fixed inset-x-0 top-4 z-40 flex justify-center px-3 sm:px-6">
      <nav
        ref={navRef}
        className="pointer-events-auto flex w-full min-w-0 max-w-7xl flex-wrap items-center justify-between gap-x-2 gap-y-3 overflow-x-clip rounded-2xl border border-outline-variant/15 bg-surface-container-highest/80 px-3 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md sm:gap-3 sm:px-6 md:px-8 md:py-4"
      >
        <Link
          href="/"
          className="min-w-0 shrink text-base font-black uppercase tracking-[0.14em] text-on-surface font-headline sm:text-2xl sm:tracking-widest rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          URSPRUNG
        </Link>

        <div className="flex shrink-0 items-center gap-1.5 sm:gap-3 md:ml-0">
          <button
            type="button"
            className="md:hidden flex size-10 shrink-0 items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface transition-[background-color,color,border-color] duration-200 hover:bg-surface-variant focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:size-11"
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
            className="rounded-lg bg-primary px-3 py-2 font-headline text-[11px] font-bold uppercase tracking-wide text-on-primary transition-[transform] duration-200 active:scale-90 motion-reduce:active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e0f03] sm:px-6 sm:text-sm sm:tracking-widest"
          >
            <span className="sm:hidden">Pedir</span>
            <span className="hidden sm:inline">Pedir Agora</span>
          </Link>
        </div>

        {menuOpen ? (
          <div
            id={menuPanelId}
            className="flex w-full min-w-0 basis-full flex-col gap-1 border-t border-outline-variant/20 pt-2 pb-1 md:hidden"
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
    </div>
  );
}
