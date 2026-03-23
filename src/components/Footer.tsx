import Link from "next/link";
import ViewportRender from "./ViewportRender";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full mt-20 relative overflow-hidden bg-background grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-outline-variant/15 p-12 max-w-full">
      <div className="md:col-span-1 flex flex-col gap-4">
        <div className="text-secondary font-black text-2xl font-headline uppercase tracking-widest">
          URSPRUNG
        </div>
        <p className="font-body text-sm uppercase tracking-widest text-on-surface/60">
          © {year} URSPRUNG BATIDAS.
          <br />
          By{" "}
          <a
            className="underline underline-offset-4 hover:text-secondary transition-colors"
            href="https://lucas-lima.com"
            target="_blank"
            rel="noreferrer"
          >
            Lucas Lima
          </a>
          .
        </p>
        <ViewportRender className="w-full max-w-[168px] mt-1" minHeightClassName="min-h-[84px]">
          <a
            href="https://lucas-lima.com"
            target="_blank"
            rel="noreferrer"
            className="block"
            aria-label="Lucas Lima"
          >
            <img
              alt=""
              width="800"
              height="400"
              decoding="async"
              data-nimg="1"
              className="h-full w-full object-contain object-center pointer-events-none"
              src="https://assets.lucas-lima.com/lucas-lima-white-signature.svg"
              style={{ color: "transparent" }}
            />
          </a>
        </ViewportRender>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col gap-2">
        <span className="text-primary font-bold mb-2 font-headline uppercase text-xs tracking-widest">
          Social
        </span>
        <a
          className="font-body text-xs uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors w-fit"
          href="https://www.instagram.com/ursprung.oficial/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
        <span className="font-body text-xs uppercase tracking-widest text-on-surface/40">
          Twitter — em breve
        </span>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col gap-2">
        <span className="text-primary font-bold mb-2 font-headline uppercase text-xs tracking-widest">
          Legal
        </span>
        <span className="font-body text-xs uppercase tracking-widest text-on-surface/40">
          Privacy Policy — em breve
        </span>
        <Link
          className="font-body text-xs uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors w-fit"
          href="/contato"
        >
          Contato
        </Link>
      </div>
    </footer>
  );
}
