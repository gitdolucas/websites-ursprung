"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useState } from "react";
import { useCart } from "@/contexts/CartContext";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/produtos", label: "Produtos" },
  { href: "/contato", label: "Contato" },
];

function CartCountBadge({ count }: { count: number }) {
  if (count <= 0) return null;
  const label = count > 99 ? "99+" : String(count);
  return (
    <span
      className="pointer-events-none absolute -right-1 -top-1 flex min-h-[1.125rem] min-w-[1.125rem] items-center justify-center rounded-full bg-secondary px-1 text-[10px] font-headline font-bold leading-none text-on-secondary shadow-sm"
      aria-hidden
    >
      {label}
    </span>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const { totalCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelId = useId();

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <>
      {menuOpen ? (
        <button
          type="button"
          aria-label="Fechar menu"
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 z-[90] cursor-default overscroll-contain bg-background/70 backdrop-blur-sm touch-manipulation [-webkit-tap-highlight-color:transparent] md:hidden"
        />
      ) : null}

      <div className="pointer-events-auto fixed inset-x-0 top-4 z-[100] flex justify-center px-3 sm:px-6">
        <nav
          className="flex w-full min-w-0 max-w-7xl flex-wrap items-center justify-between gap-x-2 gap-y-3 overflow-x-clip rounded-2xl border border-outline-variant/15 bg-surface-container-highest/80 px-3 py-3 shadow-[0_10px_40px_rgba(0,0,0,0.08)] backdrop-blur-md sm:gap-3 sm:px-6 md:px-8 md:py-4"
        >
          <Link
            href="/"
            className="min-w-0 shrink text-base font-black uppercase tracking-[0.14em] text-on-surface font-headline sm:text-2xl sm:tracking-widest rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
          >
            URSPRUNG
          </Link>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3 md:gap-0 md:ml-0">
            <button
              type="button"
              className="md:hidden relative flex h-11 w-11 min-h-[44px] min-w-[44px] shrink-0 cursor-pointer touch-manipulation items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface transition-[background-color,color,border-color] duration-200 hover:bg-surface-variant focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary [-webkit-tap-highlight-color:transparent]"
              aria-expanded={menuOpen}
              aria-controls={menuPanelId}
              aria-label={
                menuOpen
                  ? "Fechar menu"
                  : totalCount > 0
                    ? `Abrir menu, carrinho com ${totalCount} itens`
                    : "Abrir menu"
              }
              onClick={() => setMenuOpen((o) => !o)}
            >
              <span className="material-symbols-outlined pointer-events-none text-2xl" aria-hidden>
                {menuOpen ? "close" : "menu"}
              </span>
              {!menuOpen ? <CartCountBadge count={totalCount} /> : null}
            </button>

            <div className="hidden md:flex items-center gap-8 pr-8 mr-2 border-r border-outline-variant/25">
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
              className="relative hidden md:flex size-11 shrink-0 items-center justify-center rounded-lg border border-outline-variant/30 text-on-surface transition-[background-color,color,border-color] duration-200 hover:bg-surface-variant hover:border-primary/35 hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ml-6"
              aria-label={
                totalCount > 0
                  ? `Carrinho, ${totalCount} itens`
                  : "Carrinho vazio"
              }
            >
              <span className="material-symbols-outlined text-2xl" aria-hidden>
                shopping_bag
              </span>
              <CartCountBadge count={totalCount} />
            </Link>

            <Link
              href="/checkout"
              className="rounded-lg bg-primary px-3 py-2 font-headline text-[11px] font-bold uppercase tracking-wide text-on-primary transition-[transform] duration-200 active:scale-90 motion-reduce:active:scale-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0e0f03] sm:px-6 sm:text-sm sm:tracking-widest md:ml-5 touch-manipulation [-webkit-tap-highlight-color:transparent]"
            >
              <span className="sm:hidden">Pedir</span>
              <span className="hidden sm:inline">Pedir Agora</span>
            </Link>
          </div>

          {menuOpen ? (
            <div
              id={menuPanelId}
              className="flex w-full min-w-0 basis-full flex-col gap-1 overscroll-contain border-t border-outline-variant/20 pt-2 pb-1 touch-manipulation md:hidden"
              role="navigation"
              aria-label="Principal"
            >
              <Link
                href="/checkout"
                onClick={() => setMenuOpen(false)}
                className={`font-headline font-bold tracking-tighter uppercase py-3 px-3 rounded-xl transition-[color,background-color,border-color,box-shadow] duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-between gap-3 border shadow-sm ${
                  pathname === "/checkout"
                    ? "text-primary border-primary/50 bg-primary/18"
                    : "text-on-surface border-primary/35 bg-primary/10 hover:border-primary/50 hover:bg-primary/16"
                }`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="relative inline-flex shrink-0">
                    <span
                      className="material-symbols-outlined text-2xl text-primary"
                      aria-hidden
                    >
                      shopping_bag
                    </span>
                    <CartCountBadge count={totalCount} />
                  </span>
                  Carrinho
                </span>
                {totalCount > 0 ? (
                  <span
                    className={`tabular-nums text-sm font-headline shrink-0 ${
                      pathname === "/checkout"
                        ? "text-primary/75"
                        : "text-on-surface-variant"
                    }`}
                  >
                    {totalCount} {totalCount === 1 ? "item" : "itens"}
                  </span>
                ) : null}
              </Link>
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
    </>
  );
}
