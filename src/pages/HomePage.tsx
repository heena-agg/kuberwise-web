import { Eye, ListChecks, Zap } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/ui/Container';
import { Section, SectionIntro } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { FeatureCard, NumberedItem, Stat } from '@/components/ui/Card';
import { Checklist } from '@/components/ui/Checklist';
import { CtaPanel } from '@/components/ui/CtaPanel';
import { EMAIL } from '@/lib/site';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-56 h-[34rem] bg-[radial-gradient(closest-side,rgb(var(--accent)/0.13),transparent)]"
      />
      <Container>
        <div className="relative py-24 sm:py-32">
          <a
            href="stockraze.html"
            className="inline-flex items-center gap-2.5 rounded-full border border-line-strong px-4 py-1.5 text-sm text-ink-soft transition-colors hover:border-ink hover:text-ink"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
            Flagship product — Stockraze
          </a>

          <h1 className="display mt-9 max-w-[16ch]">The Intelligent Path to Value</h1>

          <p className="lede mt-8 max-w-prose">
            Most businesses do not have a data problem. They have a <em>value</em>{' '}
            problem — capital sitting still, stock quietly ageing, decisions
            arriving a week too late. Kuberwise builds the software that finds
            that value and puts it back in motion.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ButtonLink href="stockraze.html" variant="primary" withArrow>
              Explore Stockraze
            </ButtonLink>
            <ButtonLink href="contact.html" variant="outline">
              Talk to us
            </ButtonLink>
          </div>

          <p className="mt-12 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Kuber, the keeper of wealth. Wise, the judgment to use it well.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function HomePage() {
  return (
    <PageShell brand="kuberwise">
      <Hero />

      <Section tight>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <Stat value="4">
            Detection strategies shipped in Stockraze, each explainable in one line
          </Stat>
          <Stat value="1">
            Consolidated digest per site, per night — not an inbox of alerts
          </Stat>
          <Stat value="0">
            Changes written back to your stock without your explicit consent
          </Stat>
          <Stat value="Edge">
            Deployable in-store or in your cloud — your data stays where you want it
          </Stat>
        </div>
      </Section>

      <Section id="what-we-build" tone="raised">
        <SectionIntro
          eyebrow="What we build"
          title="Software that turns overlooked operational data into money you can count."
          lede="We are not a dashboard company. A dashboard tells you something is wrong. Our products tell you what to do about it, and hand the decision to the person standing closest to the problem."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <FeatureCard icon={<Eye className="h-5 w-5" />} title="See clearly">
            Operational data arrives in whatever shape the source vendor felt like.
            We normalise it into one honest picture — without asking you to replace
            the systems you already run.
          </FeatureCard>

          <FeatureCard icon={<ListChecks className="h-5 w-5" />} title="Decide with evidence">
            Every finding carries its reason, its value at risk, and the threshold
            that raised it. Rules are yours to tune, and you can dry-run a change
            before it touches a single live decision.
          </FeatureCard>

          <FeatureCard icon={<Zap className="h-5 w-5" />} title="Act before value leaks">
            Suggestions reach the floor while they are still worth acting on — one
            consolidated digest a night, addressed to the site that can actually do
            something about it.
          </FeatureCard>
        </div>
      </Section>

      <Section id="stockraze">
        <div className="on-ink reveal relative overflow-hidden rounded-2xl bg-paper px-8 py-16 sm:px-14 sm:py-20">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[radial-gradient(closest-side,rgb(59_130_246/0.22),transparent)]"
          />
          <div className="relative grid items-center gap-14 lg:grid-cols-[1.25fr_1fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-bright">
                Flagship product
              </p>
              <h2 className="h2 mt-5">Stockraze</h2>
              <p className="mt-4 text-xl font-medium text-ink">
                Clear the dead weight. Accelerate your flow.
              </p>
              <p className="mt-6 max-w-prose leading-relaxed text-ink-soft">
                Dead stock is the quietest expense a retailer carries. Stockraze
                reads your inventory every night, flags the lots that have stopped
                earning — ageing, expiring, unpicked, over-returned — prices the
                exposure, and suggests the action while there is still margin left
                to save.
              </p>

              <Checklist
                className="mt-8"
                items={[
                  'Connects to the systems you already run — file, REST or webhook',
                  "Maps any vendor's export without a code change",
                  'Suggests. Never silently rewrites your stock.',
                ]}
              />

              <div className="mt-10">
                <ButtonLink href="stockraze.html" variant="accent" withArrow>
                  See how Stockraze works
                </ButtonLink>
              </div>
            </div>

            <img
              src="/img/stockraze-logo-dark.png"
              alt="Stockraze"
              loading="lazy"
              width="600"
              height="200"
              className="mx-auto w-full max-w-sm"
            />
          </div>
        </div>
      </Section>

      <Section id="approach" tone="raised">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="How we work"
            title="Value first. Ceremony never."
            lede="We would rather ship one decision that saves real money than a quarter of discovery decks. Every engagement starts with the number we are trying to move."
          />

          <div>
            <NumberedItem index="01" title="Find the leak">
              We start with your own data and name the value that is currently
              walking out the door — in currency, not adjectives.
            </NumberedItem>
            <NumberedItem index="02" title="Prove it on a dry run">
              Before anything goes live, you see exactly what would have been
              flagged against your real history — and nothing is written.
            </NumberedItem>
            <NumberedItem index="03" title="Ship to one site">
              A single store, a single night, a single digest. If it does not earn
              its place there, it does not deserve a rollout.
            </NumberedItem>
            <NumberedItem index="04" title="Scale on evidence">
              New sites, new verticals, new rules — configured, not rebuilt.
              Onboarding a new format should not need an engineer.
            </NumberedItem>
          </div>
        </div>
      </Section>

      <Section id="about">
        <figure className="reveal mx-auto max-w-prose text-center">
          <p className="eyebrow">Our operating belief</p>
          <blockquote className="mt-7">
            <p className="font-display text-[clamp(1.6rem,3vw,2.4rem)] leading-[1.25] tracking-[-0.02em] text-ink">
              “Most of the value a business is looking for is already inside it.
              The work is not to create it — it is to notice it in time.”
            </p>
          </blockquote>
          <figcaption className="mt-7 font-mono text-xs uppercase tracking-[0.14em] text-ink-faint">
            Kuberwise
          </figcaption>
        </figure>

        <div className="mt-20 grid gap-10 md:grid-cols-3">
          <FeatureCard title="Explainable by default">
            If a system cannot say why it raised a finding, an operator will stop
            trusting it by week two. Every output we ship carries its reasoning.
          </FeatureCard>
          <FeatureCard title="The operator decides">
            Automation earns its scope. Our products suggest first and act only
            where you have explicitly said they may.
          </FeatureCard>
          <FeatureCard title="Your data, your ground">
            Edge-deployable by design, scoped credentials per site, and no
            cross-site access by default. Locality is a feature, not a fallback.
          </FeatureCard>
        </div>
      </Section>

      <Section id="contact" tone="raised">
        <CtaPanel
          title="Let's find what your operation is leaving on the shelf."
          lede="Send us one export from one site. We will come back with what Stockraze would have flagged, and what it was worth."
          actions={
            <>
              <ButtonLink href="contact.html" variant="accent" withArrow>
                Start the conversation
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
