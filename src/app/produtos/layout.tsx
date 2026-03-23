import { DM_Sans, Syne } from "next/font/google";

const syne = Syne({
  variable: "--font-produtos-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-produtos-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function ProdutosLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${syne.variable} ${dmSans.variable} produtos-theme min-h-dvh`}
    >
      {children}
    </div>
  );
}
