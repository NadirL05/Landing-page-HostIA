"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type { Group, Mesh } from "three";

const WOOD = "#3a2417";
const WOOD_LIGHT = "#4a3220";
const IRON = "#1c1410";
const EMBER = "#d9773f";
const EMBER_BRIGHT = "#ffb066";

/** Hexagonal, low-segment cylinder legs read as faceted/low-poly, not round. */
const LEG_SEGMENTS = 6;

type ChairProps = {
  position: [number, number, number];
  rotationY: number;
};

/** A single stylized bistro chair: seat, low backrest, three splayed legs. */
function BistroChair({ position, rotationY }: ChairProps) {
  return (
    <group position={position} rotation={[0, rotationY, 0]}>
      <mesh position={[0, 0.42, 0]} castShadow>
        <cylinderGeometry args={[0.24, 0.22, 0.06, 8]} />
        <meshStandardMaterial color={IRON} roughness={0.75} metalness={0.15} flatShading />
      </mesh>
      <mesh position={[0, 0.72, -0.2]} rotation={[-0.15, 0, 0]}>
        <torusGeometry args={[0.2, 0.025, 6, 10, Math.PI]} />
        <meshStandardMaterial color={IRON} roughness={0.7} metalness={0.2} flatShading />
      </mesh>
      {[0, 1, 2].map((i) => {
        const angle = (i / 3) * Math.PI * 2;
        const x = Math.cos(angle) * 0.16;
        const z = Math.sin(angle) * 0.16;
        return (
          <mesh key={i} position={[x, 0.2, z]}>
            <cylinderGeometry args={[0.02, 0.02, 0.42, LEG_SEGMENTS]} />
            <meshStandardMaterial color={IRON} roughness={0.7} metalness={0.2} flatShading />
          </mesh>
        );
      })}
    </group>
  );
}

/** Small emissive taper candle — the scene's own warm light source. */
function Candle() {
  const flameRef = useRef<Mesh>(null);

  useFrame(({ clock }) => {
    if (!flameRef.current) return;
    const flicker = 0.85 + Math.sin(clock.elapsedTime * 6.5) * 0.1 + Math.sin(clock.elapsedTime * 13) * 0.04;
    flameRef.current.scale.setScalar(flicker);
  });

  return (
    <group position={[0, 0.5, 0]}>
      <mesh castShadow>
        <cylinderGeometry args={[0.028, 0.032, 0.16, 6]} />
        <meshStandardMaterial color="#efe3cf" roughness={0.5} flatShading />
      </mesh>
      <mesh ref={flameRef} position={[0, 0.12, 0]}>
        <icosahedronGeometry args={[0.035, 0]} />
        <meshStandardMaterial color={EMBER_BRIGHT} emissive={EMBER_BRIGHT} emissiveIntensity={2.2} toneMapped={false} />
      </mesh>
      <pointLight color={EMBER} intensity={1.4} distance={2.6} decay={2} position={[0, 0.13, 0]} />
    </group>
  );
}

/**
 * Stylized low-poly bistro table with two chairs — the hospitality identity
 * rendered as a small diorama rather than a generic 3D demo prop. Flat
 * shading on every material keeps the faceted, illustrated read that
 * matches the ticket/paper visual language elsewhere on the page.
 */
export function BistroTable({ spinning }: { spinning: boolean }) {
  const groupRef = useRef<Group>(null);

  useFrame((_, delta) => {
    if (!spinning || !groupRef.current) return;
    groupRef.current.rotation.y += delta * 0.12;
  });

  return (
    <group ref={groupRef}>
      {/* Contact shadow — a flat dark disc, cheap stand-in for real AO. */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0.001, 0]}>
        <circleGeometry args={[1.35, 16]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.32} />
      </mesh>

      {/* Table top */}
      <mesh position={[0, 0.78, 0]} castShadow receiveShadow>
        <cylinderGeometry args={[0.62, 0.62, 0.05, 10]} />
        <meshStandardMaterial color={WOOD_LIGHT} roughness={0.6} metalness={0.05} flatShading />
      </mesh>
      {/* Pedestal */}
      <mesh position={[0, 0.4, 0]}>
        <cylinderGeometry args={[0.035, 0.035, 0.72, LEG_SEGMENTS]} />
        <meshStandardMaterial color={IRON} roughness={0.65} metalness={0.25} flatShading />
      </mesh>
      <mesh position={[0, 0.045, 0]}>
        <cylinderGeometry args={[0.24, 0.24, 0.05, LEG_SEGMENTS]} />
        <meshStandardMaterial color={IRON} roughness={0.65} metalness={0.25} flatShading />
      </mesh>

      <Candle />

      <BistroChair position={[-1.05, 0, 0.35]} rotationY={0.9} />
      <BistroChair position={[0.75, 0, -0.95]} rotationY={-2.3} />

      {/* Small ceramic accent to sell "restaurant" over "furniture demo". */}
      <mesh position={[0.28, 0.83, 0.22]}>
        <cylinderGeometry args={[0.07, 0.06, 0.03, 8]} />
        <meshStandardMaterial color={WOOD} roughness={0.4} flatShading />
      </mesh>
    </group>
  );
}
