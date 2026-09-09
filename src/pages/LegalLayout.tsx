import type { ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';

/**
 * Shared frame for the two legal pages.
 *
 * Both are structural templates, not legal text. The banner is deliberately
 * loud and deliberately hard to miss in a diff — it should be removed by the
 * same change that replaces the placeholder clauses with reviewed wording.
 */

export function Todo({ children }: { children: ReactNode }) {
  return (
    <span className="rounded bg-accent/12 px-1.5 py-0.5 font-mono text-[0.8125rem] text-accent">
      TODO — {children}
    </span>
  );
}

export function Clause({ heading, children }: { heading: string; children: ReactNode }) {
  return (
    <section className="border-t border-line py-10">
      <h2 className="h3 text-xl">{heading}</h2>
      <div className="mt-5 max-w-prose space-y-4 leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

export function LegalLayout({
  title,
  intro,
  children,
}: {
  title: string;
  intro: string;
  children: ReactNode;
}) {
  return (
    <PageShell brand="kuberwise">
      <Container>
        <div className="py-20 sm:py-24">
          <p className="eyebrow">Legal</p>
          <h1 className="display mt-6 text-[clamp(2.2rem,4.5vw,3.4rem)]">{title}</h1>
          <p className="lede mt-7 max-w-prose">{intro}</p>
        </div>
      </Container>

      <Section tight>
        <div
          role="note"
          className="flex gap-4 rounded-2xl border-2 border-dashed border-accent/50 bg-accent/[0.06] p-8"
        >
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
          <div className="max-w-prose">
            <p className="font-semibold text-ink">
              Not legal text. Do not publish this page as it stands.
            </p>
            <p className="mt-3 leading-relaxed text-ink-soft">
              What follows is a structure — the clauses a page like this normally
              carries, with every company-specific fact marked as a TODO. It has
              not been written or reviewed by a lawyer, and it makes no claim to
              be compliant with the DPDP Act, the GDPR, or any other regime.
              Have a qualified adviser draft or approve the wording, then delete
              this banner in the same change.
            </p>
          </div>
        </div>

        <div className="mt-14">{children}</div>

        <p className="mt-14 border-t border-line pt-8 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
          Last updated — TODO on publication
        </p>
      </Section>
    </PageShell>
  );
}
