import { Eye, ListChecks, Zap } from 'lucide-react';
import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/ui/Container';
import { Section, SectionIntro } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { FeatureCard, NumberedItem } from '@/components/ui/Card';
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
            href="#stockraze"
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
            <ButtonLink href="#stockraze" variant="primary" withArrow>
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

      <Section id="what-we-build" tone="raised">
        <SectionIntro
          eyebrow="What we build"
          title="Software that turns overlooked operational data into money you can count."
          lede="We are not a dashboard company. A dashboard tells you something is wrong. Our products tell you what to do about it, and hand the decision to the person standing closest to the problem."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <FeatureCard icon={<Eye className="h-5 w-5" />} title="See what is sitting still">
            Operational data arrives messy and incomplete. We turn it into one
            honest picture of where capital, time, and attention are idle — without
            asking you to replace the systems you already run.
          </FeatureCard>

          <FeatureCard icon={<ListChecks className="h-5 w-5" />} title="Decide with evidence">
            Every recommendation carries its reason and the value at stake. You
            keep the rules and the judgment. Nothing goes live until you have seen
            why it was raised, and said that it may.
          </FeatureCard>

          <FeatureCard icon={<Zap className="h-5 w-5" />} title="Put value back in motion">
            Insight is only useful while there is still something to save. We put
            the next move in front of the person who can take it — in time, not in
            a dashboard a week later.
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
                Our first product. It finds value sitting still in your operation
                and helps you move it — in time, not after the fact.
              </p>

              <div className="mt-10">
                <ButtonLink href="contact.html" variant="accent" withArrow>
                  Talk to us
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
            lede="Every engagement starts with the number we are trying to move. We ship decisions that put value back in motion — not a stack of unused reports."
          />

          <div>
            <NumberedItem index="01" title="Find what is idle">
              We start with your own data and name where value is sitting still —
              in numbers, not adjectives.
            </NumberedItem>
            <NumberedItem index="02" title="Prove it first">
              You see the case on your real history before anything goes live.
              Nothing changes until you say it may.
            </NumberedItem>
            <NumberedItem index="03" title="Start small">
              One team, one workflow. If it does not earn its place there, it
              does not deserve a rollout.
            </NumberedItem>
            <NumberedItem index="04" title="Scale on evidence">
              New teams, new use cases — configured, not rebuilt. Growth should
              not need a rewrite.
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
