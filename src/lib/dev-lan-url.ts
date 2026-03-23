import { networkInterfaces } from "node:os";

const DEFAULT_DEV_PORT = "3000";

export function getFirstLanIPv4(): string | null {
  const nets = networkInterfaces();
  for (const name of Object.keys(nets)) {
    for (const net of nets[name] ?? []) {
      const family = net.family as string | number;
      const isV4 = family === "IPv4" || family === 4;
      if (isV4 && !net.internal) {
        return net.address;
      }
    }
  }
  return null;
}

export function parseHostHeader(host: string | null): {
  hostname: string;
  port: string;
} {
  const fallbackPort = process.env.PORT || DEFAULT_DEV_PORT;
  if (!host) {
    return { hostname: "localhost", port: fallbackPort };
  }

  if (host.startsWith("[")) {
    const end = host.indexOf("]:");
    if (end !== -1) {
      return {
        hostname: host.slice(0, end + 1),
        port: host.slice(end + 2),
      };
    }
    return { hostname: host, port: fallbackPort };
  }

  const lastColon = host.lastIndexOf(":");
  if (lastColon > 0) {
    const maybePort = host.slice(lastColon + 1);
    if (/^\d+$/.test(maybePort)) {
      return {
        hostname: host.slice(0, lastColon),
        port: maybePort,
      };
    }
  }

  return { hostname: host, port: fallbackPort };
}

function formatOrigin(
  protocol: "http" | "https",
  hostname: string,
  port: string,
): string {
  const isDefault =
    (protocol === "http" && port === "80") ||
    (protocol === "https" && port === "443");
  if (isDefault) {
    return `${protocol}://${hostname}`;
  }
  return `${protocol}://${hostname}:${port}`;
}

/** Base URL for opening the site from another device on the LAN (dev only). */
export function resolveDevLanSiteUrl(request: Request): string {
  const forwardedProto = request.headers.get("x-forwarded-proto");
  const selfUrl = new URL(request.url);
  const protocol: "http" | "https" =
    forwardedProto?.split(",")[0]?.trim() === "https" ||
    selfUrl.protocol === "https:"
      ? "https"
      : "http";

  const { hostname, port } = parseHostHeader(request.headers.get("host"));

  const isLoopback =
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname === "::1" ||
    hostname === "[::1]";

  let siteHost = hostname;
  if (isLoopback) {
    const lan = getFirstLanIPv4();
    if (lan) {
      siteHost = lan;
    }
  }

  const origin = formatOrigin(protocol, siteHost, port);
  return `${origin}/`;
}
