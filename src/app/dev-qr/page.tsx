import type { Metadata } from "next";
import { DevQrPanel } from "./DevQrPanel";

export const metadata: Metadata = {
  title: "QR — rede local",
  robots: { index: false, follow: false },
};

export default function DevQrPage() {
  return <DevQrPanel />;
}
