"use client";

import { Canvas } from "@react-three/fiber";
import { BistroTable } from "./bistro-table";

const EMBER = "#d9773f";
const EMBER_BRIGHT = "#ffb066";

type HeroCanvasProps = {
  spinning: boolean;
};

/**
 * The actual WebGL scene. Lives in its own module so the parent can
 * `next/dynamic(..., { ssr: false })` it — nothing here should ever run
 * outside the browser or before the hero is in view.
 */
export default function HeroCanvas({ spinning }: HeroCanvasProps) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      camera={{ position: [2.3, 2.05, 3.15], fov: 30 }}
      style={{ pointerEvents: "none" }}
    >
      {/* Soft warm ambient fill — same "candlelight" the rest of the page is lit by. */}
      <ambientLight color={EMBER} intensity={0.55} />
      {/* Ember rim/key light from behind-above, echoes the hero's glow accents. */}
      <directionalLight color={EMBER_BRIGHT} intensity={1.1} position={[-2.2, 3, -1.5]} />
      {/* Low, cool-neutral fill so the faceted shading doesn't read as flat black. */}
      <directionalLight color="#5a4636" intensity={0.35} position={[2, 1.2, 2.5]} />

      <BistroTable spinning={spinning} />
    </Canvas>
  );
}
