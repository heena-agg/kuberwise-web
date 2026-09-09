import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from './Container';

type Tone = 'paper' | 'raised' | 'ink';

const tones: Record<Tone, string> = {
  paper: 'bg-paper',
  raised: 'bg-raised',
  // `on-ink` flips the surface and text tokens, so children need no dark variant.
  ink: 'on-ink bg-paper',
};

export function Section({
  id,
  tone = 'paper',
  tight,
  className,
  children,
}: {
  id?: string;
  tone?: Tone;
  /** Halves the vertical rhythm, for bands that sit against another section. */
  tight?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(tones[tone], tight ? 'py-14 sm:py-16' : 'py-24 sm:py-32', className)}
    >
      <Container>{children}</Container>
    </section>
  );
}

/** Eyebrow + heading + optional lede, the opening of nearly every section. */
export function SectionIntro({
  eyebrow,
  title,
  lede,
  align = 'left',
  className,
}: {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
}) {
  return (
    <div
      className={cn(
        'reveal max-w-prose',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className={cn('h2', eyebrow && 'mt-5')}>{title}</h2>
      {lede ? <p className="lede mt-6">{lede}</p> : null}
    </div>
  );
}
