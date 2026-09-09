import type { ReactNode } from 'react';

/**
 * One of the two dark anchor moments a page is allowed. Sits inside a light
 * section as a rounded panel rather than running full bleed.
 */
export function CtaPanel({
  eyebrow,
  title,
  lede,
  actions,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  actions: ReactNode;
}) {
  return (
    <div className="on-ink reveal relative overflow-hidden rounded-2xl bg-paper px-8 py-20 text-center sm:px-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 h-80 bg-[radial-gradient(closest-side,rgb(var(--accent)/0.18),transparent)]"
      />
      <div className="relative mx-auto max-w-prose">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h2 className={eyebrow ? 'h2 mt-5' : 'h2'}>{title}</h2>
        {lede ? <p className="lede mx-auto mt-6">{lede}</p> : null}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">{actions}</div>
      </div>
    </div>
  );
}
