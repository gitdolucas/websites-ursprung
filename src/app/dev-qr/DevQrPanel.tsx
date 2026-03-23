"use client";

import { useCallback, useEffect, useState } from "react";
import QRCode from "react-qr-code";

type PanelState =
  | { status: "loading" }
  | { status: "error"; message: string }
  | { status: "ready"; url: string };

export function DevQrPanel() {
  const [state, setState] = useState<PanelState>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    fetch("/api/dev-lan")
      .then((res) => {
        if (res.status === 404) {
          throw new Error(
            "Esta página só existe em modo desenvolvimento (npm run dev / npm run host).",
          );
        }
        if (!res.ok) {
          throw new Error("Não foi possível obter o endereço da rede local.");
        }
        return res.json() as Promise<{ url: string }>;
      })
      .then((data) => {
        if (!cancelled) {
          setState({ status: "ready", url: data.url });
        }
      })
      .catch((err: unknown) => {
        if (!cancelled) {
          const message =
            err instanceof Error ? err.message : "Algo deu errado.";
          setState({ status: "error", message });
        }
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const copyUrl = useCallback(async () => {
    if (state.status !== "ready") return;
    try {
      await navigator.clipboard.writeText(state.url);
    } catch {
      // ignore
    }
  }, [state]);

  return (
    <main
      id="main-content"
      className="relative mx-auto flex min-h-[100dvh] max-w-lg flex-col items-center justify-center gap-8 px-6 py-16"
    >
      <div className="text-center">
        <p className="font-headline text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          Desenvolvimento
        </p>
        <h1 className="mt-2 font-headline text-2xl font-bold text-on-surface">
          Abrir no celular
        </h1>
        <p className="mt-2 text-sm text-on-surface-variant">
          Use a mesma rede Wi‑Fi que este computador. Escaneie o QR ou copie o
          link.
        </p>
      </div>

      {state.status === "loading" && (
        <div
          className="flex h-[280px] w-[280px] items-center justify-center rounded-2xl border border-on-surface-variant/20 bg-surface-container-low text-on-surface-variant"
          aria-busy
        >
          Carregando…
        </div>
      )}

      {state.status === "error" && (
        <p
          className="max-w-sm text-center text-sm text-error"
          role="alert"
        >
          {state.message}
        </p>
      )}

      {state.status === "ready" && (
        <>
          <div className="rounded-2xl border border-on-surface-variant/20 bg-on-surface p-4 shadow-lg">
            <QRCode
              value={state.url}
              size={280}
              level="M"
              bgColor="var(--color-on-surface)"
              fgColor="var(--color-background)"
            />
          </div>
          <div className="flex w-full max-w-sm flex-col gap-3">
            <code className="break-all rounded-lg border border-on-surface-variant/25 bg-surface-container-low px-3 py-2 text-center text-xs text-on-surface-variant">
              {state.url}
            </code>
            <button
              type="button"
              onClick={copyUrl}
              className="font-headline rounded-lg bg-primary px-4 py-3 text-sm font-bold uppercase tracking-wide text-on-primary transition hover:opacity-90"
            >
              Copiar link
            </button>
          </div>
        </>
      )}

      <a
        href="/"
        className="text-sm text-on-surface-variant underline-offset-4 hover:text-on-surface hover:underline"
      >
        Voltar ao site
      </a>
    </main>
  );
}
