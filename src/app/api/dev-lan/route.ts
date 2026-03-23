import { NextResponse } from "next/server";
import { resolveDevLanSiteUrl } from "@/lib/dev-lan-url";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  if (process.env.NODE_ENV !== "development") {
    return new NextResponse(null, { status: 404 });
  }

  const url = resolveDevLanSiteUrl(request);
  return NextResponse.json({ url });
}
