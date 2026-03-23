"use client";

import { useEffect, useRef, useState } from "react";

type ViewportRenderProps = {
  className?: string;
  minHeightClassName?: string;
  children: React.ReactNode;
};

export default function ViewportRender({
  className,
  minHeightClassName = "min-h-[120px]",
  children,
}: ViewportRenderProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = hostRef.current;
    if (!element || isVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setIsVisible(true);
        observer.disconnect();
      },
      { rootMargin: "100px 0px" }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <div ref={hostRef} className={className}>
      {isVisible ? children : <div aria-hidden className={minHeightClassName} />}
    </div>
  );
}
