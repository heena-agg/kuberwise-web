import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

/**
 * Editorial card: a hairline rule above the content rather than a box around
 * it. Keeps a dense grid feeling open, which is the point of the light design.
 */
export function FeatureCard({
  icon,
  title,
  className,
  children,
}: {
  icon?: ReactNode;
  title: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <article className={cn('reveal border-t border-line pt-7', className)}>
      {icon ? (
        <span
          className="mb-6 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent"
          aria-hidden="true"
        >
          {icon}
        </span>
      ) : null}
      <h3 className="h3">{title}</h3>
      <p className="mt-3 leading-relaxed text-ink-soft">{children}</p>
    </article>
  );
}

/** Large figure over a caption, used in the band under the hero. */
export function Stat({ value, children }: { value: string; children: ReactNode }) {
  return (
    <div className="reveal border-t border-line pt-6">
      <div className="font-display text-[2.75rem] leading-none tracking-[-0.03em] text-ink">
        {value}
      </div>
      <p className="mt-4 text-sm leading-relaxed text-ink-soft">{children}</p>
    </div>
  );
}

/** Numbered step with a rule above it, for the "how we work" sequence. */
export function NumberedItem({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="reveal grid grid-cols-[auto_1fr] gap-x-6 border-t border-line py-7">
      <span className="font-mono text-sm text-accent">{index}</span>
      <div>
        <h3 className="h3">{title}</h3>
        <p className="mt-2.5 leading-relaxed text-ink-soft">{children}</p>
      </div>
    </div>
  );
}
