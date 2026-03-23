"use client";

import Image from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from "react";

const DEFAULT_LERP = 0.14;
const DEFAULT_ZOOM = 1.07;
const DEFAULT_MAX_PAN_PX = 22;

export type PointerPanZoomShellProps = {
  children: ReactNode;
  imageSrc: string;
  imageAlt: string;
  sizes: string;
  imageClassName?: string;
  className: string;
  style?: CSSProperties;
  /** Rendered above the image, below `children` (e.g. hero gradient). */
  overlay?: ReactNode;
  priority?: boolean;
  zoom?: number;
  maxPanPx?: number;
  lerp?: number;
};

export default function PointerPanZoomShell({
  children,
  imageSrc,
  imageAlt,
  sizes,
  imageClassName = "",
  className,
  style,
  overlay,
  priority,
  zoom = DEFAULT_ZOOM,
  maxPanPx = DEFAULT_MAX_PAN_PX,
  lerp = DEFAULT_LERP,
}: PointerPanZoomShellProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef({ x: 0, y: 0, s: 1 });
  const currentRef = useRef({ x: 0, y: 0, s: 1 });
  const rafRef = useRef(0);
  const tickRef = useRef<(() => void) | null>(null);
  const reduceMotionRef = useRef(false);
  const zoomRef = useRef(zoom);
  const maxPanRef = useRef(maxPanPx);
  const lerpRef = useRef(lerp);

  useEffect(() => {
    zoomRef.current = zoom;
    maxPanRef.current = maxPanPx;
    lerpRef.current = lerp;
  }, [zoom, maxPanPx, lerp]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceMotionRef.current = mq.matches;
    const onChange = () => {
      reduceMotionRef.current = mq.matches;
      if (mq.matches) {
        targetRef.current = { x: 0, y: 0, s: 1 };
        currentRef.current = { x: 0, y: 0, s: 1 };
        if (layerRef.current) {
          layerRef.current.style.transform = "translate(0px, 0px) scale(1)";
        }
      }
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const applyTransform = useCallback(() => {
    const el = layerRef.current;
    if (!el) return;
    const { x, y, s } = currentRef.current;
    el.style.transform = `translate(${x}px, ${y}px) scale(${s})`;
  }, []);

  const tick = useCallback(() => {
    const cur = currentRef.current;
    const tgt = targetRef.current;
    const t = reduceMotionRef.current ? 1 : lerpRef.current;
    cur.x += (tgt.x - cur.x) * t;
    cur.y += (tgt.y - cur.y) * t;
    cur.s += (tgt.s - cur.s) * t;
    applyTransform();

    const dx = Math.abs(tgt.x - cur.x);
    const dy = Math.abs(tgt.y - cur.y);
    const ds = Math.abs(tgt.s - cur.s);
    const settled = dx < 0.04 && dy < 0.04 && ds < 0.002;

    if (!settled) {
      rafRef.current = requestAnimationFrame(() => {
        tickRef.current?.();
      });
    }
  }, [applyTransform]);

  useEffect(() => {
    tickRef.current = tick;
  }, [tick]);

  const scheduleTick = useCallback(() => {
    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      tickRef.current?.();
    });
  }, []);

  useEffect(
    () => () => cancelAnimationFrame(rafRef.current),
    []
  );

  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (reduceMotionRef.current) return;
    const el = cardRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const mx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const my = ((e.clientY - r.top) / r.height - 0.5) * 2;
    const max = maxPanRef.current;
    targetRef.current.x = -mx * max;
    targetRef.current.y = -my * max;
    scheduleTick();
  };

  const onPointerEnter = () => {
    if (reduceMotionRef.current) return;
    targetRef.current.s = zoomRef.current;
    scheduleTick();
  };

  const onPointerLeave = () => {
    targetRef.current = { x: 0, y: 0, s: 1 };
    scheduleTick();
  };

  return (
    <div
      ref={cardRef}
      className={className}
      style={style}
      onPointerMove={onPointerMove}
      onPointerEnter={onPointerEnter}
      onPointerLeave={onPointerLeave}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          ref={layerRef}
          className="absolute inset-0 will-change-transform [transform-origin:center]"
        >
          <Image
            className={`object-cover ${imageClassName}`.trim()}
            src={imageSrc}
            alt={imageAlt}
            fill
            sizes={sizes}
            priority={priority}
          />
        </div>
      </div>
      {overlay}
      {children}
    </div>
  );
}
