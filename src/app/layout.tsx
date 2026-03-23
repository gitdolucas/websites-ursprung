import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-headline",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "URSPRUNG — O Gosto Autêntico do Brasil",
    template: "%s | URSPRUNG",
  },
  description:
    "Batidas artesanais brasileiras. Unimos a tradição do campo com a pulsação urbana.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`dark ${spaceGrotesk.variable} ${inter.variable} antialiased`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-background text-on-background font-body selection:bg-primary selection:text-on-primary">
        <a
          href="#main-content"
          className="skip-link"
        >
          Ir para o conteúdo
        </a>
        <div className="grainy-overlay pointer-events-none fixed inset-0 z-[1]" aria-hidden />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
