import { cn } from '@/lib/cn';
import { KuberwiseMark } from './KuberwiseMark';

/**
 * Kuberwise horizontal lockup: mark plus wordmark, wrapped in a home link.
 *
 * The wordmark is set in the brand face rather than the page display face —
 * heavy, uppercase, and split navy/gold on the syllable, matching the supplied
 * artwork. `text-gold` is deliberately the full-strength logo gold even though
 * it is low contrast on paper; WCAG 1.4.3 exempts brand names, and dulling it
 * here would leave the logo not matching its own exported files.
 */
export function KuberwiseLogo({
  href = 'index.html',
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label="Kuberwise home"
      className={cn('group inline-flex items-center gap-2.5 rounded-lg', className)}
    >
      <KuberwiseMark className="h-8 w-8" />
      <span className="font-brand text-[1.1rem] font-extrabold uppercase leading-none tracking-[0.01em]">
        <span className="text-brand-ink">Kuber</span>
        <span className="text-gold">wise</span>
      </span>
    </a>
  );
}

/**
 * Stockraze lockup. The bolt is the product mark already used by the app icon;
 * it stays blue on both themes so the product reads consistently even when it
 * appears on a gold Kuberwise page.
 */
export function StockrazeLogo({
  href = 'index.html#stockraze',
  className,
}: {
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      aria-label="Stockraze home"
      className={cn('group inline-flex items-center gap-2.5 rounded-lg', className)}
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" aria-hidden="true" fill="none">
        <rect x="3" y="3" width="26" height="26" rx="7.5" className="fill-blue" />
        <path d="M17.8 7 10 18.2h5.4L13.9 25l8.4-11.6h-5.6L17.8 7Z" fill="#fff" />
      </svg>
      <span className="font-display text-[1.3rem] leading-none tracking-[-0.02em]">
        <span className="text-ink">Stock</span>
        <span className="text-blue-bright">raze</span>
      </span>
    </a>
  );
}
