import { PageShell } from '@/components/layout/PageShell';
import { Container } from '@/components/ui/Container';
import { Section, SectionIntro } from '@/components/ui/Section';
import { ButtonLink } from '@/components/ui/Button';
import { FeatureCard } from '@/components/ui/Card';
import { CtaPanel } from '@/components/ui/CtaPanel';
import { EMAIL } from '@/lib/site';

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-56 h-[30rem] bg-[radial-gradient(closest-side,rgb(var(--accent)/0.12),transparent)]"
      />
      <Container>
        <div className="relative py-24 sm:py-28">
          <p className="eyebrow">About</p>
          <h1 className="display mt-6 max-w-[18ch]">
            We build for the hour before the report.
          </h1>
          <p className="lede mt-8 max-w-prose">
            By the time a problem reaches a month-end summary, the cheap fix has
            already expired. Kuberwise exists to close that gap — to put the
            finding in front of the person who can still do something about it,
            while doing something is still worth it.
          </p>
        </div>
      </Container>
    </section>
  );
}

export function AboutPage() {
  return (
    <PageShell brand="kuberwise">
      <Hero />

      <Section tone="raised">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro eyebrow="The name" title="Kuber, and wise." />
          <div className="reveal space-y-6 leading-relaxed text-ink-soft">
            <p>
              Kuber is the keeper of wealth — the one who knows precisely what is
              held and where. That half of the name is about seeing clearly: an
              honest inventory of what a business actually has, not what its
              systems believe it has.
            </p>
            <p>
              The second half is the harder one. Knowing what you hold is
              bookkeeping. Knowing which part of it has stopped working for you,
              and acting before that costs you, is judgment. Software can carry
              far more of that judgment than most businesses currently ask of it.
            </p>
            <p className="text-ink">
              Wealth you cannot see is not wealth. Wealth you can see but cannot
              act on is barely better.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <SectionIntro
          eyebrow="Why we exist"
          title="Operational software stopped short."
          lede="A generation of tools got very good at showing you what happened. Very few of them got good at telling you what to do next, in time, to the person standing closest to it."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-3">
          <FeatureCard title="Dashboards ask the wrong thing">
            A dashboard hands the interpretation problem back to a person who has
            a floor to run. The useful unit is not a chart — it is a specific
            finding with a specific suggested action.
          </FeatureCard>
          <FeatureCard title="Alerts train people to ignore them">
            Anything that fires more often than it is useful gets filtered within
            a fortnight. One consolidated digest a night beats a hundred
            notifications nobody opens.
          </FeatureCard>
          <FeatureCard title="Rip-and-replace never happens">
            Businesses do not swap the systems that already work. Anything we
            build has to sit beside what you run today and read what it already
            produces.
          </FeatureCard>
        </div>
      </Section>

      <Section tone="ink">
        <SectionIntro
          eyebrow="What we believe"
          title="Four commitments we will not trade away."
          lede="These are the constraints we design inside. They cost us features occasionally, and we keep them anyway."
        />

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <FeatureCard title="Explainable by default">
            If a system cannot say why it raised a finding, an operator will stop
            trusting it by week two. Every output carries its reason, its
            threshold, and its value at risk.
          </FeatureCard>
          <FeatureCard title="The operator decides">
            Automation earns its scope over time. Our products suggest first and
            act only where someone has explicitly said they may — per site, never
            globally by default.
          </FeatureCard>
          <FeatureCard title="Your data, your ground">
            Edge-deployable by design, scoped credentials per site, no cross-site
            access. Locality is the default rather than an enterprise upsell.
          </FeatureCard>
          <FeatureCard title="Configuration over releases">
            A new vendor format, a new vertical, a new threshold — none of these
            should need an engineer or a deployment. If onboarding needs us, we
            have built it wrong.
          </FeatureCard>
        </div>
      </Section>

      <Section tone="raised">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionIntro
            eyebrow="How we engage"
            title="One site, one night, one number."
            lede="We would rather prove a single decision saves real money than run a quarter of discovery."
          />
          <div className="reveal space-y-6 leading-relaxed text-ink-soft">
            <p>
              Every engagement starts against your own history. We take one
              export from one site, run it through the detectors, and come back
              with what would have been flagged and what it was worth — before
              anything is installed and before you commit to anything.
            </p>
            <p>
              If that number is not worth acting on, we will say so. A pilot that
              does not earn its place at one site does not deserve a rollout to
              twenty.
            </p>
            <div className="pt-2">
              <ButtonLink href="index.html#approach" variant="outline" withArrow>
                Read the full approach
              </ButtonLink>
            </div>
          </div>
        </div>
      </Section>

      {/*
        TODO — founder section. Needs a real name, role, one-paragraph
        background and a photo before this ships. Written deliberately without
        specifics rather than with invented ones.
      */}
      <Section>
        <SectionIntro eyebrow="Who we are" title="The team" />
        <div className="reveal mt-12 max-w-prose rounded-2xl border border-dashed border-line-strong p-8">
          <p className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            Placeholder — needs your input
          </p>
          <p className="mt-4 leading-relaxed text-ink-soft">
            This section should carry the founder's name, role, a short
            background paragraph, and a photo. It is left blank rather than
            filled with plausible-sounding biography. Send the details and it
            takes ten minutes to finish.
          </p>
        </div>
      </Section>

      <Section tone="raised">
        <CtaPanel
          title="Tell us what your operation is leaking."
          lede="One export from one site is enough to start the conversation."
          actions={
            <>
              <ButtonLink href="contact.html" variant="accent" withArrow>
                Get in touch
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
