import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/ui/Container';
import { Section, SectionIntro } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { Checklist } from '@/components/ui/Checklist';
import { CtaPanel } from '@/components/ui/CtaPanel';
import { EMAIL } from '@/lib/site';

/*
 * TODO — no real figures anywhere on this page.
 *
 * The three stages below describe how an engagement is shaped, which is true
 * and useful on its own. Every price is deliberately absent rather than
 * invented. Before this page ships, either:
 *   a) fill in real numbers and delete the `PricingNotice` block, or
 *   b) keep it as-is — "talk to us" pricing is a legitimate position for a
 *      product at this stage, and the notice can simply be removed.
 * Do not publish with placeholder numbers standing in for real ones.
 */

const STAGES = [
  {
    name: 'Proof',
    summary: 'One site, your own history, before anything is installed.',
    price: 'Fixed fee',
    detail:
      'A paid pilot scoped to a single site. We take one export, run it through the detectors against your real history, and report what would have been flagged and what it was worth.',
    includes: [
      'One site, one data source',
      'All four detection strategies, tuned to your thresholds',
      'A written findings report with value at risk',
      'Nothing installed, nothing written back',
    ],
    cta: { label: 'Start a proof', href: 'contact.html' },
    featured: true,
  },
  {
    name: 'Rollout',
    summary: 'Per site, per month, once the proof has earned it.',
    price: 'Per site',
    detail:
      'Stockraze running nightly at each live site: sync, detection, incidents and the nightly digest, with the config console for your operators.',
    includes: [
      'Nightly sync, detection and digest per site',
      'Config console with per-site rules and dry run',
      'Edge or your-cloud deployment',
      'Email and file-share digest delivery',
    ],
    cta: { label: 'Talk about a rollout', href: 'contact.html' },
    featured: false,
  },
  {
    name: 'Partnership',
    summary: 'Multi-site estates, new verticals, custom detection.',
    price: 'Bespoke',
    detail:
      'For estates large enough that onboarding, detector design or integration work needs planning rather than a form. Priced against the engagement, not a seat count.',
    includes: [
      'Volume terms across an estate',
      'New detection strategies for your vertical',
      'Custom connectors and write-back scope',
      'A named contact and a rollout plan',
    ],
    cta: { label: 'Discuss a partnership', href: `mailto:${EMAIL.partnerships}` },
    featured: false,
  },
];

/** Remove once real pricing is agreed. See the TODO at the top of this file. */
function PricingNotice() {
  return (
    <div className="reveal rounded-2xl border border-dashed border-line-strong p-8">
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
        Placeholder — needs your input
      </p>
      <p className="mt-4 max-w-prose leading-relaxed text-ink-soft">
        The three stages below describe how an engagement is structured, which is
        accurate. No figures have been invented to fill the gaps. Send real
        numbers and they drop straight in — or decide that "talk to us" is the
        right position for now and this notice comes out on its own.
      </p>
    </div>
  );
}

function StageCard({ stage }: { stage: (typeof STAGES)[number] }) {
  return (
    <article
      className={
        stage.featured
          ? 'reveal rounded-2xl border border-accent/40 bg-surface p-8 shadow-lift'
          : 'reveal rounded-2xl border border-line bg-surface p-8'
      }
    >
      <div className="flex items-baseline justify-between gap-4">
        <h2 className="h3 text-xl">{stage.name}</h2>
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
          {stage.price}
        </span>
      </div>

      <p className="mt-4 text-ink">{stage.summary}</p>
      <p className="mt-4 leading-relaxed text-ink-soft">{stage.detail}</p>

      <div className="rule my-8" />

      <Checklist items={stage.includes} className="text-sm" />

      <div className="mt-10">
        <ButtonLink
          href={stage.cta.href}
          variant={stage.featured ? 'primary' : 'outline'}
          size="sm"
          withArrow
        >
          {stage.cta.label}
        </ButtonLink>
      </div>
    </article>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-56 h-[30rem] bg-[radial-gradient(closest-side,rgb(var(--accent)/0.12),transparent)]"
      />
      <Container>
        <div className="relative py-24 sm:py-28">
          <p className="eyebrow">Pricing</p>
          <h1 className="display mt-6 max-w-[16ch]">Prove it first. Then pay for it.</h1>
          <p className="lede mt-8 max-w-prose">
            Every engagement opens with a paid proof against your own data, at one
            site. If the number it finds is not worth acting on, there is nothing
            to roll out and we will tell you so.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function PricingPage() {
  return (
    <PageShell brand="kuberwise">
      <Hero />

      <Section tight>
        <PricingNotice />
      </Section>

      <Section tone="raised">
        <div className="grid gap-8 lg:grid-cols-3">
          {STAGES.map((stage) => (
            <StageCard key={stage.name} stage={stage} />
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="What moves the number"
            title="Three things, and none of them is seats."
            lede="Stockraze is priced against the estate it watches, not the number of people who log in. Adding a colleague to the console costs nothing."
          />
          <div className="reveal">
            <Checklist
              items={[
                'How many sites run nightly — the unit that actually scales',
                'Whether you deploy at the edge, in your cloud, or ask us to host',
                'Whether your vertical needs a detection strategy that does not exist yet',
              ]}
            />
            <p className="mt-8 leading-relaxed text-ink-soft">
              Data volume is not on that list. A busy site and a quiet one cost the
              same to watch.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="ink">
        <SectionIntro eyebrow="Questions we get asked" title="Before you ask." />

        <dl className="mt-14">
          {[
            {
              q: 'Do we have to move our data anywhere?',
              a: 'No. Stockraze is designed to run at the edge — in the store, in your data centre, or in your own cloud account. It reads what your systems already produce and writes its results beside them.',
            },
            {
              q: 'What happens at the end of a proof?',
              a: 'You get the findings report and the value at risk, and you decide. There is no automatic conversion to a subscription, and the proof is useful on its own even if you stop there.',
            },
            {
              q: 'Can it change our stock automatically?',
              a: 'Only if you switch that on, per site. The default is suggest-only: Stockraze raises the finding and your team accepts, defers or dismisses it.',
            },
            {
              q: 'Our export looks nothing like a standard format.',
              a: 'That is the normal case. The mapping wizard turns an arbitrary vendor export into the fields Stockraze reasons over, including a preview of the rows that would fail and why. It is configuration, not a release.',
            },
          ].map((item) => (
            <div
              key={item.q}
              className="reveal grid gap-4 border-t border-line py-8 md:grid-cols-[20rem_1fr] md:gap-12"
            >
              <dt className="h3">{item.q}</dt>
              <dd className="max-w-prose leading-relaxed text-ink-soft">{item.a}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section tone="raised">
        <CtaPanel
          title="Start with one site and one export."
          lede="We will come back with what Stockraze would have flagged and what it was worth. Figures for a rollout follow that conversation, not this page."
          actions={
            <>
              <ButtonLink href="contact.html" variant="accent" withArrow>
                Request pricing
              </ButtonLink>
              <ButtonLink href={`mailto:${EMAIL.general}`} variant="outline">
                {EMAIL.general}
              </ButtonLink>
            </>
          }
        />
      </Section>
    </PageShell>
  );
}
