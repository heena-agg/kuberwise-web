import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/cn';

type Variant = 'primary' | 'accent' | 'outline' | 'quiet';
type Size = 'sm' | 'md';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium ' +
  'transition-[background-color,border-color,color,transform] duration-200 ' +
  'active:translate-y-px disabled:pointer-events-none disabled:opacity-55';

const variants: Record<Variant, string> = {
  // Near-black fill. The workhorse call to action on light sections.
  primary: 'bg-ink text-paper hover:bg-ink/90',
  // Theme accent: gold on Kuberwise pages, blue on Stockraze pages.
  accent: 'bg-accent text-accent-contrast hover:bg-accent-bright',
  outline: 'border border-line-strong bg-transparent text-ink hover:border-ink hover:bg-ink/[0.04]',
  quiet: 'bg-transparent text-ink-soft hover:text-ink',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[0.9375rem]',
};

export function buttonClasses(variant: Variant = 'primary', size: Size = 'md', className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface CommonProps {
  variant?: Variant;
  size?: Size;
  /** Appends a right arrow that nudges on hover. */
  withArrow?: boolean;
  children: ReactNode;
}

const arrow = (
  <ArrowRight
    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
    aria-hidden="true"
  />
);

export function Button({
  variant,
  size,
  withArrow,
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn('group', buttonClasses(variant, size, className))} {...props}>
      {children}
      {withArrow ? arrow : null}
    </button>
  );
}

export function ButtonLink({
  variant,
  size,
  withArrow,
  className,
  children,
  ...props
}: CommonProps & AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn('group', buttonClasses(variant, size, className))} {...props}>
      {children}
      {withArrow ? arrow : null}
    </a>
  );
}
