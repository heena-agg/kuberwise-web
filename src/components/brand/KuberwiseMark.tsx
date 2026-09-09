import { useId } from 'react';
import { cn } from '@/lib/cn';

/*
 * Vector rebuild of the Kuberwise mark: a solid rounded hexagon holding a
 * wealth pot, with a gold arrow rising out of the pot and breaking through the
 * hexagon's upper-right edge.
 *
 * Traced from the supplied artwork rather than embedded as a bitmap, so it
 * stays sharp at every size and can be reversed for dark surfaces. Geometry is
 * exported because the standalone files in `public/brand` and the favicon are
 * drawn from these same values and must not drift.
 *
 * Everything sits on a 32x32 grid. The hexagon is a plain polygon painted with
 * a thick round-joined stroke in its own colour, which is what produces the
 * rounded corners — the stroke offsets the outline by half its width and caps
 * each vertex with an arc, so the result is a true rounded hexagon without
 * hand-written corner arcs.
 */

/** Hexagon inset by the corner radius; the stroke below expands it back out. */
export const HEX_PATH = 'M16 4.12 26.29 10.06 26.29 21.94 16 27.88 5.71 21.94 5.71 10.06Z';

/** Twice the corner radius. */
export const HEX_ROUNDING = 6.24;

export const KNOB = { cx: 15.55, cy: 9.24, r: 1.38 } as const;
export const RIM = { x: 9.03, y: 9.54, width: 11.91, height: 1.72, rx: 0.86 } as const;
export const BODY = { cx: 15.55, cy: 17.75, r: 7.9 } as const;

/** The gap that separates the lid from the pot body. */
export const SLOT = { x: 12.37, y: 11.19, width: 8.87, height: 1.17, rx: 0.58 } as const;

/**
 * The curved channel carved out of the pot, which leaves the crescent along its
 * right edge. This is what gives the pot its depth; without it the mark reads
 * flat.
 */
export const CHANNEL_PATH =
  'M18.5 12.33C17.3 13.5 16.3 14.6 16.6 15.6 16.95 16.6 17.6 18.2 17.85 19.8 ' +
  '17.95 20.9 17.75 22.2 17.6 23.1 18.5 22.9 19.8 22.2 20.7 20.9 ' +
  '21.3 20 21.5 18.6 21.5 17.5 21.5 16.5 22.1 15.5 22.4 14.6L22.6 12.2Z';

export const ARROW_PATH =
  'M21.71 17 25.25 11.85 26.58 12.76 27.4 5.9 21.3 9.14 22.63 10.05 19.09 15.2Z';

/** Clear space held around the arrow where it crosses the pot. */
export const ARROW_CLEARANCE = 1.9;

export function KuberwiseMark({ className }: { className?: string }) {
  // `useId` emits colons, which are not valid inside a `url(#...)` reference.
  const maskId = `kw-pot-${useId().replace(/:/g, '')}`;

  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
      className={cn('h-8 w-8', className)}
    >
      <mask id={maskId} maskUnits="userSpaceOnUse" x="0" y="0" width="32" height="32">
        <rect width="32" height="32" fill="#fff" />
        <rect {...SLOT} fill="#000" />
        <path d={CHANNEL_PATH} fill="#000" />
        <path
          d={ARROW_PATH}
          fill="#000"
          stroke="#000"
          strokeWidth={ARROW_CLEARANCE}
          strokeLinejoin="round"
        />
      </mask>

      <path
        d={HEX_PATH}
        className="fill-brand-ink stroke-brand-ink"
        strokeWidth={HEX_ROUNDING}
        strokeLinejoin="round"
      />

      <g mask={`url(#${maskId})`} className="fill-mark-void">
        <circle {...KNOB} />
        <rect {...RIM} />
        <circle {...BODY} />
      </g>

      <path d={ARROW_PATH} className="fill-gold" />
    </svg>
  );
}
