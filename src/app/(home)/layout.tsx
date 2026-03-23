import { Fraunces, Source_Serif_4 } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: "variable",
  axes: ["SOFT", "WONK", "opsz"],
  variable: "--font-home-display",
});

const sourceSerif4 = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-home-body",
});

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={`${fraunces.variable} ${sourceSerif4.variable} home-theme min-h-dvh`}
    >
      {children}
    </div>
  );
}
