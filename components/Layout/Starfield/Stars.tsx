"use client";

import { useFrame } from "@react-three/fiber";
import { useReducedMotion } from "motion/react";
import { useMemo, useRef, type RefObject } from "react";
import type { BufferGeometry } from "three";
import {
  FIELD_DEPTH,
  FIELD_HEIGHT,
  FIELD_WIDTH,
  REPEL_RADIUS_SQ,
  REPEL_STRENGTH,
  RETURN_RATE,
  STAR_COLOR,
  STAR_COUNT,
  STAR_OPACITY,
  STAR_SEED,
  STAR_SIZE,
  WOBBLE,
} from "@/lib/constants";

/**
 * Deterministic PRNG. The design uses Math.random(), but that is impure in
 * render and makes the field reshuffle on any remount; seeding is visually
 * identical and stable.
 */
function mulberry32(seed: number) {
  return function random() {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

type StarsProps = {
  /** Pointer in field coordinates, parked off-field until it first moves. */
  pointer: RefObject<{ x: number; y: number }>;
  count?: number;
};

export function Stars({ pointer, count = STAR_COUNT }: StarsProps) {
  const geometryRef = useRef<BufferGeometry>(null);
  const elapsed = useRef(0);
  const reducedMotion = useReducedMotion();

  // `home` is where each star rests; `positions` is the live buffer that gets
  // pushed around and eased back every frame.
  const { home, positions } = useMemo(() => {
    const random = mulberry32(STAR_SEED);
    const home = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      home[i * 3] = (random() - 0.5) * FIELD_WIDTH;
      home[i * 3 + 1] = (random() - 0.5) * FIELD_HEIGHT;
      home[i * 3 + 2] = (random() - 0.5) * FIELD_DEPTH;
    }
    return { home, positions: Float32Array.from(home) };
  }, [count]);

  useFrame((_state, delta) => {
    const geometry = geometryRef.current;
    if (!geometry) return;

    // Accumulate our own elapsed time from delta rather than reading
    // state.clock, which is a deprecated THREE.Clock. Clamping also stops a
    // backgrounded tab from handing back one huge frame and jumping the
    // wobble forward on return.
    elapsed.current += Math.min(delta, 0.1);
    const t = elapsed.current * 1000;

    const attribute = geometry.attributes.position;
    const array = attribute.array as Float32Array;
    const { x: mx, y: my } = pointer.current;

    for (let i = 0; i < count; i++) {
      const ix = i * 3;

      // Each star drifts around its own home on its own phase — there is no
      // global rotation anywhere in this design, which is why it never reads
      // as the whole field moving under you.
      const hx =
        home[ix] + (reducedMotion ? 0 : Math.sin(t / 2400 + i) * WOBBLE);
      const hy =
        home[ix + 1] +
        (reducedMotion ? 0 : Math.cos(t / 2900 + i * 1.3) * WOBBLE);

      let x = array[ix];
      let y = array[ix + 1];

      // The bubble: push radially away from the pointer, falling off to zero
      // at the radius. Purely local — stars outside it never move.
      const dx = x - mx;
      const dy = y - my;
      const d2 = dx * dx + dy * dy;
      if (d2 < REPEL_RADIUS_SQ) {
        const f = ((REPEL_RADIUS_SQ - d2) / REPEL_RADIUS_SQ) * REPEL_STRENGTH;
        const inv = 1 / Math.sqrt(d2 + 0.01);
        x += dx * inv * f;
        y += dy * inv * f;
      }

      array[ix] = x + (hx - x) * RETURN_RATE;
      array[ix + 1] = y + (hy - y) * RETURN_RATE;
    }

    attribute.needsUpdate = true;
  });

  return (
    <points>
      <bufferGeometry ref={geometryRef}>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color={STAR_COLOR}
        size={STAR_SIZE}
        transparent
        opacity={STAR_OPACITY}
      />
    </points>
  );
}
