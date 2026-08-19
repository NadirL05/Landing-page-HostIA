"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const HeroCanvas = dynamic(() => import("./hero-canvas"), { ssr: false });

function isWebglAvailable(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return Boolean(
      window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl")),
    );
  } catch {
    return false;
  }
}

/**
 * Decorative bistro-table diorama for the hero. Deliberately inert: it
 * never blocks LCP (the R3F bundle only loads once the hero is in view),
 * never intercepts input (aria-hidden, pointer-events: none), and
 * disappears entirely rather than erroring when WebGL isn't available.
 */
export function Hero3D() {
  const { ref, inView } = useInView<HTMLDivElement>("120px");
  const reducedMotion = useReducedMotion();
  const [supported, setSupported] = useState(true);

  useEffect(() => {
    setSupported(isWebglAvailable());
  }, []);

  const shouldMount = inView && supported;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        pointerEvents: "none",
      }}
    >
      {shouldMount ? <HeroCanvas spinning={!reducedMotion} /> : null}
    </div>
  );
}
