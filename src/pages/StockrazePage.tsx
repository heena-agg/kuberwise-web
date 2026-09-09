import { Building2, Check, Clock, FlaskConical, Mail, Plus } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/ui/Container';
import { Section, SectionIntro } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { FeatureCard, NumberedItem } from '@/components/ui/Card';
import { Checklist } from '@/components/ui/Checklist';
import { CtaPanel } from '@/components/ui/CtaPanel';
import { EMAIL } from '@/lib/site';

const PIPELINE = [
  {
    index: '01',
    title: 'Connect',
    body: 'Point Stockraze at whatever your site can already produce — a file drop, a REST endpoint, or a webhook your POS pushes to. One source per site is live at a time, so there is never a question of which feed is authoritative.',
  },
  {
    index: '02',
    title: 'Map',
    body: "A guided four-step wizard turns your vendor's export into the fields Stockraze reasons over. Paste a real sample, pick the array that holds the items, map each column, and preview the result — including the rows that would fail and why. Onboarding a new format takes configuration, not a release.",
  },
  {
    index: '03',
    title: 'Sync',
    body: 'Every night the active source is fetched, mapped and written to a clean inventory picture. Each run is recorded — rows accepted, rows rejected, and the exact reason for each rejection.',
  },
  {
    index: '04',
    title: 'Detect',
    body: 'Your rules run over the fresh picture. Thresholds are yours to set per site, and you can dry-run any change against real history before saving it — the preview writes nothing.',
  },
  {
    index: '05',
    title: 'Decide',
    body: 'Findings arrive as incidents — one row per SKU, expandable to the individual lots underneath, each with its value at risk and a suggested action. Your team accepts, defers or dismisses. Dismissing one does not blind the system to the next.',
  },
  {
    index: '06',
    title: 'Digest',
    body: 'One consolidated report per site, per night — delivered by email, written to a file share, or both. A night with nothing to report says so, rather than sending an all-clear nobody reads.',
  },
];

const DETECTORS = [
  {
    title: 'Expiry risk',
    body: 'Batches approaching their expiry date while quantity is still on hand. Catches the lot early enough that a markdown, a transfer or a bundle is still a real option.',
  },
  {
    title: 'Slow & dead stock',
    body: 'Lines that have not sold in longer than you are willing to fund. Surfaces the capital sitting still and the shelf space it is borrowing from something faster.',
  },
  {
    title: 'Allocation failure',
    body: 'Stock reserved on paper but never picked in practice. Frees inventory that your own system believes is already spoken for.',
  },
  {
    title: 'Return-rate risk',
    body: 'Products coming back often enough to erase their own margin. Flags the line before another season of it is ordered.',
  },
];

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-56 h-[34rem] bg-[radial-gradient(closest-side,rgb(var(--accent)/0.14),transparent)]"
      />
      <Container>
        <div className="relative py-24 sm:py-32">
          <a
            href="index.html"
            className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            A Kuberwise product
          </a>

          <h1 className="display mt-9 max-w-[15ch]">
            Clear the dead weight. Accelerate your flow.
          </h1>

          <p className="lede mt-8 max-w-prose">
            Stockraze reads your inventory every night, finds the lots that have
            stopped earning, prices exactly what they are costing you, and hands
            your team the action while there is still margin left to save.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="#how" variant="accent" withArrow>
              See how it works
            </ButtonLink>
            <ButtonLink href="contact.html" variant="outline">
              Request a walkthrough
            </ButtonLink>
          </div>

          <p className="mt-12 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Suggests, never silently rewrites. The operator keeps the last word.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function StockrazePage() {
  return (
    <PageShell brand="stockraze">
      <Hero />

      <Section id="problem">
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionIntro
            eyebrow="The problem"
            title="Dead stock is the quietest expense you carry."
            lede="Nothing alarms. Nothing breaks. Capital simply stops moving — and by the time it shows up in a month-end report, the window to recover it has already closed."
          />

          <div className="reveal">
            <Checklist
              items={[
                'Batches drift toward expiry while the shelf still looks full',
                'Slow movers hold shelf space that a faster SKU has earned',
                'Stock shows as allocated but never actually gets picked',
                'A returns rate quietly turns a profitable line unprofitable',
              ]}
            />
            <p className="mt-8 leading-relaxed text-ink-soft">
              Every one of these is visible in data you already collect. The gap is
              not measurement — it is <strong className="text-ink">noticing in time</strong>.
            </p>
          </div>
        </div>
      </Section>

      <Section id="how" tone="raised">
        <SectionIntro
          eyebrow="How it works"
          title="Six steps, once a night, without touching your systems."
          lede="Stockraze sits beside the systems you already run. It reads, it reasons, and it reports. It does not ask you to migrate anything."
        />

        <div className="mt-14 grid gap-x-14 md:grid-cols-2">
          {PIPELINE.map((step) => (
            <NumberedItem key={step.index} index={step.index} title={step.title}>
              {step.body}
            </NumberedItem>
          ))}
        </div>
      </Section>

      <Section id="detection" tone="ink">
        <SectionIntro
          eyebrow="Detection"
          title="Four ways stock stops earning. Stockraze watches all of them."
          lede="Each strategy is a plain rule with thresholds you control — not a black box. Every finding states which rule raised it and what it is worth."
        />

        <dl className="mt-16">
          {DETECTORS.map((detector) => (
            <div
              key={detector.title}
              className="reveal grid gap-4 border-t border-line py-8 md:grid-cols-[16rem_1fr] md:gap-12"
            >
              <dt className="h3">{detector.title}</dt>
              <dd className="max-w-prose leading-relaxed text-ink-soft">{detector.body}</dd>
            </div>
          ))}
        </dl>

        <p className="reveal mt-12 max-w-prose text-ink-soft">
          Detection only suggests. Nothing is written back to your stock unless you
          explicitly turn that on, per site.
        </p>
      </Section>

      <Section id="operators">
        <SectionIntro
          eyebrow="For operators"
          title="Built for the person on the floor, not the person in the deck."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          <FeatureCard icon={<Mail className="h-5 w-5" />} title="One digest, not an alert storm">
            Findings are consolidated into a single nightly report per site, with
            the total exposure on the first line.
          </FeatureCard>
          <FeatureCard icon={<FlaskConical className="h-5 w-5" />} title="Dry run before you commit">
            Change a threshold and see precisely what it would have raised against
            real data — before a single decision goes out.
          </FeatureCard>
          <FeatureCard icon={<Clock className="h-5 w-5" />} title="Everything is auditable">
            Every sync, every detection pass, every decision is recorded with a
            timestamp and an outcome you can go back and read.
          </FeatureCard>
          <FeatureCard icon={<Building2 className="h-5 w-5" />} title="Many sites, one console">
            Each store carries its own credential, its own rules and its own digest.
            A site can never see another site's data.
          </FeatureCard>
          <FeatureCard icon={<Plus className="h-5 w-5" />} title="New formats without engineering">
            A vertical with different field names — or no expiry dates at all — is
            onboarded through the mapping wizard alone.
          </FeatureCard>
          <FeatureCard icon={<Check className="h-5 w-5" />} title="Suggestions, not surprises">
            Stockraze never quietly changes your stock. Write-back exists, but only
            where you have switched it on.
          </FeatureCard>
        </div>
      </Section>

      <Section id="security" tone="raised">
        <div className="grid gap-16 lg:grid-cols-2">
          <SectionIntro
            eyebrow="Security & deployment"
            title="Runs where your data already lives."
            lede="Stockraze is designed to be deployed at the edge — in the store, in your data centre, or in your own cloud account. Locality is the default, not an enterprise upsell."
          />

          <div className="reveal">
            <Checklist
              items={[
                'Every API route is authenticated — there is no setting that turns it off',
                'Separate operator and site roles, with default-deny authorisation',
                'Each site gets its own API key; a site session cannot reach another site',
                'Path-traversal and SSRF protections on every inbound connector',
                'Fails to start rather than starting insecurely if credentials are missing',
              ]}
            />
          </div>
        </div>
      </Section>

      <Section id="start">
        <CtaPanel
          eyebrow="Get started"
          title="Send us one night of data from one store."
          lede="We will show you exactly what Stockraze would have flagged, what it was worth, and what it would have suggested — before you commit to anything."
          actions={
            <>
              <ButtonLink href="contact.html" variant="accent" withArrow>
                Request a walkthrough
              </ButtonLink>
              <ButtonLink href={`mailto:${EMAIL.product}`} variant="outline">
                {EMAIL.product}
              </ButtonLink>
            </>
          }
        />
      </Section>
    </PageShell>
  );
}
