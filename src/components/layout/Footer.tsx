import { Container } from '@/components/ui/Container';
import { KuberwiseLogo } from '@/components/brand/Wordmark';
import { COMPANY, EMAIL, FOOTER_COLUMNS } from '@/lib/site';

export function Footer() {
  return (
    <footer className="on-ink bg-paper">
      <Container>
        <div className="grid gap-12 py-20 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)]">
          <div>
            <KuberwiseLogo />
            <p className="mt-5 max-w-[34ch] text-sm leading-relaxed text-ink-soft">
              {COMPANY.tagline}. {COMPANY.blurb}
            </p>
            <a
              href={`mailto:${EMAIL.general}`}
              className="link-underline mt-6 inline-block text-sm text-ink"
            >
              {EMAIL.general}
            </a>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-ink-faint">
                {column.heading}
              </h2>
              <ul className="mt-5 space-y-3">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="rounded text-sm text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="rule" />

        <div className="flex flex-col gap-2 py-8 text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Kuberwise. All rights reserved.</p>
          <p className="font-mono">Stockraze is a Kuberwise product.</p>
        </div>
      </Container>
    </footer>
  );
}
