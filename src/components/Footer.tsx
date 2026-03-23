import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mt-20 relative overflow-hidden bg-background grid grid-cols-1 md:grid-cols-4 gap-0 border-t border-outline-variant/15 p-12 max-w-full">
      <div className="md:col-span-1 flex flex-col gap-4">
        <div className="text-secondary font-black text-2xl font-headline uppercase tracking-widest">
          URSPRUNG
        </div>
        <p className="font-body text-sm uppercase tracking-widest text-on-surface/60">
          © 2024 URSPRUNG BATIDAS.
          <br />
          THE NEON ORCHARD.
        </p>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col gap-2">
        <span className="text-primary font-bold mb-2 font-headline uppercase text-xs tracking-widest">
          Social
        </span>
        <Link
          className="font-body text-xs uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
          href="#"
        >
          Instagram
        </Link>
        <Link
          className="font-body text-xs uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
          href="#"
        >
          Twitter
        </Link>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col gap-2">
        <span className="text-primary font-bold mb-2 font-headline uppercase text-xs tracking-widest">
          Legal
        </span>
        <Link
          className="font-body text-xs uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
          href="#"
        >
          Privacy Policy
        </Link>
        <Link
          className="font-body text-xs uppercase tracking-widest text-on-surface/60 hover:text-secondary transition-colors"
          href="#"
        >
          Contact
        </Link>
      </div>
      <div className="mt-8 md:mt-0 flex flex-col items-start md:items-end justify-end">
        <div className="text-right">
          <div className="text-[60px] leading-none font-headline font-black text-surface-container-highest tracking-tighter">
            NEON
          </div>
          <div className="text-[60px] leading-none font-headline font-black text-surface-container-highest tracking-tighter -mt-4">
            2024
          </div>
        </div>
      </div>
    </footer>
  );
}
