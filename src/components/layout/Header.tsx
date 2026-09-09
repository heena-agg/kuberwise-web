import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/cn';
import type { Brand } from '@/lib/seo';
import type { NavLink } from '@/lib/site';
import { Container } from '@/components/ui/Container';
import { ButtonLink } from '@/components/ui/Button';
import { KuberwiseLogo, StockrazeLogo } from '@/components/brand/Wordmark';

export function Header({
  brand,
  links,
  cta,
}: {
  brand: Brand;
  links: NavLink[];
  cta: NavLink;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // While the mobile panel is open: trap Escape, stop the page behind it from
  // scrolling, and close automatically once the viewport is wide enough for the
  // desktop nav to take over.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onBreakpointChange = () => {
      if (desktop.matches) setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpointChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpointChange);
    };
  }, [open]);

  const Logo = brand === 'stockraze' ? StockrazeLogo : KuberwiseLogo;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 transition-colors duration-300',
        scrolled ? 'border-b border-line bg-paper/85 backdrop-blur-md' : 'border-b border-transparent',
      )}
    >
      <Container>
        <div className="flex h-[4.5rem] items-center justify-between gap-6">
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded text-sm text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink href={cta.href} variant="primary" size="sm" className="hidden sm:inline-flex">
              {cta.label}
            </ButtonLink>

            <button
              ref={toggleRef}
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label={open ? 'Close navigation' : 'Open navigation'}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line-strong text-ink transition-colors hover:bg-ink/[0.04] lg:hidden"
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </Container>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-line bg-paper lg:hidden"
      >
        <Container>
          <nav aria-label="Primary (mobile)" className="flex flex-col py-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-1 py-3 text-[0.9375rem] text-ink-soft transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <ButtonLink
              href={cta.href}
              variant="primary"
              size="sm"
              className="mt-3 self-start sm:hidden"
              onClick={() => setOpen(false)}
            >
              {cta.label}
            </ButtonLink>
          </nav>
        </Container>
      </div>
    </header>
  );
}
