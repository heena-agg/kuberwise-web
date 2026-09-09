import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/ui/Container';
import { Section } from '@/components/ui/Section';
import { Checklist } from '@/components/ui/Checklist';
import { ContactForm } from '@/components/contact/ContactForm';
import { EMAIL } from '@/lib/site';

const DIRECT = [
  { label: 'General', address: EMAIL.general },
  { label: 'Product — Stockraze', address: EMAIL.product },
  { label: 'Partnerships', address: EMAIL.partnerships },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-56 h-[28rem] bg-[radial-gradient(closest-side,rgb(var(--accent)/0.12),transparent)]"
      />
      <Container>
        <div className="relative py-24 sm:py-28">
          <p className="eyebrow">Contact</p>
          <h1 className="display mt-6 max-w-[17ch]">
            Send us one export from one site.
          </h1>
          <p className="lede mt-8 max-w-prose">
            We will come back with what Stockraze would have flagged against your
            own history, what it was worth, and what it would have suggested —
            before you commit to anything.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function ContactPage() {
  return (
    <PageShell brand="kuberwise">
      <Hero />

      <Section tight>
        <div className="grid gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="reveal">
            <ContactForm />
          </div>

          <aside className="reveal">
            <h2 className="h3">Prefer email?</h2>
            <ul className="mt-6 space-y-6">
              {DIRECT.map((item) => (
                <li key={item.address} className="border-t border-line pt-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.14em] text-ink-faint">
                    {item.label}
                  </p>
                  <a
                    href={`mailto:${item.address}`}
                    className="link-underline mt-2 inline-block text-ink"
                  >
                    {item.address}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-12 border-t border-line pt-8">
              <h2 className="h3">What helps us answer well</h2>
              <Checklist
                className="mt-6 text-sm"
                items={[
                  'What your inventory system is, and what it can export',
                  'How many sites you run',
                  'Which of the four leaks you suspect is costing you most',
                ]}
              />
              <p className="mt-6 text-sm leading-relaxed text-ink-soft">
                None of this is required. A sentence is enough to start.
              </p>
            </div>
          </aside>
        </div>
      </Section>
    </PageShell>
  );
}
