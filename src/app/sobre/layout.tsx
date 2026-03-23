import { Cormorant_Infant, Newsreader } from "next/font/google";

const cormorantInfant = Cormorant_Infant({
  variable: "--font-sobre-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  variable: "--font-sobre-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function SobreLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${cormorantInfant.variable} ${newsreader.variable} sobre-theme min-h-dvh`}
    >
      {children}
    </div>
  );
}
