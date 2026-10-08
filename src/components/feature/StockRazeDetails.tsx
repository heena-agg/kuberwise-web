import { CheckCircle2 } from 'lucide-react';
import { ButtonLink } from '@/components/ui/Button';
import { NumberedItem } from '@/components/ui/Card';
import { Section, SectionIntro } from '@/components/ui/Section';

const benefits = [
  'AI-powered insight for smarter inventory decisions across the operating week.',
  'Reduce revenue leaks and protect margin before stock becomes dead weight.',
  'Streamline stock management without adding complexity to the teams already on the ground.',
];

const StockRazeDetails = () => {
  return (
    <Section id="stockraze-details">
      <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionIntro
          eyebrow="StockRaze"
          title="A clearer way to move value through inventory."
          lede="StockRaze gives teams a single operating view of where stock is aging, where margin is leaking, and what should happen next."
        />

        <div>
          <NumberedItem index="01" title="Audit dead stock and ghost inventory">
            Identify hidden discrepancies across sales channels, supplier orders, and returns before they become financial drift.
          </NumberedItem>
          <NumberedItem index="02" title="Optimize markdown and liquidation choices">
            Balance velocity, margin, and seasonality to decide when to move stock and by how much.
          </NumberedItem>
          <NumberedItem index="03" title="Turn insight into action">
            Turn operational intelligence into bundle, campaign, and pricing decisions that keep the business moving.
          </NumberedItem>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-line bg-raised p-8 sm:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="eyebrow">Why choose StockRaze</p>
            <h3 className="h3 mt-4">Clearer decisions. Better cash flow.</h3>
          </div>

          <ButtonLink href="contact.html" variant="accent" withArrow>
            Learn more
          </ButtonLink>
        </div>

        <ul className="mt-8 space-y-4">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-accent" aria-hidden="true" />
              <span className="leading-relaxed text-ink-soft">{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default StockRazeDetails;