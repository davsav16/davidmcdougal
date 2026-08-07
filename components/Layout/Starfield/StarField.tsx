"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import {
  CAMERA_FAR,
  CAMERA_FOV,
  CAMERA_NEAR,
  CAMERA_Z,
  FIELD_HEIGHT,
  FIELD_WIDTH,
  MAX_DPR,
  STAR_COUNT,
  STAR_FADE_MS,
} from "@/lib/constants";
import { Stars } from "./Stars";

type StarFieldProps = {
  count?: number;
};

/**
 * The app's one persistent WebGL layer, mounted in the root layout so it
 * survives client-side navigation. Port of the design's stars.js.
 */
export function StarField({ count = STAR_COUNT }: StarFieldProps) {
  // Parked far off-field so nothing is repelled until the pointer first moves.
  const pointer = useRef({ x: 999, y: 999 });

  // Decorative, so it must not gate first paint: the wrapper renders empty and
  // transparent, and the canvas only mounts on the frame after hydration.
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setReady(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  useEffect(() => {
    // The pointer is mapped into the same field units as the stars, so the
    // bubble sits exactly under the cursor at any viewport size.
    const onPointerMove = (event: PointerEvent) => {
      pointer.current.x =
        (event.clientX / window.innerWidth - 0.5) * FIELD_WIDTH;
      pointer.current.y =
        -(event.clientY / window.innerHeight - 0.5) * FIELD_HEIGHT;
    };
    window.addEventListener("pointermove", onPointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", onPointerMove);
  }, []);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        opacity: ready ? 1 : 0,
        transition: `opacity ${STAR_FADE_MS}ms ease-out`,
      }}
    >
      {ready && (
        <Canvas
          flat
          dpr={[1, MAX_DPR]}
          gl={{ alpha: true, antialias: true }}
          camera={{
            fov: CAMERA_FOV,
            position: [0, 0, CAMERA_Z],
            near: CAMERA_NEAR,
            far: CAMERA_FAR,
          }}
        >
          <Stars pointer={pointer} count={count} />
        </Canvas>
      )}
    </div>
  );
}
