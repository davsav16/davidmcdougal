/**
 * Shared constants.
 *
 * Values ported from a design source are marked as such — change the design
 * first, then mirror it here, so the two never drift apart silently.
 */

/* ──────────────────────────────────────────────────────────────────────────
   Starfield
   Ported verbatim from the design project's stars.js
   ("Portfolio website for David McDougal"). Do not retune in isolation.
   ────────────────────────────────────────────────────────────────────────── */

/** Number of stars in the field. */
export const STAR_COUNT = 1600;

export const STAR_COLOR = "#9184d9";
export const STAR_SIZE = 0.14;
export const STAR_OPACITY = 0.85;

/**
 * Seed for the position PRNG. Not from the design — stars.js uses
 * Math.random(), which is impure in render and reshuffles on remount.
 */
export const STAR_SEED = 20260807;

/** The box stars are scattered through, in world units. */
export const FIELD_WIDTH = 62;
export const FIELD_HEIGHT = 34;
export const FIELD_DEPTH = 8;

/** Repulsion radius, squared: stars within 6 units of the pointer move. */
export const REPEL_RADIUS_SQ = 36;
export const REPEL_STRENGTH = 0.9;

/** Per-frame lerp back toward the home position — what closes the bubble. */
export const RETURN_RATE = 0.04;

/** Amplitude of the idle per-star wobble. */
export const WOBBLE = 0.4;

export const CAMERA_FOV = 50;
export const CAMERA_Z = 30;
export const CAMERA_NEAR = 0.1;
export const CAMERA_FAR = 100;

/** Device-pixel-ratio ceiling — the design clamps at Math.min(dpr, 2). */
export const MAX_DPR = 2;

/**
 * Fade-in for the canvas, in ms. Not from the design: unlike stars.js we
 * mount after hydration, so without this the field pops in.
 */
export const STAR_FADE_MS = 600;
